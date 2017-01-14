import { Component } from "@angular/core";

import {ActivatedRoute} from "@angular/router";

@Component({
    selector: "page2",
    templateUrl: "./components/page2/page2.html",
})
export class Page2Component {

    //public fullName: string;
    public firstname: string;
    public lastname: string;

    public constructor(private route: ActivatedRoute){
        /* 
        this.route.params.subscribe(
               (params) => { this.fullName = params["name"]; }
            ); 
        */
        this.route.queryParams.subscribe(
               params => { this.firstname = params["firstname"]; 
                             this.lastname = params["lastname"]
                            }
            ); 

    }

}
