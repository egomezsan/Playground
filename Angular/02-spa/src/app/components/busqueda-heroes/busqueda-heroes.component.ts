import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda-heroes',
  templateUrl: './busqueda-heroes.component.html'
})
export class BusquedaHeroesComponent implements OnInit {

  resultado: Heroe[] = [];
  termino: string;

  constructor(private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute) {
   }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      params => {
        this.termino = params.get('termino');
        this.resultado = this.heroesService.buscarHeroes(this.termino);
      }
    );
  }

}
