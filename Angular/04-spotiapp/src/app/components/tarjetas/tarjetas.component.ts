import { Component, Input } from '@angular/core';
import { SpotifyItem } from 'src/app/model/SpotifyItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent {

  @Input() spotifyItems: SpotifyItem[] = [];

  constructor(private router: Router) { }

  goToArtistDetail(item: SpotifyItem) {
    const artistaId = item.type === 'artist' ? item.id : item.artists[0].id;
    this.router.navigate(['/artist', artistaId]);
  }

}
