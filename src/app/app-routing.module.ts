import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BookcaseComponent } from './pages/bookcase/bookcase.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [{
   path: '', component: HomeComponent, pathMatch: 'full'},
   {path: 'user', loadChildren: 'app/pages/user/user.module#UserModule'},
   {path: 'estante', component: BookcaseComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
