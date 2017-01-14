import { Component } from "@angular/core";
import {Router, NavigationExtras} from "@angular/router"
import {Data} from "../../providers/data/data";

@Component({
    selector: "page1",
    templateUrl: "./components/page1/page1.html",
})
export class Page1Component {

    public constructor(private router: Router, private data: Data){

    }

    public onTap(){
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "person": JSON.stringify({
                    "firstname": "Saideep",
                    "lastname": "Chhetri",
                    "address": { 
                        "city": "London",
                        "country": "United Kingdom"
                    }
                })  
            }
        };

        //this.router.navigate(["page2", "Saideep RC"]);
        this.data.storage = {
                    "firstname": "Saideep",
                    "lastname": "Chhetri",
                    "address": { 
                        "city": "London",
                        "country": "United Kingdom"
                    }
        };

        this.router.navigate(["page2"], navigationExtras);
    }
}