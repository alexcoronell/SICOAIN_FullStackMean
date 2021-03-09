import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { UsersCreateComponent } from './components/users-create/users-create.component';
import { UsersPasswordUpdateComponent } from './components/users-password-update/users-password-update.component';
import { UsersUpdateComponent } from './components/users-update/users-update.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/create',
    component: UsersCreateComponent
  },
  {
    path: 'users/update',
    component: UsersUpdateComponent
  },
  {
    path: 'users/passwordUpdate',
    component: UsersPasswordUpdateComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
