import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteCursoComponentComponent } from './teste-curso-component.component';

describe('TesteCursoComponentComponent', () => {
  let component: TesteCursoComponentComponent;
  let fixture: ComponentFixture<TesteCursoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteCursoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteCursoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
