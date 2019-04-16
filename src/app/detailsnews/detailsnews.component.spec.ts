import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsnewsComponent } from './detailsnews.component';

describe('DetailsnewsComponent', () => {
  let component: DetailsnewsComponent;
  let fixture: ComponentFixture<DetailsnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
