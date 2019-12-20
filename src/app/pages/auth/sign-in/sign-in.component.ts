import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { firebase } from 'firebaseui-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private appService: AppService, private router: Router) {
    this.appService.loadScriptPage(this.scripts);
  }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.router.navigate(['/']);
      }
    });
  }

  scripts = [
    './assets/js/jquery/jquery.js',
    './assets/js/ext/plugins.js',
    './assets/js/ext/scripts.js',
  ];

}
