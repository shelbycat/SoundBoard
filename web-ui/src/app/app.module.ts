import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from './modules/material-module/material-module.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './routes/about/about.component';
import { MixerComponent } from './routes/mixer/mixer.component';

@NgModule({
  declarations: [AppComponent, AboutComponent, MixerComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
