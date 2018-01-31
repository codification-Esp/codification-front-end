/* tslint:disable */
import {
  Couloir,
  Contraintes
} from '../index';

declare var Object: any;
export interface EtageInterface {
  "numetage": number;
  "id"?: number;
  "batiment_fk"?: number;
  coulois?: Couloir[];
  contraintes?: Contraintes[];
}

export class Etage implements EtageInterface {
  "numetage": number;
  "id": number;
  "batiment_fk": number;
  coulois: Couloir[];
  contraintes: Contraintes[];
  constructor(data?: EtageInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Etage`.
   */
  public static getModelName() {
    return "Etage";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Etage for dynamic purposes.
  **/
  public static factory(data: EtageInterface): Etage{
    return new Etage(data);
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
      name: 'Etage',
      plural: 'Etages',
      path: 'Etages',
      idName: 'id',
      properties: {
        "numetage": {
          name: 'numetage',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "batiment_fk": {
          name: 'batiment_fk',
          type: 'number'
        },
      },
      relations: {
        coulois: {
          name: 'coulois',
          type: 'Couloir[]',
          model: 'Couloir',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'etageId'
        },
        contraintes: {
          name: 'contraintes',
          type: 'Contraintes[]',
          model: 'Contraintes',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'etageId'
        },
      }
    }
  }
}
