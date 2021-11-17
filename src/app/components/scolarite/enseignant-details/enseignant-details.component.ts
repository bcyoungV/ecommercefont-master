import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogModule,MatDialogRef } from '@angular/material/dialog' ;
import { Enseignant } from 'src/app/models/enseignant-model';
import { EnseignantService } from 'src/app/services/enseignant/enseignant.service';
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from "@auth0/angular-jwt";
@Component({
  selector: 'app-enseignant-details',
  templateUrl: './enseignant-details.component.html',
  styleUrls: ['./enseignant-details.component.css']
})
export class EnseignantDetailsComponent implements OnInit {
  enseignants: Enseignant[];
  isAdmin:boolean;
  isResponsable:boolean;
  isAdministrateur:boolean;
  submitted: boolean = false;
  id: number;
  enseignant: Enseignant;
  constructor(public dialog:MatDialog,
    private serviceEnseignant: EnseignantService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    let token = localStorage.getItem("Authorization");
    this.id = this.route.snapshot.params['id'];
    this.serviceEnseignant.getEnseignant(this.id, token).subscribe(
      data => {
        this.enseignant = data;
        console.log(this.enseignant);

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

    this.serviceEnseignant.getEnseignant(this.id,token).subscribe(
      (res) => this.enseignant= res
    );
  }
}



