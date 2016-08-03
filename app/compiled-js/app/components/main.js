"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var app_component_1 = require('./app.component');
var drop_down_component_1 = require('./drop-down/drop-down.component');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var facebooklogin_component_1 = require('./facebook-login/facebooklogin.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, router_1.ROUTER_DIRECTIVES,
    core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: drop_down_component_1.DropDownComponent, multi: true }),
    core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: facebooklogin_component_1.FacebookLoginComponent, multi: true })
]);
//# sourceMappingURL=main.js.map