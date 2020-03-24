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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-layout></app-layout>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/catalog-page/catalog-page.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/catalog-page/catalog-page.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"user.Authorized\">\r\n  sad\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-page/categories-page.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-page/categories-page.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"user.IsAdmin\">\r\n  <div class=\"text-right\" style=\"margin-top: 1.5em; margin-bottom: 1em; margin-right: 1em\">\r\n    <button class=\"btn btn-primary\" (click)=\"onAddCategory()\">Добавить категорию</button>\r\n  </div>\r\n\r\n  <kendo-grid [data]=\"gridData\" [height]=\"410\">\r\n    <kendo-grid-column field=\"ID\" title=\"ID\" width=\"40\">\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"Name\" title=\"Название\" width=\"250\">\r\n    </kendo-grid-column>\r\n\r\n    <kendo-grid-column title=\"Действия\" width=\"120\">\r\n      <ng-template kendoGridCellTemplate let-dataItem>\r\n        <button class=\"btn btn-danger\" (click)=\"onRemoveCategory(dataItem)\">Удалить</button>\r\n        <button class=\"btn btn-primary\" (click)=\"onChangeCategory(dataItem)\" style=\"margin-left: 1em;\">Изменить</button>\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n  </kendo-grid>\r\n\r\n  <app-category-window [(opened)]=\"categoryWindowOpened\" [category]=\"currentCategory\"></app-category-window>\r\n  <app-replace-category-window *ngIf=\"currentCategory\" [(opened)]=\"replaceCategoryWindowOpened\" [category]=\"currentCategory\" [anotherCategories]=\"catWithoutCurrent\"></app-replace-category-window>\r\n\r\n  <div kendoDialogContainer></div>\r\n\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-page/category-window/category-window.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-page/category-window/category-window.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kendo-window title=\"Введите информацию о категории\" *ngIf=\"opened\" (close)=\"close()\" [minWidth]=\"280\" [width]=\"450\" [minHeight]=\"150\">\r\n\r\n  <form class=\"k-form\" #form=\"ngForm\" novalidate>\r\n\r\n      <label class=\"k-form-field\">\r\n        <span>Название*</span>\r\n        <input class=\"form-control\" type=\"text\" placeholder=\"Название\"\r\n               [(ngModel)]=\"category.Name\"\r\n               name=\"name\"\r\n               required />\r\n      </label>\r\n\r\n    <div class=\"text-right\">\r\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">Отмена</button>\r\n      <button type=\"button\" style=\"margin-left:1em;\" class=\"btn btn-primary\"\r\n              (click)=\"submit(form)\"\r\n              [disabled]=\"form.invalid\">\r\n        ОК\r\n      </button>\r\n    </div>\r\n  </form>\r\n\r\n</kendo-window>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-page/replace-category-window/replace-category-window.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-page/replace-category-window/replace-category-window.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kendo-window title=\"Замена удаляемой категории у продуктов\" *ngIf=\"opened\" (close)=\"close()\" [minWidth]=\"280\" [width]=\"450\" [minHeight]=\"150\">\r\n\r\n  <form class=\"k-form\" #form=\"ngForm\" novalidate>\r\n\r\n    <label class=\"k-form-field\">\r\n      <span>Категории*</span>\r\n      <kendo-multiselect [data]=\"anotherCategories\"\r\n                         [textField]=\"'Name'\"\r\n                         [valueField]=\"'ID'\"\r\n                         [(ngModel)]=\"newCategories\"\r\n                         name=\"categories\"\r\n                         required>\r\n      </kendo-multiselect>\r\n    </label>\r\n\r\n    <div class=\"text-right\">\r\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">Отмена</button>\r\n      <button type=\"button\" style=\"margin-left:1em;\" class=\"btn btn-primary\"\r\n              (click)=\"submit(form)\"\r\n              [disabled]=\"form.invalid\">\r\n        ОК\r\n      </button>\r\n    </div>\r\n  </form>\r\n\r\n</kendo-window>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-sm bg-light\">\r\n\r\n  <ul class=\"navbar-nav mr-auto\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" [routerLink]=\"['catalog']\" [routerLinkActive]=\"['active-link']\">Каталог</a>\r\n    </li>\r\n    <li *ngIf=\"user.IsAdmin\" class=\"nav-item\">\r\n      <a class=\"nav-link\" [routerLink]=\"['categories']\" [routerLinkActive]=\"['active-link']\">Категории</a>\r\n    </li>\r\n    <li *ngIf=\"user.IsAdmin\" class=\"nav-item\">\r\n      <a class=\"nav-link\" [routerLink]=\"['tovars']\" [routerLinkActive]=\"['active-link']\">Товары</a>\r\n    </li>\r\n  </ul>\r\n  <div style=\"display: inline-block\">\r\n    <button *ngIf=\"user.Authorized; else login\" class=\"btn btn-primary\" (click)=\"onLogOutClick()\">Выйти</button>\r\n    <ng-template #login>\r\n      <button class=\"btn btn-primary\" (click)=\"onLogInClick()\">Войти</button>\r\n    </ng-template>\r\n  </div>\r\n\r\n</nav>\r\n\r\n<app-login [(opened)]=\"loginOpened\" (userLogin)=\"userLogin($event)\"></app-login>\r\n\r\n<div *ngIf=\"!user.Authorized\">\r\n  <div>\r\n    Авторизуйтесь под учетной записью пользователя чтобы просматривать каталог\r\n  </div>\r\n  <div>\r\n    Чтобы просматривать список категорий и товаров авторизуйтесь под учетной записью администратора\r\n  </div>\r\n</div>\r\n\r\n<router-outlet *ngIf=\"user.Authorized\"></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kendo-window title=\"Пожалуйста введите свои учетные данные\" *ngIf=\"opened\" (close)=\"close()\" [minWidth]=\"280\" [width]=\"450\" [minHeight]=\"400\">\r\n\r\n  <form class=\"k-form\" #form=\"ngForm\" novalidate>\r\n    <fieldset>\r\n      <legend>Учетные данные</legend>\r\n\r\n      <label class=\"k-form-field\">\r\n        <span>Логин*</span>\r\n        <input class=\"form-control\" type=\"text\" placeholder=\"Логин\"\r\n               ngModel\r\n               name=\"login\"\r\n               required />\r\n      </label>\r\n      <label class=\"k-form-field\">\r\n        <span>Пароль*</span>\r\n        <input class=\"form-control\" type=\"password\" placeholder=\"Пароль\"\r\n               ngModel\r\n               name=\"password\"\r\n               required />\r\n      </label>\r\n    </fieldset>\r\n    <div *ngIf=\"noUser\" class=\"alert alert-danger\">\r\n      Такого пользователя не существует\r\n    </div>\r\n\r\n    <div class=\"text-right\">\r\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">Отмена</button>\r\n      <button type=\"button\" style=\"margin-left:1em;\" class=\"btn btn-primary\"\r\n              (click)=\"submit(form)\"\r\n              [disabled]=\"form.invalid\">Войти</button>\r\n    </div>\r\n  </form>\r\n\r\n</kendo-window>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tovars-page/tovar-window/tovar-window.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tovars-page/tovar-window/tovar-window.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kendo-window title=\"Введите информацию о категории\" *ngIf=\"opened\" (close)=\"close()\" [minWidth]=\"280\" [width]=\"450\" [minHeight]=\"150\">\r\n\r\n  <form *ngIf=\"tovar\" class=\"k-form\" #form=\"ngForm\" novalidate>\r\n\r\n    <label class=\"k-form-field\">\r\n      <span>Название*</span>\r\n      <input class=\"form-control\" type=\"text\" placeholder=\"Название\"\r\n             [(ngModel)]=\"tovar.Name\"\r\n             name=\"title\"\r\n             required />\r\n    </label>\r\n    <div *ngIf=\"errors.Name\" class=\"alert alert-danger\">\r\n      Имя должно содержать больше 5 и не больше 40 сиволом\r\n    </div>\r\n\r\n    <label class=\"k-form-field\">\r\n      <span>Стоимость*</span>\r\n      <input class=\"form-control\" type=\"number\" placeholder=\"Стоимость\"\r\n             [(ngModel)]=\"tovar.Cost\"\r\n             name=\"cost\"\r\n             required />\r\n    </label>\r\n    <div *ngIf=\"errors.Cost\" class=\"alert alert-danger\">\r\n      Стоимость должна быть больше нуля\r\n    </div>\r\n\r\n    <label class=\"k-form-field\">\r\n      <span>Срок годности*</span>\r\n      <kendo-datepicker [(ngModel)]=\"tovar.DateEnd\"\r\n                        name=\"dateend\"\r\n                        required></kendo-datepicker>\r\n    </label>\r\n    <div *ngIf=\"errors.DateEnd\" class=\"alert alert-danger\">\r\n      Срок годности должен быть больше чем сегодняшнее число\r\n    </div>\r\n\r\n    <label class=\"k-form-field\">\r\n      <span>Категории*</span>\r\n      <kendo-multiselect [data]=\"categories\"\r\n                         [textField]=\"'Name'\"\r\n                         [valueField]=\"'ID'\"\r\n                         [(ngModel)]=\"tovar.Categories\"\r\n                         name=\"categories\"\r\n                         required>\r\n      </kendo-multiselect>\r\n    </label>\r\n    <div *ngIf=\"errors.Categories\" class=\"alert alert-danger\">\r\n      Должна быть хоть одна категория\r\n    </div>\r\n\r\n\r\n    <div class=\"text-right\">\r\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">Отмена</button>\r\n      <button type=\"button\" style=\"margin-left:1em;\" class=\"btn btn-primary\"\r\n              (click)=\"submit()\"\r\n              [disabled]=\"form.invalid\">\r\n        ОК\r\n      </button>\r\n    </div>\r\n  </form>\r\n\r\n</kendo-window>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tovars-page/tovars-page.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tovars-page/tovars-page.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"user.IsAdmin\">\r\n  <div class=\"text-right\" style=\"margin-top: 1.5em; margin-bottom: 1em; margin-right: 1em\">\r\n    <button class=\"btn btn-primary\" (click)=\"onAddTovar()\">Добавить товар</button>\r\n  </div>\r\n\r\n  <kendo-grid [data]=\"tovars\" [height]=\"410\">\r\n    <kendo-grid-column field=\"ID\" title=\"ID\" width=\"40\">\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"Name\" title=\"Название\" width=\"250\">\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"Cost\" title=\"Цена\" width=\"120\">\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"DateEnd\" title=\"Срок годности\" width=\"140\">\r\n      <ng-template kendoGridCellTemplate let-dataItem>\r\n        <span>{{ dataItem.DateEnd | date:'dd.MM.yyyy' }}</span>\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"Categories\" title=\"Категории\" width=\"250\">\r\n      <ng-template kendoGridCellTemplate let-dataItem>\r\n        <span *ngFor=\"let category of dataItem.Categories\">{{category.Name}};</span>\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n\r\n    <kendo-grid-column title=\"Действия\" width=\"250\">\r\n      <ng-template kendoGridCellTemplate let-dataItem>\r\n        <button class=\"btn btn-danger\" (click)=\"onRemoveTovar(dataItem)\">Удалить</button>\r\n        <button class=\"btn btn-primary\" (click)=\"onChangeTovar(dataItem)\" style=\"margin-left: 1em;\">Изменить</button>\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n  </kendo-grid>\r\n\r\n  <app-tovar-window [(opened)]=\"tovarWindowOpened\" [tovar]=\"currentTovar\"></app-tovar-window>\r\n\r\n  <div kendoDialogContainer></div>\r\n\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_categories_page_categories_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/categories-page/categories-page.component */ "./src/app/components/categories-page/categories-page.component.ts");
/* harmony import */ var _components_tovars_page_tovars_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tovars-page/tovars-page.component */ "./src/app/components/tovars-page/tovars-page.component.ts");
/* harmony import */ var _components_catalog_page_catalog_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/catalog-page/catalog-page.component */ "./src/app/components/catalog-page/catalog-page.component.ts");






var routes = [
    { path: 'categories', component: _components_categories_page_categories_page_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesPageComponent"] },
    { path: 'tovars', component: _components_tovars_page_tovars_page_component__WEBPACK_IMPORTED_MODULE_4__["TovarsPageComponent"] },
    { path: 'catalog', component: _components_catalog_page_catalog_page_component__WEBPACK_IMPORTED_MODULE_5__["CatalogPageComponent"] },
    { path: '', redirectTo: '/catalog', pathMatch: 'full' },
    { path: '**', redirectTo: '/catalog', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9hcHAuY29tcG9uZW50LnNjc3MifQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Catalog';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_categories_page_categories_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/categories-page/categories-page.component */ "./src/app/components/categories-page/categories-page.component.ts");
/* harmony import */ var _components_catalog_page_catalog_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/catalog-page/catalog-page.component */ "./src/app/components/catalog-page/catalog-page.component.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/components/layout/layout.component.ts");
/* harmony import */ var _components_tovars_page_tovars_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tovars-page/tovars-page.component */ "./src/app/components/tovars-page/tovars-page.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/dist/fesm5/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-popup */ "./node_modules/@progress/kendo-angular-popup/dist/fesm5/index.js");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/dist/fesm5/index.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm5/index.js");
/* harmony import */ var _components_categories_page_category_window_category_window_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/categories-page/category-window/category-window.component */ "./src/app/components/categories-page/category-window/category-window.component.ts");
/* harmony import */ var _components_tovars_page_tovar_window_tovar_window_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/tovars-page/tovar-window/tovar-window.component */ "./src/app/components/tovars-page/tovar-window/tovar-window.component.ts");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "./node_modules/@progress/kendo-angular-dropdowns/dist/fesm5/index.js");
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ "./node_modules/@progress/kendo-angular-dateinputs/dist/fesm5/index.js");
/* harmony import */ var _components_categories_page_replace_category_window_replace_category_window_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/categories-page/replace-category-window/replace-category-window.component */ "./src/app/components/categories-page/replace-category-window/replace-category-window.component.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_categories_page_categories_page_component__WEBPACK_IMPORTED_MODULE_6__["CategoriesPageComponent"],
                _components_catalog_page_catalog_page_component__WEBPACK_IMPORTED_MODULE_7__["CatalogPageComponent"],
                _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"],
                _components_tovars_page_tovars_page_component__WEBPACK_IMPORTED_MODULE_9__["TovarsPageComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _components_categories_page_category_window_category_window_component__WEBPACK_IMPORTED_MODULE_16__["CategoryWindowComponent"],
                _components_tovars_page_tovar_window_tovar_window_component__WEBPACK_IMPORTED_MODULE_17__["TovarWindowComponent"],
                _components_categories_page_replace_category_window_replace_category_window_component__WEBPACK_IMPORTED_MODULE_20__["ReplaceCategoryWindowComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_11__["DialogsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_13__["PopupModule"],
                _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_14__["ButtonsModule"],
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_15__["GridModule"],
                _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_18__["DropDownsModule"],
                _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_19__["DateInputsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/catalog-page/catalog-page.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/catalog-page/catalog-page.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9jYXRhbG9nLXBhZ2UvY2F0YWxvZy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/catalog-page/catalog-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/catalog-page/catalog-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: CatalogPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogPageComponent", function() { return CatalogPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/User */ "./src/app/models/User.ts");



var CatalogPageComponent = /** @class */ (function () {
    function CatalogPageComponent() {
        this.user = new _models_User__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    CatalogPageComponent.prototype.ngOnInit = function () {
        var currentUser = window.localStorage.getItem('CurrentUser');
        if (currentUser) {
            var user = JSON.parse(currentUser);
            this.user.Authorized = user.Authorized;
            this.user.IsAdmin = user.IsAdmin;
            this.user.DisplayName = user.DisplayName;
        }
    };
    CatalogPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-catalog-page',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./catalog-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/catalog-page/catalog-page.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./catalog-page.component.scss */ "./src/app/components/catalog-page/catalog-page.component.scss")).default]
        })
    ], CatalogPageComponent);
    return CatalogPageComponent;
}());



/***/ }),

/***/ "./src/app/components/categories-page/categories-page.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/categories-page/categories-page.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/categories-page/categories-page.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/categories-page/categories-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: CategoriesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageComponent", function() { return CategoriesPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_categories_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/categories-page.service */ "./src/app/services/categories-page.service.ts");
/* harmony import */ var _models_Category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/Category */ "./src/app/models/Category.ts");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/User */ "./src/app/models/User.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/dist/fesm5/index.js");
/* harmony import */ var _services_tovar_page_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/tovar-page.service */ "./src/app/services/tovar-page.service.ts");








var CategoriesPageComponent = /** @class */ (function () {
    function CategoriesPageComponent(categoryService, userService, tovarService, dialogService, ngZone) {
        this.categoryService = categoryService;
        this.userService = userService;
        this.tovarService = tovarService;
        this.dialogService = dialogService;
        this.ngZone = ngZone;
        this.gridData = [];
        this.user = new _models_User__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.listItems = ['Tam2', 'TUt1'];
        this.categoryWindowOpened = false;
        this.replaceCategoryWindowOpened = false;
        this.subscriptions = [];
    }
    CategoriesPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var catSub = this.categoryService.categories$.subscribe(function (data) {
            if (!data) {
                return;
            }
            _this.ngZone.run(function () {
                _this.gridData = data;
            });
        });
        this.categoryService.getAllCategories();
        var userSub = this.userService.user$.subscribe(function (data) {
            if (!data) {
                return;
            }
            _this.ngZone.run(function () {
                _this.user = data;
            });
        });
        this.userService.loadUser();
        this.subscriptions.push(catSub);
        this.subscriptions.push(userSub);
    };
    CategoriesPageComponent.prototype.onRemoveCategory = function (category) {
        var _this = this;
        var dialog = this.dialogService.open({
            title: 'Удаление категории',
            content: 'Вы действительно хотите удалить - ' + category.Name + '?',
            actions: [
                { text: 'Нет' },
                { text: 'Да', primary: true }
            ],
            width: 450,
            height: 200,
            minWidth: 250
        });
        var dialogSub = dialog.result.subscribe(function (result) {
            if (result instanceof _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_6__["DialogCloseResult"]) {
                return;
            }
            else if (result.text == 'Да') {
                if (_this.tovarService.hasCategory(category)) {
                    _this.ngZone.run(function () {
                        _this.catWithoutCurrent = _this.categoryService.loadAllCategories();
                        _this.catWithoutCurrent = _this.catWithoutCurrent.filter(function (cat) { return cat.ID != category.ID; });
                        _this.currentCategory = category;
                        _this.replaceCategoryWindowOpened = true;
                    });
                }
                else {
                    _this.categoryService.removeCategory(category);
                }
            }
        });
        this.subscriptions.push(dialogSub);
    };
    CategoriesPageComponent.prototype.onChangeCategory = function (category) {
        this.currentCategory = category;
        this.categoryWindowOpened = true;
    };
    CategoriesPageComponent.prototype.onAddCategory = function () {
        this.currentCategory = new _models_Category__WEBPACK_IMPORTED_MODULE_3__["Category"]();
        this.categoryWindowOpened = true;
    };
    CategoriesPageComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    CategoriesPageComponent.ctorParameters = function () { return [
        { type: _services_categories_page_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesPageService"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _services_tovar_page_service__WEBPACK_IMPORTED_MODULE_7__["TovarPageService"] },
        { type: _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_6__["DialogService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    CategoriesPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories-page',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categories-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-page/categories-page.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categories-page.component.scss */ "./src/app/components/categories-page/categories-page.component.scss")).default]
        })
    ], CategoriesPageComponent);
    return CategoriesPageComponent;
}());



/***/ }),

/***/ "./src/app/components/categories-page/category-window/category-window.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/categories-page/category-window/category-window.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS13aW5kb3cvY2F0ZWdvcnktd2luZG93LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/categories-page/category-window/category-window.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/categories-page/category-window/category-window.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CategoryWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryWindowComponent", function() { return CategoryWindowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/Category */ "./src/app/models/Category.ts");
/* harmony import */ var _services_categories_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/categories-page.service */ "./src/app/services/categories-page.service.ts");




var CategoryWindowComponent = /** @class */ (function () {
    function CategoryWindowComponent(categoryService) {
        this.categoryService = categoryService;
        this.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CategoryWindowComponent.prototype.changeOpened = function (val) {
        this.opened = val;
        this.openedChange.emit(this.opened);
    };
    CategoryWindowComponent.prototype.ngOnInit = function () {
    };
    CategoryWindowComponent.prototype.close = function () {
        this.changeOpened(false);
    };
    CategoryWindowComponent.prototype.submit = function (form) {
        var _this = this;
        if (form.invalid) {
            return;
        }
        if (this.category.ID) {
            this.categoryService.changeCategory(this.category);
        }
        else {
            _models_Category__WEBPACK_IMPORTED_MODULE_2__["Category"].Add(this.category.Name).then(function (data) {
                _this.categoryService.addCategory(data);
            });
        }
        this.close();
    };
    CategoryWindowComponent.ctorParameters = function () { return [
        { type: _services_categories_page_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesPageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CategoryWindowComponent.prototype, "opened", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CategoryWindowComponent.prototype, "openedChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CategoryWindowComponent.prototype, "category", void 0);
    CategoryWindowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category-window',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category-window.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-page/category-window/category-window.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category-window.component.scss */ "./src/app/components/categories-page/category-window/category-window.component.scss")).default]
        })
    ], CategoryWindowComponent);
    return CategoryWindowComponent;
}());



/***/ }),

/***/ "./src/app/components/categories-page/replace-category-window/replace-category-window.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/categories-page/replace-category-window/replace-category-window.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBsYWNlLWNhdGVnb3J5LXdpbmRvdy9yZXBsYWNlLWNhdGVnb3J5LXdpbmRvdy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/categories-page/replace-category-window/replace-category-window.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/categories-page/replace-category-window/replace-category-window.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ReplaceCategoryWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceCategoryWindowComponent", function() { return ReplaceCategoryWindowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_categories_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/categories-page.service */ "./src/app/services/categories-page.service.ts");
/* harmony import */ var _services_tovar_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/tovar-page.service */ "./src/app/services/tovar-page.service.ts");




var ReplaceCategoryWindowComponent = /** @class */ (function () {
    function ReplaceCategoryWindowComponent(categoryService, tovarService) {
        this.categoryService = categoryService;
        this.tovarService = tovarService;
        this.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newCategories = [];
    }
    ReplaceCategoryWindowComponent.prototype.changeOpened = function (val) {
        this.opened = val;
        this.openedChange.emit(this.opened);
    };
    ReplaceCategoryWindowComponent.prototype.ngOnInit = function () {
    };
    ReplaceCategoryWindowComponent.prototype.close = function () {
        this.changeOpened(false);
    };
    ReplaceCategoryWindowComponent.prototype.submit = function (form) {
        var _this = this;
        if (form.invalid) {
            return;
        }
        var tovars = this.tovarService.getTovarsByCategoryID(this.category.ID);
        tovars.forEach(function (tovar) {
            tovar.Categories = _this.newCategories;
            console.log(tovar);
            _this.tovarService.change(tovar);
        });
        console.log(this.tovarService.getall());
        this.categoryService.removeCategory(this.category);
        this.close();
    };
    ReplaceCategoryWindowComponent.ctorParameters = function () { return [
        { type: _services_categories_page_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesPageService"] },
        { type: _services_tovar_page_service__WEBPACK_IMPORTED_MODULE_3__["TovarPageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ReplaceCategoryWindowComponent.prototype, "opened", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ReplaceCategoryWindowComponent.prototype, "openedChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ReplaceCategoryWindowComponent.prototype, "category", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ReplaceCategoryWindowComponent.prototype, "anotherCategories", void 0);
    ReplaceCategoryWindowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-replace-category-window',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./replace-category-window.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories-page/replace-category-window/replace-category-window.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./replace-category-window.component.scss */ "./src/app/components/categories-page/replace-category-window/replace-category-window.component.scss")).default]
        })
    ], ReplaceCategoryWindowComponent);
    return ReplaceCategoryWindowComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/layout.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/layout/layout.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".active-link {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xheW91dC9DOlxcVXNlcnNcXNCS0LvQsNC0XFxEZXNrdG9wXFxHaXRIdWJcXENhdGFsb2dcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxjYXRlZ29yaWVzLXBhZ2UvLi5cXGxheW91dFxcbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwiLi4vbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUNDSiIsImZpbGUiOiIuLi9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZS1saW5rIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuIiwiLmFjdGl2ZS1saW5rIHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/layout/layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/User */ "./src/app/models/User.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");





var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(router, userService, ngZone) {
        this.router = router;
        this.userService = userService;
        this.ngZone = ngZone;
        this.user = new _models_User__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.loginOpened = false;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.user$.subscribe(function (data) {
            if (!data) {
                return;
            }
            _this.ngZone.run(function () {
                _this.user = data;
            });
        });
        this.userService.loadUser();
    };
    LayoutComponent.prototype.onLogInClick = function () {
        this.loginOpened = true;
    };
    LayoutComponent.prototype.onLogOutClick = function () {
        this.user = new _models_User__WEBPACK_IMPORTED_MODULE_2__["User"]();
        window.localStorage.removeItem('CurrentUser');
        this.router.navigate(['catalog']);
    };
    LayoutComponent.prototype.userLogin = function (user) {
        this.user = user;
    };
    LayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layout.component.scss */ "./src/app/components/layout/layout.component.scss")).default]
        })
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/User */ "./src/app/models/User.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.noUser = false;
        this.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    LoginComponent.prototype.changeOpened = function (val) {
        this.opened = val;
        this.openedChange.emit(this.opened);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.close = function () {
        this.changeOpened(false);
    };
    LoginComponent.prototype.submit = function (form) {
        var user = { login: form.value.login, password: form.value.password };
        if ((user.login == 'admin') && (user.password == 'admin')) {
            var curUser = new _models_User__WEBPACK_IMPORTED_MODULE_2__["User"](user.login, 'ADMIN');
            window.localStorage.setItem('CurrentUser', JSON.stringify(curUser));
            this.userLogin.emit(curUser);
            this.changeOpened(false);
        }
        else if ((user.login == 'user') && (user.password == 'qwerty')) {
            var curUser = new _models_User__WEBPACK_IMPORTED_MODULE_2__["User"](user.login, 'USER');
            window.localStorage.setItem('CurrentUser', JSON.stringify(curUser));
            this.userLogin.emit(curUser);
            this.changeOpened(false);
        }
        else {
            this.noUser = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], LoginComponent.prototype, "opened", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], LoginComponent.prototype, "openedChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], LoginComponent.prototype, "userLogin", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")).default]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/tovars-page/tovar-window/tovar-window.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/tovars-page/tovar-window/tovar-window.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi90b3ZhcnMtcGFnZS90b3Zhci13aW5kb3cvdG92YXItd2luZG93LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/tovars-page/tovar-window/tovar-window.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/tovars-page/tovar-window/tovar-window.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TovarWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TovarWindowComponent", function() { return TovarWindowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Tovar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/Tovar */ "./src/app/models/Tovar.ts");
/* harmony import */ var _services_categories_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/categories-page.service */ "./src/app/services/categories-page.service.ts");
/* harmony import */ var _services_tovar_page_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/tovar-page.service */ "./src/app/services/tovar-page.service.ts");





var TovarWindowComponent = /** @class */ (function () {
    function TovarWindowComponent(categoryService, tovarService) {
        this.categoryService = categoryService;
        this.tovarService = tovarService;
        this.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.categories = [];
        this.errors = { Name: false, Cost: false, DateEnd: false, Categories: false };
    }
    TovarWindowComponent.prototype.changeOpened = function (val) {
        this.opened = val;
        this.openedChange.emit(this.opened);
    };
    TovarWindowComponent.prototype.ngOnInit = function () {
        this.categories = this.categoryService.loadAllCategories();
    };
    TovarWindowComponent.prototype.close = function () {
        this.changeOpened(false);
    };
    TovarWindowComponent.prototype.submit = function () {
        this.errors = this.tovar.validate();
        if (this.tovar.isValid()) {
            if (this.tovar.ID) {
                this.tovarService.change(this.tovar);
            }
            else {
                this.tovar.ID = _models_Tovar__WEBPACK_IMPORTED_MODULE_2__["Tovar"].generateID();
                this.tovarService.add(this.tovar);
            }
            this.close();
        }
        console.log(window.localStorage.getItem('Tovars'));
    };
    TovarWindowComponent.ctorParameters = function () { return [
        { type: _services_categories_page_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesPageService"] },
        { type: _services_tovar_page_service__WEBPACK_IMPORTED_MODULE_4__["TovarPageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TovarWindowComponent.prototype, "opened", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], TovarWindowComponent.prototype, "openedChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TovarWindowComponent.prototype, "tovar", void 0);
    TovarWindowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tovar-window',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tovar-window.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tovars-page/tovar-window/tovar-window.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tovar-window.component.scss */ "./src/app/components/tovars-page/tovar-window/tovar-window.component.scss")).default]
        })
    ], TovarWindowComponent);
    return TovarWindowComponent;
}());



/***/ }),

/***/ "./src/app/components/tovars-page/tovars-page.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/tovars-page/tovars-page.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi90b3ZhcnMtcGFnZS90b3ZhcnMtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/tovars-page/tovars-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/tovars-page/tovars-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: TovarsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TovarsPageComponent", function() { return TovarsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_categories_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/categories-page.service */ "./src/app/services/categories-page.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_tovar_page_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tovar-page.service */ "./src/app/services/tovar-page.service.ts");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/User */ "./src/app/models/User.ts");
/* harmony import */ var _models_Tovar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/Tovar */ "./src/app/models/Tovar.ts");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/dist/fesm5/index.js");








var TovarsPageComponent = /** @class */ (function () {
    function TovarsPageComponent(categoryService, userService, tovarService, ngZone, dialogService) {
        this.categoryService = categoryService;
        this.userService = userService;
        this.tovarService = tovarService;
        this.ngZone = ngZone;
        this.dialogService = dialogService;
        this.user = new _models_User__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.tovars = [];
        this.tovarWindowOpened = false;
        this.subscriptions = [];
    }
    TovarsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var tovarSub = this.tovarService.tovars$.subscribe(function (data) {
            if (!data) {
                return;
            }
            _this.ngZone.run(function () {
                _this.tovars = data;
            });
        });
        this.tovarService.loadall();
        var userSub = this.userService.user$.subscribe(function (data) {
            if (!data) {
                return;
            }
            _this.ngZone.run(function () {
                _this.user = data;
            });
        });
        this.userService.loadUser();
        this.subscriptions.push(userSub);
        this.subscriptions.push(tovarSub);
    };
    TovarsPageComponent.prototype.onChangeTovar = function (tovar) {
        this.currentTovar = tovar;
        this.currentTovar.DateEnd = new Date(this.currentTovar.DateEnd);
        this.tovarWindowOpened = true;
        console.log(this.currentTovar);
    };
    TovarsPageComponent.prototype.onAddTovar = function () {
        this.currentTovar = new _models_Tovar__WEBPACK_IMPORTED_MODULE_6__["Tovar"]();
        this.currentTovar.DateEnd = new Date();
        this.tovarWindowOpened = true;
    };
    TovarsPageComponent.prototype.onRemoveTovar = function (tovar) {
        var _this = this;
        var dialog = this.dialogService.open({
            title: 'Удаление товара',
            content: 'Вы действительно хотите удалить - ' + tovar.Name + '?',
            actions: [
                { text: 'Нет' },
                { text: 'Да', primary: true }
            ],
            width: 450,
            height: 200,
            minWidth: 250
        });
        var dialogSub = dialog.result.subscribe(function (result) {
            if (result instanceof _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_7__["DialogCloseResult"]) {
                return;
            }
            else if (result.text == 'Да') {
                _this.tovarService.remove(tovar);
            }
        });
        this.subscriptions.push(dialogSub);
    };
    TovarsPageComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    TovarsPageComponent.ctorParameters = function () { return [
        { type: _services_categories_page_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesPageService"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _services_tovar_page_service__WEBPACK_IMPORTED_MODULE_4__["TovarPageService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_7__["DialogService"] }
    ]; };
    TovarsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tovars-page',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tovars-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tovars-page/tovars-page.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tovars-page.component.scss */ "./src/app/components/tovars-page/tovars-page.component.scss")).default]
        })
    ], TovarsPageComponent);
    return TovarsPageComponent;
}());



/***/ }),

/***/ "./src/app/models/Category.ts":
/*!************************************!*\
  !*** ./src/app/models/Category.ts ***!
  \************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


var Category = /** @class */ (function () {
    function Category(id, name) {
        if (!id) {
            return;
        }
        this.ID = id;
        if (!name) {
            return;
        }
        this.Name = name;
    }
    Category.Add = function (name) {
        // симулируем таймером задержку при создании категории (запрос ожидаем)
        var promise = new Promise(function (resolve, reject) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(100).toPromise().then(function (data) {
                Category.count += 1;
                resolve(new Category(Category.count, name));
            }, function (reason) {
                reject('Category add failed - ' + reason);
            });
        });
        return promise;
    };
    Category.count = 11;
    return Category;
}());



/***/ }),

/***/ "./src/app/models/Tovar.ts":
/*!*********************************!*\
  !*** ./src/app/models/Tovar.ts ***!
  \*********************************/
/*! exports provided: Tovar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tovar", function() { return Tovar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Tovar = /** @class */ (function () {
    function Tovar(json) {
        if (!json) {
            return;
        }
        this.ID = json.ID;
        this.Name = json.Name;
        this.Cost = json.Cost;
        this.DateEnd = json.DateEnd;
        this.Categories = json.Categories;
    }
    Tovar.generateID = function () {
        Tovar.count += 1;
        return Tovar.count;
    };
    Tovar.prototype.validate = function () {
        var result = { Name: false, Cost: false, DateEnd: false, Categories: false };
        if ((this.Name.length < 5) || (this.Name.length > 40)) {
            result.Name = true;
        }
        if (this.Cost <= 0) {
            result.Cost = true;
        }
        if (this.DateEnd <= new Date()) {
            result.DateEnd = true;
        }
        if (this.Categories.length == 0) {
            result.Categories = true;
        }
        return result;
    };
    Tovar.prototype.isValid = function () {
        var errors = this.validate();
        if (errors.Name) {
            return false;
        }
        if (errors.Cost) {
            return false;
        }
        if (errors.DateEnd) {
            return false;
        }
        if (errors.Categories) {
            return false;
        }
        return true;
    };
    Tovar.count = 1;
    return Tovar;
}());



/***/ }),

/***/ "./src/app/models/User.ts":
/*!********************************!*\
  !*** ./src/app/models/User.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var User = /** @class */ (function () {
    function User(name, role) {
        this.DisplayName = 'Гость';
        this.Authorized = false;
        this.IsAdmin = false;
        if (!name) {
            return;
        }
        this.DisplayName = name;
        this.Authorized = true;
        if (!role) {
            return;
        }
        switch (role) {
            case 'ADMIN':
                this.IsAdmin = true;
                break;
            case 'USER':
                this.IsAdmin = false;
                break;
        }
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/categories-page.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/categories-page.service.ts ***!
  \*****************************************************/
/*! exports provided: CategoriesPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageService", function() { return CategoriesPageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_Category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Category */ "./src/app/models/Category.ts");




var CategoriesPageService = /** @class */ (function () {
    function CategoriesPageService() {
        this.categories$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    CategoriesPageService.prototype.addCategory = function (data) {
        console.log(data);
        var allCategories = window.localStorage.getItem('Categories');
        window.localStorage.removeItem('Categories');
        var result = [];
        if (allCategories) {
            var parsed = JSON.parse(allCategories);
            parsed.forEach(function (category) {
                result.push(new _models_Category__WEBPACK_IMPORTED_MODULE_3__["Category"](category.ID, category.Name));
            });
        }
        result.push(data);
        var json = JSON.stringify(result);
        window.localStorage.setItem('Categories', json);
        this.categories$.next(result);
    };
    CategoriesPageService.prototype.changeCategory = function (data) {
        var allCategories = window.localStorage.getItem('Categories');
        var result = [];
        var parsed = JSON.parse(allCategories);
        parsed.forEach(function (category) {
            if (category.ID == data.ID) {
                result.push(data);
            }
            else {
                result.push(new _models_Category__WEBPACK_IMPORTED_MODULE_3__["Category"](category.ID, category.Name));
            }
        });
        var json = JSON.stringify(result);
        window.localStorage.setItem('Categories', json);
        this.categories$.next(result);
    };
    CategoriesPageService.prototype.removeCategory = function (data) {
        var allCategories = window.localStorage.getItem('Categories');
        var result = [];
        var parsed = JSON.parse(allCategories);
        parsed.forEach(function (category) {
            if (category.ID == data.ID) {
                return;
            }
            else {
                result.push(new _models_Category__WEBPACK_IMPORTED_MODULE_3__["Category"](category.ID, category.Name));
            }
        });
        var json = JSON.stringify(result);
        window.localStorage.setItem('Categories', json);
        this.categories$.next(result);
    };
    CategoriesPageService.prototype.getCategory = function (id) {
        var allCategories = window.localStorage.getItem('Categories');
        var result;
        var parsed = JSON.parse(allCategories);
        var finded = parsed.map(function (val) {
            if (val.ID == id) {
                return true;
            }
            else {
                return false;
            }
        });
        result = new _models_Category__WEBPACK_IMPORTED_MODULE_3__["Category"](finded[0].ID, finded[0].Name);
        return result;
    };
    CategoriesPageService.prototype.getAllCategories = function () {
        var allCategories = window.localStorage.getItem('Categories');
        var result;
        var parsed = JSON.parse(allCategories);
        if (parsed) {
            result = parsed.map(function (category) { return new _models_Category__WEBPACK_IMPORTED_MODULE_3__["Category"](category.ID, category.Name); });
            this.categories$.next(result);
        }
    };
    CategoriesPageService.prototype.loadAllCategories = function () {
        var allCategories = window.localStorage.getItem('Categories');
        var result;
        var parsed = JSON.parse(allCategories);
        if (parsed) {
            result = parsed.map(function (category) { return new _models_Category__WEBPACK_IMPORTED_MODULE_3__["Category"](category.ID, category.Name); });
            return result;
        }
        else {
            return [];
        }
    };
    CategoriesPageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CategoriesPageService);
    return CategoriesPageService;
}());



/***/ }),

/***/ "./src/app/services/tovar-page.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/tovar-page.service.ts ***!
  \************************************************/
/*! exports provided: TovarPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TovarPageService", function() { return TovarPageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_Tovar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Tovar */ "./src/app/models/Tovar.ts");




var TovarPageService = /** @class */ (function () {
    function TovarPageService() {
        this.tovars$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    TovarPageService.prototype.add = function (data) {
        var result = [];
        var tovars = JSON.parse(window.localStorage.getItem('Tovars'));
        if (tovars) {
            tovars.forEach(function (tovar) {
                result.push(new _models_Tovar__WEBPACK_IMPORTED_MODULE_3__["Tovar"](tovar));
            });
        }
        result.push(data);
        window.localStorage.setItem('Tovars', JSON.stringify(result));
        this.tovars$.next(result);
    };
    TovarPageService.prototype.remove = function (data) {
        var result = [];
        var tovars = JSON.parse(window.localStorage.getItem('Tovars'));
        if (tovars) {
            tovars.forEach(function (tovar) {
                if (tovar.ID != data.ID) {
                    result.push(new _models_Tovar__WEBPACK_IMPORTED_MODULE_3__["Tovar"](tovar));
                }
            });
        }
        window.localStorage.setItem('Tovars', JSON.stringify(result));
        this.tovars$.next(result);
    };
    TovarPageService.prototype.change = function (data) {
        var result = [];
        var tovars = JSON.parse(window.localStorage.getItem('Tovars'));
        if (tovars) {
            tovars.forEach(function (tovar) {
                if (tovar.ID == data.ID) {
                    result.push(data);
                }
                else {
                    result.push(new _models_Tovar__WEBPACK_IMPORTED_MODULE_3__["Tovar"](tovar));
                }
            });
        }
        window.localStorage.setItem('Tovars', JSON.stringify(result));
        this.tovars$.next(result);
    };
    TovarPageService.prototype.getbyid = function (id) {
        var result;
        var tovars = JSON.parse(window.localStorage.getItem('Tovars'));
        if (tovars) {
            tovars.forEach(function (tovar) {
                if (tovar.ID == id) {
                    result = new _models_Tovar__WEBPACK_IMPORTED_MODULE_3__["Tovar"](tovar);
                }
            });
        }
        return result;
    };
    TovarPageService.prototype.getall = function () {
        var allTovars = window.localStorage.getItem('Tovars');
        var result;
        var parsed = JSON.parse(allTovars);
        if (parsed) {
            result = parsed.map(function (tovar) { return new _models_Tovar__WEBPACK_IMPORTED_MODULE_3__["Tovar"](tovar); });
            return result;
        }
        else {
            return [];
        }
    };
    TovarPageService.prototype.loadall = function () {
        var allTovars = window.localStorage.getItem('Tovars');
        var result;
        var parsed = JSON.parse(allTovars);
        if (parsed) {
            result = parsed.map(function (tovar) { return new _models_Tovar__WEBPACK_IMPORTED_MODULE_3__["Tovar"](tovar); });
            this.tovars$.next(result);
        }
    };
    TovarPageService.prototype.hasCategory = function (category) {
        var result = false;
        var allTovars = this.getall();
        allTovars.forEach(function (tovar) {
            if (tovar.Categories.map(function (cat) { return cat.ID; }).includes(category.ID)) {
                result = true;
            }
        });
        return result;
    };
    TovarPageService.prototype.getTovarsByCategoryID = function (id) {
        var tovars = this.getall();
        var result = tovars.filter(function (tovar) { return tovar.Categories.map(function (cat) { return cat.ID; }).includes(id); });
        return result;
    };
    TovarPageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TovarPageService);
    return TovarPageService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/User */ "./src/app/models/User.ts");




var UserService = /** @class */ (function () {
    function UserService() {
        this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    UserService.prototype.loadUser = function () {
        var result = new _models_User__WEBPACK_IMPORTED_MODULE_3__["User"]();
        var currentUser = window.localStorage.getItem('CurrentUser');
        if (currentUser) {
            var user = JSON.parse(currentUser);
            result.Authorized = user.Authorized;
            result.IsAdmin = user.IsAdmin;
            result.DisplayName = user.DisplayName;
        }
        this.user$.next(result);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Влад\Desktop\GitHub\Catalog\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map