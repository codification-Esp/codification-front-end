/* tslint:disable */
import { Injectable } from '@angular/core';
import { Account } from '../../models/Account';
import { Etudiant } from '../../models/Etudiant';
import { Batiment } from '../../models/Batiment';
import { Etage } from '../../models/Etage';
import { Couloir } from '../../models/Couloir';
import { Chambre } from '../../models/Chambre';
import { Contraintes } from '../../models/Contraintes';
import { CodeReservation } from '../../models/CodeReservation';
import { Email } from '../../models/Email';
import { Reservation } from '../../models/Reservation';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Account: Account,
    Etudiant: Etudiant,
    Batiment: Batiment,
    Etage: Etage,
    Couloir: Couloir,
    Chambre: Chambre,
    Contraintes: Contraintes,
    CodeReservation: CodeReservation,
    Email: Email,
    Reservation: Reservation,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
