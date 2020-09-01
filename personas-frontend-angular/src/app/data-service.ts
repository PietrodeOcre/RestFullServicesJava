import { Persona } from './persona.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';



/**
 * @Injectable()
 */
export class DataService {
  constructor(private httpClient: HttpClient){}

  urlBase = 'http://localhost:8080/personas-backend-java/webservice/persona';

  // tslint:disable-next-line: typedef
  public cargarPersonas(){
    return this.httpClient.get(this.urlBase);
  }

  // tslint:disable-next-line: typedef
  public agregarPersona(persona: Persona){
    return this.httpClient.post(this.urlBase, persona);
  }

  // tslint:disable-next-line: typedef
  public modificarPersona(idPersona: number, persona: Persona){
    let url: string;
    url = this.urlBase + '/' + idPersona;
    this.httpClient.put(url, persona).subscribe(
      response => {
        console.log('Resultado de modificar persona: ' + response);
      },
      error => {
        console.log('Error en modificar persona' + error);
      }
    );
  }

  // tslint:disable-next-line: typedef
  public eliminarPersona(idPersona: number){
    let url: string;
    url = this.urlBase + '/' + idPersona;
    this.httpClient.delete(url).subscribe(
      response => {
        console.log('Resultado de eliminar persona: ' + response);
      },
      error => {
        console.log('Error en eliminar persona' + error);
      }
    );
  }

}
