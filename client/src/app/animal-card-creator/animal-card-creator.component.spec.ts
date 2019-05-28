import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalCardCreatorComponent } from './animal-card-creator.component';

describe('AnimalCardCreatorComponent', () => {
  let component: AnimalCardCreatorComponent;
  let fixture: ComponentFixture<AnimalCardCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalCardCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalCardCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
