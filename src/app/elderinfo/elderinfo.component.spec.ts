import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElderinfoComponent } from './elderinfo.component';

describe('ElderinfoComponent', () => {
  let component: ElderinfoComponent;
  let fixture: ComponentFixture<ElderinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElderinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElderinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
