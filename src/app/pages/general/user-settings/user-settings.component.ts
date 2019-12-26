import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { firebase } from 'firebaseui-angular';

import { AppService } from 'src/app/services/app.service';
import { scrollTop } from 'src/app/utils/scroll-to-top';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  private user: firebase.User;
  private firstName: string = '';
  private lastName: string = '';
  private email: string = '';
  private profileUpdateMessage: string = '';
  private emailUpdateMessage: string = '';

  constructor(private appService: AppService, private router: Router) { 
    this.appService.loadScriptPage(this.scripts);
    scrollTop();
  }

  scripts = [
    './assets/js/jquery/jquery.js',
    './assets/js/ext/plugins.js',
    './assets/js/ext/scripts.js',
  ];

  updateProfile(event) {
    event.preventDefault();

    this.firstName = this.firstName.trim();
    this.lastName = this.lastName.trim();

    this.profileUpdateMessage = 'Updating names...';

    if (!this.firstName || !this.lastName) {
      this.profileUpdateMessage = 'Please, fill in names.';
      return;
    }

    this.user.updateProfile({
      displayName: this.firstName + ' ' + this.lastName,
    }).then(() => {
      this.profileUpdateMessage = 'Names updated successfully.';
    }).catch((error) => {
      this.profileUpdateMessage = error;
    });
  }

  updateEmail(event) {
    event.preventDefault();

    this.emailUpdateMessage = 'Updating email address...';

    if (!this.email) {
      this.profileUpdateMessage = 'Please, fill in names.';
      return;
    }

    this.user.updateEmail(this.email).then(() => {
      this.emailUpdateMessage = 'Email address updated successfully.';
    }).catch((error) => {
      this.emailUpdateMessage = error;
    });
  }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email } = user;
        const names = displayName.split(' ');
        
        this.user = user;
        this.firstName = names[0];
        this.lastName = names[1];
        this.email = email;
      } else {
        this.router.navigate(['/auth/sign-in']);
      }
    });
  }

}
