import { Injectable } from '@angular/core';
import { Tienda } from '../modelo/tienda';
import { Producto } from '../modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  private tiendas: Tienda[] = [];
  private tiendaSeleccionada: Tienda;
  //  = this.nuevaTienda();

  constructor() {
    // this.tiendaSeleccionada = this.nuevaTienda();
  }

  // YA
  agregarTienda(tienda: Tienda): void {
    console.log('TiendaService agregando tienda');
    if (tienda !== undefined) {
      tienda.id = this.tiendas.length + 1;
      console.log('TiendaService agregarTienda id: ' + tienda.id);
      console.log('TiendaService agregarTienda nombres: ' + tienda.nombres);
      console.log('TiendaService agregarTienda direccion: ' + tienda.direccion);
      this.tiendas.push(tienda);
      this.imprimirTiendas();
    }
  }

  agregarProducto(producto: Producto): void {
    console.log('TiendaService agregarProducto nombre: ' + producto.nombre);
    this.tiendas.forEach(tienda => {
      if (tienda.id === this.tiendaSeleccionada.id) {
        producto.tiendaId = this.tiendaSeleccionada.id;
        console.log('TiendaService agregarProducto agregando: ' + producto.nombre);
        tienda.productos.push(producto);
        console.log('TiendaService agregarProducto agregado: ' + tienda.productos[0].nombre);
        this.tiendaSeleccionada = tienda;
      }
    });
  }

  // YA
  getTiendas(): Tienda[] {
    // console.log('TiendaService getTiendas');
    return this.tiendas;
  }

  getTienda(tiendaId: number): Tienda {
    // tienda = new Tienda();
    // tienda = this.tiendas.find(tienda => tienda.id === tiendaId);
    // return tienda;
    console.log('TiendaService getTienda buscando: ' + tiendaId);
    const t = this.tiendas.find(tienda => tienda.id === tiendaId);
    if (t !== undefined) {
      console.log('TiendaService getTienda encontrado: ' + t.id);
    } else {
      console.log('TiendaService getTienda no encontrado: indefinido');
    }

    // return this.tiendas.find(tienda => tienda.id === tiendaId);
    return t;
  }

  // getProductos(tiendaId: number): Producto[] {
  //   this.tiendas.forEach(tienda => {
  //     if (tienda.id === tiendaId) {
  //       t = tienda;
  //     }
  //   });
  //   return t.productos;
  // }

  // YA
  setTiendaSeleccionada(tienda: Tienda): void {
    // console.log('TiendaService setTiendaSeleccionada seleccionando: ' + tienda.nombres);
    this.tiendaSeleccionada = tienda;
    // console.log('TiendaService setTiendaSeleccionada seleccionado: ' + this.tiendaSeleccionada.nombres);
  }

  // YA
  getTiendaSeleccionada(): Tienda {
    // if (this.tiendaSeleccionada !== undefined) {
    //   console.log('TiendaService getTiendaSeleccionada: ' + this.tiendaSeleccionada.nombres);
    // if (this.tiendaSeleccionada !== undefined) {
    // this.tiendaSeleccionada = this.nuevaTienda();
    // console.log('TiendaService getTiendaSeleccionada seleccionado: ' + this.tiendaSeleccionada.nombres);
    // } else {
    // this.tiendaSeleccionada = this.nuevaTienda();
    // console.log('TiendaService getTiendaSeleccionada seleccionado indefinido: ' + this.tiendaSeleccionada.fechaApertura);
    // }

    return this.tiendaSeleccionada;
    // }
  }

  imprimirTiendas() {
    // this.tiendas.forEach(tienda => {
    //   console.log('TiendaService imprimirTiendas: id: ' + tienda.id);
    //   console.log('TiendaService imprimirTiendas: nombres: ' + tienda.nombres);
    //   console.log('TiendaService imprimirTiendas: direccion: ' + tienda.direccion);
    // });
  }

  // YA
  nuevaTienda(): Tienda {
    const t = new Tienda();
    t.nombres = '';
    t.direccion = '';
    t.fechaApertura = new Date();
    t.matriz = false;
    return t;
  }

  // YA
  nuevoProducto(): Producto {
    let p: Producto;
    p = new Producto();
    p.nombre = '';
    p.descripcion = '';
    p.fechaLanzamientoProducto = new Date();
    p.precio = 0;
    p.aniosGarantia = 0;
    if (this.tiendaSeleccionada) {
      p.tiendaId = this.tiendaSeleccionada.id;
    } else {
      p.tiendaId = 0;
    }
    return p;
  }
}
