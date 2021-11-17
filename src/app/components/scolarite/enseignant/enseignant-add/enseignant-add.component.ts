import { Component, OnInit } from '@angular/core';
import { Enseignant } from 'src/app/models/enseignant-model';
import { EnseignantService } from 'src/app/services/enseignant/enseignant.service';
import { Router } from '@angular/router';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-enseignant-add',
  templateUrl: './enseignant-add.component.html',
  styleUrls: ['./enseignant-add.component.scss']
})
export class EnseignantAddComponent implements OnInit {



  addEnseignantLogin:FormGroup;
    enseignant:Enseignant=new Enseignant();
  submitted=false;

  constructor(  private service:EnseignantService,
    private router:Router,
    private formBuilder:FormBuilder,
    private toastr:ToastrService
    ) {}


  ngOnInit(): void {
  }
  ajouter(){
    let token = localStorage.getItem("Authorization");
    this.service.addEnseignant(this.enseignant,token).subscribe(
      data => {
        console.log(data);
        this.toastr.success("L'enseignant est ajoutée!");
      }
      ,
      error => {
        console.log(error);
        this.toastr.error("Erreur");
      }
      );
    this.enseignant=new Enseignant();
    setTimeout(()=>{
      this.router.navigate(['scolarite/enseignant/list']);
    },200)

  }

  onSubmit(){
    this.submitted=true;
    this.ajouter();
  }

}
