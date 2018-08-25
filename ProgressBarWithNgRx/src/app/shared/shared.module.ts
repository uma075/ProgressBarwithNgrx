import { SpinnerComponent } from "./components/spinner/spinner.component";
import { NgModule } from "@angular/core";
import { CustomMaterialModule } from "./custom-meterial.module";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "@ngrx/store";
import { sharedReducers } from "./state-management/reducers/shared-reducer.map";
import { SharedSandbox } from "./shared.sandbox";

@NgModule({
  imports: [  
    BrowserModule,
    CustomMaterialModule,
    StoreModule.forFeature('sharedfeature', sharedReducers)
  ],
  declarations: [SpinnerComponent],
  exports: [SpinnerComponent]  ,
  providers:[SharedSandbox]
})

export class SharedModule { }
