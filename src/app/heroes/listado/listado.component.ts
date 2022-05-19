import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string [] = ['Spiderman','Ironman','Hulk','Thor'];

  heroeBorrado:string ='' ;

  borrarHeroe(){

    // shift devuelve string o undefined 
    // entonces la variable heroeBorrado va a ser
    // string o un string vacio si es undefined
    this.heroeBorrado = this.heroes.shift() || '';
  
    
  }

}
