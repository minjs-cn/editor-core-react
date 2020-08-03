import { ComponentState, ComponentReducer, ADD_COMPONENT } from './types';
import { basicComponents } from 'src/packages/index';

const initialState: ComponentState = {
  basicComponents,
};

export const component: ComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPONENT:
      return state;
    default:
      return state;
  }
};
