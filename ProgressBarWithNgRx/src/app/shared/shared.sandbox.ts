import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { SetLaoding } from './state-management/actions/progress.action';
import * as sharedReducer from './state-management/reducers/shared-reducer.map';

@Injectable()
export class SharedSandbox {

    constructor(public store: Store<any>) { }


    public getProgress(): Observable<boolean> {
        return this.store.select(sharedReducer.progressSelector);
    }

    public setProgress(isLoading: boolean) {
        setTimeout(() => {
            this.store.dispatch(new SetLaoding(isLoading));
        });
    }
}
