import { Component } from '@angular/core';

@Component({
  selector: 'app-sheard-drawer',
  templateUrl: './sheard-drawer.component.html',
  styleUrls: ['./sheard-drawer.component.scss']
})
export class SheardDrawerComponent {
  isDrawerOpen: boolean = true;
  isdraweropen() {




    
    this.isDrawerOpen = !this.isDrawerOpen;
}
}
