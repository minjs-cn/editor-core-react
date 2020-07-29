import { UserActions, CREATE_WORKSPACE, RESTORE_WORKSPACE } from './actions';
import { WorkJson, Work, Page, Element } from '@minjs/editor-core';
import { Reducer } from 'redux';

export interface UserState {
  works: WorkJson[];
  work: Work | null;
  page: Page | null;
  element: Element | null;
}

const initialState: UserState = {
  works: [],
  work: null,
  page: null,
  element: null,
};

type userReducer = Reducer<UserState, UserActions>;

export const user: userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_WORKSPACE:
      return state;
    case RESTORE_WORKSPACE:
      return state;
    default:
      return state;
  }
};
