import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomNavComponent } from './Shared/Components/bottom-nav/bottom-nav.component';
import { TopNavComponent } from './Shared/Components/top-nav/top-nav.component';
import { LoginAuth } from './Modules/Login/login.component';
 

@NgModule({
  declarations: [
    AppComponent,
    BottomNavComponent,
    TopNavComponent,
    LoginAuth
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
