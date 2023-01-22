import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  imgAbacate: string;
  imgKiwi: string;
  imgMix: string;
  imgPimentoes: string;
  imgOriental: string;
  imgBeterrabas: string;
  imgCarousel1: string;
  imgCarousel2: string;

  constructor(){
    this.imgAbacate = 'assets/img/receita-abacate.jpg';
    this.imgKiwi = 'assets/img/receita-kiwi.jpg';
    this.imgMix = 'assets/img/receita-mix.jpg';
    this.imgPimentoes = 'assets/img/receita-pimentoes.jpg';
    this.imgOriental = 'assets/img/receita-oriental.jpg';
    this.imgBeterrabas = 'assets/img/receita-beterrabas.jpg';

    this.imgCarousel1 = 'assets/img/carrossel-img1.jpg';
    this.imgCarousel2 = 'assets/img/carrossel-img2.jpg';
  }
}
