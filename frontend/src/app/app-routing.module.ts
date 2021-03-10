import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { UsersCreateComponent } from './components/users-create/users-create.component';
import { UsersPasswordUpdateComponent } from './components/users-password-update/users-password-update.component';
import { UsersUpdateComponent } from './components/users-update/users-update.component';
import { UsersActivateDesactivateComponent } from './components/users-activate-desactivate/users-activate-desactivate.component'
import { UsersComponent } from './components/users/users.component';

// Componentes Empleados y Cargos
import { EmployeesAndPositionsComponent } from './components/employees-and-positions/employees-and-positions.component';
import { EmployeesCreateComponent } from './components/employees-create/employees-create.component';
import { EmployeesUpdateComponent } from './components/employees-update/employees-update.component';
import { EmployeesActivateDesactivateComponent } from './components/employees-activate-desactivate/employees-activate-desactivate.component';
import { PositionsCreateComponent } from './components/positions-create/positions-create.component';
import { PositionsUpdateComponent } from './components/positions-update/positions-update.component';
import { PositionsActivateDesactivateComponent } from './components/positions-activate-desactivate/positions-activate-desactivate.component';

import { PasswordChangeComponent } from './components/password-change/password-change.component';

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
    path: 'users/activateDesactivate',
    component: UsersActivateDesactivateComponent
  },
  {
    path: 'employesAndPositions',
    component: EmployeesAndPositionsComponent
  },
  {
    path: 'employes/create',
    component: EmployeesCreateComponent
  },
  {
    path: 'employes/update',
    component: EmployeesUpdateComponent
  },
  {
    path: 'employes/activateDesactivate',
    component: EmployeesActivateDesactivateComponent
  },
  {
    path: 'positions/create',
    component: PositionsCreateComponent
  },
  {
    path: 'positions/update',
    component: PositionsUpdateComponent
  },
  {
    path: 'positions/activateDesactivate',
    component: PositionsActivateDesactivateComponent
  },
  {
    path: 'passwordChange',
    component: PasswordChangeComponent
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
