import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  @Input()
  peliculasEnCines!: { titulo: string; fechalanzamiento: Date; precio: number; poster: string;}[];
  peliculasProximosEstrenos!: { titulo: string; fechalanzamiento: Date; precio: number; poster: string;}[];

  constructor() { }

  ngOnInit(): void {
    
      this.peliculasEnCines = [{
        titulo: 'Spider-Man',
        fechalanzamiento: new Date(),
        precio: 500.80,
        poster: 'https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg'
      },
      {
        titulo: 'Heroes',
        fechalanzamiento: new Date(2016-11-14),
        precio: 400,
        poster: 'https://www.formulatv.com/images/series/posters/1100/1180/1_m1.jpg'

      }];
    
  }

}
