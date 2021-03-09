import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { UsersCreateComponent } from './components/users-create/users-create.component';
import { UsersUpdateComponent } from './components/users-update/users-update.component';
import { UsersActivateDesactivateComponent } from './components/users-activate-desactivate/users-activate-desactivate.component';
import { UsersPasswordUpdateComponent } from './components/users-password-update/users-password-update.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    FooterComponent,
    MainComponent,
    HeaderComponent,
    MenuComponent,
    UsersCreateComponent,
    UsersUpdateComponent,
    UsersActivateDesactivateComponent,
    UsersPasswordUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
