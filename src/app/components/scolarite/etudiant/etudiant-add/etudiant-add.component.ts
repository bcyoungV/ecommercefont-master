import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/models/etudiant-model';
import { EtudiantService } from 'src/app/services/etudiant/etudiant.service';
import { Router } from '@angular/router';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-etudiant-add',
  templateUrl: './etudiant-add.component.html',
  styleUrls: ['./etudiant-add.component.scss']
})
export class EtudiantAddComponent implements OnInit {

  addEtudiantLogin:FormGroup;
  etudiant:Etudiant=new Etudiant();
  submitted=false;

  constructor(  private service:EtudiantService,
    private router:Router,
    private formBuilder:FormBuilder,
    private toastr:ToastrService
    ) {}

  ngOnInit(): void {
  }
  ajouter(){
    let token = localStorage.getItem("Authorization");
    this.service.addEtudiant(this.etudiant,token).subscribe(
      data => {
        console.log(data);
        this.toastr.success("L'etudiant est ajoutée!");
      }
      ,
      error => {
        console.log(error);
        this.toastr.error("Erreur");
      }
      );
    this.etudiant=new Etudiant();
    setTimeout(()=>{
      this.router.navigate(['/scolarite/etudiant/list']);
    },200)

  }

  onSubmit(){
    this.submitted=true;
    this.ajouter();
  }

}
