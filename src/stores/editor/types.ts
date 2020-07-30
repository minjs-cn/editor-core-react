import { WorkJson, Work, Page, Element } from '@minjs/editor-core';
import { Action, Reducer } from 'redux';

export const CREATE_WORKSPACE = 'CREATE_WORKSPACE';
export const RESTORE_WORKSPACE = 'RESTORE_WORKSPACE';

export interface CreateWorkspace extends Action<typeof CREATE_WORKSPACE> {}
export interface RestoreWorkspace extends Action<typeof RESTORE_WORKSPACE> {
  work: WorkJson;
}

export type EditorActions = CreateWorkspace | RestoreWorkspace;

export interface EditorState {
  work: Work | null;
  page: Page | null;
  element: Element | null;
}

export type EditorReducer = Reducer<EditorState, EditorActions>;
