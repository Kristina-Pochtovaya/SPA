import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-input-user',
  templateUrl: './input-user.component.html',
  styleUrls: ['./input-user.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputUserComponent implements OnInit {

  @Input() control: any;
  @Input() id: string;
  @Input() class: string;
  @Input() classLabel: string;
  @Input() textLabel: string;
  @Input() type: any;

  constructor() { }

  ngOnInit() { }
}
