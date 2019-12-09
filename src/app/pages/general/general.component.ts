import { Component, OnInit } from '@angular/core';
import { scrollTop } from 'src/app/utils/scroll-to-top';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor(
    private appService: AppService
  ) { 
    // this.appService.loadScriptPage(this.scripts);
    scrollTop();
  }

  // scripts = [
  //   './assets/js/jquery/jquery.js',
  //   './assets/js/ext/plugins.js',
  //   './assets/js/ext/scripts.js',
  // ];

  // scripts = [
  //   './assets/js/jquery/jquery.js',
  //   './assets/js/jquery/jquery-migrate.min.js',
  //   './assets/js/ext/plugins.js',
  //   './assets/js/dist/js_composer_front.min.js',
  //   './assets/js/ext/scripts.js',
  //   './assets/js/ext/wp-embed.min.js',
  // ];


  ngOnInit() {
  }

}
