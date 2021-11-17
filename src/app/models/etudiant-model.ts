export class Etudiant {
id: number;
matricule: string;
 cin: string;
 passeport: string;
 prenomFr: string;
 nomFr: string;
 prenomAr: string;
 nomAr: string;
 nationnalite: string;
 paysOrigine: string;
 dateNaissance: Date;
 lieuNaissanceFr: string;
 lieuNaissanceAr: string;
 adresseFr: string;
 adresseAr: string ;
 telephone1: string ;
 telephone2: string ;
 telephone3: string ;
 email: string ;
 autreInfo1: string ;
 autreInfo2: string ;
 autreInfo3: string ;
 gouvernorat: string ;

 // tslint:disable-next-line:variable-name
 etat_civil: string ;
 paysBac: string ;
 typeBac: string ;
 anneeBac: string ;
 moyenneBac: number ;
 scoreBac: number ;
 sessionBac: string ;
 typePassageBac: string;


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
  get nombre_etudiant():number{
      return this._nombre_etudiant;
  }
  set nombre_etudiant(nombre_etudiant:number){
      this._nombre_etudiant=nombre_etudiant;
  }

  */
}
