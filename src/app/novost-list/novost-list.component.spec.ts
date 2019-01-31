import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovostListComponent } from './novost-list.component';

describe('NovostListComponent', () => {
  let component: NovostListComponent;
  let fixture: ComponentFixture<NovostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
