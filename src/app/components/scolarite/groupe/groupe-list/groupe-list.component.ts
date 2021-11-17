import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogModule,MatDialogRef } from '@angular/material/dialog' ;
import { GroupeAddDialogComponent } from '../groupe-add/groupe-add-dialog/groupe-add-dialog.component';
import { Groupe } from 'src/app/models/groupe-model';
import { GroupeService } from 'src/app/services/groupe/groupe.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from "@auth0/angular-jwt";
import { DialogService } from 'src/app/services/dialog/dialog.service';
@Component({
  selector: 'app-groupe-list',
  templateUrl: './groupe-list.component.html',
  styleUrls: ['./groupe-list.component.scss']
})
export class GroupeListComponent implements OnInit {


  groupes: Groupe[];
  isAdmin:boolean;
  isResponsable:boolean;
  isAdministrateur:boolean;
  constructor(public dialog:MatDialog,
    private serviceGroupe: GroupeService,
    private router: Router,
    private toastr: ToastrService ,
    private dialogService: DialogService ) { }
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

    this.serviceGroupe.allGroupe(token).subscribe(
      (res) => this.groupes= res
    );
  }

  deleteGroupe(groupe: Groupe) {


    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res=>{
      if (res){
        const index = this.groupes.indexOf(groupe);
    this.groupes.splice(index, 1);
    this.serviceGroupe.deleteGroupe(groupe.id,this.token).subscribe(
      data => {
        console.log(data);
        this.toastr.success(groupe.nom+' est supprimé!');

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
    console.log("on va ajouter un nouveau groupe")
    this.dialog.open(GroupeAddDialogComponent);
  }

}


