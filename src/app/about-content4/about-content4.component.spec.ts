import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutContent4Component } from './about-content4.component';

describe('AboutContent4Component', () => {
  let component: AboutContent4Component;
  let fixture: ComponentFixture<AboutContent4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutContent4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutContent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
