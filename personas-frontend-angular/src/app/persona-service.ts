import { Persona } from './persona.model';
import { Injectable } from '@angular/core';
import { DataService } from './data-service';

@Injectable()
export class PersonaService {

  public personas: Persona[] = [];

  constructor(private dataService: DataService) { }

  // Se usa para modificar el valor del arreglo debido a la llamada asincrona
  // tslint:disable-next-line: typedef
  public setPersonas(personas: Persona[]) {
    this.personas = personas;
  }

  // tslint:disable-next-line: typedef
  public obtenerPersonas() {
    return this.dataService.cargarPersonas();
  }

  // tslint:disable-next-line: typedef
  public agregarPersona(persona: Persona) {
    console.log('Persona a agregar: ' + persona.nombre);
    this.dataService.agregarPersona(persona).subscribe(
      // tslint:disable-next-line: no-shadowed-variable
      (persona: Persona) => {
        // Recuperamos el objeto persona con el idPersona recien agregado
        console.log('Se agrega la persona insertada al arreglo a traves del subcriber: ' + persona.idPersona);
        this.personas.push(persona);
      }
    );
  }

  // tslint:disable-next-line: typedef
  public encontrarPersona(id: number) {
    // tslint:disable-next-line: no-shadowed-variable
    const persona = this.personas.find(persona => persona.idPersona === id);
    console.log('Persona encontrada: ' + persona.idPersona + ' ' + persona.nombre);
    return persona;
  }

  // tslint:disable-next-line: typedef
  public modificarPersona(id: number, persona: Persona) {
    console.log('Persona a modificar: ' + persona.idPersona);
    // Para actualizar el objeto de persona del arreglo
    // tslint:disable-next-line: no-shadowed-variable
    const personaModificadaLocal = this.personas.find(persona => persona.idPersona === id);
    personaModificadaLocal.idPersona = persona.idPersona;
    personaModificadaLocal.nombre = persona.nombre;
    // Guardamos la persona en la base de datos
    this.dataService.modificarPersona(id, persona);
  }

  // tslint:disable-next-line: typedef
  public eliminarPersona(id: number) {
    console.log('Persona a eliminar: ' + id);
    // tslint:disable-next-line: triple-equals
    const index = this.personas.findIndex(persona => persona.idPersona == id);
    this.personas.splice(index, 1);
    this.dataService.eliminarPersona(id);
  }


}
