import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserMore } from './models/userMore.model';
import { IValuesArray } from '../select-user/select-user.component';

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

export let usersMore: UserMore[] = [];

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThirdPageComponent implements OnInit {

  thirdPageForm: FormGroup;
  UserEnumMore = UserEnumMore;
  usersMore = usersMore;

  valuesArray: IValuesArray[] = [
    { value: 'Male'},
    { value: 'Female'}
  ]

  ngOnInit() {
    console.log(usersMore);
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
    usersMore.push(new UserMore(this.UserDataMore))
    this.thirdPageForm.reset();
    this.thirdPageForm = this.createFormGroup();
    console.log(usersMore); 
  }

  private createFormGroup () {
    return new FormGroup({
      [UserEnumMore.Male]: new FormControl(UserEnumMore.Male),
      [UserEnumMore.Children]: new FormControl(false),
      [UserEnumMore.Job]: new FormControl(false),
    })
  }
}
