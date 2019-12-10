import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { scrollTop } from 'src/app/utils/scroll-to-top';

@Component({
  selector: 'app-password-setting',
  templateUrl: './password-setting.component.html',
  styleUrls: ['./password-setting.component.css']
})
export class PasswordSettingComponent implements OnInit {

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
