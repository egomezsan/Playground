import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {
    this.cargarStorage();
  }

  /*
  getListas(terminada: boolean): Lista[] {
    if ( terminada ) {
      return this.listas.filter(itemData => itemData.completada);
    } else {
      return this.listas.filter(itemData => !itemData.completada);
    }
  }
  */
  getListas(): Lista[] {
    return this.listas;
  }

  crearLista(titulo: string): string {
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
    return nuevaLista.id;
  }

  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage() {
    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    }
  }

  getLista(id: string): Lista {
    return this.listas.find(listaData => listaData.id === id);
  }

  removeList(id: string) {
    this.listas = this.listas.filter(itemData => itemData.id !== id);
    this.guardarStorage();
  }

}
