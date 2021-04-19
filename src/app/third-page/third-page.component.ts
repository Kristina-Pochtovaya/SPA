import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserMore } from './userMore.model';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.less']
})
export class ThirdPageComponent implements OnInit {

  thirdPageForm: FormGroup;
  male: string = 'Male';
  children: boolean = false;
  job: boolean = false;

  usersMore: UserMore[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.usersMore);
    this.thirdPageForm = new FormGroup({
      male: new FormControl(null),
      children: new FormControl(false),
      job: new FormControl(false)
    });
  }

  addPersonalInfoMore(): void {
    this.usersMore.push(new UserMore(this.male, this.children, this.job))
    this.clearInfo();
    console.log(this.usersMore); 
  }
  clearInfo(): void {
    this.male = 'Male';
    this.children = false;
    this.job = false;
  }

}
