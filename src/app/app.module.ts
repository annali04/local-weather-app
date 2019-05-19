import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeatherService } from './weather/weather.service';
//all component and services need to be auto imported
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent
  ],
  imports: [ //libraries/API
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //make http call to api
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
