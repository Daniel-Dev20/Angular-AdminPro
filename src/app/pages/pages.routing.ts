import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AuthGuard } from '../guards/auth.guard';


const routes: Routes = [

    {
        path: 'dashboard',
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
          { path: '',         component: DashboardComponent },
          { path: 'progress', component: ProgressComponent },
          { path: 'grafica1', component: Grafica1Component },
          {path:  'account',  component:AccountSettingsComponent},
          {path:  'promesas', component: PromesasComponent},
          {path:  'rxjs',     component:RxjsComponent}
        ]
      },

]

@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule {}