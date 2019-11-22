import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apartment-cards',
  templateUrl: './apartment-cards.component.html',
  styleUrls: ['./apartment-cards.component.css']
})
export class ApartmentCardsComponent implements OnInit {

  cards = [
    {
      image: 'dorms3.jpg',
      text: 'Hostels',
      searchQuery: 'hostels'
    },
    {
      image: 'apa3.jpg',
      text: 'Shared Apartments',
      searchQuery: 'shared-apartments'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
