import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Operando } from '../operando.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() operando: new EventEmitter<Operando>().emit();

  constructor() {

   };



}
