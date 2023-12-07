import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterLoginComponent } from './pages/login/register-login/register-login.component';
import { RedefinePasswordComponent } from './pages/login/redefine-password/redefine-password.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { ConstructionsComponent } from './components/constructions/constructions.component';
import { ObrasComponent } from './pages/obras/obras.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { ModalSaveComponent } from './components/modal-save/modal-save.component';
import { ModalDeleteSuccessComponent } from './components/modal-delete/modal-delete-success/modal-delete-success.component';
import { CURRENCY_MASK_CONFIG, CurrencyMaskConfig, CurrencyMaskModule } from 'ng2-currency-mask';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AddEditObraComponent } from './pages/obras/add-edit-obra/add-edit-obra.component';
import { AddEditUserComponent } from './pages/home/add-edit-user/add-edit-user.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MatIconModule } from '@angular/material/icon';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "left",
  allowNegative: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterLoginComponent,
    RedefinePasswordComponent,
    SidebarComponent,
    MainScreenComponent,
    ConstructionsComponent,
    ObrasComponent,
    ModalComponent,
    ModalDeleteComponent,
    ModalSaveComponent,
    ModalDeleteSuccessComponent,
    AddEditObraComponent,
    AddEditUserComponent,   
    ConfirmationDialogComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CurrencyMaskModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule 
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
