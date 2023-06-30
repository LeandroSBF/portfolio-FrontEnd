import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosComponent } from './logos.component';

describe('LogoAPComponent', () => {
  let component: LogosComponent;
  let fixture: ComponentFixture<LogosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogosComponent],
    });
    fixture = TestBed.createComponent(LogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
