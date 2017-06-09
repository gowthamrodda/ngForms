import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdTabsetPillsComponent } from './ngbd-tabset-pills.component';

describe('NgbdTabsetPillsComponent', () => {
  let component: NgbdTabsetPillsComponent;
  let fixture: ComponentFixture<NgbdTabsetPillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdTabsetPillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdTabsetPillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
