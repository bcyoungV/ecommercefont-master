import { Component, OnInit } from '@angular/core';
import { ModuleService } from 'src/app/services/module/module.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Module } from 'src/app/models/module-model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-module-update',
  templateUrl: './module-update.component.html',
  styleUrls: ['./module-update.component.scss']
})
export class ModuleUpdateComponent implements OnInit {
  submitted: boolean = false;
  id: number;
  module : Module;

  constructor(private moduleService: ModuleService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    let token = localStorage.getItem("Authorization");
    this.id = this.route.snapshot.params['id'];
    this.moduleService.getModule(this.id, token).subscribe(
      data => {
        this.module = data;
        console.log(this.module);

      },
      error => console.log(error)
    );
  }

  onSubmit() {
    this.submitted = true;
    let token = localStorage.getItem("Authorization");
    this.moduleService.updateModule(this.id, this.module, token).subscribe(
      data => {
        console.log(data);
        this.toastr.success("module est mise à jour!");
      },
      error => {
        console.log(error);
        this.toastr.error("Erreur");
      });
    setTimeout(() => {
      this.router.navigate(['/scolarite/module/list']);
    }, 200)
  }

}
