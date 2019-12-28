import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { firebase } from 'firebaseui-angular';
import { AppService } from 'src/app/services/app.service';
import { scrollTop } from 'src/app/utils/scroll-to-top';

@Component({
  selector: 'app-stay',
  templateUrl: './stay.component.html',
  styleUrls: ['./stay.component.css']
})
export class StayComponent implements OnInit {

  public firstName: string;

  public spaceToUpload = {
    userId: '',
    type: '',
    capacity: '',
    location: '',
    numberOfRooms: 0,
    numberOfBathrooms: 0
  };

  constructor(private appService: AppService, private router: Router) {
    this.appService.loadScriptPage(this.scripts);
    this.appService.loadSome();
    scrollTop();
  }

  scripts = [
    './assets/js/jquery/jquery.js',
    './assets/js/dist/bootstrap.min.js',
    './assets/js/jquery/jquery.easing.min.js',
    './assets/js/ext/plugins.js',
    './assets/js/ext/scripts.js',
    './assets/js/ext/select.js',
    './assets/js/ext/multiform.js',
    '/assets/js/ext/progress.js'
  ];

  public navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
  }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { displayName, uid } = user;

        this.spaceToUpload.userId = uid;
        this.firstName = displayName.split(' ')[0];
      } else {
        this.router.navigate(['/auth/sign-in']);
      }
    });
  }

  saveSpace() {
    const { type, capacity, location, numberOfRooms, numberOfBathrooms } = this.spaceToUpload;

    if (!type || !capacity || !location || !numberOfRooms || !numberOfBathrooms) {

    } else {
      sessionStorage.setItem('spaceToUpload', JSON.stringify(this.spaceToUpload));
    }
  }

}
