import { Component, OnInit } from '@angular/core';
import { SingerService } from '../service/singer.service';
import {Singer} from "../model/singer-model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {OrderBySingerPipe} from "../pipe/order-by-singer.pipe";

@Component({
  selector: 'app-singer-list',
  templateUrl: './singer-list.component.html',
  styleUrls: ['./singer-list.component.css']
})
export class SingerListComponent implements OnInit {

  API_URL: string = environment.backend;
  singers: Singer[];
  isLoading: boolean = true;
  filters: OrderBySingerPipe;
  result: any[];
  pager: any = {};
  pagedItems: any[];

  constructor(private service: SingerService, private http:HttpClient) {
    this.http.get(this.API_URL + '/singer').subscribe((data: Singer[]) => {
      this.singers = data;
    });
  }

  ngOnInit() {
  	this.getSingers();
  	this.removeDuplicates();
  }

  getSingers() {
    this.isLoading = false;
  	this.service.getSingers();
  }

  orderBy(s: string) {
    if (s) {
      return this.filters.transform(this.singers, s);
    } else {
      return s;
    }
  }

  removeDuplicates() {

  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.service.getPager(this.singers.length, page);

    // get current page of items
    this.pagedItems = this.singers.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
