(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["income-income-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/account/income/add-income/add-income.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/account/income/add-income/add-income.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"striped-row-form-layouts\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"content-header\">New Due</div>\r\n  </div>\r\n\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\" id=\"striped-row-layout-card-center\">\r\n            New Fee Details\r\n            <button\r\n              type=\"button\"\r\n              class=\"close\"\r\n              aria-label=\"Close\"\r\n              (click)=\"closeModal()\"\r\n            >\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </h4>\r\n        </div>\r\n\r\n        <div class=\"card-content\">\r\n          <div class=\"px-3\">\r\n            <form\r\n              class=\"form form-horizontal striped-rows\"\r\n              #newincomeForm=\"ngForm\"\r\n              novalidate\r\n            >\r\n              <div class=\"form-body\">\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" for=\"projectinput5\"\r\n                    >Applicant</label\r\n                  >\r\n                  <div class=\"col-md-9\">\r\n                    <select\r\n                      id=\"projectinput7\"\r\n                      name=\"applicant\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Please Select Applicant\"\r\n                    >\r\n                      <option value=\"name\"> </option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" for=\"projectinput9\"\r\n                    >Title\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      id=\"projectinput9\"\r\n                      rows=\"5\"\r\n                      class=\"form-control\"\r\n                      name=\"title\"\r\n                      placeholder=\"Title\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" for=\"projectinput9\"\r\n                    >Amount\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      id=\"projectinput9\"\r\n                      rows=\"5\"\r\n                      class=\"form-control\"\r\n                      name=\"amount\"\r\n                      placeholder=\"Amount\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-actions center\">\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-raised btn-primary mr-1\"\r\n                  (click)=\"submit()\"\r\n                >\r\n                  <i class=\"ft-x\"></i> Add Due\r\n                </button>\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-raised btn-warning\"\r\n                  routerLink=\"/account/income\"\r\n                >\r\n                  <i class=\"fa fa-check-square-o\"></i> Go Back\r\n                </button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/account/income/fee/fee.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/account/income/fee/fee.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"extended\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">All Fee List</div>\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">All Fee</h4>\r\n        </div>\r\n        <div\r\n          class=\"form-actions\"\r\n          style=\"margin-left: 30px; padding-top: 20px; margin-bottom: -30px;\"\r\n        ></div>\r\n\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <table class=\"table table-responsive-md text-center\">\r\n              <thead>\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>Payment Code</th>\r\n                  <th>Title</th>\r\n                  <th>Amount</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <td colspan=\"1\"></td>\r\n                <!-- <td\r\n                  colspan=\"2\"\r\n                  style=\"text-align: left;\"\r\n                  *ngIf=\"!feeList.length\"\r\n                >\r\n                  <h2>No data in database</h2>\r\n                </td> -->\r\n\r\n                <tr *ngFor=\"let fee of feeservice; let i = index\">\r\n                  <td>{{ i + 1 }}</td>\r\n\r\n                  <td>{{ fee.paymentcode }}</td>\r\n                  <td>{{ fee.title }}</td>\r\n                  <td>{{ fee.amount }}</td>\r\n\r\n                  <td>\r\n                    <div class=\"floating-btn\">\r\n                      <a\r\n                        routerLink=\"edit/{{ fee._id }}\"\r\n                        class=\"btn btn-warning mr-1 btn-fab\"\r\n                        ><i class=\"icon-pencil\"></i\r\n                      ></a>\r\n                      <a\r\n                        (click)=\"delete(fee._id)\"\r\n                        class=\"btn btn-danger mr-1 btn-fab\"\r\n                        ><i class=\"icon-trash\"></i\r\n                      ></a>\r\n                      <a\r\n                        (click)=\"print(fee._id)\"\r\n                        class=\"btn btn-success mr-1 btn-fab\"\r\n                        ><i class=\"fa fa-download\"></i\r\n                      ></a>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/account/income/income.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/account/income/income.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"horizontal-form-layouts\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">All Due List</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content\">\r\n          <div class=\"px-3\">\r\n            <form\r\n              class=\"form form-horizontal\"\r\n              #newreportForm=\"ngForm\"\r\n              novalidate\r\n            >\r\n              <div class=\"form-body\">\r\n                <h4 class=\"form-section\">\r\n                  <i class=\"ft-report\"></i> All Due List\r\n                </h4>\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-raised btn-info mr-1\"\r\n                  routerLink=\"add\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  Add New\r\n                  <i class=\"fonticon-wrap\" class=\"icon- -follow\"></i>\r\n                </button>\r\n\r\n                <div class=\"form-group row\">\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"label-control\" for=\"projectinput\"\r\n                      >Applicant\r\n                    </label>\r\n                    <select\r\n                      class=\"form-control\"\r\n                      id=\"DefaultSelect\"\r\n                      placeholder=\"Select a Applicant\"\r\n                      name=\"applicant\"\r\n                      required\r\n                    >\r\n                      <option value=\"Report\">Report</option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <button\r\n                      type=\"button\"\r\n                      style=\"margin: 30px 40px;\"\r\n                      class=\"btn btn-raised btn-info mr-1\"\r\n                      (click)=\"submit()\"\r\n                    >\r\n                      <i class=\"ft ft-report-check\"></i> Generate Due Report\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n\r\n                <div>\r\n                  <h3>Name:</h3>\r\n\r\n                  <div class=\"card-body\">\r\n                    <table class=\"table table-responsive-md\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th>#</th>\r\n                          <th>Title</th>\r\n                          <th>Amount</th>\r\n                          <th>Action</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr>\r\n                          <td></td>\r\n                          <td>SERVICE CHARGE</td>\r\n                          <td>{{ i + 1 }}</td>\r\n                          <td>\r\n                            <div class=\"floating-btn\">\r\n                              <a\r\n                                (click)=\"delete(id)\"\r\n                                class=\"btn btn-danger mr-1 btn-fab\"\r\n                                ><i class=\"icon-trash\"></i\r\n                              ></a>\r\n                            </div>\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td></td>\r\n                          <td><b>Total</b></td>\r\n                          <td>{{ i + 1 }}</td>\r\n                          <td></td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td></td>\r\n                          <td><b>Paid</b></td>\r\n                          <td>{{ i + 1 }}</td>\r\n                          <td></td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td></td>\r\n                          <td><b>Due</b></td>\r\n                          <td>{{ i + 1 }}</td>\r\n                          <td></td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                    <div class=\"floating-btn\" style=\"float:right\">\r\n                      <a\r\n                        class=\"btn btn-warning mr-1 btn-fab\"\r\n                        routerLink=\"/account/income/fee\"\r\n                        >View Details</a\r\n                      >\r\n                      <a\r\n                        class=\"btn btn-info mr-1 btn-fab\"\r\n                        (click)=\"makepayment()\"\r\n                        >Make Payments</a\r\n                      >\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/account/income/payment/payment.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/account/income/payment/payment.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Modal starts-->\r\n<section id=\"modals\">\r\n  <!-- <div class=\"row text-left\" matchHeight=\"card\"> -->\r\n  <!--Modal with Default options starts-->\r\n  <form #newpaymentForm=\"ngForm\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Fee Payment</h4>\r\n              <button\r\n                type=\"button\"\r\n                class=\"close\"\r\n                aria-label=\"Close\"\r\n                (click)=\"closeModal()\"\r\n              >\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n\r\n            <div class=\"modal-body\">\r\n              <label class=\"col-md-4 label-control\" for=\"projectinput1\" required\r\n                >Title\r\n              </label>\r\n              <div class=\"col-md-8\">\r\n                <input\r\n                  type=\"text\"\r\n                  id=\"projectinput1\"\r\n                  class=\"form-control\"\r\n                  placeholder=\"Title\"\r\n                  name=\"title\"\r\n                  [(ngModel)]=\"newpayment.title\"\r\n                  #title=\"ngModel\"\r\n                />\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"modal-body\">\r\n              <label class=\"col-md-4 label-control\" for=\"projectinput3\" required\r\n                >Payment Fees</label\r\n              >\r\n              <div class=\"col-md-8\">\r\n                <input\r\n                  type=\"number\"\r\n                  id=\"projectinput3\"\r\n                  class=\"form-control\"\r\n                  placeholder=\"Payment Fees\"\r\n                  name=\"fees\"\r\n                  [(ngModel)]=\"newpayment.fees\"\r\n                  #fees=\"ngModel\"\r\n                />\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"modal-body\">\r\n              <label class=\"col-md-4 label-control\" for=\"projectinput5\"\r\n                >Received By\r\n              </label>\r\n              <div class=\"col-md-8\">\r\n                <input\r\n                  type=\"text\"\r\n                  id=\"projectinput5\"\r\n                  class=\"form-control\"\r\n                  placeholder=\"Received By\"\r\n                  name=\"received\"\r\n                  [(ngModel)]=\"newpayment.received\"\r\n                  #received=\"ngModel\"\r\n                />\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"modal-body\">\r\n              <label class=\"col-md-4 label-control\" for=\"projectinput\"\r\n                >Mode of Payment\r\n              </label>\r\n              <div class=\"col-md-8\">\r\n                <fieldset class=\"form-group position-relative\">\r\n                  <select\r\n                    class=\"form-control\"\r\n                    id=\"DefaultSelect\"\r\n                    placeholder=\"Select Payment method\"\r\n                    name=\"paymentType\"\r\n                    [(ngModel)]=\"newpayment.paymentType\"\r\n                    #paymentType=\"ngModel\"\r\n                  >\r\n                    <option value=\"Cash\">Cash</option>\r\n                    <option value=\"Cheque\">Cheque</option>\r\n\r\n                    <option value=\"Transfer\">Transfer</option>\r\n                    <option value=\"Bank Deposit\">Bank Deposit</option>\r\n                  </select>\r\n                </fieldset>\r\n              </div>\r\n            </div>\r\n\r\n            <div\r\n              *ngIf=\"newpayment.paymentType && newpayment.paymentType != 'Cash'\"\r\n            >\r\n              <div class=\"modal-body\">\r\n                <label\r\n                  class=\"col-md-4 label-control\"\r\n                  for=\"projectinput1\"\r\n                  required\r\n                  >Document Number\r\n                </label>\r\n                <div class=\"col-md-8\">\r\n                  <input\r\n                    type=\"number\"\r\n                    id=\"projectinput1\"\r\n                    class=\"form-control\"\r\n                    placeholder=\"Enter Document Number\"\r\n                    name=\"document\"\r\n                    [(ngModel)]=\"newpayment.document\"\r\n                    #document=\"ngModel\"\r\n                  />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"modal-body\">\r\n                <label class=\"col-md-4 label-control\">Upload Cheque </label>\r\n                <div class=\"col-md-8\">\r\n                  <label id=\"projectinput8\" class=\"file  mx-auto\">\r\n                    <input\r\n                      type=\"file\"\r\n                      id=\"file\"\r\n                      name=\"cheque\"\r\n                      [(ngModel)]=\"newpayment.cheque\"\r\n                      #cheque=\"ngModel\"\r\n                    />\r\n                    <span class=\"file-custom\"></span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"modal-footer\">\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-secondary btn-raised\"\r\n                (click)=\"closeModal()\"\r\n              >\r\n                Close\r\n              </button>\r\n\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-success btn-raised\"\r\n                (click)=\"submit()\"\r\n              >\r\n                Pay\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</section>\r\n<!--Modal ends-->\r\n"

/***/ }),

/***/ "./src/app/account/income/add-income/add-income.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/account/income/add-income/add-income.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvaW5jb21lL2FkZC1pbmNvbWUvYWRkLWluY29tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/account/income/add-income/add-income.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/account/income/add-income/add-income.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddIncomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddIncomeComponent", function() { return AddIncomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_income_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/income.service */ "./src/app/account/income/services/income.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






var AddIncomeComponent = /** @class */ (function () {
    function AddIncomeComponent(incomeservice, router, activeRouter, activeModal) {
        this.incomeservice = incomeservice;
        this.router = router;
        this.activeRouter = activeRouter;
        this.activeModal = activeModal;
        this.newincome = {};
    }
    AddIncomeComponent.prototype.ngOnInit = function () {
        this.incomeservice.getApplicants().subscribe(function (data) {
            console.log("data====>", data);
        }, function (err) {
            console.log(err);
        });
    };
    AddIncomeComponent.prototype.closeModal = function () {
        this.activeModal.close("Modal Closed");
    };
    AddIncomeComponent.prototype.submit = function () {
        var _this = this;
        console.log("Submitted>>>>>>>>>", this.newincome);
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a
            .fire({
            title: "Do you want to add the Applicant ?",
            text: "New user will be added in Applicant List",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Add"
        })
            .then(function (result) {
            if (result.value) {
                //dev
                _this.incomeservice.addIncome(_this.newincome).subscribe(function (data) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Add!", "Applicant has been added.", "success").then(function () {
                        _this.router.navigate(['account/income']);
                    });
                    //dev
                    console.log("Dataaa changeddd", data);
                }, function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Not Added!", "There was some error.", "error");
                    //dev
                    console.log("ERRORR", error);
                });
            }
        });
    };
    AddIncomeComponent.ctorParameters = function () { return [
        { type: _services_income_service__WEBPACK_IMPORTED_MODULE_2__["IncomeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] }
    ]; };
    AddIncomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-add-income",
            template: __webpack_require__(/*! raw-loader!./add-income.component.html */ "./node_modules/raw-loader/index.js!./src/app/account/income/add-income/add-income.component.html"),
            styles: [__webpack_require__(/*! ./add-income.component.scss */ "./src/app/account/income/add-income/add-income.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_income_service__WEBPACK_IMPORTED_MODULE_2__["IncomeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]])
    ], AddIncomeComponent);
    return AddIncomeComponent;
}());



/***/ }),

/***/ "./src/app/account/income/fee/fee.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/account/income/fee/fee.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvaW5jb21lL2ZlZS9mZWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/account/income/fee/fee.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/account/income/fee/fee.component.ts ***!
  \*****************************************************/
/*! exports provided: FeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeComponent", function() { return FeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var FeeComponent = /** @class */ (function () {
    function FeeComponent(router, activeRouter) {
        this.router = router;
        this.activeRouter = activeRouter;
        this.feeservice = [
            {
                _id: "1",
                paymentcode: "123",
                title: "Staff",
                amount: "555"
            }
        ];
    }
    FeeComponent.prototype.ngOnInit = function () { };
    FeeComponent.prototype.edit = function (id) {
        console.log("fee id>>", id);
        this.router.navigate(["account/income/fee/edit/" + id]);
    };
    FeeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    FeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-fee",
            template: __webpack_require__(/*! raw-loader!./fee.component.html */ "./node_modules/raw-loader/index.js!./src/app/account/income/fee/fee.component.html"),
            styles: [__webpack_require__(/*! ./fee.component.scss */ "./src/app/account/income/fee/fee.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], FeeComponent);
    return FeeComponent;
}());



/***/ }),

/***/ "./src/app/account/income/income-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/account/income/income-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: IncomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeRoutingModule", function() { return IncomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_income_add_income_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-income/add-income.component */ "./src/app/account/income/add-income/add-income.component.ts");
/* harmony import */ var _income_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./income.component */ "./src/app/account/income/income.component.ts");
/* harmony import */ var _fee_fee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fee/fee.component */ "./src/app/account/income/fee/fee.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/account/income/payment/payment.component.ts");







var routes = [
    {
        path: "",
        component: _income_component__WEBPACK_IMPORTED_MODULE_4__["IncomeComponent"],
        data: {
            title: "Income"
        }
    },
    {
        path: "add",
        component: _add_income_add_income_component__WEBPACK_IMPORTED_MODULE_3__["AddIncomeComponent"],
        data: {
            title: "Add Income"
        }
    },
    {
        path: "fee",
        component: _fee_fee_component__WEBPACK_IMPORTED_MODULE_5__["FeeComponent"],
        data: {
            title: "View Fee"
        }
    },
    {
        path: "payment",
        component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_6__["PaymentComponent"],
        data: {
            title: "Payment"
        }
    }
];
var IncomeRoutingModule = /** @class */ (function () {
    function IncomeRoutingModule() {
    }
    IncomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], IncomeRoutingModule);
    return IncomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/account/income/income.component.scss":
/*!******************************************************!*\
  !*** ./src/app/account/income/income.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvaW5jb21lL2luY29tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/account/income/income.component.ts":
/*!****************************************************!*\
  !*** ./src/app/account/income/income.component.ts ***!
  \****************************************************/
/*! exports provided: IncomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeComponent", function() { return IncomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/account/income/payment/payment.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






var IncomeComponent = /** @class */ (function () {
    function IncomeComponent(modalService, activeModal, router, activeRouter) {
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.router = router;
        this.activeRouter = activeRouter;
    }
    IncomeComponent.prototype.makepayment = function () {
        var modalRef = this.modalService.open(_payment_payment_component__WEBPACK_IMPORTED_MODULE_3__["PaymentComponent"], {
            windowClass: "dark-modal",
            backdropClass: "light-blue-backdrop"
        });
        modalRef.result
            .then(function (result) {
            console.log(result);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    IncomeComponent.prototype.delete = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a
            .fire({
            title: "Do you want to delete the income ?",
            text: "You won't be able to revert the deleted income",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        })
            .then(function (result) {
            if (result.value) {
                //dev
                _this.incomeService.deleteIncome(id).subscribe(function (data) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Deleted!", "Income has been deleted.", "success");
                    //dev
                    console.log("Dataaa changeddd", data);
                    _this.ngOnInit();
                }, function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Not Changed!", "There was some error.", "error");
                    //dev
                    console.log("ERRORR", error);
                });
            }
        });
    };
    IncomeComponent.prototype.ngOnInit = function () { };
    IncomeComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    IncomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-income",
            template: __webpack_require__(/*! raw-loader!./income.component.html */ "./node_modules/raw-loader/index.js!./src/app/account/income/income.component.html"),
            styles: [__webpack_require__(/*! ./income.component.scss */ "./src/app/account/income/income.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], IncomeComponent);
    return IncomeComponent;
}());



/***/ }),

/***/ "./src/app/account/income/income.module.ts":
/*!*************************************************!*\
  !*** ./src/app/account/income/income.module.ts ***!
  \*************************************************/
/*! exports provided: IncomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeModule", function() { return IncomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _income_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./income-routing.module */ "./src/app/account/income/income-routing.module.ts");
/* harmony import */ var _income_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./income.component */ "./src/app/account/income/income.component.ts");
/* harmony import */ var _add_income_add_income_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-income/add-income.component */ "./src/app/account/income/add-income/add-income.component.ts");
/* harmony import */ var _services_income_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/income.service */ "./src/app/account/income/services/income.service.ts");
/* harmony import */ var _fee_fee_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fee/fee.component */ "./src/app/account/income/fee/fee.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/account/income/payment/payment.component.ts");













var IncomeModule = /** @class */ (function () {
    function IncomeModule() {
    }
    IncomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _income_routing_module__WEBPACK_IMPORTED_MODULE_6__["IncomeRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ],
            declarations: [
                _income_component__WEBPACK_IMPORTED_MODULE_7__["IncomeComponent"],
                _add_income_add_income_component__WEBPACK_IMPORTED_MODULE_8__["AddIncomeComponent"],
                _fee_fee_component__WEBPACK_IMPORTED_MODULE_10__["FeeComponent"],
                _payment_payment_component__WEBPACK_IMPORTED_MODULE_11__["PaymentComponent"]
            ],
            providers: [_services_income_service__WEBPACK_IMPORTED_MODULE_9__["IncomeService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]]
        })
    ], IncomeModule);
    return IncomeModule;
}());



/***/ }),

/***/ "./src/app/account/income/payment/payment.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/account/income/payment/payment.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvaW5jb21lL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/account/income/payment/payment.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/account/income/payment/payment.component.ts ***!
  \*************************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");




var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(activeModal, router, activeRouter) {
        this.activeModal = activeModal;
        this.router = router;
        this.activeRouter = activeRouter;
        this.newpayment = {};
    }
    PaymentComponent.prototype.ngOnInit = function () { };
    PaymentComponent.prototype.closeModal = function () {
        this.activeModal.close();
    };
    PaymentComponent.prototype.submit = function () {
        console.log("Payment>>>", this.newpayment);
        this.router.navigate(["account/manage/"]);
    };
    PaymentComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    PaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-payment",
            template: __webpack_require__(/*! raw-loader!./payment.component.html */ "./node_modules/raw-loader/index.js!./src/app/account/income/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.scss */ "./src/app/account/income/payment/payment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/account/income/services/income.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/account/income/services/income.service.ts ***!
  \***********************************************************/
/*! exports provided: IncomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeService", function() { return IncomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/base.service */ "./src/app/shared/services/base.service.ts");




var IncomeService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](IncomeService, _super);
    function IncomeService(http) {
        var _this = _super.call(this, "") || this;
        _this.http = http;
        return _this;
    }
    IncomeService.prototype.addIncome = function (data) {
        return this.http.post("http://64.225.124.144:8080/income", { data: data }, this.getOptions());
    };
    IncomeService.prototype.deleteIncome = function (id) {
        return this.http.delete("http://64.225.124.144:8080/income" + id);
    };
    IncomeService.prototype.getApplicants = function () {
        return this.http.get("http://64.225.124.144:8080/" + 'applicants', this.getOptions());
    };
    IncomeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    IncomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], IncomeService);
    return IncomeService;
}(app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ })

}]);
//# sourceMappingURL=income-income-module-es5.js.map