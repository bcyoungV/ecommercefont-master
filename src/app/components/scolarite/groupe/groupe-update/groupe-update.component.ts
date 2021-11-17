import { Component, OnInit } from '@angular/core';
import { GroupeService } from 'src/app/services/groupe/groupe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Groupe } from 'src/app/models/groupe-model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-groupe-update',
  templateUrl: './groupe-update.component.html',
  styleUrls: ['./groupe-update.component.scss']
})
export class GroupeUpdateComponent implements OnInit {


  submitted: boolean = false;
  id: number;
  groupe: Groupe;

  constructor(private groupeService: GroupeService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    let token = localStorage.getItem("Authorization");
    this.id = this.route.snapshot.params['id'];
    this.groupeService.getGroupe(this.id, token).subscribe(
      data => {
        this.groupe = data;
        console.log(this.groupe);

      },
      error => console.log(error)
    );
  }

  onSubmit() {
    this.submitted = true;
    let token = localStorage.getItem("Authorization");
    this.groupeService.updateGroupe(this.id, this.groupe, token).subscribe(
      data => {
        console.log(data);
        this.toastr.success("Le groupe est mise à jour!");
      },
      error => {
        console.log(error);
        this.toastr.error("Erreur");
      });
    setTimeout(() => {
      this.router.navigate(['/scolarite/groupe/list']);
    }, 200)
  }

}
