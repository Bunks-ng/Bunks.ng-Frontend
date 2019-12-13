import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { GeneralComponent } from './pages/general/general.component';
import {AppService} from './services/app.service';
import { LandingComponent } from './pages/general/landing/landing.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ApartmentSpacesComponent } from './pages/general/apartment-spaces/apartment-spaces.component';
import { ApartmentCardsComponent } from './pages/general/apartment-cards/apartment-cards.component';
import { ApartmentDetailsComponent } from './pages/general/apartment-details/apartment-details.component';
import { ExperienceStartComponent } from './pages/general/experience-start/experience-start.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { ForgotComponent } from './pages/auth/forgot/forgot.component';
import { LandlordPortfolioComponent } from './pages/general/landlord-portfolio/landlord-portfolio.component';
import { UserSettingsComponent } from './pages/general/user-settings/user-settings.component';
import { PasswordSettingComponent } from './pages/general/password-setting/password-setting.component';
import { HostHostelComponent } from './pages/general/host-hostel/host-hostel.component';
import { HostApartmentComponent } from './pages/general/host-apartment/host-apartment.component';
import { StayComponent } from './pages/general/stay/stay.component';
import { StayPictureComponent } from './pages/general/stay-picture/stay-picture.component';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      scopes: [
        'public_profile',
        'email',
        'user_likes',
        'user_friends'
      ],
      customParameters: {
        'auth_type': 'reauthenticate'
      },
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
    },
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    }
  ],
  tosUrl: '#',
  privacyPolicyUrl: '#',
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GeneralComponent,
    LandingComponent,
    FooterComponent,
    ApartmentSpacesComponent,
    ApartmentCardsComponent,
    ApartmentDetailsComponent,
    ExperienceStartComponent,
    LoginComponent,
    SignupComponent,
    ForgotComponent,
    LandlordPortfolioComponent,
    UserSettingsComponent,
    PasswordSettingComponent,
    HostHostelComponent,
    HostApartmentComponent,
    StayComponent,
    StayPictureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
