import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KonsultacijeComponent } from './konsultacije.component';

describe('KonsultacijeComponent', () => {
  let component: KonsultacijeComponent;
  let fixture: ComponentFixture<KonsultacijeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KonsultacijeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KonsultacijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
