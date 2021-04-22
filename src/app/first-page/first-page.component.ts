import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstPageComponent implements OnInit {

  ngOnInit(): void { }

}
