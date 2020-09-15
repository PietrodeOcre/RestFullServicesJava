import { Component, Output, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() resultadoOperacion = new EventEmitter<number>();
  operandoA: string;
  operandoB: string;

  constructor() { }

  ngOnInit(): void {
  }

  sumar(): void{
    // tslint:disable-next-line: radix
    const resultado: number = parseInt(this.operandoA) + parseInt(this.operandoB);
    this.resultadoOperacion.emit(resultado);
  }

  resta(): void{
    // tslint:disable-next-line: radix
    const resultado: number = parseInt(this.operandoA) - parseInt(this.operandoB);
    this.resultadoOperacion.emit(resultado);
  }

  multi(): void{
    // tslint:disable-next-line: radix
    const resultado: number = parseInt(this.operandoA) * parseInt(this.operandoB);
    this.resultadoOperacion.emit(resultado);
  }

  divi(): void{
    // tslint:disable-next-line: radix
    const resultado: number = parseInt(this.operandoA) / parseInt(this.operandoB);
    this.resultadoOperacion.emit(resultado);
  }

}
