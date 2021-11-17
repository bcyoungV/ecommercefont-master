import { Component, OnInit } from '@angular/core';
import { Matiere } from 'src/app/models/matiere-model';
import { MatiereService } from 'src/app/services/matiere/matiere.service';
import { Router } from '@angular/router';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-matiere-add',
  templateUrl: './matiere-add.component.html',
  styleUrls: ['./matiere-add.component.scss']
})
export class MatiereAddComponent implements OnInit {

  addMatiereLogin:FormGroup;
  matiere:Matiere=new Matiere();
  submitted=false;

  constructor(  private service:MatiereService,
    private router:Router,
    private formBuilder:FormBuilder,
    private toastr:ToastrService
    ) {}

  ngOnInit(): void {
  }

  ajouter(){
    let token = localStorage.getItem("Authorization");
    this.service.addMatiere(this.matiere,token).subscribe(
      data => {
        console.log(data);
        this.toastr.success("La matière est ajoutée!");
      }
      ,
      error => {
        console.log(error);
        this.toastr.error("Erreur");
      }
      );
    this.matiere=new Matiere();
    setTimeout(()=>{
      this.router.navigate(['/scolarite/matiere/list']);
    },200)

  }

  onSubmit(){
    this.submitted=true;
    this.ajouter();
  }

}
