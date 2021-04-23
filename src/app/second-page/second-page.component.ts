import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from './models/user.model';
import { InputValidators } from './input.validators';
import { UserService } from '../user-service.service';

export enum UserEnum {
  FirstName = 'FirstName',
  LastName = 'LastName',
  Ages = 'Ages',
  Email = 'Email',
  Password = 'Password'
};

export interface IUserDto {
  firstName: string;
  lastName: string;
  ages: string;
  email: string;
  password: string;
} 

interface IInputArrayDto {
  classLabel: string;
  textLabel: string;
  id: string;
  type: string;
}

export const users: User[] = [];

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondPageComponent implements OnInit {

  secondPageForm: FormGroup;
  UserEnum = UserEnum;
  error: boolean = false;

  ngOnInit() {
    console.log(users);
    this.secondPageForm = this.createFormGroup()
  }

  inputArray: IInputArrayDto[] = [
    {classLabel: 'titleLabelRequired', textLabel: 'First Name', id: UserEnum.FirstName, type: 'text'},
    {classLabel: 'titleLabel', textLabel: 'Last Name', id: UserEnum.LastName, type: 'text'}, 
    {classLabel: 'titleLabel', textLabel: 'Ages', id: UserEnum.Ages, type: 'text'},
    {classLabel: 'titleLabelRequired', textLabel: 'Email', id: UserEnum.Email, type: 'email'},
    {classLabel: 'titleLabelRequired', textLabel: 'Password', id: UserEnum.Password, type: 'password'},
  ]

  getControl (name: string) {
    return this.secondPageForm?.get(name) as FormControl;
  }

  get UserData (): IUserDto {
    const formValue = this.secondPageForm.value;

    return {
      firstName: formValue[UserEnum.FirstName],
      lastName: formValue[UserEnum.LastName],
      ages: formValue[UserEnum.Ages],
      email: formValue[UserEnum.Email],
      password: formValue[UserEnum.Password]
    }
  }

  addPersonalInfo(): void {
    if(this.secondPageForm.invalid) {
      this.error = true;
    } else {
      users.push(new User(this.UserData))
      this.secondPageForm.reset();
      console.log(users); 
  }
}

  hideError(): void {
    this.error = false;
  }
  
  private createFormGroup () {
    return new FormGroup({
      [UserEnum.FirstName]: new FormControl(null, InputValidators.cannotBeEmpty),
      [UserEnum.LastName]: new FormControl(null),
      [UserEnum.Ages]: new FormControl(null,InputValidators.cannotContainCharacters),
      [UserEnum.Email]: new FormControl(null, [InputValidators.emailFormat, InputValidators.cannotBeEmpty]),
      [UserEnum.Password]: new FormControl(null, [InputValidators.minLength,InputValidators.cannotBeEmpty]),
    })
  } 

}
