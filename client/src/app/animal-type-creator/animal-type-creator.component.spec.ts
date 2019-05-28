import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalTypeCreatorComponent } from './animal-type-creator.component';

describe('AnimalTypeCreatorComponent', () => {
  let component: AnimalTypeCreatorComponent;
  let fixture: ComponentFixture<AnimalTypeCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalTypeCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalTypeCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
