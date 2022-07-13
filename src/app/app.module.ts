import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { BanniereComponent } from './banniere/banniere.component';
import { DernierSortieComponent } from './dernier-sortie/dernier-sortie.component';
import { FavorieComponent } from './favorie/favorie.component';
import { FilmVueComponent } from './film-vue/film-vue.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './login/user/user.component';
import { AjouterUserComponent } from './login/user/ajouter-user/ajouter-user.component';
import { ModifierUserComponent } from './login/user/modifier-user/modifier-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    BanniereComponent,
    DernierSortieComponent,
    FavorieComponent,
    FilmVueComponent,
    AProposComponent,
    LoginComponent,
    UserComponent,
    AjouterUserComponent,
    ModifierUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
