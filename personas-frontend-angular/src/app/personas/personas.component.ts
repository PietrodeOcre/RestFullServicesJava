import { PersonaService } from './../persona-service';
import { Persona } from './../persona.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styles: [
  ]
})
export class PersonasComponent implements OnInit {

  public personas: Persona[] = [];

  constructor(private personaService: PersonaService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.personaService.obtenerPersonas().subscribe(
      (personasObtenidas: Persona[]) => {
        // Cargamos los datos de persona obtenidos en el arreglo local
        this.personas = personasObtenidas;
        this.personaService.setPersonas(this.personas);
        console.log('personas obtenidas de subscriber: ' + this.personas);
      }
    );
  }

}
