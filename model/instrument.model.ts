import { TypeInstrument } from "./typeInstrument.model";

export class Instrument {
idInstrument : number;
nomInstrument : string;
prixInstrument : number;
//dateCreation: Date;
typeInstrument :TypeInstrument;

constructor(nomInstrument:string , prixInstrument:number ,  typeInstrument:TypeInstrument )
{
    this.nomInstrument = nomInstrument;
    this.prixInstrument = prixInstrument;
  //  this.dateCreation = dateCreation ;
    this.typeInstrument = typeInstrument;
}
//constructor(){}
}
