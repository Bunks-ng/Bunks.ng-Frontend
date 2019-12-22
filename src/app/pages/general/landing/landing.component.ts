import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../services/app.service';
import {scrollTop} from 'src/app/utils/scroll-to-top';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: [
    './landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(
    private appService: AppService
  ) {
    this.appService.loadScriptPage(this.scripts);
    scrollTop();
  }

  // scripts = [
  //   './assets/js/jquery/jquery.min.js',
  //   './assets/js/jquery/jquery-migrate.min.js',
  //   './assets/js/ext/plugins.js',
  //   './assets/js/dist/js_composer_front.min.js',
  //   './assets/js/ext/scripts.js',
  //   './assets/js/ext/wp-embed.min.js',
  // ];

  scripts = [
    './assets/js/jquery/jquery.min.js',
    './assets/js/ext/select.js',
    './assets/js/ext/plugins.js',
    './assets/js/ext/scripts.js',
  ];

  ngOnInit() {
  }

}
