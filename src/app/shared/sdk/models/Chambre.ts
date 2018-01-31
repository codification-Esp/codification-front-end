/* tslint:disable */
import {
  Reservation
} from '../index';

declare var Object: any;
export interface ChambreInterface {
  "numchambre": number;
  "nbremaxoccupants": number;
  "id"?: number;
  "couloirId"?: number;
  reservations?: Reservation[];
}

export class Chambre implements ChambreInterface {
  "numchambre": number;
  "nbremaxoccupants": number;
  "id": number;
  "couloirId": number;
  reservations: Reservation[];
  constructor(data?: ChambreInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Chambre`.
   */
  public static getModelName() {
    return "Chambre";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Chambre for dynamic purposes.
  **/
  public static factory(data: ChambreInterface): Chambre{
    return new Chambre(data);
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
      name: 'Chambre',
      plural: 'Chambres',
      path: 'Chambres',
      idName: 'id',
      properties: {
        "numchambre": {
          name: 'numchambre',
          type: 'number'
        },
        "nbremaxoccupants": {
          name: 'nbremaxoccupants',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "couloirId": {
          name: 'couloirId',
          type: 'number'
        },
      },
      relations: {
        reservations: {
          name: 'reservations',
          type: 'Reservation[]',
          model: 'Reservation',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'chambreId'
        },
      }
    }
  }
}
