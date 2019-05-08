import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UceniciComponent } from './ucenici.component';

describe('UceniciComponent', () => {
  let component: UceniciComponent;
  let fixture: ComponentFixture<UceniciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UceniciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UceniciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
