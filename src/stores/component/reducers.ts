import { ComponentState, ComponentReducer, ADD_COMPONENT } from './types';

const initialState: ComponentState = {
  basic: [],
};

export const component: ComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPONENT:
      return state;
    default:
      return state;
  }
};
