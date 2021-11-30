import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyElementsModule } from '@angular-extensions/elements';

import { VisualizationComponent } from './visualization.component';

@Component({
  template: '<div id="auth0-login-container"></div>',
})
class MockSimpleComponent {}

describe('VisualizationComponent', () => {
  let component: VisualizationComponent;
  let fixture: ComponentFixture<VisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisualizationComponent, MockSimpleComponent],
      imports: [LazyElementsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
