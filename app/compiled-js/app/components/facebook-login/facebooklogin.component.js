"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var FacebookLoginComponent = (function () {
    function FacebookLoginComponent() {
    }
    FacebookLoginComponent.prototype.onFacebookLoginClick = function () {
        FB.login();
    };
    FacebookLoginComponent.prototype.statusChangeCallback = function (resp) {
        if (resp.status === 'connected') {
        }
        else if (resp.status === 'not_authorized') {
        }
        else {
        }
    };
    ;
    FacebookLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        FB.init({
            appId: this.configs['appId'],
            cookie: false,
            // the session
            xfbml: true,
            version: 'v2.5' // use graph api version 2.5
        });
        FB.getLoginStatus(function (response) {
            _this.statusChangeCallback(response);
        });
    };
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], FacebookLoginComponent.prototype, "configs", void 0);
    FacebookLoginComponent = __decorate([
        core_1.Component({
            selector: 'facebook-login',
            templateUrl: './app/components/facebook-login/facebooklogin.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], FacebookLoginComponent);
    return FacebookLoginComponent;
}());
exports.FacebookLoginComponent = FacebookLoginComponent;
//# sourceMappingURL=facebooklogin.component.js.map