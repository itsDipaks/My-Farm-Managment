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
import { CropDetailsComponent } from './Modules/crop-details/crop-details.component';
import { CropSprayComponent } from './Modules/crop-details/Components/crop-spray/crop-spray.component';
import { CropIncomeComponent } from './Modules/crop-details/Components/crop-income/crop-income.component';
import { CropFosteredComponent } from './Modules/crop-details/Components/crop-fostered/crop-fostered.component';
import { CropDetailHomeComponent } from './Modules/crop-details/Components/crop-detail-home/crop-detail-home.component';
import { NavDropdawonComponent } from './Shared/Components/nav-dropdawon/nav-dropdawon.component';
import { SheardDrawerComponent } from './Shared/Components/sheard-drawer/sheard-drawer.component';
import { AddFeildDrawerComponent } from './modules/crop-details/Components/add-feild-drawer/add-feild-drawer.component';

@NgModule({
  declarations: [
    AppComponent,
    BottomNavComponent,
    TopNavComponent,
    LoginAuth,
    HomeComponent,
    SelectNewCrop,
    AddCropDrawer,
    AddCropForm,
    CropDetailsComponent,
    CropSprayComponent,
    CropIncomeComponent,
    CropFosteredComponent,
    CropDetailHomeComponent,
    NavDropdawonComponent,
    SheardDrawerComponent,
    AddFeildDrawerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
