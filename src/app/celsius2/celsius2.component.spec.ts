import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Celsius2Component } from './celsius2.component';

describe('Celsius2Component', () => {
  let component: Celsius2Component;
  let fixture: ComponentFixture<Celsius2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Celsius2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Celsius2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
