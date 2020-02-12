import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {Observable, of} from 'rxjs';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Singer} from "../model/singer-model";
import {delay, map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class SingerService {

  API_URL: string;
  singers: Singer[];
  filter: Singer;

  constructor(private http: HttpClient) {
    this.API_URL = environment.backend;
  }

  getSingers() {
    this.http.get(this.API_URL + '/singer').subscribe((data: Singer[]) => {
      this.singers = data;
    });
  }

  addSinger(singer: Singer) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.API_URL + '/singer/add/', singer, {headers: headers}).subscribe(data => {
      console.log("POST Request is successfull ", data);
    }, error => {
      console.log("Error", error);
    });
  }
  orderBySingersName(name: string) {
    console.log(this.API_URL + '/singer/name_singer/' + name);
    this.http.get<Singer>(this.API_URL + '/singer/name_singer/' + name).subscribe((data: Singer) => {
      this.filter = data;
    });
  }
  orderByGenresName(name: string) {
    this.http.get(this.API_URL + '/singer/genres_song/' + name).subscribe((data: Singer) => {
      this.filter = data;
    });
  }
  orderByYear(name: string) {
    console.log(name);
    this.http.get(this.API_URL + '/singer/year_song/' + name).subscribe((data: Singer) => {
      this.filter = data;
    });
  }
}
