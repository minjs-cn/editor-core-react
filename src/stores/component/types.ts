import { Action, Reducer } from 'redux';
import { BasicComponentType } from 'src/packages';

export const ADD_COMPONENT = 'ADD_COMPONENT';

export interface AddComponent extends Action<typeof ADD_COMPONENT> {}

export type ComponentActions = AddComponent;

export interface ComponentState {
  basic: BasicComponentType[];
}

export type ComponentReducer = Reducer<ComponentState, ComponentActions>;
