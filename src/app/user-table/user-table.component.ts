import { Component, OnInit, Input, ChangeDetectionStrategy,ChangeDetectorRef, DoCheck } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserMore } from '../third-page/models/userMore.model';
import { UserEnumMore } from '../third-page/third-page.component';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserTableComponent implements OnInit, DoCheck {

  @Input() usersMore: UserMore[];
  @Input() controlMale: FormControl;
  @Input() controlChildren: FormControl;
  @Input() controlJob: FormControl;

  constructor(private cd: ChangeDetectorRef) {  }

  ngDoCheck(): void {
      this.cd.detectChanges();
     }
  
  ngOnInit(): void {
    console.log(this.usersMore)
  }

  addBackToForm(value: string | boolean, index: number, name: string): void {
    if(name === UserEnumMore.Male) {this.controlMale.setValue(value)}
    if(name === UserEnumMore.Children) {this.controlChildren.setValue(value)}
    if(name === UserEnumMore.Job) {this.controlJob.setValue(value)}
    console.log(this.usersMore)
  }

}
