import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoditeljiComponent } from './roditelji.component';

describe('RoditeljiComponent', () => {
  let component: RoditeljiComponent;
  let fixture: ComponentFixture<RoditeljiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoditeljiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoditeljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
