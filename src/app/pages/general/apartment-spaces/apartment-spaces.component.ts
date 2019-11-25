import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';
import { scrollTop } from '../../../utils/scroll-to-top'

@Component({
  selector: 'app-apartment-spaces',
  templateUrl: './apartment-spaces.component.html',
  styleUrls: ['./apartment-spaces.component.css']
})
export class ApartmentSpacesComponent implements OnInit {
  // private appService: AppService
  constructor(
    private appService: AppService
  ) { }

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

  scripts = [
    './assets/js/jquery/jquery.js',
    './assets/js/jquery/jquery-migrate.min.js',
    './assets/js/ext/plugins.js',
    './assets/js/ext/comment-reply.min.js',
    './assets/js/dist/js_composer_front.min.js',
    './assets/js/ext/scripts.js',
    './assets/js/ext/wp-embed.min.js',
  ]

  ngOnInit() {
    this.appService.loadScriptPage(this.scripts);
    scrollTop();
  }

}
