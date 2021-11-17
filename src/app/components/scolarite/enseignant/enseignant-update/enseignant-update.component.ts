import { Component, OnInit } from '@angular/core';
import { EnseignantService } from 'src/app/services/enseignant/enseignant.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Enseignant } from 'src/app/models/enseignant-model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-enseignant-update',
  templateUrl: './enseignant-update.component.html',
  styleUrls: ['./enseignant-update.component.scss']
})

export class EnseignantUpdateComponent implements OnInit {

  id:number;
  enseignant :Enseignant ;
  submitted:boolean=false;

 constructor(private enseignantService: EnseignantService,
      private route: ActivatedRoute,
      private router: Router,
      private toastr: ToastrService
    ) { }

  ngOnInit() {
    let token = localStorage.getItem("Authorization");
    this.id = this.route.snapshot.params['id'];
    this.enseignantService.getEnseignant(this.id, token).subscribe(
      data => {
        this.enseignant = data;
        console.log(this.enseignant);

      },
      error => console.log(error)
    );
  }

  onSubmit() {
    this.submitted = true;
    let token = localStorage.getItem("Authorization");
    this.enseignantService.updateEnseignant(this.id, this.enseignant, token).subscribe(
      data => {
        console.log(data);
        this.toastr.success("L' enseignant est mise à jour!");
      },
      error => {
        console.log(error);
        this.toastr.error("Erreur");
      });
    setTimeout(() => {
      this.router.navigate(['/scolarite/enseignant/list']);
    }, 200)
  }

}
