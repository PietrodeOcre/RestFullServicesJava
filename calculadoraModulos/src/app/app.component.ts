import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Creando calculadora Modular';
  resultadoPadre: number;

  // tslint:disable-next-line: typedef
  onResultado(resultado: number){
    this.resultadoPadre = resultado;
  }
}
