import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsComponent } from './steps.component';

import {StepsModule} from 'primeng/steps';
import {MenuItem} from 'primeng/api';

xdescribe('StepsComponent', () => {
  let component: StepsComponent;
  let fixture: ComponentFixture<StepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
