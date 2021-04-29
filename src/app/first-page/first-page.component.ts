import {
  AfterViewInit, ComponentRef, ViewChild, ChangeDetectionStrategy, Type, Component,
  ComponentFactoryResolver,
} from '@angular/core';
import { PageTabDirective } from '../page-tab.directive';
import { ItabConfigDataSecondPage, SecondPageComponent } from '../second-page/second-page.component';
import { ItabConfigDataThirdPage, ThirdPageComponent } from '../third-page/third-page.component';

export const tabConfig: ITabConfigDto[] = [
  {
    title: 'second page',
    component: SecondPageComponent,
    data: {
      idx: 1,
      firstName: 'Vasya',
      lastName: 'Pupkin',
      ages: '21',
      email: 'v.pupkin@mail.ru',
      password: '123456789',
    },
  },
  {
    title: 'third page',
    component: ThirdPageComponent,
    data: {
      idx: 1,
      male: 'Male',
      children: false,
      job: true,
    },
  },
];

export interface ITabConfigDto {
  title: string;
  component: Type <SecondPageComponent | ThirdPageComponent>;
  data: ItabConfigDataSecondPage | ItabConfigDataThirdPage;
}

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstPageComponent implements AfterViewInit {
  componentRef: ComponentRef<SecondPageComponent | ThirdPageComponent>;

  tabConfig: ITabConfigDto[] = tabConfig;

  @ViewChild(PageTabDirective, { static: true }) tabHost: PageTabDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    this.renderComponent(0);
  }

  public addContentTab(index: number) {
    setTimeout(() => {
      this.renderComponent(index);
    });
  }

  private renderComponent(index: number) {
    const component = index === 0 ? tabConfig[0].component : tabConfig[1].component;
    const tabConfigData = index === 0 ? tabConfig[0].data : tabConfig[1].data;
    this.tabHost.viewContainerRef.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = this.tabHost.viewContainerRef.createComponent(factory);
    componentRef.instance.tabConfigData = tabConfigData;
  }
}
