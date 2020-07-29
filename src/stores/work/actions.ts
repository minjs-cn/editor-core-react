import { WorkJson } from '@minjs/editor-core';
import { Action } from 'redux';

export const CREATE_WORKSPACE = 'CREATE_WORKSPACE';
export const RESTORE_WORKSPACE = 'RESTORE_WORKSPACE';

export interface CreateWorkspace extends Action<typeof CREATE_WORKSPACE> {}

export const createWorkspace = () => ({
  type: CREATE_WORKSPACE,
});

export interface RestoreWorkspace extends Action<typeof RESTORE_WORKSPACE> {
  work: WorkJson;
}

export const restoreWorkspace = (work: WorkJson) => ({
  type: RESTORE_WORKSPACE,
  work,
});

export type WorkActions = CreateWorkspace | RestoreWorkspace;
