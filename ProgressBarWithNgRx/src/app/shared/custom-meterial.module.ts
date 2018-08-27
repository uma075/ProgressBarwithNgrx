import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconRegistry, MatProgressSpinnerModule, MatButtonModule } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  imports: [
   MatProgressSpinnerModule,
   MatButtonModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatButtonModule
  ]
})
export class CustomMaterialModule {
  constructor() {  
  }
}
