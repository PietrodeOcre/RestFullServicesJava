import { Component, OnInit, ViewChildren, ElementRef, asNativeElements, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cuerpo-calculadora',
  templateUrl: './cuerpo-calculadora.component.html',
  styleUrls: ['./cuerpo-calculadora.component.css']
})
export class CuerpoCalculadoraComponent implements OnInit {

  @ViewChild('respuesta') respuesta: ElementRef;
  public resp: number;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  // tslint:disable-next-line: typedef
  suma(a, b) {
    // console.log(this.respuesta.nativeElement.style.display);
    this.respuesta.nativeElement.style = { display: 'visible' };
    // console.log(a);
    // console.log(b);
    // tslint:disable-next-line: radix
    this.resp = parseInt(a.value) + parseInt(b.value);
  }

  // tslint:disable-next-line: typedef
  resta(a, b) {
    // console.log(this.respuesta.nativeElement.style.display);
    this.respuesta.nativeElement.style = { display: 'visible' };
    // console.log(a);
    // console.log(b);
    // tslint:disable-next-line: radix
    this.resp = parseInt(a.value) - parseInt(b.value);
  }

  // tslint:disable-next-line: typedef
  multiplica(a, b) {
    // console.log(this.respuesta.nativeElement.style.display);
    this.respuesta.nativeElement.style = { display: 'visible' };
    // console.log(a);
    // console.log(b);
    // tslint:disable-next-line: radix
    this.resp = parseInt(a.value) * parseInt(b.value);
  }

  // tslint:disable-next-line: typedef
  divide(a, b) {
    // console.log(this.respuesta.nativeElement.style.display);
    this.respuesta.nativeElement.style = { display: 'visible' };
    // console.log(a);
    // console.log(b);
    // tslint:disable-next-line: radix
    this.resp = parseInt(a.value) / parseInt(b.value);
  }

}
