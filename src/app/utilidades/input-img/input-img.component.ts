import { Component, OnInit } from '@angular/core';
import { toBase64 } from '../utilidades';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent implements OnInit {

  constructor() { }

  imagenBase64!: string;

  ngOnInit(): void {
  }
//podria causar bug ¡¡¡AQUI!!!
  change(event: any){
    if (event.target.files.length > 0){
      const file: File = event.target.files[0];
      toBase64(file).then((value: any) => this.imagenBase64 = value)
      .catch((error: any) => console.log(error));
    }
  }

}
