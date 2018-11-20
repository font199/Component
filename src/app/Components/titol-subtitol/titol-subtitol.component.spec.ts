import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitolSubtitolComponent } from './titol-subtitol.component';

describe('TitolSubtitolComponent', () => {
  let component: TitolSubtitolComponent;
  let fixture: ComponentFixture<TitolSubtitolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitolSubtitolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitolSubtitolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
