import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category1',
  templateUrl: './category1.component.html',
  styleUrls: ['./category1.component.css']
})
export class Category1Component implements OnInit {
  Brandy = 0;
  Whisky = 0;
  Rum = 0;
  Tequlia = 0;
  Vodka = 0;
  Type = 'Wisky';
  constructor() { }
  ngOnInit() {
  }
}
