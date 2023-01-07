import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Ejer1Component } from './ejer1/ejer1.component';
import { Ejer2Component } from './ejer2/ejer2.component';
import { Ejer3Component } from './ejer3/ejer3.component';

@NgModule({
  declarations: [
    AppComponent,
    Ejer1Component,
    Ejer2Component,
    Ejer3Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
