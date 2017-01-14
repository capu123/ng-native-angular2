"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var data_1 = require("../../providers/data/data");
var Page2Component = (function () {
    function Page2Component(route, data) {
        this.route = route;
        this.data = data;
        this.person = this.data.storage;
        /* for string params
        this.route.params.subscribe(
               (params) => { this.fullName = params["name"]; }
            );
        */
        /* for query params
        this.route.queryParams.subscribe(
               params => {
                    this.person = JSON.parse(params["person"]);
                    //this.firstname = params["firstname"];
                    //this.lastname = params["lastname"]
                    }
            );
        */
    }
    Page2Component = __decorate([
        core_1.Component({
            selector: "page2",
            templateUrl: "./components/page2/page2.html",
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, data_1.Data])
    ], Page2Component);
    return Page2Component;
}());
exports.Page2Component = Page2Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBRTFDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRS9DLHFCQUFtQiwyQkFBMkIsQ0FBQyxDQUFBO0FBTS9DO0lBUUksd0JBQTJCLEtBQXFCLEVBQVUsSUFBVTtRQUF6QyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFDaEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNoQzs7OztVQUlFO1FBRUY7Ozs7Ozs7O1VBUUU7SUFDTixDQUFDO0lBN0JMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSwrQkFBK0I7U0FDL0MsQ0FBQzs7c0JBQUE7SUE0QkYscUJBQUM7QUFBRCxDQUFDLEFBM0JELElBMkJDO0FBM0JZLHNCQUFjLGlCQTJCMUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHtEYXRhfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJzL2RhdGEvZGF0YVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJwYWdlMlwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY29tcG9uZW50cy9wYWdlMi9wYWdlMi5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2UyQ29tcG9uZW50IHtcblxuICAgIC8vcHVibGljIGZ1bGxOYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIGZpcnN0bmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyBsYXN0bmFtZTogc3RyaW5nO1xuXG4gICAgcHVibGljIHBlcnNvbjogYW55O1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGRhdGE6IERhdGEpe1xuICAgICAgICB0aGlzLnBlcnNvbiA9IHRoaXMuZGF0YS5zdG9yYWdlO1xuICAgICAgICAvKiBmb3Igc3RyaW5nIHBhcmFtc1xuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAocGFyYW1zKSA9PiB7IHRoaXMuZnVsbE5hbWUgPSBwYXJhbXNbXCJuYW1lXCJdOyB9XG4gICAgICAgICAgICApOyBcbiAgICAgICAgKi9cbiAgICAgICAgXG4gICAgICAgIC8qIGZvciBxdWVyeSBwYXJhbXNcbiAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICBwYXJhbXMgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJzb24gPSBKU09OLnBhcnNlKHBhcmFtc1tcInBlcnNvblwiXSk7XG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5maXJzdG5hbWUgPSBwYXJhbXNbXCJmaXJzdG5hbWVcIl07IFxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMubGFzdG5hbWUgPSBwYXJhbXNbXCJsYXN0bmFtZVwiXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApOyBcbiAgICAgICAgKi9cbiAgICB9XG5cbn1cbiJdfQ==