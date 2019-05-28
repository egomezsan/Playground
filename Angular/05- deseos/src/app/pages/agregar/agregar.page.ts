import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from 'src/app/models/lista.model';
import { ListaItem } from '../../models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html'
})
export class AgregarPage {

  lista: Lista;
  nombreItem = '';

  constructor( private activedRoute: ActivatedRoute,
               private servicio: DeseosService ) {
    const ID: string = activedRoute.snapshot.paramMap.get('listaId');
    this.lista = servicio.getLista(ID);
   }

  agregarItem() {
    if ( this.nombreItem.length === 0 ) {
      return;
    }
    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);

    this.nombreItem = '';
    this.servicio.guardarStorage();
  }

  cambioCheck() {

    const pendientes = this.lista.items.filter( itemData => !itemData.completado).length;

    if ( pendientes === 0 ) {
      this.lista.terminadaEn = new Date();
      this.lista.completada = true;
    } else {
      this.lista.terminadaEn = null;
      this.lista.completada = false;
    }

    this.servicio.guardarStorage();
  }

  removeItem(i: number) {
    this.lista.items.splice(i , 1);
    this.servicio.guardarStorage();
  }

}
