import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { SpotifyItem } from 'src/app/model/SpotifyItem';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artists: SpotifyItem[] = [];
  loading = false;

  constructor(private spotify: SpotifyService) { }

  searchArtist(term: string) {
    if (term) {
      this.loading = true;
      this.spotify.findItem(term, 'artist')
      .subscribe((res: any) => {
        this.artists = res;
        this.loading = false;
      });
    }
  }

}
