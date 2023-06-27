import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent implements OnInit{

  isdetailspage:boolean=true
constructor(private router:Router){

}
ngOnInit(): void {
  this.router.events.subscribe((res: any) => {
    if( res?.url?.includes("cropdetails")){
      this.isdetailspage=true
    }
  })
 
}





}