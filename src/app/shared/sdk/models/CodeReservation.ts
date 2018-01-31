/* tslint:disable */

declare var Object: any;
export interface CodeReservationInterface {
  "idcoderserv": string;
  "idReservation": string;
  "codeReservation": string;
}

export class CodeReservation implements CodeReservationInterface {
  "idcoderserv": string;
  "idReservation": string;
  "codeReservation": string;
  constructor(data?: CodeReservationInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CodeReservation`.
   */
  public static getModelName() {
    return "CodeReservation";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CodeReservation for dynamic purposes.
  **/
  public static factory(data: CodeReservationInterface): CodeReservation{
    return new CodeReservation(data);
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
      name: 'CodeReservation',
      plural: 'CodeReservations',
      path: 'CodeReservations',
      idName: 'idcoderserv',
      properties: {
        "idcoderserv": {
          name: 'idcoderserv',
          type: 'string'
        },
        "idReservation": {
          name: 'idReservation',
          type: 'string'
        },
        "codeReservation": {
          name: 'codeReservation',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
