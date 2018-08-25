import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import { progressReducer, ProgressState } from './progress.reducer';



export interface SharedState {
    progressState: ProgressState
}

export const sharedReducers: ActionReducerMap<SharedState> = {
    progressState: progressReducer
};

const sharedfeatureSelector = createFeatureSelector<SharedState>(
    'sharedfeature'
);

export const progressSelector = createSelector(
    sharedfeatureSelector,
    s => s.progressState.isLoading
);