import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomNavComponent } from './Shared/Components/bottom-nav/bottom-nav.component';
import { TopNavComponent } from './Shared/Components/top-nav/top-nav.component';
import { LoginAuth } from './Modules/Login/login.component';
import { HomeComponent } from './Modules/home/home.component';
import { AddCropDrawer } from './Modules/home/Components/Drawer/drawer.component';
import { SelectNewCrop } from './Modules/home/Components/SelectCrop/selectcrop.component';
import { AddCropForm } from './Modules/home/Components/AddCropForm/addcropform.component';
 

@NgModule({
  declarations: [
    AppComponent,
    BottomNavComponent,
    TopNavComponent,
    LoginAuth,
    HomeComponent,
    SelectNewCrop,
    AddCropDrawer,
    AddCropForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
