import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { MinhaEstanteComponent } from './minha-estante/minha-estante.component';
import { PreferenciasComponent } from './preferencias/preferencias.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [
    UserComponent,
    MeuPerfilComponent,
    MinhaEstanteComponent,
    PreferenciasComponent
  ]
})
export class UserModule { }
