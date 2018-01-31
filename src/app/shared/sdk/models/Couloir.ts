/* tslint:disable */
import {
  Chambre,
  Contraintes
} from '../index';

declare var Object: any;
export interface CouloirInterface {
  "nomcouloir": string;
  "id"?: number;
  "etageId"?: number;
  chambres?: Chambre[];
  contraintes?: Contraintes[];
}

export class Couloir implements CouloirInterface {
  "nomcouloir": string;
  "id": number;
  "etageId": number;
  chambres: Chambre[];
  contraintes: Contraintes[];
  constructor(data?: CouloirInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Couloir`.
   */
  public static getModelName() {
    return "Couloir";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Couloir for dynamic purposes.
  **/
  public static factory(data: CouloirInterface): Couloir{
    return new Couloir(data);
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
      name: 'Couloir',
      plural: 'Couloirs',
      path: 'Couloirs',
      idName: 'id',
      properties: {
        "nomcouloir": {
          name: 'nomcouloir',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "etageId": {
          name: 'etageId',
          type: 'number'
        },
      },
      relations: {
        chambres: {
          name: 'chambres',
          type: 'Chambre[]',
          model: 'Chambre',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'couloirId'
        },
        contraintes: {
          name: 'contraintes',
          type: 'Contraintes[]',
          model: 'Contraintes',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'couloirId'
        },
      }
    }
  }
}
