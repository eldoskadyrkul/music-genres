import {Component, Input, OnInit} from '@angular/core';
import { SingerService } from '../service/singer.service';
import {Singer} from "../model/singer-model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {OrderBySingerPipe} from "../pipe/order-by-singer.pipe";
import {YearList} from "../model/year-list";
import {PagerService} from "../service/pager.service";
import * as _ from 'underscore';

@Component({
  selector: 'app-singer-list',
  templateUrl: './singer-list.component.html',
  styleUrls: ['./singer-list.component.css']
})
export class SingerListComponent implements OnInit {

  API_URL: string = environment.backend;
  singers: Singer[];
  years: any[] = YearList;
  isLoading: boolean = true;
  filters: OrderBySingerPipe;
  result: any[];
  pager: any = {};
  pagedItems: any[];
  all: any[];

  constructor(private service: SingerService, private pagerService: PagerService, private http:HttpClient) {
    this.http.get(this.API_URL + '/singer').subscribe((data: Singer[]) => {
      this.singers = data;
      this.setPage(1);
    });
  }

  ngOnInit() {
  	this.getSingers();
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

  orderName(s: string) {
    this.service.orderBySingersName(s);
  }

  orderYear(s: string) {
    this.service.orderByYear(s);
  }

  orderGenres(s: string) {
    this.service.orderByGenresName(s);
  }

  setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.singers.length, page);

        // get current page of items
        this.pagedItems = this.singers.slice(this.pager.startIndex, this.pager.endIndex + 1);

    }

}
