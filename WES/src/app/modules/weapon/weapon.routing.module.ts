import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeaponPageComponent } from './weapon-page/weapon-page.component';

const routes: Routes = [
  {
    path: '',
    component: WeaponPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeaponRoutingModule {
  constructor(){
    console.log("I am Weapon")
  }
 }
