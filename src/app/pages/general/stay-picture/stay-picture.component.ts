import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { firebase } from 'firebaseui-angular';
import { scrollTop } from 'src/app/utils/scroll-to-top';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-stay-picture',
  templateUrl: './stay-picture.component.html',
  styleUrls: ['./stay-picture.component.css']
})
export class StayPictureComponent implements OnInit {

  public spaceToUploadContd = {
    photos: null,
    title: '',
    description: '',
    price: 0
  };
  public firstName: string;
  public statusOfUpload: string;

  constructor(private appService: AppService, private router: Router, private db: AngularFirestore) {
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
    './assets/js/ext/multiform.js',
    './assets/js/ext/images.js',
    '/assets/js/ext/progress.js'
  ];

  // public navigateToSection(section: string) {
  //   window.location.hash = '';
  //   window.location.hash = section;
  // }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { displayName } = user;

        this.firstName = displayName.split(' ')[0];
      } else {
        this.router.navigate(['/auth/sign-in']);
      }
    });
  }

  uploadSpace() {
    this.statusOfUpload = 'Publishing apartment...';

    let spaceToUpload = JSON.parse(sessionStorage.getItem('spaceToUpload'));

    spaceToUpload = {
      ...spaceToUpload,
      ...this.spaceToUploadContd
    }

    this.db.collection('spaces').add(spaceToUpload)
      .then((docRef) => {
        this.statusOfUpload = 'Your apartment have been successfully published.';
        sessionStorage.removeItem('spaceToUpload');
      })
      .catch((error) => {
        this.statusOfUpload = 'There was an error while publishing your apartment.'
      });
  }

}
