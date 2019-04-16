import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmjerComponent } from './smjer.component';

describe('SmjerComponent', () => {
  let component: SmjerComponent;
  let fixture: ComponentFixture<SmjerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmjerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmjerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
