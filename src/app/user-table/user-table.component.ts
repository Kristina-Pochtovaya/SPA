import {
  Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, DoCheck, Output,
  EventEmitter,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserMore, IUserMoreDto } from '../third-page/models/userMore.model';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserTableComponent implements OnInit, DoCheck {
  @Input() usersMore: UserMore[];

  @Input() controlMale: FormControl;

  @Input() controlChildren: FormControl;

  @Input() controlJob: FormControl;

  @Output() newSetIndexEvent = new EventEmitter<number>();

  constructor(private cd: ChangeDetectorRef) { }

  ngDoCheck(): void {
    this.cd.detectChanges();
  }

  ngOnInit(): void {
    console.log(this.usersMore);
  }

  setIndex(idx: number) {
    this.newSetIndexEvent.emit(idx);
  }

  addBackToForm(male: IUserMoreDto['male'], children: IUserMoreDto['children'], job: IUserMoreDto['job']): void {
    this.controlMale.setValue(male);
    this.controlChildren.setValue(children);
    this.controlJob.setValue(job);
    console.log(this.usersMore);
  }
}

export default UserTableComponent;
