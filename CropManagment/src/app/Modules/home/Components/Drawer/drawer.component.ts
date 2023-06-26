import { Component } from "@angular/core"

@Component({
    selector: "app-addcrop-component",
    templateUrl: "./drawer.component.html",
    styleUrls: ["./drawer.component.scss"]

})

export class AddCropDrawer {
    isDrawerOpen: boolean = true;
    isCropselected: boolean = false
    selectedCrop:string=""

    constructor(){
        console.log(this.selectedCrop)
    }
   
    isdraweropen() {
        this.isDrawerOpen = !this.isDrawerOpen;
        this.isCropselected=false
    }

    handleSelectedCrop(value: any) {
        console.log(value);
        this.selectedCrop=value
    }

    handleIsCropSelectedChange(value: boolean) {
        this.isCropselected = value;
    }

    handleBackToSelectCrop(value: any) {
        this.isCropselected = value;
    }
}

