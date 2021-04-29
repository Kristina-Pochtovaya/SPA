import {
  Component, Input, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Output,
  EventEmitter,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { User, IUserDto } from '../second-page/models/user.model';
import { matChipArray, ImatChipArrayDto, MatChipArrayEnum } from './matChip.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoComponent implements OnInit {
  @Input() users:User[];

  @Input() controlFirstName: FormControl;

  @Input() controlLastName: FormControl;

  @Input() controlAges: FormControl;

  @Input() controlEmail: FormControl;

  @Input() controlPassword: FormControl;

  @Input() isTabConfigData: boolean;

  @Output() newSetIndexEvent = new EventEmitter<number>();

  matChipArray: ImatChipArrayDto[] = matChipArray;

  constructor(private cd: ChangeDetectorRef) { }

  detectChanges(): void {
    this.cd.detectChanges();
    console.log('fsgfds');
  }

  ngOnInit(): void {
    console.log(this.users);
  }

  setIndex(idx: number) {
    this.newSetIndexEvent.emit(idx);
  }

  setTextFromUsers(value: string, index: number): string {
    if (value === MatChipArrayEnum.Id) return `User ${index + 2}`;
    if (value === MatChipArrayEnum.FirstName) return this.users[index].FirstName;
    if (value === MatChipArrayEnum.LastName) return this.users[index].LastName;
    if (value === MatChipArrayEnum.Ages) return this.users[index].Ages;
    if (value === MatChipArrayEnum.Email) return this.users[index].Email;
    if (value === MatChipArrayEnum.Password) return this.users[index].Password;
    return '';
  }

  addBackToForm(index: IUserDto['index'], firstName: IUserDto['firstName'], lastName: IUserDto['lastName'], ages: IUserDto['ages'], email: IUserDto['email'], password: IUserDto['password']): void {
    this.controlFirstName.setValue(firstName);
    this.controlLastName.setValue(lastName);
    this.controlAges.setValue(ages);
    this.controlEmail.setValue(email);
    this.controlPassword.setValue(password);
    console.log(this.users);
  }
}

export default UserInfoComponent;
