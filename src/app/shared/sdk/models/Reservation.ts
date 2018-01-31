/* tslint:disable */
import {
  Account,
  Chambre
} from '../index';

declare var Object: any;
export interface ReservationInterface {
  "datereserv": Date;
  "confirmation": boolean;
  "position": number;
  "id"?: number;
  "accountId"?: number;
  "chambreId"?: number;
  account?: Account;
  chambre?: Chambre;
}

export class Reservation implements ReservationInterface {
  "datereserv": Date;
  "confirmation": boolean;
  "position": number;
  "id": number;
  "accountId": number;
  "chambreId": number;
  account: Account;
  chambre: Chambre;
  constructor(data?: ReservationInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Reservation`.
   */
  public static getModelName() {
    return "Reservation";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Reservation for dynamic purposes.
  **/
  public static factory(data: ReservationInterface): Reservation{
    return new Reservation(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Reservation',
      plural: 'Reservations',
      path: 'Reservations',
      idName: 'id',
      properties: {
        "datereserv": {
          name: 'datereserv',
          type: 'Date'
        },
        "confirmation": {
          name: 'confirmation',
          type: 'boolean',
          default: false
        },
        "position": {
          name: 'position',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "accountId": {
          name: 'accountId',
          type: 'number'
        },
        "chambreId": {
          name: 'chambreId',
          type: 'number'
        },
      },
      relations: {
        account: {
          name: 'account',
          type: 'Account',
          model: 'Account',
          relationType: 'belongsTo',
                  keyFrom: 'accountId',
          keyTo: 'id'
        },
        chambre: {
          name: 'chambre',
          type: 'Chambre',
          model: 'Chambre',
          relationType: 'belongsTo',
                  keyFrom: 'chambreId',
          keyTo: 'id'
        },
      }
    }
  }
}
