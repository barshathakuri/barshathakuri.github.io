(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/account/account.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/account/account.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/account/manage/manage.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/account/manage/manage.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <title>Document</title>\r\n    <style>\r\n      body {\r\n        width: 100%;\r\n        height: 141%;\r\n        font-family: calibri;\r\n        margin: 0;\r\n        background-color: white;\r\n      }\r\n\r\n      .watermark {\r\n        position: absolute;\r\n        top: 30%;\r\n        left: 20%;\r\n        z-index: -1;\r\n        opacity: 0.1;\r\n      }\r\n\r\n      .watermark img {\r\n        height: 500px;\r\n      }\r\n\r\n      .topheader {\r\n        width: 90%;\r\n        height: 50px;\r\n        padding-top: 15px;\r\n        margin: auto;\r\n        font-weight: bold;\r\n      }\r\n\r\n      .topheader-left {\r\n        width: 50%;\r\n        float: left;\r\n      }\r\n\r\n      .topheader-right {\r\n        width: 50%;\r\n        float: right;\r\n        text-align: right;\r\n      }\r\n\r\n      .bottomheader {\r\n        width: 90%;\r\n        height: 205px;\r\n        margin: auto;\r\n        zoom: 60%;\r\n      }\r\n\r\n      .bottomheader-left {\r\n        width: 60%;\r\n        float: left;\r\n      }\r\n\r\n      .bottomheader-left img {\r\n        height: 200px;\r\n      }\r\n\r\n      .bottomheader-right {\r\n        width: 40%;\r\n        float: right;\r\n        color: #00a504;\r\n      }\r\n\r\n      .bottomheader-right .company-name {\r\n        font-weight: bold;\r\n        font-size: 35px;\r\n        padding-bottom: 5px;\r\n      }\r\n\r\n      .bottomheader-right .company-details {\r\n        font-size: 25px;\r\n      }\r\n\r\n      .greenline {\r\n        width: 100%;\r\n        height: 50px;\r\n      }\r\n\r\n      .greenline hr {\r\n        width: 100%;\r\n        height: 6px;\r\n        margin-top: 10px;\r\n        border: none;\r\n        background-color: #00a504;\r\n      }\r\n\r\n      .title-body {\r\n        width: 20%;\r\n        height: 50px;\r\n        margin: auto;\r\n        font-size: 20px;\r\n        font-weight: bold;\r\n        /* zoom: 60%; */\r\n      }\r\n\r\n      .topbody {\r\n        width: 85%;\r\n        height: 50px;\r\n        margin: auto;\r\n        font-size: 20px;\r\n        font-weight: bold;\r\n        /* zoom: 60%; */\r\n      }\r\n\r\n      .topbody-left {\r\n        width: 35%;\r\n        float: left;\r\n      }\r\n\r\n      .topbody-middle {\r\n        width: 35%;\r\n        float: left;\r\n      }\r\n\r\n      .topbody-right {\r\n        width: 30%;\r\n        float: right;\r\n      }\r\n\r\n      .bodydiv {\r\n        width: 80%;\r\n        margin: auto;\r\n        font-size: 20px;\r\n      }\r\n\r\n      .text-to {\r\n        width: 100%;\r\n        height: 30px;\r\n        margin-top: 50px;\r\n        font-weight: bold;\r\n      }\r\n\r\n      .text-name {\r\n        width: 100%;\r\n        height: 30px;\r\n        font-weight: bold;\r\n      }\r\n\r\n      .tablediv {\r\n        width: 100%;\r\n        margin-top: 50px;\r\n      }\r\n\r\n      .tablediv table {\r\n        width: 100%;\r\n        border: 1px solid black;\r\n        text-align: center;\r\n      }\r\n\r\n      .tablediv table tr td {\r\n        border: 1px solid black;\r\n      }\r\n\r\n      .tablediv table .scol {\r\n        width: 20%;\r\n      }\r\n\r\n      .pament-method {\r\n        width: 100%;\r\n        height: 50px;\r\n        margin-top: 50px;\r\n      }\r\n\r\n      .text-amount {\r\n        width: 100%;\r\n        height: 50px;\r\n        margin-top: 30px;\r\n      }\r\n\r\n      .text-amount .text-amount-in {\r\n        width: 40%;\r\n        float: right;\r\n        font-weight: bold;\r\n      }\r\n\r\n      .paiddetails {\r\n        width: 100%;\r\n        height: 120px;\r\n        margin-top: 100px;\r\n        font-weight: bold;\r\n      }\r\n\r\n      .paiddetails-left {\r\n        width: 75%;\r\n        float: left;\r\n      }\r\n\r\n      .paiddetails-right {\r\n        width: 25%;\r\n        float: right;\r\n      }\r\n\r\n      .footer {\r\n        width: 100%;\r\n        height: 60px;\r\n        margin-top: 100px;\r\n        background-color: #00a504;\r\n        color: white;\r\n        zoom: 60%;\r\n      }\r\n\r\n      .footer-left {\r\n        width: 40%;\r\n        float: left;\r\n        padding-top: 20px;\r\n      }\r\n\r\n      .footer-left hr {\r\n        width: 100%;\r\n        height: 6px;\r\n        margin-top: 7px;\r\n        border: none;\r\n        background-color: white;\r\n      }\r\n\r\n      .footer-middle {\r\n        width: 20%;\r\n        float: left;\r\n        font-size: 36px;\r\n      }\r\n\r\n      .footer-right {\r\n        width: 40%;\r\n        float: right;\r\n        padding-top: 20px;\r\n      }\r\n\r\n      .footer-right hr {\r\n        width: 100%;\r\n        height: 6px;\r\n        margin-top: 7px;\r\n        border: none;\r\n        background-color: white;\r\n      }\r\n    </style>\r\n  </head>\r\n\r\n  <body>\r\n    <div class=\"watermark\">\r\n      <img src=\"../../../assets//img/gcn-watermark.png\" alt=\"\" />\r\n    </div>\r\n    <div class=\"maindiv\">\r\n      <div class=\"topheader\">\r\n        <div class=\"topheader-left\">Reg No. 138469/072/073</div>\r\n        <div class=\"topheader-right\">Pan No. 603524499</div>\r\n      </div>\r\n      <div class=\"bottomheader\">\r\n        <div class=\"bottomheader-left\">\r\n          <img src=\"../../../assets/img/gcn-logo.png\" alt=\"\" />\r\n        </div>\r\n        <div class=\"bottomheader-right\">\r\n          <div class=\"company-name\">\r\n            Green Computing Nepal Pvt. Ltd.\r\n          </div>\r\n          <div class=\"company-details\">\r\n            Adwait Marg, Bagbazar\r\n          </div>\r\n          <div class=\"company-details\">\r\n            G.P.O Box No.23792, Kathmandu, Nepal\r\n          </div>\r\n          <div class=\"company-details\">\r\n            Phone :- 01-6923449\r\n          </div>\r\n          <div class=\"company-details\">\r\n            Email : greencomputingnepal@gmail.com\r\n          </div>\r\n          <div class=\"company-details\">\r\n            Website : www.gcn.com.np\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"greenline\">\r\n        <hr />\r\n      </div>\r\n      <div class=\"title-body\"><u>Cash In Slip</u></div>\r\n      <div class=\"topbody\">\r\n        <div class=\"topbody-left\">Invoice No : xxx</div>\r\n        <div class=\"topbody-middle\">Invoice Date : xxx</div>\r\n        <div class=\"topbody-right\">Student Id : xxx</div>\r\n      </div>\r\n      <!--  -->\r\n      <!--  -->\r\n      <div class=\"bodydiv\">\r\n        <div class=\"text-to\">To</div>\r\n        <div class=\"text-name\">xxx</div>\r\n        <div class=\"text-name\">xxx</div>\r\n        <div class=\"text-name\">xxx</div>\r\n        <div class=\"tablediv\">\r\n          <table cellspacing=\"0\">\r\n            <tr>\r\n              <td class=\"scol\">S.No.</td>\r\n              <td class=\"bcol\">Particular</td>\r\n              <td class=\"scol\">Amount</td>\r\n            </tr>\r\n            <tr>\r\n              <td class=\"scol\">xxx</td>\r\n              <td class=\"bcol\">xxx</td>\r\n              <td class=\"scol\">xxx</td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"pament-method\">\r\n          <div><b>Payment Method</b></div>\r\n          <div>xxx</div>\r\n        </div>\r\n        <div class=\"text-amount\">\r\n          <div class=\"text-amount-in\">\r\n            <div>Total Amount paid : xxx</div>\r\n            <div>Amount paid : xxx</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"paiddetails\">\r\n          <div class=\"paiddetails-left\">\r\n            <div>..............................</div>\r\n            <div>Paid By</div>\r\n            <div>Name : xxx</div>\r\n            <div>Paid Date : xxx</div>\r\n          </div>\r\n          <div class=\"paiddetails-right\">\r\n            <div>..............................</div>\r\n            <div>Received By</div>\r\n            <div>Name : xxx</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--  -->\r\n      <!--  -->\r\n      <div class=\"footer\">\r\n        <div class=\"footer-left\">\r\n          <hr />\r\n        </div>\r\n        <div class=\"footer-middle\">&nbsp;www.gcn.com.np</div>\r\n        <div class=\"footer-right\">\r\n          <hr />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/account/account-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.component */ "./src/app/account/account.component.ts");




var routes = [
    {
        path: "",
        component: _account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"],
        data: {
            title: "Account Process"
        }
    },
    {
        path: "income",
        loadChildren: function () {
            return Promise.all(/*! import() | income-income-module */[__webpack_require__.e("default~batch-batch-module~category-category-module~course-course-module~email-email-module~enquirie~b615e052"), __webpack_require__.e("income-income-module")]).then(__webpack_require__.bind(null, /*! ./income/income.module */ "./src/app/account/income/income.module.ts")).then(function (m) { return m.IncomeModule; });
        }
    },
    {
        path: "manage",
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./manage/manage.module */ "./src/app/account/manage/manage.module.ts")).then(function (m) { return m.ManageModule; });
        }
    }
];
var AccountRoutingModule = /** @class */ (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());



/***/ }),

/***/ "./src/app/account/account.component.scss":
/*!************************************************!*\
  !*** ./src/app/account/account.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AccountComponent = /** @class */ (function () {
    function AccountComponent() {
    }
    AccountComponent.prototype.ngOnInit = function () { };
    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-account",
            template: __webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/index.js!./src/app/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.scss */ "./src/app/account/account.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/account/account-routing.module.ts");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _manage_manage_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manage/manage.module */ "./src/app/account/manage/manage.module.ts");









var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _account_routing_module__WEBPACK_IMPORTED_MODULE_6__["AccountRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _manage_manage_module__WEBPACK_IMPORTED_MODULE_8__["ManageModule"]
            ],
            declarations: [_account_component__WEBPACK_IMPORTED_MODULE_7__["AccountComponent"]],
            providers: []
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/account/manage/manage-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/account/manage/manage-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ManageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageRoutingModule", function() { return ManageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _manage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage.component */ "./src/app/account/manage/manage.component.ts");




var routes = [
    {
        path: "",
        component: _manage_component__WEBPACK_IMPORTED_MODULE_3__["ManageComponent"],
        data: {
            title: "Manage Process"
        }
    },
    {
        path: "category",
        loadChildren: function () {
            return Promise.all(/*! import() | category-category-module */[__webpack_require__.e("default~batch-batch-module~category-category-module~course-course-module~email-email-module~enquirie~b615e052"), __webpack_require__.e("category-category-module")]).then(__webpack_require__.bind(null, /*! ./category/category.module */ "./src/app/account/manage/category/category.module.ts")).then(function (m) { return m.CategoryModule; });
        }
    },
    {
        path: "expenses",
        loadChildren: function () {
            return Promise.all(/*! import() | expenses-expenses-module */[__webpack_require__.e("default~batch-batch-module~category-category-module~course-course-module~email-email-module~enquirie~b615e052"), __webpack_require__.e("expenses-expenses-module")]).then(__webpack_require__.bind(null, /*! ./expenses/expenses.module */ "./src/app/account/manage/expenses/expenses.module.ts")).then(function (m) { return m.ExpensesModule; });
        }
    }
];
var ManageRoutingModule = /** @class */ (function () {
    function ManageRoutingModule() {
    }
    ManageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ManageRoutingModule);
    return ManageRoutingModule;
}());



/***/ }),

/***/ "./src/app/account/manage/manage.component.scss":
/*!******************************************************!*\
  !*** ./src/app/account/manage/manage.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvbWFuYWdlL21hbmFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/account/manage/manage.component.ts":
/*!****************************************************!*\
  !*** ./src/app/account/manage/manage.component.ts ***!
  \****************************************************/
/*! exports provided: ManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageComponent", function() { return ManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ManageComponent = /** @class */ (function () {
    function ManageComponent() {
    }
    ManageComponent.prototype.ngOnInit = function () { };
    ManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-manage",
            template: __webpack_require__(/*! raw-loader!./manage.component.html */ "./node_modules/raw-loader/index.js!./src/app/account/manage/manage.component.html"),
            styles: [__webpack_require__(/*! ./manage.component.scss */ "./src/app/account/manage/manage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ManageComponent);
    return ManageComponent;
}());



/***/ }),

/***/ "./src/app/account/manage/manage.module.ts":
/*!*************************************************!*\
  !*** ./src/app/account/manage/manage.module.ts ***!
  \*************************************************/
/*! exports provided: ManageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageModule", function() { return ManageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _manage_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-routing.module */ "./src/app/account/manage/manage-routing.module.ts");
/* harmony import */ var _manage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manage.component */ "./src/app/account/manage/manage.component.ts");








var ManageModule = /** @class */ (function () {
    function ManageModule() {
    }
    ManageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _manage_routing_module__WEBPACK_IMPORTED_MODULE_6__["ManageRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ],
            declarations: [_manage_component__WEBPACK_IMPORTED_MODULE_7__["ManageComponent"]],
            providers: []
        })
    ], ManageModule);
    return ManageModule;
}());



/***/ })

}]);
//# sourceMappingURL=account-account-module-es5.js.map