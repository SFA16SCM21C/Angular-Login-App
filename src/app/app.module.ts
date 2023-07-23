import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//new components for the project
import { LoginComponent } from './login/login.component';
import { AuthServiceComponent } from './auth-service/auth-service.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
