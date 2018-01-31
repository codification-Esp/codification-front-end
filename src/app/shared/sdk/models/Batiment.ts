/* tslint:disable */
import {
  Etage,
  Contraintes
} from '../index';

declare var Object: any;
export interface BatimentInterface {
  "nombatiment": string;
  "id"?: number;
  etages?: Etage[];
  contraintes?: Contraintes[];
}

export class Batiment implements BatimentInterface {
  "nombatiment": string;
  "id": number;
  etages: Etage[];
  contraintes: Contraintes[];
  constructor(data?: BatimentInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Batiment`.
   */
  public static getModelName() {
    return "Batiment";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Batiment for dynamic purposes.
  **/
  public static factory(data: BatimentInterface): Batiment{
    return new Batiment(data);
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
      name: 'Batiment',
      plural: 'Batiments',
      path: 'Batiments',
      idName: 'id',
      properties: {
        "nombatiment": {
          name: 'nombatiment',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        etages: {
          name: 'etages',
          type: 'Etage[]',
          model: 'Etage',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'batiment_fk'
        },
        contraintes: {
          name: 'contraintes',
          type: 'Contraintes[]',
          model: 'Contraintes',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'batimentId'
        },
      }
    }
  }
}
