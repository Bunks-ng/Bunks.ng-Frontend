import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { GeneralComponent } from './pages/general/general.component';
import {AppService} from './services/app.service';
import { LandingComponent } from './pages/general/landing/landing.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ApartmentSpacesComponent } from './pages/general/apartment-spaces/apartment-spaces.component';
import { ApartmentCardsComponent } from './pages/general/apartment-cards/apartment-cards.component';
import { ApartmentDetailsComponent } from './pages/general/apartment-details/apartment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GeneralComponent,
    LandingComponent,
    FooterComponent,
    ApartmentSpacesComponent,
    ApartmentCardsComponent,
    ApartmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
