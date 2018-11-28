import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallComponent } from './detall.component';

xdescribe('DetallComponent', () => {
  let component: DetallComponent;
  let fixture: ComponentFixture<DetallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
