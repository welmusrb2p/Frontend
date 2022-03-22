import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ExplosivesRoutingModule } from './explosives.routing.module';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { ExplosivesComponent } from './explosives-page/explosives-page.component';

@NgModule({
  declarations: [
    ExplosivesComponent

  ],
  imports: [
    CommonModule,
    ExplosivesRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    NgxSpinnerModule
    ],
    providers: [NgxSpinnerService],
})
export class ExplosiveModule { }
