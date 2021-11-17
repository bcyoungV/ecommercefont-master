import { Component, OnInit } from '@angular/core';
  import { MatDialog,MatDialogModule,MatDialogRef } from '@angular/material/dialog' ;
  import { Groupe } from 'src/app/models/groupe-model';
  import { GroupeService } from 'src/app/services/groupe/groupe.service';
  import { ActivatedRoute,Router } from '@angular/router';
  import { ToastrService } from 'ngx-toastr';
  import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-groupe-details',
  templateUrl: './groupe-details.component.html',
  styleUrls: ['./groupe-details.component.css']
})
export class GroupeDetailsComponent implements OnInit {

    groupes: Groupe[];
  isAdmin:boolean;
  isResponsable:boolean;
  isAdministrateur:boolean;
  submitted: boolean = false;
  id: number;
  groupe: Groupe;

    constructor(public dialog:MatDialog,
      private serviceGroupe: GroupeService,
      private router: Router,
      private route: ActivatedRoute,
      private toastr: ToastrService) { }


    ngOnInit(): void {
      let token = localStorage.getItem("Authorization");
      this.id = this.route.snapshot.params['id'];
      this.serviceGroupe.getGroupe(this.id, token).subscribe(
        data => {
          this.groupe = data;
          console.log(this.groupe);

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

      this.serviceGroupe.getGroupe(this.id,token).subscribe(
        (res) => this.groupe= res
      );
    }
  }







