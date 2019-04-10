import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffcardComponent } from './staffcard.component';

describe('StaffcardComponent', () => {
  let component: StaffcardComponent;
  let fixture: ComponentFixture<StaffcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
