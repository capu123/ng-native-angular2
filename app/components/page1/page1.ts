import { Component } from "@angular/core";
import {Router, NavigationExtras} from "@angular/router"

@Component({
    selector: "page1",
    templateUrl: "./components/page1/page1.html",
})
export class Page1Component {

    public constructor(private router: Router){

    }

    public onTap(){
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "firstname": "Saideep",
                "lastname": "Chhetri"
            }
        }

        //this.router.navigate(["page2", "Saideep RC"]);
        this.router.navigate(["page2"], navigationExtras);
    }
}