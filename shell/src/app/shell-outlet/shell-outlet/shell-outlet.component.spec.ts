import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellOutletComponent } from './shell-outlet.component';

describe('ShellOutletComponent', () => {
  let component: ShellOutletComponent;
  let fixture: ComponentFixture<ShellOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShellOutletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
