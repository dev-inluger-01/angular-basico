import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        // van a ser los componentes que se tienen.  Son cosas solo para esta parte
        HeroeComponent,
        ListadoComponent
    ],
    // cosas que quiero que sean visibles fuera de este modulo
    exports:[
        ListadoComponent
    ],
    // van modulos 
    imports:[
        CommonModule    
    ]
})
export class HeroesModule{

}