import { NgModule,Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import{ConnexionComponent} from './connexion/connexion.component';
import{HomeComponent} from './home/home.component';
import{ReservationComponent} from './reservation/reservation.component';
import{InformationComponent} from './information/information.component';




const routes : Routes=[
  
    {path: 'connexion', component: ConnexionComponent},
    {path: 'home', component: HomeComponent},
    {path:'reservation',component:ReservationComponent},
    {path:'information',component:InformationComponent},
    
    {path: '',redirectTo:'/connexion',pathMatch:'full'} 
]

@NgModule({

   imports: [ RouterModule.forRoot(routes) ],
   exports:[RouterModule]
   
 })
 export class AppRoutingModule { }
 