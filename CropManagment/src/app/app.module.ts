import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomNavComponent } from './Shared/Components/bottom-nav/bottom-nav.component';
import { TopNavComponent } from './Shared/Components/top-nav/top-nav.component';
import { LoginAuth } from './Modules/Login/login.component';
import { HomeComponent } from './Modules/home/home.component';
import { AddNewCrop } from './Modules/home/Components/Drawer/addcropdrawer.component';
 

@NgModule({
  declarations: [
    AppComponent,
    BottomNavComponent,
    TopNavComponent,
    LoginAuth,
    HomeComponent,
    AddNewCrop
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
