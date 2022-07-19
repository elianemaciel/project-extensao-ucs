import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
  helloWorld = 'Hello World';
  constructor() {}

  ngOnInit(): void {}
}
