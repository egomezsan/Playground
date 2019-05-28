import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-completados',
  templateUrl: 'completados.page.html'
})
export class CompletadosPage {
  constructor( public servicio: DeseosService ) {

  }
}
