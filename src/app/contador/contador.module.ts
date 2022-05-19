import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations:[
        ContadorComponent
    ],
    // para poderlo usar fuera del modulo
    exports:[
        ContadorComponent
    ],
})
export class ContadorModule{

}