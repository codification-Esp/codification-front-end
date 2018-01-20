import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MaterialModule} from './material.module';
import{FormsModule} from '@angular/forms';
import { MatButtonModule, MatProgressBarModule, MatExpansionModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './/app-routing.module';
import { ReservationComponent } from './reservation/reservation.component';
import { InformationComponent } from './information/information.component';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ReservationComponent,
    InformationComponent,
    DeconnexionComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
