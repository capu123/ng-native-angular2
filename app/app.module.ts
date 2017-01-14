import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import { appComponents, appRoutes } from "./app.routing";

import {NativeScriptRouterModule } from "nativescript-angular/router";

import {Data} from "./providers/data/data";

@NgModule({
    declarations: [AppComponent, ...appComponents],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes)
        ],
    providers: [Data],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
