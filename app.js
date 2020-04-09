//IMPORTANDO DEPENDIENCIAS:
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var mysqlConnection = require('express-myconnection');
var mysql = require('mysql');
var bodyParser = require('body-parser');


//OBTENIENDO RUTAS:
var accesosRouter = require('./routes/accesos/controlador/accesosControlador');
var almacenesRouter = require('./routes/almacenes/controlador/almacenesControlador');
var carritosRouter = require('./routes/carritos/controlador/carritosControlador');
var categoriasRouter = require('./routes/categorias/controlador/categoriasControlador');
var clientesRouter = require('./routes/clientes/controlador/clientesControlador');
var clientesDetallesRouter = require('./routes/clientes/controlador/detalleClienteControlador');
var compensacionesRouter = require('./routes/compensaciones/controlador/compensacionesControlador');
var comprasRouter = require('./routes/compras/controlador/comprasControlador');
var comprasUltimaRouter = require('./routes/compras/controlador/ultimaCompraControlador');
var comprasDetallesRouter = require('./routes/compras/controlador/detalleCompraControlador');
var enviosRouter = require('./routes/envios/controlador/enviosControlador');
var devolucionesRouter = require('./routes/devoluciones/controlador/devolucionesControlador');
var devolucionesDetallesRouter = require('./routes/devoluciones/controlador/detalleDevolucionControlador');
var loginRouter = require('./routes/login/controlador/loginControlador');
var loginRecuperarContraseniaRouter = require('./routes/login/controlador/recuperarContraseniaControlador');
var mediosEntregaRouter = require('./routes/mediosEntrega/controlador/mediosEntregaControlador');
var popularidadProductosRouter = require('./routes/popularidadProductos/controlador/popularidadProductosControlador');
var popularidadVendedoresRouter = require('./routes/popularidadVendedores/controlador/popularidadVendedoresControlador');
var premiosRouter = require('./routes/premios/controlador/premiosControlador');
var productosRouter = require('./routes/productos/controlador/productosControlador');
var productosDetallesRouter = require('./routes/productos/controlador/detalleProductoControlador');
var proveedoresRouter = require('./routes/proveedores/controlador/proveedoresControlador');
var proveedoresDetallesRouter = require('./routes/proveedores/controlador/detalleProveedorControlador');
var reportesEconomicosRouter = require('./routes/reportesEconomicos/controlador/reportesEconomicosControlador');
var tiposClientesRouter = require('./routes/tiposClientes/controlador/tiposClientesControlador');
var tiposPagosRouter = require('./routes/tiposPagos/controlador/tiposPagosControlador');
var tiposPagosBuscarRouter = require('./routes/tiposPagos/controlador/buscarTiposPagosControlador');
var tiposProblemasRouter = require('./routes/tiposProblemas/controlador/tiposProblemasControlador');
var tiposUsuariosRouter = require('./routes/tiposUsuarios/controlador/tiposUsuariosControlador');
var transacciones_clientesRouter = require('./routes/transacciones_clientes/controlador/transacciones_clientesControlador');
var transacciones_productosRouter = require('./routes/transacciones_productos/controlador/transacciones_productosControlador');
var transaccionesRouter = require('./routes/transacciones/controlador/transaccionesControlador');
var transaccionesUltimaRouter = require('./routes/transacciones/controlador/ultimaTransaccionControlador');
var transaccionesDetallesRouter = require('./routes/transacciones/controlador/detalleTransaccionControlador');
var usuariosRouter = require('./routes/usuarios/controlador/usuariosControlador');
var usuariosDetallesRouter = require('./routes/usuarios/controlador/detalleUsuarioControlador');
var usuariosBuscarRouter = require('./routes/usuarios/controlador/buscarUsuarioControlador');
var vendedoresRouter = require('./routes/vendedores/controlador/vendedoresControlador');
var vendedoresDetallesRouter = require('./routes/vendedores/controlador/detalleVendedorControlador');
var vendedoresBuscarRouter = require('./routes/vendedores/controlador/buscarVendedorControlador');
var ventasVendedoresRouter = require('./routes/rendimientoVendedores/controlador/ventasVendedoresControlador');


//USO DE DEPENDENCIAS Y METODOS DEL FW
var app = express();

//configurando el puerto al que admite heroku
const port = process.env.PORT || 8080;

// folder para archivos staticos (archivos css, js, imagenes, etc) en este folder se encuentra nuestra app angular
app.use(express.static(path.join(__dirname, 'bin')));

//conexion con la base de datos
app.use(mysqlConnection(mysql, {
	host: 'dno6xji1n8fm828n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'h2tvkf85vtsu0h0i',
	password: 'ucr4s500dqhbbb1f',
	database: 'adsb46f8s0fvazom'
}, 'request'));

//uso de dependencia bodyParser
app.use(bodyParser.json());


//CREANDO RUTAS PARA ACCEDER A LOS WS
app.use('/accesosWS', accesosRouter);
app.use('/almacenesWS', almacenesRouter);
app.use('/carritosWS', carritosRouter);
app.use('/categoriasWS', categoriasRouter);
app.use('/clientesWS', clientesRouter);
app.use('/clientesWS', clientesDetallesRouter);
app.use('/compensacionesWS', compensacionesRouter);
app.use('/comprasWS', comprasRouter);
app.use('/comprasWS', comprasUltimaRouter);
app.use('/comprasWS', comprasDetallesRouter);
app.use('/enviosWS', enviosRouter);
app.use('/devolucionesWS', devolucionesRouter);
app.use('/devolucionesWS', devolucionesDetallesRouter);
app.use('/loginWS', loginRouter);
app.use('/loginWS', loginRecuperarContraseniaRouter);
app.use('/mediosEntregaWS', mediosEntregaRouter);
app.use('/popularidadProductosWS', popularidadProductosRouter);
app.use('/popularidadVendedoresWS', popularidadVendedoresRouter);
app.use('/premiosWS', premiosRouter);
app.use('/productosWS', productosRouter);
app.use('/productosWS', productosDetallesRouter);
app.use('/proveedoresWS', proveedoresRouter);
app.use('/proveedoresWS', proveedoresDetallesRouter);
app.use('/rendimientoVendedoresWS', ventasVendedoresRouter);
app.use('/reportesEconomicosWS', reportesEconomicosRouter);
app.use('/tiposClientesWS', tiposClientesRouter);
app.use('/tiposPagosWS', tiposPagosRouter);
app.use('/tiposPagosWS', tiposPagosBuscarRouter);
app.use('/tiposProblemasWS', tiposProblemasRouter);
app.use('/tiposUsuariosWS', tiposUsuariosRouter);
app.use('/transaccionesWS', transaccionesRouter);
app.use('/transaccionesWS', transaccionesUltimaRouter);
app.use('/transaccionesWS', transaccionesDetallesRouter);
app.use('/transaccionesWS', transacciones_clientesRouter);
app.use('/transaccionesWS', transacciones_productosRouter);
app.use('/usuariosWS', usuariosRouter);
app.use('/usuariosWS', usuariosDetallesRouter);
app.use('/usuariosWS', usuariosBuscarRouter);
app.use('/vendedoresWS', vendedoresRouter);
app.use('/vendedoresWS', vendedoresDetallesRouter);
app.use('/vendedoresWS', vendedoresBuscarRouter);


//SECCION DE MANIPULACION Y DISPARADO DE FUNCIONES
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//ruta inicial
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

//ruta predefinida en caso de inventar rutas
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'bin/index.html'));
});

//inicializando el servidor
app.listen(port, () => {
  console.log('Server started on port '+port);
});


module.exports = app;
