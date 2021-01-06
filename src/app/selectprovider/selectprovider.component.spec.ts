import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectproviderComponent } from './selectprovider.component';

describe('SelectproviderComponent', () => {
  let component: SelectproviderComponent;
  let fixture: ComponentFixture<SelectproviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectproviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
