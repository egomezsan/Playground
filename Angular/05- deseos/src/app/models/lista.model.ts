import { ListaItem } from './lista-item.model';
import * as uuid from 'uuid';


export class Lista {
    id: string;
    titulo: string;
    creadaEn: Date;
    terminadaEn: Date;
    completada: boolean;
    items: ListaItem[];

    constructor( titulo: string ) {
        this.titulo = titulo;
        this.creadaEn = new Date();
        this.completada = false;
        this.items = [];
        this.id = uuid.v4();
    }
}