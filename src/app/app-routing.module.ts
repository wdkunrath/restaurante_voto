import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers';

import { HomeComponent } from './views/home';
import { LoginComponent } from './views/login';
import { RestaurantCrudComponent } from "./views/restaurant-crud/restaurant-crud.component";

import { RestaurantCreateComponent } from '@components/restaurant/restaurant-create/restaurant-create.component';
import { RestaurantUpdateComponent } from '@components/restaurant/restaurant-update/restaurant-update.component';
import { RestaurantDeleteComponent } from '@components/restaurant/restaurant-delete/restaurant-delete.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: "restaurant",component: RestaurantCrudComponent, canActivate: [AuthGuard]},
  {path: "restaurant/create",component: RestaurantCreateComponent, canActivate: [AuthGuard]},
  {path: "restaurant/update/:id",component: RestaurantUpdateComponent, canActivate: [AuthGuard]},
  {path: "restaurant/delete/:id",component: RestaurantDeleteComponent, canActivate: [AuthGuard]},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
