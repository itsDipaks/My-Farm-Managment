import { Component } from '@angular/core';

@Component({
  selector: 'app-add-feild-drawer',
  templateUrl: './add-feild-drawer.component.html',
  styleUrls: ['./add-feild-drawer.component.scss']
})
export class AddFeildDrawerComponent {
  isDrawerOpen: boolean = true;
  isdraweropen() {
    this.isDrawerOpen = !this.isDrawerOpen;
}
}
