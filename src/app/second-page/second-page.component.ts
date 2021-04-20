import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from './models/user.model';
import { AgesInputValidators } from './ages.validators';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.less']
})
export class SecondPageComponent implements OnInit {

  secondPageForm: FormGroup;
  firstName: string;
  lastName: string;
  myAges: number;
  email: string;
  password: string;

  users: User[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.users);
    this.secondPageForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      ages: new FormControl(null, AgesInputValidators.cannotContainCharacters),
      email: new FormControl(null),
      password: new FormControl(null)
    });
  }

  get ages() {
    return this.secondPageForm.get('ages');
  }

  addPersonalInfo(): void {
    this.users.push(new User(this.secondPageForm.value.firstName, this.secondPageForm.value.lastName, 
      this.secondPageForm.value.ages, this.secondPageForm.value.email, this.secondPageForm.value.password))
    this.secondPageForm.reset();
    console.log(this.users); 
  }
}
