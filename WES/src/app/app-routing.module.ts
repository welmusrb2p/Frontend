import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthorizedComponent } from './core/components/unauthorized/unauthorized.component';
import { AuthGuard } from './core/guards/auth-guard';
import { IndexComponent } from './layout/index/index.component';
import { CustomformbuilderComponent } from './userManagement/customformbuilder/customformbuilder.component';
import { LoginComponent } from './userManagement/login/login.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent 
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent 
  },
  
  { 
    path: '' ,
    component: IndexComponent ,
    canActivate:[AuthGuard],
    children:[
    {
      path: 'Customformbuilder', 
      component: CustomformbuilderComponent,
      canActivate:[AuthGuard]
    },
   {
    path: 'weapon',
    loadChildren: () => import('./modules/weapon/weapon.module').then(m => m.WeaponModule)
   },
   {
    path: 'explosives',
    loadChildren: () => import('./modules/explosives/explosives.module').then(m => m.ExplosiveModule)
  },
] 
},

{ 
    path: '**',
    component: UnauthorizedComponent // not found component.
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
