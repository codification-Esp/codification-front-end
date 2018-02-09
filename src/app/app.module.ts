import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MaterialModule} from './material.module';
import{FormsModule} from '@angular/forms';
import { MatButtonModule, MatProgressBarModule, MatExpansionModule, MatIconModule } from '@angular/material';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AppRoutingModule } from './/app-routing.module';
import { ReservationComponent } from './reservation/reservation.component';
import { InformationComponent } from './information/information.component';
import { DataService } from './data.service';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConnexionComponent,
    ReservationComponent,
    InformationComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatIconModule,
    HttpModule
  ],
  providers: [DataService],
  schemas: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
