import {
  NOTES_CREATE_FAIL,
  NOTES_CREATE_REQUEST,
  NOTES_CREATE_SUCCESS,
  NOTES_LIST_FAIL,
  NOTES_LIST_REQUEST,
  NOTES_LIST_SUCCESS,
} from "../constants/notesConstans";

export const noteListReducer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case NOTES_LIST_REQUEST:
      return { loading: true, error: null };
    case NOTES_LIST_SUCCESS:
      return { loading: false, notes: action.payload };
    case NOTES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const noteCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTES_CREATE_REQUEST:
      return { loading: true };
    case NOTES_CREATE_SUCCESS:
      return { loading: false, success: true };
    case NOTES_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
