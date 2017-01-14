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
                "person": JSON.stringify({
                    "firstname": "Saideep",
                    "lastname": "Chhetri",
                    "address": {
                        "city": "London",
                        "country": "United Kingdom"
                    },
                })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUF1QyxpQkFFdkMsQ0FBQyxDQUZ1RDtBQU14RDtJQUVJLHdCQUEyQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUV6QyxDQUFDO0lBRU0sOEJBQUssR0FBWjtRQUNJLElBQUksZ0JBQWdCLEdBQXFCO1lBQ3JDLFdBQVcsRUFBRTtnQkFDVCxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFDckIsV0FBVyxFQUFFLFNBQVM7b0JBQ3RCLFVBQVUsRUFBRSxTQUFTO29CQUNyQixTQUFTLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLFFBQVE7d0JBQ2hCLFNBQVMsRUFBRSxnQkFBZ0I7cUJBQzlCO2lCQUNKLENBQUM7YUFDTDtTQUNKLENBQUE7UUFFRCxnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUExQkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFLCtCQUErQjtTQUMvQyxDQUFDOztzQkFBQTtJQXdCRixxQkFBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7QUF2Qlksc0JBQWMsaUJBdUIxQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCJcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwicGFnZTFcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NvbXBvbmVudHMvcGFnZTEvcGFnZTEuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlMUNvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcil7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgb25UYXAoKXtcbiAgICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgICAgIFwicGVyc29uXCI6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgXCJmaXJzdG5hbWVcIjogXCJTYWlkZWVwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGFzdG5hbWVcIjogXCJDaGhldHJpXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYWRkcmVzc1wiOiB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjaXR5XCI6IFwiTG9uZG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvdW50cnlcIjogXCJVbml0ZWQgS2luZ2RvbVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSkgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJwYWdlMlwiLCBcIlNhaWRlZXAgUkNcIl0pO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJwYWdlMlwiXSwgbmF2aWdhdGlvbkV4dHJhcyk7XG4gICAgfVxufSJdfQ==