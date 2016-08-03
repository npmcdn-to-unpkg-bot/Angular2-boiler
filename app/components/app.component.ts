import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div>
    <div class="g-signin2" data-onsuccess="onSignIn"></div>
    </div>`
})

export class AppComponent {

	 constructor() {}

     onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
}

 }
