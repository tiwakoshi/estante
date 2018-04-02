import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent,
    CadastroComponent,
    EsqueciSenhaComponent
  ]
})
export class LoginModule { }
