import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import { Employees } from '../../models/employees';

// Servicios y modelos de campos adicionales
import { Departments } from '../../models/departments';
import { DepartmentsService } from '../../services/departments.service';
import { Municipalities } from '../../models/municipalities';
import { MunicipalitiesService } from '../../services/municipalities.service';
import { Companies } from '../../models/companies';
import { CompaniesService } from '../../services/companies.service';
import { Venues } from '../../models/venues';
import { VenuesService } from '../../services/venues.service';
import { Positions } from '../../models/positions';
import { PositionsService } from '../../services/positions.service';
import { Eps } from '../../models/eps';
import { EpsService } from '../../services/eps.service';
import { Arl } from '../../models/arl';
import { ArlService } from '../../services/arl.service';

declare var M: any;

@Component({
  selector: 'app-employees-create',
  templateUrl: './employees-create.component.html',
  styleUrls: ['./employees-create.component.scss']
})
export class EmployeesCreateComponent implements OnInit {

  employee: Employees;
  errorMessage: boolean = false

  department: Departments;
  departments: Departments[];
  municipality: Municipalities;
  municipalities: Municipalities[];
  company: Companies;
  companies: Companies[];
  campus: Venues;
  venues: Venues[];
  position: Positions;
  positions: Positions[];
  eps: Eps;
  epss: Eps[];
  arl: Arl;
  arls: Arl[];

  currentDepartment: string;

  constructor(
    private employeesService: EmployeesService,
    private departmentsService: DepartmentsService,
    private municipalitiesService: MunicipalitiesService,
    private companiesServices: CompaniesService,
    private venuesServices: VenuesService,
    private positionsService: PositionsService,
    private epsService: EpsService,
    private arlService: ArlService,
    private router: Router
  ) {
    this.employee = new Employees;
    this.department = new Departments;
    this.municipality = new Municipalities;
    this.company = new Companies;
    this.campus = new Venues;
    this.position = new Positions;
    this.eps = new Eps;
    this.arl = new Arl;
  }

  ngOnInit(): void {
    this.department = new Departments;
    this.getDepartments();
    this.currentDepartment = this.department._id;
    this.loadMunicipalities();
    this.getActiveCompanies();
    this.getActiveVenues();
    this.getActivePositions();
    this.getActiveEpss();
    this.getActiveArls();
  }

  create(Form: NgForm) {
    this.employeesService.create(Form.value)
    .subscribe(
      res => {
      this.clearData(Form);
      M.toast({
        html: 'Empleado creado satisfactoriamente',
        displayLength: 1500
      });
      setTimeout (() => {
        this.router.navigate(['/employesAndPositions']);
    }, 1500);
    },
      err => {
        this.errorMessage = true;
        setTimeout (() => {
          this.errorMessage = false;
      }, 1500);
        M.toast({
          html: 'Empleado no se pudo guardar',
          displayLength: 1500
        })
    })
  }

  clearData(Form?: NgForm) {
    if (Form) {
      Form.reset();
      this.employee = new Employees;
    }
  }

  getDepartments() {
    this.departmentsService.getDepartments()
      .subscribe(
        res => {
          this.departments = res as Departments[];
        },
        err => {
          console.log(err.error);
          }
      )
  }

  getMunicipalitiesDepartment(department) {
    this.municipalitiesService.getMunicipalitiesDepartment(department)
      .subscribe(
        res => {
          this.municipalities = res as Municipalities[];
          console.log(this.municipalities);
        },
        err => {
          console.log(err.error);
          }
      )
  }
  loadMunicipalities() {
    this.municipalitiesService.getMunicipalities()
      .subscribe(
        res => {
          this.municipalities = res as Municipalities[];
        },
        err => {
          console.log(err.error);
          }
      )
  }

  getActiveCompanies() {
    this.companiesServices.getActiveCompanies()
      .subscribe(
        res => {
          this.companies = res as Companies[];
        },
        err => {
          console.log(err.error);
          }
      )
  }

  getActiveVenues() {
    this.venuesServices.getActiveVenues()
      .subscribe(
        res => {
          this.venues = res as Venues[];
        },
        err => {
          console.log(err.error);
          }
      )
  }

  getActivePositions() {
    this.positionsService.getActivePositions()
      .subscribe(
        res => {
          this.positions = res as Positions[];
        },
        err => {
          console.log(err.error);
          }
      )
  }

  getActiveEpss() {
    this.epsService.getActiveEpss()
      .subscribe(
        res => {
          this.epss = res as Eps[];
        },
        err => {
          console.log(err.error);
          }
      )
  }

  getActiveArls() {
    this.arlService.getActiveArls()
      .subscribe(
        res => {
          this.arls = res as Arl[];
        },
        err => {
          console.log(err.error);
          }
      )
  }

}
