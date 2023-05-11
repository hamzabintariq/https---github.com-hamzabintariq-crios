import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Body1Component } from './components/body1/body1.component';
import { Body2Component } from './components/body2/body2.component';
import { Body3Component } from './components/body3/body3.component';
import { Body4Component } from './components/body4/body4.component';
import { Body5Component } from './components/body5/body5.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Body1Component,
    Body2Component,
    Body3Component,
    Body4Component,
    Body5Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
