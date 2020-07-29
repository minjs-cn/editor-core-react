import { WorkJson } from '@minjs/editor-core';

export const CREATE_WORKSPACE = 'CREATE_WORKSPACE';
export const RESTORE_WORKSPACE = 'RESTORE_WORKSPACE';

export interface createWorkspace {
  type: typeof CREATE_WORKSPACE;
}

export const createWorkspace = () => ({
  type: CREATE_WORKSPACE,
});

export interface restoreWorkspace {
  type: typeof RESTORE_WORKSPACE;
  work: WorkJson;
}

export const restoreWorkspace = (work: WorkJson) => ({
  type: RESTORE_WORKSPACE,
  work,
});

export type UserActions = createWorkspace | restoreWorkspace;
