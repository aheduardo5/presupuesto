import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../../../services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css'],
})
export class IngresarGastoComponent implements OnInit {
  nombreGasto: string;
  cantidad: number;
  cantidadBool: boolean;
  mensajeError:string
  formularioCorrecto: boolean;
  textIncorrecto: string;
  presupuesto:number;

  constructor(private _presupuestoService: PresupuestoService) {
    this.nombreGasto = '';
    this.cantidad = 0;
    this.cantidadBool = false;
    this.formularioCorrecto = false;
    this.textIncorrecto = '';
    this.presupuesto = this._presupuestoService.presupuesto;
    this.mensajeError='';
  }

  ngOnInit(): void {}

  agregarGasto(): void {

    if(this.cantidad > this._presupuestoService.restante ){
      this.formularioCorrecto = false;
      this.cantidadBool = true;
      this.textIncorrecto = `Cantidad ingresada es mayor a $${this._presupuestoService.restante}`;
      this.mensajeError = `El gasto debe de no debe de exceder de $${this._presupuestoService.restante}`
      return;
    }
    if (this.nombreGasto === '' || this.cantidad <= 0) {
      this.cantidadBool = false;
      this.formularioCorrecto = true;
      this.textIncorrecto = 'Nombre gasto o cantidad incorrecta';
      this.cantidadBool = true;
      this.mensajeError = 'El gasto debe de ser mayor a $0';
    } else {

      const GASTO = {
        nombre: this.nombreGasto,
        cantidad: this.cantidad,
      }

      this._presupuestoService.agregarGasto(GASTO);
      
      this.cantidadBool = false;
      this.formularioCorrecto = false;
      this.cantidadBool = false;
      this.nombreGasto = '';
      this.cantidad = 0;
    }
  }
}
