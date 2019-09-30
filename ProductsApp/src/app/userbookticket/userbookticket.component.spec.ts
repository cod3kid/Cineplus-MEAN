import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbookticketComponent } from './userbookticket.component';

describe('UserbookticketComponent', () => {
  let component: UserbookticketComponent;
  let fixture: ComponentFixture<UserbookticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserbookticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserbookticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
