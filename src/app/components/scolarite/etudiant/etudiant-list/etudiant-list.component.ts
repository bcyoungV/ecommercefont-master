import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogModule,MatDialogRef } from '@angular/material/dialog' ;
import { EtudiantAddDialogComponent } from '../etudiant-add/etudiant-add-dialog/etudiant-add-dialog.component';
import { Etudiant } from 'src/app/models/etudiant-model';
import { EtudiantService } from 'src/app/services/etudiant/etudiant.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from "@auth0/angular-jwt";
import { DialogService } from 'src/app/services/dialog/dialog.service';




@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.scss']
})
export class EtudiantListComponent implements OnInit {

  etudiants: Etudiant[];
  isAdmin:boolean;
  isResponsable:boolean;
  isAdministrateur:boolean;
  constructor(public dialog:MatDialog,
    private serviceEtudiant: EtudiantService,
    private router: Router,
    private toastr: ToastrService,
    private dialogService: DialogService) { }

  ngOnInit(): void {

    this.token;
    this.reloadData(this.token);
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.token);
    let roles = decodedToken.roles;

    let username = decodedToken.sub;
    roles = roles.replace('[','');
    roles = roles.replace(']','');
    roles = roles.split(', ');

    this.isAdministrateur=false;
    this.isAdmin=false;
    this.isResponsable=false;

    for (let i =0; i < roles.length; i++){
       if(roles[i] == "ROLE_ADMINISTRATEUR")
        { this.isAdministrateur=true;}

        if (roles[i] == "ROLE_ADMIN")
          {this.isAdmin=true;}

          if (roles[i] == "ROLE_RESPONSABLE")
         { this.isResponsable=true;}

    }

  }

  get token(){
    let token = localStorage.getItem("Authorization");
    return token;
  }

  reloadData(token) {

    this.serviceEtudiant.allEtudiant(token).subscribe(
      (res) => this.etudiants= res
    );
  }


  deleteEtudiant(etudiant: Etudiant) {


    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res=>{
      if (res){
        const index = this.etudiants.indexOf(etudiant);
    this.etudiants.splice(index, 1);
    this.serviceEtudiant.deleteEtudiant(etudiant.id,this.token).subscribe(
      data => {
        console.log(data);
        this.toastr.success(etudiant.nomFr+' est supprimé!');

      }
      ,
      error =>{
        console.log(error);
        this.toastr.error("Erreur lors de la suppression");
      }
    );
    setTimeout(()=>200);
      }
    }
      )
  }


  ajouter(){
    console.log("on va ajouter un étudiant")
    this.dialog.open(EtudiantAddDialogComponent);
  }

}


