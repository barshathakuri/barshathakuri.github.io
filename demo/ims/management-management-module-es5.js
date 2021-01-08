(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["management-management-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/enquiry/management/add-management/add-management.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/enquiry/management/add-management/add-management.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"horizontal-form-layouts\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Add New Enquiry Category</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content\">\r\n          <div class=\"px-3\">\r\n            <form\r\n              class=\"form form-horizontal\"\r\n              #newmanagementForm=\"ngForm\"\r\n              novalidate\r\n            >\r\n              <div class=\"form-body\">\r\n                <h4 class=\"form-section\">\r\n                  <i class=\"ft-management\"></i>New Enquiry Category Details\r\n                </h4>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label\r\n                    class=\"col-md-3 label-control\"\r\n                    for=\"projectinput1\"\r\n                    required\r\n                    >Category Name\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"text\"\r\n                      id=\"projectinput1\"\r\n                      class=\"form-control\"\r\n                      placeholder=\" Enter Name\"\r\n                      name=\"mname\"\r\n                      [(ngModel)]=\"newmanagement.mname\"\r\n                      #name=\"ngModel\"\r\n                      required\r\n                    />\r\n                    <div\r\n                      class=\"danger\"\r\n                      *ngIf=\"mname.invalid && (mname.dirty || mname.touched)\"\r\n                    >\r\n                      required field*\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <fieldset>\r\n                  <div class=\"input-group\" style=\"margin-left:26%;\">\r\n                    <!-- <span class=\"input-group-text\" id=\"checkbox-addon1\"> -->\r\n                    <input\r\n                      type=\"checkbox\"\r\n                      aria-label=\"Checkbox for following text input\"\r\n                      style=\"margin-top: 5px;\"\r\n                      name=\"status\"\r\n                      [(ngModel)]=\"newmanagement.status\"\r\n                      #status=\"ngModel\"\r\n                    />\r\n                    Active\r\n                    <!-- </span> -->\r\n                  </div>\r\n                </fieldset>\r\n              </div>\r\n\r\n              <div class=\"form-actions center\">\r\n                <button\r\n                  [disabled]=\"newmanagementForm.invalid\"\r\n                  type=\"button\"\r\n                  class=\"btn btn-raised btn-info mr-1\"\r\n                  (click)=\"submit()\"\r\n                >\r\n                  <i class=\"ft ft-management-check\"></i> Add New Categories\r\n                  Management\r\n                </button>\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-raised btn-danger\"\r\n                  routerLink=\"/enquiry/management\"\r\n                >\r\n                  <i class=\"ft ft-x\"></i> Go Back\r\n                </button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- // Basic form layout section end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/enquiry/management/edit-management/edit-management.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/enquiry/management/edit-management/edit-management.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"horizontal-form-layouts\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">update Enquiry Category</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content\">\r\n          <div class=\"px-3\">\r\n            <form\r\n              class=\"form form-horizontal\"\r\n              #newmanagementForm=\"ngForm\"\r\n              novalidate\r\n            >\r\n              <div class=\"form-body\">\r\n                <h4 class=\"form-section\">\r\n                  <i class=\"ft-management\"></i> Enquiry Category Details\r\n                </h4>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label\r\n                    class=\"col-md-3 label-control\"\r\n                    for=\"projectinput1\"\r\n                    required\r\n                    >Category Name\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"text\"\r\n                      id=\"projectinput1\"\r\n                      class=\"form-control\"\r\n                      placeholder=\" Enter Name\"\r\n                      name=\"mname\"\r\n                      [(ngModel)]=\"newmanagement.mname\"\r\n                      #mname=\"ngModel\"\r\n                      required\r\n                    />\r\n                    <div\r\n                      class=\"danger\"\r\n                      *ngIf=\"mname.invalid && (mname.dirty || mname.touched)\"\r\n                    >\r\n                      required field*\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <fieldset>\r\n                  <div class=\"input-group\" style=\"margin-left:26%;\">\r\n                    <!-- <span class=\"input-group-text\" id=\"checkbox-addon1\"> -->\r\n                    <input\r\n                      type=\"checkbox\"\r\n                      aria-label=\"Checkbox for following text input\"\r\n                      style=\"margin-top: 5px;\"\r\n                      name=\"status\"\r\n                      [(ngModel)]=\"newmanagement.stauts\"\r\n                      #status=\"ngModel\"\r\n                    />\r\n                    Active\r\n                    <!-- </span> -->\r\n                  </div>\r\n                </fieldset>\r\n              </div>\r\n\r\n              <div class=\"form-actions center\">\r\n                <button\r\n                  [disabled]=\"newmanagementForm.invalid\"\r\n                  type=\"button\"\r\n                  class=\"btn btn-raised btn-info mr-1\"\r\n                  (click)=\"update()\"\r\n                >\r\n                  <i class=\"ft ft-management-check\"></i> Update Categories\r\n                </button>\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-raised btn-danger\"\r\n                  routerLink=\"/account/management\"\r\n                >\r\n                  <i class=\"ft ft-x\"></i> Go Back\r\n                </button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- // Basic form layout section end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/enquiry/management/management.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/enquiry/management/management.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"extended\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">All Categories List</div>\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">All Expenses Categories List</h4>\r\n        </div>\r\n        <!-- <fieldset disabled>\r\n              <a href=\"javascript:void(0)\" class=\"btn btn-raised mr-1 btn-primary\">Add New</a>\r\n          </fieldset> -->\r\n        <div\r\n          class=\"form-actions\"\r\n          style=\"margin-left: 30px; padding-top: 20px; margin-bottom: -30px;\"\r\n        >\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-raised btn-info mr-1\"\r\n            routerLink=\"add\"\r\n            routerLinkActive=\"active\"\r\n          >\r\n            Add New\r\n            <i class=\"fonticon-wrap\" class=\"icon-management-follow\"></i>\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <table class=\"table table-responsive-md text-center\">\r\n              <thead>\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>Category Name</th>\r\n                  <th>Status</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <td colspan=\"1\"></td>\r\n                <td\r\n                  colspan=\"4\"\r\n                  style=\"text-align: left;\"\r\n                  *ngIf=\"!managementList.length\"\r\n                >\r\n                  <h2>No data in database</h2>\r\n                </td>\r\n\r\n                <tr *ngFor=\"let management of managementList; let i = index\">\r\n                  <!-- <td><img class=\"media-object round-media\" src=\"{{management.photo}}\" alt=\"Generic placeholder image\"\r\n                        style=\"height: 45px;\" /></td> -->\r\n                  <td>{{ i + 1 }}</td>\r\n                  <!-- <td>\r\n                      <div class=\"custom-control custom-checkbox m-0\">\r\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"item1\">\r\n                        <label class=\"custom-control-label col-form-label\" for=\"item1\"></label>\r\n                      </div>\r\n                    </td> -->\r\n                  <td>{{ management.name }}</td>\r\n                  <td>{{ management.status }}</td>\r\n\r\n                  <td>\r\n                    <div class=\"floating-btn\">\r\n                      <a\r\n                        (click)=\"edit(management._id)\"\r\n                        class=\"btn btn-warning mr-1 btn-fab\"\r\n                        ><i class=\"icon-pencil\"></i\r\n                      ></a>\r\n                      <a\r\n                        (click)=\"delete(management._id)\"\r\n                        class=\"btn btn-danger mr-1 btn-fab\"\r\n                        ><i class=\"icon-trash\"></i\r\n                      ></a>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/enquiry/management/add-management/add-management.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/enquiry/management/add-management/add-management.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VucXVpcnkvbWFuYWdlbWVudC9hZGQtbWFuYWdlbWVudC9hZGQtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/enquiry/management/add-management/add-management.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/enquiry/management/add-management/add-management.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddManagementComponent", function() { return AddManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/management.service */ "./src/app/enquiry/management/services/management.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_shared_models_management_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/models/management.model */ "./src/app/shared/models/management.model.ts");






var AddManagementComponent = /** @class */ (function () {
    function AddManagementComponent(managementservice, router, activeRouter) {
        this.managementservice = managementservice;
        this.router = router;
        this.activeRouter = activeRouter;
        this.newmanagement = new app_shared_models_management_model__WEBPACK_IMPORTED_MODULE_5__["Management"]({});
    }
    AddManagementComponent.prototype.ngOnInit = function () { };
    AddManagementComponent.prototype.submit = function () {
        var _this = this;
        console.log("Submitted>>>>>>>>>", this.newmanagement);
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a
            .fire({
            title: "Do you want to add the management ?",
            text: "New management will be added in Management List",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Add"
        })
            .then(function (result) {
            if (result.value) {
                //dev
                _this.managementservice.addManagement(_this.newmanagement).subscribe(function (data) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a
                        .fire("Add!", "Management has been added.", "success")
                        .then(function () {
                        _this.router.navigate(["account/management"]);
                    });
                    //dev
                    console.log("Dataaa changeddd", data);
                }, function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Not Added!", "There was some error.", "error");
                    //dev
                    console.log("ERRORR", error);
                });
            }
        });
    };
    AddManagementComponent.ctorParameters = function () { return [
        { type: _services_management_service__WEBPACK_IMPORTED_MODULE_2__["ManagementService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    AddManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-add-management",
            template: __webpack_require__(/*! raw-loader!./add-management.component.html */ "./node_modules/raw-loader/index.js!./src/app/enquiry/management/add-management/add-management.component.html"),
            styles: [__webpack_require__(/*! ./add-management.component.scss */ "./src/app/enquiry/management/add-management/add-management.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_management_service__WEBPACK_IMPORTED_MODULE_2__["ManagementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AddManagementComponent);
    return AddManagementComponent;
}());



/***/ }),

/***/ "./src/app/enquiry/management/edit-management/edit-management.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/enquiry/management/edit-management/edit-management.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VucXVpcnkvbWFuYWdlbWVudC9lZGl0LW1hbmFnZW1lbnQvZWRpdC1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/enquiry/management/edit-management/edit-management.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/enquiry/management/edit-management/edit-management.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EditManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditManagementComponent", function() { return EditManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/management.service */ "./src/app/enquiry/management/services/management.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_shared_models_management_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/models/management.model */ "./src/app/shared/models/management.model.ts");






var EditManagementComponent = /** @class */ (function () {
    function EditManagementComponent(managementservice, router, activeRouter) {
        this.managementservice = managementservice;
        this.router = router;
        this.activeRouter = activeRouter;
        this.updatedmanagement = new app_shared_models_management_model__WEBPACK_IMPORTED_MODULE_5__["Management"]({});
        this.managementid = this.activeRouter.snapshot.params["id"];
    }
    EditManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.managementservice.getManagementById(this.managementid).subscribe(function (data) {
            console.log("managementlist>>", data);
            _this.updatedmanagement = data.data;
        }, function (error) {
            console.log("cant fetch");
        });
    };
    EditManagementComponent.prototype.update = function () {
        var _this = this;
        console.log("Submitted>>>>>>>>>", this.updatedmanagement);
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a
            .fire({
            title: "Do you want to edit the management details ?",
            text: "You won't be able to revert the change",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm"
        })
            .then(function (result) {
            if (result.value) {
                //dev
                _this.managementservice
                    .editManagement(_this.updatedmanagement)
                    .subscribe(function (data) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a
                        .fire("Edit!", "Management User has been edited.", "success")
                        .then(function () {
                        _this.router.navigate(["account/management"]);
                    });
                    //dev
                    console.log("Dataaa changeddd", data);
                    _this.ngOnInit();
                }, function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Not Changed!", "There was some error.", "error");
                    //dev
                    console.log("ERRORR", error);
                });
            }
        });
    };
    EditManagementComponent.ctorParameters = function () { return [
        { type: _services_management_service__WEBPACK_IMPORTED_MODULE_2__["ManagementService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    EditManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-edit-management",
            template: __webpack_require__(/*! raw-loader!./edit-management.component.html */ "./node_modules/raw-loader/index.js!./src/app/enquiry/management/edit-management/edit-management.component.html"),
            styles: [__webpack_require__(/*! ./edit-management.component.scss */ "./src/app/enquiry/management/edit-management/edit-management.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_management_service__WEBPACK_IMPORTED_MODULE_2__["ManagementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditManagementComponent);
    return EditManagementComponent;
}());



/***/ }),

/***/ "./src/app/enquiry/management/management-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/enquiry/management/management-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementRoutingModule", function() { return ManagementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./management.component */ "./src/app/enquiry/management/management.component.ts");
/* harmony import */ var _add_management_add_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-management/add-management.component */ "./src/app/enquiry/management/add-management/add-management.component.ts");
/* harmony import */ var _edit_management_edit_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-management/edit-management.component */ "./src/app/enquiry/management/edit-management/edit-management.component.ts");






var routes = [
    {
        path: "",
        component: _management_component__WEBPACK_IMPORTED_MODULE_3__["ManagementComponent"],
        data: {
            title: "Management"
        }
    },
    {
        path: "add",
        component: _add_management_add_management_component__WEBPACK_IMPORTED_MODULE_4__["AddManagementComponent"],
        data: {
            title: "Add Management"
        }
    },
    {
        path: "edit/:id",
        component: _edit_management_edit_management_component__WEBPACK_IMPORTED_MODULE_5__["EditManagementComponent"],
        data: {
            title: "Edit Management"
        }
    }
];
var ManagementRoutingModule = /** @class */ (function () {
    function ManagementRoutingModule() {
    }
    ManagementRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ManagementRoutingModule);
    return ManagementRoutingModule;
}());



/***/ }),

/***/ "./src/app/enquiry/management/management.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/enquiry/management/management.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VucXVpcnkvbWFuYWdlbWVudC9tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/enquiry/management/management.component.ts":
/*!************************************************************!*\
  !*** ./src/app/enquiry/management/management.component.ts ***!
  \************************************************************/
/*! exports provided: ManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementComponent", function() { return ManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/management.service */ "./src/app/enquiry/management/services/management.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var ManagementComponent = /** @class */ (function () {
    function ManagementComponent(managementservice, router) {
        this.managementservice = managementservice;
        this.router = router;
        this.managementList = [];
    }
    ManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.managementservice.getManagement().subscribe(function (data) {
            console.log("managementlist>>", data);
            _this.managementList = data.data;
        }, function (error) {
            console.log("cant fetch");
        });
    };
    ManagementComponent.prototype.edit = function (id) {
        console.log("management id>>", id);
        this.router.navigate(["account/manage/management/edit/" + id]);
    };
    ManagementComponent.prototype.delete = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a
            .fire({
            title: "Do you want to delete the management ?",
            text: "You won't be able to revert the deleted management",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        })
            .then(function (result) {
            if (result.value) {
                //dev
                _this.managementservice.deleteManagement(id).subscribe(function (data) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Deleted!", "Management has been deleted.", "success");
                    //dev
                    console.log("Dataaa changeddd", data);
                    _this.ngOnInit();
                }, function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Not Changed!", "There was some error.", "error");
                    //dev
                    console.log("ERRORR", error);
                });
            }
        });
    };
    ManagementComponent.ctorParameters = function () { return [
        { type: _services_management_service__WEBPACK_IMPORTED_MODULE_3__["ManagementService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-management",
            template: __webpack_require__(/*! raw-loader!./management.component.html */ "./node_modules/raw-loader/index.js!./src/app/enquiry/management/management.component.html"),
            styles: [__webpack_require__(/*! ./management.component.scss */ "./src/app/enquiry/management/management.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_management_service__WEBPACK_IMPORTED_MODULE_3__["ManagementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ManagementComponent);
    return ManagementComponent;
}());



/***/ }),

/***/ "./src/app/enquiry/management/management.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/enquiry/management/management.module.ts ***!
  \*********************************************************/
/*! exports provided: ManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementModule", function() { return ManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _management_add_management_add_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../management/add-management/add-management.component */ "./src/app/enquiry/management/add-management/add-management.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _management_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./management.component */ "./src/app/enquiry/management/management.component.ts");
/* harmony import */ var _services_management_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/management.service */ "./src/app/enquiry/management/services/management.service.ts");
/* harmony import */ var _edit_management_edit_management_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-management/edit-management.component */ "./src/app/enquiry/management/edit-management/edit-management.component.ts");
/* harmony import */ var _management_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./management-routing.module */ "./src/app/enquiry/management/management-routing.module.ts");











var ManagementModule = /** @class */ (function () {
    function ManagementModule() {
    }
    ManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _management_routing_module__WEBPACK_IMPORTED_MODULE_10__["ManagementRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
            ],
            declarations: [
                _management_component__WEBPACK_IMPORTED_MODULE_7__["ManagementComponent"],
                _management_add_management_add_management_component__WEBPACK_IMPORTED_MODULE_5__["AddManagementComponent"],
                _edit_management_edit_management_component__WEBPACK_IMPORTED_MODULE_9__["EditManagementComponent"]
            ],
            providers: [_services_management_service__WEBPACK_IMPORTED_MODULE_8__["ManagementService"]]
        })
    ], ManagementModule);
    return ManagementModule;
}());



/***/ }),

/***/ "./src/app/enquiry/management/services/management.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/enquiry/management/services/management.service.ts ***!
  \*******************************************************************/
/*! exports provided: ManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementService", function() { return ManagementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../shared/services/base.service */ "./src/app/shared/services/base.service.ts");




var ManagementService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ManagementService, _super);
    function ManagementService(http) {
        var _this = _super.call(this, "management") || this;
        _this.http = http;
        return _this;
    }
    ManagementService.prototype.getManagement = function () {
        return this.http.get(this.url, this.getOptions());
    };
    ManagementService.prototype.getManagementById = function (id) {
        return this.http.get(this.url + id, this.getOptions());
    };
    ManagementService.prototype.editManagement = function (data) {
        return this.http.put(this.url + data._id, { data: data }, this.getOptions());
    };
    ManagementService.prototype.deleteManagement = function (id) {
        return this.http.delete(this.url + id);
    };
    ManagementService.prototype.addManagement = function (data) {
        console.log("url>>", this.url);
        console.log("data>>", data);
        return this.http.post(this.url, { data: data }, this.getOptions());
    };
    ManagementService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ManagementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ManagementService);
    return ManagementService;
}(_shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/shared/models/management.model.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/models/management.model.ts ***!
  \***************************************************/
/*! exports provided: Management */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Management", function() { return Management; });
var Management = /** @class */ (function () {
    function Management(managementInfo) {
        // this._id = userInfo._id || '';
        this.mname = managementInfo.mname || "";
        this.status = managementInfo.status || "";
    }
    Management.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return Management;
}());



/***/ })

}]);
//# sourceMappingURL=management-management-module-es5.js.map