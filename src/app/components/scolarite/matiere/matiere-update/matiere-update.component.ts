import { Component, OnInit } from '@angular/core';
import { MatiereService } from 'src/app/services/matiere/matiere.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Matiere } from 'src/app/models/matiere-model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-matiere-update',
  templateUrl: './matiere-update.component.html',
  styleUrls: ['./matiere-update.component.scss']
})
export class MatiereUpdateComponent implements OnInit {

    submitted: boolean = false;
    id: number;
    matiere: Matiere;

    constructor(private matiereService: MatiereService,
      private route: ActivatedRoute,
      private router: Router,
      private toastr: ToastrService
    ) { }

    ngOnInit() {
      let token = localStorage.getItem("Authorization");
      this.id = this.route.snapshot.params['id'];
      this.matiereService.getMatiere(this.id, token).subscribe(
        data => {
          this.matiere = data;
          console.log(this.matiere);

        },
        error => console.log(error)
      );
    }

    onSubmit() {
      this.submitted = true;
      let token = localStorage.getItem("Authorization");
      this.matiereService.updateMatiere(this.id, this.matiere, token).subscribe(
        data => {
          console.log(data);
          this.toastr.success("La matière est mise à jour!");
        },
        error => {
          console.log(error);
          this.toastr.error("Erreur");
        });
      setTimeout(() => {
        this.router.navigate(['/scolarite/matiere/list']);
      }, 200)
    }

  }

