"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var data_1 = require("../../providers/data/data");
var Page1Component = (function () {
    function Page1Component(router, data) {
        this.router = router;
        this.data = data;
    }
    Page1Component.prototype.onTap = function () {
        var navigationExtras = {
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
    };
    Page1Component = __decorate([
        core_1.Component({
            selector: "page1",
            templateUrl: "./components/page1/page1.html",
        }), 
        __metadata('design:paramtypes', [router_1.Router, data_1.Data])
    ], Page1Component);
    return Page1Component;
}());
exports.Page1Component = Page1Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUF1QyxpQkFDdkMsQ0FBQyxDQUR1RDtBQUN4RCxxQkFBbUIsMkJBQTJCLENBQUMsQ0FBQTtBQU0vQztJQUVJLHdCQUEyQixNQUFjLEVBQVUsSUFBVTtRQUFsQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUU3RCxDQUFDO0lBRU0sOEJBQUssR0FBWjtRQUNJLElBQUksZ0JBQWdCLEdBQXFCO1lBQ3JDLFdBQVcsRUFBRTtnQkFDVCxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFDckIsV0FBVyxFQUFFLFNBQVM7b0JBQ3RCLFVBQVUsRUFBRSxTQUFTO29CQUNyQixTQUFTLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLFFBQVE7d0JBQ2hCLFNBQVMsRUFBRSxnQkFBZ0I7cUJBQzlCO2lCQUNKLENBQUM7YUFDTDtTQUNKLENBQUM7UUFFRixnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDUixXQUFXLEVBQUUsU0FBUztZQUN0QixVQUFVLEVBQUUsU0FBUztZQUNyQixTQUFTLEVBQUU7Z0JBQ1AsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLFNBQVMsRUFBRSxnQkFBZ0I7YUFDOUI7U0FDWixDQUFDO1FBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFuQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFLCtCQUErQjtTQUMvQyxDQUFDOztzQkFBQTtJQWlDRixxQkFBQztBQUFELENBQUMsQUFoQ0QsSUFnQ0M7QUFoQ1ksc0JBQWMsaUJBZ0MxQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCJcbmltcG9ydCB7RGF0YX0gZnJvbSBcIi4uLy4uL3Byb3ZpZGVycy9kYXRhL2RhdGFcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwicGFnZTFcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NvbXBvbmVudHMvcGFnZTEvcGFnZTEuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlMUNvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBkYXRhOiBEYXRhKXtcblxuICAgIH1cblxuICAgIHB1YmxpYyBvblRhcCgpe1xuICAgICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgXCJwZXJzb25cIjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICBcImZpcnN0bmFtZVwiOiBcIlNhaWRlZXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsYXN0bmFtZVwiOiBcIkNoaGV0cmlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhZGRyZXNzXCI6IHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNpdHlcIjogXCJMb25kb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY291bnRyeVwiOiBcIlVuaXRlZCBLaW5nZG9tXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvL3RoaXMucm91dGVyLm5hdmlnYXRlKFtcInBhZ2UyXCIsIFwiU2FpZGVlcCBSQ1wiXSk7XG4gICAgICAgIHRoaXMuZGF0YS5zdG9yYWdlID0ge1xuICAgICAgICAgICAgICAgICAgICBcImZpcnN0bmFtZVwiOiBcIlNhaWRlZXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsYXN0bmFtZVwiOiBcIkNoaGV0cmlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhZGRyZXNzXCI6IHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNpdHlcIjogXCJMb25kb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY291bnRyeVwiOiBcIlVuaXRlZCBLaW5nZG9tXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInBhZ2UyXCJdLCBuYXZpZ2F0aW9uRXh0cmFzKTtcbiAgICB9XG59Il19