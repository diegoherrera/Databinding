import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataBindingAngular9';
  datos: any = { Nombre: "", Apellido: "", Edad: "", Documento: "" };

  constructor() {
    this.datos = { Nombre: "", Apellido: "", Edad: "", Documento: "" };
   }
   registrarProceso(datos) {
    console.log(JSON.stringify(datos));
  }
}
