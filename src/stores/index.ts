import { createStore, Dispatch, combineReducers } from 'redux';
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
  useStore as useReduxStore,
  useDispatch as useReduxDispatch,
} from 'react-redux';
import { work, WorkState } from './work/reducers';
import { WorkActions } from './work/actions';

import { user, UserState } from './user/reducers';
import { UserActions } from './user/actions';

export { createWorkspace, restoreWorkspace } from './work/actions';

interface RootState {
  editor: WorkState;
  user: UserState;
}

type RootActions = WorkActions | UserActions;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useStore = () => useReduxStore<RootState, RootActions>();
export const useDispatch = () => useReduxDispatch<Dispatch<RootActions>>();

const rootReducers = combineReducers<RootState>({
  editor: work,
  user,
});
export const store = createStore(rootReducers);
