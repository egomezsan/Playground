import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    console.log(`Ruta Hijo: ${route.parent.snapshot.paramMap.get('id')}`);
   }


  ngOnInit() {
  }

}
