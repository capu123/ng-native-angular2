"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Page2Component = (function () {
    function Page2Component(route) {
        var _this = this;
        this.route = route;
        /*
        this.route.params.subscribe(
               (params) => { this.fullName = params["name"]; }
            );
        */
        this.route.queryParams.subscribe(function (params) {
            _this.person = JSON.parse(params["person"]);
            //this.firstname = params["firstname"]; 
            //this.lastname = params["lastname"]
        });
    }
    Page2Component = __decorate([
        core_1.Component({
            selector: "page2",
            templateUrl: "./components/page2/page2.html",
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], Page2Component);
    return Page2Component;
}());
exports.Page2Component = Page2Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBRTFDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBTS9DO0lBUUksd0JBQTJCLEtBQXFCO1FBUnBELGlCQXdCQztRQWhCOEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDNUM7Ozs7VUFJRTtRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FDekIsVUFBQSxNQUFNO1lBQ0QsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzNDLHdDQUF3QztZQUN4QyxvQ0FBb0M7UUFDcEMsQ0FBQyxDQUNSLENBQUM7SUFFVixDQUFDO0lBMUJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSwrQkFBK0I7U0FDL0MsQ0FBQzs7c0JBQUE7SUF5QkYscUJBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDO0FBeEJZLHNCQUFjLGlCQXdCMUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwicGFnZTJcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NvbXBvbmVudHMvcGFnZTIvcGFnZTIuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlMkNvbXBvbmVudCB7XG5cbiAgICAvL3B1YmxpYyBmdWxsTmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyBmaXJzdG5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgbGFzdG5hbWU6IHN0cmluZztcblxuICAgIHB1YmxpYyBwZXJzb246IGFueTtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSl7XG4gICAgICAgIC8qIFxuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAocGFyYW1zKSA9PiB7IHRoaXMuZnVsbE5hbWUgPSBwYXJhbXNbXCJuYW1lXCJdOyB9XG4gICAgICAgICAgICApOyBcbiAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICBwYXJhbXMgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJzb24gPSBKU09OLnBhcnNlKHBhcmFtc1tcInBlcnNvblwiXSk7XG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5maXJzdG5hbWUgPSBwYXJhbXNbXCJmaXJzdG5hbWVcIl07IFxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMubGFzdG5hbWUgPSBwYXJhbXNbXCJsYXN0bmFtZVwiXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApOyBcblxuICAgIH1cblxufVxuIl19