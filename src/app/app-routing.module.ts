import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './a-propos/a-propos.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DernierSortieComponent } from './dernier-sortie/dernier-sortie.component';
import { FavorieComponent } from './favorie/favorie.component';
import { FilmVueComponent } from './film-vue/film-vue.component';
import { LoginComponent } from './login/login.component';
import { AjouterUserComponent } from './login/user/ajouter-user/ajouter-user.component';
import { ModifierUserComponent } from './login/user/modifier-user/modifier-user.component';
import { UserComponent } from './login/user/user.component';

const routes: Routes = [
  { path: 'apropos', component: AProposComponent },
  { path: 'dernierSortie', component: DernierSortieComponent },
  { path: 'favorie', component: FavorieComponent },
  { path: 'filmVue', component: FilmVueComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent },
  { path: 'ajouterUser', component: AjouterUserComponent },
  { path: 'modifierUser', component: ModifierUserComponent },
  { path: 'accueil', component: AcceuilComponent },
  { path: '', component: AcceuilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
