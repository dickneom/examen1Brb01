import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../servicio/tienda.service';
import { Producto } from '../modelo/producto';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  producto: Producto;

  constructor(private tiendaService: TiendaService) { }

  ngOnInit() {
    this.producto = this.tiendaService.nuevoProducto();
  }

  agregarProducto() {
    this.tiendaService.agregarProducto(this.producto);
  }

}
