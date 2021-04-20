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

  usersMore: UserMore[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.usersMore);
    this.thirdPageForm = new FormGroup({
      male: new FormControl('Male'),
      children: new FormControl(false),
      job: new FormControl(false)
    });
  }

  addPersonalInfoMore(): void {
    this.usersMore.push(new UserMore(this.thirdPageForm.value.male, this.thirdPageForm.value.children, this.thirdPageForm.value.job))
    this.thirdPageForm.reset();
    this.thirdPageForm = new FormGroup({
      male: new FormControl('Male'),
      children: new FormControl(false),
      job: new FormControl(false)
    });
    console.log(this.usersMore); 
  }
}
