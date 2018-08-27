import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { SharedSandbox } from '../shared/shared.sandbox';

@Injectable()
export class ProductsSandbox extends SharedSandbox {

    constructor(public store: Store<any>) {
        super(store);
    }    
}
