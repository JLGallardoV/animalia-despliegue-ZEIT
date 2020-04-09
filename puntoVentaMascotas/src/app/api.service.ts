import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


//INTERFACES USADAS AL REDEDOR DE LA APLICACION
export interface IAccesos{
  idAcceso:number;
  fechaAcceso:string;
  accionAcceso:string;
  nombreUsuario:string;
}

export interface IAlmacenes {
  idAlmacen: number;
  ciudadAlmacen: string;
  estadoAlmacen: string;
  direccionAlmacen: string;
  referenciaAlmacen: string;
  telefonoAlmacen: string;
}

export interface ICategorias {
  idCategoria: number;
  nombreCategoria: string;
  subCategoria: string;
  descripcionCategoria: string;
}

export interface ICompras {
  idCompra: number;
  fechaCompra: string;
  cantidadProductos: number;
}

export interface ICompensaciones{
  idCompensacion: number;
  tipoCompensacion: string;
  descripcionCompensacion: string;
}

export interface IClientes {
  idCliente: number;
  nombreCliente: string;
  apellidoPartenoCliente: string;
  apellidoMartenoCliente: string;
  ciudadCliente: string;
  estadoCliente: string;
  paisCliente: string;
  direccionCliente: string;
  coloniaCliente: string;
  cpCliente: number;
  telefonoCliente: string;
  emailCliente: string;
  puntuajeCliente: number;
  idTipoCliente:number;
}

export interface IDevoluciones{
  idDevolucion: number;
  nombreProducto: string;
  montoConIvaDevolucion: number;
  fechaDevolucion: string;
  motivoDevolucion: string;
  nombreCliente: string;
  tipoProblema: string;
  tipoCompensacion: string;
}

export interface IEnvios{
  ciudadEnvio: string;
  estadoEnvio: string;
  paisEnvio: string;
  observacionesEnvio: string;
  idTransaccion: number;
  idMedioEntrega: number;
}

export interface IProductos {
  idProducto: number;
  cantidadProducto: number;
  nombreProducto: string
  precioUnitarioProducto: number,
}

export interface IProveedores {
  idProveedor: number;
  nombreProveedor: string;
  ciudadProveedor: string;
  estadoProveedor: string;
  paisProveedor: string;
  direccionProveedor: string;
  telefonoProveedor: string;
  emailProveedor: string;
  descripcionProveedor: string;
}
export interface IReportesEconomicos {
  montoTransacciones: number;
  montoCompras: number;
  utilidad: number;
}

export interface IRendimientoVendedores {
  nombreVendedor: string;
  vendidos: string;
}


export interface ITiposDeProblemas{
  idTipoProblema:number;
  tipoProblema: string;
}

export interface ITiposDePagos {
  idTipoPago: number;
}

export interface ITiposDeUsuarios {
  idTipoUsuario: number;
  tipoUsuario: string;
  descripcionTipoUsuario: string;
}

export interface ITransacciones {
  idTransaccion: number;
  nombreCliente:string;
  apellidoPaternoCliente:string;
  fechaTransaccion: string;
  cantidadProductos: number;
}


export interface IUsuarios {
  idUsuario: number;
  nombreUsuario: string;
  emailUsuario: string;
  contraseniaUsuario: string;
  idVendedor: number;
  idTipoUsuario: number;
}

export interface IVendedores{
  nombreVendedor:string;
  ciudadVendedor:string;
  estadoVendedor:string;
  direccionVendedor:string;
  telefonoVendedor:string;
  emailVendedor:string;
  fechaNacimientoVendedor:string;
  rfcVendedor:string;
  numeroSeguroSocialVendedor:number;
  antiguedadVendedor:number;
}

export interface IViabilidadProductos {
  nombreProducto: string;
  vendidos: string;
}


@Injectable({
  providedIn: 'root'
})
export class APIService {
  public headers: any;

  constructor(public http: HttpClient) {
      this.headers = new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token'), //token almacenado en LS
        'Content-Type': 'application/json',//tipo de contenido JSON
        'Accept': 'application/json' //acepta el cuerpo de la peticion JSON
      });
      //console.log("tkn en cabecera ::::> ",localStorage.getItem('token'))
  }


  //WS PARA ENTIDAD ACCESOS
  public mostrarAccesos() {
    return this.http.get('/accesosWS/listarAccesos', { headers: this.headers });
  }
  public aniadirAcceso(accionAcceso:string,idUsuario:number) {
    return this.http.post('/accesosWS/agregarAcceso', { accionAcceso,idUsuario}, { headers: this.headers });
  }

  //WS PARA ENTIDAD BITACORA ACCESOS
  public mostrarAlmacenes() {
    return this.http.get('/almacenesWS/listarAlmacenes', { headers: this.headers });
  }
  public aniadirAlmacen(idAlmacen: number,estadoAlmacen:string,paisAlmacen:string,direccionAlmacen:string,referenciaAlmacen:string,telefonoAlmacen:string) {
    return this.http.post('/almacenesWS/agregarAlmacen', { idAlmacen,estadoAlmacen,paisAlmacen,direccionAlmacen,referenciaAlmacen,telefonoAlmacen }, { headers: this.headers });
  }
  public actualizarAlmacen(idAlmacen: number,estadoAlmacen:string,paisAlmacen:string,direccionAlmacen:string,referenciaAlmacen:string,telefonoAlmacen:string) {
    return this.http.put(`/almacenesWS/actualizarAlmacen/${idAlmacen}`, {idAlmacen,estadoAlmacen,paisAlmacen,direccionAlmacen,referenciaAlmacen,telefonoAlmacen}, { headers: this.headers });
  }
  public borrarAlmacen(idAlmacen: number) {
    return this.http.delete(`/almacenesWS/eliminarAlmacen/${idAlmacen}`, { headers: this.headers });
  }
  //WS PARA ENTIDAD CATEGORIAS
  public mostrarCategorias() {
    return this.http.get('/categoriasWS/listarCategorias', { headers: this.headers });
  }
  public aniadirCategoria(nombreCategoria: string, subCategoria: string, descripcionCategoria: string) {
    return this.http.post('/categoriasWS/agregarCategoria', { nombreCategoria, subCategoria, descripcionCategoria }, { headers: this.headers });
  }
  public actualizarCategoria(idCategoria: number, nombreCategoria: string, subCategoria: string, descripcionCategoria: string) {
    return this.http.put(`/categoriasWS/actualizarCategoria/${idCategoria}`, { nombreCategoria, subCategoria, descripcionCategoria }, { headers: this.headers });
  }
  public borrarCategoria(idCategoria: number) {
    return this.http.delete(`/categoriasWS/eliminarCategoria/${idCategoria}`, { headers: this.headers });
  }

  //WS PARA ENTIDAD CLIENTES
  public mostrarClientes() {
    return this.http.get('/clientesWS/listarClientes', { headers: this.headers });
  }
  public mostrarDetalleCliente(idCliente:number) {
    return this.http.get(`/clientesWS/listarDetalleCliente/${idCliente}`, { headers: this.headers });
  }
  public aniadirCliente(nombreCliente: string, apellidoPaternoCliente: string, apellidoMaternoCliente: string, ciudadCliente: string, estadoCliente: string, paisCliente: string, direccionCliente: string, coloniaCliente: string, cpCliente: number, telefonoCliente: string, emailCliente: string,idTipoCliente:number) {
    return this.http.post('/clientesWS/agregarCliente', { nombreCliente, apellidoPaternoCliente, apellidoMaternoCliente, ciudadCliente, estadoCliente, paisCliente, direccionCliente, coloniaCliente, cpCliente, telefonoCliente, emailCliente,idTipoCliente }, { headers: this.headers });
  }
  public actualizarCliente(idCliente: number, nombreCliente: string, apellidoPaternoCliente: string, apellidoMaternoCliente: string, ciudadCliente: string, estadoCliente: string, paisCliente: string, direccionCliente: string, coloniaCliente: string, cpCliente: number, telefonoCliente: string, emailCliente: string,idTipoCliente:number) {
    let contraseniaCliente:any = null,puntuajeCliente:any = 0;//idea tienda online.
    return this.http.put(`/clientesWS/actualizarCliente/${idCliente}`, { nombreCliente, apellidoPaternoCliente, apellidoMaternoCliente, ciudadCliente, estadoCliente, paisCliente, direccionCliente, coloniaCliente, cpCliente, telefonoCliente, emailCliente,contraseniaCliente,puntuajeCliente,idTipoCliente }, { headers: this.headers });
  }
  public borrarCliente(idCliente: number) {
    return this.http.delete(`/clientesWS/eliminarCliente/${idCliente}`, { headers: this.headers });
  }

  //WS ENTIDADES COMPRA/VENTAS
  public mostrarCompras() {
    return this.http.get('/comprasWS/listarCompras', { headers: this.headers });
  }
  public mostrarUltimaCompra() {
    return this.http.get('/comprasWS/listarUltimaCompra', { headers: this.headers });
  }
  public mostrarDetalleCompra(idCompra:number) {
    return this.http.get(`/comprasWS/listarDetalleCompra/${idCompra}`, { headers: this.headers });
  }
  public aniadirCompra(idUsuario: number, idProveedor: number, montoCompra: number, productos: IProductos[]) {
    return this.http.post('/comprasWS/agregarCompra', { idUsuario, idProveedor, montoCompra, productos }, { headers: this.headers });
  }

  public mostrarTransacciones() {
    return this.http.get('/transaccionesWS/listarTransacciones', { headers: this.headers });
  }
  public mostrarUltimaTransaccion() {
    return this.http.get('/transaccionesWS/listarUltimaTransaccion', { headers: this.headers });
  }
  public mostrarDetalleTransaccion(idTransaccion:number) {
    return this.http.get(`/transaccionesWS/listarDetalleTransaccion/${idTransaccion}`, { headers: this.headers });
  }
  public aniadirTransaccion(idCliente: number, idVendedor: number, pagoTransaccion: number, productos: IProductos[], tiposDePagos: ITiposDePagos[]) {
    console.log("en el servicio: ",pagoTransaccion,"\n", productos,"\n", tiposDePagos)
    return this.http.post('/transaccionesWS/agregarTransaccion', { idCliente, idVendedor, pagoTransaccion, productos, tiposDePagos }, { headers: this.headers });
  }

  //WS PARA ENTIDAD COMPENSACIONES
  public mostrarCompensaciones() {
    return this.http.get('/compensacionesWS/listarCompensaciones', { headers: this.headers });
  }
  public aniadirCompensacion(tipoCompensacion:string,descripcionCompensacion:string) {
    return this.http.post('/compensacionesWS/agregarCompensacion', { tipoCompensacion,descripcionCompensacion}, { headers: this.headers });
  }
  public actualizarCompensacion(idCompensacion: number,tipoCompensacion:string,descripcionCompensacion:string) {
    return this.http.put(`/compensacionesWS/actualizarCompensacion/${idCompensacion}`, { tipoCompensacion,descripcionCompensacion }, { headers: this.headers });
  }
  public borrarCompensacion(idCompensacion: number) {
    return this.http.delete(`/compensacionesWS/eliminarCompensacion/${idCompensacion}`, { headers: this.headers });
  }

  //WS ENTIDAD DEVOLUCION
  public mostrarDevoluciones() {
    return this.http.get('/devolucionesWS/listarDevoluciones', { headers: this.headers });
  }
  public mostrarDetalleDevolucion(idDevolucion:number) {
    return this.http.get(`/devolucionesWS/listarDetalleDevolucion/${idDevolucion}`, { headers: this.headers });
  }
  public aniadirDevolucion(motivoDevolucion:string,idCliente:number,idTipoProblema:number,idProducto:number,idCompensacion:number,idTransaccion:number) {
    return this.http.post('/devolucionesWS/agregarDevolucion', {motivoDevolucion,idCliente,idTipoProblema,idProducto,idCompensacion,idTransaccion}, { headers: this.headers });
  }

  //WS ENTIDAD ENVIO
  public mostrarEnvios() {
    return this.http.get('/enviosWS/listarEnvios', { headers: this.headers });
  }
  public aniadirEnvio(ciudadEnvio: string,estadoEnvio: string,paisEnvio: string,observacionesEnvio: string,idTransaccion: number,idMedioEntrega: number) {
    return this.http.post('/enviosWS/agregarEnvio', {ciudadEnvio,estadoEnvio,paisEnvio,observacionesEnvio,idTransaccion,idMedioEntrega}, { headers: this.headers });
  }
  public borrarEnvio(idEnvio:number) {
    return this.http.delete(`/enviosWS/agregarEnvio/${idEnvio}`, { headers: this.headers });
  }


  //WS PARA PRODUCTOS
  public mostrarProductos() {
    return this.http.get('/productosWS/listarProductos', { headers: this.headers });
  }
  public mostrarDetalleProducto(idProducto:number) {
    return this.http.get(`/productosWS/listarDetalleProducto/${idProducto}`, { headers: this.headers });
  }
  public aniadirProducto(nombreProducto: string, detalleProducto: string, contenidoProducto: string, fechaCaducidadProducto: string, paisOrigenProducto: string, stockProducto: string, precioUnitarioProducto: number, precioCompraProducto: number, idCategoria: number, idAlmacen: number) {
    return this.http.post('/productosWS/agregarProducto', { nombreProducto, detalleProducto, contenidoProducto, fechaCaducidadProducto, paisOrigenProducto,stockProducto,precioUnitarioProducto,precioCompraProducto,idCategoria, idAlmacen }, { headers: this.headers });
  }
  public actualizarProducto(idProducto: number, nombreProducto: string, detalleProducto: string, contenidoProducto: string, fechaCaducidadProducto: string, paisOrigenProducto: string, stockProducto: string,precioUnitarioProducto: number, precioCompraProducto:number, idCategoria: number, idAlmacen: number) {
    return this.http.put(`/productosWS/actualizarProducto/${idProducto}`, { nombreProducto, detalleProducto, contenidoProducto, fechaCaducidadProducto, paisOrigenProducto, stockProducto,precioUnitarioProducto, precioCompraProducto, idCategoria, idAlmacen }, { headers: this.headers });
  }
  public borrarProducto(idProducto: number) {
    return this.http.delete(`/productosWS/eliminarProducto/${idProducto}`, { headers: this.headers });
  }
  public mostrarViabilidadProductos(fechaInicio: string, fechaFinal: string) {
    return this.http.get(`/popularidadProductosWS/listarPopularidadProductos/${fechaInicio}/${fechaFinal}`, { headers: this.headers });
  }


  //WS PARA ENTIDAD PROVEEDORES
  public mostrarProveedores() {
    return this.http.get('/proveedoresWS/listarProveedores', { headers: this.headers });
  }
  public mostrarDetalleProveedor(idProveedor:number) {
    return this.http.get(`/proveedoresWS/listarDetalleProveedor/${idProveedor}`, { headers: this.headers });
  }
  public aniadirProveedor(nombreProveedor: string, ciudadProveedor: string, estadoProveedor: string, paisProveedor: string, direccionProveedor: string, telefonoProveedor: string, emailProveedor: string, descripcionProveedor: string) {
    return this.http.post('/proveedoresWS/agregarProveedor', { nombreProveedor, ciudadProveedor, estadoProveedor, paisProveedor, direccionProveedor, telefonoProveedor, emailProveedor, descripcionProveedor }, { headers: this.headers });
  }
  public actualizarProveedor(idProveedor: number, nombreProveedor: string, ciudadProveedor: string, estadoProveedor: string, paisProveedor: string, direccionProveedor: string, telefonoProveedor: string, emailProveedor: string, descripcionProveedor: string) {
    return this.http.put(`/proveedoresWS/actualizarProveedor/${idProveedor}`, { nombreProveedor, ciudadProveedor, estadoProveedor, paisProveedor, direccionProveedor, telefonoProveedor, emailProveedor, descripcionProveedor }, { headers: this.headers });
  }
  public borrarProveedor(idProveedor: number) {
    return this.http.delete(`/proveedoresWS/eliminarProveedor/${idProveedor}`, { headers: this.headers });
  }

  //WS PARA REPORTES ECONOMICOS
  public mostrarReporte(fechaInicio: string, fechaFinal: string) {
    return this.http.get(`/reportesEconomicosWS/listarReportesEconomicos/${fechaInicio}/${fechaFinal}`, { headers: this.headers });
  }

  //WS PARA TIPOS DE CLIENTES
  public mostrarTiposDeClientes() {
    return this.http.get('/tiposClientesWS/listarTiposClientes', { headers: this.headers });
  }
  public aniadirTipoDeClientes(tipoCliente: string, descripcionTipoCliente: string) {
    return this.http.post('/tiposClientesWS/agregarTipoCliente', {tipoCliente, descripcionTipoCliente }, { headers: this.headers });
  }
  public actualizarTipoDeClientes(idTipoCliente: number, tipoCliente: string, descripcionTipoCliente: string) {
    return this.http.put(`/tiposClientesWS/actualizarTipoCliente/${idTipoCliente}`, {idTipoCliente, tipoCliente, descripcionTipoCliente }, { headers: this.headers });
  }
  public borrarTipoDeClientes(idTipoCliente: number) {
    return this.http.delete(`/tiposClientesWS/eliminarTipoCliente/${idTipoCliente}`, { headers: this.headers });
  }

  //WS PARA TIPOS DE PAGOS
  public mostrarTiposDePagos() {
    return this.http.get('/tiposPagosWS/listarTiposPagos', { headers: this.headers });
  }
  public buscarTiposDePagosPorID(idTipoPago:number) {
    return this.http.get(`/tiposPagosWS/buscarTipoPagoPorID/${idTipoPago}`, { headers: this.headers });
  }
  public aniadirTipoDePago(tipoPago: string, viaTipoPago: string, descripcionTipoPago: string) {
    return this.http.post('/tiposPagosWS/agregarTipoPago', {tipoPago, viaTipoPago, descripcionTipoPago }, { headers: this.headers });
  }
  public actualizarTipoDePago(idTipoPago: number, tipoPago: string, viaTipoPago: string, descripcionTipoPago: string) {
    return this.http.put(`/tiposPagosWS/actualizarTipoPago/${idTipoPago}`, { idTipoPago, tipoPago, viaTipoPago, descripcionTipoPago }, { headers: this.headers });
  }
  public borrarTipoDePago(idTipoPago: number) {
    return this.http.delete(`/tiposPagosWS/eliminarTipoPago/${idTipoPago}`, { headers: this.headers });
  }

  //WS PARA TIPOS DE PROBLEMAS
  public mostrarTiposDeProblemas() {
    return this.http.get('/tiposProblemasWS/listarTiposProblemas', { headers: this.headers });
  }
  public aniadirTipoDeProblema(tipoProblema:number) {
    return this.http.post('/tiposProblemasWS/agregarTipoProblema', {tipoProblema}, { headers: this.headers });
  }
  public actualizarTipoDeProblema(idTipoProblema: number,tipoProblema:string) {
    return this.http.put(`/tiposProblemasWS/actualizarTipoProblema/${idTipoProblema}`, {tipoProblema}, { headers: this.headers });
  }
  public borrarTipoDeProblema(idTipoProblema: number) {
    return this.http.delete(`/tiposProblemasWS/eliminarTipoProblema/${idTipoProblema}`, { headers: this.headers });
  }

  //WS PARA TIPOS DE USUARIOS
  public mostrarTiposDeUsuarios() {
    return this.http.get('/tiposUsuariosWS/listarTiposUsuarios', { headers: this.headers });
  }
  public aniadirTipoDeUsuario(tipoUsuario:string,descripcionTipoUsuario:string) {
    return this.http.post('/tiposUsuariosWS/agregarTipoUsuario', {tipoUsuario,descripcionTipoUsuario}, { headers: this.headers });
  }
  public actualizarTipoDeUsuario(idTipoUsuario:number,tipoUsuario:string,descripcionTipoUsuario:string) {
    return this.http.put(`/tiposUsuariosWS/actualizarTipoUsuario/${idTipoUsuario}`, {tipoUsuario,descripcionTipoUsuario}, { headers: this.headers });
  }
  public borrarTipoDeUsuario(idTipoUsuario: number) {
    return this.http.delete(`/tiposUsuariosWS/eliminarTipoUsuario/${idTipoUsuario}`, { headers: this.headers });
  }


  //WS PARA ENTIDAD USUARIOS
  public mostrarUsuarios() {
    return this.http.get('/usuariosWS/listarUsuarios', { headers: this.headers });
  }
  public mostrarDetalleUsuario(idUsuario:number) {
    return this.http.get(`/usuariosWS/listarDetalleUsuario/${idUsuario}`, { headers: this.headers });
  }
  public aniadirUsuario(nombreUsuario:string,emailUsuario:string,contraseniaUsuario:string,idVendedor:number,idTipoUsuario:number) {
    return this.http.post('/usuariosWS/agregarUsuario', {nombreUsuario,emailUsuario,contraseniaUsuario,idVendedor,idTipoUsuario }, { headers: this.headers });
  }
  public actualizarUsuario(idUsuario:number,nombreUsuario:string,emailUsuario:string,contraseniaUsuario:string,idVendedor:number,idTipoUsuario:number) {
    return this.http.put(`/usuariosWS/actualizarUsuario/${idUsuario}`, { idUsuario,nombreUsuario,emailUsuario,contraseniaUsuario,idVendedor,idTipoUsuario}, { headers: this.headers });
  }
  public borrarUsuario(idUsuario: number) {
    return this.http.delete(`/usuariosWS/eliminarUsuario/${idUsuario}`, { headers: this.headers });
  }
  public buscarUsuarioPorNombre(nombreUsuario: string) {
    return this.http.get(`/usuariosWS/buscarUsuarioPorNombre/${nombreUsuario}`, { headers: this.headers });
  }


  //WS PARA ENTIDAD VENDEDORES
  public mostrarVendedores() {
    return this.http.get('/vendedoresWS/listarVendedores', { headers: this.headers });
  }
  public mostrarDetalleVendedor(idVendedor:number) {
    return this.http.get(`/vendedoresWS/listarDetalleVendedor/${idVendedor}`, { headers: this.headers });
  }
  public aniadirVendedor(nombreVendedor: string, ciudadVendedor: string, estadoVendedor: string, direccionVendedor: string, telefonoVendedor: string, emailVendedor: string, fechaNacimientoVendedor: string, rfcVendedor: string, numeroSeguroSocialVendedor: number, antiguedadVendedor: number) {
    return this.http.post('/vendedoresWS/agregarVendedor', { nombreVendedor, ciudadVendedor, estadoVendedor, direccionVendedor, telefonoVendedor, emailVendedor, fechaNacimientoVendedor, rfcVendedor, numeroSeguroSocialVendedor, antiguedadVendedor }, { headers: this.headers });
  }
  public actualizarVendedor(idVendedor: number, nombreVendedor: string, ciudadVendedor: string, estadoVendedor: string, direccionVendedor: string, telefonoVendedor: string, emailVendedor: string, fechaNacimientoVendedor: string, rfcVendedor: string, numeroSeguroSocialVendedor: number, antiguedadVendedor: number) {
    return this.http.put(`/vendedoresWS/actualizarVendedor/${idVendedor}`, { nombreVendedor, ciudadVendedor, estadoVendedor, direccionVendedor, telefonoVendedor, emailVendedor, fechaNacimientoVendedor, rfcVendedor, numeroSeguroSocialVendedor, antiguedadVendedor }, { headers: this.headers });
  }
  public borrarVendedor(idVendedor: number) {
    return this.http.delete(`/vendedoresWS/eliminarVendedor/${idVendedor}`, { headers: this.headers });
  }
  public buscarVendedorPorNombre(nombreVendedor: string) {
    return this.http.get(`/vendedores/buscarVendedorPorNombre/${nombreVendedor}`, { headers: this.headers });
  }
  public mostrarRendimientoVendedores(fechaInicio: string, fechaFinal: string) {
    return this.http.get(`/rendimientoVendedoresWS/listarVentasVendedores/${fechaInicio}/${fechaFinal}`, { headers: this.headers });
  }

}
