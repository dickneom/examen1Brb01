import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../servicio/tienda.service';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  constructor(private tiendaService: TiendaService) { }

  ngOnInit() {
  }

}
