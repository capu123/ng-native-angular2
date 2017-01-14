import {Page1Component} from "./components/page1/page1";
import {Page2Component} from "./components/page2/page2";

export const appRoutes: any = [
    { path: "", component: Page1Component },
    { path: "page2", component: Page2Component }
];

//exporting all comps at once in app.module.ts using ...appComponents
export const appComponents: any = [
    Page1Component,
    Page2Component
];