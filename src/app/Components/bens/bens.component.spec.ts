import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BensComponent } from './bens.component';

xdescribe('BensComponent', () => {
  let component: BensComponent;
  let fixture: ComponentFixture<BensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
