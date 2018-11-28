import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobleComponent } from './moble.component';

xdescribe('MobleComponent', () => {
  let component: MobleComponent;
  let fixture: ComponentFixture<MobleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
