import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbaraRoutingModule } from './albara-routing.module';
import { AlbaraComponent } from './albara.component';
import { AlbaraService } from './shared/albara.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    AlbaraRoutingModule,
    TranslateModule,
    DropdownModule,
    FormsModule
  ],
  providers: [AlbaraService],
  declarations: [AlbaraComponent]
})
export class AlbaraModule { }
