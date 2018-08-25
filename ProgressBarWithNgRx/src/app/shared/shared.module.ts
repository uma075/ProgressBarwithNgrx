import { SpinnerComponent } from "./components/spinner/spinner.component";
import { NgModule } from "@angular/core";
import { CustomMaterialModule } from "./custom-meterial.module";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  imports: [  
    BrowserModule,
    CustomMaterialModule
  ],
  declarations: [SpinnerComponent],
  exports: [SpinnerComponent]  
})

export class SharedModule { }
