import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule} from 'ngx-toastr';
import { ChartsModule } from 'ng2-charts';
import { ScolariteComponent } from './components/scolarite/scolarite.component';
import { GroupeComponent } from './components/scolarite/groupe/groupe.component';
import { EtudiantAddComponent } from './components/scolarite/etudiant/etudiant-add/etudiant-add.component';
import { EtudiantListComponent } from './components/scolarite/etudiant/etudiant-list/etudiant-list.component';
import { EtudiantUpdateComponent } from './components/scolarite/etudiant/etudiant-update/etudiant-update.component';
import { GroupeListComponent } from './components/scolarite/groupe/groupe-list/groupe-list.component';
import { GroupeAddComponent } from './components/scolarite/groupe/groupe-add/groupe-add.component';
import { GroupeUpdateComponent } from './components/scolarite/groupe/groupe-update/groupe-update.component';

import { EnseignantComponent } from './components/scolarite/enseignant/enseignant.component';
import { ModuleComponent } from './components/scolarite/module/module.component';
import { MatiereComponent } from './components/scolarite/matiere/matiere.component';
import { EnseignantListComponent } from './components/scolarite/enseignant/enseignant-list/enseignant-list.component';
import { EnseignantAddComponent } from './components/scolarite/enseignant/enseignant-add/enseignant-add.component';
import { EnseignantUpdateComponent } from './components/scolarite/enseignant/enseignant-update/enseignant-update.component';
import { MatiereListComponent } from './components/scolarite/matiere/matiere-list/matiere-list.component';
import { MatiereAddComponent } from './components/scolarite/matiere/matiere-add/matiere-add.component';
import { MatiereUpdateComponent } from './components/scolarite/matiere/matiere-update/matiere-update.component';
import { ModuleListComponent } from './components/scolarite/module/module-list/module-list.component';
import { ModuleAddComponent } from './components/scolarite/module/module-add/module-add.component';
import { ModuleUpdateComponent } from './components/scolarite/module/module-update/module-update.component';
import { GroupeService } from './services/groupe/groupe.service';
import { GroupeAddDialogComponent } from './components/scolarite/groupe/groupe-add/groupe-add-dialog/groupe-add-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatiereAddDialogComponent } from './components/scolarite/matiere/matiere-add/matiere-add-dialog/matiere-add-dialog.component';
import { MatiereService } from './services/matiere/matiere.service';
import { EnseignantService } from './services/enseignant/enseignant.service';
// tslint:disable-next-line:max-line-length
import { EnseignantAddDialogComponent } from './components/scolarite/enseignant/enseignant-add/enseignant-add-dialog/enseignant-add-dialog.component';
import { EtudiantAddDialogComponent } from './components/scolarite/etudiant/etudiant-add/etudiant-add-dialog/etudiant-add-dialog.component';
import { EtudiantService } from './services/etudiant/etudiant.service';
import { ModuleAddDialogComponent } from './components/scolarite/module/module-add/module-add-dialog/module-add-dialog.component';
import { ModuleService } from './services/module/module.service';
import { UserComponent } from './components/scolarite/user/user.component';
// tslint:disable-next-line:max-line-length
import { GroupeUpdateDialogComponent } from './components/scolarite/groupe/groupe-update/groupe-update-dialog/groupe-update-dialog.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// tslint:disable-next-line:max-line-length
import { EtudiantUpdateDialogComponent } from './components/scolarite/etudiant/etudiant-update/etudiant-update-dialog/etudiant-update-dialog.component';
// tslint:disable-next-line:max-line-length
import { EnseignantUpdateDialogComponent } from './components/scolarite/enseignant/enseignant-update/enseignant-update-dialog/enseignant-update-dialog.component';
// tslint:disable-next-line:max-line-length
import { MatiereUpdateDialogComponent } from './components/scolarite/matiere/matiere-update/matiere-update-dialog/matiere-update-dialog.component';
// tslint:disable-next-line:max-line-length
import { ModuleUpdateDialogComponent } from './components/scolarite/module/module-update/module-update-dialog/module-update-dialog.component';
import { UserUpdateComponent } from './components/scolarite/user/user-update/user-update.component';
import { UserUpdateDialogComponent } from './components/scolarite/user/user-update/user-update-dialog/user-update-dialog.component';
import { UserListComponent } from './components/scolarite/user/user-list/user-list.component';
import { UserAddComponent } from './components/scolarite/user/user-add/user-add.component';
import { UserAddDialogComponent } from './components/scolarite/user/user-add/user-add-dialog/user-add-dialog.component';
import { UserService } from './services/user/user.service';
import { EtudiantDetailsComponent } from './components/scolarite/etudiant/etudiant-details/etudiant-details.component';
import { MatConfirmDialogComponent } from './components/mat-confirm-dialog/mat-confirm-dialog.component';
import { DashboardComponent } from './components/scolarite/dashboard/dashboard.component';
import { TopbarComponent } from './components/scolarite/topbar/topbar.component';
import { SidebarComponent } from './components/scolarite/sidebar/sidebar.component';
import { EnseignantDetailsComponent } from './components/scolarite/enseignant-details/enseignant-details.component';
import { UserDetailsComponent } from './components/scolarite/user/user-details/user-details.component';
import { MatiereDetailsComponent } from './components/scolarite/matiere/matiere-details/matiere-details.component';
import { ModuleDetailsComponent } from './components/scolarite/module/module-details/module-details.component';
import { GroupeDetailsComponent } from './components/scolarite/groupe/groupe-details/groupe-details.component';


@NgModule({
  declarations: [
    GroupeAddDialogComponent,
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    ScolariteComponent,
    GroupeComponent,
    DashboardComponent,
    EtudiantAddComponent,
    EtudiantListComponent,
    EtudiantUpdateComponent,
    GroupeListComponent,
    GroupeAddComponent,
    GroupeUpdateComponent,
    EnseignantComponent,
    ModuleComponent,
    EnseignantListComponent,
    EnseignantAddComponent,
    EnseignantUpdateComponent,
    ModuleListComponent,
    ModuleAddComponent,
    ModuleUpdateComponent,
    EnseignantAddDialogComponent,
    EtudiantAddDialogComponent,
    ModuleAddDialogComponent,
    UserComponent,
    GroupeUpdateDialogComponent,
    EtudiantUpdateDialogComponent,
    EnseignantUpdateDialogComponent,
    MatiereUpdateDialogComponent,
    MatiereAddDialogComponent,
    MatiereComponent,
    MatiereListComponent,
    MatiereAddComponent,
    MatiereUpdateComponent,
    ModuleUpdateDialogComponent,
    UserUpdateComponent,
    UserUpdateDialogComponent,
    UserListComponent,
    UserAddComponent,
    UserAddDialogComponent,
   EtudiantDetailsComponent,
   MatConfirmDialogComponent,
   TopbarComponent,
   SidebarComponent,
   EnseignantDetailsComponent,
   UserDetailsComponent,
   MatiereDetailsComponent,
   ModuleDetailsComponent,
   GroupeDetailsComponent,
  ],
  entryComponents: [
    GroupeAddDialogComponent,
    GroupeUpdateDialogComponent,
     MatiereAddDialogComponent,
     MatiereUpdateDialogComponent,
     EnseignantAddDialogComponent,
     EnseignantUpdateDialogComponent,
     EtudiantAddDialogComponent,
     EtudiantUpdateDialogComponent,
     ModuleAddDialogComponent,
     ModuleUpdateComponent,
     UserAddDialogComponent,
     UserUpdateDialogComponent,
     MatConfirmDialogComponent ,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastNoAnimationModule.forRoot(),
    ChartsModule,
    MatDialogModule

  ],
  providers: [
    GroupeService,
    MatiereService,
    EnseignantService,
    EtudiantService,
    ModuleService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


