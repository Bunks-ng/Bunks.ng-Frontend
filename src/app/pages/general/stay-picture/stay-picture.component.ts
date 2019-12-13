import { Component, OnInit } from '@angular/core';
import { scrollTop } from 'src/app/utils/scroll-to-top';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-stay-picture',
  templateUrl: './stay-picture.component.html',
  styleUrls: ['./stay-picture.component.css']
})
export class StayPictureComponent implements OnInit {

  constructor(
    private appService: AppService
  ) { 
    this.appService.loadScriptPage(this.scripts);
    scrollTop();
  }

  scripts = [
    './assets/js/jquery/jquery.js',
    './assets/js/ext/plugins.js',
    './assets/js/ext/scripts.js',
    '/assets/js/ext/progress.js'
  ];

  ngOnInit() {
  }

}
