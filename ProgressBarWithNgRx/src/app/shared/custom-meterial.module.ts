import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconRegistry, MatProgressSpinnerModule } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  imports: [
   MatProgressSpinnerModule
  ],
  exports: [
    MatProgressSpinnerModule
  ]
})
export class CustomMaterialModule {
  constructor() {  
  }
}
