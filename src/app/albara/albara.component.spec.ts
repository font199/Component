import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbaraComponent } from './albara.component';

describe('AlbaraComponent', () => {
  let component: AlbaraComponent;
  let fixture: ComponentFixture<AlbaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
