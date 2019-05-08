import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SekcijedetailsComponent } from './sekcijedetails.component';

describe('SekcijedetailsComponent', () => {
  let component: SekcijedetailsComponent;
  let fixture: ComponentFixture<SekcijedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SekcijedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SekcijedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
