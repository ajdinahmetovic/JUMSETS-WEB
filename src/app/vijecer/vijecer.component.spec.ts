import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VijecerComponent } from './vijecer.component';

describe('VijecerComponent', () => {
  let component: VijecerComponent;
  let fixture: ComponentFixture<VijecerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VijecerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VijecerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
