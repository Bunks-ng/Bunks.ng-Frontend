import { Component, OnInit } from '@angular/core';
import { firebase } from 'firebaseui-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private defaultUser: object = {
    displayName: 'User',
    email: '',
    emailVerified: false,
    photoURL: './assets/img/default-user.svg',
    isAnonymous: true,
    uid: '',
    providerData: null
  };

  public user: object;
  public firstName: string;
  public email: string;
  public photoURL: string;

  constructor() { }

  ngOnInit() {
    this.getUser();
  }

  setUser(user?) {
    this.user = user; // Used to conditionally show sign in or sign out buttons in child (auth-button) component

    if (!user) {
      user = this.defaultUser;
    }
    this.email = user.email;
    this.photoURL = user.photoURL;
    this.firstName = user.displayName.split(' ')[0];
  }

  getUser() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setUser(user);
      } else {
        this.setUser();
      }
    });
  }
}
