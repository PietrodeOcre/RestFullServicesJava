import { Persona } from './persona.model';
import { Injectable } from '@angular/core';
import { DataService } from './data-service';

@Injectable()
export class PersonaService {

  personas: Persona[] = [];

  constructor( private dataService: DataService) {}

  // Se usa para modificar el valor del arreglo debido a la llamada asincrona
  // tslint:disable-next-line: typedef
  setPersonas(personas: Persona[]){
    this.personas = personas;
  }

  // tslint:disable-next-line: typedef
  obtenerPersonas() {
    return this.dataService.cargarPersonas();
  }


  // tslint:disable-next-line: typedef
  agregarPersona(persona: Persona){
    console.log('persona a agregar:' + persona.nombre);
    this.dataService.agregarPersona(persona)
      .subscribe(
        // tslint:disable-next-line: no-shadowed-variable
        (persona: Persona) => {
          // Recuperamos objeto Persona con el idPersona recien agregado
          console.log('se agrega al arreglo la persona recien insertada suscriber:' + persona.idPersona);
          this.personas.push(persona);
        }
      );
  }

  // tslint:disable-next-line: typedef
  encontrarPersona(id: number){
    // tslint:disable-next-line: no-shadowed-variable
    const persona: Persona = this.personas.find( persona => persona.idPersona == id);
    console.log('persona encontrada:' + persona.idPersona + ' ' + persona.nombre);
    return persona;
  }

  // tslint:disable-next-line: typedef
  modificarPersona(id: number, persona: Persona) {
    console.log('persona a modificar:' + persona.idPersona);
    // se actualiza el objeto persona del arreglo
    // tslint:disable-next-line: no-shadowed-variable
    const personaModificadaLocal = this.personas.find(persona => persona.idPersona == id);
    personaModificadaLocal.idPersona = persona.idPersona;
    personaModificadaLocal.nombre = persona.nombre;
    // guardar la persona en la base de datos
    this.dataService.modificarPersona(id, persona);
  }

  // tslint:disable-next-line: typedef
  eliminarPersona(id: number) {
    console.log('eliminar persona con id:' + id);
    const index = this.personas.findIndex( persona => persona.idPersona == id); // encontramos el indice en el arreglo
    this.personas.splice(index, 1);
    this.dataService.eliminarPersona(id);
  }
}
