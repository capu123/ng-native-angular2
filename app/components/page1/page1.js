"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Page1Component = (function () {
    function Page1Component(router) {
        this.router = router;
    }
    Page1Component.prototype.onTap = function () {
        var navigationExtras = {
            queryParams: {
                "firstname": "Saideep",
                "lastname": "Chhetri"
            }
        };
        //this.router.navigate(["page2", "Saideep RC"]);
        this.router.navigate(["page2"], navigationExtras);
    };
    Page1Component = __decorate([
        core_1.Component({
            selector: "page1",
            templateUrl: "./components/page1/page1.html",
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Page1Component);
    return Page1Component;
}());
exports.Page1Component = Page1Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUF1QyxpQkFFdkMsQ0FBQyxDQUZ1RDtBQU14RDtJQUVJLHdCQUEyQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUV6QyxDQUFDO0lBRU0sOEJBQUssR0FBWjtRQUNJLElBQUksZ0JBQWdCLEdBQXFCO1lBQ3JDLFdBQVcsRUFBRTtnQkFDVCxXQUFXLEVBQUUsU0FBUztnQkFDdEIsVUFBVSxFQUFFLFNBQVM7YUFDeEI7U0FDSixDQUFBO1FBRUQsZ0RBQWdEO1FBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBcEJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSwrQkFBK0I7U0FDL0MsQ0FBQzs7c0JBQUE7SUFrQkYscUJBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDO0FBakJZLHNCQUFjLGlCQWlCMUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkV4dHJhc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInBhZ2UxXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb21wb25lbnRzL3BhZ2UxL3BhZ2UxLmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgUGFnZTFDb21wb25lbnQge1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpe1xuXG4gICAgfVxuXG4gICAgcHVibGljIG9uVGFwKCl7XG4gICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBcImZpcnN0bmFtZVwiOiBcIlNhaWRlZXBcIixcbiAgICAgICAgICAgICAgICBcImxhc3RuYW1lXCI6IFwiQ2hoZXRyaVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL3RoaXMucm91dGVyLm5hdmlnYXRlKFtcInBhZ2UyXCIsIFwiU2FpZGVlcCBSQ1wiXSk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInBhZ2UyXCJdLCBuYXZpZ2F0aW9uRXh0cmFzKTtcbiAgICB9XG59Il19