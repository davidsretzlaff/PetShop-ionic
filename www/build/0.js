webpackJsonp([0],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetshopsPageModule", function() { return PetshopsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__petshops__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PetshopsPageModule = /** @class */ (function () {
    function PetshopsPageModule() {
    }
    PetshopsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__petshops__["a" /* PetshopsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__petshops__["a" /* PetshopsPage */]),
            ],
        })
    ], PetshopsPageModule);
    return PetshopsPageModule;
}());

//# sourceMappingURL=petshops.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetshopsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_petshop_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_domain_TipoServico_service__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PetshopsPage = /** @class */ (function () {
    function PetshopsPage(navCtrl, navParams, petshopService, tipoServico // importação do serviço 
    ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.petshopService = petshopService;
        this.tipoServico = tipoServico; // importação do serviço 
    }
    // função chamando o serviço que consome api
    PetshopsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.petshopService.findAll()
            .subscribe(function (response) {
            _this.items = response;
        }, function (error) {
            console.log(error);
        });
    };
    PetshopsPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    item.endereco.logradouro.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    item.funcionario.tipoServico.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.ionViewDidLoad();
        }
    };
    PetshopsPage.prototype.getItemsbkp = function (ev) {
        var val = ev.target.value;
        var result = [];
        if (val && val.trim() != '') {
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i].nome === val || this.items[i].endereco.logradouro === val) {
                    result.push(this.items[i]);
                }
            }
            return result;
        }
        else {
            this.ionViewDidLoad();
        }
    };
    PetshopsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-petshops',template:/*ion-inline-start:"C:\ws-ionic\teste.Ionic\src\pages\petshops\petshops.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Petshops</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n\n\n<ion-list>\n\n  <button ion-item *ngFor="let item of items">\n\n    <ion-thumbnail item-start>\n\n      <img src="../../assets/imgs/pt.png">\n\n    </ion-thumbnail>\n\n    <h2>{{item.nome}}</h2>\n\n    <p> {{item.endereco.logradouro}} {{item.endereco.numero}}</p>\n\n  </button>\n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ws-ionic\teste.Ionic\src\pages\petshops\petshops.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_domain_petshop_service__["a" /* PetshopService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_domain_petshop_service__["a" /* PetshopService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_domain_TipoServico_service__["a" /* TipoServicoService */] // importação do serviço 
             !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_domain_TipoServico_service__["a" /* TipoServicoService */] // importação do serviço 
            ) === "function" && _d || Object])
    ], PetshopsPage);
    return PetshopsPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=petshops.js.map

/***/ })

});
//# sourceMappingURL=0.js.map