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
  selector: 'app-employees-update',
  templateUrl: './employees-update.component.html',
  styleUrls: ['./employees-update.component.scss']
})
export class EmployeesUpdateComponent implements OnInit {

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

  searchItem: Employees;
  currentDepartment: string;
  showForm: boolean = false;
  showSearchForm: boolean = true;
  searchValidate: boolean = false;

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
    this.searchItem = new Employees;
  }

  ngOnInit(): void {
    this.department = new Departments;
    this.getDepartments();
    this.currentDepartment = this.department._id;
    this.loadMunicipalities();
    this.getCompanies();
    this.getVenues();
    this.getPositions();
    this.getEpss();
    this.getArls();
  }

  search() {
    this.employeesService.getEmployee(this.searchItem)
    .subscribe(
      res => {
        this.employee = res.employeeData;
        this.showForm = true;
        this.showSearchForm = false;
      },
      err => {
        if (err.error == "The Employee doen't exist") {
          this.searchValidate = true;
        setTimeout (() => {
          this.searchValidate = false;
      }, 1500);
        } else {
          console.log(err.error);
        }
          this.clearSearchForm();
        }
    )
  }

  update(Form: NgForm){
    this.employeesService.update(Form.value)
    .subscribe(
      res => {
        M.toast({
        html: 'Empleado actualizado correctamente',
        displayLength: 1500
      });
        setTimeout (() => {
        this.router.navigate(['/employesAndPositions']);
    }, 1500);
    this.clearData(Form);
    },
      err => {
        console.log(err)
        M.toast({
          html: 'Empleado no se pudo actualizar',
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

  clearSearchForm() {
    this.searchItem.identificationNumber = "";
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

  getCompanies() {
    this.companiesServices.getCompanies()
      .subscribe(
        res => {
          this.companies = res as Companies[];
        },
        err => {
          console.log(err.error);
          }
      )
  }

  getVenues() {
    this.venuesServices.getVenues()
      .subscribe(
        res => {
          this.venues = res as Venues[];
        },
        err => {
          console.log(err.error);
          }
      )
  }

  getPositions() {
    this.positionsService.getPositions()
      .subscribe(
        res => {
          this.positions = res as Positions[];
        },
        err => {
          console.log(err.error);
          }
      )
  }

  getEpss() {
    this.epsService.getEpss()
      .subscribe(
        res => {
          this.epss = res as Eps[];
        },
        err => {
          console.log(err.error);
          }
      )
  }

  getArls() {
    this.arlService.getArls()
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
