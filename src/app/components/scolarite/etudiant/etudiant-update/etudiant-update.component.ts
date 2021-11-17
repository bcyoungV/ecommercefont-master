import { Component, OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant/etudiant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/models/etudiant-model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-etudiant-update',
  templateUrl: './etudiant-update.component.html',
  styleUrls: ['./etudiant-update.component.scss']
})
export class EtudiantUpdateComponent implements OnInit {


  submitted: boolean = false;
  id: number;
  etudiant: Etudiant;

  constructor(private etudiantService: EtudiantService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }


  ngOnInit() {
    let token = localStorage.getItem("Authorization");
    this.id = this.route.snapshot.params['id'];
    this.etudiantService.getEtudiant(this.id, token).subscribe(
      data => {
        this.etudiant = data;
        console.log(this.etudiant);

      },
      error => console.log(error)
    );
  }

  onSubmit() {
    this.submitted = true;
    let token = localStorage.getItem("Authorization");
    this.etudiantService.updateEtudiant(this.id, this.etudiant, token).subscribe(
      data => {
        console.log(data);
        this.toastr.success("L'etudiant est mise à jour!");
      },
      error => {
        console.log(error);
        this.toastr.error("Erreur");
      });
    setTimeout(() => {
      this.router.navigate(['/scolarite/etudiant/list']);
    }, 200)
  }

}
