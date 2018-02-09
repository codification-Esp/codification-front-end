import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'dans notre plate-forme SAMA CODIFICATION';

  user={
    nom:"",
    prenom:"",
    dateNaiss:"",
    lieuNaiss:"",
    email:"",
    departement:"",
    option:"",
    niveau:"",
    username:"",
    password:""
    
  }
  constructor(private dataService:DataService) { }

  ngOnInit() {
  }
  compte()
  {
    this.dataService.post("Etudiant/Etudiants",this.user)
    .subscribe(
      success=>{
        console.log(success);
      },
      err=>{
        console.log(err);
      }
    );
  }

}