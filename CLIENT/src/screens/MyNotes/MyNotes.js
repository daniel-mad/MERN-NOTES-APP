import React from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import notes from "../../data/notes";

const MyNotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      console.log(id);
    }
  };

  return (
    <MainScreen title="Welcom Back Daniel Madhala...">
      <Link to="createnote">
        <Button size="lg">Create New Note</Button>
      </Link>
      {notes.map((note) => (
        <Accordion>
          <Card style={{ margin: "1rem 0" }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  flex: 1,
                  color: "#333",
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: "1.2rem",
                }}
              >
                <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                  {note.title}
                </Accordion.Toggle>
              </span>
              <div>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>

            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <h4>
                  <Badge variant="success">{note.category}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Created On - {new Date().toLocaleString("HE")}
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
