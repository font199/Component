import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasllatComponent } from './trasllat.component';

xdescribe('TrasllatComponent', () => {
  let component: TrasllatComponent;
  let fixture: ComponentFixture<TrasllatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrasllatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrasllatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
