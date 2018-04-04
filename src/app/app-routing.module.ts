import { PublishingComponent } from './pages/publishing/publishing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BookcaseComponent } from './pages/bookcase/bookcase.component';
import { UserComponent } from './pages/user/user.component';
import { PublishersComponent } from './pages/publishers/publishers.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { EsqueciSenhaComponent } from './pages/login/esqueci-senha/esqueci-senha.component';
import { CadastroComponent } from './pages/login/cadastro/cadastro.component';

const routes: Routes = [{
   path: '', component: HomeComponent, pathMatch: 'full'},
   {path: 'user', loadChildren: 'app/pages/user/user.module#UserModule'},
   {path: 'estante', component: BookcaseComponent},
   {path: 'editora-lista', component: PublishersComponent},
   {path: 'editora', component: PublishingComponent},
   {path: 'faleconosco', component: ContactusComponent},
   {path: 'esqueci-senha', component: EsqueciSenhaComponent},
   {path: 'login', component: CadastroComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
