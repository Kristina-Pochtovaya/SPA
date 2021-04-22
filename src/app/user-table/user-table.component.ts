import { Component, OnInit, Input } from '@angular/core';
import { UserMore } from '../third-page/models/userMore.model';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.less'],

})
export class UserTableComponent implements OnInit {

  @Input() usersMore: UserMore[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.usersMore)
  }

}
