import { Component, Input, OnInit,ChangeDetectionStrategy, DoCheck, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../second-page/models/user.model';
import { IUserDto } from '../second-page/second-page.component';
import { tabConfig,ITabConfigDto } from '../tabConfig-model';
import { matChipArray,ImatChipArrayDto, MatChipArrayEnum } from './matChip.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInfoComponent implements OnInit, DoCheck {
  @Input() users:User[];
  @Input() controlFirstName: FormControl;
  @Input() controlLastName: FormControl;
  @Input() controlAges: FormControl;
  @Input() controlEmail: FormControl;
  @Input() controlPassword: FormControl;
  @Input() isTabConfigData: boolean;
  @Output() newSetIndexEvent = new EventEmitter<number>();
  @Output() newSetIsTabConfigData = new EventEmitter<boolean>();
  
  tabConfig: ITabConfigDto[] = tabConfig;
  matChipArray: ImatChipArrayDto[] = matChipArray;

  constructor(private cd: ChangeDetectorRef) { }

  ngDoCheck(): void {
    this.cd.detectChanges();
   }

   ngOnInit(): void {
    console.log(this.users)
  }

  setIndex(idx: number) {
    this.newSetIndexEvent.emit(idx);
  }

    setIsTabConfigData(IsTabConfigData : boolean) {
      this.newSetIsTabConfigData.emit(IsTabConfigData);
  }

  setText(value: string): string {
    if(value === MatChipArrayEnum.Id ) return `User ${tabConfig[0].data[0].idx}`;
    if(value === MatChipArrayEnum.FirstName ) return tabConfig[0].data[0].FirstName;
    if(value === MatChipArrayEnum.LastName ) return tabConfig[0].data[0].LastName;
    if(value === MatChipArrayEnum.Ages ) return tabConfig[0].data[0].Ages;
    if(value === MatChipArrayEnum.Email ) return tabConfig[0].data[0].Email;
    if(value === MatChipArrayEnum.Password ) return tabConfig[0].data[0].Password;
    else return "";
  }

  setTextFromUsers(value: string, index: number): string {
    if(value === MatChipArrayEnum.Id ) return `User ${index + 2}`;
    if(value === MatChipArrayEnum.FirstName ) return this.users[index].FirstName;
    if(value === MatChipArrayEnum.LastName ) return this.users[index].LastName;
    if(value === MatChipArrayEnum.Ages ) return this.users[index].Ages;
    if(value === MatChipArrayEnum.Email ) return this.users[index].Email;
    if(value === MatChipArrayEnum.Password ) return this.users[index].Password;
    else return "";
  }

  addBackToForm(index: IUserDto["index"], firstName: IUserDto["firstName"], lastName: IUserDto["lastName"], ages: IUserDto["ages"],email: IUserDto["email"], password: IUserDto["password"]): void {
      this.controlFirstName.setValue(firstName);
      this.controlLastName.setValue(lastName);
      this.controlAges.setValue(ages);
      this.controlEmail.setValue(email);
      this.controlPassword.setValue(password);
      this.setIsTabConfigData(false)
      console.log(this.users)
      if (index === 1) {
        this.setIsTabConfigData(true)
      }
  }
}
