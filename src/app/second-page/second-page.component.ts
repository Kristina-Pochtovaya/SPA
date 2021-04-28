import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from './models/user.model';
import { InputValidators } from './input.validators';
import { UserService } from '../user-service.service';
import { tabConfig } from '../tabConfig-model';

export enum UserEnum {
  FirstName = 'FirstName',
  LastName = 'LastName',
  Ages = 'Ages',
  Email = 'Email',
  Password = 'Password'
};

export interface IUserDto {
  index?: number;
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

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondPageComponent implements OnInit {
  IsTabConfigData: boolean;
  secondPageForm: FormGroup;
  UserEnum = UserEnum;
  error: boolean = false;
  users: User[] = [];
  index: number;

  constructor(private service: UserService) {}

  ngOnInit() {
    this.secondPageForm = this.createFormGroup()
    this.users = this.service.getUsers(this.users)
    console.log(this.users);
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

  addIndex(index: number) {
    this.index = index;
  }

  setIsTabConfigData (IsTabConfigData: boolean) {
    this.IsTabConfigData = IsTabConfigData;
  }

  addPersonalInfo(): void {
    if(this.secondPageForm.invalid) {
      this.error = true;
    } else {  
      if (!this.index && this.index!==0) {
        this.users.push(new User(this.UserData))
        this.secondPageForm.reset();
        console.log(this.users); 
      }  else if(this.IsTabConfigData === true) {
        tabConfig[0].data[0].FirstName =  this.secondPageForm.value.FirstName;
        tabConfig[0].data[0].LastName =  this.secondPageForm.value.LastName;
        tabConfig[0].data[0].Ages =  this.secondPageForm.value.Ages;
        tabConfig[0].data[0].Email =  this.secondPageForm.value.Email;
        tabConfig[0].data[0].Password =  this.secondPageForm.value.Password;
        this.secondPageForm.reset();
        this.index = null;
      } else {
        this.users = [
          ...this.users.slice(0, this.index),
          new User(this.UserData),
          ...this.users.slice(this.index + 1)];
          
          this.users = this.service.updateUsers(this.users);
          this.secondPageForm.reset();
          this.index=null;
      }
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
