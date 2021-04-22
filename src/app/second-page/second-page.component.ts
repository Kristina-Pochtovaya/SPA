import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './models/user.model';
import { InputValidators } from './input.validators';

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

  ngOnInit() {
    console.log(users);
    this.secondPageForm = this.createFormGroup()
  }

  inputArray: IInputArrayDto[] = [
    {classLabel: 'titleLabelRequired', textLabel: 'First Name', id: UserEnum.FirstName},
    {classLabel: 'titleLabel', textLabel: 'Last Name', id: UserEnum.LastName}, 
    {classLabel: 'titleLabel', textLabel: 'Ages', id: UserEnum.Ages},
    {classLabel: 'titleLabelRequired', textLabel: 'Email', id: UserEnum.Email},
    {classLabel: 'titleLabelRequired', textLabel: 'Password', id: UserEnum.Password},
  ]

  getControl (name: string) {
    return this.secondPageForm?.get(name);
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
    users.push(new User(this.UserData))
    this.secondPageForm.reset();
    console.log(users); 
  }

  private createFormGroup () {
    return new FormGroup({
      [UserEnum.FirstName]: new FormControl(null, Validators.required),
      [UserEnum.LastName]: new FormControl(null),
      [UserEnum.Ages]: new FormControl(null,InputValidators.cannotContainCharacters),
      [UserEnum.Email]: new FormControl(null, [Validators.email, Validators.required]),
      [UserEnum.Password]: new FormControl(null, [Validators.minLength(9),Validators.required]),
    })
  } 

}
