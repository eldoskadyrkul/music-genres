import { Component, OnInit } from '@angular/core';
import { SingerService } from '../service/singer.service';
import 'Rxjs/rx';
import {Singer} from "../model/singer-model";


@Component({
  selector: 'app-singer-form',
  templateUrl: './singer-form.component.html',
  styleUrls: ['./singer-form.component.css']
})
export class SingerFormComponent implements OnInit {

	errors: string = '';
  isLoading: boolean = false;
  singer: Singer = {
    name_singer: null,
    name_song: null,
    genres_song: null,
    year_song: null
  };

    constructor(private singerService: SingerService) { }

    ngOnInit() {
    }

    addPlaylist() {
        console.log(this.singer);
        this.singerService.addSinger(this.singer);
    }
}
