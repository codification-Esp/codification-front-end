import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
      
  user={
    username:"",
    password:""
  }

  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  login()
  {
    this.dataService.post("Accounts/login",this.user)
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
