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
import { UsersMenuComponent } from './components/users-menu/users-menu.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';
import { EmployeesAndPositionsComponent } from './components/employees-and-positions/employees-and-positions.component';
import { EmployeesAndPositionsMenuComponent } from './components/employees-and-positions-menu/employees-and-positions-menu.component';
import { EmployeesCreateComponent } from './components/employees-create/employees-create.component';
import { EmployeesUpdateComponent } from './components/employees-update/employees-update.component';
import { EmployeesActivateDesactivateComponent } from './components/employees-activate-desactivate/employees-activate-desactivate.component';
import { PositionsCreateComponent } from './components/positions-create/positions-create.component';
import { PositionsUpdateComponent } from './components/positions-update/positions-update.component';
import { PositionsActivateDesactivateComponent } from './components/positions-activate-desactivate/positions-activate-desactivate.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompaniesMenuComponent } from './components/companies-menu/companies-menu.component';
import { CompaniesCreateComponent } from './components/companies-create/companies-create.component';
import { CompaniesUpdateComponent } from './components/companies-update/companies-update.component';
import { CompaniesActivateDesactivateComponent } from './components/companies-activate-desactivate/companies-activate-desactivate.component';
import { VenuesComponent } from './components/venues/venues.component';
import { VenuesMenuComponent } from './components/venues-menu/venues-menu.component';
import { VenuesCreateComponent } from './components/venues-create/venues-create.component';
import { VenuesUpdateComponent } from './components/venues-update/venues-update.component';
import { VenuesActivateDesactivateComponent } from './components/venues-activate-desactivate/venues-activate-desactivate.component';
import { EpsComponent } from './components/eps/eps.component';
import { EpsMenuComponent } from './components/eps-menu/eps-menu.component';
import { EpsCreateComponent } from './components/eps-create/eps-create.component';
import { EpsUpdateComponent } from './components/eps-update/eps-update.component';
import { EpsActivateDesactivateComponent } from './components/eps-activate-desactivate/eps-activate-desactivate.component';
import { ArlComponent } from './components/arl/arl.component';
import { ArlMenuComponent } from './components/arl-menu/arl-menu.component';
import { ArlCreateComponent } from './components/arl-create/arl-create.component';
import { ArlUpdateComponent } from './components/arl-update/arl-update.component';
import { ArlActivateDesactivateComponent } from './components/arl-activate-desactivate/arl-activate-desactivate.component';
import { RecordsAndEventsComponent } from './components/records-and-events/records-and-events.component';
import { RecordsAndEventsMenuComponent } from './components/records-and-events-menu/records-and-events-menu.component';
import { RecordsCreateComponent } from './components/records-create/records-create.component';
import { RecordsUpdateComponent } from './components/records-update/records-update.component';
import { RecordsCancelComponent } from './components/records-cancel/records-cancel.component';
import { EventsCreateComponent } from './components/events-create/events-create.component';
import { EventsUpdateComponent } from './components/events-update/events-update.component';
import { EventsActivateDesactivateComponent } from './components/events-activate-desactivate/events-activate-desactivate.component';

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
    UsersPasswordUpdateComponent,
    UsersMenuComponent,
    PasswordChangeComponent,
    EmployeesAndPositionsComponent,
    EmployeesAndPositionsMenuComponent,
    EmployeesCreateComponent,
    EmployeesUpdateComponent,
    EmployeesActivateDesactivateComponent,
    PositionsCreateComponent,
    PositionsUpdateComponent,
    PositionsActivateDesactivateComponent,
    CompaniesComponent,
    CompaniesMenuComponent,
    CompaniesCreateComponent,
    CompaniesUpdateComponent,
    CompaniesActivateDesactivateComponent,
    VenuesComponent,
    VenuesMenuComponent,
    VenuesCreateComponent,
    VenuesUpdateComponent,
    VenuesActivateDesactivateComponent,
    EpsComponent,
    EpsMenuComponent,
    EpsCreateComponent,
    EpsUpdateComponent,
    EpsActivateDesactivateComponent,
    ArlComponent,
    ArlMenuComponent,
    ArlCreateComponent,
    ArlUpdateComponent,
    ArlActivateDesactivateComponent,
    RecordsAndEventsComponent,
    RecordsAndEventsMenuComponent,
    RecordsCreateComponent,
    RecordsUpdateComponent,
    RecordsCancelComponent,
    EventsCreateComponent,
    EventsUpdateComponent,
    EventsActivateDesactivateComponent
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
