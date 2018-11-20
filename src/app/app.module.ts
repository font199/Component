import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// import ngx-translate and the http loader
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

//PrimeNG
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { DropdownModule} from 'primeng/dropdown';
import {StepsModule} from 'primeng/steps';
import {CardModule} from 'primeng/card';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputSwitchModule} from 'primeng/inputswitch';
import {RadioButtonModule} from 'primeng/radiobutton';

//Font awesome
import { AngularFontAwesomeModule } from 'angular-font-awesome';


//Componentes
import { StepsComponent } from './Components/steps/steps.component';
import { LlistatComponent } from './llistat/llistat.component';
import { AlbaraComponent } from './albara/albara.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { ListStepsComponent } from './Components/list-steps/list-steps.component';
import { PostItComponent } from './Components/post-it/post-it.component';
import { TitolSubtitolComponent } from './Components/titol-subtitol/titol-subtitol.component';
import { BensComponent } from './Components/bens/bens.component';
import { DetallComponent } from './Components/detall/detall.component';
import { TrasllatComponent } from './Components/trasllat/trasllat.component';
import { SwitchComboComponent } from './Components/switch-combo/switch-combo.component';
import { MobiliariComponent } from './Components/mobiliari/mobiliari.component';



@NgModule({
  declarations: [
    AppComponent,
    AlbaraComponent,
    LlistatComponent,
    StepsComponent,
    SolicitudComponent,
    ListStepsComponent,
    PostItComponent,
    TitolSubtitolComponent,
    BensComponent,
    DetallComponent,
    TrasllatComponent,
    SwitchComboComponent,
    MobiliariComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputSwitchModule,
    CommonModule,
    RadioButtonModule,
    TranslateModule,
    InputTextareaModule,
    DropdownModule,
    FormsModule,
    CheckboxModule,
    AngularFontAwesomeModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    StepsModule,
    CardModule,
    HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
          })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/",".json");
}
