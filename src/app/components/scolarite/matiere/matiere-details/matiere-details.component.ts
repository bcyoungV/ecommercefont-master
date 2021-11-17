import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogModule,MatDialogRef } from '@angular/material/dialog' ;
import { Matiere } from 'src/app/models/matiere-model';
import { MatiereService } from 'src/app/services/matiere/matiere.service';
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-matiere-details',
  templateUrl: './matiere-details.component.html',
  styleUrls: ['./matiere-details.component.css']
})


export class MatiereDetailsComponent implements OnInit {
  matieres: Matiere[];
isAdmin:boolean;
isResponsable:boolean;
isAdministrateur:boolean;
submitted: boolean = false;
id: number;
matiere: Matiere;

  constructor(public dialog:MatDialog,
    private serviceMatiere: MatiereService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService) { }



  ngOnInit(): void {
    let token = localStorage.getItem("Authorization");
    this.id = this.route.snapshot.params['id'];
    this.serviceMatiere.getMatiere(this.id, token).subscribe(
      data => {
        this.matiere = data;
        console.log(this.matiere);

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

    this.serviceMatiere.getMatiere(this.id,token).subscribe(
      (res) => this.matiere= res
    );
  }
}




