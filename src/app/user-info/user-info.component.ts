import {
  Component, Input, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Output,
  EventEmitter,
} from '@angular/core';

import { User, IUserDto } from '../second-page/models/user.model';
import { IUserMoreDto, UserMore } from '../third-page/models/userMore.model';
import { matChipArray, ImatChipArrayDto, MatChipArrayEnum } from './matChip.model';
import { ImatChip3PageArrayDto, matChip3PageArray, MatChip3PageArrayEnum } from './matChip3Page.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoComponent implements OnInit {
  @Input() users:User[];

  @Input() usersMore: UserMore[];

  @Output() newSetIndexEvent = new EventEmitter<number>();

  @Output() newAddBackToForm2dPage = new EventEmitter<IUserDto>();

  @Output() newAddBackToForm3dPage = new EventEmitter<IUserMoreDto>();

  matChipArray: ImatChipArrayDto[] = matChipArray;

  matChip3PageArray: ImatChip3PageArrayDto[] = matChip3PageArray;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log(this.users);
  }

  detectChanges() {
    this.cd.markForCheck();
  }

  setIndex(idx: number) {
    this.newSetIndexEvent.emit(idx);
  }

  addBackToForm2Page(firstName: IUserDto['firstName'], lastName: IUserDto['lastName'],
    ages: IUserDto['ages'], email: IUserDto['email'], password: IUserDto['password']) {
    this.newAddBackToForm2dPage.emit({
      firstName, lastName, ages, email, password,
    });
  }

  addBackToForm3dPage(male: IUserMoreDto['male'], children: IUserMoreDto['children'], job: IUserMoreDto['job']) {
    this.newAddBackToForm3dPage.emit({
      male, children, job,
    });
  }

  setTextFromUsers2Page(value: string, index: number): string {
    if (value === MatChipArrayEnum.Id) return `User ${index + 1}`;
    if (value === MatChipArrayEnum.FirstName) return this.users[index].firstName;
    if (value === MatChipArrayEnum.LastName) return this.users[index].lastName;
    if (value === MatChipArrayEnum.Ages) return this.users[index].ages;
    if (value === MatChipArrayEnum.Email) return this.users[index].email;
    if (value === MatChipArrayEnum.Password) return this.users[index].password;
    return '';
  }

  setTextFromUsers3Page(value: string | boolean, index: number): string | boolean {
    if (value === MatChip3PageArrayEnum.Id) return `User ${index + 1}`;
    if (value === MatChip3PageArrayEnum.Male) return this.usersMore[index].male;
    if (value === MatChip3PageArrayEnum.Children) return this.usersMore[index].children;
    if (value === MatChip3PageArrayEnum.Job) return this.usersMore[index].job;
    return '';
  }
}

export default UserInfoComponent;
