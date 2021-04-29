import {
  Component, OnInit, ChangeDetectionStrategy, Input,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserMore, IUserMoreDto } from './models/userMore.model';
import { IValuesArray } from '../select-user/select-user.component';
import { UserService } from '../user-service.service';

export enum UserEnumMore {
  Male = 'Male',
  Children = 'Children',
  Job = 'Job',
}

export interface ItabConfigDataThirdPage {
  idx: number;
  male: string;
  children: boolean;
  job: boolean;
}

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThirdPageComponent implements OnInit {
  @Input() tabConfigData: ItabConfigDataThirdPage;

  thirdPageForm: FormGroup;

  UserEnumMore = UserEnumMore;

  index: number;

  valuesArray: IValuesArray[] = [
    { value: 'Male' },
    { value: 'Female' },
  ];

  constructor(private service: UserService) {}

  ngOnInit() {
    console.log(this.usersMore);
    this.thirdPageForm = this.createFormGroup();
  }

  getControl(name: UserEnumMore) {
    return this.thirdPageForm?.get(name) as FormControl;
  }

  get usersMore() {
    return this.service.myUsersMore;
  }

  get UserDataMore(): IUserMoreDto {
    const formValue = this.thirdPageForm.value;

    return {
      male: formValue[UserEnumMore.Male],
      children: formValue[UserEnumMore.Children],
      job: formValue[UserEnumMore.Job],
    };
  }

  addIndex(index: number) {
    this.index = index;
  }

  addPersonalInfoMore(): void {
    if (!this.index && this.index !== 0) {
      this.usersMore.push(new UserMore(this.UserDataMore));
      this.thirdPageForm.reset();
      this.thirdPageForm = this.createFormGroup();

      console.log(this.usersMore);
    } else {
      this.service.changeUserMore(this.index, this.UserDataMore);
      this.index = null;
    }
  }

  public createFormGroup() {
    return new FormGroup({
      [UserEnumMore.Male]: new FormControl(this.tabConfigData.male),
      [UserEnumMore.Children]: new FormControl(this.tabConfigData.children),
      [UserEnumMore.Job]: new FormControl(this.tabConfigData.job),
    });
  }
}
