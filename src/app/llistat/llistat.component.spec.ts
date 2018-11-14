import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistatComponent } from './llistat.component';
import { TareasService } from './shared/tareas.service';

import { FormsModule } from '@angular/forms';

import { DropdownModule} from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

import 'rxjs/add/observable/empty';
import { Observable } from 'rxjs';
import { Tarea } from './shared/tarea';

describe('LlistatComponent', () => {
  let component: LlistatComponent;
  let fixture: ComponentFixture<LlistatComponent>;

  let servicio: TareasService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlistatComponent ],
      providers: [TareasService],
      imports:[DropdownModule, 
        TableModule,
        ButtonModule,
        InputTextModule,
        FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlistatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    servicio = TestBed.get(TareasService);
  });



  it(' El component tindria de ser creat', () => {
    expect(component).toBeTruthy();
  });

  it('El servei getTareas tindria de ser cridat', function() {
    spyOn(servicio, 'getTareas').and.callFake( () => {
      return Observable.empty();
    });
  
    component.ngOnInit();
    expect(servicio.getTareas).toHaveBeenCalled();
  });


  it('Init: ha de carreagar les Tareas', () => { 
    const tareas: Tarea[] = [{
      nom: 'Tarea1',
      descripcio: 'Desc tarea 1',
      dataCreacio: '18/02/2000',
      tipus: 'tipus 1',
      etiqueta: 'etiqueta 1',
      periodicitat: 'Mensual',
    },
    {
      nom: 'Tarea2',
      descripcio: 'descripció tarea2',
      dataCreacio: '12/03/2034',
      tipus: 'tipus 2',
      etiqueta: 'etiqueta2',
      periodicitat: 'Setmanal',
    },
  ];

    //Espies el "servicio" i si algu crida a "getTareas" llavors no l'executas 
    // i retornas l'observable generat
    spyOn(servicio, 'getTareas').and.returnValue(Observable.of(tareas));

    component.ngOnInit();
    expect(component.tareas).toBe(tareas);
    
  });




});
