import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.page.html'
})
export class PendientesPage {

  constructor(public servicio: DeseosService,
              private router: Router,
              private alertController: AlertController) {
  }

  async agregarLista() {
    const alert = await this.alertController.create({
      header: 'Nueva lista',
      inputs: [{
        name: 'titulo',
        type: 'text',
        placeholder: 'nombre de la lista'
      }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Crear',
          handler: (data: Lista) => {
            if (data.titulo.length === 0) {
              return;
            } else {
              // Crear lista
              const ID: string = this.servicio.crearLista(data.titulo);

              // Redirigir a agregar lista page
              this.router.navigateByUrl(`/tabs/pendientes/agregar/${ID}`);
            }
          }
        }
      ]
    });

    alert.present();
  }
}
