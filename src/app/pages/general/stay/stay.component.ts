import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { scrollTop } from 'src/app/utils/scroll-to-top';

@Component({
  selector: 'app-stay',
  templateUrl: './stay.component.html',
  styleUrls: ['./stay.component.css']
})
export class StayComponent implements OnInit {

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
  
  public navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
}

  ngOnInit() {
  }

}
