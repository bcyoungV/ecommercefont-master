import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogModule,MatDialogRef } from '@angular/material/dialog' ;
import { Module } from 'src/app/models/module-model';
import { ModuleService } from 'src/app/services/module/module.service';
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-module-details',
  templateUrl: './module-details.component.html',
  styleUrls: ['./module-details.component.css']
})
export class ModuleDetailsComponent implements OnInit {

  modules: Module[];
  isAdmin:boolean;
  isResponsable:boolean;
  isAdministrateur:boolean;
  submitted: boolean = false;
  id: number;
  module: Module;

    constructor(public dialog:MatDialog,
      private serviceModule: ModuleService,
      private router: Router,
      private route: ActivatedRoute,
      private toastr: ToastrService) { }


    ngOnInit(): void {
      let token = localStorage.getItem("Authorization");
      this.id = this.route.snapshot.params['id'];
      this.serviceModule.getModule(this.id, token).subscribe(
        data => {
          this.module = data;
          console.log(this.module);

        },
        error => console.log(error)
      );


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

      this.serviceModule.getModule(this.id,token).subscribe(
        (res) => this.module= res
      );
    }
  }







