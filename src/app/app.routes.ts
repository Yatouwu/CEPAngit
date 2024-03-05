import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ParticipantmanagementComponent } from './participantmanagement/participantmanagement.component';
import { EventmanagementComponent } from './eventmanagement/eventmanagement.component';
import { AboutusComponent } from './aboutus/aboutus.component';

export const routes: Routes = [
    {
      path: "Home",
      component: HomeComponent
    },
    {
        path: "eventmanagement",
        component: EventmanagementComponent
    },
    {
      path: "participantmanagement",
      component: ParticipantmanagementComponent
    },
    {
      path: "AboutUs",
      component: AboutusComponent
    }
  ];
  

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }