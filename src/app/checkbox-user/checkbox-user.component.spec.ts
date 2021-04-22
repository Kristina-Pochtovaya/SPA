import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxUserComponent } from './checkbox-user.component';

describe('CheckboxUserComponent', () => {
  let component: CheckboxUserComponent;
  let fixture: ComponentFixture<CheckboxUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
