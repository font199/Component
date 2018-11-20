import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiliariComponent } from './mobiliari.component';

describe('MobiliariComponent', () => {
  let component: MobiliariComponent;
  let fixture: ComponentFixture<MobiliariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobiliariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobiliariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
