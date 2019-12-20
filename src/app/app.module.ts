import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FirebaseUIModule } from 'firebaseui-angular';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { firebase } from 'firebaseui-angular';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { GeneralComponent } from './pages/general/general.component';
import { AppService } from './services/app.service';
import { LandingComponent } from './pages/general/landing/landing.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ApartmentSpacesComponent } from './pages/general/apartment-spaces/apartment-spaces.component';
import { ApartmentCardsComponent } from './pages/general/apartment-cards/apartment-cards.component';
import { ApartmentDetailsComponent } from './pages/general/apartment-details/apartment-details.component';
import { ExperienceStartComponent } from './pages/general/experience-start/experience-start.component';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { firebaseUiAuthConfig } from './pages/auth/firebase-ui-auth/firebase-ui-auth-config';
import { LandlordPortfolioComponent } from './pages/general/landlord-portfolio/landlord-portfolio.component';
import { UserSettingsComponent } from './pages/general/user-settings/user-settings.component';
import { PasswordSettingComponent } from './pages/general/password-setting/password-setting.component';
import { HostHostelComponent } from './pages/general/host-hostel/host-hostel.component';
import { HostApartmentComponent } from './pages/general/host-apartment/host-apartment.component';
import { StayComponent } from './pages/general/stay/stay.component';
import { StayPictureComponent } from './pages/general/stay-picture/stay-picture.component';
import { AuthButtonComponent } from './pages/auth/auth-button/auth-button.component';

firebase.initializeApp(environment.firebaseConfig);
// This fixes an error of firebase not being initialized before calling a method on it
// in other parts of the appication. 

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
    SignInComponent,
    LandlordPortfolioComponent,
    UserSettingsComponent,
    PasswordSettingComponent,
    HostHostelComponent,
    HostApartmentComponent,
    StayComponent,
    StayPictureComponent,
    AuthButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
