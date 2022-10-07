import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Game } from '../model/game';




@Injectable({
  providedIn: 'root'
})

export class GameCrudService {

  endpoint = 'http://localhost:8080/api/gameCollection';


  constructor(private httpClient: HttpClient) { }

  createGame(game: Game, blob): Observable<any> {
    let data = new FormData();
    data.append("title", game.title);
    data.append("platform", game.platform);
    data.append("description", game.description);
    data.append("genre", game.genre);
    data.append("meta_score", game.meta_score.toString());
    data.append("user_score", game.user_score.toString());
    data.append("release_date", game.release_date);
    data.append("file", blob)
    return this.httpClient.post<Game>(this.endpoint, data)
      .pipe(
        catchError(this.handleError<Game>('Error occured'))
      );
  }

  getGame(id): Observable<Game[]> {
    return this.httpClient.get<Game[]>(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`Game fetched: ${id}`)),
        catchError(this.handleError<Game[]>(`Get Game id=${id}`))
      );
  }

  getGames(): Observable<Game[]> {
    return this.httpClient.get<Game[]>(this.endpoint)
      .pipe(
        tap(games => console.log('Games retrieved!')),
        catchError(this.handleError<Game[]>('Get game', []))
      );
  }

  updateGame(id, game, blob): Observable<any> {
    let data = new FormData();
    data.append("title", game.title);
    data.append("platform", game.platform);
    data.append("description", game.description);
    data.append("genre", game.genre);
    data.append("meta_score", game.meta_score.toString());
    data.append("user_score", game.user_score.toString());
    data.append("release_date", game.release_date);
    data.append("file", blob)
    return this.httpClient.put<Game>(this.endpoint + '/' + id, data)
      .pipe(
        tap(_ => console.log(`Game updated: ${id}`)),
        catchError(this.handleError<Game[]>('Update game'))
      );
  }

  updateGameNoFile(id, game): Observable<any> {
    let data = new FormData();
    data.append("title", game.title);
    data.append("platform", game.platform);
    data.append("description", game.description);
    data.append("genre", game.genre);
    data.append("meta_score", game.meta_score.toString());
    data.append("user_score", game.user_score.toString());
    data.append("release_date", game.release_date);
    return this.httpClient.put<Game>(this.endpoint + '/' + id, data)
      .pipe(
        tap(_ => console.log(`Game updated: ${id}`)),
        catchError(this.handleError<Game[]>('Update game'))
      );
  }

  deleteGame(id): Observable<Game[]> {
    return this.httpClient.delete<Game[]>(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`Game deleted: ${id}`)),
        catchError(this.handleError<Game[]>('Delete game'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}