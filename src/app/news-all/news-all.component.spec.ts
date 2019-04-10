import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAllComponent } from './news-all.component';

describe('NewsAllComponent', () => {
  let component: NewsAllComponent;
  let fixture: ComponentFixture<NewsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
