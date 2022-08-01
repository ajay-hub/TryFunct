import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import {HttpClientModule} from '@angular/common/http';
import { DisplayNgoDetailsComponent } from './display-ngo-details/display-ngo-details.component';
import { UserLoginComponent } from './user-login/user-login.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    DisplayNgoDetailsComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
