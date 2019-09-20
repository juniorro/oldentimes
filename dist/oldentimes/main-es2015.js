(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\n  <nav class=\"navbar navbar-expand-md navbar-dark bg-dark mb-4\">\n    <a class=\"navbar-brand text-center\" href=\"#\">Olden Times |</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\"\n      aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse text-center\" id=\"navbarCollapse\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\" [ngClass]=\"{'active' : showEvents}\">\n          <a class=\"nav-link\" (click)=\"displayEvents()\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\">Events</a>\n        </li>\n        <li class=\"nav-item\" [ngClass]=\"{'active' : showBirths}\">\n          <a class=\"nav-link\" (click)=\"displayBirths()\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\">Birthdays</a>\n        </li>\n        <li class=\"nav-item\" [ngClass]=\"{'active' : showDeaths}\">\n          <a class=\"nav-link\" (click)=\"displayDeaths()\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\">Deaths</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n  <main role=\"main\">\n\n    <section class=\"jumbotron text-center\">\n      <div class=\"container\">\n        <h1 class=\"jumbotron-heading\">WTF Happened Today!</h1>\n      </div>\n    </section>\n\n    <div class=\"album py-5 bg-light\">\n      <div class=\"container\">\n        <h3 *ngIf=\"showEvents\" style=\"text-align: center;margin-top:-30px;\">Events</h3>\n        <h3 *ngIf=\"showBirths\" style=\"text-align: center;margin-top:-30px;\">Birthdays</h3>\n        <h3 *ngIf=\"showDeaths\" style=\"text-align: center;margin-top:-30px;\">Deaths</h3>\n\n        <div *ngIf=\"showEvents\" class=\"row\">\n          <div *ngFor=\"let event of events; let i = index\" class=\"col-md-4\">\n            <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-body\">\n                <p class=\"card-text\" [innerHtml]=\"event?.html\"></p>\n                <div class=\"d-flex justify-content-between align-items-center\">\n                  <small class=\"text-muted\">{{history?.date}}, {{event?.year}}</small>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div *ngIf=\"showBirths\" class=\"row\">\n          <div *ngFor=\"let birth of births; let i = index\" class=\"col-md-4\">\n            <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-body\">\n                <p class=\"card-text\" [innerHtml]=\"birth?.html\"></p>\n                <div class=\"d-flex justify-content-between align-items-center\">\n                  <small class=\"text-muted\">Born {{history?.date}}, {{birth?.year}}</small>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div *ngIf=\"showDeaths\" class=\"row\">\n          <div *ngFor=\"let death of deaths; let i = index\" class=\"col-md-4\">\n            <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-body\">\n                <p class=\"card-text\" [innerHtml]=\"death?.html\"></p>\n                <div class=\"d-flex justify-content-between align-items-center\">\n                  <small class=\"text-muted\">Died {{history?.date}}, {{death?.year}}</small>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </main>\n\n  <footer class=\"text-muted\">\n    <div class=\"container\">\n      <p class=\"float-right\">\n        <a href=\"#\">Back to top</a>\n      </p>\n      <p> &copy; Olden Times WTF Happened Today!</p>\n      <p>Have questions? <a href=\"\">Contact Us</a></p>\n    </div>\n  </footer>  \n</div>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Show it's not fixed to the top */\nbody {\n    min-height: 75rem;\n  }\np {\n    font-size: 1.4em;\n  }\na {\n    cursor: pointer;\n  }\n.navbar-nav .nav-link,\n  .navbar-brand {\n    text-align: center;\n  }\n.bd-placeholder-img {\n    font-size: 1.125rem;\n    text-anchor: middle;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n:root {\n    --jumbotron-padding-y: 3rem;\n  }\n.jumbotron {\n    padding-top: var(--jumbotron-padding-y);\n    padding-bottom: var(--jumbotron-padding-y);\n    margin-bottom: 0;\n    background-color: #fff;\n  }\n@media (min-width: 768px) {\n    .jumbotron {\n      padding-top: calc(var(--jumbotron-padding-y) * 2);\n      padding-bottom: calc(var(--jumbotron-padding-y) * 2);\n    }\n  }\n.jumbotron p:last-child {\n    margin-bottom: 0;\n  }\n.jumbotron-heading {\n    font-weight: 300;\n  }\n.jumbotron .container {\n    max-width: 40rem;\n  }\nfooter {\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n  }\nfooter p {\n    margin-bottom: .25rem;\n  }\n.box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUNBQW1DO0FBQ25DO0lBQ0ksaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLGVBQWU7RUFDakI7QUFFQTs7SUFFRSxrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsaUJBQWlCO0VBQ25CO0FBRUU7SUFDQSwyQkFBMkI7RUFDN0I7QUFFQTtJQUNFLHVDQUF1QztJQUN2QywwQ0FBMEM7SUFDMUMsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtFQUN4QjtBQUNBO0lBQ0U7TUFDRSxpREFBaUQ7TUFDakQsb0RBQW9EO0lBQ3REO0VBQ0Y7QUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFDdEI7QUFFQTtJQUNFLHFCQUFxQjtFQUN2QjtBQUVBLGNBQWMsOENBQThDLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNob3cgaXQncyBub3QgZml4ZWQgdG8gdGhlIHRvcCAqL1xuYm9keSB7XG4gICAgbWluLWhlaWdodDogNzVyZW07XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICB9XG5cbiAgYSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLm5hdmJhci1uYXYgLm5hdi1saW5rLFxuICAubmF2YmFyLWJyYW5kIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5iZC1wbGFjZWhvbGRlci1pbWcge1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgdGV4dC1hbmNob3I6IG1pZGRsZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG4gICAgXG4gICAgOnJvb3Qge1xuICAgIC0tanVtYm90cm9uLXBhZGRpbmcteTogM3JlbTtcbiAgfVxuICBcbiAgLmp1bWJvdHJvbiB7XG4gICAgcGFkZGluZy10b3A6IHZhcigtLWp1bWJvdHJvbi1wYWRkaW5nLXkpO1xuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1qdW1ib3Ryb24tcGFkZGluZy15KTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLmp1bWJvdHJvbiB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1qdW1ib3Ryb24tcGFkZGluZy15KSAqIDIpO1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tanVtYm90cm9uLXBhZGRpbmcteSkgKiAyKTtcbiAgICB9XG4gIH1cbiAgXG4gIC5qdW1ib3Ryb24gcDpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIFxuICAuanVtYm90cm9uLWhlYWRpbmcge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgXG4gIC5qdW1ib3Ryb24gLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA0MHJlbTtcbiAgfVxuICBcbiAgZm9vdGVyIHtcbiAgICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbiAgfVxuICBcbiAgZm9vdGVyIHAge1xuICAgIG1hcmdpbi1ib3R0b206IC4yNXJlbTtcbiAgfVxuICBcbiAgLmJveC1zaGFkb3cgeyBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpOyB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _history_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history.service */ "./src/app/history.service.ts");



let AppComponent = class AppComponent {
    constructor(historyService) {
        this.historyService = historyService;
    }
    ngOnInit() {
        this.showEvents = true;
        this.todayInHistory();
    }
    todayInHistory() {
        this.historyService.getTodayHistory().subscribe((response) => {
            console.log(response);
            this.history = response;
            this.events = response.data.Events;
            this.births = response.data.Births;
            this.deaths = response.data.Deaths;
            console.log(this.history);
        }, (error) => {
            console.log(error);
        });
    }
    displayEvents() {
        this.showEvents = true;
        this.showBirths = false;
        this.showDeaths = false;
    }
    displayBirths() {
        this.showBirths = true;
        this.showDeaths = false;
        this.showEvents = false;
    }
    displayDeaths() {
        this.showDeaths = true;
        this.showEvents = false;
        this.showBirths = false;
    }
};
AppComponent.ctorParameters = () => [
    { type: _history_service__WEBPACK_IMPORTED_MODULE_2__["HistoryService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_history_service__WEBPACK_IMPORTED_MODULE_2__["HistoryService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientJsonpModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/history.service.ts":
/*!************************************!*\
  !*** ./src/app/history.service.ts ***!
  \************************************/
/*! exports provided: HistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryService", function() { return HistoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HistoryService = class HistoryService {
    constructor(http) {
        this.http = http;
        this.host = 'https://history.muffinlabs.com/date';
    }
    getTodayHistory() {
        return this.http.request('JSONP', this.host, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('callback', 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json',
        });
    }
};
HistoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HistoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], HistoryService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/juniorro/Documents/github/oldentimes/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map