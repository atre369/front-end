import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-generico',
  templateUrl: './listado-generico.component.html',
  styleUrls: ['./listado-generico.component.css']
})
export class ListadoGenericoComponent implements OnInit {
  @Input()
  listado!: { titulo: string; fechalanzamiento: Date; precio: number;  poster: string;}[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
