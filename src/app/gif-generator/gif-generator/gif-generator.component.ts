import { Component, OnInit, Input } from '@angular/core';
import { GifService } from '../image.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription, interval } from 'rxjs';



@Component({
  selector: 'app-gif-generator',
  templateUrl: './gif-generator.component.html',
  styleUrls: ['./gif-generator.component.scss']
})
export class GifGeneratorComponent implements OnInit {

  @Input() keyWord: string;
  imageForm: FormGroup;
  /**
   * Subscription of load key word
   */
  subscriptionInterval: Subscription;
  gifs: string[] = new Array();

  pathLoadingImg = './assets/loading.gif';

  title = 'Gif generator Module';
  constructor(public imgServie: GifService, private fb: FormBuilder) {


    // create the form controlls
    this.imageForm = this.fb.group({
      keyWordInput: ['', Validators.required],
      txtCheckBox: [false]

    });
  }

  ngOnInit() {

    // susbcribe to the change keyWord Observable
    this.imgServie.keyWordEvent.subscribe(data => {
      this.updateKeyWordInput(data);
    });
   // if not keyWord is provided from parent component, then start looking for keywork dog
    this.loadGifByKeyWord((this.keyWord !== 'undefined') ? 'dog' : this.keyWord);
  }

  /**
   * Updates key word input to the formControll
   * @param data it contain the new keyWord
   */
  public updateKeyWordInput(data: string) {
    this.imageForm.patchValue({
      keyWordInput: data
    });
  }

  public loadGifByKeyWord(keyWord: string) {

    this.imgServie.loadGifByKeyWord(keyWord).subscribe(data => {

      // load git's url in gif`s array
      this.gifs = data.results.map(item => item.media[0].tinygif.url);

    });
  }

  onSubmit() {

    // get the keyWord from form
    const newKeyWord = this.imageForm.value.keyWordInput;
    // call to imageService
    this.loadGifByKeyWord(newKeyWord);

  }

  /**
   * Text box change event
   * @param event  used to get the flag checked
   */
  txtBoxChangeEvent(event) {
    // if checked start the random load gif, if not, stop it
    event.checked ? this.startRandom() : this.stopRandom();
  }
  /**
    * Start random key word load
    */
  startRandom() {
    // 2 seconds for interval
    const intevarlSeconds = interval(2000);

    this.subscriptionInterval = intevarlSeconds.subscribe(n => {
      // get the random key word
      const keyWordRandom = this.imgServie.getKeyWordRandom();
      // call the load gif method
      this.loadGifByKeyWord(keyWordRandom);
    });


  }

  /**
   * Stop loading random key word
   */
  stopRandom() {
    this.subscriptionInterval.unsubscribe();
  }

}
