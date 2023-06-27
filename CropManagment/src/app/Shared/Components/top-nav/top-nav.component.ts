import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit{
constructor(private router:Router){

}
isonHome:boolean=true
ngOnInit(): void {
  this.router.events.subscribe((res: any) => {
    if( !res.url?.includes("login")){
      this.isonHome=false
    }
  })
}
}
