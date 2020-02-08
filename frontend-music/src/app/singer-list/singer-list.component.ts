import { Component, OnInit } from '@angular/core';
import { Singer, SingerService } from '../service/singer.service';

@Component({
  selector: 'app-singer-list',
  templateUrl: './singer-list.component.html',
  styleUrls: ['./singer-list.component.css']
})
export class SingerListComponent implements OnInit {

  singers: Singer[];
  errorMsg: string;
  isLoading: boolean = true;

  constructor(private service: SingerService) { }

  ngOnInit() {
  	this.getSingers();
  }

  getSingers() {
  	this.service
  		.getSingers()
  		.subscribe(
  			singers => this.singers = singers,
  			error => this.errorMsg = <any>error
  		);
  }

  findMovie(id): Singer {
    return this.singers.find(singer => singer.id === id);
  }

  isUpdating(id): boolean {
    return this.findMovie(id).isUpdating;
  }

  appendSinger(singers: Singer) {
    this.singers.push(singers);
  }

}
