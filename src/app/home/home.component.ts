import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  clickCounter: number = 0;
  name: string = 'Hey';

  constructor() {}

  ngOnInit(): void {}

  countClick() {
    this.clickCounter += 1;
  }

  setClasses() {
    let myClass = {
      active: this.clickCounter > 4,
      notActive: this.clickCounter <= 4,
    };
    return myClass;
  }
}
