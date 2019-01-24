import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifService {


  /**
   * event used when the keyword has changed
   */
  public keyWordEvent = new EventEmitter<string>();

  /**
   * contains the keyWord array's animals
   */
  keyWords: string[];

  constructor(public http: HttpClient) {
    this.keyWords = ['mouce', 'tiger', 'lion', 'cat', 'dog', 'eagle', 'bee', 'spider', 'donkey'];

  }

  /**
   * Loads gif by key word
   * @param keyWord the word related to some git image
   * @returns array with gif`s urls
   */
  public loadGifByKeyWord(keyWord: string): Observable<any> {
    const urlFinal = `https://api.tenor.com/v1/search?q=${keyWord}`;
    this.keyWordEvent.emit(keyWord);
    return this.http.get(urlFinal);
  }



  /**
   * Gets keyWord random
   * @returns keyword ( the animal type)
   */
  getKeyWordRandom(): string {
    const index = Math.floor((Math.random() * (this.keyWords.length - 1)) + 0);
    return this.keyWords[index];
  }

}
