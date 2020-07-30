import { WorkJson } from '@minjs/editor-core';
import { CREATE_WORKSPACE, RESTORE_WORKSPACE } from './types';

export const createWorkspace = () => ({
  type: CREATE_WORKSPACE,
});

export const restoreWorkspace = (work: WorkJson) => ({
  type: RESTORE_WORKSPACE,
  work,
});
