import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutContent3Component } from './about-content3.component';

describe('AboutContent3Component', () => {
  let component: AboutContent3Component;
  let fixture: ComponentFixture<AboutContent3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutContent3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutContent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
