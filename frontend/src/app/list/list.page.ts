import { Component, OnInit } from '@angular/core';
import { GameCrudService } from './../services/game-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})

export class ListPage implements OnInit {

  Games: any = [];
  searchGame:string;

  constructor( 
    private gameCrudService: GameCrudService,
    private router: Router
  ) { }

  ngOnInit() {  }

  ionViewDidEnter() {
    this.gameCrudService.getGames().subscribe((response) => {
      this.Games = response;
      
    })
  }

  removeGame(game) {
    if (window.confirm('Are you sure')) {
      this.gameCrudService.deleteGame(game.id)
      .subscribe(() => {
          this.ionViewDidEnter();
          console.log('Game deleted!')
        }
      )
    }
  }

}
