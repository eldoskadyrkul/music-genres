import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Singer} from "../model/singer-model";


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
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.API_URL + '/singer', singer, {headers: headers});
  }
}
