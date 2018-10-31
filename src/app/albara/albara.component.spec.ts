import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbaraComponent } from './albara.component';
import { DropdownModule } from 'primeng/dropdown';
import { AlbaraService } from './shared/albara.service';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from '../app.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import { Albara } from './shared/albara';

describe('AlbaraComponent', () => {
  let component: AlbaraComponent;
  let fixture: ComponentFixture<AlbaraComponent>;
  // li passem el "null" ja que no utilitzara el http perque no esta implementada la crida al back
  let servicio : AlbaraService; 
  let translate : TranslateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DropdownModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
          })],
      declarations: [ AlbaraComponent ],
      providers: [AlbaraService]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    servicio = TestBed.get(AlbaraService);
    translate = TestBed.get(TranslateService);
  });

  it('El component tindria de ser creat', () => {
    expect(component).toBeTruthy();
  });

  
  it('El servei getAlbara tindria de ser cridat', function() {
    spyOn(servicio, 'getAlbara').and.callFake( () => {
      return Observable.empty();
    });
  
    component.ngOnInit();
    expect(servicio.getAlbara).toHaveBeenCalled();
  });


  it('Init: ha de carreagar lalbara', () => { 
    const albara1: Albara = {
      numero: 1,
      empresa: 'empresa1',
      usuaris: 10,
      incidencies: 20,
      unitatsPrevistes: 30,
      unitatsRealitzades: 40,
      costPrevist: 50, 
      costFinal: 60
    };

    //Espies el "servicio" i si algu crida a "getAlbara" llavors no l'executas 
    // i retornas l'observable generat
    spyOn(servicio, 'getAlbara').and.returnValue(Observable.of(albara1));

    component.ngOnInit();
    expect(component.albara).toBe(albara1);
    
  });

  it('changeIdiom: lidioma a estat cambiat', () => { 
    let idiomaSeleccionat = component.selectedIdioma ;
    console.log('current'+translate.currentLang);
    console.log('iosiomaSelect'+idiomaSeleccionat);
    console.log('default'+translate.defaultLang);
    component.changedIdiom();
    console.log('current'+translate.currentLang);
    console.log('iosiomaSelect'+idiomaSeleccionat);
    console.log('default'+translate.defaultLang);
    expect(translate.currentLang).toBe(idiomaSeleccionat);
  });




});
