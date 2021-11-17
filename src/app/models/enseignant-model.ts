export class Enseignant {
id: number;
matricule: number;
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
 email: string ;
 autreInfo1: string ;
 gouvernorat: number ;

 // tslint:disable-next-line:variable-name
 etat_civil: string ;
// matieres : Matiere[] ;

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
