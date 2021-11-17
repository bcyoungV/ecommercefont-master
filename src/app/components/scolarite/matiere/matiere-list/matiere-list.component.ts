import { Component, OnInit } from '@angular/core';
  import { MatDialog,MatDialogModule,MatDialogRef } from '@angular/material/dialog' ;
  import { MatiereAddDialogComponent } from '../matiere-add/matiere-add-dialog/matiere-add-dialog.component';
  import { Matiere } from 'src/app/models/matiere-model';
  import { MatiereService } from 'src/app/services/matiere/matiere.service';
  import { Router } from '@angular/router';
  import { ToastrService } from 'ngx-toastr';
  import { JwtHelperService } from "@auth0/angular-jwt";
import { DialogService } from 'src/app/services/dialog/dialog.service';

@Component({
  selector: 'app-matiere-list',
  templateUrl: './matiere-list.component.html',
  styleUrls: ['./matiere-list.component.scss']
})
export class MatiereListComponent implements OnInit {


    matieres: Matiere[];
    isAdmin:boolean;
    isResponsable:boolean;
    isUser:boolean;
    constructor(public dialog:MatDialog,
      private serviceMatiere: MatiereService,
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

      this.isUser=false;
      this.isAdmin=false;
      this.isResponsable=false;

      for (let i =0; i < roles.length; i++){
         if(roles[i] == "ROLE_USER")
          { this.isUser=true;}

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

      this.serviceMatiere.allMatiere(token).subscribe(
        (res) => this.matieres= res
      );
    }

    deleteMatiere(matiere: Matiere) {


      this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
      .afterClosed().subscribe(res=>{
        if (res){
          const index = this.matieres.indexOf(matiere);
      this.matieres.splice(index, 1);
      this.serviceMatiere.deleteMatiere(matiere.id,this.token).subscribe(
        data => {
          console.log(data);
          this.toastr.success(matiere.libelleFr+' est supprimé!');

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
      console.log("on va ajouter un module")
      this.dialog.open(MatiereAddDialogComponent);
    }

  }


