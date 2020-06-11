﻿import localePt from '@angular/common/locales/pt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatCardModule } from  '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from  '@angular/material/button';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { registerLocaleData } from  '@angular/common';

import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';

import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './helpers';

import { HomeComponent } from '@app/views/home';
import { LoginComponent } from '@app/views/login';
import { RestaurantCrudComponent } from '@app/views/restaurant-crud/restaurant-crud.component';
import { UsuariosCrudComponent } from "@app/views/usuarios-crud/usuarios-crud.component";
import { SemanasCrudComponent } from "@app/views/semanas-crud/semanas-crud.component";
import { VotacaoCrudComponent } from '@app/views/votacao-crud/votacao-crud.component';

import { HeaderComponent } from '@components/template/header/header.component';
import { NavComponent } from '@components/template/nav/nav.component';
import { FooterComponent } from '@components/template/footer/footer.component';

import { RestaurantCreateComponent } from '@components/restaurant/restaurant-create/restaurant-create.component';
import { RestaurantReadComponent } from '@components/restaurant/restaurant-read/restaurant-read.component';
import { RestaurantUpdateComponent } from '@components/restaurant/restaurant-update/restaurant-update.component';
import { RestaurantDeleteComponent } from '@components/restaurant/restaurant-delete/restaurant-delete.component';

import { UsuariosCreateComponent } from '@components/usuarios/usuarios-create/usuarios-create.component';
import { UsuariosUpdateComponent } from '@components/usuarios/usuarios-update/usuarios-update.component';
import { UsuariosDeleteComponent } from '@components/usuarios/usuarios-delete/usuarios-delete.component';
import { UsuariosReadComponent } from '@components/usuarios/usuarios-read/usuarios-read.component';

import { SemanasCreateComponent } from '@components/semanas/semanas-create/semanas-create.component';
import { SemanasReadComponent } from '@components/semanas/semanas-read/semanas-read.component';
import { SemanasUpdateComponent } from '@components/semanas/semanas-update/semanas-update.component';
import { SemanasDeleteComponent } from '@components/semanas/semanas-delete/semanas-delete.component';

import { VotacaoReadComponent } from '@components/votacao/votacao-read/votacao-read.component';
import { VotacaoCreateComponent } from '@components/votacao/votacao-create/votacao-create.component';
import { VotacaoUpdateComponent } from '@components/votacao/votacao-update/votacao-update.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      LoginComponent,
      HeaderComponent,
      NavComponent,
      FooterComponent,

      RestaurantCrudComponent,
      RestaurantCreateComponent,
      RestaurantReadComponent,
      RestaurantUpdateComponent,
      RestaurantDeleteComponent,

      UsuariosCrudComponent,
      UsuariosCreateComponent,
      UsuariosReadComponent,
      UsuariosUpdateComponent,
      UsuariosDeleteComponent,

      SemanasCrudComponent,
      SemanasCreateComponent,
      SemanasReadComponent,
      SemanasUpdateComponent,
      SemanasDeleteComponent,

      VotacaoCrudComponent,
      VotacaoReadComponent,
      VotacaoCreateComponent,
      VotacaoUpdateComponent,


      RedDirective,
      ForDirective,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
        MatSnackBarModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'pt-BR' },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
