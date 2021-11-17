import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogModule,MatDialogRef } from '@angular/material/dialog' ;
import { UserAddDialogComponent } from '../user-add/user-add-dialog/user-add-dialog.component';
import { User } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from "@auth0/angular-jwt";
import { DialogService } from 'src/app/services/dialog/dialog.service';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  isAdmin:boolean;
  isResponsable:boolean;
  isAdministrateur:boolean;
  constructor(public dialog:MatDialog,
    private serviceUser: UserService,
    private router: Router,
    private toastr: ToastrService,
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

    this.serviceUser.allUser(token).subscribe(
      (res) => this.users= res
    );
  }

  deleteUser(user: User) {

    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res=>{
      if (res){
        const index = this.users.indexOf(user);
    this.users.splice(index, 1);
    this.serviceUser.deleteUser(user.id,this.token).subscribe(
      data => {
        console.log(data);
        this.toastr.success(user.username+' est supprimé!');

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
    console.log("on va ajouter un nouveau utilisateur")
    this.dialog.open(UserAddDialogComponent);
  }

}









