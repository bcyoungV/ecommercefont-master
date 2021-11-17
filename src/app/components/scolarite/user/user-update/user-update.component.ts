import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user-model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  submitted: boolean = false;
  id: number;
  user: User;

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    let token = localStorage.getItem("Authorization");
    this.id = this.route.snapshot.params['id'];
    this.userService.getUser(this.id, token).subscribe(
      data => {
        this.user = data;
        console.log(this.user);

      },
      error => console.log(error)
    );
  }

  onSubmit() {
    this.submitted = true;
    let token = localStorage.getItem("Authorization");
    this.userService.updateUser(this.id, this.user, token).subscribe(
      data => {
        console.log(data);
        this.toastr.success("User est mise à jour!");
      },
      error => {
        console.log(error);
        this.toastr.error("Erreur");
      });
    setTimeout(() => {
      this.router.navigate(['/scolarite/user/list']);
    }, 200)
  }

}
