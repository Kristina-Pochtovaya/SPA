import { AfterViewInit, ViewChild } from '@angular/core';
import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { PageTabDirective } from '../page-tab.directive';
import { SecondPageComponent } from '../second-page/second-page.component';
import { ThirdPageComponent } from '../third-page/third-page.component';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstPageComponent implements AfterViewInit {

  componentRef: any;
  component: any;
  componentsList: any[] = [];

  tabConfig = [
    { title: 'second page', component: SecondPageComponent },
    { title: 'third page', component: ThirdPageComponent }
  ]

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

  this.component = "";
  if (index === 0){
    this.component =  this.tabConfig[index].component;
  }
  else if (index === 1){
    this.component =  this.tabConfig[index].component;
  }

  this.tabHost.viewContainerRef.clear();
  const factory = this.componentFactoryResolver.resolveComponentFactory(this.component);
  this.tabHost.viewContainerRef.createComponent(factory);
}

}
