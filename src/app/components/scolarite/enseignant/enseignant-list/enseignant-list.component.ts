import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogModule,MatDialogRef } from '@angular/material/dialog' ;
import { EnseignantAddDialogComponent } from '../enseignant-add/enseignant-add-dialog/enseignant-add-dialog.component';
import { Enseignant} from 'src/app/models/enseignant-model';
import { EtudiantService } from 'src/app/services/etudiant/etudiant.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from "@auth0/angular-jwt";
import { DialogService } from 'src/app/services/dialog/dialog.service';
import { EnseignantService } from 'src/app/services/enseignant/enseignant.service';
@Component({
  selector: 'app-enseignant-list',
  templateUrl: './enseignant-list.component.html',
  styleUrls: ['./enseignant-list.component.scss']
})
export class EnseignantListComponent implements OnInit {


    enseignants: Enseignant[];
    isAdmin:boolean;
    isResponsable:boolean;
    isAdministrateur:boolean;
    constructor(public dialog:MatDialog,
      private serviceEnseignant: EnseignantService,
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

      this.serviceEnseignant.allEnseignant(token).subscribe(
        (res) => this.enseignants= res
      );
    }


    deleteEnseignant(enseignant: Enseignant) {


      this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
      .afterClosed().subscribe(res=>{
        if (res){
          const index = this.enseignants.indexOf(enseignant);
      this.enseignants.splice(index, 1);
      this.serviceEnseignant.deleteEnseignant(enseignant.id,this.token).subscribe(
        data => {
          console.log(data);
          this.toastr.success(enseignant.nomFr+' est supprimé!');

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
      console.log("on va ajouter un enseignant")
      this.dialog.open(EnseignantAddDialogComponent);
    }

  }


