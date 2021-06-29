import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapesComponent } from './landscapes.component';

describe('LandscapesComponent', () => {
  let component: LandscapesComponent;
  let fixture: ComponentFixture<LandscapesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandscapesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandscapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
