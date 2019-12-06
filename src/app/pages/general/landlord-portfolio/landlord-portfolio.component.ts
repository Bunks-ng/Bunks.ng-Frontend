import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../services/app.service';

@Component({
  selector: 'app-landlord-portfolio',
  templateUrl: './landlord-portfolio.component.html',
  styleUrls: ['./landlord-portfolio.component.css']
})
export class LandlordPortfolioComponent implements OnInit {

  constructor(
    private appService: AppService
  ) { 
    this.appService.loadScriptPage(this.scripts);
  }

  scripts = [
    './assets/js/jquery/jquery.js',
    './assets/js/jquery/jquery-migrate.min.js',
    './assets/js/ext/plugins.js',
    './assets/js/ext/comment-reply.min.js',
    './assets/js/dist/js_composer_front.min.js',
    './assets/js/ext/scripts.js',
    './assets/js/ext/split.js',
    './assets/js/ext/wp-embed.min.js',
  ];

  ngOnInit() {
  }

}
