import { Component, OnInit } from '@angular/core';
import { Groupe } from 'src/app/models/groupe-model';
import { GroupeService } from 'src/app/services/groupe/groupe.service';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-groupe-add',
  templateUrl: './groupe-add.component.html',
  styleUrls: ['./groupe-add.component.scss']
})
export class GroupeAddComponent implements OnInit {

  addGroupeLogin:FormGroup;
    groupe:Groupe=new Groupe();
  submitted: boolean = false;
  id: number;

  constructor(  private groupeservice:GroupeService,
    private router:Router,
    private route: ActivatedRoute,
    private formBuilder:FormBuilder,
    private toastr:ToastrService
    ) {}

  ngOnInit() {
    let token = localStorage.getItem("Authorization");
    this.id = this.route.snapshot.params['id'];
    this.groupeservice.getGroupe(this.id, token).subscribe(
      data => {
        this.groupe = data;
        console.log(this.groupe);

      },
      error => console.log(error)
    );
  }


  ajouter(){
    let token = localStorage.getItem("Authorization");
    this.groupeservice.addGroupe(this.groupe,token).subscribe(
      data => {
        console.log(data);
        this.toastr.success("Le groupe est ajoutée!");
      }
      ,
      error => {
        console.log(error);
        this.toastr.error("Erreur");
      }
      );
    this.groupe=new Groupe();
    setTimeout(()=>{
      this.router.navigate(['/scolarite/groupe/list']);
    },200)

  }

  onSubmit(){
    this.submitted=true;
    this.ajouter();
  }

}
