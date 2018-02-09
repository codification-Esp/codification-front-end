import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  user={
    batiment:"Batiment A",
    etage:" deuxieme etage",
    couloir:"couloirGouche",
    numeroCambre:"2",
    position:"Position Gauche"

  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }
  reservation(){
    this.dataService.post("Accounts/resevation",this.user)
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
