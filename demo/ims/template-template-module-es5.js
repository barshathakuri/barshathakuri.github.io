(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["template-template-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sms/template/add-template/add-template.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sms/template/add-template/add-template.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"horizontal-form-layouts\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Add New Sms Template</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content\">\r\n          <div class=\"px-3\">\r\n            <form\r\n              class=\"form form-horizontal\"\r\n              #newtemplatesForm=\"ngForm\"\r\n              novalidate\r\n            >\r\n              <div class=\"form-body\">\r\n                <h4 class=\"form-section\">\r\n                  <i class=\"ft-user\"></i> New Sms Template Details\r\n                </h4>\r\n\r\n                <div class=\"col-md-6\">\r\n                  <label class=\"label-control\" for=\"projectinput1\" required\r\n                    >Template Name\r\n                  </label>\r\n\r\n                  <input\r\n                    type=\"text\"\r\n                    id=\"projectinput1\"\r\n                    class=\"form-control\"\r\n                    placeholder=\"Enter name\"\r\n                    name=\"tname\"\r\n                    [(ngModel)]=\"newtemplate.tname\"\r\n                    #tname=\"ngModel\"\r\n                    required\r\n                  />\r\n                </div>\r\n\r\n                <div class=\"col-md-6\" style=\"margin-top: 20px;\">\r\n                  <label class=\"label-control\" for=\"projectinput9\"\r\n                    >Sms Template</label\r\n                  >\r\n                  <br />\r\n                  <textarea\r\n                    id=\"projectinput9\"\r\n                    rows=\"2\"\r\n                    class=\"form-control\"\r\n                    name=\"remarks\"\r\n                    placeholder=\"Please select Sms Template or Type\"\r\n                    [(ngModel)]=\"newtemplate.remarks\"\r\n                    #remarks=\"ngModel\"\r\n                    style=\"height: 100px;\"\r\n                  ></textarea>\r\n                </div>\r\n              </div>\r\n\r\n              <div\r\n                class=\"form-actions center\"\r\n                style=\"float: left; margin-left: 20px;\"\r\n              >\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-raised btn-info mr-1\"\r\n                  (click)=\"submit()\"\r\n                >\r\n                  <i class=\"ft ft-user-check\"></i> Add New Sms Template\r\n                </button>\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-raised btn-danger\"\r\n                  routerLink=\"/sms/template\"\r\n                >\r\n                  <i class=\"ft ft-x\"></i> Go Back\r\n                </button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- // Basic form layout section end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sms/template/edit-template/edit-template.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sms/template/edit-template/edit-template.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"horizontal-form-layouts\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Edit New SMS Template</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content\">\r\n          <div class=\"px-3\">\r\n            <form\r\n              class=\"form form-horizontal\"\r\n              #newtemplatesForm=\"ngForm\"\r\n              novalidate\r\n            >\r\n              <div class=\"form-body\">\r\n                <h4 class=\"form-section\">\r\n                  <i class=\"ft-user\"></i> New SMS Template Details\r\n                </h4>\r\n\r\n                <div class=\"col-md-6\">\r\n                  <label class=\"label-control\" for=\"projectinput1\" required\r\n                    >Template Name\r\n                  </label>\r\n\r\n                  <input\r\n                    type=\"text\"\r\n                    id=\"projectinput1\"\r\n                    class=\"form-control\"\r\n                    placeholder=\"Enter name\"\r\n                    name=\"tname\"\r\n                    [(ngModel)]=\"newtemplate.tname\"\r\n                    #tname=\"ngModel\"\r\n                    required\r\n                  />\r\n                </div>\r\n\r\n                <div class=\"col-md-6\" style=\"margin-top: 20px;\">\r\n                  <label class=\"label-control\" for=\"projectinput9\"\r\n                    >Email Template</label\r\n                  >\r\n                  <br />\r\n                  <textarea\r\n                    id=\"projectinput9\"\r\n                    rows=\"2\"\r\n                    class=\"form-control\"\r\n                    name=\"remarks\"\r\n                    placeholder=\"Please select Email Template or Type\"\r\n                    [(ngModel)]=\"newtemplate.remarks\"\r\n                    #remarks=\"ngModel\"\r\n                    style=\"height: 100px;\"\r\n                  ></textarea>\r\n                </div>\r\n              </div>\r\n\r\n              <div\r\n                class=\"form-actions center\"\r\n                style=\"float: left; margin-left: 20px;\"\r\n              >\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-raised btn-info mr-1\"\r\n                  (click)=\"submit()\"\r\n                >\r\n                  <i class=\"ft ft-user-check\"></i> Edit New SMS Template\r\n                </button>\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-raised btn-danger\"\r\n                  routerLink=\"/sms/template\"\r\n                >\r\n                  <i class=\"ft ft-x\"></i> Go Back\r\n                </button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- // Basic form layout section end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sms/template/template.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sms/template/template.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"extended\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">All Sms Template</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">All Sms Template List</h4>\r\n        </div>\r\n        <!-- <fieldset disabled>\r\n            <a href=\"javascript:void(0)\" class=\"btn btn-raised mr-1 btn-primary\">Add New</a>\r\n        </fieldset> -->\r\n        <div\r\n          class=\"form-actions\"\r\n          style=\"margin-left: 30px; padding-top: 20px; margin-bottom: -30px;\"\r\n        >\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-raised btn-info mr-1\"\r\n            routerLink=\"add\"\r\n            routerLinkActive=\"active\"\r\n          >\r\n            Add New\r\n            <i class=\"fonticon-wrap\" class=\"icon-user-follow\"></i>\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <table class=\"table table-responsive-md text-center\">\r\n              <thead>\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>Sms Template Name</th>\r\n                  <th>Message</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <!-- <td colspan=\"3\"></td>\r\n                <td\r\n                  colspan=\"4\"\r\n                  style=\"text-align: left;\"\r\n                  *ngIf=\"!templateList.length\"\r\n                >\r\n                  <h2>No data in database</h2>\r\n                </td> -->\r\n\r\n                <tr *ngFor=\"let template of templateList; let i = index\">\r\n                  <td>{{ i + 1 }}</td>\r\n\r\n                  <td>{{ template.tname }}</td>\r\n\r\n                  <td>{{ template.remarks }}</td>\r\n\r\n                  <td>\r\n                    <div class=\"floating-btn\">\r\n                      <a\r\n                        (click)=\"edit(template._id)\"\r\n                        class=\"btn btn-warning mr-1 btn-fab\"\r\n                        ><i class=\"icon-pencil\"></i\r\n                      ></a>\r\n                      <a\r\n                        (click)=\"delete(template._id)\"\r\n                        class=\"btn btn-danger mr-1 btn-fab\"\r\n                        ><i class=\"icon-trash\"></i\r\n                      ></a>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/sms/template/add-template/add-template.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/sms/template/add-template/add-template.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Ntcy90ZW1wbGF0ZS9hZGQtdGVtcGxhdGUvYWRkLXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/sms/template/add-template/add-template.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sms/template/add-template/add-template.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTemplateComponent", function() { return AddTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_template_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/template.service */ "./src/app/sms/template/services/template.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var AddTemplateComponent = /** @class */ (function () {
    function AddTemplateComponent(templateservice, router, activeRouter) {
        this.templateservice = templateservice;
        this.router = router;
        this.activeRouter = activeRouter;
        this.newtemplate = {};
    }
    AddTemplateComponent.prototype.ngOnInit = function () { };
    AddTemplateComponent.prototype.submit = function () {
        var _this = this;
        console.log("Submitted>>>>>>>>>", this.newtemplate);
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a
            .fire({
            title: "Do you want to add the Template ?",
            text: "New user will be added in Template List",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Add"
        })
            .then(function (result) {
            if (result.value) {
                //dev
                _this.templateservice.addTemplate(_this.newtemplate).subscribe(function (data) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Add!", "Template has been added.", "success");
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
    AddTemplateComponent.ctorParameters = function () { return [
        { type: _services_template_service__WEBPACK_IMPORTED_MODULE_2__["TemplateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    AddTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-add-template",
            template: __webpack_require__(/*! raw-loader!./add-template.component.html */ "./node_modules/raw-loader/index.js!./src/app/sms/template/add-template/add-template.component.html"),
            styles: [__webpack_require__(/*! ./add-template.component.scss */ "./src/app/sms/template/add-template/add-template.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_template_service__WEBPACK_IMPORTED_MODULE_2__["TemplateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AddTemplateComponent);
    return AddTemplateComponent;
}());



/***/ }),

/***/ "./src/app/sms/template/edit-template/edit-template.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/sms/template/edit-template/edit-template.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Ntcy90ZW1wbGF0ZS9lZGl0LXRlbXBsYXRlL2VkaXQtdGVtcGxhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/sms/template/edit-template/edit-template.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/sms/template/edit-template/edit-template.component.ts ***!
  \***********************************************************************/
/*! exports provided: EdittemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdittemplateComponent", function() { return EdittemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_template_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/template.service */ "./src/app/sms/template/services/template.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var EdittemplateComponent = /** @class */ (function () {
    function EdittemplateComponent(templateservice, router, activeRouter) {
        this.templateservice = templateservice;
        this.router = router;
        this.activeRouter = activeRouter;
        this.updatedtemplate = {};
        this.templateid = this.activeRouter.snapshot.params["id"];
    }
    EdittemplateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.templateservice.gettemplateById(this.templateid).subscribe(function (data) {
            console.log("templatelist>>", data);
            _this.updatedtemplate = data.data;
        }, function (error) {
            console.log("cant fetch");
        });
    };
    EdittemplateComponent.prototype.update = function () {
        var _this = this;
        console.log("Submitted>>>>>>>>>", this.updatedtemplate);
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a
            .fire({
            title: "Do you want to edit the template details ?",
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
                _this.templateservice.edittemplate(_this.updatedtemplate).subscribe(function (data) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Edit!", "Template User has been edited.", "success");
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
    EdittemplateComponent.ctorParameters = function () { return [
        { type: _services_template_service__WEBPACK_IMPORTED_MODULE_2__["TemplateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    EdittemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-edit-template",
            template: __webpack_require__(/*! raw-loader!./edit-template.component.html */ "./node_modules/raw-loader/index.js!./src/app/sms/template/edit-template/edit-template.component.html"),
            styles: [__webpack_require__(/*! ./edit-template.component.scss */ "./src/app/sms/template/edit-template/edit-template.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_template_service__WEBPACK_IMPORTED_MODULE_2__["TemplateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EdittemplateComponent);
    return EdittemplateComponent;
}());



/***/ }),

/***/ "./src/app/sms/template/services/template.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/sms/template/services/template.service.ts ***!
  \***********************************************************/
/*! exports provided: TemplateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateService", function() { return TemplateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/base.service */ "./src/app/shared/services/base.service.ts");




var TemplateService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TemplateService, _super);
    function TemplateService(http) {
        var _this = _super.call(this, "template") || this;
        _this.http = http;
        return _this;
    }
    TemplateService.prototype.addTemplate = function (data) {
        console.log("url>>", this.url);
        console.log("data>>", data);
        return this.http.post(this.url, { data: data }, this.getOptions());
    };
    TemplateService.prototype.getTemplate = function () {
        return this.http.get(this.url, this.getOptions());
    };
    TemplateService.prototype.deleteTemplate = function (id) {
        return this.http.delete(this.url + id);
    };
    TemplateService.prototype.gettemplateById = function (id) {
        return this.http.get(this.url + id, this.getOptions());
    };
    TemplateService.prototype.edittemplate = function (data) {
        return this.http.put(this.url + data._id, { data: data }, this.getOptions());
    };
    TemplateService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TemplateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TemplateService);
    return TemplateService;
}(app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sms/template/template-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/sms/template/template-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: TemplateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateRoutingModule", function() { return TemplateRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template.component */ "./src/app/sms/template/template.component.ts");
/* harmony import */ var _add_template_add_template_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-template/add-template.component */ "./src/app/sms/template/add-template/add-template.component.ts");
/* harmony import */ var _edit_template_edit_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-template/edit-template.component */ "./src/app/sms/template/edit-template/edit-template.component.ts");






var routes = [
    {
        path: "",
        component: _template_component__WEBPACK_IMPORTED_MODULE_3__["TemplateComponent"],
        data: {
            title: "Template"
        }
    },
    {
        path: "add",
        component: _add_template_add_template_component__WEBPACK_IMPORTED_MODULE_4__["AddTemplateComponent"],
        data: {
            title: "Add Template"
        }
    },
    {
        path: "edit/:id",
        component: _edit_template_edit_template_component__WEBPACK_IMPORTED_MODULE_5__["EdittemplateComponent"],
        data: {
            title: "Edit Template"
        }
    }
];
var TemplateRoutingModule = /** @class */ (function () {
    function TemplateRoutingModule() {
    }
    TemplateRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TemplateRoutingModule);
    return TemplateRoutingModule;
}());



/***/ }),

/***/ "./src/app/sms/template/template.component.scss":
/*!******************************************************!*\
  !*** ./src/app/sms/template/template.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Ntcy90ZW1wbGF0ZS90ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/sms/template/template.component.ts":
/*!****************************************************!*\
  !*** ./src/app/sms/template/template.component.ts ***!
  \****************************************************/
/*! exports provided: TemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateComponent", function() { return TemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_template_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/template.service */ "./src/app/sms/template/services/template.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var TemplateComponent = /** @class */ (function () {
    function TemplateComponent(templateservice, router) {
        this.templateservice = templateservice;
        this.router = router;
        this.templateList = [];
    }
    TemplateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.templateservice.getTemplate().subscribe(function (data) {
            console.log("templatelist>>", data);
            _this.templateList = data.data;
        }, function (error) {
            console.log("cant fetch");
        });
    };
    TemplateComponent.prototype.edit = function (id) {
        console.log("template id>>", id);
        this.router.navigate(["/sms/template/edit/" + id]);
    };
    TemplateComponent.prototype.delete = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a
            .fire({
            title: "Do you want to delete the user ?",
            text: "You won't be able to revert the deleted user",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        })
            .then(function (result) {
            if (result.value) {
                //dev
                _this.templateservice.deleteTemplate(id).subscribe(function (data) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Deleted!", "User has been deleted.", "success");
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
    TemplateComponent.ctorParameters = function () { return [
        { type: _services_template_service__WEBPACK_IMPORTED_MODULE_3__["TemplateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    TemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-template",
            template: __webpack_require__(/*! raw-loader!./template.component.html */ "./node_modules/raw-loader/index.js!./src/app/sms/template/template.component.html"),
            styles: [__webpack_require__(/*! ./template.component.scss */ "./src/app/sms/template/template.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_template_service__WEBPACK_IMPORTED_MODULE_3__["TemplateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TemplateComponent);
    return TemplateComponent;
}());



/***/ }),

/***/ "./src/app/sms/template/template.module.ts":
/*!*************************************************!*\
  !*** ./src/app/sms/template/template.module.ts ***!
  \*************************************************/
/*! exports provided: TemplateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateModule", function() { return TemplateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _add_template_add_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-template/add-template.component */ "./src/app/sms/template/add-template/add-template.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _template_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./template.component */ "./src/app/sms/template/template.component.ts");
/* harmony import */ var _services_template_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/template.service */ "./src/app/sms/template/services/template.service.ts");
/* harmony import */ var _template_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./template-routing.module */ "./src/app/sms/template/template-routing.module.ts");
/* harmony import */ var _edit_template_edit_template_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-template/edit-template.component */ "./src/app/sms/template/edit-template/edit-template.component.ts");











var TemplateModule = /** @class */ (function () {
    function TemplateModule() {
    }
    TemplateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _template_routing_module__WEBPACK_IMPORTED_MODULE_9__["TemplateRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
            ],
            declarations: [
                _template_component__WEBPACK_IMPORTED_MODULE_7__["TemplateComponent"],
                _add_template_add_template_component__WEBPACK_IMPORTED_MODULE_5__["AddTemplateComponent"],
                _edit_template_edit_template_component__WEBPACK_IMPORTED_MODULE_10__["EdittemplateComponent"]
            ],
            providers: [_services_template_service__WEBPACK_IMPORTED_MODULE_8__["TemplateService"]]
        })
    ], TemplateModule);
    return TemplateModule;
}());



/***/ })

}]);
//# sourceMappingURL=template-template-module-es5.js.map