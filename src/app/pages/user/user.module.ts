import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { MinhaEstanteComponent } from './minha-estante/minha-estante.component';
import { PreferenciasComponent } from './preferencias/preferencias.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
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
