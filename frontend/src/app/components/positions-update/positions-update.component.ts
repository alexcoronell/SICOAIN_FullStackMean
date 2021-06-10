import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Positions } from '../../models/positions';
import { PositionsService } from '../../services/positions.service';

declare var M: any;

@Component({
  selector: 'app-positions-update',
  templateUrl: './positions-update.component.html',
  styleUrls: ['./positions-update.component.scss']
})
export class PositionsUpdateComponent implements OnInit {

  position: Positions;
  positions: Positions[];
  searchItem: Positions;
  showForm: boolean = false;
  showSearchForm: boolean = true;
  searchValidate: boolean = false;

  constructor(
    private positionsService: PositionsService,
    private router: Router
  ) {
    this.position = new Positions;
    this.searchItem = new Positions;
  }

  ngOnInit(): void {
    this.getPositions();
  }

  // Búsqueda y carga de registro
  search(SearchForm: NgForm) {
    this.searchItem.name = this.searchItem.name.trim();
    this.positionsService.getPosition(this.searchItem)
    .subscribe(
      res => {
        this.position = res.positionData;
        this.clearSearchForm();
        this.showForm = true;
        this.showSearchForm = false;
      },
      err => {
        if (err.error == "The Position doen't exist") {
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
  };

// Obtener todos los cargos
getPositions = () => {
  this.positionsService.getPositions()
    .subscribe(
      res => {
        this.positions = res as Positions[];
      },
      err => {
        console.error(err.error);
      }
    )
}

  update(Form: NgForm){
    this.positionsService.update(Form.value)
    .subscribe(
      res => {
        M.toast({
        html: 'Cargo actualizado correctamente',
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
          html: 'Cargo no se pudo actualizar',
          displayLength: 1500
        })
    })
  }

  clearData(form?: NgForm) {
    if (form) {
      form.reset();
      this.position = new Positions();
    }
    this.clearSearchForm();
    this.showForm = false;
    this.showSearchForm = true;
  }

  clearSearchForm() {
    this.searchItem.name = "";
  }

}
