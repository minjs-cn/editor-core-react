import { EditorState, EditorReducer, CREATE_WORKSPACE, RESTORE_WORKSPACE } from './types';

const initialState: EditorState = {
  work: null,
  page: null,
  element: null,
};

export const editor: EditorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_WORKSPACE:
      return state;
    case RESTORE_WORKSPACE:
      return state;
    default:
      return state;
  }
};
