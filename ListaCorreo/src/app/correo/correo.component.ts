import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {

  correo:any;
  constructor() { 
    this.correo = {
      titulo: "Este es mi primer componente en Angular 8",
      cuerpo: "Esto es el cuerpo de mi correo",
      emisor: "Daniel Cano de Celis",
      destinatario: "luismi_lm@correo.es"
    }
  }

  ngOnInit(): void {
  }

}
