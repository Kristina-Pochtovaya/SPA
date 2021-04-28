import { AfterViewInit, ComponentRef, ViewChild, } from '@angular/core';
import { ChangeDetectionStrategy, Component, ComponentFactoryResolver } from '@angular/core';
import { PageTabDirective } from '../page-tab.directive';
import { SecondPageComponent } from '../second-page/second-page.component';
import { tabConfig,ITabConfigDto } from '../tabConfig-model';
import { ThirdPageComponent } from '../third-page/third-page.component';

export interface IUserInfoDto {
  idx: number;
  FirstName: string;
  LastName: string;
  Ages: string;
  Email: string;
  Password: string;
}

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstPageComponent implements AfterViewInit {

  componentRef: ComponentRef<SecondPageComponent | ThirdPageComponent>;
  tabConfig: ITabConfigDto[] = tabConfig;

  @ViewChild(PageTabDirective, {static: true}) tabHost: PageTabDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
 
  ngAfterViewInit() {
     this.renderComponent(0)
   }

  public addContentTab(index: number) {
    setTimeout(() => {
        this.renderComponent(index);
    });
}

private renderComponent(index: number) {
  let component:any = tabConfig[0].component

  if (index === 0){
    component =  tabConfig[index].component;
  }
  else if (index === 1){
    component =  tabConfig[index].component;
  }

  this.tabHost.viewContainerRef.clear();
  const factory = this.componentFactoryResolver.resolveComponentFactory(component);
  this.tabHost.viewContainerRef.createComponent(factory);
}

}
