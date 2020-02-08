import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

export interface Singer {
	id: number,
	name_singer: string,
	name_song: string,
	genres_song: string,
	year_song: string,
	isUpdating: boolean
}

@Injectable({
  providedIn: 'root'
})
export class SingerService {

  private headers;
  API_URL: string;

  constructor(private http: Http) {
    this.API_URL = environment.backend;
  }

  getSingers(): Observable<Singer[]> {
        return this.http.get(this.API_URL + '/singer',
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
        return this.http.post(this.API_URL + '/add', singer,
            new RequestOptions({ headers: this.headers })
        ).map(res => res.json());
    }
}
