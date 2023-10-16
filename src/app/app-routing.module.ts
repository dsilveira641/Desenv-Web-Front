import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterLoginComponent } from './pages/login/register-login/register-login.component';
import { RedefinePasswordComponent } from './pages/login/redefine-password/redefine-password.component';
import { DeleteComponent } from './modals/delete/delete.component';
import { SaveComponent } from './modals/save/save.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'register-login', component: RegisterLoginComponent},
  { path: 'redefine-password', component: RedefinePasswordComponent},
  { path: 'delete', component: DeleteComponent},
  { path: 'save', component: SaveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
