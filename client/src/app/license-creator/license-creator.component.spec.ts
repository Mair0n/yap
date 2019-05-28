import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseCreatorComponent } from './license-creator.component';

describe('LicenseCreatorComponent', () => {
  let component: LicenseCreatorComponent;
  let fixture: ComponentFixture<LicenseCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenseCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
