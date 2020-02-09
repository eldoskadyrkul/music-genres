import { Component, OnInit } from '@angular/core';
import { SingerService } from '../service/singer.service';
import {Singer} from "../model/singer-model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-singer-list',
  templateUrl: './singer-list.component.html',
  styleUrls: ['./singer-list.component.css']
})
export class SingerListComponent implements OnInit {

  API_URL: string = environment.backend;
  singers: Singer[];
  isLoading: boolean = true;

  constructor(private service: SingerService, private http:HttpClient) {
    this.http.get(this.API_URL + '/singer').subscribe((data: Singer[]) => {
      this.singers = data;
    });
  }

  ngOnInit() {
  	this.getSingers();
  }

  getSingers() {
    this.isLoading = false;
  	this.service.getSingers();
  	console.log(this.service.getSingers());
  }


}
