import { createStore, Dispatch, combineReducers } from 'redux';
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
  useStore as useReduxStore,
  useDispatch as useReduxDispatch,
} from 'react-redux';
import { editor } from './editor/reducers';
import { EditorState, EditorActions } from './editor/types';

import { component } from './component/reducers';
import { ComponentState, ComponentActions } from './component/types';

export { createWorkspace, restoreWorkspace } from './editor/actions';

interface RootState {
  editor: EditorState;
  component: ComponentState;
}

type RootActions = EditorActions;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useStore = () => useReduxStore<RootState, RootActions>();
export const useDispatch = () => useReduxDispatch<Dispatch<RootActions>>();

const rootReducers = combineReducers<RootState>({
  editor,
  component,
});
export const store = createStore(rootReducers);
