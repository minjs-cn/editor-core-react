import { WorkActions, CREATE_WORKSPACE, RESTORE_WORKSPACE } from './actions';
import { WorkJson, Work, Page, Element } from '@minjs/editor-core';
import { Reducer } from 'redux';

export interface WorkState {
  works: WorkJson[];
  work: Work | null;
  page: Page | null;
  element: Element | null;
}

const initialState: WorkState = {
  works: [],
  work: null,
  page: null,
  element: null,
};

type workReducer = Reducer<WorkState, WorkActions>;

export const work: workReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_WORKSPACE:
      return state;
    case RESTORE_WORKSPACE:
      return state;
    default:
      return state;
  }
};
