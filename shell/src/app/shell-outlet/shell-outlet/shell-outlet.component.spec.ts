import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { ShellOutletComponent } from './shell-outlet.component';

describe('ShellOutletComponent', () => {
  let component: ShellOutletComponent;
  let fixture: ComponentFixture<ShellOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellOutletComponent],
      imports: [RouterTestingModule, NgbCollapseModule],
    }).compileComponents();
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
