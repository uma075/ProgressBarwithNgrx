import { Action } from '@ngrx/store';

export const LOADING = '[APP] LOADING';

export class SetLaoding implements Action {
    readonly type = LOADING;
    constructor(public payload?: boolean) { }
}

export type Actions =
    SetLaoding;
