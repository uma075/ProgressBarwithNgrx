import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterEvent } from '@angular/router';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductsModule } from './products/products.module';
import { HomeComponent } from './home/home.component';
import { CustomMaterialModule } from './shared/custom-meterial.module';
import { SharedSandbox } from './shared/shared.sandbox';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'products',
    component: ProductListComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    CustomMaterialModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}),
    SharedModule
  ],
  providers: [SharedSandbox],
  bootstrap: [AppComponent]
})
export class AppModule { }
