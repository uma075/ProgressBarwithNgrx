import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ProductsSandbox } from './products.sandbox';
import { CustomMaterialModule } from '../shared/custom-meterial.module';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  declarations: [ProductListComponent],
  providers:[ProductsSandbox]
})
export class ProductsModule { }
