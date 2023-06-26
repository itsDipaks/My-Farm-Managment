import {Component , EventEmitter, Output} from "@angular/core"

@Component({
    selector:"app-selectcrop-component",
    templateUrl:"./selectcrop.component.html",
    styleUrls:["./selectcrop.component.scss"]

})

export class SelectNewCrop {
    @Output() selectedCrop: EventEmitter<any> = new EventEmitter<any>();
    @Output() isCropselectedChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  
    isCropselected: boolean = false;
  
    Allcrops=[
        { cropName :"Corn" , cropimg  :"https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29ybiUyMGZhcm18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
        { cropName :"Onion" , cropimg  :"https://images.unsplash.com/photo-1593629718894-e9a8f9f65d01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b25pb24lMjBmYXJtfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" },
        {  cropName :"Cabbaze" , cropimg  :"https://images.unsplash.com/photo-1486328228599-85db4443971f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" },
        { cropName :"Carrot " , cropimg  :"https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fycm90JTIwZmFybXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" }
    ]

    SelectedCrop(value: any) {
        this.isCropselected = true;
        this.isCropselectedChange.emit(this.isCropselected);
        this.selectedCrop.emit(value);
      }

 
    
}