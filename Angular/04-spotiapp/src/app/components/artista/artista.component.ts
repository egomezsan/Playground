import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist, Track } from '../../model/SpotifyItem';
import { SpotifyService } from '../../services/spotify.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artist: Artist;
  tracks: Track[];
  loadingArtist = true;
  loadingTracks = true;

  constructor(private route: ActivatedRoute,
              private service: SpotifyService,
              private location: Location) {
                const id: string = route.snapshot.paramMap.get('id');
                this.setArtist(id);
                this.setTopTracks(id, 'ES');
   }

   setArtist(id: string) {
    this.loadingArtist = true;
    this.service.getArtistDetail(id)
                .subscribe((resp: Artist) => {
                  this.artist = resp;
                  this.loadingArtist = false;
                });
   }

   setTopTracks(id: string, country: string) {
    this.loadingTracks = true;
    this.service.getArtistTopTracks(id, country)
    .subscribe((resp: Track[]) => {
      console.log(resp);
      this.tracks = resp;
      this.loadingTracks = false;
    });
   }

   goBack() {
    this.location.back();
   }

}
