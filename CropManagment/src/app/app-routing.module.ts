import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Modules/home/home.component';
import { CropDetailsComponent } from './Modules/crop-details/crop-details.component';
import { LoginAuth } from './Modules/Login/login.component';
import { CropFosteredComponent } from './Modules/crop-details/Components/crop-fostered/crop-fostered.component';
import { CropIncomeComponent } from './Modules/crop-details/Components/crop-income/crop-income.component';
import { CropSprayComponent } from './Modules/crop-details/Components/crop-spray/crop-spray.component';
import { CropDetailHomeComponent } from './Modules/crop-details/Components/crop-detail-home/crop-detail-home.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginAuth },
  {
    path: 'cropdetails/:id', component: CropDetailsComponent
    , children: [
      { path: '', component: CropDetailHomeComponent },
      { path: 'fostered', component: CropFosteredComponent },
      { path: 'income', component: CropIncomeComponent },
      { path: 'spray', component: CropSprayComponent }
    ]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
