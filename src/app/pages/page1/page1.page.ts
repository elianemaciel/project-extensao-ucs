import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
  helloWorld = 'Hello World';
  students = [
    {
      name: ' Eliane ',
      idade: 28,
    },
    {
      name: ' João',
      idade: 28,
    },
    {
      name: 'Pedro',
      idade: 26,
    },
    {
      name: 'Zé',
      idade: 26,
    },
    {
      name: 'chico',
      idade: 26,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
