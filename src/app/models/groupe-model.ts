import { Etudiant } from './etudiant-model';
export class Groupe {
    id: number;
    nom: string;
   capacite: number;

  etudiants: Etudiant[] ;

    constructor() {}
    /*
    get id():number{
        return this._id;
    }

    get nom():string{
        return this._nom;
    }
    set nom(nom:string){
        this._nom=nom;
    }
    get capacite():number{
        return this._capacite;
    }
    set capacite(capacite:number){
        this._capacite= capacite;
    }

    */
}
