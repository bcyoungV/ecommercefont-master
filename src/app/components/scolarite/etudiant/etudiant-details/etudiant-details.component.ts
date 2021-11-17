import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogModule,MatDialogRef } from '@angular/material/dialog' ;
import { Etudiant } from 'src/app/models/etudiant-model';
import { EtudiantService } from 'src/app/services/etudiant/etudiant.service';
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-etudiant-details',
  templateUrl: './etudiant-details.component.html',
  styleUrls: ['./etudiant-details.component.css']
})
export class EtudiantDetailsComponent implements OnInit {



  etudiants: Etudiant[];
  isAdmin:boolean;
  isResponsable:boolean;
  isAdministrateur:boolean;
  submitted: boolean = false;
  id: number;
  etudiant: Etudiant;
  constructor(public dialog:MatDialog,
    private serviceEtudiant: EtudiantService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService) { }



  ngOnInit(): void {
    let token = localStorage.getItem("Authorization");
    this.id = this.route.snapshot.params['id'];
    this.serviceEtudiant.getEtudiant(this.id, token).subscribe(
      data => {
        this.etudiant = data;
        console.log(this.etudiant);

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

    this.serviceEtudiant.getEtudiant(this.id,token).subscribe(
      (res) => this.etudiant= res
    );
  }
}



