import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchComboComponent } from './switch-combo.component';

xdescribe('SwitchComboComponent', () => {
  let component: SwitchComboComponent;
  let fixture: ComponentFixture<SwitchComboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchComboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
