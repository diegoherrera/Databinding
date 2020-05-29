import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input("registro") entrada: any;
  //como es una transferencia que realiza desde la vista  el contenido 
  //no estara dispnible en cualquiera de los metodos del ciclo de vida 
  //de un componente 
  
  constructor() { 
    // la variabl entrada no esta disponible en el constructor 
  }

  ngOnInit(): void {
    //la variable entrada este disponible desde la inicializacion
    console.log("................................." + this.entrada);
  }

}
