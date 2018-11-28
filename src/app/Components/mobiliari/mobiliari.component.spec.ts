import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiliariComponent } from './mobiliari.component';
import { FormsModule } from '@angular/forms';
import { MobleComponent } from './moble/moble.component';
import {SpinnerModule} from 'primeng/spinner';
import { Moble } from './moble';

describe('MobiliariComponent', () => {
  let component: MobiliariComponent;
  let fixture: ComponentFixture<MobiliariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MobiliariComponent,
        MobleComponent],
      imports:[
        FormsModule,
        SpinnerModule]
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

  it('New moble deberia añadir un mueble al mobiliario', () => {
    let sizeMobiliariOld, sizeMobiliariNew: number;

    sizeMobiliariOld = component.mobiliari.length;
    component.newMoble('llit');
    sizeMobiliariNew = component.mobiliari.length; 
    expect(sizeMobiliariNew).toBe(sizeMobiliariOld + 1);
  });

  it('New moble deberia añadir un mueble con los parametros por defecto', () => {
    component.newMoble('llit');
    let numMobles : number;
    numMobles = component.mobiliari.length;
    expect(component.mobiliari[numMobles-1].nom).toBe('llit');
    expect(component.mobiliari[numMobles-1].numero).toBe(1);
    expect(component.mobiliari[numMobles-1].categoria).toBe('');
    expect(component.mobiliari[numMobles-1].primerCategoria).toBe(false);
  });

  it('Borra moble deberia borrar un mueble del mobiliario', () => {
    component.newMoble('llit')
    let m : Moble = component.mobiliari[component.mobiliari.length-1];
    let sizeMobiliariOld, sizeMobiliariNew: number;
    sizeMobiliariOld = component.mobiliari.length;
    component.borrarMoble(m);
    sizeMobiliariNew = component.mobiliari.length; 
    expect(sizeMobiliariNew).toBe(sizeMobiliariOld - 1);
  }); 
 
  it('Estat Mostrar input text, pone a true la variable primerCategoria del mueble de debajo de la categoria',() => {
    component.newMoble('llit');
    let m : Moble = component.mobiliari[component.mobiliari.length-1];
    component.estatMostrarInputCategoria(m);
    expect(m.primerCategoria).toBe(true);
  });


  it('Estat Mostrar titol Categoria, pone el nombre de la categoria a la categoria del primer mueble de la categoria', () => {
    component.newMoble('llit');
    let m : Moble = component.mobiliari[component.mobiliari.length-1];
    component.estatMostrarInputCategoria(m);
    component.categoria = 'Menjador';
    component.estatMostratTitolCategoria(m);
    expect(m.categoria).toBe('Menjador');
    expect(component.categoria).toBe('');
  });











});
