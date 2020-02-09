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

  constructor(private http: HttpClient) {
    this.API_URL = environment.backend;
  }

  getSingers() {
    this.http.get(this.API_URL + '/singer').subscribe((data: Singer[]) => {
      this.singers = data;
    });
  }

  addSinger(singer: Singer) {
    this.getSingers();
      const headers = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});
    return this.http.post(this.API_URL + '/singer', singer, {headers: headers}).subscribe(data => {
      console.log("POST Request is successfull ", data);
    }, error => {
      console.log("Error", error);
    });
  }

}
