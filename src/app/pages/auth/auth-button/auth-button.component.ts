import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { firebase } from 'firebaseui-angular';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.css']
})
export class AuthButtonComponent implements OnInit {
  @Input() user;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  signOut() {
    firebase.auth().signOut()
      .then(() => this.router.navigate(['/auth/sign-in']));
  }
}
