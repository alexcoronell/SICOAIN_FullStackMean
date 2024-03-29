import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componente pantalla Principal
import { MainComponent } from './components/main/main.component';

// Componentes Usuario y Login
import { LoginComponent } from './components/login/login.component';
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

// Componentes compañía
import { CompaniesComponent } from './components/companies/companies.component';
import { CompaniesCreateComponent } from './components/companies-create/companies-create.component';
import { CompaniesUpdateComponent } from './components/companies-update/companies-update.component';
import { CompaniesActivateDesactivateComponent } from './components/companies-activate-desactivate/companies-activate-desactivate.component';

// Componentes Sedes
import { VenuesComponent } from './components/venues/venues.component';
import { VenuesCreateComponent } from './components/venues-create/venues-create.component';
import { VenuesUpdateComponent } from './components/venues-update/venues-update.component';
import { VenuesActivateDesactivateComponent } from './components/venues-activate-desactivate/venues-activate-desactivate.component';

// Componentes EPS
import { EpsComponent } from './components/eps/eps.component';
import { EpsCreateComponent } from './components/eps-create/eps-create.component';
import { EpsUpdateComponent } from './components/eps-update/eps-update.component';
import { EpsActivateDesactivateComponent } from './components/eps-activate-desactivate/eps-activate-desactivate.component';

// Componentes Arl
import { ArlComponent } from './components/arl/arl.component';
import { ArlCreateComponent } from './components/arl-create/arl-create.component';
import { ArlUpdateComponent } from './components/arl-update/arl-update.component';
import { ArlActivateDesactivateComponent } from './components/arl-activate-desactivate/arl-activate-desactivate.component';

// Compomentes Incidentes y Sucesos
import { RecordsAndEventsComponent } from './components/records-and-events/records-and-events.component';
import { RecordsCreateComponent } from './components/records-create/records-create.component';
import { RecordsUpdateComponent } from './components/records-update/records-update.component';
import { RecordsCancelComponent } from './components/records-cancel/records-cancel.component';
import { EventsCreateComponent } from './components/events-create/events-create.component';
import { EventsUpdateComponent } from './components/events-update/events-update.component';
import { EventsActivateDesactivateComponent } from './components/events-activate-desactivate/events-activate-desactivate.component';

// Componentes de Reportes
import { ReportsComponent } from './components/reports/reports.component';
import { ReportUsersComponent } from './components/report-users/report-users.component';
import { ReportEmployeesComponent } from './components/report-employees/report-employees.component';
import { ReportPositionsComponent } from './components/report-positions/report-positions.component';
import { ReportCompaniesComponent } from './components/report-companies/report-companies.component';
import { ReportVenuesComponent } from './components/report-venues/report-venues.component';
import { ReportEpsComponent } from './components/report-eps/report-eps.component';
import { ReportArlComponent } from './components/report-arl/report-arl.component';
import { ReportRecordsComponent } from './components/report-records/report-records.component';
import { ReportEventsComponent } from './components/report-events/report-events.component';

// Componente cambio de contraseña
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
    path: 'companies',
    component: CompaniesComponent
  },
  {
    path: 'companies/create',
    component: CompaniesCreateComponent
  },
  {
    path: 'companies/update',
    component: CompaniesUpdateComponent
  },
  {
    path: 'companies/activateDesactivate',
    component: CompaniesActivateDesactivateComponent
  },
  {
    path: 'venues',
    component: VenuesComponent
  },
  {
    path: 'venues/create',
    component: VenuesCreateComponent
  },
  {
    path: 'venues/update',
    component: VenuesUpdateComponent
  },
  {
    path: 'venues/activateDesactivate',
    component: VenuesActivateDesactivateComponent
  },
  {
    path: 'eps',
    component: EpsComponent
  },
  {
    path: 'eps/create',
    component: EpsCreateComponent
  },
  {
    path: 'eps/update',
    component: EpsUpdateComponent
  },
  {
    path: 'eps/activateDesactivate',
    component: EpsActivateDesactivateComponent
  },
  {
    path: 'arl',
    component: ArlComponent
  },
  {
    path: 'arl/create',
    component: ArlCreateComponent
  },
  {
    path: 'arl/update',
    component: ArlUpdateComponent
  },
  {
    path: 'arl/activateDesactivate',
    component: ArlActivateDesactivateComponent
  },
  {
    path: 'recordsAndEvents',
    component: RecordsAndEventsComponent
  },
  {
    path: 'records/create',
    component: RecordsCreateComponent
  },
  {
    path: 'records/update',
    component: RecordsUpdateComponent
  },
  {
    path: 'records/cancel',
    component: RecordsCancelComponent
  },
  {
    path: 'events/create',
    component: EventsCreateComponent
  },
  {
    path: 'events/update',
    component: EventsUpdateComponent
  },
  {
    path: 'events/activateDesactivate',
    component: EventsActivateDesactivateComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'reports/users',
    component: ReportUsersComponent
  },
  {
    path: 'reports/employees',
    component: ReportEmployeesComponent
  },
  {
    path: 'reports/positions',
    component: ReportPositionsComponent
  },
  {
    path: 'reports/companies',
    component: ReportCompaniesComponent
  },
  {
    path: 'reports/venues',
    component: ReportVenuesComponent
  },
  {
    path: 'reports/eps',
    component: ReportEpsComponent
  },
  {
    path: 'reports/arl',
    component: ReportArlComponent
  },
  {
    path: 'reports/records',
    component: ReportRecordsComponent
  },
  {
    path: 'reports/events',
    component: ReportEventsComponent
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
