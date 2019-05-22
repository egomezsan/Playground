import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { SpotifyItem } from 'src/app/model/SpotifyItem';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  newAlbums: SpotifyItem[] = [];
  loading = true;
  errorMsg: string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;

    spotify.getNewReleases()
      .subscribe((resp: SpotifyItem[]) => {
        this.newAlbums = resp;
        this.loading = false;
      }, ( error: HttpErrorResponse ) => {
        this.errorMsg = `Status: ${error.error.error.status} - Reason: ${error.error.error.message}`;
        this.loading = false;
      });
  }

}
