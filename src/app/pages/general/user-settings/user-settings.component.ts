import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { scrollTop } from 'src/app/utils/scroll-to-top';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

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
  ];
  
  ngOnInit() {
  }

}
