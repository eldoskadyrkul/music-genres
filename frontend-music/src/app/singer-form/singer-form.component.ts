import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Singer, SingerService } from '../service/singer.service';
import 'Rxjs/rx';

@Component({
  selector: 'app-singer-form',
  templateUrl: './singer-form.component.html',
  styleUrls: ['./singer-form.component.css']
})
export class SingerFormComponent implements OnInit {
	
	errors: string = '';
    isLoading: boolean = false;

    constructor(private singerService: SingerService) { }

    @Output()
    singerAdded: EventEmitter<Singer> = new EventEmitter<Singer>();

    ngOnInit() {
    }

    addPlaylist(name_singer, name_song, genres_song, year_song) {
        this.isLoading = true;
        this.singerService
            .addSinger({
                name_singer: name_singer,
                name_song: name_singer,
                genres_song: genres_song,
                year_song: year_song,
            })
            .subscribe(
                singer => {
                    this.isLoading = false;
                    singer.isUpdating = false;
                    this.singerAdded.emit(singer);
                },
                error => {
                    this.errors = error.json().errors;
                    this.isLoading = false;
                }
            );
    }
}
