import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalClassesComponent } from './animal-classes.component';

describe('AnimalClassesComponent', () => {
  let component: AnimalClassesComponent;
  let fixture: ComponentFixture<AnimalClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
