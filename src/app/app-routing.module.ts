import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { Page404Component } from './components/page404/page404.component';
import { DisplayAllComponent } from './components/request/display-all/display-all.component';
import { DisplayOneComponent } from './components/request/display-one/display-one.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'accueil'
  },
  {
    path: 'accueil',
    component: AccueilComponent
  },
  {
    path: 'requetes/1',
    component: DisplayOneComponent
  },
  {
    path: 'requetes',
    component: DisplayAllComponent
  },
  { path: '404', component: Page404Component },
  { path: '**', redirectTo: '404'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
