import { bootstrap }    from '@angular/platform-browser-dynamic';
import {PLATFORM_DIRECTIVES, provide}    from '@angular/core';
import { AppComponent } from './app.component';
import {DropDownComponent} from './drop-down/drop-down.component';
import { HTTP_PROVIDERS } from '@angular/http';
import { provideRouter, RouterConfig }  from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {FacebookLoginComponent} from './facebook-login/facebooklogin.component';


bootstrap(AppComponent,
	[HTTP_PROVIDERS,ROUTER_DIRECTIVES,
	provide(PLATFORM_DIRECTIVES, {useValue: DropDownComponent, multi: true}),
	provide(PLATFORM_DIRECTIVES,{useValue: FacebookLoginComponent, multi: true})
	]);
