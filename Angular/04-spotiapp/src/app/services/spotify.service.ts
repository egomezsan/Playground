import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';


const TOKEN = 'BQCkT_p9Trr8xnFsZ56iKicgvLc_vve78-cfJm9hzOd8QAmnB7lWE3oRVmtR6iUUjC0HL75EDfVBsDICo7Q';
const headers =  new HttpHeaders({
  Authorization: 'Bearer ' + TOKEN
});
const TARGET = 'https://api.spotify.com/v1';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('servicio spotify listo');
  }

  getNewReleases() {
    return this.http.get(`${TARGET}/browse/new-releases`, { headers,
      params: new HttpParams().set('limit', '20') })
    .pipe(map(data => data['albums'].items));
  }

  findItem(term: string, type: string) {
    return this.http.get(`${TARGET}/search`, {headers ,
      params: new HttpParams().set('type', type).set('q', term) })
    .pipe(map(resp => resp['artists'].items));
  }

  getArtistDetail(id: string) {
    return this.http.get(`${TARGET}/artists/${id}`, { headers });
  }

  getArtistTopTracks(id: string, country: string) {
    return this.http.get(`${TARGET}/artists/${id}/top-tracks/`, { headers,
      params: new HttpParams().set('country', country) })
      .pipe(map(resp => resp['tracks']));
  }
}
