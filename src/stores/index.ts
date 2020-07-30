import { createStore, Dispatch, combineReducers } from 'redux';
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
  useStore as useReduxStore,
  useDispatch as useReduxDispatch,
} from 'react-redux';
import { editor } from './editor/reducers';
import { EditorState, EditorActions } from './editor/types';

export { createWorkspace, restoreWorkspace } from './editor/actions';

interface RootState {
  editor: EditorState;
}

type RootActions = EditorActions;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useStore = () => useReduxStore<RootState, RootActions>();
export const useDispatch = () => useReduxDispatch<Dispatch<RootActions>>();

const rootReducers = combineReducers<RootState>({
  editor,
});
export const store = createStore(rootReducers);
