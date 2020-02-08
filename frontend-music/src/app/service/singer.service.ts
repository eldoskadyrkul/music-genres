import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

export interface Singer {
	id: number,
	name_singer: string,
	name_song: string,
	genres_song: string,
	year_song: string,
	isUpdating: boolean
}

const API_URL: string = 'http://127.0.0.1:8000';

@Injectable({
  providedIn: 'root'
})
export class SingerService {

  private headers;

  constructor(private http: Http) { 
    this.init();
  }

  async init() {
    this.headers = new Headers({
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Origin': '*'});
  }

  getSingers(): Observable<Singer[]> {
        return this.http.get(API_URL + '/singer',
            new RequestOptions({ headers: this.headers })
    	)
    	.map(res => {
        	let modifiedResult = res.json();
        	modifiedResult = modifiedResult.map(function(singer) {
            singer.isUpdating = false;
            return singer;
        });
        return modifiedResult;
    });
  }

  addSinger(singer): Observable<Singer> {
        return this.http.post(API_URL + '/add', singer,
            new RequestOptions({ headers: this.headers })
        ).map(res => res.json());
    }
}
