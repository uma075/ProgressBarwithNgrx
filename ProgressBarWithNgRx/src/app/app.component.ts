import { Component } from '@angular/core';
import { SharedSandbox } from './shared/shared.sandbox';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  isLoading$: Observable<boolean>;
  constructor(private sharedSandbox: SharedSandbox) {
    this.isLoading$ = this.sharedSandbox.getProgress();
  }
}
