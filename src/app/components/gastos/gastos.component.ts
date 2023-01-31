import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../../services/presupuesto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css'],
})
export class GastosComponent implements OnInit {
  constructor(
    private _presupuestoService: PresupuestoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this._presupuestoService.presupuesto);
    if (this._presupuestoService.presupuesto === 0) {
      this.router.navigate(['/ingresarPresupuesto']);
    }
  }
}
