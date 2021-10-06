import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingmodule } from './auth/auth.routing'; 
import { Page404Component } from './page404/page404.component';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [


  //path: '/dashboard', PagesRoutingmodule
  //path: '/auth', AuthRoutingModule


  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  { path: '**', component: Page404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    PagesRoutingModule,
    AuthRoutingmodule
  ]
})
export class AppRoutingModule { }
