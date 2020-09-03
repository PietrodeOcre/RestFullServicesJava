import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../persona-service';
import { Router, ActivatedRoute } from '@angular/router';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [
  ]
})
export class FormularioComponent implements OnInit {

  public idPersona: number;
  public nombreInput: string;

  constructor(private personaService: PersonaService,
              private router: Router,
              private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.idPersona = this.route.snapshot.params.idPersona;
    console.log('Recuperamos el idPersona: ' + this.idPersona);
    if (this.idPersona != null) {
      const persona = this.personaService.encontrarPersona(this.idPersona);
      if (persona != null) {
        this.nombreInput = persona.nombre;
      }
    }
  }

  // tslint:disable-next-line: typedef
  public onGuardarPersona() {
    const personaAGuardar = new Persona(this.idPersona, this.nombreInput);
    if (this.idPersona != null) {
      this.personaService.modificarPersona(this.idPersona, personaAGuardar);
    } else {
      this.personaService.agregarPersona(personaAGuardar);
    }
    this.router.navigate(['persona']);
  }

}
