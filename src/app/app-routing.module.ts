import { NgModule,Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import{AboutComponent} from './about/about.component';
import{HomeComponent} from './home/home.component';
import{ReservationComponent} from './reservation/reservation.component';
import{InformationComponent} from './information/information.component';
import{ DeconnexionComponent} from './deconnexion/deconnexion.component';



const routes : Routes=[
  
    {path: 'about', component: AboutComponent},
    {path: 'home', component: HomeComponent},
    {path:'reservation',component:ReservationComponent},
    {path:'information',component:InformationComponent},
    {path:'deconnexion',component:DeconnexionComponent},
    
    {path: '',redirectTo:'/about',pathMatch:'full'} 
]

@NgModule({

   imports: [ RouterModule.forRoot(routes) ],
   exports:[RouterModule]
   
 })
 export class AppRoutingModule { }
 