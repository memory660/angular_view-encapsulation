import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoneEncapsulationComponent } from './none-encapsulation/none-encapsulation.component';
import { EmulatedEncapsulationComponent } from './emulated-encapsulation/emulated-encapsulation.component';
import { ShadowdomEncapsulationComponent } from './shadowdom-encapsulation/shadowdom-encapsulation.component';
import { ShadowdomEncapsulationChildComponent } from './shadowdom-encapsulation-child/shadowdom-encapsulation-child.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    NoneEncapsulationComponent,
    EmulatedEncapsulationComponent,
    ShadowdomEncapsulationComponent,
    ShadowdomEncapsulationChildComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
