import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ModuleUpdateComponent } from './components/scolarite/module/module-update/module-update.component';
import { ModuleAddComponent } from './components/scolarite/module/module-add/module-add.component';
import { MatiereUpdateComponent } from './components/scolarite/matiere/matiere-update/matiere-update.component';
import { ModuleListComponent } from './components/scolarite/module/module-list/module-list.component';
import { EnseignantUpdateComponent } from './components/scolarite/enseignant/enseignant-update/enseignant-update.component';
import { GroupeListComponent } from './components/scolarite/groupe/groupe-list/groupe-list.component';
import { GroupeUpdateComponent } from './components/scolarite/groupe/groupe-update/groupe-update.component';
import { GroupeAddComponent } from './components/scolarite/groupe/groupe-add/groupe-add.component';
import { EtudiantUpdateComponent } from './components/scolarite/etudiant/etudiant-update/etudiant-update.component';
import { EtudiantAddComponent } from './components/scolarite/etudiant/etudiant-add/etudiant-add.component';
import { EtudiantListComponent } from './components/scolarite/etudiant/etudiant-list/etudiant-list.component';
import { MatiereListComponent } from './components/scolarite/matiere/matiere-list/matiere-list.component';
import { MatiereAddComponent } from './components/scolarite/matiere/matiere-add/matiere-add.component';
import { EnseignantAddComponent } from './components/scolarite/enseignant/enseignant-add/enseignant-add.component';
import { EnseignantListComponent } from './components/scolarite/enseignant/enseignant-list/enseignant-list.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/scolarite/user/user.component';
import { AuthGuard } from './guards/auth.guard';
import { ScolariteComponent } from './components/scolarite/scolarite.component';
import { UserListComponent } from './components/scolarite/user/user-list/user-list.component';
import { UserAddComponent } from './components/scolarite/user/user-add/user-add.component';
import { UserUpdateComponent } from './components/scolarite/user/user-update/user-update.component';
import { EtudiantDetailsComponent } from './components/scolarite/etudiant/etudiant-details/etudiant-details.component';
import { DashboardComponent } from './components/scolarite/dashboard/dashboard.component';
import { EnseignantDetailsComponent } from './components/scolarite/enseignant-details/enseignant-details.component';
import { UserDetailsComponent } from './components/scolarite/user/user-details/user-details.component';
import { MatiereDetailsComponent } from './components/scolarite/matiere/matiere-details/matiere-details.component';
import { ModuleDetailsComponent } from './components/scolarite/module/module-details/module-details.component';
import { GroupeDetailsComponent } from './components/scolarite/groupe/groupe-details/groupe-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'scolarite', component: ScolariteComponent, canActivate: [AuthGuard]},
  {path: 'gerer-users', component: UserComponent, canActivate: [AuthGuard]} ,
  {
    path: 'scolarite',
    children: [
      {
        path: 'dashbord',
        component: DashboardComponent
      },
      {
        path: 'etudiant' ,
        children : [
         {path : 'list' ,
         component: EtudiantListComponent
        },
        {
          path: 'add' ,
          component : EtudiantAddComponent
        },
        {
          path: 'update/:id',
          component : EtudiantUpdateComponent
        },
        {
          path: 'details/:id' ,
          component : EtudiantDetailsComponent
        }


        ]
      },
      {
        path : 'groupe',
        children: [
          {
            path: 'list',
            component : GroupeListComponent
          },
          {
            path : 'add',
            component : GroupeAddComponent
          },
          {
            path: 'update/:id',
            component: GroupeUpdateComponent
          },
          {
            path: 'details/:id' ,
            component : GroupeDetailsComponent
          }
        ]
      },
      {
        path: 'enseignant' ,
        children : [
         {path : 'list' ,
         component: EnseignantListComponent
        },
        {
          path: 'add' ,
          component : EnseignantAddComponent
        },
        {
          path: 'update/:id',
          component : EnseignantUpdateComponent
        },
        {
          path: 'details/:id' ,
          component : EnseignantDetailsComponent
        }
        ]
      },
      {
        path: 'matiere' ,
        children : [
         {path : 'list' ,
         component: MatiereListComponent
        },
        {
          path: 'add' ,
          component : MatiereAddComponent
        },
        {
          path: 'update/:id',
          component : MatiereUpdateComponent
        },
        {
          path: 'details/:id' ,
          component : MatiereDetailsComponent
        }
        ]
      },
      {
        path: 'module' ,
        children : [
         {path : 'list' ,
         component: ModuleListComponent
        },
        {
          path: 'add' ,
          component : ModuleAddComponent
        },
        {
          path: 'update/:id',
          component : ModuleUpdateComponent
        },
        {
          path: 'details/:id' ,
          component : ModuleDetailsComponent
        }
        ]
      },
      {
        path: 'user' ,
        children : [
         {path : 'list' ,
         component: UserListComponent
        },
        {
          path: 'add' ,
          component : UserAddComponent
        },
        {
          path: 'update/:id',
          component : UserUpdateComponent
        },
        {
          path: 'details/:id' ,
          component : UserDetailsComponent
        }
        ]
      },

    ]

  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
