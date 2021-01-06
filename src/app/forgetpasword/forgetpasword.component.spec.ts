import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpaswordComponent } from './forgetpasword.component';

describe('ForgetpaswordComponent', () => {
  let component: ForgetpaswordComponent;
  let fixture: ComponentFixture<ForgetpaswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetpaswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetpaswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
