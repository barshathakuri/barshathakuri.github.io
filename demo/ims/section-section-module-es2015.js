(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["section-section-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/courses/section/add-section/add-section.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/courses/section/add-section/add-section.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"horizontal-form-layouts\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Add New Section</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content\">\r\n          <div class=\"px-3\">\r\n            <form\r\n              class=\"form form-horizontal\"\r\n              #newsectionForm=\"ngForm\"\r\n              novalidate\r\n            >\r\n              <div class=\"form-body\">\r\n                <h4 class=\"form-section\">\r\n                  <i class=\"ft-section\"></i> New Section Details\r\n                </h4>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label\r\n                    class=\"col-md-3 label-control\"\r\n                    for=\"projectinput1\"\r\n                    required\r\n                    >Section Name\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"text\"\r\n                      id=\"projectinput1\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Please select Section name\"\r\n                      name=\"sectionname\"\r\n                      [(ngModel)]=\"newsection.sectionname\"\r\n                      #sectionname=\"ngModel\"\r\n                      required\r\n                    />\r\n                    <div\r\n                      class=\"danger\"\r\n                      *ngIf=\"\r\n                        sectionname.invalid &&\r\n                        (sectionname.dirty || sectionname.touched)\r\n                      \"\r\n                    >\r\n                      required field*\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label\r\n                    class=\"col-md-3 label-control\"\r\n                    for=\"projectinput1\"\r\n                    required\r\n                    >No. of Student\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"number\"\r\n                      id=\"projectinput1\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Please enter number of student\"\r\n                      name=\"studentNumber\"\r\n                      [(ngModel)]=\"newsection.studentNumber\"\r\n                      #studentNumber=\"ngModel\"\r\n                      required\r\n                    />\r\n                    <div\r\n                      class=\"danger\"\r\n                      *ngIf=\"fees.invalid && (fees.dirty || fees.touched)\"\r\n                    >\r\n                      required field*\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-actions center\">\r\n                <button\r\n                  [disabled]=\"newsectionForm.invalid\"\r\n                  type=\"button\"\r\n                  class=\"btn btn-raised btn-info mr-1\"\r\n                  (click)=\"submit()\"\r\n                >\r\n                  <i class=\"ft ft-section-check\"></i> Add New Section\r\n                </button>\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-raised btn-success\"\r\n                  routerLink=\"/section\"\r\n                >\r\n                  <i class=\"ft ft-x\"></i> Go Back\r\n                </button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- // Basic form layout section end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/courses/section/edit-section/edit-section.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/courses/section/edit-section/edit-section.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"horizontal-form-layouts\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Edit Section</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content\">\r\n          <div class=\"px-3\">\r\n            <form\r\n              class=\"form form-horizontal\"\r\n              #newsectionForm=\"ngForm\"\r\n              novalidate\r\n            >\r\n              <div class=\"form-body\">\r\n                <h4 class=\"form-section\">\r\n                  <i class=\"ft-section\"></i> Edit Section Details\r\n                </h4>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label\r\n                    class=\"col-md-3 label-control\"\r\n                    for=\"projectinput1\"\r\n                    required\r\n                    >Section Name\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"text\"\r\n                      id=\"projectinput1\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Please select Section name\"\r\n                      name=\"sectionname\"\r\n                      [(ngModel)]=\"newsection.sectionname\"\r\n                      #sectionname=\"ngModel\"\r\n                      required\r\n                    />\r\n                    <div\r\n                      class=\"danger\"\r\n                      *ngIf=\"\r\n                        sectionname.invalid &&\r\n                        (sectionname.dirty || sectionname.touched)\r\n                      \"\r\n                    >\r\n                      required field*\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label\r\n                    class=\"col-md-3 label-control\"\r\n                    for=\"projectinput1\"\r\n                    required\r\n                    >No. of Student\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"number\"\r\n                      id=\"projectinput1\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Please enter number of student\"\r\n                      name=\"fees\"\r\n                      [(ngModel)]=\"newsection.fees\"\r\n                      #fees=\"ngModel\"\r\n                      required\r\n                    />\r\n                    <div\r\n                      class=\"danger\"\r\n                      *ngIf=\"fees.invalid && (fees.dirty || fees.touched)\"\r\n                    >\r\n                      required field*\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-actions center\">\r\n                <button\r\n                  [disabled]=\"newsectionForm.invalid\"\r\n                  type=\"button\"\r\n                  class=\"btn btn-raised btn-info mr-1\"\r\n                  (click)=\"submit()\"\r\n                >\r\n                  <i class=\"ft ft-section-check\"></i> Update Section\r\n                </button>\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-raised btn-success\"\r\n                  routerLink=\"/section\"\r\n                >\r\n                  <i class=\"ft ft-x\"></i> Go Back\r\n                </button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- // Basic form layout section end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/courses/section/section.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/courses/section/section.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"extended\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">All Sections List</h4>\r\n        </div>\r\n        <!-- <fieldset disabled>\r\n              <a href=\"javascript:void(0)\" class=\"btn btn-raised mr-1 btn-primary\">Add New</a>\r\n          </fieldset> -->\r\n        <div\r\n          class=\"form-actions\"\r\n          style=\"margin-left: 30px; padding-top: 20px; margin-bottom: -30px;\"\r\n        >\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-raised btn-info mr-1\"\r\n            routerLink=\"add\"\r\n            routerLinkActive=\"active\"\r\n          >\r\n            Add New\r\n            <i class=\"fonticon-wrap\" class=\"icon-section-follow\"></i>\r\n          </button>\r\n\r\n          <button type=\"button\" class=\"btn btn-raised btn-warning\">\r\n            Trashed Section\r\n            <i class=\"fonticon-wrap\" class=\"icon-eye\"></i>\r\n          </button>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-raised btn-info\"\r\n            style=\"float: right; margin-right: 30px;\"\r\n          >\r\n            Print\r\n            <i class=\"fonticon-wrap\" class=\"fa fa-print\"></i>\r\n          </button>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-raised btn-success\"\r\n            style=\"float: right; margin-right: 10px;\"\r\n          >\r\n            Save as PDF\r\n            <i class=\"fonticon-wrap\" class=\" fa fa-file-o\"></i>\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <table class=\"table table-responsive-md text-center\">\r\n              <thead>\r\n                <tr>\r\n                  <th>#</th>\r\n\r\n                  <th>Section Name</th>\r\n                  <th>Number of Student</th>\r\n\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <td\r\n                  colspan=\"4\"\r\n                  style=\"text-align: center;\"\r\n                  *ngIf=\"!sectionList.length\"\r\n                >\r\n                  <h2>No data in database</h2>\r\n                </td>\r\n\r\n                <tr *ngFor=\"let section of sectionList; let i = index\">\r\n                  <td>{{ i + 1 }}</td>\r\n\r\n                  <!-- <td>\r\n                      <div class=\"custom-control custom-checkbox m-0\">\r\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"item1\">\r\n                        <label class=\"custom-control-label col-form-label\" for=\"item1\"></label>\r\n                      </div>\r\n                    </td> -->\r\n\r\n                  <td>{{ section.sectionname }}</td>\r\n                  <td>{{ section.studentNumber }}</td>\r\n\r\n                  <td>\r\n                    <div class=\"floating-btn\">\r\n                      <a\r\n                        (click)=\"edit(section._id)\"\r\n                        class=\"btn btn-warning mr-1 btn-fab\"\r\n                        ><i class=\"icon-pencil\"></i\r\n                      ></a>\r\n                      <a\r\n                        (click)=\"delete(section._id)\"\r\n                        class=\"btn btn-danger mr-1 btn-fab\"\r\n                        ><i class=\"icon-trash\"></i\r\n                      ></a>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/courses/section/add-section/add-section.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/courses/section/add-section/add-section.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZXMvc2VjdGlvbi9hZGQtc2VjdGlvbi9hZGQtc2VjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/courses/section/add-section/add-section.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/courses/section/add-section/add-section.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSectionComponent", function() { return AddSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_section_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/section.service */ "./src/app/courses/section/services/section.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let AddSectionComponent = class AddSectionComponent {
    constructor(sectionervice, router, activeRouter) {
        this.sectionervice = sectionervice;
        this.router = router;
        this.activeRouter = activeRouter;
        this.newsection = {};
    }
    ngOnInit() { }
    submit() {
        console.log("Submitted>>>>>>>>>", this.newsection);
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a
            .fire({
            title: "Do you want to add the section ?",
            text: "New section will be added in Section List",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Add"
        })
            .then(result => {
            if (result.value) {
                //dev
                this.sectionervice.addSection(this.newsection).subscribe((data) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Add!", "Section has been added.", "success");
                    //dev
                    console.log("Dataaa changeddd", data);
                }, error => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Not Added!", "There was some error.", "error");
                    //dev
                    console.log("ERRORR", error);
                });
            }
        });
    }
};
AddSectionComponent.ctorParameters = () => [
    { type: _services_section_service__WEBPACK_IMPORTED_MODULE_2__["SectionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
AddSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-add-section",
        template: __webpack_require__(/*! raw-loader!./add-section.component.html */ "./node_modules/raw-loader/index.js!./src/app/courses/section/add-section/add-section.component.html"),
        styles: [__webpack_require__(/*! ./add-section.component.scss */ "./src/app/courses/section/add-section/add-section.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_section_service__WEBPACK_IMPORTED_MODULE_2__["SectionService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], AddSectionComponent);



/***/ }),

/***/ "./src/app/courses/section/edit-section/edit-section.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/courses/section/edit-section/edit-section.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZXMvc2VjdGlvbi9lZGl0LXNlY3Rpb24vZWRpdC1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/courses/section/edit-section/edit-section.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/courses/section/edit-section/edit-section.component.ts ***!
  \************************************************************************/
/*! exports provided: EditSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSectionComponent", function() { return EditSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_section_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/section.service */ "./src/app/courses/section/services/section.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let EditSectionComponent = class EditSectionComponent {
    constructor(sectionervice, router, activeRouter) {
        this.sectionervice = sectionervice;
        this.router = router;
        this.activeRouter = activeRouter;
        this.updatedSection = {};
        this.sectionid = this.activeRouter.snapshot.params["id"];
    }
    ngOnInit() {
        this.sectionervice.getsectionById(this.sectionid).subscribe((data) => {
            console.log("sectionlist>>", data);
            this.updatedSection = data.data;
        }, error => {
            console.log("cant fetch");
        });
    }
    update() {
        console.log("Submitted>>>>>>>>>", this.updatedSection);
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a
            .fire({
            title: "Do you want to edit the section details ?",
            text: "You won't be able to revert the change",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm"
        })
            .then(result => {
            if (result.value) {
                //dev
                this.sectionervice.editsection(this.updatedSection).subscribe((data) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Edit!", "Section has been edited.", "success");
                    //dev
                    console.log("Dataaa changeddd", data);
                    this.ngOnInit();
                }, error => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Not Changed!", "There was some error.", "error");
                    //dev
                    console.log("ERRORR", error);
                });
            }
        });
    }
};
EditSectionComponent.ctorParameters = () => [
    { type: _services_section_service__WEBPACK_IMPORTED_MODULE_2__["SectionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
EditSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-edit-section",
        template: __webpack_require__(/*! raw-loader!./edit-section.component.html */ "./node_modules/raw-loader/index.js!./src/app/courses/section/edit-section/edit-section.component.html"),
        styles: [__webpack_require__(/*! ./edit-section.component.scss */ "./src/app/courses/section/edit-section/edit-section.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_section_service__WEBPACK_IMPORTED_MODULE_2__["SectionService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], EditSectionComponent);



/***/ }),

/***/ "./src/app/courses/section/section-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/courses/section/section-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SectionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionRoutingModule", function() { return SectionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section.component */ "./src/app/courses/section/section.component.ts");
/* harmony import */ var _add_section_add_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-section/add-section.component */ "./src/app/courses/section/add-section/add-section.component.ts");
/* harmony import */ var _edit_section_edit_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-section/edit-section.component */ "./src/app/courses/section/edit-section/edit-section.component.ts");






const routes = [
    {
        path: "",
        component: _section_component__WEBPACK_IMPORTED_MODULE_3__["SectionComponent"],
        data: {
            title: "Section"
        }
    },
    {
        path: "add",
        component: _add_section_add_section_component__WEBPACK_IMPORTED_MODULE_4__["AddSectionComponent"],
        data: {
            title: "Add Section"
        }
    },
    {
        path: "edit/:id",
        component: _edit_section_edit_section_component__WEBPACK_IMPORTED_MODULE_5__["EditSectionComponent"],
        data: {
            title: "Edit Section"
        }
    }
];
let SectionRoutingModule = class SectionRoutingModule {
};
SectionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SectionRoutingModule);



/***/ }),

/***/ "./src/app/courses/section/section.component.scss":
/*!********************************************************!*\
  !*** ./src/app/courses/section/section.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-left {\n  width: 100%;\n  overflow-x: scroll; }\n\ntable,\nth,\ntd {\n  border: 1px solid #ddd;\n  text-align: left; }\n\ntd {\n  vertical-align: bottom; }\n\n.card {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlcy9zZWN0aW9uL0Q6XFx3b3JrXFxJTVMvc3JjXFxhcHBcXGNvdXJzZXNcXHNlY3Rpb25cXHNlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBRXBCOzs7RUFHRSxzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY291cnNlcy9zZWN0aW9uL3NlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1sZWZ0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbn1cclxudGFibGUsXHJcbnRoLFxyXG50ZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbnRkIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/courses/section/section.component.ts":
/*!******************************************************!*\
  !*** ./src/app/courses/section/section.component.ts ***!
  \******************************************************/
/*! exports provided: SectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function() { return SectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_section_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/section.service */ "./src/app/courses/section/services/section.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let SectionComponent = class SectionComponent {
    constructor(sectionservice, router) {
        this.sectionservice = sectionservice;
        this.router = router;
        this.sectionList = [];
    }
    ngOnInit() {
        this.sectionservice.getSection().subscribe((data) => {
            console.log("sectionlist>>", data);
            this.sectionList = data.data;
        }, error => {
            console.log("cant fetch");
        });
    }
    edit(id) {
        console.log("section id>>", id);
        this.router.navigate(["section/edit/" + id]);
    }
    delete(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a
            .fire({
            title: "Do you want to delete the section ?",
            text: "You won't be able to revert the deleted section",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        })
            .then(result => {
            if (result.value) {
                //dev
                this.sectionservice.deleteSection(id).subscribe((data) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Deleted!", "Section has been deleted.", "success");
                    //dev
                    console.log("Dataaa changeddd", data);
                    this.ngOnInit();
                }, error => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Not Changed!", "There was some error.", "error");
                    //dev
                    console.log("ERRORR", error);
                });
            }
        });
    }
};
SectionComponent.ctorParameters = () => [
    { type: _services_section_service__WEBPACK_IMPORTED_MODULE_3__["SectionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-section",
        template: __webpack_require__(/*! raw-loader!./section.component.html */ "./node_modules/raw-loader/index.js!./src/app/courses/section/section.component.html"),
        styles: [__webpack_require__(/*! ./section.component.scss */ "./src/app/courses/section/section.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_section_service__WEBPACK_IMPORTED_MODULE_3__["SectionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SectionComponent);



/***/ }),

/***/ "./src/app/courses/section/section.module.ts":
/*!***************************************************!*\
  !*** ./src/app/courses/section/section.module.ts ***!
  \***************************************************/
/*! exports provided: SectionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionModule", function() { return SectionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _section_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./section-routing.module */ "./src/app/courses/section/section-routing.module.ts");
/* harmony import */ var _section_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./section.component */ "./src/app/courses/section/section.component.ts");
/* harmony import */ var _add_section_add_section_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-section/add-section.component */ "./src/app/courses/section/add-section/add-section.component.ts");
/* harmony import */ var _edit_section_edit_section_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-section/edit-section.component */ "./src/app/courses/section/edit-section/edit-section.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_section_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/section.service */ "./src/app/courses/section/services/section.service.ts");











let SectionModule = class SectionModule {
};
SectionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _section_routing_module__WEBPACK_IMPORTED_MODULE_5__["SectionRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]
        ],
        declarations: [_section_component__WEBPACK_IMPORTED_MODULE_6__["SectionComponent"], _add_section_add_section_component__WEBPACK_IMPORTED_MODULE_7__["AddSectionComponent"], _edit_section_edit_section_component__WEBPACK_IMPORTED_MODULE_8__["EditSectionComponent"]],
        providers: [_services_section_service__WEBPACK_IMPORTED_MODULE_10__["SectionService"]]
    })
], SectionModule);



/***/ }),

/***/ "./src/app/courses/section/services/section.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/courses/section/services/section.service.ts ***!
  \*************************************************************/
/*! exports provided: SectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionService", function() { return SectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/base.service */ "./src/app/shared/services/base.service.ts");




let SectionService = class SectionService extends app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(http) {
        super("section");
        this.http = http;
    }
    addSection(data) {
        console.log("url>>", this.url);
        console.log("data>>", data);
        return this.http.post(this.url, { data: data }, this.getOptions());
    }
    getSection() {
        return this.http.get(this.url, this.getOptions());
    }
    deleteSection(id) {
        return this.http.delete(this.url + id);
    }
    getsectionById(id) {
        return this.http.get(this.url + id, this.getOptions());
    }
    editsection(data) {
        return this.http.put(this.url + data._id, { data: data }, this.getOptions());
    }
};
SectionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], SectionService);



/***/ })

}]);
//# sourceMappingURL=section-section-module-es2015.js.map