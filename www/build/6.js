webpackJsonp([6],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaPageModule", function() { return AgendaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agenda__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AgendaPageModule = /** @class */ (function () {
    function AgendaPageModule() {
    }
    AgendaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__agenda__["a" /* AgendaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__agenda__["a" /* AgendaPage */]),
            ],
        })
    ], AgendaPageModule);
    return AgendaPageModule;
}());

//# sourceMappingURL=agenda.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgendaPage = /** @class */ (function () {
    function AgendaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.petEscolhido = this.navParams.get('pet');
        this.servicoEscolhido = this.navParams.get('servico');
    }
    AgendaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgendaPage');
    };
    AgendaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agenda',template:/*ion-inline-start:"C:\ws-ionic\teste.Ionic\src\pages\agenda\agenda.html"*/'<!--\n  Generated template for the AgendaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Agenda</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!--<div class="grid-agenda ocupado"> <h2>8:00</h2>  </div>\n  <div class="grid-agenda disponivel"> <h2>9:00 </h2> </div>\n  <div class="grid-agenda disponivel"> <h2>10:00</h2>  </div>\n  <div class="grid-agenda disponivel"> <h2>11:00</h2>  </div>\n  <div class="grid-agenda disponivel"> <h2>12:00</h2>  </div>\n  <div class="grid-agenda disponivel"> <h2>13:00</h2>  </div>\n  <div class="grid-agenda disponivel"> <h2>14:00</h2>  </div>\n  <div class="grid-agenda disponivel"><h2> 15:00</h2>  </div>\n  <div class="grid-agenda disponivel"> <h2>16:00</h2>  </div>\n  <div class="grid-agenda disponivel"> <h2>17:00</h2>  </div>\n  <div class="grid-agenda disponivel"> <h2>18:00</h2>  </div>-->\n\n  <ion-grid>\n  <ion-row>\n    <ion-col  col-6> <div class="grid-agenda disponivel"> <h2>8:00</h2>  </div></ion-col>\n    <ion-col  col-6><div class="grid-agenda ocupado"> <h2>9:00</h2>  </div> </ion-col>\n  </ion-row>\n    <ion-row>\n    <ion-col  col-6><div class="grid-agenda disponivel"> <h2>10:00</h2>  </div> </ion-col>\n    <ion-col col-6> <div class="grid-agenda disponivel"> <h2>11:00</h2>  </div></ion-col>\n  </ion-row>\n    <ion-row>\n    <ion-col  col-6><div class="grid-agenda disponivel"> <h2>12:00</h2>  </div></ion-col>\n    <ion-col  col-6><div class="grid-agenda disponivel"> <h2>13:00</h2>  </div> </ion-col>\n  </ion-row>\n    <ion-row>\n    <ion-col  col-6><div class="grid-agenda disponivel"> <h2>14:00</h2>  </div> </ion-col>\n    <ion-col col-6> <div class="grid-agenda disponivel"> <h2>15:00</h2>  </div></ion-col>\n  </ion-row>\n    <ion-row>\n    <ion-col  col-6> <div class="grid-agenda disponivel"> <h2>16:00</h2>  </div></ion-col>\n    <ion-col  col-6><div class="grid-agenda disponivel"> <h2>17:00</h2>  </div> </ion-col>\n  </ion-row>\n    <ion-row>\n    <ion-col  col-6><div class="grid-agenda disponivel"> <h2>18:00</h2>  </div> </ion-col>\n    <ion-col col-6> <div class="grid-agenda disponivel"> <h2>18:00</h2>  </div></ion-col>\n  </ion-row>\n</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\ws-ionic\teste.Ionic\src\pages\agenda\agenda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AgendaPage);
    return AgendaPage;
}());

//# sourceMappingURL=agenda.js.map

/***/ })

});
//# sourceMappingURL=6.js.map