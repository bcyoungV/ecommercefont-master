import { Component, OnInit } from '@angular/core';
import { Module} from 'src/app/models/module-model';
import { ModuleService } from 'src/app/services/module/module.service';
import { Router } from '@angular/router';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-module-add',
  templateUrl: './module-add.component.html',
  styleUrls: ['./module-add.component.scss']
})
export class ModuleAddComponent implements OnInit {

  addModuleLogin:FormGroup;
  module:Module=new Module();
  submitted=false;

  constructor(  private service:ModuleService,
    private router:Router,
    private formBuilder:FormBuilder,
    private toastr:ToastrService
    ) {}

  ngOnInit(): void {
  }

  ajouter(){
    let token = localStorage.getItem("Authorization");
    this.service.addModule(this.module,token).subscribe(
      data => {
        console.log(data);
        this.toastr.success("L'unité d'enseignement est ajoutée!");
      }
      ,
      error => {
        console.log(error);
        this.toastr.error("Erreur");
      }
      );
    this.module=new Module();
    setTimeout(()=>{
      this.router.navigate(['scolarite/module/list']);
    },200)

  }

  onSubmit(){
    this.submitted=true;
    this.ajouter();
  }

}
