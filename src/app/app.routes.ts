import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ParticipantmanagementComponent } from './participantmanagement/participantmanagement.component';
import { EventmanagementComponent } from './eventmanagement/eventmanagement.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './sidenav/sidenav.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: SidenavComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'eventmanagement',
        component: EventmanagementComponent,
      },
      {
        path: 'participantmanagement',
        component: ParticipantmanagementComponent,
      },
      {
        path: 'AboutUs',
        component: AboutusComponent,
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/login',
  },
  ];
  

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }