import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogModule,MatDialogRef } from '@angular/material/dialog' ;
import { ModuleAddDialogComponent } from '../module-add/module-add-dialog/module-add-dialog.component';
import { Module } from 'src/app/models/module-model';
import { ModuleService } from 'src/app/services/module/module.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from "@auth0/angular-jwt";
import { DialogService } from 'src/app/services/dialog/dialog.service';
@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {

  modules: Module[];
  isAdmin:boolean;
  isResponsable:boolean;
  isAdministrateur:boolean;

  constructor(public dialog:MatDialog,
    private serviceModule: ModuleService,
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

    this.serviceModule.allModule(token).subscribe(
      (res) => this.modules= res
    );
  }

  deleteModule(module: Module) {

    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res=>{
      if (res){
        const index = this.modules.indexOf(module);
    this.modules.splice(index, 1);
    this.serviceModule.deleteModule(module.id,this.token).subscribe(
      data => {
        console.log(data);
        this.toastr.success(module.libelleFr+' est supprimé!');

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
    this.dialog.open(ModuleAddDialogComponent);
  }

}



