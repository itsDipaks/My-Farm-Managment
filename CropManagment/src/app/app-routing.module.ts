import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectNewCrop } from './Modules/home/Components/SelectCrop/selectcrop.component';
import { AddCropForm } from './Modules/home/Components/AddCropForm/addcropform.component';

const routes: Routes = [

  { path: '*/', component:SelectNewCrop  },
  { path: '*/form', component:AddCropForm },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
