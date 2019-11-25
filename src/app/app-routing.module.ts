import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './pages/general/general.component';
import {LandingComponent} from './pages/general/landing/landing.component';
import { ApartmentSpacesComponent } from './pages/general/apartment-spaces/apartment-spaces.component';
import { ApartmentDetailsComponent } from './pages/general/apartment-details/apartment-details.component';
import { ExperienceStartComponent } from './pages/general/experience-start/experience-start.component'; 


// {path: '', component: GeneralComponent},
const routes: Routes = [
  {path: '', component: GeneralComponent,
children: [
  {path: '', component: LandingComponent},
  {path: 'spaces', component: ApartmentSpacesComponent},
  {path: 'space-details', component: ApartmentDetailsComponent},
  {path: 'experience', component: ExperienceStartComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
