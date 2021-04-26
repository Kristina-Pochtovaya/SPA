import { Component, Input, OnInit,ChangeDetectionStrategy, DoCheck, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../second-page/models/user.model';
import { IUserDto } from '../second-page/second-page.component';

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
  @Output() newSetIndexEvent = new EventEmitter<number>();

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

  addBackToForm(firstName: IUserDto["firstName"], lastName: IUserDto["lastName"], ages: IUserDto["ages"],email: IUserDto["email"], password: IUserDto["password"]): void {
    this.controlFirstName.setValue(firstName);
    this.controlLastName.setValue(lastName);
    this.controlAges.setValue(ages);
    this.controlEmail.setValue(email);
    this.controlPassword.setValue(password);
    console.log(this.users)
  }

}
