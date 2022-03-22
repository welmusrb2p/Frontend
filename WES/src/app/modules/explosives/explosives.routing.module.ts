import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExplosivesComponent } from './explosives-page/explosives-page.component';

const routes: Routes = [
  {
    path: '',
    component: ExplosivesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExplosivesRoutingModule {
  constructor(){
    console.log("I am Explosive")
  }
 }
