import {Component, OnInit, Input, Output} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from "@angular/router";


declare const FB:any;

@Component({
    selector: 'facebook-login',
    templateUrl: './app/components/facebook-login/facebooklogin.html',
    directives: [ROUTER_DIRECTIVES]
})

export class FacebookLoginComponent implements OnInit {
    @Input('options') configs:any;
    
    

    constructor() {}

    onFacebookLoginClick() {
        FB.login();
    }

    statusChangeCallback(resp:any) {
        if (resp.status === 'connected') {
            // connect here with your server for facebook login by passing access token given by facebook
        }else if (resp.status === 'not_authorized') {
            
        }else {
            
        }
    };
    ngOnInit() {
      FB.init({
            appId      : this.configs['appId'],
            cookie     : false,  // enable cookies to allow the server to access
                                // the session
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.5' // use graph api version 2.5
        });
        FB.getLoginStatus((response:any) => {
            this.statusChangeCallback(response);
        });
    }
}