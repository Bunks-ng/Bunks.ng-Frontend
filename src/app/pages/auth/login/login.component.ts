import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private appService: AppService){
    this.appService.loadScriptPage(this.scripts);
  }
  
  scripts = [
    './assets/js/jquery/jquery.js',
    './assets/js/ext/plugins.js',
    './assets/js/ext/scripts.js',
  ];

  ngOnInit() {}

}
