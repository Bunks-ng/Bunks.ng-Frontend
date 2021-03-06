import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../services/app.service';
import { scrollTop } from '../../../utils/scroll-to-top';

@Component({
  selector: 'app-apartment-spaces',
  templateUrl: './apartment-spaces.component.html',
  styleUrls: ['./apartment-spaces.component.css']
})
export class ApartmentSpacesComponent implements OnInit {

  constructor(
    private appService: AppService
  ) { 
    this.appService.loadScriptPage(this.scripts);
    scrollTop();
  }

  // scripts = [
  //   './assets/js/jquery/jquery.js',
  //   './assets/js/jquery/jquery-migrate.min.js',
  //   './assets/js/ext/plugins.js',
  //   './assets/js/dist/js_composer_front.min.js',
  //   './assets/js/ext/scripts.js',
  //   './assets/js/ext/wp-embed.min.js',
  // ];

  scripts = [
    './assets/js/jquery/jquery.js',
    './assets/js/ext/plugins.js',
    './assets/js/ext/scripts.js',
  ];

  spaces = [
    {
      image: [
        'firstapa.jpg',
        'apa2.jpg'
      ],
      text: 'Hostels',
      searchQuery: 'shared-apartments'
    },
    {
      image: [
        'apa3.jpg',
        'apa2.jpg'
      ],
      text: 'Shared Apartments',
      searchQuery: 'shared-apartments'
    },
    {
      image: [
        'apa4.jpg',
        'apa2.jpg'
      ],
      text: 'Shared Apartments',
      searchQuery: 'shared-apartments'
    },
    {
      image: [
        'apa5.jpg',
        'apa2.jpg'
      ],
      text: 'Shared Apartments',
      searchQuery: 'shared-apartments'
    },
    {
      image: [
        'firstapa.jpg',
        'apa2.jpg'
      ],
      text: 'Shared Apartments',
      searchQuery: 'shared-apartments'
    },
    {
      image: [
        'firstapa.jpg',
        'apa2.jpg'
      ],
      text: 'Shared Apartments',
      searchQuery: 'shared-apartments'
    },
    {
      image: [
        'firstapa.jpg',
        'apa2.jpg'
      ],
      text: 'Shared Apartments',
      searchQuery: 'shared-apartments'
    },
    {
      image: [
        'firstapa.jpg',
        'apa2.jpg'
      ],
      text: 'Shared Apartments',
      searchQuery: 'shared-apartments'
    }
  ];

  ngOnInit() {
  }

}
