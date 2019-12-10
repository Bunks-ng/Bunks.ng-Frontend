import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './pages/general/general.component';
import {LandingComponent} from './pages/general/landing/landing.component';
import { ApartmentSpacesComponent } from './pages/general/apartment-spaces/apartment-spaces.component';
import { ApartmentDetailsComponent } from './pages/general/apartment-details/apartment-details.component';
import { ExperienceStartComponent } from './pages/general/experience-start/experience-start.component'; 
import { LoginComponent } from './pages/auth/login/login.component';
import { ForgotComponent } from './pages/auth/forgot/forgot.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { LandlordPortfolioComponent } from './pages/general/landlord-portfolio/landlord-portfolio.component';
import { UserSettingsComponent } from './pages/general/user-settings/user-settings.component';
import { PasswordSettingComponent } from './pages/general/password-setting/password-setting.component';


// {path: '', component: GeneralComponent},
const routes: Routes = [
  {path: '', component: GeneralComponent,
children: [
  {path: '', component: LandingComponent},
  {path: 'spaces', component: ApartmentSpacesComponent},
  {path: 'space-details', component: ApartmentDetailsComponent},
  {path: 'host-experience', component: ExperienceStartComponent},
  {path: 'auth', children: [
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'forgot', component: ForgotComponent}
  ]},
  {path: 'host-portfolio', component: LandlordPortfolioComponent},
  {path: 'landlord', children: [
    {path: 'update-profile', component: UserSettingsComponent},
    {path: 'password-setting', component: PasswordSettingComponent}
  ]}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
