import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { WeaponPageComponent } from './weapon-page/weapon-page.component';
import { WeaponRoutingModule } from './weapon.routing.module';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@NgModule({
  declarations: [
    WeaponPageComponent

  ],
  imports: [
    CommonModule,
    WeaponRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    NgxSpinnerModule
    ],
    providers: [NgxSpinnerService],
})
export class WeaponModule { }
