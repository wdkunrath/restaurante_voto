import localePt from '@angular/common/locales/pt';
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
import { HomeComponent } from './views/home';
import { LoginComponent } from './views/login';
import { RestaurantCrudComponent } from './views/restaurant-crud/restaurant-crud.component';

import { HeaderComponent } from '@components/template/header/header.component';
import { FooterComponent } from '@components/template/footer/footer.component';

import { RestaurantCreateComponent } from '@components/restaurant/restaurant-create/restaurant-create.component';
import { RestaurantReadComponent } from '@components/restaurant/restaurant-read/restaurant-read.component';
import { RestaurantUpdateComponent } from '@components/restaurant/restaurant-update/restaurant-update.component';
import { RestaurantDeleteComponent } from '@components/restaurant/restaurant-delete/restaurant-delete.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      LoginComponent,
      HeaderComponent,
      FooterComponent,

      RestaurantCrudComponent,
      RestaurantCreateComponent,
      RestaurantReadComponent,
      RestaurantUpdateComponent,
      RestaurantDeleteComponent,

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
