import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {

  heroe: Heroe;

  constructor( private activatedRoute: ActivatedRoute,
               private heroeService: HeroesService) {

   this.activatedRoute.paramMap.subscribe ( params => {
    const IDX = Number(params.get('id'));
    this.heroe = heroeService.getHeroe(IDX.valueOf());
   } );

   }
}
