import {
  Component, OnInit, ChangeDetectionStrategy, Input,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User, IUserDto } from './models/user.model';
import InputValidators from './input.validators';
import { UserService } from '../user-service.service';
import { UserInfoComponent } from '../user-info/user-info.component';

export interface ItabConfigDataSecondPage {
  idx: number;
  firstName: string;
  lastName: string;
  ages: string;
  email: string;
  password: string;
}

export enum UserEnum {
  FirstName = 'FirstName',
  LastName = 'LastName',
  Ages = 'Ages',
  Email = 'Email',
  Password = 'Password',
}

interface IInputArrayDto {
  classLabel: string;
  textLabel: string;
  id: string;
  type: string;
}

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondPageComponent implements OnInit {
  @ViewChild(UserInfoComponent) child:UserInfoComponent;

  @Input() tabConfigData: ItabConfigDataSecondPage;

  secondPageForm: FormGroup;

  UserEnum = UserEnum;

  error = false;

  index: number;

  constructor(private service: UserService) {}

  ngOnInit() {
    this.secondPageForm = this.createFormGroup();
    console.log(this.users);
  }

  inputArray: IInputArrayDto[] = [
    {
      classLabel: 'titleLabelRequired', textLabel: 'First Name', id: UserEnum.FirstName, type: 'text',
    },
    {
      classLabel: 'titleLabel', textLabel: 'Last Name', id: UserEnum.LastName, type: 'text',
    },
    {
      classLabel: 'titleLabel', textLabel: 'Ages', id: UserEnum.Ages, type: 'text',
    },
    {
      classLabel: 'titleLabelRequired', textLabel: 'Email', id: UserEnum.Email, type: 'email',
    },
    {
      classLabel: 'titleLabelRequired', textLabel: 'Password', id: UserEnum.Password, type: 'password',
    },
  ];

  getControl(name: string) {
    return this.secondPageForm?.get(name) as FormControl;
  }

  get users() {
    return this.service.myUsers;
  }

  get UserData(): IUserDto {
    const formValue = this.secondPageForm.value;

    return {
      firstName: formValue[UserEnum.FirstName],
      lastName: formValue[UserEnum.LastName],
      ages: formValue[UserEnum.Ages],
      email: formValue[UserEnum.Email],
      password: formValue[UserEnum.Password],
    };
  }

  addIndex(index: number) {
    this.index = index;
  }

  addBackToForm({
    firstName, lastName, ages, email, password,
  }: IUserDto): void {
    this.secondPageForm.controls.FirstName.setValue(firstName);
    this.secondPageForm.controls.LastName.setValue(lastName);
    this.secondPageForm.controls.Ages.setValue(ages);
    this.secondPageForm.controls.Email.setValue(email);
    this.secondPageForm.controls.Password.setValue(password);
    console.log(this.users);
  }

  addPersonalInfo(): void {
    this.child.detectChanges();
    if (this.secondPageForm.invalid) {
      Object.values(this.secondPageForm.controls).forEach((control) => control.markAsDirty());
      return;
    }
    if (!this.index && this.index !== 0) {
      this.users.push(new User(this.UserData));
      this.secondPageForm.reset();
      console.log(this.users);
    } else {
      this.service.changeUser(this.index, this.UserData);
      this.secondPageForm.reset();
      this.index = null;
    }
  }

  public createFormGroup() {
    return new FormGroup({
      [UserEnum.FirstName]: new FormControl(this.tabConfigData.firstName,
        InputValidators.cannotBeEmpty),
      [UserEnum.LastName]: new FormControl(this.tabConfigData.lastName),
      [UserEnum.Ages]: new FormControl(this.tabConfigData.ages,
        InputValidators.cannotContainCharacters),
      [UserEnum.Email]: new FormControl(this.tabConfigData.email, [InputValidators.emailFormat,
        InputValidators.cannotBeEmpty]),
      [UserEnum.Password]: new FormControl(this.tabConfigData.password, [InputValidators.minLength,
        InputValidators.cannotBeEmpty]),
    });
  }
}
