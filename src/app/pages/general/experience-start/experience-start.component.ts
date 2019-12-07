import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../services/app.service';
import { scrollTop } from 'src/app/utils/scroll-to-top';

@Component({
  selector: 'app-experience-start',
  templateUrl: './experience-start.component.html',
  styleUrls: ['./experience-start.component.css']
})
export class ExperienceStartComponent implements OnInit {

  constructor(
    private appService: AppService
  ) { 
    this.appService.loadScriptPage(this.scripts);
    scrollTop();
  }

  scripts = [
    './assets/js/jquery/jquery.js',
    './assets/js/jquery/jquery-migrate.min.js',
    './assets/js/ext/plugins.js',
    './assets/js/dist/js_composer_front.min.js',
    './assets/js/ext/scripts.js',
    './assets/js/ext/wp-embed.min.js',
  ];

  ngOnInit() {
  }

}
