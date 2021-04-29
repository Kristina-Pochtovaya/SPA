import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[matTabContent]',
})
export class PageTabDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

export default PageTabDirective;
