import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterLoginComponent } from './pages/login/register-login/register-login.component';
import { RedefinePasswordComponent } from './pages/login/redefine-password/redefine-password.component';
import { DeleteComponent } from './modals/delete/delete.component';
import { SaveComponent } from './modals/save/save.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterLoginComponent,
    RedefinePasswordComponent,
    DeleteComponent,
    SaveComponent,
    SidebarComponent,
    MainScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
