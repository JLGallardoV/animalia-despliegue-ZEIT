function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/accesos/accesos.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accesos/accesos.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccesosAccesosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br>\n  <mat-card class=\"contenedorAcciones\" style=\"width:80%;\">\n    <div class=\"row\">\n      <div class=\"col-1\">\n        <i class='fas fa-search lupa'></i>\n      </div>\n      <div class=\"col-11\" style=\"margin-top: -5px;\">\n        <mat-form-field class=\"fuenteCuerpos inputBuscar\" style=\"\">\n          <input matInput (keyup)=\"filtrarRegistros($event.target.value)\" placeholder=\"Buscar\" style=\"\">\n        </mat-form-field>\n      </div>\n    </div>\n  </mat-card>\n  <br>\n\n  <!-- informacion tabla -->\n  <div name=\"cardTablaRegistros\">\n    <mat-card style=\"width: 98%;margin: auto;\">\n      <div class=\"tablaElastica\">\n        <table mat-table [dataSource]=\"dsAccesos\" class=\"fuenteCuerpos\" style=\"font-size:98px\">\n\n        <ng-container matColumnDef=\"idAcceso\">\n          <th mat-header-cell *matHeaderCellDef> ID Registro</th>\n          <td mat-cell *matCellDef=\"let i\"> {{i.idAcceso}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"fechaAcceso\">\n          <th mat-header-cell *matHeaderCellDef> Fecha de Acceso </th>\n          <td mat-cell *matCellDef=\"let i\"> {{i.fechaAcceso | date: 'yyyy-MM-dd HH:mm:ss'}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"accionAcceso\">\n          <th mat-header-cell *matHeaderCellDef> Accion Realizada </th>\n          <td mat-cell *matCellDef=\"let i\"> {{i.accionAcceso}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"nombreUsuario\">\n          <th mat-header-cell *matHeaderCellDef>Nombre de Usuario </th>\n          <td mat-cell *matCellDef=\"let i\"> {{i.nombreUsuario}} </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n      </div>\n      <mat-paginator [pageSize]=\"4\" [pageSizeOptions]=\"[2, 4, 6]\" showFirstLastButtons class=\"colorPaginador\" style=\"width: auto;\"></mat-paginator>\n    </mat-card>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div name=\"fondoDeLaPlataforma\" style=\"background:#f4f4f4;height:99vh\">\n    <div id=\"mySidenav\" class=\"sidenav\">\n      <div name=\"logo\" class=\"logoMenu\">\n        <img src=\"../assets/img/logoAnimaliaV2.png\" alt=\"Animalia\" style=\"height:150px;width:150px;\">\n      </div>\n      <a (click)=\"irTransacciones()\" mat-list-item class=\"fuenteCuerpos\" id=\"etiquetaTransacciones\">\n        <span mat-line style=\"cursor: pointer;\"><i class='fas fa-exchange-alt' style='font-size: 20px;color: #f9f9f9;'></i> Transacciones</span>\n      </a>\n\n      <a (click)=\"irOperaciones()\" mat-list-item class=\"fuenteCuerpos\" id=\"etiquetaOperaciones\">\n        <span mat-line style=\"cursor: pointer;\"><i class='fas fa-box-open' style='font-size: 20px;color: #f9f9f9;'></i> Operaciones</span>\n      </a>\n\n      <a (click)=\"irProductos()\" mat-list-item class=\"fuenteCuerpos\" id=\"etiquetaProductos\">\n        <span mat-line style=\"cursor: pointer;\"><i class='fas fa-paw' style='font-size: 20px;color: #f9f9f9;'></i> Productos</span>\n      </a>\n\n      <a (click)=\"irDevoluciones()\" mat-list-item class=\"fuenteCuerpos\" id=\"etiquetaDevoluciones\">\n        <span mat-line style=\"cursor: pointer;\"><i class='fas fa-handshake' style='font-size: 20px;color: #f9f9f9;'></i> Devoluciones</span>\n      </a>\n\n      <a (click)=\"irUsuarios()\" mat-list-item class=\"fuenteCuerpos\" id=\"etiquetaUsuarios\">\n        <span mat-line style=\"cursor: pointer;\"><i class='fas fa-user-lock' style='font-size: 20px;color: #f9f9f9;'></i> Usuarios</span>\n      </a>\n\n      <a (click)=\"irReportes()\" mat-list-item class=\"fuenteCuerpos\" id=\"etiquetaReportes\">\n        <span mat-line style=\"cursor: pointer;\"><i class='fas fa-toolbox' style='font-size: 20px;color: #f9f9f9;'></i> Reportes</span>\n      </a>\n\n      <a (click)=\"logout();\" mat-list-item class=\"fuenteCuerpos\">\n        <span mat-line style=\"cursor: pointer;\"> <i class='fas fa-door-open' style='font-size: 20px;color: #f9f9f9;'></i> Salir</span>\n      </a>\n\n    </div>\n    <mat-toolbar class=\"toolbar\" id=\"idToolbar\">\n    <div id=\"main\" style=\"z-index: 10;\">\n      <div id=\"idHamburguesa\" class=\"hamburguesa\" style=\"padding: 5px;\">\n        <span  style=\"font-size:30px;cursor:pointer\" (click)=\"openNav()\">&#9776;</span>\n      </div>\n      <!--div id=\"idCerrar\" class=\"hamburguesa\" style=\"padding: 5px;display:none;\">\n        <span style=\"font-size:30px;cursor:pointer;\" (click)=\"openNav()\">&times;</span>\n      </div-->\n    </div>\n    <!--input [(ngModel)]=\"etiquetaNivelUsuario\"-->\n    <div id=\"idEtiquetaNivelUsuario\" class=\"fuenteCuerpos\" style=\"margin-left: 80%;font-size: 24px;\">Nivel: {{etiquetaNivelUsuario}}</div>\n  </mat-toolbar>\n  <router-outlet id=\"componenteEnUso\"></router-outlet>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/categorias.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/categorias.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCategoriasCategoriasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br>\n<mat-card class=\"contenedorAcciones\" style=\"width: 80%;\">\n  <div class=\"row\">\n    <div class=\"col-2\" style=\"margin-right: -10%;\">\n      <button mat-fab class=\"btnAcciones fuenteTitulos\" (click)=\"openAltaCategoria(contentCategoria)\"><i class='fas fa-user-plus icono'></i></button>\n    </div>\n    <div class=\"col-10\" style=\"margin-top: -5px;margin-left:10px;\">\n      <mat-form-field class=\"fuenteCuerpos inputBuscar\">\n        <input matInput (keyup)=\"filtrarRegistros($event.target.value)\" placeholder=\"Buscar\">\n      </mat-form-field>\n    </div>\n  </div>\n</mat-card>\n  <br>\n  <!-- card donde se encuentra la tabla de datos  -->\n  <div name=\"cardTablaRegistros\">\n    <mat-card style=\"width: 98%;margin: auto;\">\n      <div class=\"tablaElastica\">\n\n          <table mat-table [dataSource]=\"dsCategorias\" class=\"fuenteCuerpos\" style=\"font-size:98px\">\n\n            <ng-container matColumnDef=\"idCategoria\">\n              <th mat-header-cell *matHeaderCellDef> ID </th>\n              <td mat-cell *matCellDef=\"let i\"> {{i.idCategoria}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"nombreCategoria\">\n              <th mat-header-cell *matHeaderCellDef> Categoria </th>\n              <td mat-cell *matCellDef=\"let i\"> {{i.nombreCategoria}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"subCategoria\">\n              <th mat-header-cell *matHeaderCellDef> SubCategoria </th>\n              <td mat-cell *matCellDef=\"let i\"> {{i.subCategoria}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"descripcionCategoria\">\n              <th mat-header-cell *matHeaderCellDef> Descripcion </th>\n              <td mat-cell *matCellDef=\"let i\"> {{i.descripcionCategoria}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"acciones\">\n              <th mat-header-cell *matHeaderCellDef> Acciones </th>\n              <td mat-cell *matCellDef=\"let i\">\n                <div class=\"\">\n                  <button mat-flat-button color=\"accent\" class=\"fuenteCuerpos btnAccionesColumna\"(click)=\"openEditarCategoria(contentCategoria,i.idCategoria,i.nombreCategoria,i.subCategoria,i.descripcionCategoria)\">Modificar</button>\n                  <button mat-flat-button color=\"accent\" style=\"margin-left: 2px;\" class=\"fuenteCuerpos btnAccionesColumna\"(click)=\"eliminarCategoria(i.idCategoria)\">Eliminar</button>\n                </div>\n              </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumnsCategorias\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumnsCategorias;\"></tr>\n          </table>\n          <div id=\"tablaVaciaProductos\" style=\"text-align: center;font-size: 20px;\" *ngIf=\"!this.tablaConDatos\">\n            <p class=\"fuenteCuerpos\" style=\"color:#012440\"><i>Sin registros por el momento</i></p>\n          </div>\n      </div>\n      <mat-paginator [pageSize]=\"4\" [pageSizeOptions]=\"[4, 16, 32]\" showFirstLastButtons class=\"colorPaginador\"></mat-paginator>\n    </mat-card>\n  </div>\n\n<!-- AREA MODALES -->\n\n  <!-- modal para llenado de datos  -->\n  <ng-template #contentCategoria let-modal>\n    <div class=\"modal-header\" style=\"background: #2d618c;color: white;\">\n      <h3 class=\"modal-title fuenteTitulos\" id=\"modal-basic-title\" style=\"margin-left:25%;\">{{titulo}}&nbsp;<i class='fas fa-bezier-curve' style='font-size: 20px;'></i></h3>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form [formGroup]= \"frmCategorias\" style=\"font-size: 20px; color:#012440;\">\n         <input formControlName=\"idCategoria\" type=\"hidden\">\n        <mat-form-field class=\"fuenteCuerpos\" style=\"font-size:20px; width: 100%;\">\n          <input formControlName=\"nombreCategoria\" type=\"text\"  matInput placeholder=\"Nombre Categoria\" style=\"text-align:center;\">\n        </mat-form-field>\n        <label *ngIf=\"frmCategorias.controls.nombreCategoria.invalid && frmCategorias.controls.nombreCategoria.dirty\" style=\"color:#e6832d;\">Este campo es obligatorio</label>\n        <br>\n        <mat-form-field class=\"fuenteCuerpos\" style=\"font-size:20px; width: 100%;\">\n          <input formControlName=\"subCategoria\"  type=\"text\" matInput placeholder=\"SubCategoria\" style=\"text-align:center;\">\n        </mat-form-field>\n        <label *ngIf=\"frmCategorias.controls.subCategoria.invalid && frmCategorias.controls.subCategoria.dirty\" style=\"color:#e6832d;\">Este campo es obligatorio</label>\n        <br>\n        <mat-form-field class=\"fuenteCuerpos\" style=\"font-size:20px; width: 100%;\">\n          <input formControlName=\"descripcionCategoria\" type=\"text\" matInput step=\"0.01\" placeholder=\"descripcionCategoria\"  style=\"text-align:center;\">\n        </mat-form-field>\n        <label *ngIf=\"frmCategorias.controls.descripcionCategoria.invalid && frmCategorias.controls.descripcionCategoria.dirty\" style=\"color:#e6832d;\">Este campo es obligatorio</label>\n        <br>\n      </form>\n    </div>\n    <div class=\"modal-footer\" style=\"background: #f6f2ebe3;\">\n      <button mat-flat-button color=\"accent\" style=\"width: 100%;font-size: 22px;\" class=\"fuenteCuerpos margenSuperior\" [disabled]=\"frmCategorias.invalid\" (click)=\"ejecutarPeticion()\">Ejecutar</button>\n    </div>\n  </ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/clientes.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/clientes.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppClientesClientesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <br>\n  <mat-card class=\"contenedorAcciones\" style=\"width: 80%;\">\n    <div class=\"row\">\n      <div class=\"col-2\" style=\"margin-right: -10%;\">\n        <button mat-fab class=\"btnAcciones fuenteTitulos\" (click)=\"openAlta(content)\"><i class='fas fa-user-plus icono'></i></button>\n      </div>\n\n      <div class=\"col-10\" style=\"margin-top: -5px;margin-left:10px;\">\n        <mat-form-field class=\"fuenteCuerpos inputBuscar\" style=\"\">\n          <input matInput (keyup)=\"filtrarRegistros($event.target.value)\" placeholder=\"Buscar\" style=\"\">\n        </mat-form-field>\n      </div>\n    </div>\n  </mat-card>\n  <br>\n  <!-- card contenedora de tabla -->\n  <div name=\"cardTablaRegistros\">\n    <mat-card style=\"width: 98%;margin: auto;\">\n      <div class=\"tablaElastica\">\n        <table mat-table [dataSource]=\"dsClientes\" class=\"fuenteCuerpos\" style=\"font-size:98px\">\n\n        <ng-container matColumnDef=\"idCliente\">\n          <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> ID </th>\n          <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.idCliente}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"nombreCliente\">\n          <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Nombre </th>\n          <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.nombreCliente}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"apellidoPaternoCliente\">\n          <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Apellido P. </th>\n          <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.apellidoPaternoCliente}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"ciudadCliente\">\n          <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Ciudad </th>\n          <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.ciudadCliente}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"estadoCliente\">\n          <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Estado </th>\n          <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.estadoCliente}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"acciones\">\n          <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Acciones </th>\n          <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\">\n              <button mat-flat-button color=\"accent\" class=\"fuenteCuerpos btnAccionesColumna\" (click)=\"openScrollableContentCliente(longContentCliente,i.idCliente)\">Informacion</button>\n              <button mat-flat-button color=\"accent\" style=\"margin-left: 2px;\" class=\"fuenteCuerpos btnAccionesColumna\"  (click)=\"openEditar(content,i.idCliente,i.nombreCliente,i.apellidoPaternoCliente,i.apellidoMaternoCliente,i.ciudadCliente,i.estadoCliente,i.paisCliente,i.direccionCliente,i.coloniaCliente,i.cpCliente,i.telefonoCliente,i.emailCliente)\">Modificar</button>\n              <button mat-flat-button color=\"accent\" style=\"margin-left: 2px;\" class=\"fuenteCuerpos btnAccionesColumna\"  (click)=\"eliminarCliente(i.idCliente)\">Eliminar</button>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsClientes\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumnsClientes;\"></tr>\n      </table>\n\n      </div>\n      <mat-paginator [pageSize]=\"4\" [pageSizeOptions]=\"[2, 4, 6]\" showFirstLastButtons class=\"colorPaginador\"></mat-paginator>\n    </mat-card>\n  </div>\n  <!-- modal para el llenado de datos -->\n\n    <ng-template #content let-modal>\n      <div class=\"modal-header\" style=\"background: #2d618c;color: white;\">\n        <h3 class=\"modal-title fuenteTitulos\" id=\"modal-basic-title\" style=\"margin-left:27%;\">{{titulo}}&nbsp;<i class='fas fa-id-card' style='font-size: 20px;'></i></h3>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]= \"frmClientes\">\n           <input formControlName=\"idCliente\" type=\"hidden\">\n           <div name=\"par1NombreApellidoP\" style=\"display:flex;\">\n             <mat-form-field class=\"fuenteCuerpos inputModal\" style=\"margin-right:15px;\">\n               <input formControlName=\"nombreCliente\" type=\"text\"  matInput placeholder=\"Nombre\" style=\"text-align:center;color:#272727\">\n             </mat-form-field>\n             <label *ngIf=\"frmClientes.controls.nombreCliente.invalid && frmClientes.controls.nombreCliente.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n             <br>\n             <mat-form-field class=\"fuenteCuerpos inputModal\">\n               <input formControlName=\"apellidoPaternoCliente\"  type=\"text\" matInput placeholder=\"Apellido Paterno\" style=\"text-align:center;color:#272727;\">\n             </mat-form-field>\n             <label *ngIf=\"frmClientes.controls.apellidoPaternoCliente.invalid && frmClientes.controls.apellidoPaternoCliente.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n             <br>\n           </div>\n\n           <div name=\"par2ApellMCiudad\" style=\"display:flex;\">\n             <mat-form-field class=\"fuenteCuerpos inputModal\" style=\"margin-right:15px;\">\n               <input formControlName=\"apellidoMaternoCliente\" type=\"text\" matInput  placeholder=\"Apellido Materno\"  style=\"text-align:center;color:#272727;\">\n             </mat-form-field>\n             <label *ngIf=\"frmClientes.controls.apellidoMaternoCliente.invalid && frmClientes.controls.apellidoMaternoCliente.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n             <br>\n             <mat-form-field class=\"fuenteCuerpos inputModal\">\n               <input formControlName=\"ciudadCliente\" type=\"text\" matInput  placeholder=\"Ciudad\"  style=\"text-align:center;color:#272727;\">\n             </mat-form-field>\n             <label *ngIf=\"frmClientes.controls.ciudadCliente.invalid && frmClientes.controls.ciudadCliente.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n             <br>\n           </div>\n\n           <div name=\"par3EstadoPais\" style=\"display:flex;\">\n             <mat-form-field class=\"fuenteCuerpos inputModal\" style=\"margin-right:15px;\">\n               <input formControlName=\"estadoCliente\" type=\"text\" matInput  placeholder=\"Estado\"  style=\"text-align:center;color:#272727;\">\n             </mat-form-field>\n             <label *ngIf=\"frmClientes.controls.estadoCliente.invalid && frmClientes.controls.estadoCliente.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n             <br>\n             <mat-form-field class=\"fuenteCuerpos inputModal\">\n               <input formControlName=\"paisCliente\" type=\"text\" matInput  placeholder=\"Pais\"  style=\"text-align:center;color:#272727;\">\n             </mat-form-field>\n             <label *ngIf=\"frmClientes.controls.paisCliente.invalid && frmClientes.controls.paisCliente.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n             <br>\n           </div>\n\n           <div name=\"par4DireccionColonia\" style=\"display:flex;\">\n             <mat-form-field class=\"fuenteCuerpos inputModal\" style=\"margin-right:15px;\">\n               <input formControlName=\"direccionCliente\"  matInput  placeholder=\"Direccion\"  style=\"text-align:center;color:#272727;\">\n             </mat-form-field>\n             <label *ngIf=\"frmClientes.controls.direccionCliente.invalid && frmClientes.controls.direccionCliente.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n             <br>\n             <mat-form-field class=\"fuenteCuerpos inputModal\">\n               <input formControlName=\"coloniaCliente\" matInput placeholder=\"Colonia\"  style=\"text-align:center;color:#272727;\">\n             </mat-form-field>\n             <label *ngIf=\"frmClientes.controls.coloniaCliente.invalid && frmClientes.controls.coloniaCliente.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n             <br>\n           </div>\n\n           <div name=\"par5CPTelefono\" style=\"display:flex;\">\n             <mat-form-field class=\"fuenteCuerpos inputModal\" style=\"margin-right:15px;\">\n               <input formControlName=\"cpCliente\" matInput placeholder=\"CP\"  style=\"text-align:center;color:#272727;\">\n             </mat-form-field>\n             <label *ngIf=\"frmClientes.controls.cpCliente.invalid && frmClientes.controls.cpCliente.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n             <br>\n             <mat-form-field class=\"fuenteCuerpos inputModal\">\n               <input formControlName=\"telefonoCliente\" matInput placeholder=\"Telefono\"  style=\"text-align:center;color:#272727;\">\n             </mat-form-field>\n             <label *ngIf=\"frmClientes.controls.telefonoCliente.invalid && frmClientes.controls.telefonoCliente.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n             <br>\n           </div>\n\n           <div name=\"par6Email\" style=\"display:flex;\">\n             <mat-form-field class=\"fuenteCuerpos inputModal\" style=\"margin-right:15px;width:100vw!important;\">\n               <input formControlName=\"emailCliente\" matInput placeholder=\"Email\"  style=\"text-align:center;color:#272727;\">\n             </mat-form-field>\n             <label *ngIf=\"frmClientes.controls.emailCliente.invalid && frmClientes.controls.emailCliente.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n             <br>\n           </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button mat-flat-button color=\"accent\" style=\"width: 100%;font-size: 22px;\" class=\"fuenteCuerpos margenSuperior\" [disabled]=\"frmClientes.invalid\" (click)=\"ejecutarPeticion()\">Ejecutar</button>\n      </div>\n    </ng-template>\n\n    <!-- modal para mostrar Informacion detallada del cliente -->\n    <ng-template #longContentCliente let-modal>\n      <div class=\"modal-header\" style=\"background: #2d618c;color: white;\">\n        <h3 class=\"modal-title fuenteTitulos\" id=\"modal-basic-title\" style=\"margin:auto;\">\n          Detalles del Cliente\n          <i class='fas fa-id-card' style='font-size: 20px;'></i>\n        </h3>\n      </div>\n      <div id=\"etiquetaPDF\" class=\"modal-body\" *ngFor=\"let i of arregloDetalleCliente\">\n        <p class=\"fuenteCuerpos\" style=\"font-size:22px;text-align:center;\">\n          <b>ID:</b> {{i.idCliente}}\n          <br><b>Nombre:</b> {{i.nombreCliente}}\n          <br><b>Apellido P:</b> {{i.apellidoPaternoCliente}}\n          <br><b>Apellido M:</b> {{i.apellidoMaternoCliente}}\n          <br><b>Ciudad:</b> {{i.ciudadCliente}}\n          <br><b>Estado:</b> {{i.estadoCliente}}\n          <br><b>Dirección:</b> {{i.direccionCliente}}\n          <br><b>Colonia:</b> {{i.coloniaCliente}}\n          <br><b>CP:</b> {{i.cpCliente}}\n          <br><b>País:</b> {{i.paisCliente}}\n          <br><b>Email:</b> {{i.emailCliente}}\n          <br><b>Telefono:</b> {{i.telefonoCliente}}\n        </p>\n      </div>\n      <div class=\"modal-footer\">\n        <button mat-flat-button color=\"accent\" class=\"btnAgregar fuenteCuerpos margenSuperior\" (click)=\"generarPDF('etiquetaPDF')\" style=\"font-size: 19px;\">Imprimir</button>\n        <button mat-flat-button color=\"accent\" class=\"btnAgregar fuenteCuerpos margenSuperior\" (click)=\"modal.dismiss('Cross click')\" style=\"font-size: 19px;\">Cerrar</button>\n      </div>\n    </ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/compras/compras.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/compras/compras.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComprasComprasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <br>\n    <div name=\"renglonPrincipal\" class=\"row\" style=\"width:100vw;height: 75vh;\"  (window:keydown)=\"limpiarFormularioAtajoC($event)\">\n      <div name=\"columnaIzquierdaInputs\" class=\"col-md-3\">\n        <mat-card class=\"cardInputs\">\n          <form [formGroup]=\"frmCompra\" class=\"fuenteCuerpos\" style=\"color:#012440;\">\n              <mat-form-field class=\"fuenteCuerpos\" style=\"font-size:20px; width: 100%;\">\n                <input formControlName=\"idUsuario\" matInput placeholder=\"Vendedor\"  style=\"color:#012440;\" readonly>\n              </mat-form-field>\n              <label *ngIf=\"frmCompra.controls.idUsuario.invalid && frmCompra.controls.idUsuario.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n              <br>\n\n              <mat-form-field class=\"fuenteCuerpos\" style=\"font-size:20px;width:100%;\">\n                <mat-select formControlName=\"idProveedor\" class=\"fuenteCuerpos\" style=\"font-size:20px;\" placeholder=\"proveedor\">\n                  <mat-option  class=\"fuenteCuerpos\" *ngFor=\"let i of arregloProveedoresSelect\" [value]=\"i.idProveedor\">\n                    {{ i.nombreProveedor }}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n              <label *ngIf=\"frmCompra.controls.idProveedor.invalid && frmCompra.controls.idProveedor.dirty\" style=\"color: red;\">Este campo es obligatorio</label>\n\n              <mat-form-field class=\"fuenteCuerpos\" style=\"font-size:20px;width:100%;\">\n                <mat-select formControlName=\"idProducto\" class=\"fuenteCuerpos\" placeholder=\"producto\">\n                  <mat-option class=\"fuenteCuerpos\" *ngFor=\"let i of arregloProductosSelect\" [value]=\"i\">\n                    {{ i.nombreProducto }}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n\n              <div style=\"display: flex;\">\n                <mat-form-field class=\"fuenteCuerpos\" style=\"font-size:20px;width:90%;\">\n                  <div style=\"display: flex;\">\n                    <input formControlName=\"cantidadProducto\" type=\"number\" min=\"1\" matInput placeholder=\"cantidad\" style=\"color: #272727;\" (keypress)=\"soloNumeros($event)\">\n                  </div>\n                </mat-form-field>\n                <button mat-mini-fab matTooltip=\"Agrega el producto y su cantidad a la venta\" class=\"btnAcciones btnAniadirEntidad\" [disabled]=\"frmCompra.controls.idProducto.invalid || frmCompra.controls.cantidadProducto.invalid\"\n                (click)=\"transfiereProductos()\" style=\"top: 25px;margin-left: 0px;\" color=\"accent\"><i class='fas fa-plus' style=\"margin-top: -19px;margin-left:0px;\"></i></button>\n                <label *ngIf=\"(frmCompra.controls.idProducto.invalid && frmCompra.controls.idProducto.dirty) || (frmCompra.controls.cantidadProducto.invalid && frmCompra.controls.cantidadProducto.dirty)\" style=\"color: #red;\">Este campo es\n                  obligatorio</label>\n              </div>\n\n              <br>\n          </form>\n        </mat-card>\n      </div>\n      <div name=\"columnaDerechaOutpus\" class=\"col-md-9\">\n        <mat-card style=\"background:#f9f9f9;height:99%\">\n          <br>\n          <div name=\"renglonOutpus\" class=\"row bordeOutputs\">\n            <div name=\"columnaIzquierdaOuputs\" class=\"col-md-12\">\n\n              <p class=\"fuenteCuerpos fuenteEncabezadosCentrada\" style=\"color:#012440;\"><i class='fas fa-shopping-basket' style=\"font-size: 22px !important;\"></i>&nbsp; Productos a Comprar:</p>\n              <div name=\"tablaProductos\" class=\"listaEntidad\">\n                <table mat-table [dataSource]=\"dsProductos\" class=\"fuenteCuerpos\" style=\"font-size:98px\">\n                  <ng-container matColumnDef=\"nombreProducto\">\n                    <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Nombre </th>\n                    <td mat-cell *matCellDef=\"let elemento; let i = index\" style=\"text-align:center\"> {{elemento.nombreProducto}} </td>\n                  </ng-container>\n\n                  <ng-container matColumnDef=\"precioUnitarioProducto\">\n                    <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> p.Unitario </th>\n                    <td mat-cell *matCellDef=\"let elemento; let i = index\" style=\"text-align:center\"> {{elemento.precioCompraProducto}} </td>\n                  </ng-container>\n\n                  <ng-container matColumnDef=\"cantidadProducto\">\n                    <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Cantidad </th>\n                    <td mat-cell *matCellDef=\"let elemento; let i = index\" style=\"text-align:center\"> {{elemento.cantidadProducto}} </td>\n                  </ng-container>\n\n                  <ng-container matColumnDef=\"descartar\">\n                    <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Descartar </th>\n                    <td mat-cell *matCellDef=\"let elemento; let i = index\" style=\"text-align:center\">\n                      <button type=\"button\" class=\"btnEliminarProductoInteresado\"><i class='fas fa-trash-alt' (click)=\"eliminarProductosCarrito(elemento,i)\" style=\"color:#012440;\"></i></button>\n                    </td>\n                  </ng-container>\n\n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumnsProductos\"></tr>\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumnsProductos;\"></tr>\n                </table>\n                <div id=\"tablaVentaConcluidaVacia\" style=\"text-align: center;font-size: 20px;\">\n                  <p class=\"fuenteCuerpos\"><i>Sin registros por el momento</i></p>\n                </div>\n                <hr style=\"background: #2d618c;\">\n              </div>\n              <label class=\"fuenteCuerpos labelOutput\" style=\"font-size:24px;\">Monto $: <input class=\"outputMonto\" type=\"text\" readonly [(ngModel)]=\"montoAcumulado\"></label>\n              <button id=\"idLimpiarPantallaCompras\"  mat-flat-button color=\"accent\" class=\"fuenteCuerpos nvaCompra\" style=\"margin-top:25px;\" (click)=\"limpiarFormularioC()\">Limpiar Pantalla [F4] </button>\n            </div>\n          </div>\n          <br>\n          <button id=\"idComprar\" mat-flat-button color=\"accent\" class=\"btnComprar fuenteCuerpos\" style=\"width:100%;font-size:22px;\" [disabled]=\"frmCompra.invalid\" (click)=\"agregarCompra()\">Comprar</button>\n        </mat-card>\n      </div>\n    </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/configuracion/configuracion.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/configuracion/configuracion.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConfiguracionConfiguracionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>configuracion works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/devoluciones/devoluciones.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/devoluciones/devoluciones.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDevolucionesDevolucionesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br>\n<br>\n<br>\n    <mat-tab-group id=\"contenido\">\n<!-- TAB 1 DEVOLUCIONES -->\n      <mat-tab label=\"Devoluciones\">\n        <br>\n        <mat-card class=\"contenedorAcciones\" style=\"width: 80%;\">\n          <div class=\"row\">\n            <div class=\"col-2\" style=\"margin-right: -10%;\">\n              <button mat-fab class=\"btnAcciones fuenteTitulos\" (click)=\"openAltaDevolucion(contentDevolucion)\"><i class='fas fa-user-plus icono'></i></button>\n            </div>\n            <div class=\"col-10\" style=\"margin-top: -5px;margin-left:10px;\">\n              <mat-form-field class=\"fuenteCuerpos inputBuscar\">\n                <input matInput (keyup)=\"filtrarRegistros($event.target.value)\" placeholder=\"Buscar\">\n              </mat-form-field>\n            </div>\n          </div>\n        </mat-card>\n        <br>\n\n        <!-- card contenedora de tabla -->\n\n        <div name=\"cardTablaRegistros\">\n          <mat-card style=\"width: 98%;margin: auto;\">\n            <div class=\"tablaElastica\">\n              <table mat-table [dataSource]=\"dsDevoluciones\" class=\"fuenteCuerpos\" style=\"font-size:98px\">\n\n                <ng-container matColumnDef=\"idDevolucion\">\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> ID </th>\n                  <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.idDevolucion}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"nombreProducto\">\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Producto </th>\n                  <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.nombreProducto}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"nombreCliente\">\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Cliente </th>\n                  <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.nombreCliente}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"tipoProblema\">\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Categoria Problema </th>\n                  <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.tipoProblema}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"acciones\">\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Acciones </th>\n                  <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\">\n                      <button mat-flat-button color=\"accent\" class=\"fuenteCuerpos btnAccionesColumna\" (click)=\"openScrollableContentDevoluciones(longContentDevolucion,i.idDevolucion)\">Informacion</button>\n                  </td>\n                </ng-container>\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumnsDevoluciones\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumnsDevoluciones;\"></tr>\n              </table>\n              <div id=\"tablaVaciaDevoluciones\" style=\"text-align: center;font-size: 20px;\" *ngIf=\"!this.tablaConDatosDevoluciones\">\n                <p class=\"fuenteCuerpos\" style=\"color:#012440\"><i>Sin registros por el momento</i></p>\n              </div>\n            </div>\n            <mat-paginator #MatPaginatorDevoluciones [pageSize]=\"4\" [pageSizeOptions]=\"[2, 4, 6]\" showFirstLastButtons class=\"colorPaginador\"></mat-paginator>\n          </mat-card>\n        </div>\n        </mat-tab>\n\n\n<!-- TAB 2 TIPOS DE PROBLEMAS -->\n\n\n      <mat-tab label=\"Tipos de Problemas\">\n        <br>\n        <mat-card class=\"contenedorAcciones\" style=\"width: 80%;\">\n          <div class=\"row\">\n            <div class=\"col-2\" style=\"margin-right: -10%;\">\n              <button mat-fab class=\"btnAcciones fuenteTitulos\" (click)=\"openAltaTipoProblema(contentTiposProblemas)\"><i class='fas fa-user-plus icono'></i></button>\n            </div>\n            <div class=\"col-10\" style=\"margin-top: -5px;margin-left:10px;\">\n              <mat-form-field class=\"fuenteCuerpos inputBuscar\">\n                <input matInput (keyup)=\"filtrarRegistros($event.target.value)\" placeholder=\"Buscar\">\n              </mat-form-field>\n            </div>\n          </div>\n        </mat-card>\n        <br>\n        <!-- tabla de registros -->\n        <div name=\"cardTablaRegistros\">\n          <mat-card style=\"width: 98%;margin: auto;\">\n            <div class=\"tablaElastica\">\n              <table mat-table [dataSource]=\"dsTiposProblemas\" class=\"fuenteCuerpos\" style=\"font-size:98px\">\n\n            <ng-container matColumnDef=\"idTipoProblema\">\n              <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> ID </th>\n              <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.idTipoProblema}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"tipoProblema\">\n              <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Problema </th>\n              <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.tipoProblema}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"acciones\">\n              <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Acciones </th>\n              <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\">\n                <button mat-flat-button color=\"accent\" class=\"fuenteCuerpos btnAccionesColumna\" (click)=\"openEditarTipoProblema(contentTiposProblemas,i.idTipoProblema,i.tipoProblema)\">Modificar</button>\n                <button mat-flat-button color=\"accent\" style=\"margin-left: 2px;\" class=\"fuenteCuerpos btnAccionesColumna\" (click)=\"eliminarTipoProblema(i.idTipoProblema)\">Eliminar</button>\n              </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumnsTiposProblemas\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumnsTiposProblemas;\"></tr>\n          </table>\n          <div id=\"tablaVaciaProblemas\" style=\"text-align: center;font-size: 20px;\" *ngIf=\"!this.tablaConDatosProblemas\">\n            <p class=\"fuenteCuerpos\" style=\"color:#012440\"><i>Sin registros por el momento</i></p>\n          </div>\n            </div>\n            <mat-paginator #MatPaginatorTiposProblemas [pageSize]=\"4\" [pageSizeOptions]=\"[2, 4, 6]\" showFirstLastButtons class=\"colorPaginador\"></mat-paginator>\n          </mat-card>\n        </div>\n        </mat-tab>\n\n<!-- TAB 3 COMPENSACIONES -->\n      <mat-tab label=\"Compensaciones\">\n        <br>\n        <mat-card class=\"contenedorAcciones\" style=\"width: 80%;\">\n          <div class=\"row\">\n            <div class=\"col-2\" style=\"margin-right: -10%;\">\n              <button mat-fab class=\"btnAcciones fuenteCuerpos\" (click)=\"openAltaCompensacion(contentCompensaciones)\"><i class='fas fa-user-plus icono'></i></button>\n            </div>\n\n            <div class=\"col-10\" style=\"margin-top: -5px;margin-left:10px;\">\n              <mat-form-field class=\"fuenteCuerpos inputBuscar\">\n                <input matInput (keyup)=\"filtrarRegistros($event.target.value)\" placeholder=\"Buscar\">\n              </mat-form-field>\n            </div>\n          </div>\n        </mat-card>\n        <br>\n        <!-- informacion tabla -->\n        <div name=\"cardTablaRegistros\">\n          <mat-card style=\"width: 98%;margin: auto;\">\n            <div class=\"tablaElastica\">\n              <table mat-table [dataSource]=\"dsCompensaciones\" class=\"fuenteCuerpos\" style=\"font-size:98px\">\n\n            <ng-container matColumnDef=\"idCompensacion\">\n              <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> ID </th>\n              <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.idCompensacion}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"tipoCompensacion\">\n              <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Compensacion </th>\n              <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.tipoCompensacion}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"descripcionCompensacion\">\n              <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Descripcion </th>\n              <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.descripcionCompensacion}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"acciones\">\n              <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Acciones </th>\n              <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\">\n                <button mat-flat-button color=\"accent\" class=\"fuenteCuerpos btnAccionesColumna\"\n                  (click)=\"openEditarCompensacion(contentCompensaciones,i.idCompensacion,i.tipoCompensacion,i.descripcionCompensacion)\">Modificar</button>\n                <button mat-flat-button color=\"accent\" style=\"margin-left: 2px;\" class=\"fuenteCuerpos btnAccionesColumna\" (click)=\"eliminarCompensacion(i.idCompensacion)\">Eliminar</button>\n              </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumnsCompensaciones\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumnsCompensaciones;\"></tr>\n          </table>\n          <div id=\"tablaVaciaCompensaciones\" style=\"text-align: center;font-size: 20px;\" *ngIf=\"!this.tablaConDatosCompensaciones\">\n            <p class=\"fuenteCuerpos\" style=\"color:#012440\"><i>Sin registros por el momento</i></p>\n          </div>\n\n            </div>\n            <mat-paginator #MatPaginatorCompensaciones [pageSize]=\"4\" [pageSizeOptions]=\"[2, 4, 6]\" showFirstLastButtons class=\"colorPaginador\"></mat-paginator>\n          </mat-card>\n        </div>\n      </mat-tab>\n\n    </mat-tab-group>\n\n<!-- SECCION MODALES -->\n\n  <!-- modal agregar devolucion-->\n\n  <ng-template #contentDevolucion let-modal>\n    <div class=\"modal-header\" style=\"background: #2d618c;color: white;\">\n      <h3 class=\"modal-title fuenteTitulos\" id=\"modal-basic-title\" style=\"margin-left: 19%;\">{{titulo}}&nbsp;<i class='fas fa-handshake' style='font-size: 23px;'></i></h3>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form [formGroup]=\"frmDevoluciones\">\n        <mat-form-field class=\"fuenteCuerpos\" style=\"width:100%;\">\n          <mat-select formControlName=\"idCliente\" class=\"fuenteCuerpos\" placeholder=\"Cliente\">\n            <mat-option class=\"fuenteCuerpos\" *ngFor=\"let i of arregloClientesSelect\" [value]=\"i.idCliente\">\n              {{ i.nombreCliente }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <label *ngIf=\"frmDevoluciones.controls.idCliente.invalid && frmDevoluciones.controls.idCliente.dirty\" style=\"color:#dbd8d1;\">Este campo es obligatorio</label>\n        <br>\n        <mat-form-field class=\"fuenteCuerpos\" style=\"width:100%;\">\n          <mat-select formControlName=\"idTransaccion\" class=\"fuenteCuerpos\" placeholder=\"Id Venta\">\n            <mat-option class=\"fuenteCuerpos\" *ngFor=\"let i of arregloTransaccionesSelect\" [value]=\"i.idTransaccion\">\n              {{ i.idTransaccion }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <label *ngIf=\"frmDevoluciones.controls.idTransaccion.invalid && frmDevoluciones.controls.idTransaccion.dirty\" style=\"color:#dbd8d1;\">Este campo es obligatorio</label>\n        <br>\n        <mat-form-field class=\"fuenteCuerpos\" style=\"width:100%;\">\n          <mat-select formControlName=\"idProducto\" class=\"fuenteCuerpos\" placeholder=\"Producto\">\n            <mat-option class=\"fuenteCuerpos\" *ngFor=\"let i of arregloProductosSelect\" [value]=\"i.idProducto\">\n              {{ i.nombreProducto }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <label *ngIf=\"frmDevoluciones.controls.idProducto.invalid && frmDevoluciones.controls.idProducto.dirty\" style=\"color:#dbd8d1;\">Este campo es obligatorio</label>\n        <br>\n        <mat-form-field class=\"fuenteCuerpos\" style=\"width:100%;\">\n          <mat-select formControlName=\"idTipoProblema\" class=\"fuenteCuerpos\" placeholder=\"Clasificacion Problema\">\n            <mat-option class=\"fuenteCuerpos\" *ngFor=\"let i of arregloTiposProblemasSelect\" [value]=\"i.idTipoProblema\">\n              {{ i.tipoProblema }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <label *ngIf=\"frmDevoluciones.controls.idTipoProblema.invalid && frmDevoluciones.controls.idTipoProblema.dirty\" style=\"color:#dbd8d1;\">Este campo es obligatorio</label>\n        <br>\n        <mat-form-field class=\"fuenteCuerpos\" style=\"width: 100%;\">\n          <input formControlName=\"motivoDevolucion\" type=\"text\" matInput placeholder=\"Detalles\" style=\"text-align: center;\">\n        </mat-form-field>\n        <label *ngIf=\"frmDevoluciones.controls.motivoDevolucion.invalid && frmDevoluciones.controls.motivoDevolucion.dirty\">Este campo es obligatorio</label>\n        <br>\n        <mat-form-field class=\"fuenteCuerpos\" style=\"width:100%;\">\n          <mat-select formControlName=\"idCompensacion\" class=\"fuenteCuerpos\" placeholder=\"Compensacion\">\n            <mat-option class=\"fuenteCuerpos\" *ngFor=\"let i of arregloCompensacionesSelect\" [value]=\"i.idCompensacion\">\n              {{ i.tipoCompensacion }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <label *ngIf=\"frmDevoluciones.controls.idCompensacion.invalid && frmDevoluciones.controls.idCompensacion.dirty\" style=\"color:#dbd8d1;\">Este campo es obligatorio</label>\n        <br>\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      <button mat-flat-button color=\"accent\" style=\"width: 100%;font-size: 22px;\" class=\"fuenteCuerpos margenSuperior\" [disabled]=\"frmDevoluciones.invalid\" (click)=\"ejecutarPeticionDevolucion()\">Ejecutar</button>\n    </div>\n  </ng-template>\n\n  <!-- modal agregar tipos de problemas-->\n\n  <ng-template #contentTiposProblemas let-modal>\n    <div class=\"modal-header\" style=\"background: #2d618c;color: white;\">\n      <h3 class=\"modal-title fuenteTitulos\" id=\"modal-basic-title\" style=\"margin-left:27%;\">{{titulo}}&nbsp;<i class='fas fa-exclamation' style='font-size: 20px;'></i></h3>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form [formGroup]=\"frmTiposProblemas\">\n        <input formControlName=\"idTipoProblema\" type=\"hidden\">\n        <mat-form-field class=\"fuenteCuerpos\" style=\"font-size:20px; width: 100%;\">\n          <input formControlName=\"tipoProblema\" type=\"text\" matInput placeholder=\"Tipo Problema\" style=\"text-align: center;\">\n        </mat-form-field>\n        <label *ngIf=\"frmTiposProblemas.controls.tipoProblema.invalid && frmTiposProblemas.controls.tipoProblema.dirty\">Este campo es obligatorio</label>\n        <br>\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      <button mat-flat-button color=\"accent\" style=\"width: 100%;font-size: 22px;\" class=\"fuenteCuerpos margenSuperior\" [disabled]=\"frmTiposProblemas.invalid\" (click)=\"ejecutarPeticionTipoProblema()\">Ejecutar</button>\n    </div>\n  </ng-template>\n\n  <!-- modal agregar compensaciones-->\n\n  <ng-template #contentCompensaciones let-modal>\n    <div class=\"modal-header\" style=\"background: #2d618c;color: white;\">\n      <h3 class=\"modal-title fuenteTitulos\" id=\"modal-basic-title\" style=\"margin-left:18%;\">{{titulo}}&nbsp;<i class='fas fa-gifts' style='font-size: 20px'></i></h3>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form [formGroup]=\"frmCompensaciones\">\n        <input formControlName=\"idCompensacion\" type=\"hidden\">\n        <mat-form-field class=\"fuenteCuerpos\" style=\"font-size:20px; width: 100%;\">\n          <input formControlName=\"tipoCompensacion\" type=\"text\" matInput placeholder=\"Tipo Compensacion\" style=\"text-align: center;\">\n        </mat-form-field>\n        <label *ngIf=\"frmCompensaciones.controls.tipoCompensacion.invalid && frmCompensaciones.controls.tipoCompensacion.dirty\">Este campo es obligatorio</label>\n        <br>\n        <mat-form-field class=\"fuenteCuerpos\" style=\"font-size:20px; width: 100%;\">\n          <input formControlName=\"descripcionCompensacion\" type=\"text\" matInput placeholder=\"Descripcion\" style=\"text-align: center;\">\n        </mat-form-field>\n        <label *ngIf=\"frmCompensaciones.controls.descripcionCompensacion.invalid && frmCompensaciones.controls.descripcionCompensacion.dirty\">Este campo es obligatorio</label>\n        <br>\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      <button mat-flat-button color=\"accent\" style=\"width: 100%;font-size: 22px;\" class=\"fuenteCuerpos margenSuperior\" [disabled]=\"frmCompensaciones.invalid\" (click)=\"ejecutarPeticionCompensacion()\">Ejecutar</button>\n    </div>\n  </ng-template>\n\n  <!-- modal informacion devoluciones  -->\n  <ng-template #longContentDevolucion let-modal>\n    <div class=\"modal-header\" style=\"background: #2d618c;color: white;\">\n      <h3 class=\"modal-title fuenteTitulos\" id=\"modal-basic-title\" style=\"margin:auto;\">\n        Detalles de la Devolución\n        <i class='fas fa-file-alt' style='font-size:24px'></i>\n      </h3>\n    </div>\n    <div id=\"etiquetaPDF\" class=\"modal-body\" *ngFor=\"let i of arregloDetalleDevolucion\">\n      <p class=\"fuenteCuerpos\" style=\"font-size:22px;text-align:center;\">\n        <b>ID Devolución:</b> {{i.idDevolucion}}\n        <br><b>Id Ventas:</b> {{i.idTransaccion}}\n        <br><b>Producto:</b> {{i.nombreProducto}}\n        <br><b>Cliente:</b> {{i.nombreCliente}}\n        <br><b>Categoria Problema:</b> {{i.tipoProblema}}\n        <br><b>Detalle:</b> {{i.motivoDevolucion}}\n        <br><b>Fecha:</b> {{i.fechaDevolucion | date: 'yyyy-MM-dd HH:mm:ss'}}\n        <br><b>Tipo Compensacion:</b> {{i.tipoCompensacion}}\n      </p>\n    </div>\n    <div class=\"modal-footer\">\n      <button mat-flat-button color=\"accent\" class=\"btnAgregar fuenteCuerpos margenSuperior\" (click)=\"generarPDF('etiquetaPDF')\" style=\"font-size: 19px;\">Imprimir</button>\n      <button mat-flat-button color=\"accent\" class=\"btnAgregar fuenteCuerpos margenSuperior\" (click)=\"modal.dismiss('Cross click')\" style=\"font-size: 19px;\">Cerrar</button>\n    </div>\n  </ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/facturas/facturas.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/facturas/facturas.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFacturasFacturasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br>\n<br>\n<br>\n<mat-tab-group id=\"contenido\">\n<!-- TAB 1 VENTAS -->\n  <mat-tab label=\"Ventas\" (window:keydown)=\"limpiarFormularioAtajo($event)\">\n    <br>\n    <div name=\"renglonPrincipal\" class=\"row\" style=\"width:100vw\">\n      <div name=\"columnaIzquierdaInputs\" class=\"col-md-3\">\n        <mat-card class=\"cardInputs\">\n          <form [formGroup]=\"frmVenta\" class=\"fuenteCuerpos\" style=\"font-size: 20px; color:#012440;\">\n              <mat-form-field class=\"fuenteCuerpos\" style=\"font-size:20px; width: 100%;\">\n                <input formControlName=\"idVendedor\" matInput placeholder=\"Vendedor\" readonly>\n              </mat-form-field>\n              <label *ngIf=\"frmVenta.controls.idVendedor.invalid && frmVenta.controls.idVendedor.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n\n              <mat-form-field class=\"fuenteCuerpos\" color=\"--yellow\" style=\"font-size:20px;width: 100%;\">\n                <mat-select formControlName=\"idCliente\" class=\"fuenteCuerpos\" style=\"font-size:20px;color:#012440\" placeholder=\"cliente\">\n                  <mat-option class=\"fuenteCuerpos\" *ngFor=\"let i of arregloClientesSelect\" [value]=\"i.idCliente\">\n                    {{ i.nombreCliente }}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n              <label *ngIf=\"frmVenta.controls.idCliente.invalid && frmVenta.controls.idCliente.dirty\" style=\"color: #red;\">Este campo es obligatorio</label>\n\n                <mat-form-field class=\"fuenteCuerpos\" style=\"font-size:20px;width: 100%;\">\n                  <mat-select formControlName=\"idProducto\" class=\"fuenteCuerpos\" style=\"font-size:20px;color:#012440\" placeholder=\"producto\">\n                    <mat-option class=\"fuenteCuerpos\" *ngFor=\"let i of arregloProductosSelect\" [value]=\"i\">\n                      {{ i.nombreProducto }}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n\n                <div style=\"display: flex;\">\n                  <mat-form-field class=\"fuenteCuerpos\" style=\"font-size:20px;width:90%;\">\n                    <div style=\"display: flex;\">\n                      <input formControlName=\"cantidadProducto\" type=\"number\" min=\"1\" matInput placeholder=\"cantidad\" style=\"color: #012440;\" (keypress)=\"soloNumeros($event)\">\n                    </div>\n                  </mat-form-field>\n                  <button mat-mini-fab matTooltip=\"Agrega el producto y su cantidad a la venta\" class=\"btnAcciones btnAniadirEntidad\" [disabled]=\"frmVenta.controls.idProducto.invalid || frmVenta.controls.cantidadProducto.invalid\"\n                  (click)=\"transfiereProductos()\" style=\"top: 25px;margin-left: 0px;\" color=\"accent\"><i class='fas fa-plus' style=\"margin-top: -19px;margin-left:0px;\"></i></button>\n                </div>\n                  <label *ngIf=\"(frmVenta.controls.idProducto.invalid && frmVenta.controls.idProducto.dirty) || (frmVenta.controls.cantidadProducto.invalid && frmVenta.controls.cantidadProducto.dirty)\" style=\"font-size:19px;\">Este campo es obligatorio</label>\n                <div style=\"display: grid;\">\n                  <mat-checkbox formControlName=\"idTipoPago\" class=\"fuenteCuerpos\" style=\"font-size: 20px;\" *ngFor=\"let i of arregloTiposDePagosSelect\" value=\"{{i.idTipoPago}}\" style=\"\" (change)=\"transfiereTiposDePagos(i.idTipoPago)\">{{i.tipoPago}}\n                  </mat-checkbox>\n                </div>\n              <label *ngIf=\"frmVenta.controls.idTipoPago.invalid && frmVenta.controls.idTipoPago.dirty\">Este campo es obligatorio</label>\n                <mat-form-field class=\"fuenteCuerpos\" style=\"font-size:20px;width: 100%;\">\n                  <input formControlName=\"pagoTransaccion\" type=\"number\" min=\"1\" matInput placeholder=\"pago\"  (keypress)=\"soloNumeros($event)\">\n                </mat-form-field>\n              <label *ngIf=\"frmVenta.controls.pagoTransaccion.invalid && frmVenta.controls.pagoTransaccion.dirty\" style=\"color: #red;\">Este campo es obligatorio</label>\n          </form>\n        </mat-card>\n      </div>\n\n      <!-- resultados  -->\n      <div name=\"columnaDerechaOutpus\" class=\"col-md-9\">\n        <mat-card style=\"background:#f9f9f9;height:99%;\">\n          <br>\n          <div name=\"renglonOutpus\" class=\"row bordeOutputs\">\n            <div name=\"columnaIzquierdaOuputs\" class=\"col-md-12\">\n\n              <p class=\"fuenteCuerpos fuenteEncabezadosCentrada\" style=\"color:#012440;\"><i class='fas fa-shopping-basket' style=\"font-size: 22px !important;\"></i>&nbsp; Productos por Vender:</p>\n              <div name=\"tablaProductos\" class=\"listaEntidad\">\n                <table mat-table [dataSource]=\"dsProductos\" class=\"fuenteCuerpos\" style=\"font-size:98px\">\n                  <ng-container matColumnDef=\"nombreProducto\">\n                    <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Nombre </th>\n                    <td mat-cell *matCellDef=\"let elemento; let i = index\" style=\"text-align:center\"> {{elemento.nombreProducto}} </td>\n                  </ng-container>\n\n                  <ng-container matColumnDef=\"precioUnitarioProducto\">\n                    <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Precio Unitario </th>\n                    <td mat-cell *matCellDef=\"let elemento; let i = index\" style=\"text-align:center\"> {{elemento.precioUnitarioProducto}} </td>\n                  </ng-container>\n\n                  <ng-container matColumnDef=\"cantidadProducto\">\n                    <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Cantidad </th>\n                    <td mat-cell *matCellDef=\"let elemento; let i = index\" style=\"text-align:center\"> {{elemento.cantidadProducto}} </td>\n                  </ng-container>\n\n                  <ng-container matColumnDef=\"descartar\">\n                    <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Descartar </th>\n                    <td mat-cell *matCellDef=\"let elemento; let i = index\" style=\"text-align:center\">\n                      <button type=\"button\" class=\"btnEliminarProductoInteresado\"><i class='fas fa-trash-alt' (click)=\"eliminarProductosCarrito(elemento,i)\" style=\"color:#012440;\"></i></button>\n                    </td>\n                  </ng-container>\n\n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumnsProductos\"></tr>\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumnsProductos;\"></tr>\n                </table>\n                <div id=\"tablaVentaConcluidaVacia\" style=\"text-align: center;font-size: 20px;\">\n                  <p class=\"fuenteCuerpos\" style=\"color:#012440\"><i>Sin registros por el momento</i></p>\n                </div>\n                <hr style=\"background: #2d618c;\">\n              </div>\n                <label class=\"fuenteCuerpos labelOutput\" style=\"color: #012440;\">Monto $: <input class=\"outputMonto\" type=\"text\" readonly [(ngModel)]=\"montoAcumulado\" style=\"color:#012440\"></label>\n                <label id=\"idCambio\" class=\"fuenteCuerpos labelOutput\" style=\"display:none;color:#012440\">Cambio $: <input class=\"outputMonto\" type=\"text\" readonly value=\"{{cambio}}\"></label>\n                <button id=\"idLimpiarPantallaVentas\" mat-flat-button color=\"accent\" class=\"fuenteCuerpos nvaVenta\" (click)=\"limpiarFormulario()\" style=\"display:none;\">Limpiar Pantalla [Esc] </button>\n            </div>\n\n            <!--div name=\"columnaDerechaOuputs\" class=\"col-md-6\">\n              <p class=\"fuenteCuerpos fuenteEncabezadosCentrada\" style=\"color:#272727;\"><i class='fas fa-clipboard'></i>&nbsp; Detalles de la Venta:</p>\n              <hr-->\n              <div id=\"etiquetaPDF\" name=\"informacionVenta\" class=\"fuenteCuerpos ocultarTicket\" style=\"text-align:center;font-size: 17px;\" *ngFor=\"let i of arregloTransacciones\">\n                <p>\n                  <b>ID Transaccion: </b> {{i.idTransaccion}}\n                  <br><b>Cliente: </b> {{i.nombreCliente}}\n                  <br><b>Vendedor: </b> {{i.nombreVendedor}}\n                  <br><b>Fecha : </b> {{i.fechaTransaccion | date: 'yyyy-MM-dd HH:mm:ss'}}\n                  <br><b>Productos : </b> {{i.productos}}\n                  <br><b>N° Productos: </b> {{i.numeroProductosEnTransaccion}}\n                  <br><b>Monto $: </b> {{i.montoConIvaTransaccion}}\n                  <br><b>Iva $: </b> {{i.ivaTransaccion}}\n                  <br><b>Pago $: </b> {{i.pagoTransaccion}}\n                  <br><b>Cambio $: </b> {{i.cambioTransaccion}}\n                  <br><b>Tipo de Pago: </b> {{i.tipoPago}}\n                </p>\n              </div>\n              <!--button id=\"idTicket\" mat-mini-fab matTooltip=\"Imprimir ticket\" class=\"ticket btnAcciones btnAniadirEntidad\" (click)=\"generarPDF('etiquetaPDF')\" style=\"display:none !important;\"><i class='fas fa-print' style=\"margin-top: -24px;\"></i></button>\n              <br>\n            </div-->\n          </div>\n          <br>\n          <br>\n          <br>\n          <button id=\"idVender\" mat-flat-button color=\"accent\" class=\"btnVender fuenteCuerpos\" style=\"width:100%;font-size:22px;\" [disabled]=\"frmVenta.invalid\" (click)=\"agregarTransaccion()\">Vender</button>\n        </mat-card>\n      </div>\n    </div>\n  </mat-tab>\n<!-- TAB 2 COMPRAS -->\n  <mat-tab [disabled]=\"denegarAccesoCompras()\" label=\"Compras\">\n    <app-compras></app-compras>\n  </mat-tab>\n</mat-tab-group>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/herramientas/herramientas.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/herramientas/herramientas.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHerramientasHerramientasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br>\n<br>\n<br>\n    <mat-tab-group id=\"contenido\">\n      <!--TAB 1 REPORTE ECONOMICO-->\n      <mat-tab label=\"Utilidad\">\n        <br>\n        <mat-card class=\"contenedorAcciones\" style=\"width: 80%;\">\n          <div style=\"margin-top: -7px;\">\n            <div name=\"renglonDeFiltrado\" class=\"row\">\n                <div class=\"col-9\" style=\"top: 6px;\">\n                  <form name=\"formularioFiltrarReportes\" [formGroup]=\"frmFiltrado\">\n                    <mat-form-field class=\"fuenteCuerpos inputFiltrarxFecha\" style=\"\">\n                      <input formControlName=\"fechaInicio\" matInput [matDatepicker]=\"picker\" placeholder=\"Fecha Inicio\" (keypress)=\"restringirEscritura($event)\" (ngModelChange)=\"validarInputsFechaUtilidad($event)\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker\" style=\"color: #dddad3;\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker></mat-datepicker>\n                    </mat-form-field>\n                    <label *ngIf=\"frmFiltrado.controls.fechaInicio.invalid && frmFiltrado.controls.fechaInicio.dirty\" style=\"color:#dbd8d1;\">Este campo es obligatorio</label>\n\n                    <mat-form-field  class=\"fuenteCuerpos inputFiltrarxFecha\" style=\"\">\n                      <input formControlName=\"fechaFinal\" matInput [matDatepicker]=\"picker1\" placeholder=\"Fecha Final\" [min]=\"fechaMinimaFormateadaUtilidad\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker1\" style=\"color: #dddad3;\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker1></mat-datepicker>\n                    </mat-form-field>\n                    <label *ngIf=\"frmFiltrado.controls.fechaFinal.invalid && frmFiltrado.controls.fechaFinal.dirty\" style=\"color:#dbd8d1;\">Este campo es obligatorio</label>\n\n                  </form>\n                </div>\n                <div class=\"col-3\">\n                  <div style=\"margin-top: 15px;\">\n                    <button mat-flat-button color=\"accent\" style=\"width: 100%;font-size: 22px;\" class=\"fuenteCuerpos\" [disabled]=\"frmFiltrado.invalid\" (click)=\"generarUtilidad()\">Filtrar</button>\n                  </div>\n                </div>\n            </div>\n          </div>\n        </mat-card>\n\n        <br>\n        <!-- informacion tabla -->\n        <div name=\"cardTablaRegistros\">\n          <mat-card style=\"width: 98%;margin: auto;\">\n            <div class=\"tablaElastica\">\n              <table mat-table [dataSource]=\"dsReporteEconomico\" class=\"fuenteCuerpos\" style=\"font-size:98px\">\n              <ng-container matColumnDef=\"montoTransacciones\">\n                <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Monto Transacciones </th>\n                <td mat-cell *matCellDef=\"let i\"style=\"text-align:center\"> {{i.montoTransacciones}} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"montoCompras\">\n                <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Monto Compras </th>\n                <td mat-cell *matCellDef=\"let i\"style=\"text-align:center\"> {{i.montoCompras}} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"utilidad\">\n                <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Utilidad </th>\n                <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.utilidad}} </td>\n              </ng-container>\n\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n            </table>\n            <div id=\"tablaVentaConcluidaVaciaUtilidad\" style=\"text-align: center;font-size: 20px;\">\n              <p class=\"fuenteCuerpos\" style=\"color:#012440\"><i>Sin registros por el momento</i></p>\n            </div>\n            </div>\n            <mat-paginator #MatPaginatorReporteEconomico [pageSize]=\"4\" [pageSizeOptions]=\"[2, 4, 6]\" showFirstLastButtons class=\"colorPaginador\" style=\"width: auto;\"></mat-paginator>\n          </mat-card>\n        </div>\n      </mat-tab>\n\n      <!--TAB 2 VIABILIDAD PRODUCTOS-->\n\n      <mat-tab label=\"Ventas Productos\">\n        <br>\n        <mat-card class=\"contenedorAcciones\">\n          <div style=\"margin-top: -7px;\">\n            <div name=\"renglonDeFiltrado\" class=\"row\">\n                <div class=\"col-9\" style=\"top: 6px;\">\n                  <form name=\"filtradoViabilidadProductos\" [formGroup]=\"frmViabilidadProductos\">\n                    <mat-form-field class=\"fuenteCuerpos inputFiltrarxFecha\" style=\"\">\n                      <input formControlName=\"fechaInicio\" matInput [matDatepicker]=\"picker2\" placeholder=\"Fecha Inicio\" (keypress)=\"restringirEscritura($event)\" (ngModelChange)=\"validarInputsFechaProductos($event)\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker2\" style=\"color: #dddad3;\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker2></mat-datepicker>\n                    </mat-form-field>\n                    <label *ngIf=\"frmViabilidadProductos.controls.fechaInicio.invalid && frmViabilidadProductos.controls.fechaInicio.dirty\" style=\"color:#dbd8d1;\">Este campo es obligatorio</label>\n\n                    <mat-form-field  class=\"fuenteCuerpos inputFiltrarxFecha\" style=\"\">\n                      <input formControlName=\"fechaFinal\" matInput [matDatepicker]=\"picker3\" placeholder=\"Fecha Final\" [min]=\"fechaMinimaFormateadaProductos\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker3\" style=\"color: #dddad3;\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker3></mat-datepicker>\n                    </mat-form-field>\n                    <label *ngIf=\"frmViabilidadProductos.controls.fechaInicio.invalid && frmViabilidadProductos.controls.fechaInicio.dirty\" style=\"color:#dbd8d1;\">Este campo es obligatorio</label>\n\n                  </form>\n                </div>\n                <div class=\"col-3\">\n                  <div style=\"margin-top: 15px;\">\n                    <button mat-flat-button color=\"accent\" style=\"width: 100%;font-size: 22px;\" class=\"btnFiltrar fuenteCuerpos\" [disabled]=\"frmViabilidadProductos.invalid\" (click)=\"mostrarVentasProductos()\">Filtrar</button>\n                  </div>\n                </div>\n            </div>\n          </div>\n        </mat-card>\n        <br>\n        <!-- informacion tabla -->\n        <div name=\"cardTablaRegistros\">\n          <mat-card style=\"width: 98%;margin: auto;\">\n            <div class=\"tablaElastica\">\n              <table mat-table [dataSource]=\"dsViabilidadProductos\" class=\"fuenteCuerpos\" style=\"font-size:98px\">\n              <ng-container matColumnDef=\"nombreProducto\">\n                <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Producto </th>\n                <td mat-cell *matCellDef=\"let i\"style=\"text-align:center\"> {{i.nombreProducto}} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"vendidos\">\n                <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Vendidos </th>\n                <td mat-cell *matCellDef=\"let i\"style=\"text-align:center\"> {{i.vendidos}} </td>\n              </ng-container>\n\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumnsMP\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumnsMP;\"></tr>\n            </table>\n            <div id=\"tablaVentaConcluidaVaciaProductos\" style=\"text-align: center;font-size: 20px;\">\n              <p class=\"fuenteCuerpos\" style=\"color:#012440\"><i>Sin registros por el momento</i></p>\n            </div>\n            </div>\n            <mat-paginator #MatPaginatorVentasProducto [pageSize]=\"4\" [pageSizeOptions]=\"[2, 4, 6]\" showFirstLastButtons class=\"colorPaginador\" style=\"width: auto;\"></mat-paginator>\n          </mat-card>\n        </div>\n      </mat-tab>\n\n\n      <!--TERCER TAB VENTAS VENDEDORES-->\n\n      <mat-tab label=\"Ventas Vendedores\">\n        <br>\n        <mat-card class=\"contenedorAcciones\">\n          <div style=\"margin-top: -7px;\">\n            <div name=\"renglonDeFiltrado\" class=\"row\">\n                <div class=\"col-9\" style=\"top: 6px;\">\n                  <form name=\"filtradoRendimientoVendedores\" [formGroup]=\"frmRendimientoVendedores\">\n                    <mat-form-field class=\"fuenteCuerpos inputFiltrarxFecha\" style=\"\">\n                      <input formControlName=\"fechaInicio\" matInput [matDatepicker]=\"picker4\" placeholder=\"Fecha Inicio\" (keypress)=\"restringirEscritura($event)\" (ngModelChange)=\"validarInputsFechaVendedores($event)\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker4\" style=\"color: #dddad3;\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker4></mat-datepicker>\n                    </mat-form-field>\n                    <label *ngIf=\"frmRendimientoVendedores.controls.fechaInicio.invalid && frmRendimientoVendedores.controls.fechaInicio.dirty\" style=\"color:#dbd8d1;\">Este campo es obligatorio</label>\n\n\n                    <mat-form-field  class=\"fuenteCuerpos inputFiltrarxFecha\" style=\"\">\n                      <input formControlName=\"fechaFinal\" matInput [matDatepicker]=\"picker5\" placeholder=\"Fecha Final\" [min]=\"fechaMinimaFormateadaVendedores\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker5\" style=\"color: #dddad3;\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker5></mat-datepicker>\n                    </mat-form-field>\n                    <label *ngIf=\"frmRendimientoVendedores.controls.fechaInicio.invalid && frmRendimientoVendedores.controls.fechaInicio.dirty\" style=\"color:#dbd8d1;\">Este campo es obligatorio</label>\n\n                  </form>\n                </div>\n                <div class=\"col-3\">\n                  <div style=\"margin-top: 15px;\">\n                    <button mat-flat-button color=\"accent\" style=\"width: 100%;font-size: 22px;\" class=\"btnFiltrar fuenteCuerpos\" [disabled]=\"frmRendimientoVendedores.invalid\" (click)=\"mostrarVentasVendedores()\">Filtrar</button>\n                  </div>\n                </div>\n            </div>\n          </div>\n        </mat-card>\n        <br>\n        <!-- informacion tabla -->\n        <div name=\"cardTablaRegistros\">\n          <mat-card style=\"width: 98%;margin: auto;\">\n            <div class=\"tablaElastica\">\n              <table mat-table [dataSource]=\"dsRendimientoVendedores\" class=\"fuenteCuerpos\" style=\"font-size:98px\">\n              <ng-container matColumnDef=\"nombreVendedor\">\n                <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Vendedor </th>\n                <td mat-cell *matCellDef=\"let i\"style=\"text-align:center\"> {{i.nombreVendedor}} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"vendidos\">\n                <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Vendidos </th>\n                <td mat-cell *matCellDef=\"let i\"style=\"text-align:center\"> {{i.vendidos}} </td>\n              </ng-container>\n\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumnsRV\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumnsRV;\"></tr>\n            </table>\n            <div id=\"tablaVentaConcluidaVaciaVendedores\" style=\"text-align: center;font-size: 20px;\">\n              <p class=\"fuenteCuerpos\" style=\"color:#012440\"><i>Sin registros por el momento</i></p>\n            </div>\n            </div>\n            <mat-paginator #MatPaginatorVentasVendedores [pageSize]=\"4\" [pageSizeOptions]=\"[2, 4, 6]\" showFirstLastButtons class=\"colorPaginador\" style=\"width: auto;\"></mat-paginator>\n          </mat-card>\n        </div>\n      </mat-tab>\n      <!-- TAB 4 BITACORA DE ACCESOS -->\n      <mat-tab label=\"Bitacora de Accesos\">\n        <app-accesos></app-accesos>\n      </mat-tab>\n    </mat-tab-group>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <mat-spinner id=\"idSpinner\" class=\"spinner\" style=\"display:none;\"></mat-spinner>\n  <div class=\"background\" id=\"idLogin\">\n    <br>\n    <mat-card class=\"cardFormulario\">\n      <form [formGroup]= \"frmLogin\"  class=\"fuenteCuerpos\">\n        <div style=\"text-align: center;\">\n          <br>\n          <img src=\"../../assets/img/logoAnimaliaV2.png\" alt=\"logo\" style=\"height: 145px;width: 150px;\">\n        </div>\n        <br>\n        <div class=\"contenedorInputs\">\n          <mat-form-field class=\"fuenteCuerpos\" style=\"font-size:20px;\">\n            <input formControlName=\"nombreUsuario\" matInput placeholder=\"Usuario\">\n          </mat-form-field>\n          <label *ngIf=\"frmLogin.controls.nombreUsuario.invalid && frmLogin.controls.nombreUsuario.dirty\" style=\"color: #e6832d;font-size: 20px;\">Este campo es obligatorio</label>\n\n          <mat-form-field class=\"fuenteCuerpos\" style=\"font-size:20px;\">\n            <input formControlName=\"passwordUsuario\" matInput placeholder=\"Contraseña\" type=\"password\">\n          </mat-form-field>\n          <label *ngIf=\"frmLogin.controls.passwordUsuario.invalid && frmLogin.controls.passwordUsuario.dirty\" style=\"color: #e6832d;font-size: 20px;\">Este campo es obligatorio</label>\n          <br>\n        </div>\n      </form>\n      <br>\n      <div name=\"contenidoAbajoDeInputs\" class=\"margenSuperior\">\n        <u id=\"idEnviarMail\">\n          <p class=\"fuenteCuerpos textoProblemasAcceder\" (click)=\"enviarCorreo(frmLogin.controls.nombreUsuario.value)\">\n            Olvidé mi contraseña\n          </p>\n        </u>\n\n        <u>\n          <p class=\"fuenteCuerpos textoProblemasAcceder\" style=\"margin-top: -16px;font-size: 14px;\" (click)=\"openSnackBar()\">\n            No puedo acceder\n          </p>\n        </u>\n        <hr>\n        <button mat-flat-button color=\"accent\" class=\"btLogin fuenteCuerpos\" style=\"font-size:22px;\" [disabled]=\"frmLogin.invalid\" (click)=\"login()\">Ingresar</button>\n      </div>\n    </mat-card>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/productos/productos.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/productos/productos.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductosProductosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br>\n<br>\n<br>\n<mat-tab-group id=\"contenido\">\n<!-- TAB 1 PRODUCTOS  -->\n  <mat-tab label=\"Productos\">\n    <br>\n    <mat-card class=\"contenedorAcciones\" style=\"width: 80%;\">\n      <div class=\"row\">\n        <div class=\"col-3\" style=\"margin-right: -10%;\">\n          <button mat-fab class=\"btnAcciones fuenteTitulos\" (click)=\"openAltaProducto(contentProductos)\"><i class='fas fa-user-plus icono'></i></button>\n          &nbsp;\n          <button mat-fab class=\"btnAcciones fuenteTitulos\" (click)=\"generarPDF('etiquetaPDF')\"><i class='fas fa-print icono'></i></button>\n        </div>\n\n        <div class=\"col-9\" style=\"margin-top: -5px;\">\n          <mat-form-field class=\"fuenteCuerpos inputBuscar\">\n            <input matInput (keyup)=\"filtrarRegistros($event.target.value)\" placeholder=\"Buscar\">\n          </mat-form-field>\n        </div>\n      </div>\n    </mat-card>\n    <br>\n\n    <!-- card contenedora de tabla -->\n    <div name=\"cardTablaRegistros\">\n      <mat-card style=\"width: 98%;margin: auto;\">\n        <div id=\"etiquetaPDF\" class=\"tablaElastica\">\n          <table mat-table [dataSource]=\"dsProductos\" class=\"fuenteCuerpos\" style=\"font-size:98px\">\n\n            <ng-container matColumnDef=\"idProducto\">\n              <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> ID </th>\n              <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.idProducto}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"nombreProducto\">\n              <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Nombre </th>\n              <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.nombreProducto}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"detalleProducto\">\n              <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Marca </th>\n              <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.detalleProducto}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"stockProducto\">\n              <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Stock </th>\n              <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.stockProducto}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"precioUnitarioProducto\">\n              <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> P.Unitario </th>\n              <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.precioUnitarioProducto}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"acciones\">\n              <th id=\"encabezadoBotones\" mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Acciones </th>\n              <td id=\"botones{{i.idProducto}}\" mat-cell *matCellDef=\"let i\" style=\"text-align:center\">\n                  <button mat-flat-button color=\"accent\" class=\"fuenteCuerpos btnAccionesColumna\" (click)=\"openScrollableContentProductos(longContentProductos,i.idProducto)\">Informacion</button>\n                  <button mat-flat-button color=\"accent\" class=\"fuenteCuerpos btnAccionesColumna\" style=\"margin-left: 2px;\" (click)=\"openEditarProducto(contentProductos,i.idProducto, i.nombreProducto, i.detalleProducto, i.contenidoProducto, i.fechaCaducidadProducto, i.paisOrigenProducto,i.stockProducto,i.precioUnitarioProducto, i.precioCompraProducto, i.idCategoria, i.idAlmacen)\">Modificar</button>\n                  <button mat-flat-button color=\"accent\" class=\"fuenteCuerpos btnAccionesColumna\" style=\"margin-left: 2px;\" (click)=\"eliminarProducto(i.idProducto)\">Eliminar</button>\n              </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n          <div id=\"tablaVaciaProductos\" style=\"text-align: center;font-size: 20px;\" *ngIf=\"!this.tablaConDatosProductos\">\n            <p class=\"fuenteCuerpos\" style=\"color:#012440\"><i>Tabla vacía</i></p>\n          </div>\n        </div>\n        <mat-paginator [pageSize]=\"4\" [pageSizeOptions]=\"[2, 4, 6]\" showFirstLastButtons class=\"colorPaginador\"></mat-paginator>\n      </mat-card>\n    </div>\n  </mat-tab>\n\n<!-- TAB 2 CATEGORIAS  -->\n  <mat-tab label=\"Categorias\">\n    <app-categorias></app-categorias>\n  </mat-tab>\n</mat-tab-group>\n\n\n<!-- SECCION DE MODALES -->\n\n\n\n<!-- modal productos - agregar/editar -->\n<ng-template #contentProductos let-modal>\n  <div class=\"modal-header\" style=\"background: #2d618c;color: white;\">\n    <h3 class=\"modal-title fuenteTitulos\" id=\"modal-basic-title\" style=\"margin-left:32%;\">{{titulo}}&nbsp;<i class='fas fa-box' style='font-size: 20px;'></i></h3>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form [formGroup]=\"frmProductos\" style=\"font-size: 20px; color:#012440;\">\n      <input formControlName=\"idProducto\" type=\"hidden\">\n      <div name=\"par1NombreMarca\" style=\"display:flex;\">\n        <mat-form-field class=\"fuenteCuerpos inputModal\" style=\"margin-right:15px;\">\n          <input formControlName=\"nombreProducto\" type=\"text\" matInput placeholder=\"Nombre\" style=\"text-align:center;\">\n        </mat-form-field>\n        <label class=\"fuenteCuerpos\" *ngIf=\"frmProductos.controls.nombreProducto.invalid && frmProductos.controls.nombreProducto.dirty\" style=\"color:#e6832d;\">Este campo es obligatorio</label>\n        <br>\n        <mat-form-field class=\"fuenteCuerpos inputModal\">\n          <input formControlName=\"detalleProducto\" type=\"text\" matInput placeholder=\"Marca \" style=\"text-align:center;\">\n        </mat-form-field>\n        <label class=\"fuenteCuerpos\" *ngIf=\"frmProductos.controls.detalleProducto.invalid && frmProductos.controls.detalleProducto.dirty\" style=\"color:#e6832d;\">Este campo es obligatorio</label>\n        <br>\n      </div>\n\n      <div name=\"par2ContenidoCaducidad\" style=\"display:flex;\">\n        <mat-form-field class=\"fuenteCuerpos inputModal\" style=\"margin-right:15px;\">\n          <input formControlName=\"contenidoProducto\" type=\"text\" matInput placeholder=\"Contenido\" style=\"text-align:center;\">\n        </mat-form-field>\n        <label class=\"fuenteCuerpos\" *ngIf=\"frmProductos.controls.contenidoProducto.invalid && frmProductos.controls.contenidoProducto.dirty\" style=\"color:#e6832d;\">Este campo es obligatorio</label>\n        <br>\n        <mat-form-field class=\"fuenteCuerpos inputModal\">\n          <input formControlName=\"fechaCaducidadProducto\" matInput [matDatepicker]=\"picker\" placeholder=\"Caducidad\" style=\"text-align:center;;\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\" style=\"color: #dddad3;\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n        <label class=\"fuenteCuerpos\" *ngIf=\"frmProductos.controls.fechaCaducidadProducto.invalid && frmProductos.controls.fechaCaducidadProducto.dirty\" style=\"color:#e6832d;\">Este campo es obligatorio</label>\n        <br>\n      </div>\n\n      <div name=\"par3PaisStock\" style=\"display:flex;\">\n        <mat-form-field class=\"fuenteCuerpos inputModal\" style=\"margin-right:15px;\">\n          <input formControlName=\"paisOrigenProducto\" type=\"text\" matInput placeholder=\"Pais Origen\" style=\"text-align:center;\">\n        </mat-form-field>\n        <label class=\"fuenteCuerpos\" *ngIf=\"frmProductos.controls.paisOrigenProducto.invalid && frmProductos.controls.paisOrigenProducto.dirty\" style=\"color:#e6832d;\">Este campo es obligatorio</label>\n        <br>\n        <mat-form-field class=\"fuenteCuerpos inputModal\">\n          <input formControlName=\"stockProducto\" type=\"number\" matInput placeholder=\"Stock\" style=\"text-align:center;\">\n        </mat-form-field>\n        <label class=\"fuenteCuerpos\" *ngIf=\"frmProductos.controls.stockProducto.invalid && frmProductos.controls.stockProducto.dirty\" style=\"color:#e6832d;\">Este campo es obligatorio</label>\n        <br>\n      </div>\n\n      <div name=\"par4PUnitarioPVenta\" style=\"display:flex;\">\n        <mat-form-field class=\"fuenteCuerpos inputModal\" style=\"margin-right:15px;\">\n          <input formControlName=\"precioUnitarioProducto\" type=\"number\" min=\"1\" matInput placeholder=\"Precio Venta\" style=\"text-align:center;\">\n        </mat-form-field>\n        <label class=\"fuenteCuerpos\" *ngIf=\"frmProductos.controls.precioUnitarioProducto.invalid && frmProductos.controls.precioUnitarioProducto.dirty\" style=\"color:#e6832d;\">Este campo es obligatorio</label>\n        <br>\n        <mat-form-field class=\"fuenteCuerpos inputModal\">\n          <input formControlName=\"precioCompraProducto\" type=\"number\" min=\"1\" matInput placeholder=\"Precio Compra\" style=\"text-align:center;\">\n        </mat-form-field>\n        <label class=\"fuenteCuerpos\" *ngIf=\"frmProductos.controls.precioCompraProducto.invalid && frmProductos.controls.precioCompraProducto.dirty\" style=\"color:#e6832d;\">Este campo es obligatorio</label>\n        <br>\n      </div>\n      <div name=\"par5CategoriaAlmacen\" style=\"display:flex;\">\n        <mat-form-field class=\"fuenteCuerpos inputModal\" style=\"margin-right:15px;\">\n          <mat-select formControlName=\"idCategoria\" class=\"fuenteCuerpos\" placeholder=\"Categoria\">\n            <mat-option class=\"fuenteCuerpos\" *ngFor=\"let i of arregloCategoria\" [value]=\"i.idCategoria\">\n              {{ i.nombreCategoria }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <label class=\"fuenteCuerpos\" *ngIf=\"frmProductos.controls.idCategoria.invalid && frmProductos.controls.idCategoria.dirty\" style=\"color:#e6832d;\">Este campo es obligatorio</label>\n        <br>\n        <mat-form-field class=\"fuenteCuerpos inputModal\">\n          <mat-select formControlName=\"idAlmacen\" class=\"fuenteCuerpos\" placeholder=\"Tel. Almacen\">\n            <mat-option class=\"fuenteCuerpos\" *ngFor=\"let i of arregloAlmacenes\" [value]=\"i.idAlmacen\">\n              {{ i.telefonoAlmacen }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <label class=\"fuenteCuerpos\" *ngIf=\"frmProductos.controls.idAlmacen.invalid && frmProductos.controls.idAlmacen.dirty\" style=\"color:#e6832d;\">Este campo es obligatorio</label>\n        <br>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\" style=\"background: #f6f2ebe3;\">\n    <button mat-flat-button color=\"accent\" style=\"width: 100%;font-size: 22px;\" class=\"fuenteCuerpos margenSuperior\" [disabled]=\"frmProductos.invalid\" (click)=\"ejecutarPeticion()\">Ejecutar</button>\n  </div>\n</ng-template>\n\n<!-- modal informacion productos -->\n\n<ng-template #longContentProductos let-modal>\n  <div class=\"modal-header\" style=\"background: #2d618c;color: white;\">\n    <h3 class=\"modal-title fuenteTitulos\" id=\"modal-basic-title\" style=\"margin:auto;\">\n      Detalles del Producto\n      <i class='fas fa-file-alt' style='font-size:24px'></i>\n    </h3>\n  </div>\n  <div id=\"etiquetaPDF2\" class=\"modal-body\" *ngFor=\"let i of arregloDetalleProducto\">\n    <p class=\"fuenteCuerpos\" style=\"font-size:22px; text-align:center;\">\n      <b>ID Producto</b> {{i.idProducto}}\n      <br><b>Marca:</b> {{i.detalleProducto}}\n      <br><b>caducidad:</b> {{i.fechaCaducidadProducto | date: 'yyyy-MM-dd HH:mm:ss'}}\n      <br><b>Contenido:</b> {{i.contenidoProducto}}\n      <br><b>Precio Venta:</b> {{i.precioUnitarioProducto}}\n      <br><b>Precio Compra:</b> {{i.precioCompraProducto}}\n      <br><b>Stock:</b> {{i.stockProducto}}\n      <br><b>Categoria:</b> {{i.nombreCategoria}}\n      <br><b>Pais Origen:</b> {{i.paisOrigenProducto}}\n      <br><b>Almacen:</b> {{i.ciudadAlmacen}}\n      <br><b>Tel. Almacen:</b> {{i.telefonoAlmacen}}\n    </p>\n  </div>\n  <div class=\"modal-footer\">\n    <button mat-flat-button color=\"accent\" class=\"btnAgregar fuenteCuerpos margenSuperior\" (click)=\"generarPdfParticular('etiquetaPDF2')\" style=\"font-size: 19px;\">Imprimir</button>\n    <button mat-flat-button color=\"accent\" class=\"btnAgregar fuenteCuerpos margenSuperior\" (click)=\"modal.dismiss('Cross click')\" style=\"font-size: 19px;\">Cerrar</button>\n  </div>\n</ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/proveedores/proveedores.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proveedores/proveedores.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProveedoresProveedoresComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br>\n  <mat-card class=\"contenedorAcciones\" style=\"width: 80%;\">\n    <div class=\"row\">\n      <div class=\"col-2\" style=\"margin-right: -10%;\">\n        <button mat-fab class=\"btnAcciones fuenteCuerpos\" (click)=\"openAlta(content)\"><i class='fas fa-user-plus icono'></i></button>\n      </div>\n\n      <div class=\"col-10\" style=\"margin-top: -5px;margin-left:10px;\">\n        <mat-form-field class=\"fuenteCuerpos inputBuscar\" style=\"\">\n          <input matInput (keyup)=\"filtrarRegistros($event.target.value)\" placeholder=\"Buscar\" style=\"\">\n        </mat-form-field>\n      </div>\n    </div>\n  </mat-card>\n  <br>\n\n  <!-- card contenedora de tabla -->\n  <div name=\"cardTablaRegistros\">\n    <mat-card style=\"width: 98%;margin: auto;\">\n      <div class=\"tablaElastica\">\n        <table mat-table [dataSource]=\"dsProveedores\" class=\"fuenteCuerpos\" style=\"font-size:98px\">\n\n      <ng-container matColumnDef=\"idProveedor\">\n        <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> ID </th>\n        <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.idProveedor}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"nombreProveedor\">\n        <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Nombre </th>\n        <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.nombreProveedor}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"ciudadProveedor\">\n        <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Ciudad </th>\n        <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.ciudadProveedor}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"estadoProveedor\">\n        <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Edo. </th>\n        <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.estadoProveedor}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"telefonoProveedor\">\n        <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Telefono </th>\n        <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.telefonoProveedor}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"acciones\">\n        <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Acciones </th>\n        <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\">\n            <button mat-flat-button color=\"accent\" class=\"fuenteCuerpos btnAccionesColumna\" (click)=\"openScrollableContentProveedor(longContentProveedor,i.idProveedor)\">Informacion</button>\n            <button mat-flat-button color=\"accent\" style=\"margin-left: 2px;\" class=\"fuenteCuerpos btnAccionesColumna\" (click)=\"openEditar(content,i.idProveedor,i.nombreProveedor, i.ciudadProveedor, i.estadoProveedor, i.paisProveedor, i.direccionProveedor, i.telefonoProveedor, i.emailProveedor, i.descripcionProveedor)\">Modificar</button>\n            <button mat-flat-button color=\"accent\" style=\"margin-left: 2px;\" class=\"fuenteCuerpos btnAccionesColumna\" (click)=\"eliminarProveedor(i.idProveedor)\">Eliminar</button>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumnsProveedores\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumnsProveedores;\"></tr>\n    </table>\n      </div>\n      <mat-paginator [pageSize]=\"4\" [pageSizeOptions]=\"[2, 4, 6]\" showFirstLastButtons class=\"colorPaginador\"></mat-paginator>\n    </mat-card>\n  </div>\n\n<!-- modal para el llenado de datos -->\n\n  <ng-template #content let-modal>\n    <div class=\"modal-header\" style=\"background: #2d618c;color: white;\">\n      <h3 class=\"modal-title fuenteTitulos\" id=\"modal-basic-title\" style=\"margin-left:30%;\">{{titulo}}&nbsp;<i class='fas fa-shopping-basket' style='font-size: 20px;'></i></h3>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form [formGroup]= \"frmProveedores\">\n         <input formControlName=\"idProveedor\" type=\"hidden\">\n\n         <div name=\"par1NombreCiudad\" style=\"display:flex;\">\n           <mat-form-field class=\"fuenteCuerpos inputModal\" style=\"margin-right:15px;\">\n             <input formControlName=\"nombreProveedor\" type=\"text\"  matInput placeholder=\"Nombre\" style=\"text-align:center;color:#272727\">\n           </mat-form-field>\n           <label *ngIf=\"frmProveedores.controls.nombreProveedor.invalid && frmProveedores.controls.nombreProveedor.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n           <br>\n           <mat-form-field class=\"fuenteCuerpos inputModal\">\n             <input formControlName=\"ciudadProveedor\"  type=\"text\" matInput placeholder=\"Ciudad Vendedor\" style=\"text-align:center;color:#272727;\">\n           </mat-form-field>\n           <label *ngIf=\"frmProveedores.controls.ciudadProveedor.invalid && frmProveedores.controls.ciudadProveedor.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n           <br>\n         </div>\n\n         <div name=\"par2EstadoPais\" style=\"display:flex;\">\n           <mat-form-field class=\"fuenteCuerpos inputModal\" style=\"margin-right:15px;\">\n             <input formControlName=\"estadoProveedor\" type=\"text\" matInput  placeholder=\"Estado\"  style=\"text-align:center;color:#272727;\">\n           </mat-form-field>\n           <label *ngIf=\"frmProveedores.controls.estadoProveedor.invalid && frmProveedores.controls.estadoProveedor.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n           <br>\n           <mat-form-field class=\"fuenteCuerpos inputModal\">\n             <input formControlName=\"paisProveedor\" type=\"text\" matInput  placeholder=\"Pais\"  style=\"text-align:center;color:#272727;\">\n           </mat-form-field>\n           <label *ngIf=\"frmProveedores.controls.paisProveedor.invalid && frmProveedores.controls.paisProveedor.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n           <br>\n         </div>\n\n         <div name=\"par3DireccionTelefono\" style=\"display:flex;\">\n           <mat-form-field class=\"fuenteCuerpos inputModal\" style=\"margin-right:15px;\">\n             <input formControlName=\"direccionProveedor\" type=\"text\" matInput  placeholder=\"Direccion\"  style=\"text-align:center;color:#272727;\">\n           </mat-form-field>\n           <label *ngIf=\"frmProveedores.controls.direccionProveedor.invalid && frmProveedores.controls.direccionProveedor.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n           <br>\n           <mat-form-field class=\"fuenteCuerpos inputModal\">\n             <input formControlName=\"telefonoProveedor\" type=\"text\" matInput  placeholder=\"Telefono\"  style=\"text-align:center;color:#272727;\">\n           </mat-form-field>\n           <label *ngIf=\"frmProveedores.controls.telefonoProveedor.invalid && frmProveedores.controls.telefonoProveedor.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n           <br>\n         </div>\n\n         <div name=\"par4EmailDescripcion\" style=\"display:flex;\">\n           <mat-form-field class=\"fuenteCuerpos inputModal\" style=\"margin-right:15px;\">\n             <input formControlName=\"emailProveedor\"  matInput  placeholder=\"Email\"  style=\"text-align:center;color:#272727;\">\n           </mat-form-field>\n           <label *ngIf=\"frmProveedores.controls.emailProveedor.invalid && frmProveedores.controls.emailProveedor.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n           <br>\n           <mat-form-field class=\"fuenteCuerpos inputModal\">\n             <input formControlName=\"descripcionProveedor\" matInput placeholder=\"Descripcion\"  style=\"text-align:center;color:#272727;\">\n           </mat-form-field>\n           <label *ngIf=\"frmProveedores.controls.descripcionProveedor.invalid && frmProveedores.controls.descripcionProveedor.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n           <br>\n         </div>\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      <button mat-flat-button color=\"accent\" style=\"width: 100%;font-size: 22px;\" class=\"fuenteCuerpos margenSuperior\" [disabled]=\"frmProveedores.invalid\" (click)=\"ejecutarPeticion()\">Ejecutar</button>\n    </div>\n  </ng-template>\n  <!-- modal informacion Proveedores -->\n\n  <ng-template #longContentProveedor let-modal>\n    <div class=\"modal-header\" style=\"background: #2d618c;color: white;\">\n      <h3 class=\"modal-title fuenteTitulos\" id=\"modal-basic-title\" style=\"margin:auto;\">\n        Detalles del Proveedor\n        <i class='fas fa-file-alt' style='font-size:24px'></i>\n      </h3>\n    </div>\n    <div id=\"etiquetaPDF\" class=\"modal-body\" *ngFor=\"let i of arregloDetalleProveedor\">\n      <p class=\"fuenteCuerpos\" style=\"font-size:22px; text-align:center;\">\n        <b>ID:</b> {{i.idProveedor}}\n        <br><b>Nombre:</b> {{i.nombreProveedor}}\n        <br><b>Ciudad:</b> {{i.ciudadProveedor}}\n        <br><b>Estado:</b> {{i.estadoProveedor}}\n        <br><b>Pais:</b> {{i.paisProveedor}}\n        <br><b>Direccion:</b> {{i.direccionProveedor}}\n        <br><b>Telefono:</b> {{i.telefonoProveedor}}\n        <br><b>Email:</b> {{i.emailProveedor}}\n        <br><b>Descripcion:</b> {{i.descripcionProveedor}}\n      </p>\n    </div>\n    <div class=\"modal-footer\">\n      <button mat-flat-button color=\"accent\" class=\"btnAgregar fuenteCuerpos margenSuperior\" (click)=\"generarPDF('etiquetaPDF')\" style=\"font-size: 19px;\">Imprimir</button>\n      <button mat-flat-button color=\"accent\" class=\"btnAgregar fuenteCuerpos margenSuperior\" (click)=\"modal.dismiss('Cross click')\" style=\"font-size: 19px;\">Cerrar</button>\n    </div>\n  </ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/recuperar-contrasenia/recuperar-contrasenia.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recuperar-contrasenia/recuperar-contrasenia.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRecuperarContraseniaRecuperarContraseniaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"background\" id=\"idLogin\">\n  <br>\n  <mat-card class=\"cardFormulario\">\n    <form [formGroup]= \"frmRecuperarContrasenia\"  class=\"fuenteCuerpos\">\n      <div style=\"text-align: center;\">\n        <br>\n        <img src=\"../../assets/img/logoAnimaliaV2.png\" alt=\"logo\" style=\"height: 145px;width: 150px;\">\n      </div>\n      <br>\n      <div class=\"contenedorInputs\">\n        <mat-form-field class=\"fuenteCuerpos\" style=\"font-size:20px;\">\n          <input formControlName=\"nuevaContrasenia\" matInput placeholder=\"Cambiar contraseña\" type=\"password\">\n        </mat-form-field>\n        <label *ngIf=\"frmRecuperarContrasenia.controls.nuevaContrasenia.invalid && frmRecuperarContrasenia.controls.nuevaContrasenia.dirty\" style=\"color: #e6832d;font-size: 20px;\">Este campo es obligatorio</label>\n\n        <mat-form-field class=\"fuenteCuerpos\" style=\"font-size:20px;\">\n          <input formControlName=\"confirmarContrasenia\" matInput placeholder=\"Confirmar contraseña\" type=\"password\" (keyup)=confirmarContrasenia($event)>\n        </mat-form-field>\n        <!--mat-hint>Errors appear instantly!</mat-hint>\n    <mat-error *ngIf=\"frmRecuperarContrasenia.controls.passwordUsuario.hasError('email') && !frmRecuperarContrasenia.controls.passwordUsuario.hasError('required')\">\n      Please enter a valid email address\n    </mat-error-->\n        <label *ngIf=\"!this.coincidencia && frmRecuperarContrasenia.controls.nuevaContrasenia.dirty\" style=\"color: #e6832d;font-size: 20px;\">Este campo debe coincidir con el anterior</label>\n        <br>\n      </div>\n    </form>\n    <br>\n    <div name=\"contenidoAbajoDeInputs\" class=\"margenSuperior\">\n      <hr>\n      <button mat-flat-button color=\"accent\" class=\"btLogin fuenteCuerpos\" style=\"font-size:22px;\" [disabled]=\"frmRecuperarContrasenia.invalid || !this.coincidencia\" (click)=\"actualizarContrasenia()\">Actualizar</button>\n    </div>\n  </mat-card>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/transacciones/transacciones.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/transacciones/transacciones.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTransaccionesTransaccionesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br>\n<br>\n<br>\n    <mat-tab-group id=\"contenido\">\n      <!-- primer tab -->\n\n      <mat-tab label=\"Historial Ventas\" style=\"padding: 2px\">\n        <br>\n        <mat-card class=\"contenedorAcciones\">\n          <div class=\"row\">\n            <div class=\"col-1\">\n              <i class='fas fa-search lupa'></i>\n            </div>\n            <div class=\"col-11\" style=\"margin-top: -5px;\">\n              <mat-form-field class=\"fuenteCuerpos inputBuscar\">\n                <input matInput (keyup)=\"filtrarRegistros($event.target.value)\" placeholder=\"Buscar\">\n              </mat-form-field>\n            </div>\n          </div>\n        </mat-card>\n        <br>\n        <div name=\"cardTablaRegistros\" style=\"padding:2px;\">\n          <mat-card style=\"width: 98%;margin: auto;\">\n            <div class=\"tablaElastica\">\n              <table mat-table [dataSource]=\"dsTransacciones\" class=\"fuenteCuerpos\">\n                <ng-container matColumnDef=\"idTransaccion\">\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> ID </th>\n                  <td mat-cell *matCellDef=\"let elemento; let i = index\" style=\"text-align:center\"> {{elemento.idTransaccion}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"nombreCliente\">\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Cliente </th>\n                  <td mat-cell *matCellDef=\"let elemento; let i = index\" style=\"text-align:center\"> {{elemento.nombreCliente}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"apellidoPaternoCliente\">\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Apellido P.</th>\n                  <td mat-cell *matCellDef=\"let elemento; let i = index\" style=\"text-align:center\"> {{elemento.apellidoPaternoCliente}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"fechaTransaccion\">\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Fecha </th>\n                  <td mat-cell *matCellDef=\"let elemento; let i = index\" style=\"text-align:center\"> {{elemento.fechaTransaccion | date: 'yyyy-MM-dd HH:mm:ss'}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"acciones\">\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Acciones </th>\n                  <td mat-cell *matCellDef=\"let elemento; let i = index\" style=\"text-align:center\">\n                    <button mat-flat-button color=\"accent\" class=\"fuenteCuerpos btnAccionesColumna\" (click)=\"openScrollableContentVentas(longContentVentas,elemento.idTransaccion)\">Información</button>\n                  </td>\n                </ng-container>\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumnsTransacciones\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumnsTransacciones;\"></tr>\n              </table>\n              <div id=\"tablaVaciaProductos\" style=\"text-align: center;font-size: 20px;\" *ngIf=\"!this.tablaConDatosVentas\">\n                <p class=\"fuenteCuerpos\" style=\"color:#012440\"><i>Sin registros por el momento</i></p>\n              </div>\n            </div>\n            <mat-paginator #MatPaginatorTransacciones [pageSize]=\"4\" [pageSizeOptions]=\"[2, 4, 6]\" class=\"colorPaginador\">\n            </mat-paginator>\n          </mat-card>\n        </div>\n      </mat-tab>\n\n\n      <!-- segundo tab -->\n\n\n      <mat-tab label=\"Historial Compras\">\n        <br>\n        <mat-card class=\"contenedorAcciones\" style=\"height: auto;\">\n          <div class=\"row\">\n            <div class=\"col-1\">\n              <i class='fas fa-search lupa'></i>\n            </div>\n            <div class=\"col-11\" style=\"margin-top: -5px;\">\n              <mat-form-field class=\"fuenteCuerpos inputBuscar\">\n                <input matInput (keyup)=\"filtrarRegistros($event.target.value)\" placeholder=\"Buscar\">\n              </mat-form-field>\n            </div>\n          </div>\n        </mat-card>\n        <br>\n        <div name=\"cardTablaRegistros\">\n          <mat-card style=\"width: 98%;margin: auto;\">\n            <div class=\"tablaElastica\">\n              <table mat-table [dataSource]=\"dsCompras\" class=\"fuenteCuerpos\" style=\"font-size:98px\">\n\n                <ng-container matColumnDef=\"idCompra\">\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> ID </th>\n                  <td mat-cell *matCellDef=\"let elemento\" style=\"text-align:center\"> {{elemento.idCompra}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"fechaCompra\">\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Fecha </th>\n                  <td mat-cell *matCellDef=\"let elemento\" style=\"text-align:center\"> {{elemento.fechaCompra | date: 'yyyy-MM-dd HH:mm:ss'}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"nombreUsuario\">\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Comprador </th>\n                  <td mat-cell *matCellDef=\"let elemento\" style=\"text-align:center\"> {{elemento.nombreUsuario}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"nombreProveedor\">\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Proveedor </th>\n                  <td mat-cell *matCellDef=\"let elemento\" style=\"text-align:center\"> {{elemento.nombreProveedor}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"acciones\">\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Acciones </th>\n                  <td mat-cell *matCellDef=\"let elemento\" style=\"text-align:center\">\n                    <button mat-flat-button color=\"accent\" class=\"fuenteCuerpos btnAccionesColumna\" (click)=\"openScrollableContentCompras(longContentCompras,elemento.idCompra)\">Información</button>\n                  </td>\n                </ng-container>\n\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumnsCompras\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumnsCompras;\"></tr>\n              </table>\n              <div id=\"tablaVaciaProductos\" style=\"text-align: center;font-size: 20px;\" *ngIf=\"!this.tablaConDatosCompras\">\n                <p class=\"fuenteCuerpos\" style=\"color:#012440\"><i>Sin registros por el momento</i></p>\n              </div>\n            </div>\n            <mat-paginator #MatPaginatorCompras [pageSize]=\"4\" [pageSizeOptions]=\"[2, 4, 6]\" class=\"colorPaginador\">\n            </mat-paginator>\n          </mat-card>\n        </div>\n      </mat-tab>\n    </mat-tab-group>\n\n    <!-- SECCION DE MODALELES -->\n\n\n    <!-- codigo modal Ventas -->\n    <ng-template #longContentVentas let-modal>\n      <div class=\"modal-header\" style=\"background: #2d618c;color: white;\">\n        <h3 class=\"modal-title fuenteTitulos\" id=\"modal-basic-title\" style=\"margin:auto;\">\n          Detalles de Venta\n          <i class='fas fa-file-alt' style='font-size:24px'></i>\n        </h3>\n      </div>\n      <div id=\"etiquetaPDF\" class=\"modal-body\" *ngFor=\"let i of arregloDetalleVenta\">\n        <p class=\"fuenteCuerpos\" style=\"font-size:22px;text-align:center;\">\n          <b>Id Venta:</b> {{i.idVenta}}<br>\n          <b>Nombre cliente:</b> {{i.nombreCliente}}<br>\n          <b>Productos:</b> {{i.productos}}<br>\n          <b>Monto $:</b> {{i.monto}}<br>\n          <b>Iva total $:</b> {{i.iva}}<br>\n          <b>Fecha:</b> {{i.fecha | date: 'yyyy-MM-dd HH:mm:ss'}}<br>\n          <b>N°Productos:</b> {{i.numeroProductosTransaccion}}<br>\n          <b>Vendedor:</b> {{i.vendedor}}<br>\n          <b>Cliente:</b> {{i.cliente}}<br>\n          <b>TipoPago:</b> {{i.tipoPago}}<br>\n        </p>\n      </div>\n      <div class=\"modal-footer\">\n        <button mat-flat-button color=\"accent\" class=\"btnAgregar fuenteCuerpos margenSuperior\" (click)=\"generarPDF('etiquetaPDF')\" style=\"font-size: 19px;\">Imprimir</button>\n        <button mat-flat-button color=\"accent\" class=\"btnAgregar fuenteCuerpos margenSuperior\" (click)=\"modal.dismiss('Cross click')\" style=\"font-size: 19px;\">Cerrar</button>\n      </div>\n    </ng-template>\n\n    <!-- codigo modal compras -->\n    <ng-template #longContentCompras let-modal>\n      <div class=\"modal-header\" style=\"background: #2d618c;color: white;\">\n        <h3 class=\"modal-title fuenteTitulos\" id=\"modal-basic-title\" style=\"margin:auto;\">\n          Detalles de Compras\n          <i class='fas fa-file-alt' style='font-size:24px'></i>\n        </h3>\n      </div>\n      <div id=\"etiquetaPDF2\" class=\"modal-body\" *ngFor=\"let i of arregloDetalleCompra\">\n        <p class=\"fuenteCuerpos\" style=\"font-size:22px;text-align:center\">\n          <b>Id Compra:</b> {{i.idCompra}}<br>\n          <b>Monto $:</b> {{i.monto}}<br>\n          <b>Productos:</b> {{i.productos}}<br>\n          <b>Fecha:</b> {{i.fecha | date: 'yyyy-MM-dd HH:mm:ss'}}<br>\n          <b>N°Productos:</b> {{i.numeroProductosCompra}}<br>\n          <b>Comprador:</b> {{i.nombreUsuario}}<br>\n          <b>Proveedor:</b> {{i.nombreProveedor}}<br>\n        </p>\n      </div>\n      <div class=\"modal-footer\">\n        <button mat-flat-button color=\"accent\" class=\"btnAgregar fuenteCuerpos margenSuperior\" (click)=\"generarPDF('etiquetaPDF2')\" style=\"font-size: 19px;\">Imprimir</button>\n        <button mat-flat-button color=\"accent\" class=\"btnAgregar fuenteCuerpos margenSuperior\" (click)=\"modal.dismiss('Cross click')\" style=\"font-size: 19px;\">Cerrar</button>\n      </div>\n    </ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/usuarios/usuarios.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usuarios/usuarios.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsuariosUsuariosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br>\n<br>\n<br>\n  <mat-tab-group id=\"contenido\">\n  <!-- TAB 1 CLIENTES -->\n  <mat-tab label=\"Clientes\">\n    <app-clientes></app-clientes>\n  </mat-tab>\n  <!-- TAB 2 USUARIOS -->\n  <mat-tab label=\"Usuarios\">\n      <br>\n      <mat-card class=\"contenedorAcciones\" style=\"width: 80%;\">\n        <div class=\"row\">\n          <div class=\"col-2\" style=\"margin-right: -10%;\">\n            <button mat-fab class=\"btnAcciones fuenteTitulos\" (click)=\"openAlta(content)\"><i class='fas fa-user-plus icono'></i></button>\n          </div>\n\n          <div class=\"col-10\" style=\"margin-top: -5px;margin-left:10px;\">\n            <mat-form-field class=\"fuenteCuerpos inputBuscar\" style=\"\">\n              <input matInput (keyup)=\"filtrarRegistros($event.target.value)\" placeholder=\"Buscar\" style=\"\">\n            </mat-form-field>\n          </div>\n        </div>\n      </mat-card>\n      <br>\n      <!-- card contenedora de tabla -->\n      <div name=\"cardTablaRegistros\">\n        <mat-card style=\"width: 98%;margin: auto;\">\n          <div class=\"tablaElastica\">\n            <table mat-table [dataSource]=\"dsUsuarios\" class=\"fuenteCuerpos\" style=\"font-size:98px\">\n\n            <ng-container matColumnDef=\"idUsuario\">\n              <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> ID </th>\n              <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.idUsuario}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"nombreUsuario\">\n              <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Nombre </th>\n              <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.nombreUsuario}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"emailUsuario\">\n              <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Email </th>\n              <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.emailUsuario}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"idTipoUsuario\">\n              <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Tipo Usuario </th>\n              <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.tipoUsuario}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"acciones\">\n              <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Acciones </th>\n              <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\">\n                <div class=\"\">\n                  <!-- contenido del popover -->\n                  <ng-template  #popTitle>\n                    <div class=\"fuenteCuerpos\" style=\"text-align:center; color: black\">\n                      <b>Nombre: {{i.nombreUsuario}}</b>\n                    </div>\n                  </ng-template>\n                  <ng-template  #popContent>\n                    <div class=\"fuenteCuerpos\" style=\"font-size:16px!important;\">\n                      <b>idVendedor:</b> {{i.idVendedor}}\n                    </div>\n                  </ng-template>\n                  <button mat-flat-button color=\"accent\" class=\"fuenteCuerpos btnAccionesColumna\" placement=\"left\"\n                   [ngbPopover]=\"popContent\" [popoverTitle]=\"popTitle\">Informacion</button>\n                  <button mat-flat-button color=\"accent\" style=\"margin-left: 2px;\" class=\"fuenteCuerpos btnAccionesColumna\"  (click)=\"openEditar(content,i.idUsuario,i.nombreUsuario,i.emailUsuario,i.contraseniaUsuario,i.idVendedor,i.idTipoUsuario)\">Modificar</button>\n                  <button mat-flat-button color=\"accent\" style=\"margin-left: 2px;\" class=\"fuenteCuerpos btnAccionesColumna\"  (click)=\"eliminarUsuario(i.idUsuario)\">Eliminar</button>\n                </div>\n              </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n          </div>\n          <mat-paginator [pageSize]=\"4\" [pageSizeOptions]=\"[4, 16, 32]\" showFirstLastButtons class=\"colorPaginador\"></mat-paginator>\n        </mat-card>\n      </div>\n\n      <!-- modal para el llenado de datos -->\n\n        <ng-template #content let-modal>\n          <div class=\"modal-header\" style=\"background: #2d618c;color: white;\">\n            <h3 class=\"modal-title fuenteTitulos\" id=\"modal-basic-title\" style=\"margin-left:23%;\">{{titulo}}&nbsp;<i class='fas fa-user-lock' style='font-size: 20px;'></i></h3>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            <form [formGroup]= \"frmUsuarios\">\n               <input formControlName=\"idUsuario\" type=\"hidden\">\n              <mat-form-field class=\"fuenteCuerpos\" style=\"font-size:20px; width: 100%;\">\n                <input formControlName=\"nombreUsuario\" type=\"text\"  matInput placeholder=\"Nombre\" style=\"text-align:center;color:#272727\">\n              </mat-form-field>\n              <label *ngIf=\"frmUsuarios.controls.nombreUsuario.invalid && frmUsuarios.controls.nombreUsuario.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n              <br>\n              <mat-form-field class=\"fuenteCuerpos\" style=\"font-size:20px; width: 100%;\">\n                <input formControlName=\"emailUsuario\"  type=\"text\" matInput placeholder=\"Email\" style=\"text-align:center;color:#272727;\">\n              </mat-form-field>\n              <label *ngIf=\"frmUsuarios.controls.emailUsuario.invalid && frmUsuarios.controls.emailUsuario.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n              <br>\n              <mat-form-field class=\"fuenteCuerpos\" style=\"font-size:20px; width: 100%;\">\n                <input formControlName=\"contraseniaUsuario\" type=\"password\" matInput  placeholder=\"Contrasenia\"  style=\"text-align:center;color:#272727;\">\n              </mat-form-field>\n              <label *ngIf=\"frmUsuarios.controls.contraseniaUsuario.invalid && frmUsuarios.controls.contraseniaUsuario.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n              <br>\n              <div name=\"selects\" style=\"display:flex;\">\n                <mat-form-field class=\"fuenteCuerpos\" style=\"margin-right: auto;\">\n                  <mat-select formControlName=\"idVendedor\" class=\"fuenteCuerpos\" placeholder=\"ID Vendedor\">\n                    <mat-option class=\"fuenteCuerpos\" *ngFor=\"let i of arregloVendedores\" [value]=\"i.idVendedor\">\n                      {{ i.idVendedor }}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <label *ngIf=\"frmUsuarios.controls.idTipoUsuario.invalid && frmUsuarios.controls.idTipoUsuario.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n                <br>\n                <mat-form-field class=\"fuenteCuerpos\">\n                  <mat-select formControlName=\"idTipoUsuario\" class=\"fuenteCuerpos\" placeholder=\"Tipo Usuario\">\n                    <mat-option  class=\"fuenteCuerpos\" *ngFor=\"let i of arregloTiposDeUsuarios\" [value]=\"i.idTipoUsuario\">\n                      {{ i.tipoUsuario }}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <label *ngIf=\"frmUsuarios.controls.idTipoUsuario.invalid && frmUsuarios.controls.idTipoUsuario.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n                <br>\n              </div>\n            </form>\n          </div>\n          <div class=\"modal-footer\">\n            <button mat-flat-button color=\"accent\" style=\"width: 100%;font-size: 22px;\" class=\"fuenteCuerpos margenSuperior\" [disabled]=\"frmUsuarios.invalid\" (click)=\"ejecutarPeticion()\">Ejecutar</button>\n          </div>\n        </ng-template>\n  </mat-tab>\n  <!-- TAB 3 VENDEDORES -->\n  <mat-tab label=\"Vendedores\">\n    <app-vendedores></app-vendedores>\n  </mat-tab>\n  <!-- TAB 4 PROVEEDORES -->\n  <mat-tab label=\"Proveedores\">\n    <app-proveedores></app-proveedores>\n  </mat-tab>\n</mat-tab-group>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vendedores/vendedores.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vendedores/vendedores.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVendedoresVendedoresComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <br>\n  <mat-card class=\"contenedorAcciones\" style=\"width: 80%;\">\n    <div class=\"row\">\n      <div class=\"col-2\" style=\"margin-right: -10%;\">\n        <button mat-fab class=\"btnAcciones fuenteTitulos\" (click)=\"openAlta(content)\"><i class='fas fa-user-plus icono'></i></button>\n      </div>\n\n      <div class=\"col-10\" style=\"margin-top: -5px;margin-left:10px\">\n        <mat-form-field class=\"fuenteCuerpos inputBuscar\" style=\"\">\n          <input matInput (keyup)=\"filtrarRegistros($event.target.value)\" placeholder=\"Buscar\" style=\"\">\n        </mat-form-field>\n      </div>\n    </div>\n  </mat-card>\n  <br>\n\n  <!-- card contenedora de tabla -->\n  <div name=\"cardTablaRegistros\">\n    <mat-card style=\"width: 98%;margin: auto;\">\n      <div class=\"tablaElastica\">\n        <table mat-table [dataSource]=\"dsVendedores\" class=\"fuenteCuerpos\" style=\"font-size:98px\">\n\n        <ng-container matColumnDef=\"idVendedor\">\n          <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> ID </th>\n          <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.idVendedor}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"nombreVendedor\">\n          <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Nombre </th>\n          <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.nombreVendedor}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"ciudadVendedor\">\n          <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Ciudad </th>\n          <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.ciudadVendedor}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"estadoVendedor\">\n          <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Edo. </th>\n          <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.estadoVendedor}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"telefonoVendedor\">\n          <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Telefono </th>\n          <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\"> {{i.telefonoVendedor}} </td>\n        </ng-container>\n\n\n        <ng-container matColumnDef=\"acciones\">\n          <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Acciones </th>\n          <td mat-cell *matCellDef=\"let i\" style=\"text-align:center\">\n              <button mat-flat-button color=\"accent\" class=\"fuenteCuerpos btnAccionesColumna\" (click)=\"openScrollableContentVendedor(longContentVendedor,i.idVendedor)\">Informacion</button>\n              <button mat-flat-button color=\"accent\" style=\"margin-left: 2px;\" class=\"fuenteCuerpos btnAccionesColumna\"  (click)=\"openEditar(content,i.idVendedor,i.nombreVendedor, i.ciudadVendedor, i.estadoVendedor, i.direccionVendedor, i.telefonoVendedor, i.emailVendedor, i.fechaNacimientoVendedor, i.rfcVendedor, i.numeroSeguroSocialVendedor, i.antiguedadVendedor)\">Modificar</button>\n              <button mat-flat-button color=\"accent\" style=\"margin-left: 2px;\" class=\"fuenteCuerpos btnAccionesColumna\"  (click)=\"eliminarVendedor(i.idVendedor)\">Eliminar</button>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsVendedores\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumnsVendedores;\"></tr>\n      </table>\n      </div>\n      <mat-paginator [pageSize]=\"4\" [pageSizeOptions]=\"[2, 4, 6]\" showFirstLastButtons class=\"colorPaginador\"></mat-paginator>\n    </mat-card>\n  </div>\n\n<!-- modal para el llenado de datos -->\n\n  <ng-template #content let-modal>\n    <div class=\"modal-header\" style=\"background: #2d618c;color: white;\">\n      <h3 class=\"modal-title fuenteTitulos\" id=\"modal-basic-title\" style=\"margin-left:23%;\">{{titulo}}&nbsp;<i class='fas fa-users' style='font-size: 20px;'></i></h3>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form [formGroup]= \"frmVendedores\">\n         <input formControlName=\"idVendedor\" type=\"hidden\">\n\n         <div name=\"par1NombreCiudad\" style=\"display:flex;\">\n           <mat-form-field class=\"fuenteCuerpos inputModal\" style=\"margin-right:15px;\">\n             <input formControlName=\"nombreVendedor\" type=\"text\"  matInput placeholder=\"Nombre Vendedor\" style=\"text-align:center;color:#272727\">\n           </mat-form-field>\n           <label *ngIf=\"frmVendedores.controls.nombreVendedor.invalid && frmVendedores.controls.nombreVendedor.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n           <br>\n           <mat-form-field class=\"fuenteCuerpos inputModal\">\n             <input formControlName=\"ciudadVendedor\"  type=\"text\" matInput placeholder=\"Ciudad Vendedor\" style=\"text-align:center;color:#272727;\">\n           </mat-form-field>\n           <label *ngIf=\"frmVendedores.controls.ciudadVendedor.invalid && frmVendedores.controls.ciudadVendedor.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n           <br>\n         </div>\n\n         <div name=\"par2EstadoDireccion\" style=\"display:flex;\">\n           <mat-form-field class=\"fuenteCuerpos inputModal\" style=\"margin-right:15px;\">\n             <input formControlName=\"estadoVendedor\" type=\"text\" matInput  placeholder=\"Estado Vendedor\"  style=\"text-align:center;color:#272727;\">\n           </mat-form-field>\n           <label *ngIf=\"frmVendedores.controls.estadoVendedor.invalid && frmVendedores.controls.estadoVendedor.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n           <br>\n           <mat-form-field class=\"fuenteCuerpos inputModal\">\n             <input formControlName=\"direccionVendedor\" type=\"text\" matInput  placeholder=\"Direccion Vendedor\"  style=\"text-align:center;color:#272727;\">\n           </mat-form-field>\n           <label *ngIf=\"frmVendedores.controls.direccionVendedor.invalid && frmVendedores.controls.direccionVendedor.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n           <br>\n         </div>\n\n         <div name=\"par3TelefonoEmail\" style=\"display:flex;\">\n           <mat-form-field class=\"fuenteCuerpos inputModal\" style=\"margin-right:15px;\">\n             <input formControlName=\"telefonoVendedor\" type=\"text\" matInput  placeholder=\"Telefono\"  style=\"text-align:center;color:#272727;\">\n           </mat-form-field>\n           <label *ngIf=\"frmVendedores.controls.telefonoVendedor.invalid && frmVendedores.controls.telefonoVendedor.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n           <br>\n           <mat-form-field class=\"fuenteCuerpos inputModal\">\n             <input formControlName=\"emailVendedor\" type=\"text\" matInput  placeholder=\"Email\"  style=\"text-align:center;color:#272727;\">\n           </mat-form-field>\n           <label *ngIf=\"frmVendedores.controls.emailVendedor.invalid && frmVendedores.controls.emailVendedor.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n           <br>\n         </div>\n\n         <div name=\"par4NacimientoRFC\" style=\"display:flex;\">\n           <mat-form-field class=\"fuenteCuerpos inputModal\" style=\"margin-right:15px;\">\n             <input formControlName=\"fechaNacimientoVendedor\" matInput [matDatepicker]=\"picker\" placeholder=\"Fecha Nacimiento\"  style=\"text-align:center;color:#272727;\">\n             <mat-datepicker-toggle matSuffix [for]=\"picker\" style=\"color: #dddad3;\"></mat-datepicker-toggle>\n             <mat-datepicker #picker></mat-datepicker>\n           </mat-form-field>\n           <label *ngIf=\"frmVendedores.controls.fechaNacimientoVendedor.invalid && frmVendedores.controls.fechaNacimientoVendedor.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n           <br>\n           <mat-form-field class=\"fuenteCuerpos inputModal\">\n             <input formControlName=\"rfcVendedor\" type=\"text\" matInput  placeholder=\"RFC\"  style=\"text-align:center;color:#272727;\">\n           </mat-form-field>\n           <label *ngIf=\"frmVendedores.controls.rfcVendedor.invalid && frmVendedores.controls.rfcVendedor.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n           <br>\n         </div>\n\n         <div name=\"par5NSSAntiguedad\" style=\"display:flex;\">\n           <mat-form-field class=\"fuenteCuerpos inputModal\" style=\"margin-right:15px;\">\n             <input formControlName=\"numeroSeguroSocialVendedor\" type=\"number\" min=\"1\" matInput  placeholder=\"NSS\"  style=\"text-align:center;color:#272727;\">\n           </mat-form-field>\n           <label *ngIf=\"frmVendedores.controls.numeroSeguroSocialVendedor.invalid && frmVendedores.controls.numeroSeguroSocialVendedor.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n           <br>\n           <mat-form-field class=\"fuenteCuerpos inputModal\">\n             <input formControlName=\"antiguedadVendedor\" type=\"number\" min=\"1\" matInput placeholder=\"Antiguedad Vendedor\"  style=\"text-align:center;color:#272727;\">\n           </mat-form-field>\n           <label *ngIf=\"frmVendedores.controls.antiguedadVendedor.invalid && frmVendedores.controls.antiguedadVendedor.dirty\" style=\"color:red;\">Este campo es obligatorio</label>\n           <br>\n         </div>\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      <button mat-flat-button color=\"accent\" style=\"width: 100%;font-size: 22px;\" class=\"fuenteCuerpos margenSuperior\" [disabled]=\"frmVendedores.invalid\" (click)=\"ejecutarPeticion()\">Ejecutar</button>\n    </div>\n  </ng-template>\n\n  <!-- modal para mostrar Informacion detallada del vendedor -->\n  <ng-template #longContentVendedor let-modal>\n    <div class=\"modal-header\" style=\"background: #2d618c;color: white;\">\n      <h3 class=\"modal-title fuenteTitulos\" id=\"modal-basic-title\" style=\"margin:auto;\">\n        Detalles del Vendedor\n        <i class='fas fa-users' style='font-size: 20px;'></i>\n      </h3>\n    </div>\n    <div id=\"etiquetaPDF\" class=\"modal-body\" *ngFor=\"let i of arregloDetalleVendedor\">\n      <p class=\"fuenteCuerpos\" style=\"font-size:22px;text-align:center;\">\n        <b>ID:</b> {{i.idVendedor}}\n        <br><b>Nombre:</b> {{i.nombreVendedor}}\n        <br><b>Ciudad:</b> {{i.ciudadVendedor}}\n        <br><b>Estado:</b> {{i.estadoVendedor}}\n        <br><b>Dirección:</b> {{i.direccionVendedor}}\n        <br><b>Telefono:</b> {{i.telefonoVendedor}}\n        <br><b>Email:</b> {{i.emailVendedor}}\n        <br><b>Fecha Nacimiento:</b> {{i.fechaNacimientoVendedor | date: 'yyyy-MM-dd HH:mm:ss'}}\n        <br><b>RFC:</b> {{i.rfcVendedor}}\n        <br><b>NSS:</b> {{i.numeroSeguroSocialVendedor}}\n        <br><b>Antiguedad:</b> {{i.antiguedadVendedor}}\n      </p>\n    </div>\n    <div class=\"modal-footer\">\n      <button mat-flat-button color=\"accent\" class=\"btnAgregar fuenteCuerpos margenSuperior\" (click)=\"generarPDF('etiquetaPDF')\" style=\"font-size: 19px;\">Imprimir</button>\n      <button mat-flat-button color=\"accent\" class=\"btnAgregar fuenteCuerpos margenSuperior\" (click)=\"modal.dismiss('Cross click')\" style=\"font-size: 19px;\">Cerrar</button>\n    </div>\n  </ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/accesos/accesos.component.scss":
  /*!************************************************!*\
    !*** ./src/app/accesos/accesos.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccesosAccesosComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cardPrincipal {\n  background-color: #000000bd;\n  border-radius: 6px;\n  width: 80%;\n  height: auto;\n  margin: 0 auto;\n}\n\n.tablaElastica {\n  overflow-y: auto;\n  min-height: 30%;\n  max-height: 45%;\n  transition: 0.5s;\n}\n\n.lupa {\n  font-size: 20px;\n  color: #272727;\n  margin: 10px 0px 0px 10px;\n}\n\n::ng-deep .mat-focused {\n  /*change color of label*/\n  color: #272727 !important;\n}\n\n::ng-deep.mat-form-field-underline {\n  /*change color of underline*/\n  background-color: #272727 !important;\n}\n\n::ng-deep.mat-form-field-ripple {\n  /*change color of underline when focused*/\n  background-color: #272727 !important;\n}\n\n::ng-deep.mat-form-field-label {\n  color: #272727 !important;\n}\n\n::ng-deep.mat-tab-label {\n  color: #272727 !important;\n  font-family: \"Darker Grotesque\", sans-serif;\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2psZ2FsbGFyZG92L0RvY3VtZW50cy9UcmFiYWpvcy9HUlVQTyAzNzUvVElFTkRBIE1BU0NPVEFTL2RlcGxveUFuaW1hbGlhL3B1bnRvVmVudGFNYXNjb3Rhcy9zcmMvYXBwL2FjY2Vzb3MvYWNjZXNvcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWNjZXNvcy9hY2Nlc29zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FER0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDQUY7O0FESUE7RUFDRSx3QkFBQTtFQUNBLHlCQUFBO0FDREY7O0FESUM7RUFDQyw0QkFBQTtFQUNBLG9DQUFBO0FDREY7O0FESUE7RUFDQyx5Q0FBQTtFQUNBLG9DQUFBO0FDREQ7O0FESUE7RUFDRSx5QkFBQTtBQ0RGOztBREtBO0VBQ0UseUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2FjY2Vzb3MvYWNjZXNvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkUHJpbmNpcGFse1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYmQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi8vTE9OR0lUVURFUyBERSBMQSBUQUJMQSwgRVZJVEEgUVVFIFNFIERFU0JPUkRFTiBMT1MgREFUT1MgREUgTEEgVEFCTEFcbi50YWJsYUVsYXN0aWNhe1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAzMCU7XG4gIG1heC1oZWlnaHQ6IDQ1JTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLy9JQ09OTyBMVVBBIERFIElOUFVUIEJVU0NBUlxuLmx1cGF7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMyNzI3Mjc7XG4gIG1hcmdpbjogMTBweCAwcHggMHB4IDEwcHg7XG59XG5cbi8vU09CUkVFU0NSSUJJUiBFTCBURU1BIERFIEFOR1VMQVIgTUFURVJJQUwgUEFSQSBFTCBJTlBVVCBERSBCVVNDQVI6XG46Om5nLWRlZXAgLm1hdC1mb2N1c2VkIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwqL1xuICBjb2xvcjogIzI3MjcyNyAhaW1wb3J0YW50O1xuIH1cblxuIDo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzI3ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xuIGJhY2tncm91bmQtY29sb3I6ICMyNzI3MjcgIWltcG9ydGFudDs7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1sYWJlbHtcbiAgY29sb3I6ICMyNzI3MjcgIWltcG9ydGFudDtcbn1cblxuLy9TT0JSRUVTQ1JJQklSIFRBQiBBTkdVTEFSIE1BVEVSSUFMXG46Om5nLWRlZXAubWF0LXRhYi1sYWJlbHsgLy9mdWVudGUgZGUgY2FiZWNlcmFzIGRlIHRhYlxuICBjb2xvcjogIzI3MjcyNyAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogJ0RhcmtlciBHcm90ZXNxdWUnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIycHg7XG59XG4iLCIuY2FyZFByaW5jaXBhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBiZDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4udGFibGFFbGFzdGljYSB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDMwJTtcbiAgbWF4LWhlaWdodDogNDUlO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4ubHVwYSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMyNzI3Mjc7XG4gIG1hcmdpbjogMTBweCAwcHggMHB4IDEwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvY3VzZWQge1xuICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXG4gIGNvbG9yOiAjMjcyNzI3ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzI3ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjcyNyAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogIzI3MjcyNyAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LXRhYi1sYWJlbCB7XG4gIGNvbG9yOiAjMjcyNzI3ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIkRhcmtlciBHcm90ZXNxdWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/accesos/accesos.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/accesos/accesos.component.ts ***!
    \**********************************************/

  /*! exports provided: AccesosComponent */

  /***/
  function srcAppAccesosAccesosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccesosComponent", function () {
      return AccesosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _login_jwt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../login-jwt.service */
    "./src/app/login-jwt.service.ts");

    var AccesosComponent =
    /*#__PURE__*/
    function () {
      function AccesosComponent(API, guardian) {
        _classCallCheck(this, AccesosComponent);

        this.API = API;
        this.guardian = guardian;
        this.displayedColumns = ['idAcceso', 'fechaAcceso', 'accionAcceso', 'nombreUsuario'];
      } //LISTAR ACCESOS


      _createClass(AccesosComponent, [{
        key: "listarAccesos",
        value: function listarAccesos() {
          var _this = this;

          this.API.mostrarAccesos().subscribe(function (success) {
            _this.dsAccesos = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](success.respuesta);
            _this.dsAccesos.paginator = _this.paginator;
          }, function (error) {
            console.log("hubo un problema", error);
          });
        } //FUNCIONALIDAD FILTRAR

      }, {
        key: "filtrarRegistros",
        value: function filtrarRegistros(filterValue) {
          this.dsAccesos.filter = filterValue.trim().toLowerCase(); //si se usa el modulo tab de transacciones, entonces arroja los resultados buscados en la primer pagina: (if reducido)

          this.dsAccesos.paginator ? this.dsAccesos.paginator.firstPage() : null;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.listarAccesos();
        }
      }]);

      return AccesosComponent;
    }();

    AccesosComponent.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"]
      }, {
        type: _login_jwt_service__WEBPACK_IMPORTED_MODULE_5__["LoginJwtService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: true
    })], AccesosComponent.prototype, "paginator", void 0);
    AccesosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-accesos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./accesos.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/accesos/accesos.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./accesos.component.scss */
      "./src/app/accesos/accesos.component.scss")).default]
    })], AccesosComponent);
    /***/
  },

  /***/
  "./src/app/api.service.ts":
  /*!********************************!*\
    !*** ./src/app/api.service.ts ***!
    \********************************/

  /*! exports provided: APIService */

  /***/
  function srcAppApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APIService", function () {
      return APIService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var APIService =
    /*#__PURE__*/
    function () {
      function APIService(http) {
        _classCallCheck(this, APIService);

        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json',
          'Accept': 'application/json' //acepta el cuerpo de la peticion JSON

        }); //console.log("tkn en cabecera ::::> ",localStorage.getItem('token'))
      } //WS PARA ENTIDAD ACCESOS


      _createClass(APIService, [{
        key: "mostrarAccesos",
        value: function mostrarAccesos() {
          return this.http.get('/accesosWS/listarAccesos', {
            headers: this.headers
          });
        }
      }, {
        key: "aniadirAcceso",
        value: function aniadirAcceso(accionAcceso, idUsuario) {
          return this.http.post('/accesosWS/agregarAcceso', {
            accionAcceso: accionAcceso,
            idUsuario: idUsuario
          }, {
            headers: this.headers
          });
        } //WS PARA ENTIDAD BITACORA ACCESOS

      }, {
        key: "mostrarAlmacenes",
        value: function mostrarAlmacenes() {
          return this.http.get('/almacenesWS/listarAlmacenes', {
            headers: this.headers
          });
        }
      }, {
        key: "aniadirAlmacen",
        value: function aniadirAlmacen(idAlmacen, estadoAlmacen, paisAlmacen, direccionAlmacen, referenciaAlmacen, telefonoAlmacen) {
          return this.http.post('/almacenesWS/agregarAlmacen', {
            idAlmacen: idAlmacen,
            estadoAlmacen: estadoAlmacen,
            paisAlmacen: paisAlmacen,
            direccionAlmacen: direccionAlmacen,
            referenciaAlmacen: referenciaAlmacen,
            telefonoAlmacen: telefonoAlmacen
          }, {
            headers: this.headers
          });
        }
      }, {
        key: "actualizarAlmacen",
        value: function actualizarAlmacen(idAlmacen, estadoAlmacen, paisAlmacen, direccionAlmacen, referenciaAlmacen, telefonoAlmacen) {
          return this.http.put("/almacenesWS/actualizarAlmacen/".concat(idAlmacen), {
            idAlmacen: idAlmacen,
            estadoAlmacen: estadoAlmacen,
            paisAlmacen: paisAlmacen,
            direccionAlmacen: direccionAlmacen,
            referenciaAlmacen: referenciaAlmacen,
            telefonoAlmacen: telefonoAlmacen
          }, {
            headers: this.headers
          });
        }
      }, {
        key: "borrarAlmacen",
        value: function borrarAlmacen(idAlmacen) {
          return this.http.delete("/almacenesWS/eliminarAlmacen/".concat(idAlmacen), {
            headers: this.headers
          });
        } //WS PARA ENTIDAD CATEGORIAS

      }, {
        key: "mostrarCategorias",
        value: function mostrarCategorias() {
          return this.http.get('/categoriasWS/listarCategorias', {
            headers: this.headers
          });
        }
      }, {
        key: "aniadirCategoria",
        value: function aniadirCategoria(nombreCategoria, subCategoria, descripcionCategoria) {
          return this.http.post('/categoriasWS/agregarCategoria', {
            nombreCategoria: nombreCategoria,
            subCategoria: subCategoria,
            descripcionCategoria: descripcionCategoria
          }, {
            headers: this.headers
          });
        }
      }, {
        key: "actualizarCategoria",
        value: function actualizarCategoria(idCategoria, nombreCategoria, subCategoria, descripcionCategoria) {
          return this.http.put("/categoriasWS/actualizarCategoria/".concat(idCategoria), {
            nombreCategoria: nombreCategoria,
            subCategoria: subCategoria,
            descripcionCategoria: descripcionCategoria
          }, {
            headers: this.headers
          });
        }
      }, {
        key: "borrarCategoria",
        value: function borrarCategoria(idCategoria) {
          return this.http.delete("/categoriasWS/eliminarCategoria/".concat(idCategoria), {
            headers: this.headers
          });
        } //WS PARA ENTIDAD CLIENTES

      }, {
        key: "mostrarClientes",
        value: function mostrarClientes() {
          return this.http.get('/clientesWS/listarClientes', {
            headers: this.headers
          });
        }
      }, {
        key: "mostrarDetalleCliente",
        value: function mostrarDetalleCliente(idCliente) {
          return this.http.get("/clientesWS/listarDetalleCliente/".concat(idCliente), {
            headers: this.headers
          });
        }
      }, {
        key: "aniadirCliente",
        value: function aniadirCliente(nombreCliente, apellidoPaternoCliente, apellidoMaternoCliente, ciudadCliente, estadoCliente, paisCliente, direccionCliente, coloniaCliente, cpCliente, telefonoCliente, emailCliente, idTipoCliente) {
          return this.http.post('/clientesWS/agregarCliente', {
            nombreCliente: nombreCliente,
            apellidoPaternoCliente: apellidoPaternoCliente,
            apellidoMaternoCliente: apellidoMaternoCliente,
            ciudadCliente: ciudadCliente,
            estadoCliente: estadoCliente,
            paisCliente: paisCliente,
            direccionCliente: direccionCliente,
            coloniaCliente: coloniaCliente,
            cpCliente: cpCliente,
            telefonoCliente: telefonoCliente,
            emailCliente: emailCliente,
            idTipoCliente: idTipoCliente
          }, {
            headers: this.headers
          });
        }
      }, {
        key: "actualizarCliente",
        value: function actualizarCliente(idCliente, nombreCliente, apellidoPaternoCliente, apellidoMaternoCliente, ciudadCliente, estadoCliente, paisCliente, direccionCliente, coloniaCliente, cpCliente, telefonoCliente, emailCliente, idTipoCliente) {
          var contraseniaCliente = null,
              puntuajeCliente = 0; //idea tienda online.

          return this.http.put("/clientesWS/actualizarCliente/".concat(idCliente), {
            nombreCliente: nombreCliente,
            apellidoPaternoCliente: apellidoPaternoCliente,
            apellidoMaternoCliente: apellidoMaternoCliente,
            ciudadCliente: ciudadCliente,
            estadoCliente: estadoCliente,
            paisCliente: paisCliente,
            direccionCliente: direccionCliente,
            coloniaCliente: coloniaCliente,
            cpCliente: cpCliente,
            telefonoCliente: telefonoCliente,
            emailCliente: emailCliente,
            contraseniaCliente: contraseniaCliente,
            puntuajeCliente: puntuajeCliente,
            idTipoCliente: idTipoCliente
          }, {
            headers: this.headers
          });
        }
      }, {
        key: "borrarCliente",
        value: function borrarCliente(idCliente) {
          return this.http.delete("/clientesWS/eliminarCliente/".concat(idCliente), {
            headers: this.headers
          });
        } //WS ENTIDADES COMPRA/VENTAS

      }, {
        key: "mostrarCompras",
        value: function mostrarCompras() {
          return this.http.get('/comprasWS/listarCompras', {
            headers: this.headers
          });
        }
      }, {
        key: "mostrarUltimaCompra",
        value: function mostrarUltimaCompra() {
          return this.http.get('/comprasWS/listarUltimaCompra', {
            headers: this.headers
          });
        }
      }, {
        key: "mostrarDetalleCompra",
        value: function mostrarDetalleCompra(idCompra) {
          return this.http.get("/comprasWS/listarDetalleCompra/".concat(idCompra), {
            headers: this.headers
          });
        }
      }, {
        key: "aniadirCompra",
        value: function aniadirCompra(idUsuario, idProveedor, montoCompra, productos) {
          return this.http.post('/comprasWS/agregarCompra', {
            idUsuario: idUsuario,
            idProveedor: idProveedor,
            montoCompra: montoCompra,
            productos: productos
          }, {
            headers: this.headers
          });
        }
      }, {
        key: "mostrarTransacciones",
        value: function mostrarTransacciones() {
          return this.http.get('/transaccionesWS/listarTransacciones', {
            headers: this.headers
          });
        }
      }, {
        key: "mostrarUltimaTransaccion",
        value: function mostrarUltimaTransaccion() {
          return this.http.get('/transaccionesWS/listarUltimaTransaccion', {
            headers: this.headers
          });
        }
      }, {
        key: "mostrarDetalleTransaccion",
        value: function mostrarDetalleTransaccion(idTransaccion) {
          return this.http.get("/transaccionesWS/listarDetalleTransaccion/".concat(idTransaccion), {
            headers: this.headers
          });
        }
      }, {
        key: "aniadirTransaccion",
        value: function aniadirTransaccion(idCliente, idVendedor, pagoTransaccion, productos, tiposDePagos) {
          console.log("en el servicio: ", pagoTransaccion, "\n", productos, "\n", tiposDePagos);
          return this.http.post('/transaccionesWS/agregarTransaccion', {
            idCliente: idCliente,
            idVendedor: idVendedor,
            pagoTransaccion: pagoTransaccion,
            productos: productos,
            tiposDePagos: tiposDePagos
          }, {
            headers: this.headers
          });
        } //WS PARA ENTIDAD COMPENSACIONES

      }, {
        key: "mostrarCompensaciones",
        value: function mostrarCompensaciones() {
          return this.http.get('/compensacionesWS/listarCompensaciones', {
            headers: this.headers
          });
        }
      }, {
        key: "aniadirCompensacion",
        value: function aniadirCompensacion(tipoCompensacion, descripcionCompensacion) {
          return this.http.post('/compensacionesWS/agregarCompensacion', {
            tipoCompensacion: tipoCompensacion,
            descripcionCompensacion: descripcionCompensacion
          }, {
            headers: this.headers
          });
        }
      }, {
        key: "actualizarCompensacion",
        value: function actualizarCompensacion(idCompensacion, tipoCompensacion, descripcionCompensacion) {
          return this.http.put("/compensacionesWS/actualizarCompensacion/".concat(idCompensacion), {
            tipoCompensacion: tipoCompensacion,
            descripcionCompensacion: descripcionCompensacion
          }, {
            headers: this.headers
          });
        }
      }, {
        key: "borrarCompensacion",
        value: function borrarCompensacion(idCompensacion) {
          return this.http.delete("/compensacionesWS/eliminarCompensacion/".concat(idCompensacion), {
            headers: this.headers
          });
        } //WS ENTIDAD DEVOLUCION

      }, {
        key: "mostrarDevoluciones",
        value: function mostrarDevoluciones() {
          return this.http.get('/devolucionesWS/listarDevoluciones', {
            headers: this.headers
          });
        }
      }, {
        key: "mostrarDetalleDevolucion",
        value: function mostrarDetalleDevolucion(idDevolucion) {
          return this.http.get("/devolucionesWS/listarDetalleDevolucion/".concat(idDevolucion), {
            headers: this.headers
          });
        }
      }, {
        key: "aniadirDevolucion",
        value: function aniadirDevolucion(motivoDevolucion, idCliente, idTipoProblema, idProducto, idCompensacion, idTransaccion) {
          return this.http.post('/devolucionesWS/agregarDevolucion', {
            motivoDevolucion: motivoDevolucion,
            idCliente: idCliente,
            idTipoProblema: idTipoProblema,
            idProducto: idProducto,
            idCompensacion: idCompensacion,
            idTransaccion: idTransaccion
          }, {
            headers: this.headers
          });
        } //WS ENTIDAD ENVIO

      }, {
        key: "mostrarEnvios",
        value: function mostrarEnvios() {
          return this.http.get('/enviosWS/listarEnvios', {
            headers: this.headers
          });
        }
      }, {
        key: "aniadirEnvio",
        value: function aniadirEnvio(ciudadEnvio, estadoEnvio, paisEnvio, observacionesEnvio, idTransaccion, idMedioEntrega) {
          return this.http.post('/enviosWS/agregarEnvio', {
            ciudadEnvio: ciudadEnvio,
            estadoEnvio: estadoEnvio,
            paisEnvio: paisEnvio,
            observacionesEnvio: observacionesEnvio,
            idTransaccion: idTransaccion,
            idMedioEntrega: idMedioEntrega
          }, {
            headers: this.headers
          });
        }
      }, {
        key: "borrarEnvio",
        value: function borrarEnvio(idEnvio) {
          return this.http.delete("/enviosWS/agregarEnvio/".concat(idEnvio), {
            headers: this.headers
          });
        } //WS PARA PRODUCTOS

      }, {
        key: "mostrarProductos",
        value: function mostrarProductos() {
          return this.http.get('/productosWS/listarProductos', {
            headers: this.headers
          });
        }
      }, {
        key: "mostrarDetalleProducto",
        value: function mostrarDetalleProducto(idProducto) {
          return this.http.get("/productosWS/listarDetalleProducto/".concat(idProducto), {
            headers: this.headers
          });
        }
      }, {
        key: "aniadirProducto",
        value: function aniadirProducto(nombreProducto, detalleProducto, contenidoProducto, fechaCaducidadProducto, paisOrigenProducto, stockProducto, precioUnitarioProducto, precioCompraProducto, idCategoria, idAlmacen) {
          return this.http.post('/productosWS/agregarProducto', {
            nombreProducto: nombreProducto,
            detalleProducto: detalleProducto,
            contenidoProducto: contenidoProducto,
            fechaCaducidadProducto: fechaCaducidadProducto,
            paisOrigenProducto: paisOrigenProducto,
            stockProducto: stockProducto,
            precioUnitarioProducto: precioUnitarioProducto,
            precioCompraProducto: precioCompraProducto,
            idCategoria: idCategoria,
            idAlmacen: idAlmacen
          }, {
            headers: this.headers
          });
        }
      }, {
        key: "actualizarProducto",
        value: function actualizarProducto(idProducto, nombreProducto, detalleProducto, contenidoProducto, fechaCaducidadProducto, paisOrigenProducto, stockProducto, precioUnitarioProducto, precioCompraProducto, idCategoria, idAlmacen) {
          return this.http.put("/productosWS/actualizarProducto/".concat(idProducto), {
            nombreProducto: nombreProducto,
            detalleProducto: detalleProducto,
            contenidoProducto: contenidoProducto,
            fechaCaducidadProducto: fechaCaducidadProducto,
            paisOrigenProducto: paisOrigenProducto,
            stockProducto: stockProducto,
            precioUnitarioProducto: precioUnitarioProducto,
            precioCompraProducto: precioCompraProducto,
            idCategoria: idCategoria,
            idAlmacen: idAlmacen
          }, {
            headers: this.headers
          });
        }
      }, {
        key: "borrarProducto",
        value: function borrarProducto(idProducto) {
          return this.http.delete("/productosWS/eliminarProducto/".concat(idProducto), {
            headers: this.headers
          });
        }
      }, {
        key: "mostrarViabilidadProductos",
        value: function mostrarViabilidadProductos(fechaInicio, fechaFinal) {
          return this.http.get("/popularidadProductosWS/listarPopularidadProductos/".concat(fechaInicio, "/").concat(fechaFinal), {
            headers: this.headers
          });
        } //WS PARA ENTIDAD PROVEEDORES

      }, {
        key: "mostrarProveedores",
        value: function mostrarProveedores() {
          return this.http.get('/proveedoresWS/listarProveedores', {
            headers: this.headers
          });
        }
      }, {
        key: "mostrarDetalleProveedor",
        value: function mostrarDetalleProveedor(idProveedor) {
          return this.http.get("/proveedoresWS/listarDetalleProveedor/".concat(idProveedor), {
            headers: this.headers
          });
        }
      }, {
        key: "aniadirProveedor",
        value: function aniadirProveedor(nombreProveedor, ciudadProveedor, estadoProveedor, paisProveedor, direccionProveedor, telefonoProveedor, emailProveedor, descripcionProveedor) {
          return this.http.post('/proveedoresWS/agregarProveedor', {
            nombreProveedor: nombreProveedor,
            ciudadProveedor: ciudadProveedor,
            estadoProveedor: estadoProveedor,
            paisProveedor: paisProveedor,
            direccionProveedor: direccionProveedor,
            telefonoProveedor: telefonoProveedor,
            emailProveedor: emailProveedor,
            descripcionProveedor: descripcionProveedor
          }, {
            headers: this.headers
          });
        }
      }, {
        key: "actualizarProveedor",
        value: function actualizarProveedor(idProveedor, nombreProveedor, ciudadProveedor, estadoProveedor, paisProveedor, direccionProveedor, telefonoProveedor, emailProveedor, descripcionProveedor) {
          return this.http.put("/proveedoresWS/actualizarProveedor/".concat(idProveedor), {
            nombreProveedor: nombreProveedor,
            ciudadProveedor: ciudadProveedor,
            estadoProveedor: estadoProveedor,
            paisProveedor: paisProveedor,
            direccionProveedor: direccionProveedor,
            telefonoProveedor: telefonoProveedor,
            emailProveedor: emailProveedor,
            descripcionProveedor: descripcionProveedor
          }, {
            headers: this.headers
          });
        }
      }, {
        key: "borrarProveedor",
        value: function borrarProveedor(idProveedor) {
          return this.http.delete("/proveedoresWS/eliminarProveedor/".concat(idProveedor), {
            headers: this.headers
          });
        } //WS PARA REPORTES ECONOMICOS

      }, {
        key: "mostrarReporte",
        value: function mostrarReporte(fechaInicio, fechaFinal) {
          return this.http.get("/reportesEconomicosWS/listarReportesEconomicos/".concat(fechaInicio, "/").concat(fechaFinal), {
            headers: this.headers
          });
        } //WS PARA TIPOS DE CLIENTES

      }, {
        key: "mostrarTiposDeClientes",
        value: function mostrarTiposDeClientes() {
          return this.http.get('/tiposClientesWS/listarTiposClientes', {
            headers: this.headers
          });
        }
      }, {
        key: "aniadirTipoDeClientes",
        value: function aniadirTipoDeClientes(tipoCliente, descripcionTipoCliente) {
          return this.http.post('/tiposClientesWS/agregarTipoCliente', {
            tipoCliente: tipoCliente,
            descripcionTipoCliente: descripcionTipoCliente
          }, {
            headers: this.headers
          });
        }
      }, {
        key: "actualizarTipoDeClientes",
        value: function actualizarTipoDeClientes(idTipoCliente, tipoCliente, descripcionTipoCliente) {
          return this.http.put("/tiposClientesWS/actualizarTipoCliente/".concat(idTipoCliente), {
            idTipoCliente: idTipoCliente,
            tipoCliente: tipoCliente,
            descripcionTipoCliente: descripcionTipoCliente
          }, {
            headers: this.headers
          });
        }
      }, {
        key: "borrarTipoDeClientes",
        value: function borrarTipoDeClientes(idTipoCliente) {
          return this.http.delete("/tiposClientesWS/eliminarTipoCliente/".concat(idTipoCliente), {
            headers: this.headers
          });
        } //WS PARA TIPOS DE PAGOS

      }, {
        key: "mostrarTiposDePagos",
        value: function mostrarTiposDePagos() {
          return this.http.get('/tiposPagosWS/listarTiposPagos', {
            headers: this.headers
          });
        }
      }, {
        key: "buscarTiposDePagosPorID",
        value: function buscarTiposDePagosPorID(idTipoPago) {
          return this.http.get("/tiposPagosWS/buscarTipoPagoPorID/".concat(idTipoPago), {
            headers: this.headers
          });
        }
      }, {
        key: "aniadirTipoDePago",
        value: function aniadirTipoDePago(tipoPago, viaTipoPago, descripcionTipoPago) {
          return this.http.post('/tiposPagosWS/agregarTipoPago', {
            tipoPago: tipoPago,
            viaTipoPago: viaTipoPago,
            descripcionTipoPago: descripcionTipoPago
          }, {
            headers: this.headers
          });
        }
      }, {
        key: "actualizarTipoDePago",
        value: function actualizarTipoDePago(idTipoPago, tipoPago, viaTipoPago, descripcionTipoPago) {
          return this.http.put("/tiposPagosWS/actualizarTipoPago/".concat(idTipoPago), {
            idTipoPago: idTipoPago,
            tipoPago: tipoPago,
            viaTipoPago: viaTipoPago,
            descripcionTipoPago: descripcionTipoPago
          }, {
            headers: this.headers
          });
        }
      }, {
        key: "borrarTipoDePago",
        value: function borrarTipoDePago(idTipoPago) {
          return this.http.delete("/tiposPagosWS/eliminarTipoPago/".concat(idTipoPago), {
            headers: this.headers
          });
        } //WS PARA TIPOS DE PROBLEMAS

      }, {
        key: "mostrarTiposDeProblemas",
        value: function mostrarTiposDeProblemas() {
          return this.http.get('/tiposProblemasWS/listarTiposProblemas', {
            headers: this.headers
          });
        }
      }, {
        key: "aniadirTipoDeProblema",
        value: function aniadirTipoDeProblema(tipoProblema) {
          return this.http.post('/tiposProblemasWS/agregarTipoProblema', {
            tipoProblema: tipoProblema
          }, {
            headers: this.headers
          });
        }
      }, {
        key: "actualizarTipoDeProblema",
        value: function actualizarTipoDeProblema(idTipoProblema, tipoProblema) {
          return this.http.put("/tiposProblemasWS/actualizarTipoProblema/".concat(idTipoProblema), {
            tipoProblema: tipoProblema
          }, {
            headers: this.headers
          });
        }
      }, {
        key: "borrarTipoDeProblema",
        value: function borrarTipoDeProblema(idTipoProblema) {
          return this.http.delete("/tiposProblemasWS/eliminarTipoProblema/".concat(idTipoProblema), {
            headers: this.headers
          });
        } //WS PARA TIPOS DE USUARIOS

      }, {
        key: "mostrarTiposDeUsuarios",
        value: function mostrarTiposDeUsuarios() {
          return this.http.get('/tiposUsuariosWS/listarTiposUsuarios', {
            headers: this.headers
          });
        }
      }, {
        key: "aniadirTipoDeUsuario",
        value: function aniadirTipoDeUsuario(tipoUsuario, descripcionTipoUsuario) {
          return this.http.post('/tiposUsuariosWS/agregarTipoUsuario', {
            tipoUsuario: tipoUsuario,
            descripcionTipoUsuario: descripcionTipoUsuario
          }, {
            headers: this.headers
          });
        }
      }, {
        key: "actualizarTipoDeUsuario",
        value: function actualizarTipoDeUsuario(idTipoUsuario, tipoUsuario, descripcionTipoUsuario) {
          return this.http.put("/tiposUsuariosWS/actualizarTipoUsuario/".concat(idTipoUsuario), {
            tipoUsuario: tipoUsuario,
            descripcionTipoUsuario: descripcionTipoUsuario
          }, {
            headers: this.headers
          });
        }
      }, {
        key: "borrarTipoDeUsuario",
        value: function borrarTipoDeUsuario(idTipoUsuario) {
          return this.http.delete("/tiposUsuariosWS/eliminarTipoUsuario/".concat(idTipoUsuario), {
            headers: this.headers
          });
        } //WS PARA ENTIDAD USUARIOS

      }, {
        key: "mostrarUsuarios",
        value: function mostrarUsuarios() {
          return this.http.get('/usuariosWS/listarUsuarios', {
            headers: this.headers
          });
        }
      }, {
        key: "mostrarDetalleUsuario",
        value: function mostrarDetalleUsuario(idUsuario) {
          return this.http.get("/usuariosWS/listarDetalleUsuario/".concat(idUsuario), {
            headers: this.headers
          });
        }
      }, {
        key: "aniadirUsuario",
        value: function aniadirUsuario(nombreUsuario, emailUsuario, contraseniaUsuario, idVendedor, idTipoUsuario) {
          return this.http.post('/usuariosWS/agregarUsuario', {
            nombreUsuario: nombreUsuario,
            emailUsuario: emailUsuario,
            contraseniaUsuario: contraseniaUsuario,
            idVendedor: idVendedor,
            idTipoUsuario: idTipoUsuario
          }, {
            headers: this.headers
          });
        }
      }, {
        key: "actualizarUsuario",
        value: function actualizarUsuario(idUsuario, nombreUsuario, emailUsuario, contraseniaUsuario, idVendedor, idTipoUsuario) {
          return this.http.put("/usuariosWS/actualizarUsuario/".concat(idUsuario), {
            idUsuario: idUsuario,
            nombreUsuario: nombreUsuario,
            emailUsuario: emailUsuario,
            contraseniaUsuario: contraseniaUsuario,
            idVendedor: idVendedor,
            idTipoUsuario: idTipoUsuario
          }, {
            headers: this.headers
          });
        }
      }, {
        key: "borrarUsuario",
        value: function borrarUsuario(idUsuario) {
          return this.http.delete("/usuariosWS/eliminarUsuario/".concat(idUsuario), {
            headers: this.headers
          });
        }
      }, {
        key: "buscarUsuarioPorNombre",
        value: function buscarUsuarioPorNombre(nombreUsuario) {
          return this.http.get("/usuariosWS/buscarUsuarioPorNombre/".concat(nombreUsuario), {
            headers: this.headers
          });
        } //WS PARA ENTIDAD VENDEDORES

      }, {
        key: "mostrarVendedores",
        value: function mostrarVendedores() {
          return this.http.get('/vendedoresWS/listarVendedores', {
            headers: this.headers
          });
        }
      }, {
        key: "mostrarDetalleVendedor",
        value: function mostrarDetalleVendedor(idVendedor) {
          return this.http.get("/vendedoresWS/listarDetalleVendedor/".concat(idVendedor), {
            headers: this.headers
          });
        }
      }, {
        key: "aniadirVendedor",
        value: function aniadirVendedor(nombreVendedor, ciudadVendedor, estadoVendedor, direccionVendedor, telefonoVendedor, emailVendedor, fechaNacimientoVendedor, rfcVendedor, numeroSeguroSocialVendedor, antiguedadVendedor) {
          return this.http.post('/vendedoresWS/agregarVendedor', {
            nombreVendedor: nombreVendedor,
            ciudadVendedor: ciudadVendedor,
            estadoVendedor: estadoVendedor,
            direccionVendedor: direccionVendedor,
            telefonoVendedor: telefonoVendedor,
            emailVendedor: emailVendedor,
            fechaNacimientoVendedor: fechaNacimientoVendedor,
            rfcVendedor: rfcVendedor,
            numeroSeguroSocialVendedor: numeroSeguroSocialVendedor,
            antiguedadVendedor: antiguedadVendedor
          }, {
            headers: this.headers
          });
        }
      }, {
        key: "actualizarVendedor",
        value: function actualizarVendedor(idVendedor, nombreVendedor, ciudadVendedor, estadoVendedor, direccionVendedor, telefonoVendedor, emailVendedor, fechaNacimientoVendedor, rfcVendedor, numeroSeguroSocialVendedor, antiguedadVendedor) {
          return this.http.put("/vendedoresWS/actualizarVendedor/".concat(idVendedor), {
            nombreVendedor: nombreVendedor,
            ciudadVendedor: ciudadVendedor,
            estadoVendedor: estadoVendedor,
            direccionVendedor: direccionVendedor,
            telefonoVendedor: telefonoVendedor,
            emailVendedor: emailVendedor,
            fechaNacimientoVendedor: fechaNacimientoVendedor,
            rfcVendedor: rfcVendedor,
            numeroSeguroSocialVendedor: numeroSeguroSocialVendedor,
            antiguedadVendedor: antiguedadVendedor
          }, {
            headers: this.headers
          });
        }
      }, {
        key: "borrarVendedor",
        value: function borrarVendedor(idVendedor) {
          return this.http.delete("/vendedoresWS/eliminarVendedor/".concat(idVendedor), {
            headers: this.headers
          });
        }
      }, {
        key: "buscarVendedorPorNombre",
        value: function buscarVendedorPorNombre(nombreVendedor) {
          return this.http.get("/vendedores/buscarVendedorPorNombre/".concat(nombreVendedor), {
            headers: this.headers
          });
        }
      }, {
        key: "mostrarRendimientoVendedores",
        value: function mostrarRendimientoVendedores(fechaInicio, fechaFinal) {
          return this.http.get("/rendimientoVendedoresWS/listarVentasVendedores/".concat(fechaInicio, "/").concat(fechaFinal), {
            headers: this.headers
          });
        }
      }]);

      return APIService;
    }();

    APIService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    APIService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], APIService);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _transacciones_transacciones_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./transacciones/transacciones.component */
    "./src/app/transacciones/transacciones.component.ts");
    /* harmony import */


    var _facturas_facturas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./facturas/facturas.component */
    "./src/app/facturas/facturas.component.ts");
    /* harmony import */


    var _devoluciones_devoluciones_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./devoluciones/devoluciones.component */
    "./src/app/devoluciones/devoluciones.component.ts");
    /* harmony import */


    var _productos_productos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./productos/productos.component */
    "./src/app/productos/productos.component.ts");
    /* harmony import */


    var _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./usuarios/usuarios.component */
    "./src/app/usuarios/usuarios.component.ts");
    /* harmony import */


    var _herramientas_herramientas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./herramientas/herramientas.component */
    "./src/app/herramientas/herramientas.component.ts");
    /* harmony import */


    var _recuperar_contrasenia_recuperar_contrasenia_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./recuperar-contrasenia/recuperar-contrasenia.component */
    "./src/app/recuperar-contrasenia/recuperar-contrasenia.component.ts");

    var routes = [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    }, {
      path: 'recuperarContrasenia',
      component: _recuperar_contrasenia_recuperar_contrasenia_component__WEBPACK_IMPORTED_MODULE_12__["RecuperarContraseniaComponent"]
    }, {
      path: 'transacciones',
      component: _transacciones_transacciones_component__WEBPACK_IMPORTED_MODULE_6__["TransaccionesComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'facturas',
      component: _facturas_facturas_component__WEBPACK_IMPORTED_MODULE_7__["FacturasComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'productos',
      component: _productos_productos_component__WEBPACK_IMPORTED_MODULE_9__["ProductosComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'devoluciones',
      component: _devoluciones_devoluciones_component__WEBPACK_IMPORTED_MODULE_8__["DevolucionesComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'usuarios',
      component: _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_10__["UsuariosComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'herramientas',
      component: _herramientas_herramientas_component__WEBPACK_IMPORTED_MODULE_11__["HerramientasComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: 'login',
      pathMatch: 'full'
    } //EN CASO DE QUE EL USUARIO SE INVENTE UNA RUTA
    ];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*INICIO ESTILOS PARA SIDE MENU GLOBAL*/\nbody {\n  transition: background-color 0.5s;\n}\n.sidenav {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 20;\n  top: 0;\n  left: 0;\n  background-color: #012440;\n  overflow-x: hidden;\n  transition: 0.5s;\n  padding-top: 60px;\n}\n.sidenav a {\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #818181;\n  display: block;\n  transition: 0.3s;\n}\n.sidenav a:hover {\n  color: #f1f1f1;\n}\n.sidenav .closebtn {\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-size: 36px;\n  margin-left: 50px;\n}\n#main {\n  transition: margin-left 0.5s;\n  padding: 16px;\n}\n@media screen and (max-height: 450px) {\n  .sidenav {\n    padding-top: 15px;\n  }\n\n  .sidenav a {\n    font-size: 18px;\n  }\n}\n.hamburguesa {\n  background: #0479d9;\n  color: white;\n  border-radius: 4px;\n  width: 70px;\n  height: 46px;\n  text-align: center;\n  box-shadow: #00000057 0px 1px 1px 1px;\n}\n.logoMenu {\n  text-align: center;\n  background: url('tapizLogin2.jpg');\n  background-repeat: no-repeat;\n  background-attachment: scroll;\n  background-position: center;\n  background-size: cover;\n  margin-top: -61px;\n}\n.toolbar {\n  position: fixed;\n  background: #012440;\n  color: white;\n  z-index: 10;\n}\n/*FIN ESTILOS PARA SIDE MENU GLOBAL*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2psZ2FsbGFyZG92L0RvY3VtZW50cy9UcmFiYWpvcy9HUlVQTyAzNzUvVElFTkRBIE1BU0NPVEFTL2RlcGxveUFuaW1hbGlhL3B1bnRvVmVudGFNYXNjb3Rhcy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVDQUFBO0FBQ0E7RUFDRSxpQ0FBQTtBQ0NGO0FERUE7RUFDRSxZQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGO0FERUE7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBREVBO0VBQ0UsY0FBQTtBQ0NGO0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0Y7QURFQTtFQUNFLDRCQUFBO0VBQ0EsYUFBQTtBQ0NGO0FERUE7RUFDRTtJQUFVLGlCQUFBO0VDRVY7O0VEREE7SUFBWSxlQUFBO0VDS1o7QUFDRjtBREhBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7QUNLRjtBREhBO0VBQ0Usa0JBQUE7RUFFQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNLRjtBREhBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNNRjtBREZBLG9DQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypJTklDSU8gRVNUSUxPUyBQQVJBIFNJREUgTUVOVSBHTE9CQUwqL1xuYm9keSB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjVzO1xufVxuXG4uc2lkZW5hdiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMjQ0MDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBwYWRkaW5nLXRvcDogNjBweDtcbn1cblxuLnNpZGVuYXYgYSB7XG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDMycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzgxODE4MTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5zaWRlbmF2IGE6aG92ZXIge1xuICBjb2xvcjogI2YxZjFmMTtcbn1cblxuLnNpZGVuYXYgLmNsb3NlYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDM2cHg7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4jbWFpbiB7XG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IC41cztcbiAgcGFkZGluZzogMTZweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XG4gIC5zaWRlbmF2IHtwYWRkaW5nLXRvcDogMTVweDt9XG4gIC5zaWRlbmF2IGEge2ZvbnQtc2l6ZTogMThweDt9XG59XG4vL0lDT05PIERFIExBIEhBTUJVUkdVRVNBXG4uaGFtYnVyZ3Vlc2F7XG4gIGJhY2tncm91bmQ6IzA0NzlkOTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDQ2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogIzAwMDAwMDU3IDBweCAxcHggMXB4IDFweDtcbn1cbi5sb2dvTWVudXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvL2JhY2tncm91bmQtY29sb3I6I2Y0ZjRmNDtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMvaW1nL3RhcGl6TG9naW4yLmpwZycpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOztcbiAgbWFyZ2luLXRvcDogLTYxcHg7XG59XG4udG9vbGJhcntcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiMwMTI0NDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMTA7XG59XG5cblxuLypGSU4gRVNUSUxPUyBQQVJBIFNJREUgTUVOVSBHTE9CQUwqL1xuIiwiLypJTklDSU8gRVNUSUxPUyBQQVJBIFNJREUgTUVOVSBHTE9CQUwqL1xuYm9keSB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cztcbn1cblxuLnNpZGVuYXYge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDIwO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTI0NDA7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgcGFkZGluZy10b3A6IDYwcHg7XG59XG5cbi5zaWRlbmF2IGEge1xuICBwYWRkaW5nOiA4cHggOHB4IDhweCAzMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICM4MTgxODE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uc2lkZW5hdiBhOmhvdmVyIHtcbiAgY29sb3I6ICNmMWYxZjE7XG59XG5cbi5zaWRlbmF2IC5jbG9zZWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuI21haW4ge1xuICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjVzO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcbiAgLnNpZGVuYXYge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICB9XG5cbiAgLnNpZGVuYXYgYSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG4uaGFtYnVyZ3Vlc2Ege1xuICBiYWNrZ3JvdW5kOiAjMDQ3OWQ5O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNDZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAjMDAwMDAwNTcgMHB4IDFweCAxcHggMXB4O1xufVxuXG4ubG9nb01lbnUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uL2Fzc2V0cy9pbWcvdGFwaXpMb2dpbjIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtYXJnaW4tdG9wOiAtNjFweDtcbn1cblxuLnRvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6ICMwMTI0NDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMTA7XG59XG5cbi8qRklOIEVTVElMT1MgUEFSQSBTSURFIE1FTlUgR0xPQkFMKi8iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _funcionamiento_bitacora_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./funcionamiento-bitacora.service */
    "./src/app/funcionamiento-bitacora.service.ts");

    var AppComponent_1;

    var AppComponent = AppComponent_1 =
    /*#__PURE__*/
    function () {
      function AppComponent(router, bitacora) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.bitacora = bitacora;
        this.title = 'puntoVentaMascotas';
        this.etiquetaNivelUsuario = "";
      }

      _createClass(AppComponent, [{
        key: "openNav",
        value: function openNav() {
          if (document.getElementById("contenido").style.pointerEvents == "none") {
            this.closeNav();
            return;
          }

          document.getElementById("mySidenav").style.width = "250px";
          document.getElementById("main").style.marginLeft = "250px";
          document.getElementById("contenido").style.opacity = "0.4";
          document.getElementById("contenido").style.pointerEvents = "none";
        }
      }, {
        key: "closeNav",
        value: function closeNav() {
          document.getElementById("mySidenav").style.width = "0";
          document.getElementById("main").style.marginLeft = "0";
          document.getElementById("contenido").style.opacity = 'initial';
          document.getElementById("contenido").style.pointerEvents = "unset";
        }
        /*INICIO REDIRECCION DE RUTAS*/

      }, {
        key: "irTransacciones",
        value: function irTransacciones() {
          this.router.navigate(['/transacciones']);
          this.closeNav();
        }
      }, {
        key: "irOperaciones",
        value: function irOperaciones() {
          this.router.navigate(['/facturas']);
          this.closeNav();
        }
      }, {
        key: "irProductos",
        value: function irProductos() {
          this.router.navigate(['/productos']);
          this.closeNav();
        }
      }, {
        key: "irDevoluciones",
        value: function irDevoluciones() {
          this.router.navigate(['/devoluciones']);
          this.closeNav();
        }
      }, {
        key: "irUsuarios",
        value: function irUsuarios() {
          this.router.navigate(['/usuarios']);
          this.closeNav();
        }
      }, {
        key: "irReportes",
        value: function irReportes() {
          this.router.navigate(['/herramientas']);
          this.closeNav();
        }
        /*FIN REDIRECCION DE RUTAS*/
        //BLOQUEAMOS ALGUNOS MODULOS PARA EVITAR ACCESO PERMITIDO A VENDEDORES: ESTE METODO SE EJECUTA AL LOGUEARSE PARA PINTAR EL MENU

      }, {
        key: "denegarVistaMenu",
        //ESTE METODO SE EJECUTA CADA QUE SE INICIA LA APLICACION POR PRIMERA VEZ
        value: function denegarVistaMenu() {
          console.log("creando menu...");
          var memoriaNavegador = "";
          memoriaNavegador = localStorage.getItem('nivel'); //este if es para cuando inicia la aplicacion, oculta el menu.

          if (memoriaNavegador == null) {
            document.getElementById("idToolbar").style.display = "none";
            return;
          } //por si el vendedor no cierra la sesion y vuelve a abrir el modulo de operaciones no muestre los demas modulos en el menu


          AppComponent_1.denegarModulosVendedores(); //si nada de lo anterior se cumple pues muestra el menu como tal

          document.getElementById("etiquetaTransacciones").style.display = "block";
          document.getElementById("etiquetaProductos").style.display = "block";
          document.getElementById("etiquetaDevoluciones").style.display = "block";
          document.getElementById("etiquetaUsuarios").style.display = "block";
          document.getElementById("etiquetaReportes").style.display = "block";
        } //BOTON PARA SALIR DE LA APP DESDE EL MENU

      }, {
        key: "logout",
        value: function logout() {
          document.getElementById("idToolbar").style.display = "none";
          var accion = "salida";
          this.bitacora.registrarAcceso(accion, localStorage.getItem('usuario'));
          this.etiquetaNivelUsuario = "";
          setTimeout(function () {
            /*lo meto en un setTimeout para que se alcance a registrar la salida del usuario antes
            de que reedirija al login*/
            localStorage.clear();
            location.reload(); //para que se puedan invocar los guards

            console.log("sesion cerrada"); //this.router.navigate(['/login']); no necesito reedirigir pues al no exitir el token los guards redirigen automaticamente
          }, 3000);
          this.closeNav();
        } //CAMBIAR ETIQUETA NIVEL CUANDO EL USUARIO SE HA LOGUEADO

      }, {
        key: "cambiarEtiqueta",
        value: function cambiarEtiqueta() {
          //      this.etiquetaNivelUsuario = localStorage.getItem('nivel');

          /*para que esto pudiera funcionar tendria que pasar los valores por referencia, asi se modificaria la variable global*/
          this.etiquetaNivelUsuario = "";
          this.etiquetaNivelUsuario = "prueba"; //console.log("etiqueta cambiada a :",this.etiquetaNivelUsuario)
        } //METODO TEMPORAL PARA VERIFICAR EL NIVEL DE USUARIO EN SESION

      }, {
        key: "verificarNivelUsuario",
        value: function verificarNivelUsuario() {
          var _this2 = this;

          var variableControl = 0;
          var nivelUser = setInterval(function () {
            _this2.etiquetaNivelUsuario = localStorage.getItem('nivel'); //console.log("nivel user: ",this.etiquetaNivelUsuario);

            variableControl++;

            if (variableControl == 600) {
              clearInterval(nivelUser);
            }
          }, 2000);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          setTimeout(function () {
            /*lo meto en un settimeout para que deje
            cargar primero el login (en su caso) y alcance a borrar el ls
            y no muestre el menu por detectar valores en el ls
            esto esta planeado para la primera vez que la app es lanzada
            o en el caso de cerra la app si borrar el ls*/
            _this3.denegarVistaMenu();
          }, 500); //añade en la etiqueta el nivel UNICAMENTE cuando inicia la app o refresca... solucion temporal

          this.verificarNivelUsuario();
        }
      }], [{
        key: "denegarModulosVendedores",
        value: function denegarModulosVendedores() {
          setTimeout(function () {
            //esperamos a que se alcance a plasmar en el localstorage el nivel de acceso
            var memoriaNavegador = "";
            memoriaNavegador = localStorage.getItem('nivel');

            if (memoriaNavegador == 'vendedor') {
              console.log("vendedor en sesion");
              document.getElementById("main").style.display = "block";
              document.getElementById("idToolbar").style.display = "flex";
              document.getElementById("etiquetaTransacciones").style.display = "none";
              document.getElementById("etiquetaProductos").style.display = "none";
              document.getElementById("etiquetaDevoluciones").style.display = "none";
              document.getElementById("etiquetaUsuarios").style.display = "none";
              document.getElementById("etiquetaReportes").style.display = "none";
            } else {
              document.getElementById("main").style.display = "block";
              document.getElementById("idToolbar").style.display = "flex";
            }
          }, 1000);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _funcionamiento_bitacora_service__WEBPACK_IMPORTED_MODULE_3__["FuncionamientoBitacoraService"]
      }];
    };

    AppComponent = AppComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _proveedores_proveedores_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./proveedores/proveedores.component */
    "./src/app/proveedores/proveedores.component.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/esm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _transacciones_transacciones_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./transacciones/transacciones.component */
    "./src/app/transacciones/transacciones.component.ts");
    /* harmony import */


    var _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./clientes/clientes.component */
    "./src/app/clientes/clientes.component.ts");
    /* harmony import */


    var _facturas_facturas_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./facturas/facturas.component */
    "./src/app/facturas/facturas.component.ts");
    /* harmony import */


    var _productos_productos_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./productos/productos.component */
    "./src/app/productos/productos.component.ts");
    /* harmony import */


    var _devoluciones_devoluciones_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./devoluciones/devoluciones.component */
    "./src/app/devoluciones/devoluciones.component.ts");
    /* harmony import */


    var _categorias_categorias_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./categorias/categorias.component */
    "./src/app/categorias/categorias.component.ts");
    /* harmony import */


    var _vendedores_vendedores_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./vendedores/vendedores.component */
    "./src/app/vendedores/vendedores.component.ts");
    /* harmony import */


    var _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./usuarios/usuarios.component */
    "./src/app/usuarios/usuarios.component.ts");
    /* harmony import */


    var _accesos_accesos_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./accesos/accesos.component */
    "./src/app/accesos/accesos.component.ts");
    /* harmony import */


    var _herramientas_herramientas_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./herramientas/herramientas.component */
    "./src/app/herramientas/herramientas.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _compras_compras_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./compras/compras.component */
    "./src/app/compras/compras.component.ts");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _generar_pdfs_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./generar-pdfs.service */
    "./src/app/generar-pdfs.service.ts");
    /* harmony import */


    var _recuperar_contrasenia_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./recuperar-contrasenia.service */
    "./src/app/recuperar-contrasenia.service.ts");
    /* harmony import */


    var _confirmar_eliminar_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./confirmar-eliminar.service */
    "./src/app/confirmar-eliminar.service.ts");
    /* harmony import */


    var _configuracion_configuracion_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./configuracion/configuracion.component */
    "./src/app/configuracion/configuracion.component.ts");
    /* harmony import */


    var _recuperar_contrasenia_recuperar_contrasenia_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./recuperar-contrasenia/recuperar-contrasenia.component */
    "./src/app/recuperar-contrasenia/recuperar-contrasenia.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _proveedores_proveedores_component__WEBPACK_IMPORTED_MODULE_20__["ProveedoresComponent"], _transacciones_transacciones_component__WEBPACK_IMPORTED_MODULE_31__["TransaccionesComponent"], _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_32__["ClientesComponent"], _facturas_facturas_component__WEBPACK_IMPORTED_MODULE_33__["FacturasComponent"], _productos_productos_component__WEBPACK_IMPORTED_MODULE_34__["ProductosComponent"], _devoluciones_devoluciones_component__WEBPACK_IMPORTED_MODULE_35__["DevolucionesComponent"], _categorias_categorias_component__WEBPACK_IMPORTED_MODULE_36__["CategoriasComponent"], _vendedores_vendedores_component__WEBPACK_IMPORTED_MODULE_37__["VendedoresComponent"], _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_38__["UsuariosComponent"], _accesos_accesos_component__WEBPACK_IMPORTED_MODULE_39__["AccesosComponent"], _herramientas_herramientas_component__WEBPACK_IMPORTED_MODULE_40__["HerramientasComponent"], _compras_compras_component__WEBPACK_IMPORTED_MODULE_42__["ComprasComponent"], _configuracion_configuracion_component__WEBPACK_IMPORTED_MODULE_47__["ConfiguracionComponent"], _recuperar_contrasenia_recuperar_contrasenia_component__WEBPACK_IMPORTED_MODULE_48__["RecuperarContraseniaComponent"]],
      imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__["MatDatepickerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_41__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__["MatTooltipModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__["MatPaginatorModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_25__["MatBottomSheetModule"]],
      entryComponents: [],
      providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_43__["AuthGuard"], {
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MAT_DATE_LOCALE"],
        useValue: 'es-MX'
      }, _generar_pdfs_service__WEBPACK_IMPORTED_MODULE_44__["GenerarPDFsService"], _recuperar_contrasenia_service__WEBPACK_IMPORTED_MODULE_45__["RecuperarContraseniaService"], _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _confirmar_eliminar_service__WEBPACK_IMPORTED_MODULE_46__["ConfirmarEliminarService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth.guard.ts":
  /*!*******************************!*\
    !*** ./src/app/auth.guard.ts ***!
    \*******************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (window.localStorage.getItem("token")) {
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/categorias/categorias.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/categorias/categorias.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCategoriasCategoriasComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cardPrincipal {\n  background-color: #000000bd;\n  border-radius: 6px;\n  width: 80%;\n  height: auto;\n  margin: 0 auto;\n  transition: 0.5s;\n}\n\n.tablaElastica {\n  overflow-y: auto;\n  min-height: auto;\n  max-height: 45%;\n  transition: 0.5s;\n}\n\n.popover {\n  z-index: 1005 !important;\n}\n\n::ng-deep.mat-tab-body-content {\n  padding: 2px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2psZ2FsbGFyZG92L0RvY3VtZW50cy9UcmFiYWpvcy9HUlVQTyAzNzUvVElFTkRBIE1BU0NPVEFTL2RlcGxveUFuaW1hbGlhL3B1bnRvVmVudGFNYXNjb3Rhcy9zcmMvYXBwL2NhdGVnb3JpYXMvY2F0ZWdvcmlhcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2F0ZWdvcmlhcy9jYXRlZ29yaWFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQUY7O0FESUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDREY7O0FES0E7RUFDRSx3QkFBQTtBQ0ZGOztBRE1BO0VBQ0UsdUJBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpYXMvY2F0ZWdvcmlhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQ0FSRCBET05ERSBFU1RBTiBMQSBNQVlPUklBIERFIENPTVBPTkVOVEVTIChDT01PIExBIFRBQkxBKVxuLmNhcmRQcmluY2lwYWx7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBiZDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4vL0xPTkdJVFVERVMgREUgTEEgVEFCTEEsIEVWSVRBIFFVRSBTRSBERVNCT1JERU4gTE9TIERBVE9TIERFIExBIFRBQkxBXG4udGFibGFFbGFzdGljYXtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWluLWhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogNDUlO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4vL1BBUkEgUE9QT1ZFUiBERSBNQVMgSU5GT1JNQUNJT05cbi5wb3BvdmVye1xuICB6LWluZGV4OiAxMDA1IWltcG9ydGFudDtcbn1cblxuLy9Bw5FBRElSIFBBRERJTkcgQUwgVEFCIEVOIEdFTkVSQUwgUEFSQSBRVUVTRSBBTENBTkNFIEEgRElTVElOR1VJUiBMQSBTT01CUkEgSU5GRVJJT1IgREUgTE9TIENBUkRTXG46Om5nLWRlZXAubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xuICBwYWRkaW5nOiAycHghaW1wb3J0YW50O1xufVxuIiwiLmNhcmRQcmluY2lwYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYmQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLnRhYmxhRWxhc3RpY2Ege1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtaW4taGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA0NSU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5wb3BvdmVyIHtcbiAgei1pbmRleDogMTAwNSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xuICBwYWRkaW5nOiAycHggIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/categorias/categorias.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/categorias/categorias.component.ts ***!
    \****************************************************/

  /*! exports provided: CategoriasComponent */

  /***/
  function srcAppCategoriasCategoriasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriasComponent", function () {
      return CategoriasComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _login_jwt_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../login-jwt.service */
    "./src/app/login-jwt.service.ts");
    /* harmony import */


    var _confirmar_eliminar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../confirmar-eliminar.service */
    "./src/app/confirmar-eliminar.service.ts"); //LIBRERIA BOOTSTRAP

    /*ESTA FUNCION UNICAMENTE ES PARA CAMBIAR EL "OF" DEL PAGINADOR A "DE" Y NO SE VEA FEO MEZCLADO EL ESPAÑOL CON INGLES,
    ESTAMOS CONFIGURANDO LOS RANGOS DEL PAGINADOR - CORTESÍA: https://stackblitz.com/edit/angular-5mgfxh-6mbpdq */


    var etiquetaRango = function etiquetaRango(page, pageSize, length) {
      if (length == 0 || pageSize == 0) {
        //caso paginador vacio
        return "0 de ".concat(length);
      }

      length = Math.max(length, 0);
      var startIndex = page * pageSize; //indice de inicio

      /*if resumido; si el indice de inicio excede la logitud de la lista (6 - 5 de 6 por ejemplo) se veria: 6 - 10 de 6 gracias al
      [pageSizeOptions] lo cual es incorrecto pues solo hay 6 elementos en tal rango ENTONCES mejor coloca como indice final el indice inicial
      quedaria 6 - 6 de 6 que es lo correcto).*/

      var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
      return "".concat(startIndex + 1, " - ").concat(endIndex, " de ").concat(length);
    };

    var CategoriasComponent =
    /*#__PURE__*/
    function () {
      function CategoriasComponent(guardian, modalService, formBuilder, API, eliminacionSegura) {
        _classCallCheck(this, CategoriasComponent);

        this.guardian = guardian;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.API = API;
        this.eliminacionSegura = eliminacionSegura;
        this.formValid = false; //propiedades para tabla y paginador de la misma

        this.displayedColumnsCategorias = ['idCategoria', 'nombreCategoria', 'subCategoria', 'descripcionCategoria', 'acciones'];
        this.titulo = "";
        this.frmCategorias = this.formBuilder.group({
          idCategoria: [""],
          nombreCategoria: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          subCategoria: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          descripcionCategoria: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        this.tablaConDatos = false;
      } //FUNCION PARA ABRIR EL MODAL, CONFIGURACIONES DE BOOTSTRAP


      _createClass(CategoriasComponent, [{
        key: "openAltaCategoria",
        value: function openAltaCategoria(contentCategoria) {
          this.modal = this.modalService.open(contentCategoria, {
            ariaLabelledBy: 'modal-basic-title'
          });
          this.titulo = "Agregar Categoria";
        } //ABRIR MODAL CON LOS DATOS A EDITAR

      }, {
        key: "openEditarCategoria",
        value: function openEditarCategoria(contentCategoria, idCategoria, nombreCategoria, subCategoria, descripcionCategoria) {
          console.log("id: ", idCategoria, " nombreCategoria: ", nombreCategoria, " subcategorias: ", subCategoria, " descripcion: ", descripcionCategoria);
          this.modal = this.modalService.open(contentCategoria, {
            ariaLabelledBy: 'modal-basic-title'
          });
          this.titulo = "Editar Categoria"; //pintando los valores en el modal listos para editarlos

          this.frmCategorias.controls['idCategoria'].setValue(idCategoria); // si checamos el DOM veremos que el input es hide para evitar su modificacion posteriormente

          this.frmCategorias.controls['nombreCategoria'].setValue(nombreCategoria);
          this.frmCategorias.controls['subCategoria'].setValue(subCategoria);
          this.frmCategorias.controls['descripcionCategoria'].setValue(descripcionCategoria);
        } //LISTAR CATEGORIAS

      }, {
        key: "listarCategorias",
        value: function listarCategorias() {
          var _this4 = this;

          this.API.mostrarCategorias().subscribe(function (success) {
            //manipulamos esta variable para dar uso a un ngif que se uso en la vista en un label
            if (success.estatus > 0) {
              _this4.tablaConDatos = true;
            }

            if (success.estatus == 0) {
              _this4.tablaConDatos = false;
            }

            _this4.dsCategorias = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](success.respuesta);
            _this4.dsCategorias.paginator = _this4.paginator;
            _this4.dsCategorias.paginator._intl.itemsPerPageLabel = 'items por pagina';
            _this4.dsCategorias.paginator._intl.getRangeLabel = etiquetaRango;
          }, function (error) {
            console.log("hubo un problema: ", error);
          });
        } //AGREGAR CATEGORIA Y ACTUALIZAR CATEGORIA: EVITO CREAR 2 MODALES

      }, {
        key: "ejecutarPeticion",
        value: function ejecutarPeticion() {
          var _this5 = this;

          var idCategoriaForm = this.frmCategorias.get('idCategoria').value;
          var nombreCategoriaForm = this.frmCategorias.get('nombreCategoria').value;
          var subCategoriaForm = this.frmCategorias.get('subCategoria').value;
          var descripcionCategoriaForm = this.frmCategorias.get('descripcionCategoria').value;

          if (this.titulo == "Agregar Categoria") {
            this.API.aniadirCategoria(nombreCategoriaForm, subCategoriaForm, descripcionCategoriaForm).subscribe(function (success) {
              alert(JSON.stringify(success.respuesta));

              _this5.listarCategorias();

              _this5.frmCategorias.reset();

              _this5.modal.close();
            }, function (error) {
              console.log("hubo un problema: ", error);
            });
          }

          if (this.titulo == "Editar Categoria") {
            this.API.actualizarCategoria(idCategoriaForm, nombreCategoriaForm, subCategoriaForm, descripcionCategoriaForm).subscribe(function (success) {
              alert(JSON.stringify(success.respuesta));

              _this5.listarCategorias();

              _this5.frmCategorias.reset();

              _this5.modal.close();
            }, function (error) {
              console.log("hubo un problema: ", error);
            });
          }
        } //ELIMINAR CATEGORIA

      }, {
        key: "eliminarCategoria",
        value: function eliminarCategoria(idCategoria) {
          var _this6 = this;

          var respuesta = false;
          respuesta = this.eliminacionSegura.confirmarEliminacion();

          if (respuesta == true) {
            this.API.borrarCategoria(idCategoria).subscribe(function (success) {
              alert(success.respuesta); //document.getElementById('tablaVaciaProductos').style.display = "block";

              _this6.listarCategorias();
            }, function (error) {
              console.log("hubo un problema: ", error);
            });
          } else {
            console.log("eliminacion cancelada");
          }
        } //FUNCIONALIDAD FILTRAR

      }, {
        key: "filtrarRegistros",
        value: function filtrarRegistros(filterValue) {
          this.dsCategorias.filter = filterValue.trim().toLowerCase(); //si se usa el modulo tab de transacciones, entonces arroja los resultados buscados en la primer pagina: (if reducido)

          this.dsCategorias.paginator ? this.dsCategorias.paginator.firstPage() : null;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.listarCategorias();
        }
      }]);

      return CategoriasComponent;
    }();

    CategoriasComponent.ctorParameters = function () {
      return [{
        type: _login_jwt_service__WEBPACK_IMPORTED_MODULE_7__["LoginJwtService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_6__["APIService"]
      }, {
        type: _confirmar_eliminar_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmarEliminarService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: true
    })], CategoriasComponent.prototype, "paginator", void 0);
    CategoriasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categorias',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./categorias.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/categorias.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./categorias.component.scss */
      "./src/app/categorias/categorias.component.scss")).default]
    })], CategoriasComponent);
    /***/
  },

  /***/
  "./src/app/clientes/clientes.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/clientes/clientes.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppClientesClientesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cardPrincipal {\n  background-color: #000000bd;\n  border-radius: 6px;\n  width: 80%;\n  height: auto;\n  margin: 0 auto;\n  transition: 0.5s;\n}\n\n.btnEjecutar {\n  color: #191818;\n  border: solid 1px #676767;\n  margin: auto;\n  width: 65%;\n  font-size: 20px;\n}\n\n.tablaElastica {\n  overflow-y: auto;\n  min-height: auto;\n  max-height: 45%;\n  transition: 0.5s;\n}\n\n.inputModal {\n  width: 50% !important;\n  font-size: 20px !important;\n}\n\n::ng-deep.mat-tab-body-content {\n  padding: 2px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2psZ2FsbGFyZG92L0RvY3VtZW50cy9UcmFiYWpvcy9HUlVQTyAzNzUvVElFTkRBIE1BU0NPVEFTL2RlcGxveUFuaW1hbGlhL3B1bnRvVmVudGFNYXNjb3Rhcy9zcmMvYXBwL2NsaWVudGVzL2NsaWVudGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbGllbnRlcy9jbGllbnRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0FGOztBRElBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDREo7O0FES0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRkY7O0FETUE7RUFDRSxxQkFBQTtFQUNBLDBCQUFBO0FDSEY7O0FEUUE7RUFDRSx1QkFBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50ZXMvY2xpZW50ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL0NBUkQgRE9OREUgRVNUQU4gTEEgTUFZT1JJQSBERSBDT01QT05FTlRFUyAoQ09NTyBMQSBUQUJMQSlcbi5jYXJkUHJpbmNpcGFse1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYmQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLy9CVE4gUEFSQSBFSkVDVVRBUiBVTkEgUEVUSUNJT04gUE9TVCBPIFBVVCBERUwgTU9EQUxcbi5idG5FamVjdXRhcntcbiAgICBjb2xvcjogIzE5MTgxODtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjNjc2NzY3O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogNjUlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLy9MT05HSVRVREVTIERFIExBIFRBQkxBLCBFVklUQSBRVUUgU0UgREVTQk9SREVOIExPUyBEQVRPUyBERSBMQSBUQUJMQVxuLnRhYmxhRWxhc3RpY2F7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDQ1JTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLy9QQVJBIFBPUE9WRVIgREUgTUFTIElORk9STUFDSU9OXG4uaW5wdXRNb2RhbHtcbiAgd2lkdGg6IDUwJSFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjBweCFpbXBvcnRhbnQ7XG59XG5cbi8vU09CUkVFU0NSSUJJUiBFTCBURU1BIERFIEFOR1VMQVIgTUFURVJJQUwgUEFSQSBFTCBJTlBVVCBERSBCVVNDQVI6XG4vL0HDkUFESVIgUEFERElORyBBTCBUQUIgRU4gR0VORVJBTCBQQVJBIFFVRVNFIEFMQ0FOQ0UgQSBESVNUSU5HVUlSIExBIFNPTUJSQSBJTkZFUklPUiBERSBMT1MgQ0FSRFNcbjo6bmctZGVlcC5tYXQtdGFiLWJvZHktY29udGVudCB7XG4gIHBhZGRpbmc6IDJweCFpbXBvcnRhbnQ7XG59XG4iLCIuY2FyZFByaW5jaXBhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBiZDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uYnRuRWplY3V0YXIge1xuICBjb2xvcjogIzE5MTgxODtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzY3Njc2NztcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNjUlO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi50YWJsYUVsYXN0aWNhIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWluLWhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogNDUlO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uaW5wdXRNb2RhbCB7XG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtdGFiLWJvZHktY29udGVudCB7XG4gIHBhZGRpbmc6IDJweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/clientes/clientes.component.ts":
  /*!************************************************!*\
    !*** ./src/app/clientes/clientes.component.ts ***!
    \************************************************/

  /*! exports provided: ClientesComponent */

  /***/
  function srcAppClientesClientesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientesComponent", function () {
      return ClientesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _date_format_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../date-format.service */
    "./src/app/date-format.service.ts");
    /* harmony import */


    var _login_jwt_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../login-jwt.service */
    "./src/app/login-jwt.service.ts");
    /* harmony import */


    var _confirmar_eliminar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../confirmar-eliminar.service */
    "./src/app/confirmar-eliminar.service.ts");
    /* harmony import */


    var _generar_pdfs_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../generar-pdfs.service */
    "./src/app/generar-pdfs.service.ts"); //LIBRERIA BOOTSTRAP


    var etiquetaRango = function etiquetaRango(page, pageSize, length) {
      if (length == 0 || pageSize == 0) {
        //caso paginador vacio
        return "0 de ".concat(length);
      }

      length = Math.max(length, 0);
      var startIndex = page * pageSize; //indice de inicio

      /*if resumido (terneario); si el indice de inicio excede la logitud de la lista (6 - 5 de 6 por ejemplo) se veria: 6 - 10 de 6 gracias al
      [pageSizeOptions] lo cual es incorrecto pues solo hay 6 elementos en tal rango ENTONCES mejor coloca como indice final el indice inicial
      quedaria 6 - 6 de 6 que es lo correcto).*/

      var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
      return "".concat(startIndex + 1, " - ").concat(endIndex, " de ").concat(length);
    };

    var ClientesComponent =
    /*#__PURE__*/
    function () {
      function ClientesComponent(guardian, modalService, formBuilder, API, formateandoFecha, eliminacionSegura, PDF) {
        _classCallCheck(this, ClientesComponent);

        this.guardian = guardian;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.API = API;
        this.formateandoFecha = formateandoFecha;
        this.eliminacionSegura = eliminacionSegura;
        this.PDF = PDF;
        this.titulo = ""; //para el modal

        this.formValid = false;
        this.displayedColumnsClientes = ['idCliente', 'nombreCliente', 'apellidoPaternoCliente', 'ciudadCliente', 'estadoCliente', 'acciones'];
        this.tipoCliente = 3; //representa un cliente ordinario

        this.arregloTiposDeClientes = [];
        this.frmClientes = this.formBuilder.group({
          idCliente: [""],
          nombreCliente: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          apellidoPaternoCliente: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          apellidoMaternoCliente: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          ciudadCliente: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          estadoCliente: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          paisCliente: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          direccionCliente: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          coloniaCliente: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          cpCliente: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          telefonoCliente: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          emailCliente: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
      } //FUNCION PARA ABRIR EL MODAL, CONFIGURACIONES DE BOOTSTRAP


      _createClass(ClientesComponent, [{
        key: "openAlta",
        value: function openAlta(content) {
          this.modal = this.modalService.open(content, {
            size: 'lg'
          });
          this.titulo = "Agregar Cliente";
        } //------fin open--------------------------------------------------
        //ABRIR MODAL CON LOS DATOS A EDITAR

      }, {
        key: "openEditar",
        value: function openEditar(content, idCliente, nombreCliente, apellidoPaternoCliente, apellidoMaternoCliente, ciudadCliente, estadoCliente, paisCliente, direccionCliente, coloniaCliente, cpCliente, telefonoCliente, emailCliente) {
          this.modal = this.modalService.open(content, {
            size: 'lg'
          });
          this.titulo = "Editar Cliente"; //pintando los valores en el modal listos para editarlos

          this.frmClientes.controls['idCliente'].setValue(idCliente); // si checamos el DOM veremos que el input es hide para evitar su modificacion posteriormente

          this.frmClientes.controls['nombreCliente'].setValue(nombreCliente);
          this.frmClientes.controls['apellidoPaternoCliente'].setValue(apellidoPaternoCliente);
          this.frmClientes.controls['apellidoMaternoCliente'].setValue(apellidoMaternoCliente);
          this.frmClientes.controls['ciudadCliente'].setValue(ciudadCliente);
          this.frmClientes.controls['estadoCliente'].setValue(estadoCliente);
          this.frmClientes.controls['paisCliente'].setValue(paisCliente);
          this.frmClientes.controls['direccionCliente'].setValue(direccionCliente);
          this.frmClientes.controls['coloniaCliente'].setValue(coloniaCliente);
          this.frmClientes.controls['cpCliente'].setValue(cpCliente);
          this.frmClientes.controls['telefonoCliente'].setValue(telefonoCliente);
          this.frmClientes.controls['emailCliente'].setValue(emailCliente); //this.frmClientes.controls['contraseniaCliente'].setValue(contraseniaCliente);
        } //FUNCION PARA ABRIR EL MODAL DE INFORMACION CLIENTE, CONFIGURACIONES DE BOOTSTRAP

      }, {
        key: "openScrollableContentCliente",
        value: function openScrollableContentCliente(longContentCliente, idCliente) {
          this.modalService.open(longContentCliente, {
            scrollable: true
          });
          this.listarDetalleCliente(idCliente);
        } //LISTAR CLIENTES

      }, {
        key: "listarClientes",
        value: function listarClientes() {
          var _this7 = this;

          this.API.mostrarClientes().subscribe(function (success) {
            _this7.dsClientes = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](success.respuesta);
            _this7.dsClientes.paginator = _this7.paginator;
            _this7.paginator._intl.itemsPerPageLabel = "items por pagina";
            _this7.paginator._intl.getRangeLabel = etiquetaRango;
          }, function (error) {
            console.log("hubo un problema: ", error);
          });
        } //LISTAR DETALLES CLIENTES

      }, {
        key: "listarDetalleCliente",
        value: function listarDetalleCliente(idCliente) {
          var _this8 = this;

          this.API.mostrarDetalleCliente(idCliente).subscribe(function (success) {
            _this8.arregloDetalleCliente = success.respuesta;
          }, function (error) {
            console.log(error);
          });
        }
        /*LISTAR TIPOS DE CLIENTES PARA EL SELECT DEL FORMULARIO: IDEA TIENDA ONLINE
        public listarTiposDeClientes(){
          this.API.mostrarTiposDeClientes().subscribe(
            (success: any)=>{
              this.arregloTiposDeClientes = success.respuesta;
              console.log("listando tipos de clientes")
            },
            (error)=>{
              console.log("hubo un problema: ",error)
            }
          );
        }*/
        //AGREGAR CLIENTE Y ACTUALIZAR CLIENTE: EVITO CREAR 2 MODALES

      }, {
        key: "ejecutarPeticion",
        value: function ejecutarPeticion() {
          var _this9 = this;

          var idClienteForm = this.frmClientes.get('idCliente').value;
          var nombreClienteForm = this.frmClientes.get('nombreCliente').value;
          var apellidoPaternoClienteForm = this.frmClientes.get('apellidoPaternoCliente').value;
          var apellidoMaternoClienteForm = this.frmClientes.get('apellidoMaternoCliente').value;
          var ciudadClienteForm = this.frmClientes.get('ciudadCliente').value;
          var estadoClienteForm = this.frmClientes.get('estadoCliente').value;
          var paisClienteForm = this.frmClientes.get('paisCliente').value;
          var direccionClienteForm = this.frmClientes.get('direccionCliente').value;
          var coloniaClienteForm = this.frmClientes.get('coloniaCliente').value;
          var cpClienteForm = this.frmClientes.get('cpCliente').value;
          var telefonoClienteForm = this.frmClientes.get('telefonoCliente').value;
          var emailClienteForm = this.frmClientes.get('emailCliente').value; //let contraseniaClienteForm = this.frmClientes.get('contraseniaCliente').value;

          if (this.titulo == "Agregar Cliente") {
            this.API.aniadirCliente(nombreClienteForm, apellidoPaternoClienteForm, apellidoMaternoClienteForm, ciudadClienteForm, estadoClienteForm, paisClienteForm, direccionClienteForm, coloniaClienteForm, cpClienteForm, telefonoClienteForm, emailClienteForm, this.tipoCliente).subscribe(function (success) {
              alert(JSON.stringify(success.respuesta));

              _this9.listarClientes();

              _this9.frmClientes.reset();

              _this9.modal.close();
            }, function (error) {
              console.log("hubo un problema: ", error);
            });
          }

          if (this.titulo == "Editar Cliente") {
            this.API.actualizarCliente(idClienteForm, nombreClienteForm, apellidoPaternoClienteForm, apellidoMaternoClienteForm, ciudadClienteForm, estadoClienteForm, paisClienteForm, direccionClienteForm, coloniaClienteForm, cpClienteForm, telefonoClienteForm, emailClienteForm, this.tipoCliente).subscribe(function (success) {
              alert(JSON.stringify(success.respuesta));

              _this9.listarClientes();

              _this9.frmClientes.reset();

              _this9.modal.close();
            }, function (error) {
              console.log("hubo un problema: ", error);
            });
          }
        } //ELIMINAR CLIENTE

      }, {
        key: "eliminarCliente",
        value: function eliminarCliente(idCliente) {
          var _this10 = this;

          var respuesta = false;
          respuesta = this.eliminacionSegura.confirmarEliminacion();

          if (respuesta == true) {
            this.API.borrarCliente(idCliente).subscribe(function (success) {
              alert(success.respuesta);

              _this10.listarClientes();
            }, function (error) {
              console.log("hubo un problema: ", error);
            });
          } else {
            console.log("eliminacion cancelada");
          }
        } //FUNCIONALIDAD FILTRAR

      }, {
        key: "filtrarRegistros",
        value: function filtrarRegistros(filterValue) {
          this.dsClientes.filter = filterValue.trim().toLowerCase(); //si se usa el modulo tab de transacciones, entonces arroja los resultados buscados en la primer pagina: (if reducido)

          this.dsClientes.paginator ? this.dsClientes.paginator.firstPage() : null;
        } //INVOCANDO SERVICIO PARA GENERAR PDF

      }, {
        key: "generarPDF",
        value: function generarPDF(etiquetaPDF) {
          this.PDF.generarPDF(etiquetaPDF);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.listarClientes();
        }
      }]);

      return ClientesComponent;
    }();

    ClientesComponent.ctorParameters = function () {
      return [{
        type: _login_jwt_service__WEBPACK_IMPORTED_MODULE_8__["LoginJwtService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_6__["APIService"]
      }, {
        type: _date_format_service__WEBPACK_IMPORTED_MODULE_7__["DateFormatService"]
      }, {
        type: _confirmar_eliminar_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmarEliminarService"]
      }, {
        type: _generar_pdfs_service__WEBPACK_IMPORTED_MODULE_10__["GenerarPDFsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: true
    })], ClientesComponent.prototype, "paginator", void 0);
    ClientesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-clientes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./clientes.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/clientes.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./clientes.component.scss */
      "./src/app/clientes/clientes.component.scss")).default]
    })], ClientesComponent);
    /***/
  },

  /***/
  "./src/app/compras/compras.component.scss":
  /*!************************************************!*\
    !*** ./src/app/compras/compras.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComprasComprasComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cardInputs {\n  height: 99%;\n  width: 95%;\n  margin: auto;\n  display: inline-block;\n  margin-left: 10px;\n}\n\n.btncomprar {\n  width: 40%;\n  float: right;\n  margin-top: -50px;\n}\n\n.outputMonto {\n  width: 50%;\n  background: #f9f9f9;\n  border: none;\n}\n\n.btnAniadirEntidad {\n  color: white;\n  width: 23px !important;\n  height: 23px !important;\n  top: 5px;\n}\n\n.fuenteEncabezadosCentrada {\n  font-size: 27px;\n  text-align: center;\n}\n\n.bordeOutputs {\n  border: solid 1px #a5a39d;\n  border-radius: 6px;\n  margin: auto;\n  height: 80%;\n}\n\n.btnEliminarProductoInteresado {\n  border: none;\n  font-size: 16px;\n  background-color: transparent;\n}\n\n.listaEntidad {\n  max-height: 175px;\n  overflow-y: auto;\n  margin-bottom: 12px;\n  width: 100%;\n  min-height: 60%;\n  max-height: 63%;\n}\n\n.resultadoOperaciones {\n  float: right;\n  color: #2a2d3b;\n  margin-bottom: 0px;\n  font-size: 22px !important;\n}\n\n.labelOutput {\n  font-size: 24px;\n  margin-top: 25px;\n  width: 25%;\n}\n\n.nvaCompra {\n  font-size: 20px;\n  float: right;\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2psZ2FsbGFyZG92L0RvY3VtZW50cy9UcmFiYWpvcy9HUlVQTyAzNzUvVElFTkRBIE1BU0NPVEFTL2RlcGxveUFuaW1hbGlhL3B1bnRvVmVudGFNYXNjb3Rhcy9zcmMvYXBwL2NvbXByYXMvY29tcHJhcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcHJhcy9jb21wcmFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0FGOztBRElBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRE1BO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0hGOztBRE9BO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0FDSkY7O0FEUUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNMRjs7QURTQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ05GOztBRFdBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQ1JGOztBRFlBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDVEY7O0FEYUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUNWRjs7QURlQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNaRjs7QURnQkE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNiRiIsImZpbGUiOiJzcmMvYXBwL2NvbXByYXMvY29tcHJhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQ09OVEVOREVET1IgREUgTE9TIElOUFVUU1xuLmNhcmRJbnB1dHN7XG4gIGhlaWdodDogOTklO1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi8vQlROIFBBUkEgUkVBTElaQVIgVU5BIFZFTlRBXG4uYnRuY29tcHJhcntcbiAgd2lkdGg6IDQwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbn1cblxuXG4vL01PTlRPLCBRVUlUQVIgQk9SREUgQUwgSU5QVVQgUkVBRE9OTFkgRE9OREUgU0UgTVVFU1RSQSBFTCBNT05UT1xuLm91dHB1dE1vbnRve1xuICB3aWR0aDogNTAlO1xuICBiYWNrZ3JvdW5kOiNmOWY5Zjk7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLy9CVE4gUEFSQSBBw5FBRElSIFBST0RVQ1RPUyBBTCBDQVJSSVRPIChUQUJMQSBQUk9EVUNUT1MpXG4uYnRuQW5pYWRpckVudGlkYWR7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDIzcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyM3B4ICFpbXBvcnRhbnQ7XG4gIHRvcDogNXB4O1xufVxuXG4vL0ZVRU5URSBVU0FEQSBQQVJBIEVMIEVOQ0FCRVpBRE8gQVJSSUJBIERFIExBIFRBQkxBIFkgTElTVEEgREUgT1VUUFVUU1xuLmZ1ZW50ZUVuY2FiZXphZG9zQ2VudHJhZGF7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vL0JPUkRFIFBBUkEgR1JJRCBERSBPVVRQVVRTXG4uYm9yZGVPdXRwdXRze1xuICBib3JkZXI6IHNvbGlkIDFweCAjYTVhMzlkO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiA4MCU7XG5cbn1cblxuLy9CVE4gUEFSQSBFTElNSU5BUiBQUk9EVUNUT1MgREVMIENBUlJJVE8gKFRBQkxBIFBST0RVQ1RPUykgQkFTVVJFUk9cbi5idG5FbGltaW5hclByb2R1Y3RvSW50ZXJlc2Fkb3tcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6MTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbn1cblxuLy9FU1RJTE8gUEFSQSBMSVNUQSBERSBQUk9EVUNUT1MgWSBUSVBPUyBERSBQQUdPU1xuLmxpc3RhRW50aWRhZHtcbiAgbWF4LWhlaWdodDogMTc1cHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA2MCU7XG4gIG1heC1oZWlnaHQ6IDYzJTtcbn1cblxuLy9FU1RJTE8gUEFSQSBFVElRVUVUQVMgREUgTU9OVE8sQ0FNQklPLFBBR09cbi5yZXN1bHRhZG9PcGVyYWNpb25lc3tcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogIzJhMmQzYjtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmb250LXNpemU6IDIycHghaW1wb3J0YW50O1xufVxuXG5cbi8vTU9OVE8sIE1PRElGSUNBIEVMIExBQkVMIEVOIEdFTkVSQUxcbi5sYWJlbE91dHB1dHtcbiAgZm9udC1zaXplOjI0cHg7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIHdpZHRoOjI1JVxufVxuXG4vL0JPVE9OIE5VRVZBIENPTVBSQSAoTElNUElBUiBQQU5UQUxMQSlcbi5udmFDb21wcmF7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBkaXNwbGF5OiBub25lO1xufVxuIiwiLmNhcmRJbnB1dHMge1xuICBoZWlnaHQ6IDk5JTtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uYnRuY29tcHJhciB7XG4gIHdpZHRoOiA0MCU7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG59XG5cbi5vdXRwdXRNb250byB7XG4gIHdpZHRoOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmJ0bkFuaWFkaXJFbnRpZGFkIHtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMjNweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDIzcHggIWltcG9ydGFudDtcbiAgdG9wOiA1cHg7XG59XG5cbi5mdWVudGVFbmNhYmV6YWRvc0NlbnRyYWRhIHtcbiAgZm9udC1zaXplOiAyN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib3JkZU91dHB1dHMge1xuICBib3JkZXI6IHNvbGlkIDFweCAjYTVhMzlkO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiA4MCU7XG59XG5cbi5idG5FbGltaW5hclByb2R1Y3RvSW50ZXJlc2FkbyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmxpc3RhRW50aWRhZCB7XG4gIG1heC1oZWlnaHQ6IDE3NXB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNjAlO1xuICBtYXgtaGVpZ2h0OiA2MyU7XG59XG5cbi5yZXN1bHRhZG9PcGVyYWNpb25lcyB7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICMyYTJkM2I7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAyMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sYWJlbE91dHB1dCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLm52YUNvbXByYSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/compras/compras.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/compras/compras.component.ts ***!
    \**********************************************/

  /*! exports provided: ComprasComponent */

  /***/
  function srcAppComprasComprasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComprasComponent", function () {
      return ComprasComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _login_jwt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../login-jwt.service */
    "./src/app/login-jwt.service.ts");

    var ComprasComponent =
    /*#__PURE__*/
    function () {
      function ComprasComponent(guardian, formBuilder, API) {
        _classCallCheck(this, ComprasComponent);

        this.guardian = guardian;
        this.formBuilder = formBuilder;
        this.API = API;
        this.displayedColumns = ['idCompra', 'fechaCompra', 'numeroProductosEnCompra']; //columnas tabla transacciones

        this.displayedColumnsProductos = ['nombreProducto', 'precioUnitarioProducto', 'cantidadProducto', 'descartar']; //columnas tabla transacciones

        this.arregloProductosSelect = [];
        this.arregloProductosTabla = [];
        this.arregloUsuariosSelect = [];
        this.arregloProveedoresSelect = [];
        this.arregloCompras = [];
        this.montoAcumulado = 0;
        this.usuarioActual = 0;
        this.privilegios = false;
        this.frmCompra = this.formBuilder.group({
          idUsuario: localStorage.getItem("usuario"),
          idProveedor: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          idProducto: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          cantidadProducto: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }
      /*VALIDAMOS QUE SE PUEDAN INGRESAR UNICAMENTE PUROS NUMEROS EN LOS INPUTS, CORTESIA:
      https://stackblitz.com/edit/numeric-only?file=app%2Fapp.component.html*/


      _createClass(ComprasComponent, [{
        key: "soloNumeros",
        value: function soloNumeros(event) {
          //atrapamos la tecla ingresada en este if ternario
          var charCode = event.which ? event.which : event.keyCode;
          /*si se detecta un caracter especial (en ascii los caracteres especiales son menores a 48)
           o letras (en ascii las letras empiezan apartir del 57), del 31 al 48 en ascii tambien hay caracteres
           especiales, si las anteriores condiciones se cumplen no deja escribir en el input, en su defecto
           si acepta valores*/

          if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
          }

          return true;
        } //LLENA SELECT DE PRODUCTOS

      }, {
        key: "listarProductos",
        value: function listarProductos() {
          var _this11 = this;

          this.API.mostrarProductos().subscribe(function (success) {
            return _this11.arregloProductosSelect = success.respuesta;
          }, function (error) {
            console.log("algo ocurrio: ", error);
          });
        } //LLENA SELECT DE PROVEEDORES

      }, {
        key: "listarProveedores",
        value: function listarProveedores() {
          var _this12 = this;

          this.API.mostrarProveedores().subscribe(function (success) {
            return _this12.arregloProveedoresSelect = success.respuesta;
          }, function (error) {
            console.log("algo ocurrio: ", error);
          });
        } //LLENA EL INPUT DE USUARIO, ESTE ES EL DEL USUARIO EN SESIÓN

      }, {
        key: "mostrarUsuarioEnSesion",
        value: function mostrarUsuarioEnSesion() {
          var _this13 = this;

          this.API.buscarUsuarioPorNombre(localStorage.getItem("usuario")).subscribe(function (success) {
            _this13.usuarioActual = success.respuesta[0].idUsuario; //console.log("usuario en sesion : ", this.usuarioActual)
          }, function (error) {
            console.log(error);
          });
        } //LLENA SELECT DE USUARIOS

      }, {
        key: "listarUsuarios",
        value: function listarUsuarios() {
          var _this14 = this;

          this.API.mostrarUsuarios().subscribe(function (success) {
            return _this14.arregloUsuariosSelect = success.respuesta;
          }, function (error) {
            console.log("algo ocurrio: ", error);
          });
        } //TRASFIERE LOS PRODUCTOS DEL FORMULARIOS AL CARRITO

      }, {
        key: "transfiereProductos",
        value: function transfiereProductos() {
          var _this15 = this;

          var productoSeleccionado;
          var cantidadSeleccionada = 0;
          this.API.mostrarProductos().subscribe(function (success) {
            productoSeleccionado = _this15.frmCompra.get('idProducto').value;
            cantidadSeleccionada = _this15.frmCompra.get('cantidadProducto').value; //sumando monto cada que se agrega un producto

            _this15.montoAcumulado = _this15.montoAcumulado + productoSeleccionado.precioCompraProducto * cantidadSeleccionada; //verificamos si al querer dar de alta un producto no existe ya en el carrito (tabla de productos)

            if (_this15.arregloProductosTabla.length >= 1) {
              //console.log("posicion en arreglo: ",this.arregloProductosTabla[0].cantidadProducto);
              for (var i = 0; i < _this15.arregloProductosTabla.length; i++) {
                if (productoSeleccionado.idProducto == _this15.arregloProductosTabla[i].idProducto) {
                  _this15.arregloProductosTabla[i].cantidadProducto = _this15.arregloProductosTabla[i].cantidadProducto + cantidadSeleccionada;
                  _this15.dsProductos = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this15.arregloProductosTabla); //paso la info del arreglo al dataSource de la tabla para mostrarlos cada que se agregue un nuevo registro
                } else {
                  if (i == _this15.arregloProductosTabla.length - 1) {
                    _this15.arregloProductosTabla.push({
                      idProducto: productoSeleccionado.idProducto,
                      cantidadProducto: cantidadSeleccionada,
                      nombreProducto: productoSeleccionado.nombreProducto,
                      precioCompraProducto: productoSeleccionado.precioCompraProducto
                    });

                    _this15.dsProductos = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this15.arregloProductosTabla); //paso la info del arreglo al dataSource de la tabla para mostrarlos cada que se agregue un nuevo registro

                    break;
                  }
                }
              }
            } else {
              _this15.arregloProductosTabla.push({
                idProducto: productoSeleccionado.idProducto,
                cantidadProducto: cantidadSeleccionada,
                nombreProducto: productoSeleccionado.nombreProducto,
                precioCompraProducto: productoSeleccionado.precioCompraProducto
              });

              _this15.dsProductos = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this15.arregloProductosTabla); //paso la info del arreglo al dataSource de la tabla para mostrarlos cada que se agregue un nuevo registro

              document.getElementById('tablaVentaConcluidaVacia').style.display = "none";
            }
          }, function (error) {
            console.log("algo ocurrio", error);
          });
        } //ELIMINAR PRODUCTOS DE LA TABLA (CARRITO)

      }, {
        key: "eliminarProductosCarrito",
        value: function eliminarProductosCarrito(objetoProducto, indice) {
          var _this16 = this;

          console.log("producto a eliminar: ", objetoProducto); //console.log(this.arregloProductosTabla)

          this.arregloProductosTabla.splice(indice, 1);
          this.dsProductos = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.arregloProductosTabla); //paso la info del arreglo al dataSource de la tabla para mostrarlos cada que se agregue un nuevo registro
          //hacemos que la eliminacion de un producto afecte tambien al monto $

          this.API.mostrarProductos().subscribe(function (success) {
            _this16.montoAcumulado = _this16.montoAcumulado - objetoProducto.precioCompraProducto * objetoProducto.cantidadProducto;
          }, function (error) {
            console.log("algo ocurrio", error);
          });
        } //AGREGA UNA COMPRA

      }, {
        key: "agregarCompra",
        value: function agregarCompra() {
          //console.log("montoAcumulado")
          var idUsuarioForm = 0,
              idProveedorForm = 0,
              montoCompraForm = 0;
          var arregloProductosForm = [];
          idUsuarioForm = this.usuarioActual;
          idProveedorForm = this.frmCompra.get('idProveedor').value;
          montoCompraForm = this.montoAcumulado;
          arregloProductosForm = this.arregloProductosTabla;

          if (arregloProductosForm.length == 0) {
            alert("no olvides presionar boton de agregar productos \n");
            return;
          } //alert("cte: "+idClienteForm+" vdor: "+idVendedorForm+" pago: "+pagoTransaccionForm+" arrpdtos: "+JSON.stringify(arregloProductosForm)+" arrtipag: "+JSON.stringify(arregloTiposDePagosForm));


          this.API.aniadirCompra(idUsuarioForm, idProveedorForm, montoCompraForm, arregloProductosForm).subscribe(function (success) {
            if (success.estatus > 0) {
              alert(success.respuesta); //          this.listarUltimaCompra();

              document.getElementById('idComprar').style.pointerEvents = "none";
              document.getElementById('idLimpiarPantallaCompras').style.display = "block";
            } else if (success.estatus < 0) {
              alert(JSON.stringify(success.respuesta));
            } else {
              alert(JSON.stringify(success.respuesta));
            }
          }, function (error) {
            alert("algo anda mal | " + JSON.stringify(error));
          });
        } //MUESTRA LA ULTIMA TRANSACCION HECHA DESPUES DE QUE SE HACE UNA COMPRA

      }, {
        key: "listarUltimaCompra",
        value: function listarUltimaCompra() {
          var _this17 = this;

          this.API.mostrarUltimaCompra().subscribe(function (success) {
            //console.log("ultima compra: ",success.respuesta);
            var ultimaCompraRegistro = 0;
            ultimaCompraRegistro = success.respuesta[0].idCompra;

            _this17.API.mostrarDetalleCompra(ultimaCompraRegistro).subscribe(function (success) {
              var arregloTemporalProductos = [];
              var productos = [];
              document.getElementById('idTablaDetalles').style.display = "none";

              for (var i = 0; i < success.respuesta.length; i++) {
                //atrapamos cada uno de los productos en un array
                arregloTemporalProductos.push(success.respuesta[i].nombreProducto);
              }

              productos = arregloTemporalProductos; //arreglo de objetos listo para iterar

              _this17.arregloCompras = [{
                idCompra: success.respuesta[0].idCompra,
                montoCompra: success.respuesta[0].montoCompra,
                fechaCompra: success.respuesta[0].fechaCompra,
                nombreProveedor: success.respuesta[0].nombreProveedor,
                nombreUsuario: success.respuesta[0].nombreUsuario,
                productos: productos
              }];
            }, function (error) {
              console.log("algo ocurrio: ", error);
            });
          }, function (error) {
            console.log("algo ocurrio: ", error);
          });
        } //LIMPIO EL FORMULARIO UNA VEZ QUE SE HA REALIZADO UNA VENTA Y SE PRESIONE LA TECLA F4.

      }, {
        key: "limpiarFormularioAtajoC",
        value: function limpiarFormularioAtajoC(event) {
          var charCode = event.which ? event.which : event.keyCode; //se usa which o keycode dependiendo el soporte de nuestro browser

          if (charCode == 115) {
            this.frmCompra.reset();
            this.frmCompra.controls['idUsuario'].setValue(localStorage.getItem("usuario"));
            this.montoAcumulado = 0;
            this.dsProductos.data = [];
            this.arregloProductosTabla = [];
            document.getElementById('tablaVentaConcluidaVacia').style.display = "block";
            document.getElementById('idComprar').style.pointerEvents = "unset";
            document.getElementById('idLimpiarPantallaCompras').style.display = "none";
          }
        } //LIMPIO EL FORMULARIO UNA VEZ QUE SE HA REALIZADO UNA VENTA Y SE PRESIONE EL BOTON.

      }, {
        key: "limpiarFormularioC",
        value: function limpiarFormularioC() {
          var usuarioSesion = "";
          usuarioSesion = localStorage.getItem('usuario'); //console.log("colocando usuario: ",usuarioSesion);

          this.frmCompra.reset();
          this.frmCompra.controls['idUsuario'].setValue(usuarioSesion);
          this.montoAcumulado = 0;
          this.dsProductos.data = [];
          this.arregloProductosTabla = [];
          document.getElementById('tablaVentaConcluidaVacia').style.display = "block";
          document.getElementById('idComprar').style.pointerEvents = "unset";
          document.getElementById('idLimpiarPantallaCompras').style.display = "none";
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.mostrarUsuarioEnSesion();
          this.listarProductos();
          this.listarProveedores();
          this.listarUsuarios();
        }
      }]);

      return ComprasComponent;
    }();

    ComprasComponent.ctorParameters = function () {
      return [{
        type: _login_jwt_service__WEBPACK_IMPORTED_MODULE_5__["LoginJwtService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"]
      }];
    };

    ComprasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-compras',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./compras.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/compras/compras.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./compras.component.scss */
      "./src/app/compras/compras.component.scss")).default]
    })], ComprasComponent);
    /***/
  },

  /***/
  "./src/app/configuracion/configuracion.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/configuracion/configuracion.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConfiguracionConfiguracionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYWNpb24vY29uZmlndXJhY2lvbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/configuracion/configuracion.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/configuracion/configuracion.component.ts ***!
    \**********************************************************/

  /*! exports provided: ConfiguracionComponent */

  /***/
  function srcAppConfiguracionConfiguracionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfiguracionComponent", function () {
      return ConfiguracionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConfiguracionComponent =
    /*#__PURE__*/
    function () {
      function ConfiguracionComponent() {
        _classCallCheck(this, ConfiguracionComponent);
      }

      _createClass(ConfiguracionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConfiguracionComponent;
    }();

    ConfiguracionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-configuracion',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./configuracion.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/configuracion/configuracion.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./configuracion.component.scss */
      "./src/app/configuracion/configuracion.component.scss")).default]
    })], ConfiguracionComponent);
    /***/
  },

  /***/
  "./src/app/confirmar-eliminar.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/confirmar-eliminar.service.ts ***!
    \***********************************************/

  /*! exports provided: ConfirmarEliminarService */

  /***/
  function srcAppConfirmarEliminarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmarEliminarService", function () {
      return ConfirmarEliminarService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConfirmarEliminarService =
    /*#__PURE__*/
    function () {
      function ConfirmarEliminarService() {
        _classCallCheck(this, ConfirmarEliminarService);
      } //MODIFICA EL ALERT AL ELIMINAR ALGUN PRODUCTO


      _createClass(ConfirmarEliminarService, [{
        key: "confirmarEliminacion",
        value: function confirmarEliminacion() {
          var opcion = confirm("¿Estas seguro que deseas eliminar el elemento?");

          if (opcion == true) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return ConfirmarEliminarService;
    }();

    ConfirmarEliminarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ConfirmarEliminarService);
    /***/
  },

  /***/
  "./src/app/date-format.service.ts":
  /*!****************************************!*\
    !*** ./src/app/date-format.service.ts ***!
    \****************************************/

  /*! exports provided: DateFormatService */

  /***/
  function srcAppDateFormatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateFormatService", function () {
      return DateFormatService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DateFormatService =
    /*#__PURE__*/
    function () {
      function DateFormatService() {
        _classCallCheck(this, DateFormatService);
      } //FORMATEO FECHA YA QUE EL INPUT TIPO DATE ME LA MANDA EN UN FORMATO INCOMPATIBLE CON MI SGBD


      _createClass(DateFormatService, [{
        key: "formatearFecha",
        value: function formatearFecha(objFecha) {
          var fechaParametro = new Date(objFecha);
          var anio = fechaParametro.getFullYear(); //anadimos el 0 en la izquierda en caso de ser un 1 numero de 1 cifra

          var mes = fechaParametro.getMonth();
          var mes = mes + 1;

          if (mes.toString().length == 2) {
            var mesString = mes.toString();
          } else if (mes.toString().length == 1) {
            var mesString = '0' + mes.toString();
          } //anadimos el 0 en la izquierda en caso de ser un 1 numero de 1 cifra


          var dia = fechaParametro.getDate();

          if (dia.toString().length == 2) {
            var diaString = dia.toString();
          } else if (dia.toString().length == 1) {
            var diaString = '0' + dia.toString();
          }

          var fechaFinal = anio + '-' + mesString + '-' + diaString;
          return fechaFinal;
        }
      }]);

      return DateFormatService;
    }();

    DateFormatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DateFormatService);
    /***/
  },

  /***/
  "./src/app/devoluciones/devoluciones.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/devoluciones/devoluciones.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDevolucionesDevolucionesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cardPrincipal {\n  background-color: #000000bd;\n  border-radius: 6px;\n  width: 80%;\n  height: auto;\n  margin: 0 auto;\n  transition: 0.5s;\n}\n\n.btnEjecutar {\n  color: #191818;\n  border: solid 1px #676767;\n  margin: auto;\n  width: 65%;\n  font-size: 20px;\n}\n\n.tablaElastica {\n  overflow-y: auto;\n  min-height: auto;\n  max-height: 45%;\n  transition: 0.5s;\n}\n\n.popover {\n  z-index: 1005 !important;\n}\n\n::ng-deep.cdk-overlay-container {\n  z-index: 10001 !important;\n}\n\n::ng-deep.mat-tab-body-content {\n  padding: 2px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2psZ2FsbGFyZG92L0RvY3VtZW50cy9UcmFiYWpvcy9HUlVQTyAzNzUvVElFTkRBIE1BU0NPVEFTL2RlcGxveUFuaW1hbGlhL3B1bnRvVmVudGFNYXNjb3Rhcy9zcmMvYXBwL2Rldm9sdWNpb25lcy9kZXZvbHVjaW9uZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rldm9sdWNpb25lcy9kZXZvbHVjaW9uZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURJQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0RKOztBREtBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0ZGOztBRE1BO0VBQ0Usd0JBQUE7QUNIRjs7QURPQTtFQUNFLHlCQUFBO0FDSkY7O0FEUUE7RUFDRSx1QkFBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvZGV2b2x1Y2lvbmVzL2Rldm9sdWNpb25lcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQ0FSRCBET05ERSBFU1RBTiBMQSBNQVlPUklBIERFIENPTVBPTkVOVEVTIChDT01PIExBIFRBQkxBKVxuLmNhcmRQcmluY2lwYWx7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBiZDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4vL0JUTiBQQVJBIEVKRUNVVEFSIFVOQSBQRVRJQ0lPTiBQT1NUIE8gUFVUIERFTCBNT0RBTFxuLmJ0bkVqZWN1dGFye1xuICAgIGNvbG9yOiAjMTkxODE4O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICM2NzY3Njc7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA2NSU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4vL0xPTkdJVFVERVMgREUgTEEgVEFCTEEsIEVWSVRBIFFVRSBTRSBERVNCT1JERU4gTE9TIERBVE9TIERFIExBIFRBQkxBXG4udGFibGFFbGFzdGljYXtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWluLWhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogNDUlO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4vL1BBUkEgUE9QT1ZFUiBERSBNQVMgSU5GT1JNQUNJT05cbi5wb3BvdmVye1xuICB6LWluZGV4OiAxMDA1IWltcG9ydGFudDtcbn1cblxuLy9TT0JSRUVTQ1JJQklSIE9QVElPTlMgREVMIFNFTEVDVCBQQVJBIFFVRSBTRSBWRUFOIEFSUklCQSBERUwgTU9EQUxcbjo6bmctZGVlcC5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICB6LWluZGV4OiAxMDAwMSFpbXBvcnRhbnQ7XG59XG5cbi8vQcORQURJUiBQQURESU5HIEFMIFRBQiBFTiBHRU5FUkFMIFBBUkEgUVVFU0UgQUxDQU5DRSBBIERJU1RJTkdVSVIgTEEgU09NQlJBIElORkVSSU9SIERFIExPUyBDQVJEU1xuOjpuZy1kZWVwLm1hdC10YWItYm9keS1jb250ZW50IHtcbiAgcGFkZGluZzogMnB4IWltcG9ydGFudDtcbn1cbiIsIi5jYXJkUHJpbmNpcGFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGJkO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5idG5FamVjdXRhciB7XG4gIGNvbG9yOiAjMTkxODE4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjNjc2NzY3O1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA2NSU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnRhYmxhRWxhc3RpY2Ege1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtaW4taGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA0NSU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5wb3BvdmVyIHtcbiAgei1pbmRleDogMTAwNSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgei1pbmRleDogMTAwMDEgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC10YWItYm9keS1jb250ZW50IHtcbiAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/devoluciones/devoluciones.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/devoluciones/devoluciones.component.ts ***!
    \********************************************************/

  /*! exports provided: DevolucionesComponent */

  /***/
  function srcAppDevolucionesDevolucionesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DevolucionesComponent", function () {
      return DevolucionesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _login_jwt_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../login-jwt.service */
    "./src/app/login-jwt.service.ts");
    /* harmony import */


    var _confirmar_eliminar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../confirmar-eliminar.service */
    "./src/app/confirmar-eliminar.service.ts");
    /* harmony import */


    var _generar_pdfs_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../generar-pdfs.service */
    "./src/app/generar-pdfs.service.ts"); //LIBRERIA BOOTSTRAP

    /*ESTA FUNCION UNICAMENTE ES PARA CAMBIAR EL "OF" DEL PAGINADOR A "DE" Y NO SE VEA FEO MEZCLADO EL ESPAÑOL CON INGLES,
    ESTAMOS CONFIGURANDO LOS RANGOS DEL PAGINADOR - CORTESÍA: https://stackblitz.com/edit/angular-5mgfxh-6mbpdq */


    var etiquetaRango = function etiquetaRango(page, pageSize, length) {
      if (length == 0 || pageSize == 0) {
        //caso paginador vacio
        return "0 de ".concat(length);
      }

      length = Math.max(length, 0);
      var startIndex = page * pageSize; //indice de inicio

      /*if resumido; si el indice de inicio excede la logitud de la lista (6 - 5 de 6 por ejemplo) se veria: 6 - 10 de 6 gracias al
      [pageSizeOptions] lo cual es incorrecto pues solo hay 6 elementos en tal rango ENTONCES mejor coloca como indice final el indice inicial
      quedaria 6 - 6 de 6 que es lo correcto).*/

      var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
      return "".concat(startIndex + 1, " - ").concat(endIndex, " de ").concat(length);
    };

    var DevolucionesComponent =
    /*#__PURE__*/
    function () {
      function DevolucionesComponent(guardian, modalService, formBuilder, API, eliminacionSegura, PDF) {
        _classCallCheck(this, DevolucionesComponent);

        this.guardian = guardian;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.API = API;
        this.eliminacionSegura = eliminacionSegura;
        this.PDF = PDF;
        this.titulo = ""; //para el modal

        this.formValid = false;
        this.arregloDetalleDevolucion = []; //propiedades para tabla

        this.displayedColumnsDevoluciones = ['idDevolucion', 'nombreProducto', 'nombreCliente', 'tipoProblema', 'acciones'];
        this.displayedColumnsTiposProblemas = ['idTipoProblema', 'tipoProblema', 'acciones'];
        this.displayedColumnsCompensaciones = ['idCompensacion', 'tipoCompensacion', 'descripcionCompensacion', 'acciones'];
        this.frmDevoluciones = this.formBuilder.group({
          motivoDevolucion: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          idCliente: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          idTipoProblema: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          idProducto: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          idCompensacion: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          idTransaccion: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.frmTiposProblemas = this.formBuilder.group({
          idTipoProblema: [""],
          tipoProblema: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.frmCompensaciones = this.formBuilder.group({
          idCompensacion: [""],
          tipoCompensacion: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          descripcionCompensacion: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.tablaConDatosDevoluciones = false;
        this.tablaConDatosProblemas = false;
        this.tablaConDatosCompensaciones = false;
      } //FUNCION PARA ABRIR EL MODAL, CONFIGURACIONES DE BOOTSTRAP


      _createClass(DevolucionesComponent, [{
        key: "openAltaDevolucion",
        value: function openAltaDevolucion(contentDevolucion) {
          this.modal = this.modalService.open(contentDevolucion, {
            ariaLabelledBy: 'modal-basic-title'
          });
          this.titulo = "Agregar Devolución";
        }
      }, {
        key: "openAltaTipoProblema",
        value: function openAltaTipoProblema(contentProblema) {
          this.modal = this.modalService.open(contentProblema, {
            ariaLabelledBy: 'modal-basic-title'
          });
          this.titulo = "Agregar Problema";
        }
      }, {
        key: "openAltaCompensacion",
        value: function openAltaCompensacion(contentCompensacion) {
          this.modal = this.modalService.open(contentCompensacion, {
            ariaLabelledBy: 'modal-basic-title'
          });
          this.titulo = "Agregar Compensación";
        } //ABRIR EL MODAL CON LOS DATOS EN LOS INPUTS LISTOS PARA LA MODIFICACION

      }, {
        key: "openEditarTipoProblema",
        value: function openEditarTipoProblema(contentProblema, idTipoProblema, tipoProblema) {
          console.log("id: ", idTipoProblema, " nombre: ", tipoProblema);
          this.modal = this.modalService.open(contentProblema, {
            ariaLabelledBy: 'modal-basic-title'
          });
          this.titulo = "Editar Problema"; //pintando los valores en el modal listos para editarlos

          this.frmTiposProblemas.controls['idTipoProblema'].setValue(idTipoProblema); // si checamos el DOM veremos que el input es hide para evitar su modificacion posteriormente

          this.frmTiposProblemas.controls['tipoProblema'].setValue(tipoProblema);
        }
      }, {
        key: "openEditarCompensacion",
        value: function openEditarCompensacion(contentCompensacion, idCompensacion, tipoCompensacion, descripcionCompensacion) {
          console.log("id: ", idCompensacion, " nombre: ", tipoCompensacion);
          this.modal = this.modalService.open(contentCompensacion, {
            ariaLabelledBy: 'modal-basic-title'
          });
          this.titulo = "Editar Compensacion"; //pintando los valores en el modal listos para editarlos

          this.frmCompensaciones.controls['idCompensacion'].setValue(idCompensacion); // si checamos el DOM veremos que el input es hide para evitar su modificacion posteriormente

          this.frmCompensaciones.controls['tipoCompensacion'].setValue(tipoCompensacion);
          this.frmCompensaciones.controls['descripcionCompensacion'].setValue(descripcionCompensacion);
        } //FUNCION PARA ABRIR EL MODAL DE INFORMACION DEVOLUCIONES, CONFIGURACIONES DE BOOTSTRAP

      }, {
        key: "openScrollableContentDevoluciones",
        value: function openScrollableContentDevoluciones(longContentDevolucion, idDevolucion) {
          this.modalService.open(longContentDevolucion, {
            scrollable: true
          });
          this.listarDetalleDevolucion(idDevolucion);
        } //LISTADO DE REGISTROS

      }, {
        key: "listarDevoluciones",
        value: function listarDevoluciones() {
          var _this18 = this;

          this.API.mostrarDevoluciones().subscribe(function (success) {
            //manipulamos esta variable para dar uso a un ngif que se uso en la vista en un label
            if (success.estatus > 0) {
              _this18.tablaConDatosDevoluciones = true;
            }

            if (success.estatus == 0) {
              _this18.tablaConDatosDevoluciones = false;
            }

            _this18.dsDevoluciones = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](success.respuesta);

            if (!_this18.dsDevoluciones.paginator) {
              _this18.dsDevoluciones.paginator = _this18.paginatorDevoluciones;
              _this18.dsDevoluciones.paginator._intl.itemsPerPageLabel = 'items por pagina';
              _this18.dsDevoluciones.paginator._intl.getRangeLabel = etiquetaRango;
            }
          }, function (error) {
            console.log("hubo un problema", error);
          });
        } //LISTAR DETALLES DEVOLUCION

      }, {
        key: "listarDetalleDevolucion",
        value: function listarDetalleDevolucion(idDevolucion) {
          var _this19 = this;

          this.API.mostrarDetalleDevolucion(idDevolucion).subscribe(function (success) {
            _this19.arregloDetalleDevolucion = success.respuesta;
          }, function (error) {
            console.log(error);
          });
        } //LISTAR TIPOS DE PROBLEMAS

      }, {
        key: "listarTiposProblemas",
        value: function listarTiposProblemas() {
          var _this20 = this;

          this.API.mostrarTiposDeProblemas().subscribe(function (success) {
            //manipulamos esta variable para dar uso a un ngif que se uso en la vista en un label
            if (success.estatus > 0) {
              _this20.tablaConDatosProblemas = true;
            }

            if (success.estatus == 0) {
              _this20.tablaConDatosProblemas = false;
            }

            _this20.dsTiposProblemas = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](success.respuesta);
            _this20.dsTiposProblemas.paginator = _this20.paginatorTiposProblemas; //llenado select

            _this20.arregloTiposProblemasSelect = success.respuesta;
          }, function (error) {
            console.log("hubo un problema", error);
          });
        }
      }, {
        key: "listarCompensaciones",
        value: function listarCompensaciones() {
          var _this21 = this;

          this.API.mostrarCompensaciones().subscribe(function (success) {
            //manipulamos esta variable para dar uso a un ngif que se uso en la vista en un label
            if (success.estatus > 0) {
              _this21.tablaConDatosCompensaciones = true;
            }

            if (success.estatus == 0) {
              _this21.tablaConDatosCompensaciones = false;
            }

            _this21.dsCompensaciones = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](success.respuesta);
            _this21.dsCompensaciones.paginator = _this21.paginatorCompensaciones; //llenado select

            _this21.arregloCompensacionesSelect = success.respuesta;
          }, function (error) {
            console.log("hubo un problema", error);
          });
        } //para el select

      }, {
        key: "listarClientes",
        value: function listarClientes() {
          var _this22 = this;

          this.API.mostrarClientes().subscribe(function (success) {
            return _this22.arregloClientesSelect = success.respuesta;
          }, function (error) {
            console.log("algo ocurrio: ", error);
          });
        } //para el select

      }, {
        key: "listarTransacciones",
        value: function listarTransacciones() {
          var _this23 = this;

          this.API.mostrarTransacciones().subscribe(function (success) {
            return _this23.arregloTransaccionesSelect = success.respuesta;
          }, function (error) {
            console.log("algo ocurrio: ", error);
          });
        } //llena el select

      }, {
        key: "listarProductos",
        value: function listarProductos() {
          var _this24 = this;

          this.API.mostrarProductos().subscribe(function (success) {
            return _this24.arregloProductosSelect = success.respuesta;
          }, function (error) {
            console.log("algo ocurrio: ", error);
          });
        } //AGREGAR DEVOLUCION

      }, {
        key: "ejecutarPeticionDevolucion",
        value: function ejecutarPeticionDevolucion() {
          var _this25 = this;

          var motivoDevolucionForm = this.frmDevoluciones.get('motivoDevolucion').value;
          var idClienteForm = this.frmDevoluciones.get('idCliente').value;
          var idTipoProblemaForm = this.frmDevoluciones.get('idTipoProblema').value;
          var idProductoForm = this.frmDevoluciones.get('idProducto').value;
          var idCompensacionForm = this.frmDevoluciones.get('idCompensacion').value;
          var idTransaccionForm = this.frmDevoluciones.get('idTransaccion').value;
          this.API.aniadirDevolucion(motivoDevolucionForm, idClienteForm, idTipoProblemaForm, idProductoForm, idCompensacionForm, idTransaccionForm).subscribe(function (success) {
            alert(JSON.stringify(success.respuesta));

            _this25.listarDevoluciones();

            _this25.frmDevoluciones.reset();

            _this25.modal.close();
          }, function (error) {
            console.log("hubo un problema: ", error);
          });
        } //AGREGAR TIPO DE PROBLEMA Y ACTUALIZAR TIPO DE PROBLEMA: EVITO CREAR 2 MODALES

      }, {
        key: "ejecutarPeticionTipoProblema",
        value: function ejecutarPeticionTipoProblema() {
          var _this26 = this;

          var idTipoProblemaForm = this.frmTiposProblemas.get('idTipoProblema').value;
          var tipoProblemaForm = this.frmTiposProblemas.get('tipoProblema').value;
          console.log("problema", tipoProblemaForm);

          if (this.titulo == "Agregar Problema") {
            this.API.aniadirTipoDeProblema(tipoProblemaForm).subscribe(function (success) {
              alert(JSON.stringify(success.respuesta));

              _this26.listarTiposProblemas();

              _this26.frmTiposProblemas.reset();

              _this26.modal.close();
            }, function (error) {
              console.log("hubo un problema: ", error);
            });
          }

          if (this.titulo == "Editar Problema") {
            this.API.actualizarTipoDeProblema(idTipoProblemaForm, tipoProblemaForm).subscribe(function (success) {
              alert(JSON.stringify(success.respuesta));

              _this26.listarTiposProblemas();

              _this26.frmTiposProblemas.reset();

              _this26.modal.close();
            }, function (error) {
              console.log("hubo un problema: ", error);
            });
          }
        } //AGREGAR COMPENSACION Y ACTUALIZAR COMPENSACION: EVITO CREAR 2 MODALES

      }, {
        key: "ejecutarPeticionCompensacion",
        value: function ejecutarPeticionCompensacion() {
          var _this27 = this;

          var idCompensacionForm = this.frmCompensaciones.get('idCompensacion').value;
          var tipoCompensacionForm = this.frmCompensaciones.get('tipoCompensacion').value;
          var descripcionCompensacionForm = this.frmCompensaciones.get('descripcionCompensacion').value;
          console.log("compensaciones", tipoCompensacionForm, " \n", descripcionCompensacionForm);

          if (this.titulo == "Agregar Compensacion") {
            this.API.aniadirCompensacion(tipoCompensacionForm, descripcionCompensacionForm).subscribe(function (success) {
              alert(JSON.stringify(success.respuesta));

              _this27.listarCompensaciones();

              _this27.frmCompensaciones.reset();

              _this27.modal.close();
            }, function (error) {
              console.log("hubo un problema: ", error);
            });
          }

          if (this.titulo == "Editar Compensacion") {
            this.API.actualizarCompensacion(idCompensacionForm, tipoCompensacionForm, descripcionCompensacionForm).subscribe(function (success) {
              alert(JSON.stringify(success.respuesta));

              _this27.listarCompensaciones();

              _this27.frmCompensaciones.reset();

              _this27.modal.close();
            }, function (error) {
              console.log("hubo un problema: ", error);
            });
          }
        } //ELIMINAR TIPO DE PROBLEMA

      }, {
        key: "eliminarTipoProblema",
        value: function eliminarTipoProblema(idCliente) {
          var _this28 = this;

          var respuesta = false;
          respuesta = this.eliminacionSegura.confirmarEliminacion();

          if (respuesta == true) {
            this.API.borrarTipoDeProblema(idCliente).subscribe(function (success) {
              alert(success.respuesta);

              _this28.listarTiposProblemas();
            }, function (error) {
              console.log("hubo un problema: ", error);
            });
          } else {
            console.log("eliminacion cancelada");
          }
        } //ELIMINAR COMPENSACCION

      }, {
        key: "eliminarCompensacion",
        value: function eliminarCompensacion(idCliente) {
          var _this29 = this;

          var respuesta = false;
          respuesta = this.eliminacionSegura.confirmarEliminacion();

          if (respuesta == true) {
            this.API.borrarCompensacion(idCliente).subscribe(function (success) {
              alert(success.respuesta);

              _this29.listarCompensaciones();
            }, function (error) {
              console.log("hubo un problema: ", error);
            });
          } else {
            console.log("eliminacion cancelada");
          }
        } //FUNCIONALIDAD FILTRAR

      }, {
        key: "filtrarRegistros",
        value: function filtrarRegistros(filterValue) {
          this.dsDevoluciones.filter = filterValue.trim().toLowerCase();
          this.dsTiposProblemas.filter = filterValue.trim().toLowerCase();
          this.dsCompensaciones.filter = filterValue.trim().toLowerCase(); //si se usa el modulo tab de transacciones, entonces arroja los resultados buscados en la primer pagina: (if reducido)

          this.dsDevoluciones.paginator ? this.dsDevoluciones.paginator.firstPage() : null; //si se usa el modulo tab de compras, entonces arroja los resultados buscados en la primer pagina:

          this.dsTiposProblemas.paginator ? this.dsTiposProblemas.paginator.firstPage() : null; //si se usa el modulo tab de compras, entonces arroja los resultados buscados en la primer pagina:

          this.dsCompensaciones.paginator ? this.dsCompensaciones.paginator.firstPage() : null;
        } //INVOCANDO SERVICIO PARA GENERAR PDF

      }, {
        key: "generarPDF",
        value: function generarPDF(etiquetaPDF) {
          this.PDF.generarPDF(etiquetaPDF);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.guardian.restringirAcceso();
          this.listarDevoluciones();
          this.listarTiposProblemas();
          this.listarCompensaciones();
          this.listarProductos();
          this.listarClientes();
          this.listarTransacciones();
        }
      }]);

      return DevolucionesComponent;
    }();

    DevolucionesComponent.ctorParameters = function () {
      return [{
        type: _login_jwt_service__WEBPACK_IMPORTED_MODULE_6__["LoginJwtService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_5__["APIService"]
      }, {
        type: _confirmar_eliminar_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmarEliminarService"]
      }, {
        type: _generar_pdfs_service__WEBPACK_IMPORTED_MODULE_8__["GenerarPDFsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('MatPaginatorDevoluciones', {
      static: true
    })], DevolucionesComponent.prototype, "paginatorDevoluciones", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('MatPaginatorTiposProblemas', {
      static: true
    })], DevolucionesComponent.prototype, "paginatorTiposProblemas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('MatPaginatorCompensaciones', {
      static: true
    })], DevolucionesComponent.prototype, "paginatorCompensaciones", void 0);
    DevolucionesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-devoluciones',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./devoluciones.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/devoluciones/devoluciones.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./devoluciones.component.scss */
      "./src/app/devoluciones/devoluciones.component.scss")).default]
    })], DevolucionesComponent);
    /***/
  },

  /***/
  "./src/app/facturas/facturas.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/facturas/facturas.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFacturasFacturasComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cardInputs {\n  height: 99%;\n  width: 95%;\n  margin: auto;\n  display: inline-block;\n  margin-left: 10px;\n}\n\n.ticket {\n  top: -30px !important;\n  float: right;\n  left: -45px;\n}\n\n.btnVender {\n  width: 40%;\n  float: right;\n  margin-top: -50px;\n}\n\n.btnAniadirEntidad {\n  color: white;\n  width: 23px !important;\n  height: 23px !important;\n  top: 5px;\n}\n\n.fuenteEncabezadosCentrada {\n  font-size: 27px;\n  text-align: center;\n}\n\n.bordeOutputs {\n  border: solid 1px #012440;\n  border-radius: 6px;\n  margin: auto;\n  height: 80%;\n}\n\n.listaEntidad {\n  max-height: 175px;\n  overflow-y: auto;\n  margin-bottom: 12px;\n  width: 100%;\n  min-height: 60%;\n  max-height: 63%;\n}\n\n.outputMonto {\n  width: 25%;\n  background: #f9f9f9;\n  border: none;\n}\n\n.labelOutput {\n  font-size: 24px;\n  margin-top: 25px;\n  width: 25%;\n}\n\n.resultadoOperaciones {\n  float: right;\n  color: #2a2d3b;\n  margin-bottom: 0px;\n  font-size: 22px !important;\n}\n\n.btnCompras {\n  float: right;\n  margin-right: 5px;\n  background: #000000b8;\n  transition: 0.2s;\n}\n\n.btnCompras:hover {\n  float: right;\n  margin-right: 9px;\n  background: black;\n}\n\n.carritoIrCompras {\n  font-size: 28px;\n  color: darkseagreen;\n  margin-left: -3px;\n}\n\n.btnEliminarProductoInteresado {\n  border: none;\n  font-size: 16px;\n  background-color: transparent;\n}\n\n.ocultarTicket {\n  font-size: 14px;\n  height: auto;\n  width: 200px;\n  margin-left: 200px;\n  margin-top: -150%;\n  position: fixed;\n}\n\n.nvaVenta {\n  float: right;\n  margin-top: 25px;\n  font-size: 20px;\n}\n\n/*SOBREESCRIBIENDO CLASES DEL TEMA CREADO LO COLOCO COMO PARTE DE CADA COMPONENTE YA\nQUE GLOBALMENTE (STYLES.CSS) NO ME RESPETA LA IMPORTANCIA*/\n\n::ng-deep.mat-tab-label {\n  font-family: \"Darker Grotesque\", sans-serif !important;\n  font-size: 22px !important;\n}\n\n::ng-deep.mat-cell {\n  font-size: 18px !important;\n  color: #012440 !important;\n  background-color: white !important;\n}\n\n::ng-deep.mat-select-value {\n  color: #012440 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2psZ2FsbGFyZG92L0RvY3VtZW50cy9UcmFiYWpvcy9HUlVQTyAzNzUvVElFTkRBIE1BU0NPVEFTL2RlcGxveUFuaW1hbGlhL3B1bnRvVmVudGFNYXNjb3Rhcy9zcmMvYXBwL2ZhY3R1cmFzL2ZhY3R1cmFzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mYWN0dXJhcy9mYWN0dXJhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNBRjs7QURJQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURLQTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtBQ0ZGOztBRE9BO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDSkY7O0FEUUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNMRjs7QURTQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ05GOztBRFVBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ1BGOztBRFdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ1JGOztBRFlBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FDVEY7O0FEYUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDVkY7O0FEYUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1ZGOztBRGNBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNYRjs7QURlQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNaRjs7QURnQkE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUFhLFlBQUE7RUFDYixrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ1pGOztBRGdCQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNiRjs7QURnQkE7MERBQUE7O0FBSUE7RUFDRSxzREFBQTtFQUNBLDBCQUFBO0FDZkY7O0FEb0JBO0VBQ0UsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0FDakJGOztBRG9CQTtFQUNFLHlCQUFBO0FDakJGIiwiZmlsZSI6InNyYy9hcHAvZmFjdHVyYXMvZmFjdHVyYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL0NPTlRFTkRFRE9SIERFIExPUyBJTlBVVFNcbi5jYXJkSW5wdXRze1xuICBoZWlnaHQ6IDk5JTtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLy9CVE4gSU1QUklNSVIgVElDS0VUXG4udGlja2V0e1xuICB0b3A6IC0zMHB4IWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBsZWZ0OiAtNDVweDtcbn1cblxuLy9CVE4gUEFSQSBSRUFMSVpBUiBVTkEgVkVOVEFcbi5idG5WZW5kZXJ7XG4gIHdpZHRoOiA0MCU7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG59XG5cbi8vQlROIFBBUkEgQcORQURJUiBQUk9EVUNUT1MgQUwgQ0FSUklUTyAoVEFCTEEgUFJPRFVDVE9TKVxuLmJ0bkFuaWFkaXJFbnRpZGFke1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAyM3B4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjNweCAhaW1wb3J0YW50O1xuICB0b3A6IDVweDtcbn1cblxuXG4vL0ZVRU5URSBVU0FEQSBQQVJBIEVMIEVOQ0FCRVpBRE8gQVJSSUJBIERFIExBIFRBQkxBIFkgTElTVEEgREUgT1VUUFVUU1xuLmZ1ZW50ZUVuY2FiZXphZG9zQ2VudHJhZGF7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vL0JPUkRFIFBBUkEgR1JJRCBERSBPVVRQVVRTXG4uYm9yZGVPdXRwdXRze1xuICBib3JkZXI6IHNvbGlkIDFweCAjMDEyNDQwO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiA4MCU7XG59XG5cbi8vRVNUSUxPIFBBUkEgTElTVEEgREUgUFJPRFVDVE9TIFkgVElQT1MgREUgUEFHT1Ncbi5saXN0YUVudGlkYWR7XG4gIG1heC1oZWlnaHQ6IDE3NXB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNjAlO1xuICBtYXgtaGVpZ2h0OiA2MyU7XG59XG5cbi8vTU9OVE8sIFFVSVRBUiBCT1JERSBBTCBJTlBVVCBSRUFET05MWSBET05ERSBTRSBNVUVTVFJBIEVMIE1PTlRPXG4ub3V0cHV0TW9udG97XG4gIHdpZHRoOiAyNSU7XG4gIGJhY2tncm91bmQ6I2Y5ZjlmOTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4vL01PTlRPLCBNT0RJRklDQSBFTCBMQUJFTCBFTiBHRU5FUkFMXG4ubGFiZWxPdXRwdXR7XG4gIGZvbnQtc2l6ZToyNHB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICB3aWR0aDoyNSVcbn1cblxuLy9FU1RJTE8gUEFSQSBFVElRVUVUQVMgREUgTU9OVE8sQ0FNQklPLFBBR09cbi5yZXN1bHRhZG9PcGVyYWNpb25lc3tcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogIzJhMmQzYjtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmb250LXNpemU6IDIycHghaW1wb3J0YW50O1xufVxuXG4vL0VTVElMTyBQQVJBIEJUTiBRVUUgUkVESVJFQ0NJT05BUkEgQSBDT01QUkFTXG4uYnRuQ29tcHJhc3tcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMGI4O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4uYnRuQ29tcHJhczpob3ZlcntcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDlweDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbi8vSUNPTk8gREUgQ0FSUklUTyBERUwgQlROIFFVRSBSRURJUklHRSBBIENPTVBSQVNcbi5jYXJyaXRvSXJDb21wcmFze1xuICBmb250LXNpemU6IDI4cHg7XG4gIGNvbG9yOiBkYXJrc2VhZ3JlZW47XG4gIG1hcmdpbi1sZWZ0OiAtM3B4O1xufVxuXG4vL0JUTiBQQVJBIEVMSU1JTkFSIFBST0RVQ1RPUyBERUwgQ0FSUklUTyAoVEFCTEEgUFJPRFVDVE9TKSBCQVNVUkVST1xuLmJ0bkVsaW1pbmFyUHJvZHVjdG9JbnRlcmVzYWRve1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZToxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xufVxuXG4vL09DVUxUQSBFTCBUSUNLRVQgREUgTEEgVkVOVEEgKExPIEVTQ09OREUgREVMIE1PRFVMTyBQT1IgTUlMSVNFR1VORE9TIENVQU5ETyBBUEFSRUNFKVxuLm9jdWx0YXJUaWNrZXR7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiBhdXRvO3dpZHRoOiAyMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xuICBtYXJnaW4tdG9wOiAtMTUwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4vL0JPVE9OIE5VRVZBIFZFTlRBIChMSU1QSUFSIFBBTlRBTExBKVxuLm52YVZlbnRhe1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMjBweFxufVxuXG4vKlNPQlJFRVNDUklCSUVORE8gQ0xBU0VTIERFTCBURU1BIENSRUFETyBMTyBDT0xPQ08gQ09NTyBQQVJURSBERSBDQURBIENPTVBPTkVOVEUgWUFcblFVRSBHTE9CQUxNRU5URSAoU1RZTEVTLkNTUykgTk8gTUUgUkVTUEVUQSBMQSBJTVBPUlRBTkNJQSovXG5cbi8vQ2FtYmlhbW9zIGVsIGVuY2FiZXphZG8gZGVsIHRhYiBncm91cFxuOjpuZy1kZWVwLm1hdC10YWItbGFiZWx7XG4gIGZvbnQtZmFtaWx5OiAnRGFya2VyIEdyb3Rlc3F1ZScsIHNhbnMtc2VyaWYhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIycHghaW1wb3J0YW50O1xufVxuXG4vL1NPQlJFRVNDUklCSU1PUyBURU1BIFVOSUNBTUVOVEUgUEFSQSBFU1RFIENPTVBPTkVOVEVcbi8vbW9kaWZpY2Ftb3MgZWwgY3VlcnBvIGRlIGxhIHRhYmxhIHVuaWNhbWVudGVcbjo6bmctZGVlcC5tYXQtY2VsbHtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDEyNDQwIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LXNlbGVjdC12YWx1ZSB7XG4gIGNvbG9yOiMwMTI0NDAhaW1wb3J0YW50O1xufVxuIiwiLmNhcmRJbnB1dHMge1xuICBoZWlnaHQ6IDk5JTtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4udGlja2V0IHtcbiAgdG9wOiAtMzBweCAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG4gIGxlZnQ6IC00NXB4O1xufVxuXG4uYnRuVmVuZGVyIHtcbiAgd2lkdGg6IDQwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbn1cblxuLmJ0bkFuaWFkaXJFbnRpZGFkIHtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMjNweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDIzcHggIWltcG9ydGFudDtcbiAgdG9wOiA1cHg7XG59XG5cbi5mdWVudGVFbmNhYmV6YWRvc0NlbnRyYWRhIHtcbiAgZm9udC1zaXplOiAyN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib3JkZU91dHB1dHMge1xuICBib3JkZXI6IHNvbGlkIDFweCAjMDEyNDQwO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiA4MCU7XG59XG5cbi5saXN0YUVudGlkYWQge1xuICBtYXgtaGVpZ2h0OiAxNzVweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDYwJTtcbiAgbWF4LWhlaWdodDogNjMlO1xufVxuXG4ub3V0cHV0TW9udG8ge1xuICB3aWR0aDogMjUlO1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5sYWJlbE91dHB1dCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLnJlc3VsdGFkb09wZXJhY2lvbmVzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogIzJhMmQzYjtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmb250LXNpemU6IDIycHggIWltcG9ydGFudDtcbn1cblxuLmJ0bkNvbXByYXMge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwYjg7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5idG5Db21wcmFzOmhvdmVyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDlweDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbi5jYXJyaXRvSXJDb21wcmFzIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBjb2xvcjogZGFya3NlYWdyZWVuO1xuICBtYXJnaW4tbGVmdDogLTNweDtcbn1cblxuLmJ0bkVsaW1pbmFyUHJvZHVjdG9JbnRlcmVzYWRvIHtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ub2N1bHRhclRpY2tldCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgbWFyZ2luLXRvcDogLTE1MCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLm52YVZlbnRhIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi8qU09CUkVFU0NSSUJJRU5ETyBDTEFTRVMgREVMIFRFTUEgQ1JFQURPIExPIENPTE9DTyBDT01PIFBBUlRFIERFIENBREEgQ09NUE9ORU5URSBZQVxuUVVFIEdMT0JBTE1FTlRFIChTVFlMRVMuQ1NTKSBOTyBNRSBSRVNQRVRBIExBIElNUE9SVEFOQ0lBKi9cbjo6bmctZGVlcC5tYXQtdGFiLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiRGFya2VyIEdyb3Rlc3F1ZVwiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LWNlbGwge1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMTI0NDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1zZWxlY3QtdmFsdWUge1xuICBjb2xvcjogIzAxMjQ0MCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/facturas/facturas.component.ts":
  /*!************************************************!*\
    !*** ./src/app/facturas/facturas.component.ts ***!
    \************************************************/

  /*! exports provided: FacturasComponent */

  /***/
  function srcAppFacturasFacturasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacturasComponent", function () {
      return FacturasComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _generar_pdfs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../generar-pdfs.service */
    "./src/app/generar-pdfs.service.ts");

    var FacturasComponent =
    /*#__PURE__*/
    function () {
      function FacturasComponent(formBuilder, API, PDF) {
        _classCallCheck(this, FacturasComponent);

        this.formBuilder = formBuilder;
        this.API = API;
        this.PDF = PDF;
        this.displayedColumns = ['idTransaccion', 'fechaTransaccion', 'numeroProductosEnTransaccion']; //columnas tabla transacciones

        this.displayedColumnsProductos = ['nombreProducto', 'precioUnitarioProducto', 'cantidadProducto', 'descartar']; //columnas tabla transacciones

        this.arregloProductosSelect = [];
        this.arregloProductosTabla = [];
        this.arregloClientesSelect = [];
        this.arregloVendedoresSelect = [];
        this.arregloTiposDePagosSelect = [];
        this.arregloTiposDePagosLista = [];
        this.arregloTransacciones = [];
        this.numeroTiposPagoSeleccionados = 0; // variable de control en metodo transfiereTiposDePagos

        this.montoAcumulado = 0;
        this.usuarioActual = 0;
        this.frmVenta = this.formBuilder.group({
          idCliente: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          idVendedor: localStorage.getItem("usuario"),
          pagoTransaccion: [""],
          idProducto: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          cantidadProducto: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          idTipoPago: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.frmVenta.get('pagoTransaccion').disable();
      }
      /*VALIDAMOS QUE SE PUEDAN INGRESAR UNICAMENTE PUROS NUMEROS EN LOS INPUTS, CORTESIA:
      https://stackblitz.com/edit/numeric-only?file=app%2Fapp.component.html*/


      _createClass(FacturasComponent, [{
        key: "soloNumeros",
        value: function soloNumeros(event) {
          //atrapamos la tecla ingresada en este if ternario la propiedad which contiene el unicode de la tecla presionada
          var charCode = event.which ? event.which : event.keyCode; //se usa which o keycode dependiendo el soporte de nuestro browser

          /*si se detecta un caracter especial (en keycode los caracteres especiales son menores a 48)
           o letras (en ascii las letras empiezan apartir del 57), del 31 al 48 en ascii tambien hay caracteres
           especiales, si las anteriores condiciones se cumplen no deja escribir en el input, en su defecto
           si acepta valores*/

          if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
          }

          return true;
        } //LLENA EL SELECT DE TIPOS DE PAGOS

      }, {
        key: "listarTiposDePagos",
        value: function listarTiposDePagos() {
          var _this30 = this;

          this.API.mostrarTiposDePagos().subscribe(function (success) {
            return _this30.arregloTiposDePagosSelect = success.respuesta;
          }, function (error) {
            console.log("algo ocurrio: ", error);
          });
        } //LLENA EL SELECT DE PRODUCTOS

      }, {
        key: "listarProductos",
        value: function listarProductos() {
          var _this31 = this;

          this.API.mostrarProductos().subscribe(function (success) {
            return _this31.arregloProductosSelect = success.respuesta;
          }, function (error) {
            console.log("algo ocurrio: ", error);
          });
        } //LLENA EL SELECT DE CLIENTES

      }, {
        key: "listarClientes",
        value: function listarClientes() {
          var _this32 = this;

          this.API.mostrarClientes().subscribe(function (success) {
            return _this32.arregloClientesSelect = success.respuesta;
          }, function (error) {
            console.log("algo ocurrio: ", error);
          });
        } //LLENA EL SELECT DE VENDEDORES

      }, {
        key: "listarVendedores",
        value: function listarVendedores() {
          var _this33 = this;

          this.API.mostrarVendedores().subscribe(function (success) {
            return _this33.arregloVendedoresSelect = success.respuesta;
          }, function (error) {
            console.log("algo ocurrio: ", error);
          });
        } //LLENA EL INPUT DEL NOMBRE DE USUARIO, ESTE ES EL DEL USUARIO EN SESIÓN

      }, {
        key: "mostrarUsuarioEnSesion",
        value: function mostrarUsuarioEnSesion() {
          var _this34 = this;

          this.API.buscarUsuarioPorNombre(localStorage.getItem("usuario")).subscribe(function (success) {
            _this34.usuarioActual = success.respuesta[0].idUsuario; //console.log("usuario en sesion: ",this.usuarioActual)
          }, function (error) {
            console.log(error);
          });
        } //AGREGO PRODUCTOS DEL FORMULARIO A LA TABLA CARRITO

      }, {
        key: "transfiereProductos",
        value: function transfiereProductos() {
          var _this35 = this;

          var productoSeleccionado; //idProducto

          var cantidadSeleccionada = 0;
          this.API.mostrarProductos().subscribe(function (success) {
            productoSeleccionado = _this35.frmVenta.get('idProducto').value;
            cantidadSeleccionada = _this35.frmVenta.get('cantidadProducto').value; //si unicamente se selecciona 0, que no mande nada a la tabla

            if (cantidadSeleccionada == 0) {
              return;
            } //sumando monto cada que se agrega un producto


            _this35.montoAcumulado = _this35.montoAcumulado + productoSeleccionado.precioUnitarioProducto * cantidadSeleccionada; //verificamos si al querer dar de alta un producto no existe ya en el carrito (tabla de productos)

            if (_this35.arregloProductosTabla.length >= 1) {
              //console.log("posicion en arreglo: ",this.arregloProductosTabla[0].cantidadProducto);
              for (var i = 0; i < _this35.arregloProductosTabla.length; i++) {
                if (productoSeleccionado.idProducto == _this35.arregloProductosTabla[i].idProducto) {
                  _this35.arregloProductosTabla[i].cantidadProducto = _this35.arregloProductosTabla[i].cantidadProducto + cantidadSeleccionada;
                  _this35.dsProductos = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this35.arregloProductosTabla); //paso la info del arreglo al dataSource de la tabla para mostrarlos cada que se agregue un nuevo registro
                } else {
                  if (i == _this35.arregloProductosTabla.length - 1) {
                    _this35.arregloProductosTabla.push({
                      idProducto: productoSeleccionado.idProducto,
                      cantidadProducto: cantidadSeleccionada,
                      nombreProducto: productoSeleccionado.nombreProducto,
                      precioUnitarioProducto: productoSeleccionado.precioUnitarioProducto
                    });

                    _this35.dsProductos = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this35.arregloProductosTabla); //paso la info del arreglo al dataSource de la tabla para mostrarlos cada que se agregue un nuevo registro

                    break;
                  }
                }
              }
            } else {
              _this35.arregloProductosTabla.push({
                idProducto: productoSeleccionado.idProducto,
                cantidadProducto: cantidadSeleccionada,
                nombreProducto: productoSeleccionado.nombreProducto,
                precioUnitarioProducto: productoSeleccionado.precioUnitarioProducto
              });

              _this35.dsProductos = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this35.arregloProductosTabla); //paso la info del arreglo al dataSource de la tabla para mostrarlos cada que se agregue un nuevo registro

              document.getElementById('tablaVentaConcluidaVacia').style.display = "none";
            }
          }, function (error) {
            console.log("algo ocurrio", error);
          });
        } //ELIMINAR PRODUCTOS DE LA TABLA (CARRITO)

      }, {
        key: "eliminarProductosCarrito",
        value: function eliminarProductosCarrito(objetoProducto, indice) {
          var _this36 = this;

          console.log("producto a eliminar: ", indice - 1); //console.log(this.arregloProductosTabla)

          this.arregloProductosTabla.splice(indice, 1);
          this.dsProductos = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.arregloProductosTabla); //paso la info del arreglo al dataSource de la tabla para mostrarlos cada que se agregue un nuevo registro
          //hacemos que la eliminacion de un producto afecte tambien al monto $

          this.API.mostrarProductos().subscribe(function (success) {
            _this36.montoAcumulado = _this36.montoAcumulado - objetoProducto.precioUnitarioProducto * objetoProducto.cantidadProducto;

            if (_this36.arregloProductosTabla.length == 0) {
              document.getElementById('tablaVentaConcluidaVacia').style.display = "block";
            }
          }, function (error) {
            console.log("algo ocurrio", error);
          });
        } //ALMACENA LOS TIPOS DE PAGO SELECCIONADOS DEL CHECKBOX EN UN ARREGLO PARA SU USO POSTERIOR

      }, {
        key: "transfiereTiposDePagos",
        value: function transfiereTiposDePagos(idTipoPago) {
          var _this37 = this;

          this.API.mostrarTiposDePagos().subscribe(function (success) {
            var tipoPago = _this37.frmVenta.get('idTipoPago').value;

            _this37.frmVenta.controls['pagoTransaccion'].setValue(null); //si el checkbox esta marcado


            if (tipoPago == true) {
              _this37.numeroTiposPagoSeleccionados++;

              _this37.frmVenta.get('pagoTransaccion').enable();

              _this37.arregloTiposDePagosLista.push({
                idTipoPago: idTipoPago
              }); //tipoPago = false;//prueba
              //console.log("tipos de pago seleccionados: ",tipoPago)

            } else if (tipoPago == false) {
              //elimina los elementos desmarcados
              _this37.numeroTiposPagoSeleccionados--;

              _this37.arregloTiposDePagosLista.splice(idTipoPago - 1, 1);
            }
            /*numeroTiposPagoSeleccionados es una variable de control
            para asegurarme que se deshabilite el input de pago si no
            hay checkbox seleccionados*/


            if (_this37.numeroTiposPagoSeleccionados == 0) {
              console.log("ningun tipo de pago seleccionado");

              _this37.frmVenta.get('pagoTransaccion').disable();
            }
          }, function (error) {
            console.log("algo ocurrio: ", error);
          });
        } //AGREGAR UNA TRANSACCION

      }, {
        key: "agregarTransaccion",
        value: function agregarTransaccion() {
          var _this38 = this;

          var idClienteForm = 0,
              idVendedorForm = 0,
              pagoTransaccionForm = 0;
          var arregloProductosForm = [],
              arregloTiposDePagosForm = [];
          idClienteForm = this.frmVenta.get('idCliente').value;
          idVendedorForm = this.usuarioActual;
          pagoTransaccionForm = this.frmVenta.get('pagoTransaccion').value;
          arregloProductosForm = this.arregloProductosTabla;
          arregloTiposDePagosForm = this.arregloTiposDePagosLista;

          if (arregloProductosForm.length == 0) {
            alert("no olvides presionar boton de agregar productos \n");
            return;
          }

          console.log("tipo de pago en transaccion: ", arregloTiposDePagosForm);
          this.API.buscarTiposDePagosPorID(arregloTiposDePagosForm[0].idTipoPago).subscribe(function (success) {
            if (success.respuesta[0].tipoPago != "efectivo") {
              pagoTransaccionForm = _this38.montoAcumulado;
              console.log("no pagaste en efectivo");
            }

            _this38.API.aniadirTransaccion(idClienteForm, idVendedorForm, pagoTransaccionForm, arregloProductosForm, arregloTiposDePagosForm).subscribe(function (success) {
              if (success.estatus > 0) {
                alert(success.respuesta);
                document.getElementById('idVender').style.pointerEvents = "none";
                document.getElementById('idLimpiarPantallaVentas').style.display = "block";

                _this38.listarUltimaTransaccion();
              } else if (success.estatus < 0) {
                alert("No cuentas con el dinero suficiente | verifica tu pago");
                console.log("verdadero error: ", success.respuesta);
              } else {
                alert(JSON.stringify(success.respuesta));
              }
            }, function (error) {
              alert("algo anda mal | " + JSON.stringify(error));
            });
          }, function (error) {});
        } //muestra la ultima transaccion hecha despues de que se oprime el btn de vender

      }, {
        key: "listarUltimaTransaccion",
        value: function listarUltimaTransaccion() {
          var _this39 = this;

          this.API.mostrarUltimaTransaccion().subscribe(function (success) {
            var idUltimaTransaccion = 0;
            idUltimaTransaccion = success.respuesta[0].idTransaccion;

            _this39.API.mostrarDetalleTransaccion(idUltimaTransaccion).subscribe(function (success) {
              var arregloTemporalProductos = [];
              var productos = [];

              for (var i = 0; i < success.respuesta.length; i++) {
                //atrapamos cada uno de los productos en un array
                arregloTemporalProductos.push(success.respuesta[i].nombreProducto);
              }

              productos = arregloTemporalProductos; //arreglo de objetos listo para iterar

              _this39.arregloTransacciones = [{
                idTransaccion: success.respuesta[0].idTransaccion,
                nombreCliente: success.respuesta[0].nombreCliente,
                nombreVendedor: success.respuesta[0].nombreVendedor,
                fechaTransaccion: success.respuesta[0].fechaTransaccion,
                productos: productos,
                numeroProductosEnTransaccion: success.respuesta[0].cantidadProductosTransaccion,
                montoConIvaTransaccion: success.respuesta[0].montoConIvaTransaccion,
                ivaTransaccion: success.respuesta[0].ivaTransaccion,
                pagoTransaccion: success.respuesta[0].pagoTransaccion,
                cambioTransaccion: success.respuesta[0].cambioTransaccion,
                tipoPago: success.respuesta[0].tipoPago
              }];
              setTimeout(function () {
                _this39.generarPDF('etiquetaPDF');

                _this39.cambio = _this39.arregloTransacciones[0].cambioTransaccion;
                document.getElementById('idCambio').style.display = "contents";
              }, 0);
            }, function (error) {
              console.log("algo ocurrio: ", error);
            });
          }, function (error) {
            console.log("algo ocurrio: ", error);
          });
        } //LIMPIO EL FORMULARIO UNA VEZ QUE SE HA REALIZADO UNA VENTA Y SE PRESIONE LA TECLA ESC.

      }, {
        key: "limpiarFormularioAtajo",
        value: function limpiarFormularioAtajo(event) {
          var charCode = event.which ? event.which : event.keyCode; //se usa which o keycode dependiendo el soporte de nuestro browser

          if (charCode == 27) {
            this.frmVenta.reset();
            this.frmVenta.controls['idVendedor'].setValue(localStorage.getItem("usuario"));
            this.montoAcumulado = 0;
            this.frmVenta.get('pagoTransaccion').disable();
            this.dsProductos.data = [];
            this.arregloProductosTabla = [];
            this.arregloTiposDePagosLista = [];
            document.getElementById('tablaVentaConcluidaVacia').style.display = "block";
            document.getElementById('idCambio').style.display = "none";
            document.getElementById('idVender').style.pointerEvents = "unset";
            document.getElementById('idLimpiarPantallaVentas').style.display = "none";
          }
        } //LIMPIO EL FORMULARIO UNA VEZ QUE SE HA REALIZADO UNA VENTA Y SE PRESIONE EL BOTON.

      }, {
        key: "limpiarFormulario",
        value: function limpiarFormulario() {
          this.frmVenta.reset();
          this.frmVenta.controls['idVendedor'].setValue(localStorage.getItem("usuario"));
          this.montoAcumulado = 0;
          this.frmVenta.get('pagoTransaccion').disable();
          this.dsProductos.data = [];
          this.arregloProductosTabla = [];
          this.arregloTiposDePagosLista = [];
          document.getElementById('tablaVentaConcluidaVacia').style.display = "block";
          document.getElementById('idCambio').style.display = "none";
          document.getElementById('idVender').style.pointerEvents = "unset";
          document.getElementById('idLimpiarPantallaVentas').style.display = "none";
        } //DENEGAR ACCESO A COMPRAS

      }, {
        key: "denegarAccesoCompras",
        value: function denegarAccesoCompras() {
          /*deshabilitare el tab de compras en caso de que el vendedor este en sesion
          si el disabled (en el html) detecta true deshabilita el tab*/
          var nivel = localStorage.getItem('nivel');

          if (nivel == 'vendedor') {
            //console.log("acceso denegado: v...");
            return true;
          } else {
            //console.log("acceso permitido: g...")
            return false;
          }
        } //INVOCANDO SERVICIO PARA GENERAR PDF

      }, {
        key: "generarPDF",
        value: function generarPDF(etiquetaPDF) {
          console.log("este es el parametro de tu pdf: ", etiquetaPDF);
          this.PDF.generarPDF(etiquetaPDF);
          setTimeout(function () {
            document.getElementById('etiquetaPDF').style.display = "none";
          }, 3000);
        } //EVITO QUE NO SE PUEDA UTLIZAR EL BOTON ATRAS DEL NAVEGADOR Y ME MUESTRE EL MENU,
        //FUENTE: https://es.stackoverflow.com/questions/2092/c%C3%B3mo-detectar-el-evento-o-deshabilitar-el-bot%C3%B3n-atr%C3%A1s-del-navegador-con-angular

      }, {
        key: "deshabilitaRetroceso",
        value: function deshabilitaRetroceso() {
          window.location.hash = "no-back-button";
          window.location.hash = "Again-No-back-button"; //chrome

          window.onhashchange = function () {
            window.location.hash = "no-back-button";
          };
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.mostrarUsuarioEnSesion();
          this.listarTiposDePagos();
          this.listarProductos();
          this.listarVendedores();
          this.listarClientes();
          this.deshabilitaRetroceso();
        }
      }]);

      return FacturasComponent;
    }();

    FacturasComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"]
      }, {
        type: _generar_pdfs_service__WEBPACK_IMPORTED_MODULE_5__["GenerarPDFsService"]
      }];
    };

    FacturasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-facturas',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./facturas.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/facturas/facturas.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./facturas.component.scss */
      "./src/app/facturas/facturas.component.scss")).default]
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-compras',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!../compras/compras.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/compras/compras.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../compras/compras.component.scss */
      "./src/app/compras/compras.component.scss")).default]
    })], FacturasComponent);
    /***/
  },

  /***/
  "./src/app/funcionamiento-bitacora.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/funcionamiento-bitacora.service.ts ***!
    \****************************************************/

  /*! exports provided: FuncionamientoBitacoraService */

  /***/
  function srcAppFuncionamientoBitacoraServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FuncionamientoBitacoraService", function () {
      return FuncionamientoBitacoraService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var FuncionamientoBitacoraService =
    /*#__PURE__*/
    function () {
      function FuncionamientoBitacoraService(http) {
        _classCallCheck(this, FuncionamientoBitacoraService);

        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
      } //INCIO - REGISTRAR ACCESO
      //esta funcion es invocada una vez se detecta el usuario a añadir


      _createClass(FuncionamientoBitacoraService, [{
        key: "agregarAcceso",
        value: function agregarAcceso(accionAcceso, idUsuario) {
          console.log("accion: ", accionAcceso);
          this.http.post('/accesosWS/agregarAcceso', {
            accionAcceso: accionAcceso,
            idUsuario: idUsuario
          }, {
            headers: this.headers
          }).subscribe(function (success) {
            console.log("usuario/accion capturados exitosamente [ ", success.respuesta, " ]");
          }, function (error) {
            console.log("hubo un problema: ", error);
          });
        } //buscamos el usuario segun su nombre para asi registrar su accesos en la bd

      }, {
        key: "registrarAcceso",
        value: function registrarAcceso(accion, nombreUsuario) {
          var _this40 = this;

          this.http.get("/usuariosWS/buscarUsuarioPorNombre/".concat(nombreUsuario), {
            headers: this.headers
          }).subscribe(function (success) {
            var idCapturado = 0;
            var nivel = "";
            nivel = success.respuesta[0].tipoUsuario; //obtengo el nivel de acceso del usuario para el uso conveniente posteriormente

            localStorage.setItem('nivel', nivel);
            idCapturado = success.respuesta[0].idUsuario;

            _this40.agregarAcceso(accion, idCapturado); //anexamos a la db el usuario en acceso invocando tal metodo

          }, function (error) {
            console.log("hubo un problema", error);
          });
        }
      }]);

      return FuncionamientoBitacoraService;
    }();

    FuncionamientoBitacoraService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    FuncionamientoBitacoraService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FuncionamientoBitacoraService);
    /***/
  },

  /***/
  "./src/app/generar-pdfs.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/generar-pdfs.service.ts ***!
    \*****************************************/

  /*! exports provided: GenerarPDFsService */

  /***/
  function srcAppGenerarPdfsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GenerarPDFsService", function () {
      return GenerarPDFsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jspdf */
    "./node_modules/jspdf/dist/jspdf.min.js");
    /* harmony import */


    var jspdf__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var html2canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! html2canvas */
    "./node_modules/html2canvas/dist/html2canvas.js");
    /* harmony import */


    var html2canvas__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_3__);

    var GenerarPDFsService =
    /*#__PURE__*/
    function () {
      function GenerarPDFsService() {
        _classCallCheck(this, GenerarPDFsService);
      }

      _createClass(GenerarPDFsService, [{
        key: "generarPDF",
        value: function generarPDF(etiquetaPDF) {
          //document.getElementById('LogoPDF').style.display = "block";
          var data = document.getElementById(etiquetaPDF);
          html2canvas__WEBPACK_IMPORTED_MODULE_3___default()(data).then(function (canvas) {
            var imgWidth = 208;
            var pageHeight = 295;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            var contentDataURL = canvas.toDataURL('image/png');
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_2__('p', 'mm', 'a4');
            var position = 7;
            pdf.addImage(contentDataURL, 'PNG', 7, position, imgWidth, imgHeight);
            pdf.save('animalia-PDF.pdf');
          }); //document.getElementById('LogoPDF').style.display = "none";
        }
      }]);

      return GenerarPDFsService;
    }();

    GenerarPDFsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GenerarPDFsService);
    /***/
  },

  /***/
  "./src/app/herramientas/herramientas.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/herramientas/herramientas.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHerramientasHerramientasComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.cardPrincipal {\n  background-color: #000000bd;\n  border-radius: 6px;\n  width: 80%;\n  height: auto;\n  margin: 0 auto;\n}\n.btnAgregar {\n  color: #272727;\n  margin: auto;\n  width: 65%;\n}\nth.mat-header-cell {\n  padding-right: 40px !important;\n}\n.inputFiltrarxFecha {\n  margin-left: 2%;\n  margin-top: -2%;\n  width: 45%;\n}\n/*ESTILOS PARA PAGINADOR*/\n.mat-paginator {\n  width: 136%;\n  background: white;\n}\n/*PANTALLAS PEQUEÑAS*/\n@media screen and (max-width: 935px) {\n  .mat-paginator {\n    width: 109.99%;\n  }\n}\n@media screen and (max-width: 800px) {\n  .mat-paginator {\n    width: 128.99%;\n  }\n}\n@media screen and (max-width: 600px) {\n  .mat-paginator {\n    width: 264%;\n  }\n}\n@media screen and (max-width: 365px) {\n  .mat-paginator {\n    width: 306%;\n  }\n}\n@media screen and (max-width: 375px) {\n  .mat-paginator {\n    width: 292%;\n  }\n}\n@media screen and (max-width: 320px) {\n  .mat-paginator {\n    width: 350%;\n  }\n}\n::ng-deep .mat-focused {\n  /*change color of label*/\n  color: #272727 !important;\n}\n::ng-deep.mat-form-field-underline {\n  /*change color of underline*/\n  background-color: #272727 !important;\n}\n::ng-deep.mat-form-field-ripple {\n  /*change color of underline when focused*/\n  background-color: #272727 !important;\n}\n::ng-deep.mat-form-field-label {\n  color: #272727 !important;\n}\n::ng-deep.mat-tab-label {\n  color: #272727 !important;\n  font-family: \"Darker Grotesque\", sans-serif;\n  font-size: 22px;\n}\n::ng-deep.mat-tab-body-content {\n  padding: 2px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVycmFtaWVudGFzL2hlcnJhbWllbnRhcy5jb21wb25lbnQuc2NzcyIsIi9ob21lL2psZ2FsbGFyZG92L0RvY3VtZW50cy9UcmFiYWpvcy9HUlVQTyAzNzUvVElFTkRBIE1BU0NPVEFTL2RlcGxveUFuaW1hbGlhL3B1bnRvVmVudGFNYXNjb3Rhcy9zcmMvYXBwL2hlcnJhbWllbnRhcy9oZXJyYW1pZW50YXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBREVGO0FDQUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QURHRjtBQ0RBO0VBQ0ksOEJBQUE7QURJSjtBQ0FBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FER0Y7QUNBQSx5QkFBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FER0Y7QUNBQSxxQkFBQTtBQUNBO0VBQ0U7SUFDRSxjQUFBO0VER0Y7QUFDRjtBQ0FBO0VBQ0U7SUFDRSxjQUFBO0VERUY7QUFDRjtBQ0NBO0VBQ0U7SUFDRSxXQUFBO0VEQ0Y7QUFDRjtBQ0NBO0VBQ0U7SUFDRSxXQUFBO0VEQ0Y7QUFDRjtBQ0NBO0VBQ0U7SUFDRSxXQUFBO0VEQ0Y7QUFDRjtBQ0NBO0VBQ0U7SUFDRSxXQUFBO0VEQ0Y7QUFDRjtBQ0dBO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtBRERGO0FDSUE7RUFDRSw0QkFBQTtFQUNBLG9DQUFBO0FEREY7QUNJQTtFQUNFLHlDQUFBO0VBQ0Esb0NBQUE7QURERjtBQ0lBO0VBQ0UseUJBQUE7QURERjtBQ0lBO0VBQ0UseUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7QURERjtBQ0tBO0VBQ0UsdUJBQUE7QURGRiIsImZpbGUiOiJzcmMvYXBwL2hlcnJhbWllbnRhcy9oZXJyYW1pZW50YXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY2FyZFByaW5jaXBhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBiZDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYnRuQWdyZWdhciB7XG4gIGNvbG9yOiAjMjcyNzI3O1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA2NSU7XG59XG5cbnRoLm1hdC1oZWFkZXItY2VsbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxuLmlucHV0RmlsdHJhcnhGZWNoYSB7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgbWFyZ2luLXRvcDogLTIlO1xuICB3aWR0aDogNDUlO1xufVxuXG4vKkVTVElMT1MgUEFSQSBQQUdJTkFET1IqL1xuLm1hdC1wYWdpbmF0b3Ige1xuICB3aWR0aDogMTM2JTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi8qUEFOVEFMTEFTIFBFUVVFw5FBUyovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MzVweCkge1xuICAubWF0LXBhZ2luYXRvciB7XG4gICAgd2lkdGg6IDEwOS45OSU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5tYXQtcGFnaW5hdG9yIHtcbiAgICB3aWR0aDogMTI4Ljk5JTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm1hdC1wYWdpbmF0b3Ige1xuICAgIHdpZHRoOiAyNjQlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjVweCkge1xuICAubWF0LXBhZ2luYXRvciB7XG4gICAgd2lkdGg6IDMwNiU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gIC5tYXQtcGFnaW5hdG9yIHtcbiAgICB3aWR0aDogMjkyJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLm1hdC1wYWdpbmF0b3Ige1xuICAgIHdpZHRoOiAzNTAlO1xuICB9XG59XG46Om5nLWRlZXAgLm1hdC1mb2N1c2VkIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwqL1xuICBjb2xvcjogIzI3MjcyNyAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjcyNyAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lIHdoZW4gZm9jdXNlZCovXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzI3MjcgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6ICMyNzI3MjcgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC10YWItbGFiZWwge1xuICBjb2xvcjogIzI3MjcyNyAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJEYXJrZXIgR3JvdGVzcXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuOjpuZy1kZWVwLm1hdC10YWItYm9keS1jb250ZW50IHtcbiAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG59IiwiLmNhcmRQcmluY2lwYWx7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBiZDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmJ0bkFncmVnYXJ7XG4gIGNvbG9yOiAjMjcyNzI3O1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA2NSU7XG59XG50aC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHghaW1wb3J0YW50O1xufVxuXG4vL1BBUkEgTE9TIDIgSU5QVVRTIFFVRSBSRUNJQkVOIExBIEZFQ0hBIERFIEZJTFRSQURPIEVOIEVOIFRBQiBERSBSRVBPUlRFUyBFQ09OT01JQ09TXG4uaW5wdXRGaWx0cmFyeEZlY2hhe1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIG1hcmdpbi10b3A6IC0yJTtcbiAgd2lkdGg6IDQ1JTtcbn1cblxuLypFU1RJTE9TIFBBUkEgUEFHSU5BRE9SKi9cbi5tYXQtcGFnaW5hdG9yIHtcbiAgd2lkdGg6IDEzNiU7XG4gIGJhY2tncm91bmQ6d2hpdGU7XG59XG5cbi8qUEFOVEFMTEFTIFBFUVVFw5FBUyovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MzVweCkge1xuICAubWF0LXBhZ2luYXRvciB7XG4gICAgd2lkdGg6IDEwOS45OSU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLm1hdC1wYWdpbmF0b3Ige1xuICAgIHdpZHRoOiAxMjguOTklO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tYXQtcGFnaW5hdG9yIHtcbiAgICB3aWR0aDogMjY0JTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzY1cHgpIHtcbiAgLm1hdC1wYWdpbmF0b3Ige1xuICAgIHdpZHRoOiAzMDYlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICAubWF0LXBhZ2luYXRvciB7XG4gICAgd2lkdGg6IDI5MiU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC5tYXQtcGFnaW5hdG9yIHtcbiAgICB3aWR0aDogMzUwJTtcbiAgfVxufVxuXG4vL1NPQlJFRVNDUklCSVIgRUwgVEVNQSBERSBBTkdVTEFSIE1BVEVSSUFMOlxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCB7XG4gIC8qY2hhbmdlIGNvbG9yIG9mIGxhYmVsKi9cbiAgY29sb3I6ICMyNzI3MjcgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSovXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzI3MjcgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzI3ICFpbXBvcnRhbnQ7O1xufVxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtbGFiZWx7XG4gIGNvbG9yOiAjMjcyNzI3ICFpbXBvcnRhbnQ7XG59XG4vLyBBTkdVTEFSIFRBQlxuOjpuZy1kZWVwLm1hdC10YWItbGFiZWx7XG4gIGNvbG9yOiAjMjcyNzI3ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiAnRGFya2VyIEdyb3Rlc3F1ZScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLy9Bw5FBRElSIFBBRERJTkcgQUwgVEFCIEVOIEdFTkVSQUwgUEFSQSBRVUVTRSBBTENBTkNFIEEgRElTVElOR1VJUiBMQSBTT01CUkEgSU5GRVJJT1IgREUgTE9TIENBUkRTXG46Om5nLWRlZXAubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xuICBwYWRkaW5nOiAycHghaW1wb3J0YW50O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/herramientas/herramientas.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/herramientas/herramientas.component.ts ***!
    \********************************************************/

  /*! exports provided: HerramientasComponent */

  /***/
  function srcAppHerramientasHerramientasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HerramientasComponent", function () {
      return HerramientasComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _date_format_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../date-format.service */
    "./src/app/date-format.service.ts");
    /* harmony import */


    var _login_jwt_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../login-jwt.service */
    "./src/app/login-jwt.service.ts"); //LIBRERIA BOOTSTRAP

    /*ESTA FUNCION UNICAMENTE ES PARA CAMBIAR EL "OF" DEL PAGINADOR A "DE" Y NO SE VEA FEO MEZCLADO EL ESPAÑOL CON INGLES,
    ESTAMOS CONFIGURANDO LOS RANGOS DEL PAGINADOR - CORTESÍA: https://stackblitz.com/edit/angular-5mgfxh-6mbpdq */


    var etiquetaRango = function etiquetaRango(page, pageSize, length) {
      if (length == 0 || pageSize == 0) {
        //caso paginador vacio
        return "0 de ".concat(length);
      }

      length = Math.max(length, 0);
      var startIndex = page * pageSize; //indice de inicio

      /*if resumido (terneario); si el indice de inicio excede la logitud de la lista (6 - 5 de 6 por ejemplo) se veria: 6 - 10 de 6 gracias al
      [pageSizeOptions] lo cual es incorrecto pues solo hay 6 elementos en tal rango ENTONCES mejor coloca como indice final el indice inicial
      quedaria 6 - 6 de 6 que es lo correcto).*/

      var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
      return "".concat(startIndex + 1, " - ").concat(endIndex, " de ").concat(length);
    };

    var HerramientasComponent =
    /*#__PURE__*/
    function () {
      function HerramientasComponent(guardian, modalService, formBuilder, API, formateandoFecha) {
        _classCallCheck(this, HerramientasComponent);

        this.guardian = guardian;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.API = API;
        this.formateandoFecha = formateandoFecha;
        this.titulo = ""; //para el modal

        this.formValid = false; //propiedades de la table

        this.displayedColumns = ['montoTransacciones', 'montoCompras', 'utilidad'];
        this.displayedColumnsMP = ['nombreProducto', 'vendidos'];
        this.displayedColumnsRV = ['nombreVendedor', 'vendidos'];
        /*tab utilidad*/

        this.frmFiltrado = this.formBuilder.group({
          fechaInicio: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          fechaFinal: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        /*tab venta productos*/

        this.frmViabilidadProductos = this.formBuilder.group({
          fechaInicio: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          fechaFinal: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        /*tab ventas vendedores*/

        this.frmRendimientoVendedores = this.formBuilder.group({
          fechaInicio: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          fechaFinal: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.fechaMinimaFormateadaUtilidad = "";
        this.fechaMinimaFormateadaProductos = "";
        this.fechaMinimaFormateadaVendedores = "";
        this.frmFiltrado.get('fechaFinal').disable();
        this.frmViabilidadProductos.get('fechaFinal').disable();
        this.frmRendimientoVendedores.get('fechaFinal').disable();
      } //FUNCION PARA ABRIR EL MODAL, CONFIGURACIONES DE BOOTSTRAP


      _createClass(HerramientasComponent, [{
        key: "openAlta",
        value: function openAlta(content) {
          this.modal = this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          });
          this.titulo = "Agregar Proveedor";
        } //MOSTRAR UTILIDAD

      }, {
        key: "generarUtilidad",
        value: function generarUtilidad() {
          var _this41 = this;

          var fechaInicioForm = "";
          var fechaFinalForm = "";
          fechaInicioForm = this.frmFiltrado.get('fechaInicio').value;
          console.log("fecha de inicio: ", fechaInicioForm);
          fechaFinalForm = this.frmFiltrado.get('fechaFinal').value;
          var fechaInicioFormateada = this.formateandoFecha.formatearFecha(fechaInicioForm);
          var fechaFinalFormateada = this.formateandoFecha.formatearFecha(fechaFinalForm);
          this.API.mostrarReporte(fechaInicioFormateada, fechaFinalFormateada).subscribe(function (success) {
            //los valores vienen en matriz como estructura
            var valorTransacciones = success.respuesta[0][0].montoTransacciones;
            var valorCompras = success.respuesta[1][0].montoCompras;
            var valorUtilidad = success.respuesta[2][0].utilidad;
            var arregloReportesEconomicos = [{
              montoTransacciones: valorTransacciones,
              montoCompras: valorCompras,
              utilidad: valorUtilidad
            }];
            _this41.dsReporteEconomico = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](arregloReportesEconomicos);
            document.getElementById('tablaVentaConcluidaVaciaUtilidad').style.display = "none";

            if (!_this41.dsReporteEconomico.paginator) {
              _this41.dsReporteEconomico.paginator = _this41.MatPaginatorReporteEconomico;
              _this41.dsReporteEconomico.paginator._intl.itemsPerPageLabel = 'items por pagina';
              _this41.dsReporteEconomico.paginator._intl.getRangeLabel = etiquetaRango;
            }
          }, function (error) {
            console.log("hubo un problema: ", error);
          });
        } //MOSTRAR VENTAS DE PRODUCTOS

      }, {
        key: "mostrarVentasProductos",
        value: function mostrarVentasProductos() {
          var _this42 = this;

          var fechaInicioForm = "";
          var fechaFinalForm = "";
          fechaInicioForm = this.frmViabilidadProductos.get('fechaInicio').value;
          fechaFinalForm = this.frmViabilidadProductos.get('fechaFinal').value;
          var fechaInicioFormateada = this.formateandoFecha.formatearFecha(fechaInicioForm);
          var fechaFinalFormateada = this.formateandoFecha.formatearFecha(fechaFinalForm);
          this.API.mostrarViabilidadProductos(fechaInicioFormateada, fechaFinalFormateada).subscribe(function (success) {
            if (success.estatus == 1) {
              _this42.dsViabilidadProductos = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](success.respuesta);

              if (!_this42.dsViabilidadProductos.paginator) {
                _this42.dsViabilidadProductos.paginator = _this42.MatPaginatorVentasProducto;
                document.getElementById('tablaVentaConcluidaVaciaProductos').style.display = "none";
              }
            } else {
              alert("Al parecer no hay registros en estas fechas");
            }
          }, function (error) {
            console.log("hubo un problema: ", error);
          });
        } //MOSTRAR VENTAS VENDEDORES

      }, {
        key: "mostrarVentasVendedores",
        value: function mostrarVentasVendedores() {
          var _this43 = this;

          var fechaInicioForm = "";
          var fechaFinalForm = "";
          fechaInicioForm = this.frmRendimientoVendedores.get('fechaInicio').value;
          fechaFinalForm = this.frmRendimientoVendedores.get('fechaFinal').value;
          var fechaInicioFormateada = this.formateandoFecha.formatearFecha(fechaInicioForm);
          var fechaFinalFormateada = this.formateandoFecha.formatearFecha(fechaFinalForm);
          this.API.mostrarRendimientoVendedores(fechaInicioFormateada, fechaFinalFormateada).subscribe(function (success) {
            //el ws regresa 0 en el numero de ventas en lugar de null y null el nombre del vendedor si no hay ventas por eso esta validacion.
            if (success.estatus == 1 && success.respuesta[0].nombreVendedor != null) {
              _this43.dsRendimientoVendedores = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](success.respuesta);

              if (!_this43.dsRendimientoVendedores.paginator) {
                _this43.dsRendimientoVendedores.paginator = _this43.MatPaginatorVentasVendedores;
                document.getElementById('tablaVentaConcluidaVaciaVendedores').style.display = "none";
              }
            } else {
              alert("Al parecer no hay registro en estas fechas.");
            }
          }, function (error) {
            console.log("hubo un problema: ", error);
          });
        } //VALIDACION MIN DE INPUTS DE FILTRADO: TAB UTILIDAD

      }, {
        key: "validarInputsFechaUtilidad",
        value: function validarInputsFechaUtilidad(event) {
          var fechaMinima = "";
          this.fechaMinimaFormateadaUtilidad = new Date();
          fechaMinima = this.frmFiltrado.get('fechaInicio').value;
          var fechaMinimaFormateadaServicio = this.formateandoFecha.formatearFecha(fechaMinima);
          var fechaMinimaFormateadaSplit = fechaMinimaFormateadaServicio.split('-'); //viene el el formato 0000-00-00 separo los elementos para pasarlos a la clase date

          /*raramente no me respeta el min (permite un dia antes del min) si unicamente lo paso con el formato de la fecha formateada, de esta manera si respeta el min,
          pd: el objeto date empieza el mes de 0 a 11*/

          this.fechaMinimaFormateadaUtilidad = new Date(parseInt(fechaMinimaFormateadaSplit[0]), parseInt(fechaMinimaFormateadaSplit[1]) - 1, parseInt(fechaMinimaFormateadaSplit[2]));
          this.frmFiltrado.get('fechaFinal').enable();
          console.log("esta es la fecha recibida: ", fechaMinima);
        } //VALIDACION MIN DE INPUTS DE FILTRADO: TAB PRODUCTOS

      }, {
        key: "validarInputsFechaProductos",
        value: function validarInputsFechaProductos(event) {
          var fechaMinima = "";
          this.fechaMinimaFormateadaProductos = new Date();
          fechaMinima = this.frmViabilidadProductos.get('fechaInicio').value;
          var fechaMinimaFormateadaServicio = this.formateandoFecha.formatearFecha(fechaMinima);
          var fechaMinimaFormateadaSplit = fechaMinimaFormateadaServicio.split('-'); //viene el el formato 0000-00-00 separo los elementos para pasarlos a la clase date

          /*raramente no me respeta el min (permite un dia antes del min) si unicamente lo paso con el formato de la fecha formateada, de esta manera si respeta el min,
          pd: el objeto date empieza el mes de 0 a 11*/

          this.fechaMinimaFormateadaProductos = new Date(parseInt(fechaMinimaFormateadaSplit[0]), parseInt(fechaMinimaFormateadaSplit[1]) - 1, parseInt(fechaMinimaFormateadaSplit[2]));
          this.frmViabilidadProductos.get('fechaFinal').enable();
        } //VALIDACION MIN DE INPUTS DE FILTRADO: TAB VENDEDORES

      }, {
        key: "validarInputsFechaVendedores",
        value: function validarInputsFechaVendedores(event) {
          var fechaMinima = "";
          this.fechaMinimaFormateadaVendedores = new Date();
          fechaMinima = this.frmRendimientoVendedores.get('fechaInicio').value;
          var fechaMinimaFormateadaServicio = this.formateandoFecha.formatearFecha(fechaMinima);
          var fechaMinimaFormateadaSplit = fechaMinimaFormateadaServicio.split('-'); //viene el el formato 0000-00-00 separo los elementos para pasarlos a la clase date

          /*raramente no me respeta el min (permite un dia antes del min) si unicamente lo paso con el formato de la fecha formateada, de esta manera si respeta el min,
          pd: el objeto date empieza el mes de 0 a 11*/

          this.fechaMinimaFormateadaVendedores = new Date(parseInt(fechaMinimaFormateadaSplit[0]), parseInt(fechaMinimaFormateadaSplit[1]) - 1, parseInt(fechaMinimaFormateadaSplit[2]));
          this.frmRendimientoVendedores.get('fechaFinal').enable();
        } //EVITAMOS QUE EL USUARIO TRATE DE ESCRIBIR EN EL INPUT Y MANDE UNA FECHA NO VALIDA

      }, {
        key: "restringirEscritura",
        value: function restringirEscritura(event) {
          /*atrapamos la tecla ingresada en este if ternario, la propiedad which contiene el unicode de la tecla presionada*/
          var charCode = event.which ? event.which : event.keycode; //se usa which o keycode dependiendo el soporte de nuestro browser

          /*el keycode de un caracter empiezan en 0 entonces bloqueamos todos para que no
          se pueda escribir en el input*/

          if (charCode >= 0) {
            return false;
          }

          return true;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.MatPaginatorReporteEconomico._intl.itemsPerPageLabel = "items por pagina"; //inicializo los labels del paginador

          this.MatPaginatorReporteEconomico._intl.getRangeLabel = etiquetaRango; //inicializo los labels del paginador

          this.guardian.restringirAcceso();
        }
      }]);

      return HerramientasComponent;
    }();

    HerramientasComponent.ctorParameters = function () {
      return [{
        type: _login_jwt_service__WEBPACK_IMPORTED_MODULE_7__["LoginJwtService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_5__["APIService"]
      }, {
        type: _date_format_service__WEBPACK_IMPORTED_MODULE_6__["DateFormatService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('MatPaginatorReporteEconomico', {
      static: true
    })], HerramientasComponent.prototype, "MatPaginatorReporteEconomico", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('MatPaginatorVentasProducto', {
      static: true
    })], HerramientasComponent.prototype, "MatPaginatorVentasProducto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('MatPaginatorVentasVendedores', {
      static: true
    })], HerramientasComponent.prototype, "MatPaginatorVentasVendedores", void 0);
    HerramientasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-herramientas',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./herramientas.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/herramientas/herramientas.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./herramientas.component.scss */
      "./src/app/herramientas/herramientas.component.scss")).default]
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-accesos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!../accesos/accesos.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/accesos/accesos.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../accesos/accesos.component.scss */
      "./src/app/accesos/accesos.component.scss")).default]
    })], HerramientasComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cardPrincipal {\n  background-color: #0000008c;\n  border-radius: 6px;\n  width: 80%;\n  height: 85vh;\n  margin: 0 auto;\n}\n\n.cardElementos {\n  background-repeat: no-repeat;\n  background-attachment: scroll;\n  background-position: top;\n  background-size: cover;\n  border-radius: 6px;\n  height: 6.5em;\n  font-family: \"Darker Grotesque\", sans-serif;\n  font-size: 20px;\n  color: #212529;\n  position: initial;\n  text-align: center;\n  padding-top: 2.2em;\n}\n\n.cardElementos:hover {\n  background: #00000091 !important;\n  border-radius: 8px;\n  height: 6.5em;\n  font-family: \"Darker Grotesque\", sans-serif;\n  font-size: 20px;\n  text-align: center;\n  padding-top: 2.2em;\n  color: darkseagreen;\n}\n\n.iconosMenuPrincipal {\n  font-size: 60px;\n  color: #eef4f9ad;\n}\n\n.espacioDerecho {\n  margin-right: 5px;\n}\n\n.espacioSuperior {\n  margin-top: 0px;\n}\n\n.margenSuperior {\n  margin-top: 30px;\n}\n\n@media screen and (max-width: 600px) {\n  .cardElementos {\n    background: #f6f2ebe3;\n    border-radius: 5px;\n    height: 3em;\n    font-size: 14px;\n    text-align: center;\n    padding-top: 4px;\n    padding-right: 50px;\n    padding-left: 50px;\n  }\n\n  .cardElementos:hover {\n    background: #00000091;\n    color: darkseagreen;\n    border-radius: 7px;\n    height: 3em;\n    font-size: 14px;\n    text-align: center;\n    padding-top: 4px;\n    padding-right: 50px;\n    padding-left: 50px;\n  }\n\n  .margenSuperior {\n    margin-top: 0px;\n  }\n\n  .espacioSuperior {\n    margin-top: 5px;\n  }\n\n  .espacioDerecho {\n    margin-right: 0px;\n  }\n\n  .cardPrincipal {\n    background-color: #092b239e;\n    border-radius: 6px;\n    width: 80%;\n    height: 100vh;\n    margin: 0 auto;\n  }\n}\n\n@media screen and (max-width: 340px) {\n  .cardPrincipal {\n    background-color: #092b239e;\n    border-radius: 6px;\n    width: 80%;\n    height: 110vh;\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2psZ2FsbGFyZG92L0RvY3VtZW50cy9UcmFiYWpvcy9HUlVQTyAzNzUvVElFTkRBIE1BU0NPVEFTL2RlcGxveUFuaW1hbGlhL3B1bnRvVmVudGFNYXNjb3Rhcy9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENBO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQ0E7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0VGOztBREFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDR0Y7O0FEQUE7RUFDRSxpQkFBQTtBQ0dGOztBRERBO0VBQ0UsZUFBQTtBQ0lGOztBREZBO0VBQ0UsZ0JBQUE7QUNLRjs7QURGQTtFQUNFO0lBQ0UscUJBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUNLRjs7RURGQTtJQUNFLHFCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUNLRjs7RURGQTtJQUNFLGVBQUE7RUNLRjs7RURIQTtJQUNFLGVBQUE7RUNNRjs7RURKQTtJQUNFLGlCQUFBO0VDT0Y7O0VETEE7SUFDRSwyQkFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0VDUUY7QUFDRjs7QURKQTtFQUNFO0lBQ0UsMkJBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtFQ01GO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZFByaW5jaXBhbHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDhjO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogODV2aDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2FyZEVsZW1lbnRvc3tcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBoZWlnaHQ6IDYuNWVtO1xuICBmb250LWZhbWlseTogJ0RhcmtlciBHcm90ZXNxdWUnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICBwb3NpdGlvbjogaW5pdGlhbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMi4yZW07XG5cbn1cbi5jYXJkRWxlbWVudG9zOmhvdmVye1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwOTEhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGhlaWdodDogNi41ZW07XG4gIGZvbnQtZmFtaWx5OiBcIkRhcmtlciBHcm90ZXNxdWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAyLjJlbTtcbiAgY29sb3I6IGRhcmtzZWFncmVlbjtcbn1cbi5pY29ub3NNZW51UHJpbmNpcGFse1xuICBmb250LXNpemU6NjBweDtcbiAgY29sb3I6I2VlZjRmOWFkO1xufVxuXG4uZXNwYWNpb0RlcmVjaG97XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmVzcGFjaW9TdXBlcmlvcntcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLm1hcmdlblN1cGVyaW9yeyAvL3NpbXVsYSBlbCBiciBxdWUgcXVpdGUgcGFyYSBsYSByZXNwb25zaXZpZGFkIGEgbW92aWxlc1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLy9MT1MgRVNUSUxPUyBDQU1CSUFSQU4gRU4gRElTUE9TSVRJVk9TIENPTiBSRVNPTFVDSU9ORVMgUEVRVUXDkUFTXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY2FyZEVsZW1lbnRvc3tcbiAgICBiYWNrZ3JvdW5kOiAjZjZmMmViZTM7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGhlaWdodDogM2VtO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmctbGVmdDogNTBweDtcblxuICB9XG4gIC5jYXJkRWxlbWVudG9zOmhvdmVye1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA5MTtcbiAgICBjb2xvcjogZGFya3NlYWdyZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBoZWlnaHQ6IDNlbTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG5cbiAgfVxuICAubWFyZ2VuU3VwZXJpb3J7IC8vc2ltdWxhIGVsIGJyIHF1ZSBxdWl0ZSBwYXJhIGxhIHJlc3BvbnNpdmlkYWQgYSBtb3ZpbGVzXG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG4gIC5lc3BhY2lvU3VwZXJpb3J7IC8vZXNwYWNpbyBlbnRyZSBjYXJkcyBwYXJhIHF1ZSBubyBzZSB2ZWFuIHBlZ2FkYXNcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cbiAgLmVzcGFjaW9EZXJlY2hve1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICB9XG4gIC5jYXJkUHJpbmNpcGFse1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOTJiMjM5ZTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG5cbi8vRElTUE9TSVRJVk9TIE1VWSBQRVFVRcORT1NcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0MHB4KSB7XG4gIC5jYXJkUHJpbmNpcGFse1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOTJiMjM5ZTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDExMHZoO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG4iLCIuY2FyZFByaW5jaXBhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4YztcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDg1dmg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY2FyZEVsZW1lbnRvcyB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgaGVpZ2h0OiA2LjVlbTtcbiAgZm9udC1mYW1pbHk6IFwiRGFya2VyIEdyb3Rlc3F1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICBwb3NpdGlvbjogaW5pdGlhbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMi4yZW07XG59XG5cbi5jYXJkRWxlbWVudG9zOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDkxICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgaGVpZ2h0OiA2LjVlbTtcbiAgZm9udC1mYW1pbHk6IFwiRGFya2VyIEdyb3Rlc3F1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDIuMmVtO1xuICBjb2xvcjogZGFya3NlYWdyZWVuO1xufVxuXG4uaWNvbm9zTWVudVByaW5jaXBhbCB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgY29sb3I6ICNlZWY0ZjlhZDtcbn1cblxuLmVzcGFjaW9EZXJlY2hvIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5lc3BhY2lvU3VwZXJpb3Ige1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5tYXJnZW5TdXBlcmlvciB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jYXJkRWxlbWVudG9zIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjZmMmViZTM7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGhlaWdodDogM2VtO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgfVxuXG4gIC5jYXJkRWxlbWVudG9zOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwOTE7XG4gICAgY29sb3I6IGRhcmtzZWFncmVlbjtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgaGVpZ2h0OiAzZW07XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICB9XG5cbiAgLm1hcmdlblN1cGVyaW9yIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cblxuICAuZXNwYWNpb1N1cGVyaW9yIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cblxuICAuZXNwYWNpb0RlcmVjaG8ge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICB9XG5cbiAgLmNhcmRQcmluY2lwYWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOTJiMjM5ZTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNDBweCkge1xuICAuY2FyZFByaW5jaXBhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA5MmIyMzllO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogMTEwdmg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/login-jwt.service.ts":
  /*!**************************************!*\
    !*** ./src/app/login-jwt.service.ts ***!
    \**************************************/

  /*! exports provided: LoginJwtService */

  /***/
  function srcAppLoginJwtServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginJwtService", function () {
      return LoginJwtService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _funcionamiento_bitacora_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./funcionamiento-bitacora.service */
    "./src/app/funcionamiento-bitacora.service.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var LoginJwtService =
    /*#__PURE__*/
    function () {
      function LoginJwtService(http, router, bitacora, menu) {
        _classCallCheck(this, LoginJwtService);

        this.http = http;
        this.router = router;
        this.bitacora = bitacora;
        this.menu = menu;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
      }

      _createClass(LoginJwtService, [{
        key: "login",
        value: function login(nombreUsuario, contraseniaUsuario) {
          var _this44 = this;

          var accion = "acceso";
          this.http.post('/loginWS/autenticarUsuarios', {
            nombreUsuario: nombreUsuario,
            contraseniaUsuario: contraseniaUsuario
          }, {
            headers: this.headers
          }).subscribe(function (resp) {
            if (resp.estatus > 0) {
              localStorage.setItem('token', resp.respuesta); //almacenamos el token en localstorage NOTA respuesta viene del servidor y contiene el token

              localStorage.setItem('usuario', nombreUsuario); //almacenamos el token en localstorage NOTA respuesta viene del servidor y contiene el token

              _this44.bitacora.registrarAcceso(accion, nombreUsuario); //añadimos el usuario en sesion a la bitacora de accesos


              console.log("sesion iniciada");
              document.getElementById('idLogin').style.pointerEvents = "none"; //bloquea el evento click en el login

              document.getElementById('idLogin').style.opacity = "0.5";
              document.getElementById('idSpinner').style.display = "block"; //libera el spinner que simula la carga de la app

              document.getElementById('idSpinner').style.opacity = "1.0"; //libera el spinner que simula la carga de la app

              setTimeout(function () {
                //pongo un setTimeout para que en el navegador se alcance a plasmar el localStorage
                _this44.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                  'Authorization': 'Bearer ' + localStorage.getItem('token'),
                  'Content-Type': 'application/json',
                  'Accept': 'application/json' //acepta el cuerpo de la peticion JSON

                });

                _this44.menu.cambiarEtiqueta();

                _this44.router.navigate(['/facturas']);

                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"].denegarModulosVendedores();
                /*en este lapso puedes poner un spinner*/

              }, 3000);
            } else {
              alert("verifica tus datos");
            }
          }, function (error) {
            alert("Problemas de conexión");
            console.log("este es tu error:", error);
          });
        } //EVITAR ACCESO DE VENDEDORES A MODULOS DEL GERENTE

      }, {
        key: "restringirAcceso",
        value: function restringirAcceso() {
          //let cerrarMenu:AppComponent;
          var nivel = "";
          nivel = localStorage.getItem('nivel');

          if (nivel != 'gerente') {
            /*apesar de que el metodo logout redirige a login,
            redirijo yo primero ya que mencionado metodo contiene un setTimeout
            y por un momento se alcanza a notar el modulo a tratar de acceder*/
            this.router.navigate(['/login']);
            setTimeout( //este setTimeout se pone para que se cargue bien al login antes de enviar este msj y exista el idToolbar
            function () {
              document.getElementById("idToolbar").style.display = "none";
              alert('Verifica que eres gerente');
            }, 500);
          }
        }
      }]);

      return LoginJwtService;
    }();

    LoginJwtService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _funcionamiento_bitacora_service__WEBPACK_IMPORTED_MODULE_4__["FuncionamientoBitacoraService"]
      }, {
        type: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
      }];
    };

    LoginJwtService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginJwtService);
    /***/
  },

  /***/
  "./src/app/login/login.component.scss":
  /*!********************************************!*\
    !*** ./src/app/login/login.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".background {\n  background: url('tapizLogin2.jpg');\n  background-repeat: no-repeat;\n  background-attachment: scroll;\n  background-position: center;\n  background-size: cover;\n  height: 100vh;\n  width: 100vw;\n}\n\n.contenedorInputs > * {\n  width: 100%;\n}\n\n.cardFormulario {\n  background: #f4f4f4;\n  margin: auto;\n  margin-top: 20px;\n  border-radius: 10px;\n  height: auto;\n  width: 360px;\n  box-shadow: #353434 0px 1px 4px 0px;\n}\n\n.btLogin {\n  width: 100%;\n}\n\n.spinner {\n  position: absolute;\n  z-index: 2;\n  margin-top: 35vh;\n  margin-left: 47%;\n}\n\n.margenSuperior {\n  margin-top: 75px;\n}\n\n.textoProblemasAcceder {\n  font-size: 17px;\n  text-align: center;\n  cursor: pointer;\n}\n\n/*PERSONALIZAR EL COLOR DE INPUT\n::ng-deep .mat-focused {//cambia el color del label cuando se enfoca\n  color: #272727 !important;\n }\n ::ng-deep.mat-form-field-underline { //cambia el color del subrayado\n  background-color: #272727 !important;\n  border-color: #272727 !important;\n}\n::ng-deep.mat-form-field-ripple {//cambiar el color del subrayado cuando se enfoca\n background-color: #272727 !important;\n border-color: #272727 !important;\n\n}\n::ng-deep.mat-form-field-label{//color del label\n  color: #272727 !important;\n}\n::ng-deep.mat-input-element {//color del punto de insercion (parpadeo de barra vertical al escribir)\n    caret-color: #272727 !important;\n}\n*/\n\n::ng-deep.mat-snack-bar-container {\n  color: black !important;\n  background: #e1d4c8 !important;\n}\n\n::ng-deep.mat-simple-snackbar {\n  font-family: \"Darker Grotesque\", sans-serif !important;\n  font-size: 20px !important;\n}\n\n::ng-deep.mat-button {\n  color: black !important;\n  font-family: \"Darker Grotesque\", sans-serif !important;\n  font-size: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2psZ2FsbGFyZG92L0RvY3VtZW50cy9UcmFiYWpvcy9HUlVQTyAzNzUvVElFTkRBIE1BU0NPVEFTL2RlcGxveUFuaW1hbGlhL3B1bnRvVmVudGFNYXNjb3Rhcy9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtDQUFBO0VBQ0MsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDRCxhQUFBO0VBQ0EsWUFBQTtBQ0NEOztBREdBO0VBQ0UsV0FBQTtBQ0FGOztBREVBO0VBQ0UsbUJBQUE7RUFFQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7QUNBRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHQTtFQUNFLGdCQUFBO0FDQUY7O0FESUE7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDREQ7O0FES0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTs7QUFzQkE7RUFDQyx1QkFBQTtFQUNBLDhCQUFBO0FDSkQ7O0FETUE7RUFDQyxzREFBQTtFQUNBLDBCQUFBO0FDSEQ7O0FES0E7RUFDQyx1QkFBQTtFQUNBLHNEQUFBO0VBQ0EsMEJBQUE7QUNGRCIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XG5cdGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy90YXBpekxvZ2luMi5qcGcnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0aGVpZ2h0OiAxMDB2aDtcblx0d2lkdGg6IDEwMHZ3O1xufVxuXG5cbi5jb250ZW5lZG9ySW5wdXRzID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNhcmRGb3JtdWxhcmlvIHtcbiAgYmFja2dyb3VuZDojZjRmNGY0O1xuICAvLyNkZmRjZDRcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAzNjBweDtcbiAgYm94LXNoYWRvdzogIzM1MzQzNCAwcHggMXB4IDRweCAwcHg7XG59XG4uYnRMb2dpbntcbiAgd2lkdGg6IDEwMCU7XG59XG4vL0VTUElORVIgUVVFIEFQQVJFQ0UgQ0FEQSBRVUUgU0UgTE9HVUVBIEVMIFVTVUFSSU9cbi5zcGlubmVye1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR6LWluZGV4OiAyO1xuICAgIG1hcmdpbi10b3A6IDM1dmg7XG4gICAgbWFyZ2luLWxlZnQ6IDQ3JTtcbn1cblxuLy9TRVBBUkEgRUwgQk9UT04gREUgSU5HUkVTQVIgREUgTE9TIElOUFVUU1xuLm1hcmdlblN1cGVyaW9ye1xuICBtYXJnaW4tdG9wOiA3NXB4O1xufVxuXG4vL1RFWFRPIERFIFBST0JMRU1BIEFMIEFDQ0VERVIgREVCQUpPIERFIElOUFVUU1xuLnRleHRvUHJvYmxlbWFzQWNjZWRlcntcblx0Zm9udC1zaXplOiAxN3B4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cbi8vU09CUkVFU0NSSUJJUiBFTCBURU1BIERFIEFOR1VMQVIgTUFURVJJQUw6XG5cbi8qUEVSU09OQUxJWkFSIEVMIENPTE9SIERFIElOUFVUXG46Om5nLWRlZXAgLm1hdC1mb2N1c2VkIHsvL2NhbWJpYSBlbCBjb2xvciBkZWwgbGFiZWwgY3VhbmRvIHNlIGVuZm9jYVxuICBjb2xvcjogIzI3MjcyNyAhaW1wb3J0YW50O1xuIH1cbiA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHsgLy9jYW1iaWEgZWwgY29sb3IgZGVsIHN1YnJheWFkb1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzI3ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzI3MjcyNyAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7Ly9jYW1iaWFyIGVsIGNvbG9yIGRlbCBzdWJyYXlhZG8gY3VhbmRvIHNlIGVuZm9jYVxuIGJhY2tncm91bmQtY29sb3I6ICMyNzI3MjcgIWltcG9ydGFudDtcbiBib3JkZXItY29sb3I6ICMyNzI3MjcgIWltcG9ydGFudDtcblxufVxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLWxhYmVsey8vY29sb3IgZGVsIGxhYmVsXG4gIGNvbG9yOiAjMjcyNzI3ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAubWF0LWlucHV0LWVsZW1lbnQgey8vY29sb3IgZGVsIHB1bnRvIGRlIGluc2VyY2lvbiAocGFycGFkZW8gZGUgYmFycmEgdmVydGljYWwgYWwgZXNjcmliaXIpXG4gICAgY2FyZXQtY29sb3I6ICMyNzI3MjcgIWltcG9ydGFudDtcbn1cbiovXG5cbi8vUEVSU09OQUxJWkFSIFNOQUNLIEJBUlxuOjpuZy1kZWVwLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHsvL3RvZG8gZWwgc25hY2sgcXVlIHNlIGRlc3BsaWVnYVxuXHRjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcblx0YmFja2dyb3VuZDojZTFkNGM4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAubWF0LXNpbXBsZS1zbmFja2Jhcntcblx0Zm9udC1mYW1pbHk6ICdEYXJrZXIgR3JvdGVzcXVlJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuXHRmb250LXNpemU6IDIwcHghaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwLm1hdC1idXR0b257IC8vbGFiZWwgY2VycmFyIChlcyB1biBidG4pXG5cdGNvbG9yOiBibGFjayFpbXBvcnRhbnQ7XG5cdGZvbnQtZmFtaWx5OiAnRGFya2VyIEdyb3Rlc3F1ZScsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcblx0Zm9udC1zaXplOiAyMHB4IWltcG9ydGFudDtcbn1cbiIsIi5iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy90YXBpekxvZ2luMi5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuLmNvbnRlbmVkb3JJbnB1dHMgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkRm9ybXVsYXJpbyB7XG4gIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMzYwcHg7XG4gIGJveC1zaGFkb3c6ICMzNTM0MzQgMHB4IDFweCA0cHggMHB4O1xufVxuXG4uYnRMb2dpbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3Bpbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgbWFyZ2luLXRvcDogMzV2aDtcbiAgbWFyZ2luLWxlZnQ6IDQ3JTtcbn1cblxuLm1hcmdlblN1cGVyaW9yIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbn1cblxuLnRleHRvUHJvYmxlbWFzQWNjZWRlciB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qUEVSU09OQUxJWkFSIEVMIENPTE9SIERFIElOUFVUXG46Om5nLWRlZXAgLm1hdC1mb2N1c2VkIHsvL2NhbWJpYSBlbCBjb2xvciBkZWwgbGFiZWwgY3VhbmRvIHNlIGVuZm9jYVxuICBjb2xvcjogIzI3MjcyNyAhaW1wb3J0YW50O1xuIH1cbiA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHsgLy9jYW1iaWEgZWwgY29sb3IgZGVsIHN1YnJheWFkb1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzI3ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzI3MjcyNyAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7Ly9jYW1iaWFyIGVsIGNvbG9yIGRlbCBzdWJyYXlhZG8gY3VhbmRvIHNlIGVuZm9jYVxuIGJhY2tncm91bmQtY29sb3I6ICMyNzI3MjcgIWltcG9ydGFudDtcbiBib3JkZXItY29sb3I6ICMyNzI3MjcgIWltcG9ydGFudDtcblxufVxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLWxhYmVsey8vY29sb3IgZGVsIGxhYmVsXG4gIGNvbG9yOiAjMjcyNzI3ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAubWF0LWlucHV0LWVsZW1lbnQgey8vY29sb3IgZGVsIHB1bnRvIGRlIGluc2VyY2lvbiAocGFycGFkZW8gZGUgYmFycmEgdmVydGljYWwgYWwgZXNjcmliaXIpXG4gICAgY2FyZXQtY29sb3I6ICMyNzI3MjcgIWltcG9ydGFudDtcbn1cbiovXG46Om5nLWRlZXAubWF0LXNuYWNrLWJhci1jb250YWluZXIge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2UxZDRjOCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LXNpbXBsZS1zbmFja2JhciB7XG4gIGZvbnQtZmFtaWx5OiBcIkRhcmtlciBHcm90ZXNxdWVcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1idXR0b24ge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiRGFya2VyIEdyb3Rlc3F1ZVwiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _login_jwt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../login-jwt.service */
    "./src/app/login-jwt.service.ts");
    /* harmony import */


    var js_sha256__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! js-sha256 */
    "./node_modules/js-sha256/src/sha256.js");
    /* harmony import */


    var js_sha256__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _recuperar_contrasenia_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../recuperar-contrasenia.service */
    "./src/app/recuperar-contrasenia.service.ts"); //invocaremos el metodo que cierra el login el cual se encuentra aquí


    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, formBuilder, jwt, _snackBar, cerrarMenu, API) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.formBuilder = formBuilder;
        this.jwt = jwt;
        this._snackBar = _snackBar;
        this.cerrarMenu = cerrarMenu;
        this.API = API;
        this.formValid = false;
        this.frmLogin = this.formBuilder.group({
          nombreUsuario: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          passwordUsuario: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        localStorage.clear(); //limpiamos ls lo antes posible

        console.log("::::: app limpia :::::::");
      }

      _createClass(LoginComponent, [{
        key: "openSnackBar",
        value: function openSnackBar() {
          this._snackBar.open('Comunicate: JLGallardoV@yandex.com', 'x', {
            duration: 10000
          });
        }
      }, {
        key: "login",
        value: function login() {
          var constrasenaEncriptada = Object(js_sha256__WEBPACK_IMPORTED_MODULE_6__["sha256"])(this.frmLogin.get('passwordUsuario').value); //Encriptacion de constraña sha256

          this.jwt.login(this.frmLogin.get('nombreUsuario').value, constrasenaEncriptada); //invocando metodo con la peticon del login, proveniente del servicio
        }
      }, {
        key: "enviarCorreo",
        value: function enviarCorreo(usuario) {
          this.API.enviarCorreo(usuario);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _login_jwt_service__WEBPACK_IMPORTED_MODULE_5__["LoginJwtService"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
      }, {
        type: _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
      }, {
        type: _recuperar_contrasenia_service__WEBPACK_IMPORTED_MODULE_8__["RecuperarContraseniaService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/login/login.component.scss")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/productos/productos.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/productos/productos.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductosProductosComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cardPrincipal {\n  background-color: #000000bd;\n  border-radius: 6px;\n  width: 80%;\n  height: auto;\n  margin: 0 auto;\n  transition: 0.5s;\n}\n\n.tablaElastica {\n  overflow-y: auto;\n  min-height: auto;\n  max-height: 45%;\n  transition: 0.5s;\n}\n\n.inputModal {\n  width: 50% !important;\n  font-size: 20px !important;\n}\n\n::ng-deep.cdk-overlay-container {\n  z-index: 10001 !important;\n}\n\n::ng-deep.mat-tab-body-content {\n  padding: 2px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2psZ2FsbGFyZG92L0RvY3VtZW50cy9UcmFiYWpvcy9HUlVQTyAzNzUvVElFTkRBIE1BU0NPVEFTL2RlcGxveUFuaW1hbGlhL3B1bnRvVmVudGFNYXNjb3Rhcy9zcmMvYXBwL3Byb2R1Y3Rvcy9wcm9kdWN0b3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3Rvcy9wcm9kdWN0b3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURLQTtFQUNFLHFCQUFBO0VBQ0EsMEJBQUE7QUNGRjs7QURLQTtFQUNFLHlCQUFBO0FDRkY7O0FETUE7RUFDRSx1QkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdG9zL3Byb2R1Y3Rvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQ0FSRCBET05ERSBFU1RBTiBMQSBNQVlPUklBIERFIENPTVBPTkVOVEVTIChDT01PIExBIFRBQkxBKVxuLmNhcmRQcmluY2lwYWx7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBiZDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4vL0xPTkdJVFVERVMgREUgTEEgVEFCTEEsIEVWSVRBIFFVRSBTRSBERVNCT1JERU4gTE9TIERBVE9TIERFIExBIFRBQkxBXG4udGFibGFFbGFzdGljYXtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWluLWhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogNDUlO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4vL1BBUkEgUE9QT1ZFUiBERSBNQVMgSU5GT1JNQUNJT05cbi5pbnB1dE1vZGFse1xuICB3aWR0aDogNTAlIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4IWltcG9ydGFudDtcbn1cbi8vU09CUkVFU0NSSUJJUiBPUFRJT05TIERFTCBTRUxFQ1QgUEFSQSBRVUUgU0UgVkVBTiBBUlJJQkEgREVMIE1PREFMXG46Om5nLWRlZXAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgei1pbmRleDogMTAwMDEhaW1wb3J0YW50O1xufVxuXG4vL0HDkUFESVIgUEFERElORyBBTCBUQUIgRU4gR0VORVJBTCBQQVJBIFFVRVNFIEFMQ0FOQ0UgQSBESVNUSU5HVUlSIExBIFNPTUJSQSBJTkZFUklPUiBERSBMT1MgQ0FSRFNcbjo6bmctZGVlcC5tYXQtdGFiLWJvZHktY29udGVudCB7XG4gIHBhZGRpbmc6IDJweCFpbXBvcnRhbnQ7XG59XG4iLCIuY2FyZFByaW5jaXBhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBiZDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4udGFibGFFbGFzdGljYSB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDQ1JTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmlucHV0TW9kYWwge1xuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgei1pbmRleDogMTAwMDEgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC10YWItYm9keS1jb250ZW50IHtcbiAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/productos/productos.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/productos/productos.component.ts ***!
    \**************************************************/

  /*! exports provided: ProductosComponent */

  /***/
  function srcAppProductosProductosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductosComponent", function () {
      return ProductosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _date_format_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../date-format.service */
    "./src/app/date-format.service.ts");
    /* harmony import */


    var _login_jwt_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../login-jwt.service */
    "./src/app/login-jwt.service.ts");
    /* harmony import */


    var _confirmar_eliminar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../confirmar-eliminar.service */
    "./src/app/confirmar-eliminar.service.ts");
    /* harmony import */


    var _generar_pdfs_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../generar-pdfs.service */
    "./src/app/generar-pdfs.service.ts"); //LIBRERIA BOOTSTRAP

    /*ESTA FUNCION UNICAMENTE ES PARA CAMBIAR EL "OF" DEL PAGINADOR A "DE" Y NO SE VEA FEO MEZCLADO EL ESPAÑOL CON INGLES,
    ESTAMOS CONFIGURANDO LOS RANGOS DEL PAGINADOR - CORTESÍA: https://stackblitz.com/edit/angular-5mgfxh-6mbpdq */


    var etiquetaRango = function etiquetaRango(page, pageSize, length) {
      if (length == 0 || pageSize == 0) {
        //caso paginador vacio
        return "0 de ".concat(length);
      }

      length = Math.max(length, 0);
      var startIndex = page * pageSize; //indice de inicio

      /*if resumido; si el indice de inicio excede la logitud de la lista (6 - 5 de 6 por ejemplo) se veria: 6 - 10 de 6 gracias al
      [pageSizeOptions] lo cual es incorrecto pues solo hay 6 elementos en tal rango ENTONCES mejor coloca como indice final el indice inicial
      quedaria 6 - 6 de 6 que es lo correcto).*/

      var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
      return "".concat(startIndex + 1, " - ").concat(endIndex, " de ").concat(length);
    };

    var ProductosComponent =
    /*#__PURE__*/
    function () {
      function ProductosComponent(guardian, modalService, formBuilder, API, formateandoFecha, eliminacionSegura, PDF) {
        _classCallCheck(this, ProductosComponent);

        this.guardian = guardian;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.API = API;
        this.formateandoFecha = formateandoFecha;
        this.eliminacionSegura = eliminacionSegura;
        this.PDF = PDF;
        this.titulo = ""; //para el modal

        this.formValid = false;
        this.arregloDetalleProducto = [];
        this.displayedColumns = ['idProducto', 'nombreProducto', 'detalleProducto', 'stockProducto', 'precioUnitarioProducto', 'acciones'];
        this.frmProductos = this.formBuilder.group({
          idProducto: [""],
          nombreProducto: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          detalleProducto: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          contenidoProducto: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          fechaCaducidadProducto: [""],
          paisOrigenProducto: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          stockProducto: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          precioUnitarioProducto: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          precioCompraProducto: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          idCategoria: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          idAlmacen: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        this.arregloCategoria = [];
        this.tablaConDatosProductos = false;
      } //FUNCION PARA ABRIR EL MODAL, CONFIGURACIONES DE BOOTSTRAP


      _createClass(ProductosComponent, [{
        key: "openAltaProducto",
        value: function openAltaProducto(contentProducto) {
          this.modal = this.modalService.open(contentProducto, {
            size: 'lg'
          });
          this.titulo = "Agregar Producto";
        } //ABRIR MODAL CON LOS DATOS A EDITAR

      }, {
        key: "openEditarProducto",
        value: function openEditarProducto(contentProducto, idProducto, nombreProducto, detalleProducto, contenidoProducto, fechaCaducidadProducto, paisOrigenProducto, stockProducto, precioUnitarioProducto, precioCompraProducto, idCategoria, idAlmacen) {
          console.log("esto pasa por id cate: ", idCategoria);
          this.modal = this.modalService.open(contentProducto, {
            size: 'lg'
          });
          this.titulo = "Editar Producto"; //pintando los valores en el modal listos para editarlos

          this.frmProductos.controls['idProducto'].setValue(idProducto); // si checamos el DOM veremos que el input es hide para evitar su modificacion posteriormente

          this.frmProductos.controls['nombreProducto'].setValue(nombreProducto);
          this.frmProductos.controls['detalleProducto'].setValue(detalleProducto);
          this.frmProductos.controls['contenidoProducto'].setValue(contenidoProducto);
          /*si es un producto que no tiene fecha de caducidad, previamente se le asigno un formato como este; pero para evitar
            que se aplique el disabled al btn de ejecutar del html por el formato incorrecto, entonces asignamos null
            (posteriormente en el click de ejecutar se manda de nuevo el formato 0000-00-00 para que sea aceptado por mi sgbd)*/

          fechaCaducidadProducto == '0000-00-00' ? fechaCaducidadProducto = null : null;
          this.frmProductos.controls['fechaCaducidadProducto'].setValue(fechaCaducidadProducto);
          this.frmProductos.controls['paisOrigenProducto'].setValue(paisOrigenProducto);
          this.frmProductos.controls['stockProducto'].setValue(stockProducto);
          this.frmProductos.controls['precioUnitarioProducto'].setValue(precioUnitarioProducto);
          this.frmProductos.controls['precioCompraProducto'].setValue(precioCompraProducto);
          this.frmProductos.controls['idCategoria'].setValue(idCategoria);
          this.frmProductos.controls['idAlmacen'].setValue(idAlmacen);
        } //MOSTRAR LOS DETALLES DEL PRODUCTO EN EL MODAL

      }, {
        key: "openScrollableContentProductos",
        value: function openScrollableContentProductos(longContentProductos, idProducto) {
          this.modalService.open(longContentProductos, {
            scrollable: true
          });
          this.listarDetalleProducto(idProducto);
        } //LISTAR DETALLES PRODUCTOS

      }, {
        key: "listarDetalleProducto",
        value: function listarDetalleProducto(idProducto) {
          var _this45 = this;

          this.API.mostrarDetalleProducto(idProducto).subscribe(function (success) {
            _this45.arregloDetalleProducto = success.respuesta;
          }, function (error) {
            console.log(error);
          });
        } //LISTAR PRODUCTOS

      }, {
        key: "listarProductos",
        value: function listarProductos() {
          var _this46 = this;

          this.API.mostrarProductos().subscribe(function (success) {
            //manipulamos esta variable para dar uso a un ngif que se uso en la vista en un label
            if (success.estatus > 0) {
              _this46.tablaConDatosProductos = true;
            }

            if (success.estatus == 0) {
              _this46.tablaConDatosProductos = false;
            }

            _this46.dsProductos = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](success.respuesta);
            _this46.dsProductos.paginator = _this46.paginator;
            _this46.dsProductos.paginator._intl.itemsPerPageLabel = 'items por pagina';
            _this46.dsProductos.paginator._intl.getRangeLabel = etiquetaRango;
          }, function (error) {
            console.log("hubo un problema: ", error);
          });
        } //LISTAR CATEGORIA PARA EL SELECT DEL FORMULARIO

      }, {
        key: "listarCategorias",
        value: function listarCategorias() {
          var _this47 = this;

          this.API.mostrarCategorias().subscribe(function (success) {
            _this47.arregloCategoria = success.respuesta;
            console.log("arreglo categorias: ", _this47.arregloCategoria);
          }, function (error) {
            console.log("hubo un problema: ", error);
          });
        } //LISTAR ALMACEN PARA EL SELECT DEL FORMULARIO

      }, {
        key: "listarAlmacenes",
        value: function listarAlmacenes() {
          var _this48 = this;

          this.API.mostrarAlmacenes().subscribe(function (success) {
            _this48.arregloAlmacenes = success.respuesta;
          }, function (error) {
            console.log("hubo un problema: ", error);
          });
        } //AGREGAR CLIENTE Y ACTUALIZAR CLIENTE: EVITO CREAR 2 MODALES

      }, {
        key: "ejecutarPeticion",
        value: function ejecutarPeticion() {
          var _this49 = this;

          var idProductoForm = this.frmProductos.get('idProducto').value;
          var nombreProductoForm = this.frmProductos.get('nombreProducto').value;
          var detalleProductoForm = this.frmProductos.get('detalleProducto').value;
          var contenidoProductoForm = this.frmProductos.get('contenidoProducto').value;
          var fechaCaducidadProductoForm = this.frmProductos.get('fechaCaducidadProducto').value;
          var paisOrigenProductoForm = this.frmProductos.get('paisOrigenProducto').value;
          var stockProductoForm = this.frmProductos.get('stockProducto').value;
          var precioUnitarioProductoForm = this.frmProductos.get('precioUnitarioProducto').value;
          var precioCompraProductoForm = this.frmProductos.get('precioCompraProducto').value;
          var idCategoriaForm = this.frmProductos.get('idCategoria').value;
          var idAlmacenForm = this.frmProductos.get('idAlmacen').value;
          /*if reducido para formatear en caso de querer enviar un null en la edicion/alta de fecha (mi sgbd no me acepta null en date)
          quitamos el null y justo al momento de guardar asignamos el siguiente formato*/

          console.log("fecha! ", fechaCaducidadProductoForm);

          if (fechaCaducidadProductoForm == null || fechaCaducidadProductoForm == NaN || fechaCaducidadProductoForm == undefined || fechaCaducidadProductoForm == "") {
            fechaCaducidadProductoForm = '0000-00-00';
          } else {
            fechaCaducidadProductoForm = this.formateandoFecha.formatearFecha(fechaCaducidadProductoForm); //le quito el formato raro que manda el picker para que sea aceptado por mi sgbd
          }

          if (this.titulo == "Agregar Producto") {
            this.API.aniadirProducto(nombreProductoForm, detalleProductoForm, contenidoProductoForm, fechaCaducidadProductoForm, paisOrigenProductoForm, stockProductoForm, precioUnitarioProductoForm, precioCompraProductoForm, idCategoriaForm, idAlmacenForm).subscribe(function (success) {
              alert(JSON.stringify(success.respuesta));

              _this49.listarProductos();

              _this49.frmProductos.reset();

              _this49.modal.close();
            }, function (error) {
              console.log("hubo un problema: ", error);
            });
          }

          if (this.titulo == "Editar Producto") {
            this.API.actualizarProducto(idProductoForm, nombreProductoForm, detalleProductoForm, contenidoProductoForm, fechaCaducidadProductoForm, paisOrigenProductoForm, stockProductoForm, precioUnitarioProductoForm, precioCompraProductoForm, idCategoriaForm, idAlmacenForm).subscribe(function (success) {
              alert(JSON.stringify(success.respuesta));

              _this49.listarProductos();

              _this49.frmProductos.reset();

              _this49.modal.close();
            }, function (error) {
              console.log("hubo un problema: ", error);
            });
          }
        } //ELIMINAR PRODUCTO

      }, {
        key: "eliminarProducto",
        value: function eliminarProducto(idProducto) {
          var _this50 = this;

          var respuesta = false;
          respuesta = this.eliminacionSegura.confirmarEliminacion();

          if (respuesta == true) {
            this.API.borrarProducto(idProducto).subscribe(function (success) {
              alert(success.respuesta);

              _this50.listarProductos();
            }, function (error) {
              console.log("hubo un problema: ", error);
            });
          } else {
            console.log("eliminacion cancelada");
          }
        } //FUNCIONALIDAD FILTRAR

      }, {
        key: "filtrarRegistros",
        value: function filtrarRegistros(filterValue) {
          this.dsProductos.filter = filterValue.trim().toLowerCase(); //si se usa el modulo tab de transacciones, entonces arroja los resultados buscados en la primer pagina: (if reducido)

          this.dsProductos.paginator ? this.dsProductos.paginator.firstPage() : null;
        } //INVOCANDO SERVICIO PARA GENERAR PDF DE TODA LA VISTA DE LA TABLA

      }, {
        key: "generarPDF",
        value: function generarPDF(etiquetaPDF) {
          var _this51 = this;

          this.API.mostrarProductos().subscribe(function (success) {
            //REPITE EL PROCESO TANTOS REGISTROS EXISTAN EN EL ARREGLO
            for (var i = 0; i < success.respuesta.length; i++) {
              document.getElementById('botones' + success.respuesta[i].idProducto).style.display = "none"; //esto trabaja concatenando el id de cada registro

              document.getElementById('encabezadoBotones').style.display = "none";
            }

            _this51.PDF.generarPDF(etiquetaPDF);

            setTimeout(function () {
              for (var _i = 0; _i < success.respuesta.length; _i++) {
                document.getElementById('botones' + success.respuesta[_i].idProducto).style.display = "table-cell";
                document.getElementById('encabezadoBotones').style.display = "table-cell";
              }
            }, 0);
          }, function (error) {
            console.log("hubo un error: ", error);
          });
        } //INVOCANDO SERVICIO PARA GENERAR PDF

      }, {
        key: "generarPdfParticular",
        value: function generarPdfParticular(etiquetaPDF) {
          this.PDF.generarPDF(etiquetaPDF);
        }
        /*ELIMINA LA LEYENDA DE TABLA VACIA UNA VEZ QUESE DETECTAN DATOS EN LA TABLA
        public removerLeyendaTablaVacia(){
            if (this.dsProductos  != null) {
                console.log("prueba contenido ds");
            }
        }*/

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.guardian.restringirAcceso();
          this.listarProductos();
          this.listarAlmacenes();
          this.listarCategorias();
        }
      }]);

      return ProductosComponent;
    }();

    ProductosComponent.ctorParameters = function () {
      return [{
        type: _login_jwt_service__WEBPACK_IMPORTED_MODULE_8__["LoginJwtService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_6__["APIService"]
      }, {
        type: _date_format_service__WEBPACK_IMPORTED_MODULE_7__["DateFormatService"]
      }, {
        type: _confirmar_eliminar_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmarEliminarService"]
      }, {
        type: _generar_pdfs_service__WEBPACK_IMPORTED_MODULE_10__["GenerarPDFsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: true
    })], ProductosComponent.prototype, "paginator", void 0);
    ProductosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-productos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./productos.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/productos/productos.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./productos.component.scss */
      "./src/app/productos/productos.component.scss")).default]
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categorias',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!../categorias/categorias.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/categorias.component.html")).default //  styleUrls: ['../categorias/categorias.component.scss']

    })], ProductosComponent);
    /***/
  },

  /***/
  "./src/app/proveedores/proveedores.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/proveedores/proveedores.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProveedoresProveedoresComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cardPrincipal {\n  background-color: #000000bd;\n  border-radius: 6px;\n  width: 80%;\n  height: auto;\n  margin: 0 auto;\n  transition: 0.5s;\n}\n\n.btnEjecutar {\n  color: #191818;\n  border: solid 1px #676767;\n  margin: auto;\n  width: 65%;\n  font-size: 20px;\n}\n\n.tablaElastica {\n  overflow-y: auto;\n  min-height: auto;\n  max-height: 45%;\n  transition: 0.5s;\n}\n\n.popover {\n  z-index: 1005 !important;\n}\n\n.inputModal {\n  width: 50% !important;\n  font-size: 20px !important;\n}\n\n::ng-deep.mat-tab-body-content {\n  padding: 2px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2psZ2FsbGFyZG92L0RvY3VtZW50cy9UcmFiYWpvcy9HUlVQTyAzNzUvVElFTkRBIE1BU0NPVEFTL2RlcGxveUFuaW1hbGlhL3B1bnRvVmVudGFNYXNjb3Rhcy9zcmMvYXBwL3Byb3ZlZWRvcmVzL3Byb3ZlZWRvcmVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm92ZWVkb3Jlcy9wcm92ZWVkb3Jlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0FGOztBRElBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDREo7O0FES0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRkY7O0FETUE7RUFDRSx3QkFBQTtBQ0hGOztBRE9BO0VBQ0UscUJBQUE7RUFDQSwwQkFBQTtBQ0pGOztBRFVBO0VBQ0UsdUJBQUE7QUNQRiIsImZpbGUiOiJzcmMvYXBwL3Byb3ZlZWRvcmVzL3Byb3ZlZWRvcmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9DQVJEIERPTkRFIEVTVEFOIExBIE1BWU9SSUEgREUgQ09NUE9ORU5URVMgKENPTU8gTEEgVEFCTEEpXG4uY2FyZFByaW5jaXBhbHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGJkO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi8vQlROIFBBUkEgRUpFQ1VUQVIgVU5BIFBFVElDSU9OIFBPU1QgTyBQVVQgREVMIE1PREFMXG4uYnRuRWplY3V0YXJ7XG4gICAgY29sb3I6ICMxOTE4MTg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzY3Njc2NztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDY1JTtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi8vTE9OR0lUVURFUyBERSBMQSBUQUJMQSwgRVZJVEEgUVVFIFNFIERFU0JPUkRFTiBMT1MgREFUT1MgREUgTEEgVEFCTEFcbi50YWJsYUVsYXN0aWNhe1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtaW4taGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA0NSU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi8vUEFSQSBQT1BPVkVSIERFIE1BUyBJTkZPUk1BQ0lPTlxuLnBvcG92ZXJ7XG4gIHotaW5kZXg6IDEwMDUhaW1wb3J0YW50O1xufVxuXG4vL1BBUkEgUE9QT1ZFUiBERSBNQVMgSU5GT1JNQUNJT05cbi5pbnB1dE1vZGFse1xuICB3aWR0aDogNTAlIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4IWltcG9ydGFudDtcbn1cblxuXG4vL1NPQlJFRVNDUklCSVIgRUwgVEVNQSBERSBBTkdVTEFSIE1BVEVSSUFMIFBBUkEgRUwgSU5QVVQgREUgQlVTQ0FSOlxuLy9Bw5FBRElSIFBBRERJTkcgQUwgVEFCIEVOIEdFTkVSQUwgUEFSQSBRVUVTRSBBTENBTkNFIEEgRElTVElOR1VJUiBMQSBTT01CUkEgSU5GRVJJT1IgREUgTE9TIENBUkRTXG46Om5nLWRlZXAubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xuICBwYWRkaW5nOiAycHghaW1wb3J0YW50O1xufVxuIiwiLmNhcmRQcmluY2lwYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYmQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJ0bkVqZWN1dGFyIHtcbiAgY29sb3I6ICMxOTE4MTg7XG4gIGJvcmRlcjogc29saWQgMXB4ICM2NzY3Njc7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDY1JTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4udGFibGFFbGFzdGljYSB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDQ1JTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLnBvcG92ZXIge1xuICB6LWluZGV4OiAxMDA1ICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dE1vZGFsIHtcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC10YWItYm9keS1jb250ZW50IHtcbiAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/proveedores/proveedores.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/proveedores/proveedores.component.ts ***!
    \******************************************************/

  /*! exports provided: ProveedoresComponent */

  /***/
  function srcAppProveedoresProveedoresComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProveedoresComponent", function () {
      return ProveedoresComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _date_format_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../date-format.service */
    "./src/app/date-format.service.ts");
    /* harmony import */


    var _login_jwt_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../login-jwt.service */
    "./src/app/login-jwt.service.ts");
    /* harmony import */


    var _confirmar_eliminar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../confirmar-eliminar.service */
    "./src/app/confirmar-eliminar.service.ts");
    /* harmony import */


    var _generar_pdfs_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../generar-pdfs.service */
    "./src/app/generar-pdfs.service.ts"); //LIBRERIA BOOTSTRAP


    var etiquetaRango = function etiquetaRango(page, pageSize, length) {
      if (length == 0 || pageSize == 0) {
        //caso paginador vacio
        return "0 de ".concat(length);
      }

      length = Math.max(length, 0);
      var startIndex = page * pageSize; //indice de inicio

      /*if resumido (terneario); si el indice de inicio excede la logitud de la lista (6 - 5 de 6 por ejemplo) se veria: 6 - 10 de 6 gracias al
      [pageSizeOptions] lo cual es incorrecto pues solo hay 6 elementos en tal rango ENTONCES mejor coloca como indice final el indice inicial
      quedaria 6 - 6 de 6 que es lo correcto).*/

      var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
      return "".concat(startIndex + 1, " - ").concat(endIndex, " de ").concat(length);
    };

    var ProveedoresComponent =
    /*#__PURE__*/
    function () {
      function ProveedoresComponent(guardian, modalService, formBuilder, API, formateandoFecha, eliminacionSegura, PDF) {
        _classCallCheck(this, ProveedoresComponent);

        this.guardian = guardian;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.API = API;
        this.formateandoFecha = formateandoFecha;
        this.eliminacionSegura = eliminacionSegura;
        this.PDF = PDF;
        this.titulo = ""; //para el modal

        this.formValid = false;
        this.arregloDetalleProveedor = [];
        this.displayedColumnsProveedores = ['idProveedor', 'nombreProveedor', 'ciudadProveedor', 'estadoProveedor', 'telefonoProveedor', 'acciones'];
        this.frmProveedores = this.formBuilder.group({
          idProveedor: "",
          nombreProveedor: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          ciudadProveedor: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          estadoProveedor: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          paisProveedor: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          direccionProveedor: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          telefonoProveedor: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          emailProveedor: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          descripcionProveedor: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
      } //FUNCION PARA ABRIR EL MODAL, CONFIGURACIONES DE BOOTSTRAP


      _createClass(ProveedoresComponent, [{
        key: "openAlta",
        value: function openAlta(content) {
          this.modal = this.modalService.open(content, {
            size: 'lg'
          });
          this.titulo = "Agregar Proveedor";
        } //ABRIR MODAL CON LOS DATOS A EDITAR

      }, {
        key: "openEditar",
        value: function openEditar(content, idProveedor, nombreProveedor, ciudadProveedor, estadoProveedor, paisProveedor, direccionProveedor, telefonoProveedor, emailProveedor, descripcionProveedor) {
          console.log("id: ", idProveedor, " nombre: ", nombreProveedor, " ciudad: ", ciudadProveedor, " email: ", emailProveedor);
          this.modal = this.modalService.open(content, {
            size: 'lg'
          });
          this.titulo = "Editar Proveedor"; //pintando los valores en el modal listos para editarlos

          this.frmProveedores.controls['idProveedor'].setValue(idProveedor); // si checamos el DOM veremos que el input es hide para evitar su modificacion posteriormente

          this.frmProveedores.controls['nombreProveedor'].setValue(nombreProveedor);
          this.frmProveedores.controls['ciudadProveedor'].setValue(ciudadProveedor);
          this.frmProveedores.controls['estadoProveedor'].setValue(estadoProveedor);
          this.frmProveedores.controls['paisProveedor'].setValue(paisProveedor);
          this.frmProveedores.controls['direccionProveedor'].setValue(direccionProveedor);
          this.frmProveedores.controls['telefonoProveedor'].setValue(telefonoProveedor);
          this.frmProveedores.controls['emailProveedor'].setValue(emailProveedor);
          this.frmProveedores.controls['descripcionProveedor'].setValue(descripcionProveedor);
        } //MOSTRAR LOS DETALLES DEL PROVEEDOR EN EL MODAL

      }, {
        key: "openScrollableContentProveedor",
        value: function openScrollableContentProveedor(longContentProveedor, idProveedor) {
          console.log("idTransaccion", idProveedor);
          this.modalService.open(longContentProveedor, {
            scrollable: true
          });
          this.listarDetalleProveedor(idProveedor);
        } //LISTAR PROVEEDOR

      }, {
        key: "listarProveedores",
        value: function listarProveedores() {
          var _this52 = this;

          this.API.mostrarProveedores().subscribe(function (success) {
            _this52.dsProveedores = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](success.respuesta);
            _this52.dsProveedores.paginator = _this52.paginator;
            _this52.paginator._intl.itemsPerPageLabel = "items por pagina";
            _this52.paginator._intl.getRangeLabel = etiquetaRango;
          }, function (error) {
            console.log("hubo un problema: ", error);
          });
        } //LISTAR DETALLES PRODUCTOS

      }, {
        key: "listarDetalleProveedor",
        value: function listarDetalleProveedor(idProveedor) {
          var _this53 = this;

          this.API.mostrarDetalleProveedor(idProveedor).subscribe(function (success) {
            _this53.arregloDetalleProveedor = success.respuesta;
          }, function (error) {
            console.log(error);
          });
        } //AGREGAR PROVEEDOR Y ACTUALIZAR PROVEEDOR: EVITO CREAR 2 MODALES

      }, {
        key: "ejecutarPeticion",
        value: function ejecutarPeticion() {
          var _this54 = this;

          var idProveedorForm = this.frmProveedores.get('idProveedor').value;
          var nombreProveedorForm = this.frmProveedores.get('nombreProveedor').value;
          var ciudadProveedorForm = this.frmProveedores.get('ciudadProveedor').value;
          var estadoProveedorForm = this.frmProveedores.get('estadoProveedor').value;
          var paisProveedorForm = this.frmProveedores.get('paisProveedor').value;
          var direccionProveedorForm = this.frmProveedores.get('direccionProveedor').value;
          var telefonoProveedorForm = this.frmProveedores.get('telefonoProveedor').value;
          var emailProveedorForm = this.frmProveedores.get('emailProveedor').value;
          var descripcionProveedorForm = this.frmProveedores.get('descripcionProveedor').value;

          if (this.titulo == "Agregar Proveedor") {
            this.API.aniadirProveedor(nombreProveedorForm, ciudadProveedorForm, estadoProveedorForm, paisProveedorForm, direccionProveedorForm, telefonoProveedorForm, emailProveedorForm, descripcionProveedorForm).subscribe(function (success) {
              alert(JSON.stringify(success.respuesta));

              _this54.listarProveedores();

              _this54.frmProveedores.reset();

              _this54.modal.close();
            }, function (error) {
              console.log("hubo un problema: ", error);
            });
          }

          if (this.titulo == "Editar Proveedor") {
            this.API.actualizarProveedor(idProveedorForm, nombreProveedorForm, ciudadProveedorForm, estadoProveedorForm, paisProveedorForm, direccionProveedorForm, telefonoProveedorForm, emailProveedorForm, descripcionProveedorForm).subscribe(function (success) {
              alert(JSON.stringify(success.respuesta));

              _this54.listarProveedores();

              _this54.frmProveedores.reset();

              _this54.modal.close();
            }, function (error) {
              console.log("hubo un problema: ", error);
            });
          }
        } //ELIMINAR PROVEEDOR

      }, {
        key: "eliminarProveedor",
        value: function eliminarProveedor(idProveedor) {
          var _this55 = this;

          var respuesta = false;
          respuesta = this.eliminacionSegura.confirmarEliminacion();

          if (respuesta == true) {
            this.API.borrarProveedor(idProveedor).subscribe(function (success) {
              alert(success.respuesta);

              _this55.listarProveedores();
            }, function (error) {
              console.log("hubo un problema: ", error);
            });
          } else {
            console.log("eliminacion cancelada");
          }
        } //FUNCIONALIDAD FILTRAR

      }, {
        key: "filtrarRegistros",
        value: function filtrarRegistros(filterValue) {
          this.dsProveedores.filter = filterValue.trim().toLowerCase(); //si se usa el modulo tab de transacciones, entonces arroja los resultados buscados en la primer pagina: (if reducido)

          this.dsProveedores.paginator ? this.dsProveedores.paginator.firstPage() : null;
        } //INVOCANDO SERVICIO PARA GENERAR PDF

      }, {
        key: "generarPDF",
        value: function generarPDF(etiquetaPDF) {
          this.PDF.generarPDF(etiquetaPDF);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.listarProveedores();
        }
      }]);

      return ProveedoresComponent;
    }();

    ProveedoresComponent.ctorParameters = function () {
      return [{
        type: _login_jwt_service__WEBPACK_IMPORTED_MODULE_8__["LoginJwtService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_6__["APIService"]
      }, {
        type: _date_format_service__WEBPACK_IMPORTED_MODULE_7__["DateFormatService"]
      }, {
        type: _confirmar_eliminar_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmarEliminarService"]
      }, {
        type: _generar_pdfs_service__WEBPACK_IMPORTED_MODULE_10__["GenerarPDFsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: true
    })], ProveedoresComponent.prototype, "paginator", void 0);
    ProveedoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-proveedores',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./proveedores.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/proveedores/proveedores.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./proveedores.component.scss */
      "./src/app/proveedores/proveedores.component.scss")).default]
    })], ProveedoresComponent);
    /***/
  },

  /***/
  "./src/app/recuperar-contrasenia.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/recuperar-contrasenia.service.ts ***!
    \**************************************************/

  /*! exports provided: RecuperarContraseniaService */

  /***/
  function srcAppRecuperarContraseniaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecuperarContraseniaService", function () {
      return RecuperarContraseniaService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RecuperarContraseniaService =
    /*#__PURE__*/
    function () {
      function RecuperarContraseniaService(actRoute, http) {
        var _this56 = this;

        _classCallCheck(this, RecuperarContraseniaService);

        this.actRoute = actRoute;
        this.http = http; //anexamos el token antes de que envie la peticion sin token y mande algun error

        this.actRoute.queryParams.subscribe(function (params) {
          var token = "";
          token = params['token'];
          localStorage.setItem('token', token);
        });
        setTimeout(function () {
          _this56.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json',
            'Accept': 'application/json' //acepta el cuerpo de la peticion JSON

          });
        }, 0);
      } //ENVIA CORREO DESDE EL LOGIN


      _createClass(RecuperarContraseniaService, [{
        key: "enviarCorreo",
        value: function enviarCorreo(usuario) {
          var _this57 = this;

          console.log("este usuario entro: ", usuario);
          this.http.get("/usuariosWS/buscarUsuarioPorNombre/".concat(usuario), {
            headers: this.headers
          }).subscribe(function (success) {
            if (success.estatus == 0) {
              alert("Verifica que tu usuario se el correcto");
              return;
            }

            var idUsuario = success.respuesta[0].idUsuario;
            var emailUsuario = success.respuesta[0].emailUsuario;
            document.getElementById('idEnviarMail').style.pointerEvents = "none"; // evitamos que el usuario oprima el btn de peticion

            console.log("enviando correo a: ", emailUsuario, " \n idUsuario", idUsuario);

            _this57.http.post("/loginWS/enviarEmail", {
              emailUsuario: emailUsuario,
              idUsuario: idUsuario
            }, {
              headers: _this57.headers
            }).subscribe(function (success) {
              alert("Revisa tu email para reestablecer tu contraseña | En caso de no encontrar tu correo en la bandeja de entrada, revisa tu spam");
              console.log("mensaje exitoso completo: ", success.respuesta);
              document.getElementById('idEnviarMail').style.pointerEvents = "unset"; // desbloqueamos nuevamente el boton de peticiones
            }, function (error) {
              console.log("este es el error", error);
            });
          }, function (error) {
            alert("Algo a ocurrido. \n Por favor verifica que hayas ingresado bien tu usuario");
            console.log("verdadero error: ", error);
          });
        } //VERIFICA QUE EL USUARIO TRAIGA EL JWT CORRECTO PARA PERMITIRLE ACCESO AL FORMULARIO

      }, {
        key: "verificarToken",
        value: function verificarToken(jwt) {
          return this.http.post("/loginWS/validarToken", {
            jwt: jwt
          }, {
            headers: this.headers
          });
        } //ACTUALIZA LA CONTRASEÑA

      }, {
        key: "sustituirContrasenia",
        value: function sustituirContrasenia(idUsuario, contraseniaUsuario) {
          console.log("usuario en api: ", idUsuario);
          return this.http.post("/loginWS/nuevaContrasenia", {
            idUsuario: idUsuario,
            contraseniaUsuario: contraseniaUsuario
          }, {
            headers: this.headers
          });
        }
      }]);

      return RecuperarContraseniaService;
    }();

    RecuperarContraseniaService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    RecuperarContraseniaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RecuperarContraseniaService);
    /***/
  },

  /***/
  "./src/app/recuperar-contrasenia/recuperar-contrasenia.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/recuperar-contrasenia/recuperar-contrasenia.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRecuperarContraseniaRecuperarContraseniaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".background {\n  background: #012440;\n  background-repeat: no-repeat;\n  background-attachment: scroll;\n  background-position: center;\n  background-size: cover;\n  height: 100vh;\n  width: 100vw;\n}\n\n.contenedorInputs > * {\n  width: 100%;\n}\n\n.cardFormulario {\n  background: #f4f4f4;\n  margin: auto;\n  margin-top: 20px;\n  border-radius: 10px;\n  height: auto;\n  width: 600px;\n  box-shadow: #353434 0px 1px 4px 0px;\n}\n\n.btLogin {\n  width: 100%;\n}\n\n.spinner {\n  position: absolute;\n  z-index: 2;\n  margin-top: 35vh;\n  margin-left: 47%;\n}\n\n.margenSuperior {\n  margin-top: 75px;\n}\n\n@media screen and (max-width: 700px) {\n  .cardFormulario {\n    width: 320px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2psZ2FsbGFyZG92L0RvY3VtZW50cy9UcmFiYWpvcy9HUlVQTyAzNzUvVElFTkRBIE1BU0NPVEFTL2RlcGxveUFuaW1hbGlhL3B1bnRvVmVudGFNYXNjb3Rhcy9zcmMvYXBwL3JlY3VwZXJhci1jb250cmFzZW5pYS9yZWN1cGVyYXItY29udHJhc2VuaWEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JlY3VwZXJhci1jb250cmFzZW5pYS9yZWN1cGVyYXItY29udHJhc2VuaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0QsYUFBQTtFQUNBLFlBQUE7QUNDRDs7QURHQTtFQUNFLFdBQUE7QUNBRjs7QURFQTtFQUNFLG1CQUFBO0VBRUEsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0FDQUY7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FER0E7RUFDRSxnQkFBQTtBQ0FGOztBRElBO0VBQ0U7SUFDRSxZQUFBO0VDREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3JlY3VwZXJhci1jb250cmFzZW5pYS9yZWN1cGVyYXItY29udHJhc2VuaWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZHtcbiAgYmFja2dyb3VuZDogIzAxMjQ0MDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0aGVpZ2h0OiAxMDB2aDtcblx0d2lkdGg6IDEwMHZ3O1xufVxuXG5cbi5jb250ZW5lZG9ySW5wdXRzID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNhcmRGb3JtdWxhcmlvIHtcbiAgYmFja2dyb3VuZDojZjRmNGY0O1xuICAvLyNkZmRjZDRcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiA2MDBweDtcbiAgYm94LXNoYWRvdzogIzM1MzQzNCAwcHggMXB4IDRweCAwcHg7XG59XG4uYnRMb2dpbntcbiAgd2lkdGg6IDEwMCU7XG59XG4vL0VTUElORVIgUVVFIEFQQVJFQ0UgQ0FEQSBRVUUgU0UgTE9HVUVBIEVMIFVTVUFSSU9cbi5zcGlubmVye1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR6LWluZGV4OiAyO1xuICAgIG1hcmdpbi10b3A6IDM1dmg7XG4gICAgbWFyZ2luLWxlZnQ6IDQ3JTtcbn1cblxuLy9TRVBBUkEgRUwgQk9UT04gREUgSU5HUkVTQVIgREUgTE9TIElOUFVUU1xuLm1hcmdlblN1cGVyaW9ye1xuICBtYXJnaW4tdG9wOiA3NXB4O1xufVxuXG4vL0NBTUJJQSBFTCBBTkNITyBERUwgQ0FSRCBQUklOQ0lQQUwgRU4gQ0FTTyBERSBQQU5UQUxMQVMgTUVOT1JFUyBBIExBU1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLmNhcmRGb3JtdWxhcmlve1xuICAgIHdpZHRoOjMyMHB4XG4gIH1cbn1cbiIsIi5iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogIzAxMjQ0MDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuXG4uY29udGVuZWRvcklucHV0cyA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcmRGb3JtdWxhcmlvIHtcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiA2MDBweDtcbiAgYm94LXNoYWRvdzogIzM1MzQzNCAwcHggMXB4IDRweCAwcHg7XG59XG5cbi5idExvZ2luIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICBtYXJnaW4tdG9wOiAzNXZoO1xuICBtYXJnaW4tbGVmdDogNDclO1xufVxuXG4ubWFyZ2VuU3VwZXJpb3Ige1xuICBtYXJnaW4tdG9wOiA3NXB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAuY2FyZEZvcm11bGFyaW8ge1xuICAgIHdpZHRoOiAzMjBweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/recuperar-contrasenia/recuperar-contrasenia.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/recuperar-contrasenia/recuperar-contrasenia.component.ts ***!
    \**************************************************************************/

  /*! exports provided: RecuperarContraseniaComponent */

  /***/
  function srcAppRecuperarContraseniaRecuperarContraseniaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecuperarContraseniaComponent", function () {
      return RecuperarContraseniaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _recuperar_contrasenia_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../recuperar-contrasenia.service */
    "./src/app/recuperar-contrasenia.service.ts");
    /* harmony import */


    var js_sha256__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! js-sha256 */
    "./node_modules/js-sha256/src/sha256.js");
    /* harmony import */


    var js_sha256__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_5__);

    var RecuperarContraseniaComponent =
    /*#__PURE__*/
    function () {
      function RecuperarContraseniaComponent(actRoute, router, formBuilder, API) {
        _classCallCheck(this, RecuperarContraseniaComponent);

        this.actRoute = actRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.API = API;
        this.formValid = false;
        this.coincidencia = false;
        this.frmRecuperarContrasenia = this.formBuilder.group({
          nuevaContrasenia: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          confirmarContrasenia: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.obtenerToken();
      } //VALIDAR QUE EL CONFIRMADO DE CONTRASEÑA SEA CORRECTO


      _createClass(RecuperarContraseniaComponent, [{
        key: "confirmarContrasenia",
        value: function confirmarContrasenia(event) {
          var nuevaContrasenia = this.frmRecuperarContrasenia.get('nuevaContrasenia').value;
          var confirmarContrasenia = this.frmRecuperarContrasenia.get('confirmarContrasenia').value;

          if (confirmarContrasenia != nuevaContrasenia) {
            console.log("falso");
            this.coincidencia = false;
            return this.coincidencia;
          } else {
            this.coincidencia = true;
            console.log("verdadero");
            return this.coincidencia;
          }
        } //VERIFICAR QUE EL TOKEN SEA EL CORRECTO, Y QUE NO CUALQUIERA ACCEDA A ESTE MODULO

      }, {
        key: "obtenerToken",
        value: function obtenerToken() {
          var _this58 = this;

          this.actRoute.queryParams.subscribe(function (params) {
            var token = "";
            token = params['token']; //console.log("jwt recibido en el cliente: ",token)

            _this58.API.verificarToken(token).subscribe(function (success) {
              if (success.estatus != 1) {
                _this58.router.navigate(['/login']);

                setTimeout(function () {
                  alert(success.respuesta);
                }, 0);
                return;
              }

              console.log("token valido");
            }, function (error) {
              console.log("error: ", error);

              _this58.router.navigate(['/login']);
            });
          });
        } //ENVIAR LA NUEVA CONTRASENIA AL SERVIDOR

      }, {
        key: "actualizarContrasenia",
        value: function actualizarContrasenia() {
          var _this59 = this;

          this.actRoute.queryParams.subscribe(function (params) {
            var idUsuario = params['idUsuario'];

            var nuevaContrasenia = _this59.frmRecuperarContrasenia.get('confirmarContrasenia').value;

            _this59.API.sustituirContrasenia(idUsuario, Object(js_sha256__WEBPACK_IMPORTED_MODULE_5__["sha256"])(nuevaContrasenia)).subscribe(function (success) {
              if (success.estatus == 1) {
                alert(success.respuesta);
                setTimeout(function () {
                  _this59.router.navigate(['/login']);
                }, 0);
                return;
              }

              alert("Lo siento intentalo nuevamente");
              console.log("motivo: ", success.respuesta);
            }, function (error) {
              console.log("error: ", error);

              _this59.router.navigate(['/login']);
            });
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          /*con esto por ninguna razon mostramos el menu en este modulo,
          esperamos 2s para asegurarnos de que la parte fisica de la app se haya cargado por completo para actuar*/
          setTimeout(function () {
            if (document.getElementById('idToolbar').style.display = 'flex') {
              document.getElementById('idToolbar').style.display = 'none';
            }
          }, 2000);
        }
      }]);

      return RecuperarContraseniaComponent;
    }();

    RecuperarContraseniaComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _recuperar_contrasenia_service__WEBPACK_IMPORTED_MODULE_4__["RecuperarContraseniaService"]
      }];
    };

    RecuperarContraseniaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-recuperar-contrasenia',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./recuperar-contrasenia.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/recuperar-contrasenia/recuperar-contrasenia.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./recuperar-contrasenia.component.scss */
      "./src/app/recuperar-contrasenia/recuperar-contrasenia.component.scss")).default]
    })], RecuperarContraseniaComponent);
    /***/
  },

  /***/
  "./src/app/transacciones/transacciones.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/transacciones/transacciones.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTransaccionesTransaccionesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".contenido {\n  width: 100vw;\n  height: auto;\n  margin: 0 auto;\n  display: block;\n}\n\n.tablaElastica {\n  overflow-y: auto;\n  min-height: 15%;\n  max-height: 45%;\n  transition: 0.5s;\n}\n\n.lupa {\n  font-size: 20px;\n  margin: 10px 0px 0px 10px;\n  color: #012440;\n}\n\n.colorPaginador {\n  width: 99.99%;\n  background: #2d618c !important;\n  color: white;\n}\n\n::ng-deep.mat-cell {\n  font-size: 18px !important;\n  color: #012440 !important;\n  background-color: white !important;\n}\n\n/*::ng-deep.mat-select-value {\n  color: white!important;\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2psZ2FsbGFyZG92L0RvY3VtZW50cy9UcmFiYWpvcy9HUlVQTyAzNzUvVElFTkRBIE1BU0NPVEFTL2RlcGxveUFuaW1hbGlhL3B1bnRvVmVudGFNYXNjb3Rhcy9zcmMvYXBwL3RyYW5zYWNjaW9uZXMvdHJhbnNhY2Npb25lcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdHJhbnNhY2Npb25lcy90cmFuc2FjY2lvbmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQUY7O0FESUE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDREY7O0FETUE7RUFDRSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7QUNIRjs7QURNQTs7RUFBQSIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWNjaW9uZXMvdHJhbnNhY2Npb25lcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5pZG97XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8vTE9OR0lUVURFUyBERSBMQSBUQUJMQSwgRVZJVEEgUVVFIFNFIERFU0JPUkRFTiBMT1MgREFUT1MgREUgTEEgVEFCTEFcbi50YWJsYUVsYXN0aWNhe1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAxNSU7XG4gIG1heC1oZWlnaHQ6IDQ1JTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLy9JQ09OTyBMVVBBIERFIElOUFVUIEJVU0NBUlxuLmx1cGF7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHggMTBweDtcbiAgY29sb3I6IzAxMjQ0MDtcbn1cblxuLmNvbG9yUGFnaW5hZG9ye1xuICB3aWR0aDogOTkuOTklO1xuICBiYWNrZ3JvdW5kOiMyZDYxOGMhaW1wb3J0YW50O1xuICBjb2xvcjp3aGl0ZVxufVxuXG4vL1NPQlJFRVNDUklCSU1PUyBURU1BIFVOSUNBTUVOVEUgUEFSQSBFU1RFIENPTVBPTkVOVEVcbi8vbW9kaWZpY2Ftb3MgZWwgY3VlcnBvIGRlIGxhIHRhYmxhIHVuaWNhbWVudGVcbjo6bmctZGVlcC5tYXQtY2VsbHtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDEyNDQwIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUhaW1wb3J0YW50O1xufVxuXG4vKjo6bmctZGVlcC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcbn0qL1xuIiwiLmNvbnRlbmlkbyB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50YWJsYUVsYXN0aWNhIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWluLWhlaWdodDogMTUlO1xuICBtYXgtaGVpZ2h0OiA0NSU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5sdXBhIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDEwcHggMHB4IDBweCAxMHB4O1xuICBjb2xvcjogIzAxMjQ0MDtcbn1cblxuLmNvbG9yUGFnaW5hZG9yIHtcbiAgd2lkdGg6IDk5Ljk5JTtcbiAgYmFja2dyb3VuZDogIzJkNjE4YyAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbjo6bmctZGVlcC5tYXQtY2VsbCB7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAxMjQ0MCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4vKjo6bmctZGVlcC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcbn0qLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/transacciones/transacciones.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/transacciones/transacciones.component.ts ***!
    \**********************************************************/

  /*! exports provided: TransaccionesComponent */

  /***/
  function srcAppTransaccionesTransaccionesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransaccionesComponent", function () {
      return TransaccionesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _login_jwt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../login-jwt.service */
    "./src/app/login-jwt.service.ts");
    /* harmony import */


    var _generar_pdfs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../generar-pdfs.service */
    "./src/app/generar-pdfs.service.ts"); //LIBRERIA BOOTSTRAP

    /*ESTA FUNCION UNICAMENTE ES PARA CAMBIAR EL "OF" DEL PAGINADOR A "DE" Y NO SE VEA FEO MEZCLADO EL ESPAÑOL CON INGLES,
    ESTAMOS CONFIGURANDO LOS RANGOS DEL PAGINADOR - CORTESÍA: https://stackblitz.com/edit/angular-5mgfxh-6mbpdq */


    var etiquetaRango = function etiquetaRango(page, pageSize, length) {
      if (length == 0 || pageSize == 0) {
        //caso paginador vacio
        return "0 de ".concat(length);
      }

      length = Math.max(length, 0);
      var startIndex = page * pageSize; //indice de inicio

      /*if resumido; si el indice de inicio excede la logitud de la lista (6 - 5 de 6 por ejemplo) se veria: 6 - 10 de 6 gracias al
      [pageSizeOptions] lo cual es incorrecto pues solo hay 6 elementos en tal rango ENTONCES mejor coloca como indice final el indice inicial
      quedaria 6 - 6 de 6 que es lo correcto).*/

      var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
      return "".concat(startIndex + 1, " - ").concat(endIndex, " de ").concat(length);
    };

    var TransaccionesComponent =
    /*#__PURE__*/
    function () {
      function TransaccionesComponent(guardian, modalService, API, PDF) {
        _classCallCheck(this, TransaccionesComponent);

        this.guardian = guardian;
        this.modalService = modalService;
        this.API = API;
        this.PDF = PDF;
        this.titulo = ""; //para el modal

        this.arregloDetalleVenta = []; //para mostrar datos de determinada venta segun el usuario en el modal de informacion

        this.arregloDetalleCompra = []; //para mostrar datos de determinada compra segun el usuario en el modal de informacion
        //propiedades para la tabla

        this.displayedColumnsTransacciones = ['idTransaccion', 'nombreCliente', 'apellidoPaternoCliente', 'fechaTransaccion', 'acciones'];
        this.displayedColumnsCompras = ['idCompra', 'fechaCompra', 'nombreUsuario', 'nombreProveedor', 'acciones'];
        this.tablaConDatosVentas = false;
        this.tablaConDatosCompras = false;
      }
      /*
        la primera vez que cargue su componente, el MatPaginator de la pestaña oculta no se renderiza,
        por lo que no está definido y no se puede vincular a la fuente de datos.
         */
      //LISTAR LAS TRANSACCIONES


      _createClass(TransaccionesComponent, [{
        key: "listarTransacciones",
        value: function listarTransacciones() {
          var _this60 = this;

          this.API.mostrarTransacciones().subscribe(function (success) {
            if (success.estatus > 0) {
              _this60.tablaConDatosVentas = true;
            }

            if (success.estatus == 0) {
              _this60.tablaConDatosVentas = false;
            }

            _this60.dsTransacciones = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](success.respuesta);

            if (!_this60.dsTransacciones.paginator) {
              _this60.dsTransacciones.paginator = _this60.paginatorTransacciones;
              _this60.dsTransacciones.paginator._intl.itemsPerPageLabel = 'items por pagina';
              _this60.dsTransacciones.paginator._intl.getRangeLabel = etiquetaRango;
            }
          }, function (error) {
            console.log("entro al error directamente");
            console.log(error);
          });
        } //LISTAR LAS DETALLE TRANSACCION PARA UNA VENTA EN ESPECIFICO

      }, {
        key: "listarDetalleTransaccion",
        value: function listarDetalleTransaccion(idTransaccion) {
          var _this61 = this;

          this.API.mostrarDetalleTransaccion(idTransaccion).subscribe(function (success) {
            var arregloTemporalProductos = [];
            var productos = [];

            for (var i = 0; i < success.respuesta.length; i++) {
              //atrapamos cada uno de los productos en un array
              arregloTemporalProductos.push(success.respuesta[i].nombreProducto);
            }

            productos = arregloTemporalProductos; //arreglo de objetos listo para iterar

            _this61.arregloDetalleVenta = [{
              idVenta: success.respuesta[0].idTransaccion,
              nombreCliente: success.respuesta[0].nombreCliente,
              productos: productos.join(', \n'),
              monto: success.respuesta[0].montoConIvaTransaccion,
              iva: success.respuesta[0].ivaTransaccion,
              fecha: success.respuesta[0].fechaTransaccion,
              numeroProductosTransaccion: success.respuesta[0].numeroProductosEnTransaccion,
              vendedor: success.respuesta[0].nombreVendedor,
              cliente: success.respuesta[0].nombreCliente,
              tipoPago: success.respuesta[0].tipoPago
            }];
            console.log("contenido arregloDetalleVenta: ", _this61.arregloDetalleVenta);
          }, function (error) {
            console.log(error);
          });
        } //LISTAR COMPRAS

      }, {
        key: "listarCompras",
        value: function listarCompras() {
          var _this62 = this;

          this.API.mostrarCompras().subscribe(function (success) {
            if (success.estatus > 0) {
              _this62.tablaConDatosCompras = true;
            }

            if (success.estatus == 0) {
              _this62.tablaConDatosCompras = false;
            }

            _this62.dsCompras = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](success.respuesta);

            if (!_this62.dsCompras.paginator) {
              _this62.dsCompras.paginator = _this62.paginatorCompras;
            }
          }, function (error) {
            console.log(error);
          });
        } //LISTAR LAS DETALLE COMPRA

      }, {
        key: "listarDetalleCompra",
        value: function listarDetalleCompra(idCompra) {
          var _this63 = this;

          this.API.mostrarDetalleCompra(idCompra).subscribe(function (success) {
            var arregloTemporalProductos = [];
            var productos = [];

            for (var i = 0; i < success.respuesta.length; i++) {
              //atrapamos cada uno de los productos en un array
              arregloTemporalProductos.push(success.respuesta[i].nombreProducto);
            }

            productos = arregloTemporalProductos; //arreglo de objetos listo para iterar

            _this63.arregloDetalleCompra = [{
              idCompra: success.respuesta[0].idCompra,
              monto: success.respuesta[0].montoCompra,
              productos: productos.join(', \n'),
              fecha: success.respuesta[0].fechaCompra,
              numeroProductosCompra: success.respuesta[0].numeroProductosEnCompra,
              nombreUsuario: success.respuesta[0].nombreUsuario,
              nombreProveedor: success.respuesta[0].nombreProveedor
            }];
            console.log("contenido arregloDetalleCompra: ", _this63.arregloDetalleCompra);
          }, function (error) {
            console.log(error);
          });
        } //FUNCION PARA ABRIR EL MODAL VENTAS, CONFIGURACIONES DE BOOTSTRAP

      }, {
        key: "openScrollableContentVentas",
        value: function openScrollableContentVentas(longContentVentas, idVenta) {
          console.log("idTransaccion", idVenta);
          this.modalService.open(longContentVentas, {
            scrollable: true
          });
          this.listarDetalleTransaccion(idVenta);
        } //FUNCION PARA ABRIR EL MODAL COMPRAS, CONFIGURACIONES DE BOOTSTRAP

      }, {
        key: "openScrollableContentCompras",
        value: function openScrollableContentCompras(longContentCompras, idCompra) {
          console.log("idTransaccion", idCompra);
          this.modalService.open(longContentCompras, {
            scrollable: true
          });
          this.listarDetalleCompra(idCompra);
        } //FUNCIONALIDAD FILTRAR

      }, {
        key: "filtrarRegistros",
        value: function filtrarRegistros(filterValue) {
          this.dsTransacciones.filter = filterValue.trim().toLowerCase();
          this.dsCompras.filter = filterValue.trim().toLowerCase(); //si se usa el modulo tab de transacciones, entonces arroja los resultados buscados en la primer pagina: (if reducido)

          this.dsTransacciones.paginator ? this.dsTransacciones.paginator.firstPage() : null; //si se usa el modulo tab de compras, entonces arroja los resultados buscados en la primer pagina:

          this.dsCompras.paginator ? this.dsCompras.paginator.firstPage() : null;
        } //INVOCANDO SERVICIO PARA GENERAR PDF

      }, {
        key: "generarPDF",
        value: function generarPDF(etiquetaPDF) {
          this.PDF.generarPDF(etiquetaPDF);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.guardian.restringirAcceso();
          this.listarTransacciones();
          this.listarCompras();
        }
      }]);

      return TransaccionesComponent;
    }();

    TransaccionesComponent.ctorParameters = function () {
      return [{
        type: _login_jwt_service__WEBPACK_IMPORTED_MODULE_5__["LoginJwtService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"]
      }, {
        type: _generar_pdfs_service__WEBPACK_IMPORTED_MODULE_6__["GenerarPDFsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('MatPaginatorCompras', {
      static: true
    })], TransaccionesComponent.prototype, "paginatorCompras", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('MatPaginatorTransacciones', {
      static: true
    })], TransaccionesComponent.prototype, "paginatorTransacciones", void 0);
    TransaccionesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-transacciones',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./transacciones.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/transacciones/transacciones.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./transacciones.component.scss */
      "./src/app/transacciones/transacciones.component.scss")).default]
    })], TransaccionesComponent);
    /***/
  },

  /***/
  "./src/app/usuarios/usuarios.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/usuarios/usuarios.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsuariosUsuariosComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cardPrincipal {\n  background-color: #000000bd;\n  border-radius: 6px;\n  width: 80%;\n  height: auto;\n  margin: 0 auto;\n  transition: 0.5s;\n}\n\n.btnEjecutar {\n  color: #191818;\n  border: solid 1px #676767;\n  margin: auto;\n  width: 65%;\n  font-size: 20px;\n}\n\n.tablaElastica {\n  overflow-y: auto;\n  min-height: auto;\n  max-height: 45%;\n  transition: 0.5s;\n}\n\n.popover {\n  z-index: 1005 !important;\n}\n\n::ng-deep.mat-tab-body-content {\n  padding: 2px !important;\n}\n\n::ng-deep.cdk-overlay-container {\n  z-index: 10001 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2psZ2FsbGFyZG92L0RvY3VtZW50cy9UcmFiYWpvcy9HUlVQTyAzNzUvVElFTkRBIE1BU0NPVEFTL2RlcGxveUFuaW1hbGlhL3B1bnRvVmVudGFNYXNjb3Rhcy9zcmMvYXBwL3VzdWFyaW9zL3VzdWFyaW9zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c3Vhcmlvcy91c3Vhcmlvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0FGOztBRElBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDREo7O0FES0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRkY7O0FETUE7RUFDRSx3QkFBQTtBQ0hGOztBRE9BO0VBQ0UsdUJBQUE7QUNKRjs7QURPQTtFQUNFLHlCQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC91c3Vhcmlvcy91c3Vhcmlvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQ0FSRCBET05ERSBFU1RBTiBMQSBNQVlPUklBIERFIENPTVBPTkVOVEVTIChDT01PIExBIFRBQkxBKVxuLmNhcmRQcmluY2lwYWx7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBiZDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4vL0JUTiBQQVJBIEVKRUNVVEFSIFVOQSBQRVRJQ0lPTiBQT1NUIE8gUFVUIERFTCBNT0RBTFxuLmJ0bkVqZWN1dGFye1xuICAgIGNvbG9yOiAjMTkxODE4O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICM2NzY3Njc7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA2NSU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4vL0xPTkdJVFVERVMgREUgTEEgVEFCTEEsIEVWSVRBIFFVRSBTRSBERVNCT1JERU4gTE9TIERBVE9TIERFIExBIFRBQkxBXG4udGFibGFFbGFzdGljYXtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWluLWhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogNDUlO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4vL1BBUkEgUE9QT1ZFUiBERSBNQVMgSU5GT1JNQUNJT05cbi5wb3BvdmVye1xuICB6LWluZGV4OiAxMDA1IWltcG9ydGFudDtcbn1cblxuLy9Bw5FBRElSIFBBRERJTkcgQUwgVEFCIEVOIEdFTkVSQUwgUEFSQSBRVUVTRSBBTENBTkNFIEEgRElTVElOR1VJUiBMQSBTT01CUkEgSU5GRVJJT1IgREUgTE9TIENBUkRTXG46Om5nLWRlZXAubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xuICBwYWRkaW5nOiAycHghaW1wb3J0YW50O1xufVxuLy9TT0JSRUVTQ1JJQklSIE9QVElPTlMgREVMIFNFTEVDVCBQQVJBIFFVRSBTRSBWRUFOIEFSUklCQSBERUwgTU9EQUxcbjo6bmctZGVlcC5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICB6LWluZGV4OiAxMDAwMSFpbXBvcnRhbnQ7XG59XG4iLCIuY2FyZFByaW5jaXBhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBiZDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uYnRuRWplY3V0YXIge1xuICBjb2xvcjogIzE5MTgxODtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzY3Njc2NztcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNjUlO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi50YWJsYUVsYXN0aWNhIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWluLWhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogNDUlO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4ucG9wb3ZlciB7XG4gIHotaW5kZXg6IDEwMDUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC10YWItYm9keS1jb250ZW50IHtcbiAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICB6LWluZGV4OiAxMDAwMSAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/usuarios/usuarios.component.ts":
  /*!************************************************!*\
    !*** ./src/app/usuarios/usuarios.component.ts ***!
    \************************************************/

  /*! exports provided: UsuariosComponent */

  /***/
  function srcAppUsuariosUsuariosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuariosComponent", function () {
      return UsuariosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _login_jwt_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../login-jwt.service */
    "./src/app/login-jwt.service.ts");
    /* harmony import */


    var js_sha256__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! js-sha256 */
    "./node_modules/js-sha256/src/sha256.js");
    /* harmony import */


    var js_sha256__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _confirmar_eliminar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../confirmar-eliminar.service */
    "./src/app/confirmar-eliminar.service.ts"); //LIBRERIA BOOTSTRAP


    var etiquetaRango = function etiquetaRango(page, pageSize, length) {
      if (length == 0 || pageSize == 0) {
        //caso paginador vacio
        return "0 de ".concat(length);
      }

      length = Math.max(length, 0);
      var startIndex = page * pageSize; //indice de inicio

      /*if resumido (terneario); si el indice de inicio excede la logitud de la lista (6 - 5 de 6 por ejemplo) se veria: 6 - 10 de 6 gracias al
      [pageSizeOptions] lo cual es incorrecto pues solo hay 6 elementos en tal rango ENTONCES mejor coloca como indice final el indice inicial
      quedaria 6 - 6 de 6 que es lo correcto).*/

      var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
      return "".concat(startIndex + 1, " - ").concat(endIndex, " de ").concat(length);
    };

    var UsuariosComponent =
    /*#__PURE__*/
    function () {
      function UsuariosComponent(guardian, modalService, formBuilder, API, eliminacionSegura) {
        _classCallCheck(this, UsuariosComponent);

        this.guardian = guardian;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.API = API;
        this.eliminacionSegura = eliminacionSegura;
        this.titulo = ""; //para el modal

        this.formValid = false;
        this.displayedColumns = ['idUsuario', 'nombreUsuario', 'emailUsuario', 'idTipoUsuario', 'acciones'];
        this.frmUsuarios = this.formBuilder.group({
          idUsuario: [""],
          nombreUsuario: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          emailUsuario: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          contraseniaUsuario: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          idVendedor: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          idTipoUsuario: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
      } //FUNCION PARA ABRIR EL MODAL, CONFIGURACIONES DE BOOTSTRAP


      _createClass(UsuariosComponent, [{
        key: "openAlta",
        value: function openAlta(content) {
          this.modal = this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          });
          this.titulo = "Agregar Usuario";
        } //------fin open--------------------------------------------------
        //ABRIR MODAL CON LOS DATOS A EDITAR

      }, {
        key: "openEditar",
        value: function openEditar(content, idUsuario, nombreUsuario, emailUsuario, idVendedor, idTipoUsuario) {
          //console.log("id: ", idUsuario, " nombre: ", nombreUsuario, " email: ", emailUsuario, " tipo: ", idTipoUsuario);
          this.modal = this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          });
          this.titulo = "Editar Usuario"; //pintando los valores en el modal listos para editarlos

          this.frmUsuarios.controls['idUsuario'].setValue(idUsuario); // si checamos el DOM veremos que el input es hide para evitar su modificacion posteriormente

          this.frmUsuarios.controls['nombreUsuario'].setValue(nombreUsuario);
          this.frmUsuarios.controls['emailUsuario'].setValue(emailUsuario);
          this.frmUsuarios.controls['idVendedor'].setValue(idVendedor);
          this.frmUsuarios.controls['idTipoUsuario'].setValue(idTipoUsuario);
        } //LISTAR USUARIOS

      }, {
        key: "listarUsuarios",
        value: function listarUsuarios() {
          var _this64 = this;

          this.API.mostrarUsuarios().subscribe(function (success) {
            //console.log("usuarios", success.respuesta)
            _this64.dsUsuarios = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](success.respuesta);
            _this64.dsUsuarios.paginator = _this64.paginator;
            _this64.paginator._intl.itemsPerPageLabel = "items por pagina";
            _this64.paginator._intl.getRangeLabel = etiquetaRango;
          }, function (error) {
            console.log("hubo un problema: ", error);
          });
        } //LISTAR USUARIOS PARA EL SELECT DEL FORMULARIO

      }, {
        key: "listarTiposDeUsuarios",
        value: function listarTiposDeUsuarios() {
          var _this65 = this;

          this.API.mostrarTiposDeUsuarios().subscribe(function (success) {
            _this65.arregloTiposDeUsuarios = success.respuesta; //console.log("listando tipos de usuarios")
          }, function (error) {
            console.log("hubo un problema: ", error);
          });
        } //LISTAR VENDEDORES PARA EL SELECT DEL FORMULARIO

      }, {
        key: "listarVendedores",
        value: function listarVendedores() {
          var _this66 = this;

          this.API.mostrarVendedores().subscribe(function (success) {
            _this66.arregloVendedores = success.respuesta; //console.log("listando vendedores")
          }, function (error) {
            console.log("hubo un problema: ", error);
          });
        } //AGREGAR USUARIO Y ACTUALIZAR USUARIO: EVITO CREAR 2 MODALES

      }, {
        key: "ejecutarPeticion",
        value: function ejecutarPeticion() {
          var _this67 = this;

          var idUsuarioForm = this.frmUsuarios.get('idUsuario').value;
          var nombreUsuarioForm = this.frmUsuarios.get('nombreUsuario').value;
          var emailUsuarioForm = this.frmUsuarios.get('emailUsuario').value;
          var contraseniaUsuarioForm = this.frmUsuarios.get('contraseniaUsuario').value;
          var idVendedorForm = this.frmUsuarios.get('idVendedor').value;
          var idTipoUsuarioForm = this.frmUsuarios.get('idTipoUsuario').value;
          var contraseniaEncriptada = Object(js_sha256__WEBPACK_IMPORTED_MODULE_8__["sha256"])(contraseniaUsuarioForm); //Encriptacion de constraña sha256

          if (this.titulo == "Agregar Usuario") {
            this.API.aniadirUsuario(nombreUsuarioForm, emailUsuarioForm, contraseniaEncriptada, idVendedorForm, idTipoUsuarioForm).subscribe(function (success) {
              alert(JSON.stringify(success.respuesta));

              _this67.listarUsuarios();

              _this67.frmUsuarios.reset();

              _this67.modal.close();
            }, function (error) {
              console.log("hubo un problema: ", error);
            });
          }

          if (this.titulo == "Editar Usuario") {
            this.API.actualizarUsuario(idUsuarioForm, nombreUsuarioForm, emailUsuarioForm, contraseniaUsuarioForm, idVendedorForm, idTipoUsuarioForm).subscribe(function (success) {
              alert(JSON.stringify(success.respuesta));

              _this67.listarUsuarios();

              _this67.frmUsuarios.reset();

              _this67.modal.close();
            }, function (error) {
              console.log("hubo un problema: ", error);
            });
          }
        } //ELIMINAR CLIENTE

      }, {
        key: "eliminarUsuario",
        value: function eliminarUsuario(idUsuario) {
          var _this68 = this;

          var respuesta = false;
          respuesta = this.eliminacionSegura.confirmarEliminacion();

          if (respuesta == true) {
            this.API.borrarUsuario(idUsuario).subscribe(function (success) {
              alert(success.respuesta);

              _this68.listarUsuarios();
            }, function (error) {
              console.log("hubo un problema: ", error);
            });
          } else {
            console.log("eliminacion cancelada");
          }
        } //FUNCIONALIDAD FILTRAR

      }, {
        key: "filtrarRegistros",
        value: function filtrarRegistros(filterValue) {
          this.dsUsuarios.filter = filterValue.trim().toLowerCase(); //si se usa el modulo tab de transacciones, entonces arroja los resultados buscados en la primer pagina: (if reducido)

          this.dsUsuarios.paginator ? this.dsUsuarios.paginator.firstPage() : null;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.guardian.restringirAcceso();
          this.listarUsuarios();
          this.listarTiposDeUsuarios();
          this.listarVendedores();
        }
      }]);

      return UsuariosComponent;
    }();

    UsuariosComponent.ctorParameters = function () {
      return [{
        type: _login_jwt_service__WEBPACK_IMPORTED_MODULE_7__["LoginJwtService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_6__["APIService"]
      }, {
        type: _confirmar_eliminar_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmarEliminarService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: true
    })], UsuariosComponent.prototype, "paginator", void 0);
    UsuariosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-usuarios',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./usuarios.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/usuarios/usuarios.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./usuarios.component.scss */
      "./src/app/usuarios/usuarios.component.scss")).default]
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-clientes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!../clientes/clientes.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/clientes.component.html")).default
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-vendedores',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!../vendedores/vendedores.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vendedores/vendedores.component.html")).default
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-proveedores',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!../proveedores/proveedores.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/proveedores/proveedores.component.html")).default
    })], UsuariosComponent);
    /***/
  },

  /***/
  "./src/app/vendedores/vendedores.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/vendedores/vendedores.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVendedoresVendedoresComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cardPrincipal {\n  background-color: #000000bd;\n  border-radius: 6px;\n  width: 80%;\n  height: auto;\n  margin: 0 auto;\n  transition: 0.5s;\n}\n\n.btnEjecutar {\n  color: #191818;\n  border: solid 1px #676767;\n  margin: auto;\n  width: 65%;\n  font-size: 20px;\n}\n\n.tablaElastica {\n  overflow-y: auto;\n  min-height: auto;\n  max-height: 45%;\n  transition: 0.5s;\n}\n\n.popover {\n  z-index: 1005 !important;\n}\n\n.inputModal {\n  width: 50% !important;\n  font-size: 20px !important;\n}\n\n::ng-deep.mat-tab-body-content {\n  padding: 2px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2psZ2FsbGFyZG92L0RvY3VtZW50cy9UcmFiYWpvcy9HUlVQTyAzNzUvVElFTkRBIE1BU0NPVEFTL2RlcGxveUFuaW1hbGlhL3B1bnRvVmVudGFNYXNjb3Rhcy9zcmMvYXBwL3ZlbmRlZG9yZXMvdmVuZGVkb3Jlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmVuZGVkb3Jlcy92ZW5kZWRvcmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQUY7O0FESUE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNESjs7QURLQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNGRjs7QURNQTtFQUNFLHdCQUFBO0FDSEY7O0FET0E7RUFDRSxxQkFBQTtFQUNBLDBCQUFBO0FDSkY7O0FEU0E7RUFDRSx1QkFBQTtBQ05GIiwiZmlsZSI6InNyYy9hcHAvdmVuZGVkb3Jlcy92ZW5kZWRvcmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9DQVJEIERPTkRFIEVTVEFOIExBIE1BWU9SSUEgREUgQ09NUE9ORU5URVMgKENPTU8gTEEgVEFCTEEpXG4uY2FyZFByaW5jaXBhbHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGJkO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi8vQlROIFBBUkEgRUpFQ1VUQVIgVU5BIFBFVElDSU9OIFBPU1QgTyBQVVQgREVMIE1PREFMXG4uYnRuRWplY3V0YXJ7XG4gICAgY29sb3I6ICMxOTE4MTg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzY3Njc2NztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDY1JTtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi8vTE9OR0lUVURFUyBERSBMQSBUQUJMQSwgRVZJVEEgUVVFIFNFIERFU0JPUkRFTiBMT1MgREFUT1MgREUgTEEgVEFCTEFcbi50YWJsYUVsYXN0aWNhe1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtaW4taGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA0NSU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi8vUEFSQSBQT1BPVkVSIERFIE1BUyBJTkZPUk1BQ0lPTlxuLnBvcG92ZXJ7XG4gIHotaW5kZXg6IDEwMDUhaW1wb3J0YW50O1xufVxuXG4vL1BBUkEgUE9QT1ZFUiBERSBNQVMgSU5GT1JNQUNJT05cbi5pbnB1dE1vZGFse1xuICB3aWR0aDogNTAlIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4IWltcG9ydGFudDtcbn1cblxuLy9TT0JSRUVTQ1JJQklSIEVMIFRFTUEgREUgQU5HVUxBUiBNQVRFUklBTCBQQVJBIEVMIElOUFVUIERFIEJVU0NBUjpcbi8vQcORQURJUiBQQURESU5HIEFMIFRBQiBFTiBHRU5FUkFMIFBBUkEgUVVFU0UgQUxDQU5DRSBBIERJU1RJTkdVSVIgTEEgU09NQlJBIElORkVSSU9SIERFIExPUyBDQVJEU1xuOjpuZy1kZWVwLm1hdC10YWItYm9keS1jb250ZW50IHtcbiAgcGFkZGluZzogMnB4IWltcG9ydGFudDtcbn1cbiIsIi5jYXJkUHJpbmNpcGFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGJkO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5idG5FamVjdXRhciB7XG4gIGNvbG9yOiAjMTkxODE4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjNjc2NzY3O1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA2NSU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnRhYmxhRWxhc3RpY2Ege1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtaW4taGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA0NSU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5wb3BvdmVyIHtcbiAgei1pbmRleDogMTAwNSAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXRNb2RhbCB7XG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtdGFiLWJvZHktY29udGVudCB7XG4gIHBhZGRpbmc6IDJweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/vendedores/vendedores.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/vendedores/vendedores.component.ts ***!
    \****************************************************/

  /*! exports provided: VendedoresComponent */

  /***/
  function srcAppVendedoresVendedoresComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VendedoresComponent", function () {
      return VendedoresComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _date_format_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../date-format.service */
    "./src/app/date-format.service.ts");
    /* harmony import */


    var _login_jwt_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../login-jwt.service */
    "./src/app/login-jwt.service.ts");
    /* harmony import */


    var _confirmar_eliminar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../confirmar-eliminar.service */
    "./src/app/confirmar-eliminar.service.ts");
    /* harmony import */


    var _generar_pdfs_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../generar-pdfs.service */
    "./src/app/generar-pdfs.service.ts"); //LIBRERIA BOOTSTRAP


    var etiquetaRango = function etiquetaRango(page, pageSize, length) {
      if (length == 0 || pageSize == 0) {
        //caso paginador vacio
        return "0 de ".concat(length);
      }

      length = Math.max(length, 0);
      var startIndex = page * pageSize; //indice de inicio

      /*if resumido (terneario); si el indice de inicio excede la logitud de la lista (6 - 5 de 6 por ejemplo) se veria: 6 - 10 de 6 gracias al
      [pageSizeOptions] lo cual es incorrecto pues solo hay 6 elementos en tal rango ENTONCES mejor coloca como indice final el indice inicial
      quedaria 6 - 6 de 6 que es lo correcto).*/

      var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
      return "".concat(startIndex + 1, " - ").concat(endIndex, " de ").concat(length);
    };

    var VendedoresComponent =
    /*#__PURE__*/
    function () {
      function VendedoresComponent(guardian, modalService, formBuilder, API, formateandoFecha, eliminacionSegura, PDF) {
        _classCallCheck(this, VendedoresComponent);

        this.guardian = guardian;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.API = API;
        this.formateandoFecha = formateandoFecha;
        this.eliminacionSegura = eliminacionSegura;
        this.PDF = PDF;
        this.titulo = ""; //para el modal

        this.formValid = false; //propiedades tabla

        this.displayedColumnsVendedores = ['idVendedor', 'nombreVendedor', 'ciudadVendedor', 'estadoVendedor', 'telefonoVendedor', 'acciones'];
        this.frmVendedores = this.formBuilder.group({
          idVendedor: [""],
          nombreVendedor: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          ciudadVendedor: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          estadoVendedor: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          direccionVendedor: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          telefonoVendedor: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          emailVendedor: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          fechaNacimientoVendedor: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          rfcVendedor: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          numeroSeguroSocialVendedor: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          antiguedadVendedor: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
      } //FUNCION PARA ABRIR EL MODAL, CONFIGURACIONES DE BOOTSTRAP


      _createClass(VendedoresComponent, [{
        key: "openAlta",
        value: function openAlta(content) {
          this.modal = this.modalService.open(content, {
            size: 'lg'
          });
          this.titulo = "Agregar Vendedor";
        } //ABRIR MODAL CON LOS DATOS A EDITAR

      }, {
        key: "openEditar",
        value: function openEditar(content, idVendedor, nombreVendedor, ciudadVendedor, estadoVendedor, direccionVendedor, telefonoVendedor, emailVendedor, fechaNacimientoVendedor, rfcVendedor, numeroSeguroSocialVendedor, antiguedadVendedor) {
          console.log("id: ", idVendedor, " nombre: ", nombreVendedor, " ciudad: ", ciudadVendedor, " email: ", emailVendedor);
          this.modal = this.modalService.open(content, {
            size: 'lg'
          });
          this.titulo = "Editar Vendedor"; //pintando los valores en el modal listos para editarlos

          this.frmVendedores.controls['idVendedor'].setValue(idVendedor); // si checamos el DOM veremos que el input es hide para evitar su modificacion posteriormente

          this.frmVendedores.controls['nombreVendedor'].setValue(nombreVendedor);
          this.frmVendedores.controls['ciudadVendedor'].setValue(ciudadVendedor);
          this.frmVendedores.controls['estadoVendedor'].setValue(estadoVendedor);
          this.frmVendedores.controls['direccionVendedor'].setValue(direccionVendedor);
          this.frmVendedores.controls['telefonoVendedor'].setValue(telefonoVendedor);
          this.frmVendedores.controls['emailVendedor'].setValue(emailVendedor);
          this.frmVendedores.controls['fechaNacimientoVendedor'].setValue(fechaNacimientoVendedor);
          this.frmVendedores.controls['rfcVendedor'].setValue(rfcVendedor);
          this.frmVendedores.controls['numeroSeguroSocialVendedor'].setValue(numeroSeguroSocialVendedor);
          this.frmVendedores.controls['antiguedadVendedor'].setValue(antiguedadVendedor);
        } //FUNCION PARA ABRIR EL MODAL DE INFORMACION VENDEDOR, CONFIGURACIONES DE BOOTSTRAP

      }, {
        key: "openScrollableContentVendedor",
        value: function openScrollableContentVendedor(longContentVendedor, idVendedor) {
          this.modalService.open(longContentVendedor, {
            scrollable: true
          });
          this.listarDetalleVendedor(idVendedor);
        } //LISTAR VENDEDORES

      }, {
        key: "listarVendedores",
        value: function listarVendedores() {
          var _this69 = this;

          this.API.mostrarVendedores().subscribe(function (success) {
            _this69.dsVendedores = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](success.respuesta);
            _this69.dsVendedores.paginator = _this69.paginator;
            _this69.paginator._intl.itemsPerPageLabel = "items por pagina";
            _this69.paginator._intl.getRangeLabel = etiquetaRango;
          }, function (error) {
            console.log("hubo un problema: ", error);
          });
        } //LISTAR DETALLES CLIENTES

      }, {
        key: "listarDetalleVendedor",
        value: function listarDetalleVendedor(idCliente) {
          var _this70 = this;

          this.API.mostrarDetalleVendedor(idCliente).subscribe(function (success) {
            _this70.arregloDetalleVendedor = success.respuesta;
          }, function (error) {
            console.log(error);
          });
        } //AGREGAR VENDEDOR Y ACTUALIZAR VENDEDOR: EVITO CREAR 2 MODALES

      }, {
        key: "ejecutarPeticion",
        value: function ejecutarPeticion() {
          var _this71 = this;

          var idVendedorForm = this.frmVendedores.get('idVendedor').value;
          var nombreVendedorForm = this.frmVendedores.get('nombreVendedor').value;
          var ciudadVendedorForm = this.frmVendedores.get('ciudadVendedor').value;
          var estadoVendedorForm = this.frmVendedores.get('estadoVendedor').value;
          var direccionVendedorForm = this.frmVendedores.get('direccionVendedor').value;
          var telefonoVendedorForm = this.frmVendedores.get('telefonoVendedor').value;
          var emailVendedorForm = this.frmVendedores.get('emailVendedor').value;
          var fechaNacimientoVendedorForm = this.frmVendedores.get('fechaNacimientoVendedor').value;
          var rfcVendedorForm = this.frmVendedores.get('rfcVendedor').value;
          var numeroSeguroSocialVendedorForm = this.frmVendedores.get('numeroSeguroSocialVendedor').value;
          var antiguedadVendedorForm = this.frmVendedores.get('antiguedadVendedor').value; //formateo fecha para que sea compaible con el sgbd:

          var fechaNacimientoVendedorFormateada = this.formateandoFecha.formatearFecha(fechaNacimientoVendedorForm);

          if (this.titulo == "Agregar Vendedor") {
            this.API.aniadirVendedor(nombreVendedorForm, ciudadVendedorForm, estadoVendedorForm, direccionVendedorForm, telefonoVendedorForm, emailVendedorForm, fechaNacimientoVendedorFormateada, rfcVendedorForm, numeroSeguroSocialVendedorForm, antiguedadVendedorForm).subscribe(function (success) {
              alert(JSON.stringify(success.respuesta));

              _this71.listarVendedores();

              _this71.frmVendedores.reset();

              _this71.modal.close();
            }, function (error) {
              console.log("hubo un problema: ", error);
            });
          }

          if (this.titulo == "Editar Vendedor") {
            this.API.actualizarVendedor(idVendedorForm, nombreVendedorForm, ciudadVendedorForm, estadoVendedorForm, direccionVendedorForm, telefonoVendedorForm, emailVendedorForm, fechaNacimientoVendedorFormateada, rfcVendedorForm, numeroSeguroSocialVendedorForm, antiguedadVendedorForm).subscribe(function (success) {
              alert(JSON.stringify(success.respuesta));

              _this71.listarVendedores();

              _this71.frmVendedores.reset();

              _this71.modal.close();
            }, function (error) {
              console.log("hubo un problema: ", error);
            });
          }
        } //ELIMINAR VENDEDOR

      }, {
        key: "eliminarVendedor",
        value: function eliminarVendedor(idVendedor) {
          var _this72 = this;

          var respuesta = false;
          respuesta = this.eliminacionSegura.confirmarEliminacion();

          if (respuesta == true) {
            this.API.borrarVendedor(idVendedor).subscribe(function (success) {
              alert(success.respuesta);

              _this72.listarVendedores();
            }, function (error) {
              console.log("hubo un problema: ", error);
            });
          } else {
            console.log("eliminacion cancelada");
          }
        } //FUNCIONALIDAD FILTRAR

      }, {
        key: "filtrarRegistros",
        value: function filtrarRegistros(filterValue) {
          this.dsVendedores.filter = filterValue.trim().toLowerCase(); //si se usa el modulo tab de transacciones, entonces arroja los resultados buscados en la primer pagina: (if reducido)

          this.dsVendedores.paginator ? this.dsVendedores.paginator.firstPage() : null;
        } //INVOCANDO SERVICIO PARA GENERAR PDF

      }, {
        key: "generarPDF",
        value: function generarPDF(etiquetaPDF) {
          this.PDF.generarPDF(etiquetaPDF);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.listarVendedores();
        }
      }]);

      return VendedoresComponent;
    }();

    VendedoresComponent.ctorParameters = function () {
      return [{
        type: _login_jwt_service__WEBPACK_IMPORTED_MODULE_8__["LoginJwtService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_6__["APIService"]
      }, {
        type: _date_format_service__WEBPACK_IMPORTED_MODULE_7__["DateFormatService"]
      }, {
        type: _confirmar_eliminar_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmarEliminarService"]
      }, {
        type: _generar_pdfs_service__WEBPACK_IMPORTED_MODULE_10__["GenerarPDFsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: true
    })], VendedoresComponent.prototype, "paginator", void 0);
    VendedoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-vendedores',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./vendedores.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vendedores/vendedores.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./vendedores.component.scss */
      "./src/app/vendedores/vendedores.component.scss")).default]
    })], VendedoresComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/jlgallardov/Documents/Trabajos/GRUPO 375/TIENDA MASCOTAS/deployAnimalia/puntoVentaMascotas/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map