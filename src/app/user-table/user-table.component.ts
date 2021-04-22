import { Component, OnInit, Input, ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';
import { UserMore } from '../third-page/models/userMore.model';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserTableComponent implements OnInit {

  @Input() usersMore: UserMore[];

  constructor(private _changeDetectorRef: ChangeDetectorRef) {
    setInterval(() => {
      this._changeDetectorRef.markForCheck();
    }, 0)
   }

  ngOnInit(): void {
    console.log(this.usersMore)
  }

}
