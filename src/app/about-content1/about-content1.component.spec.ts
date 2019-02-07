import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutContent1Component } from './about-content1.component';

describe('AboutContent1Component', () => {
  let component: AboutContent1Component;
  let fixture: ComponentFixture<AboutContent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutContent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutContent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
