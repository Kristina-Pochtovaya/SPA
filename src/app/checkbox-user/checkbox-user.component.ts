import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-checkbox-user',
  templateUrl: './checkbox-user.component.html',
  styleUrls: ['./checkbox-user.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxUserComponent implements OnInit {

  @Input() control: any;
  @Input() id: string;
  @Input() class: string;
  @Input() classLabel: string;
  @Input() textLabel: string;

  constructor() { }

  ngOnInit(): void {
  }

}
