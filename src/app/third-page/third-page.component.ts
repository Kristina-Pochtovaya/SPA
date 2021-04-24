import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserMore } from './models/userMore.model';
import { IValuesArray } from '../select-user/select-user.component';
import { UserService } from '../user-service.service';

export enum UserEnumMore {
  Male = 'Male',
  Children = 'Children',
  Job = 'Job'
}

export interface IUserMoreDto {
  male: string;
  children: boolean;
  job: boolean;
}

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThirdPageComponent implements OnInit {

  thirdPageForm: FormGroup;
  UserEnumMore = UserEnumMore;
  usersMore: UserMore[] = [];

  valuesArray: IValuesArray[] = [
    { value: 'Male'},
    { value: 'Female'}
  ]

  constructor(private service: UserService) {}

  ngOnInit() {
    console.log(this.usersMore);
    this.usersMore = this.service.getUsersMore(this.usersMore)
    this.thirdPageForm = this.createFormGroup();
  }

  getControl(name: UserEnumMore) {
    return this.thirdPageForm?.get(name) as FormControl;
  } 

  get UserDataMore(): IUserMoreDto {
    const formValue = this.thirdPageForm.value;

    return {
      male: formValue[UserEnumMore.Male],
      children: formValue[UserEnumMore.Children],
      job: formValue[UserEnumMore.Job]
    }
  }

  addPersonalInfoMore(): void {
    this.usersMore.push(new UserMore(this.UserDataMore))
    this.thirdPageForm.reset();
    this.thirdPageForm = this.createFormGroup();
    console.log(this.usersMore); 
  }

  private createFormGroup () {
    return new FormGroup({
      [UserEnumMore.Male]: new FormControl(UserEnumMore.Male),
      [UserEnumMore.Children]: new FormControl(false),
      [UserEnumMore.Job]: new FormControl(false),
    })
  }
}
