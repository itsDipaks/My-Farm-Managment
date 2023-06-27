import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 constructor(private router:Router){

 }
data=[
  {id:1,cropname:"soyabeen"},
  {id:2,cropname:"Corn"},
  {id:3,cropname:"Cabbaze"},
  {id:4,cropname:"Carrot"},
  {id:5,cropname:"Flower"},
]

CropDetails(item:any){

  this.router.navigate(['/cropdetails', item.id]);
}
 
}
