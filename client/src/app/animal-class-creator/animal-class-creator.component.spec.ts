import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalClassCreatorComponent } from './animal-class-creator.component';

describe('AnimalClassCreatorComponent', () => {
  let component: AnimalClassCreatorComponent;
  let fixture: ComponentFixture<AnimalClassCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalClassCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalClassCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
