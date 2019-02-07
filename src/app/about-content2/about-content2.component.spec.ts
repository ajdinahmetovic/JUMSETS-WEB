import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutContent2Component } from './about-content2.component';

describe('AboutContent2Component', () => {
  let component: AboutContent2Component;
  let fixture: ComponentFixture<AboutContent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutContent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
