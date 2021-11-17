import { Component, OnInit } from '@angular/core';
import { Groupe} from 'src/app/models/groupe-model';
import { GroupeService } from 'src/app/services/groupe/groupe.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from "@auth0/angular-jwt";
@Component({
  selector: 'app-scolarite',
  templateUrl: './scolarite.component.html',
  styleUrls: ['./scolarite.component.scss']
})
export class ScolariteComponent implements OnInit {
 groupes : Groupe[];
  isAdmin:boolean;
  isPm:boolean;
  isUser:boolean;
  constructor(
    private serviceGroupe: GroupeService,
    private router: Router,
    private toastr: ToastrService) { }


  ngOnInit()  {
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
    this.isPm=false;

    for (let i =0; i < roles.length; i++){
       if(roles[i] == "ROLE_USER")
        { this.isUser=true;}

        if (roles[i] == "ROLE_ADMIN")
          {this.isAdmin=true;}

          if (roles[i] == "ROLE_PM")
         { this.isPm=true;}

    }

  }

  get token(){
    let token = localStorage.getItem("Authorization");
    return token;
  }

  reloadData(token) {
    this.serviceGroupe.allGroupe(token).subscribe(
      (res) => this.groupes = res
    );
    //
  }

  deleteGroupe(groupe: Groupe) {
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












