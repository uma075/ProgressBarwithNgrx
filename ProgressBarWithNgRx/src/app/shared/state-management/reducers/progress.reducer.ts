import * as Actions from '../actions/progress.action';

export interface ProgressState {
    isLoading: boolean;
}

export const initialState: ProgressState = {
    isLoading: false
};

export function progressReducer(
    state = initialState,
    action: Actions.Actions
): ProgressState {
    switch (action.type) {
        case Actions.LOADING:
            return { ...state, isLoading: action.payload };

        default:
            return initialState;
    }
}

