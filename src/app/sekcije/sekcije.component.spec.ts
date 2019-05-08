import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SekcijeComponent } from './sekcije.component';

describe('SekcijeComponent', () => {
  let component: SekcijeComponent;
  let fixture: ComponentFixture<SekcijeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SekcijeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SekcijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
