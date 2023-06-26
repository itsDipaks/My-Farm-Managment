import {Component,Input,Output,EventEmitter } from "@angular/core"

@Component({
    selector:"app-addcropform-component",
    templateUrl:"./addcropform.component.html",
    styleUrls:["./addcropform.component.scss"]

})

export class AddCropForm {
    @Input() isCropselected :boolean=false
    @Output() backToSelectCrop: EventEmitter<void> = new EventEmitter<void>();
  
    backtoselectcrop() {
      this.backToSelectCrop.emit( );
    }
    
}

 