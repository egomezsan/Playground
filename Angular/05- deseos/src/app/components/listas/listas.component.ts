import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html'
})
export class ListasComponent {

  @ViewChild( IonList ) lista: IonList;
  @Input() terminada = false;

  constructor(public servicio: DeseosService,
              private router: Router,
              public alertController: AlertController) {
  }

  listaSeleccionada(id: string) {
    // Redirigir a lista page
    if (this.terminada) {
      this.router.navigateByUrl(`/tabs/completados/agregar/${id}`);
    } else {
      this.router.navigateByUrl(`/tabs/pendientes/agregar/${id}`);
    }
  }

  removeList(id: string) {
    this.servicio.removeList(id);
  }

  async showEditList(lista: Lista) {
    const alert = await this.alertController.create({
      header: 'Editar Titulo de Lista',
      inputs: [{
        name: 'titulo',
        type: 'text',
        value: lista.titulo,
        placeholder: 'Nuevo Nombre'
      }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Editar',
          handler: (data: Lista) => {
            lista.titulo = data.titulo;
            this.servicio.guardarStorage();
            this.lista.closeSlidingItems();
          }
        }
      ]
    });

    await alert.present();
  }

}
