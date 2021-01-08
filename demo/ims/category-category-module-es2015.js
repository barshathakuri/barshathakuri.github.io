(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-category-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/account/manage/category/add-category/add-category.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/account/manage/category/add-category/add-category.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"horizontal-form-layouts\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Add New Expense Category</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content\">\r\n          <div class=\"px-3\">\r\n            <form\r\n              class=\"form form-horizontal\"\r\n              #newcategoryForm=\"ngForm\"\r\n              novalidate\r\n            >\r\n              <div class=\"form-body\">\r\n                <h4 class=\"form-section\">\r\n                  <i class=\"ft-category\"></i>New Expense Category Details\r\n                </h4>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label\r\n                    class=\"col-md-3 label-control\"\r\n                    for=\"projectinput1\"\r\n                    required\r\n                    >Expense Category Name\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"text\"\r\n                      id=\"projectinput1\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"name\"\r\n                      name=\"categoryname\"\r\n                      [(ngModel)]=\"newcategory.categoryname\"\r\n                      #categoryname=\"ngModel\"\r\n                      required\r\n                    />\r\n                    <div\r\n                      class=\"danger\"\r\n                      *ngIf=\"\r\n                        categoryname.invalid &&\r\n                        (categoryname.dirty || categoryname.touched)\r\n                      \"\r\n                    >\r\n                      required field*\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-actions center\">\r\n                <button\r\n                  [disabled]=\"newcategoryForm.invalid\"\r\n                  type=\"button\"\r\n                  class=\"btn btn-raised btn-info mr-1\"\r\n                  (click)=\"submit()\"\r\n                >\r\n                  <i class=\"ft ft-category-check\"></i> Add New Expense Category\r\n                </button>\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-raised btn-danger\"\r\n                  routerLink=\"/account/category\"\r\n                >\r\n                  <i class=\"ft ft-x\"></i> Go Back\r\n                </button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- // Basic form layout section end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/account/manage/category/category.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/account/manage/category/category.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"extended\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">All Categories List</div>\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">All Expenses Categories List</h4>\r\n        </div>\r\n        <!-- <fieldset disabled>\r\n              <a href=\"javascript:void(0)\" class=\"btn btn-raised mr-1 btn-primary\">Add New</a>\r\n          </fieldset> -->\r\n        <div\r\n          class=\"form-actions\"\r\n          style=\"margin-left: 30px; padding-top: 20px; margin-bottom: -30px;\"\r\n        >\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-raised btn-info mr-1\"\r\n            routerLink=\"add\"\r\n            routerLinkActive=\"active\"\r\n          >\r\n            Add New\r\n            <i class=\"fonticon-wrap\" class=\"icon-category-follow\"></i>\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <table class=\"table table-responsive-md text-center\">\r\n              <thead>\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>Expense Category Name</th>\r\n\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <td colspan=\"1\"></td>\r\n                <td\r\n                  colspan=\"2\"\r\n                  style=\"text-align: left;\"\r\n                  *ngIf=\"!categoryList.length\"\r\n                >\r\n                  <h2>No data in database</h2>\r\n                </td>\r\n\r\n                <tr *ngFor=\"let category of categoryList; let i = index\">\r\n                  <!-- <td><img class=\"media-object round-media\" src=\"{{category.photo}}\" alt=\"Generic placeholder image\"\r\n                        style=\"height: 45px;\" /></td> -->\r\n                  <td>{{ i + 1 }}</td>\r\n                  <!-- <td>\r\n                      <div class=\"custom-control custom-checkbox m-0\">\r\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"item1\">\r\n                        <label class=\"custom-control-label col-form-label\" for=\"item1\"></label>\r\n                      </div>\r\n                    </td> -->\r\n                  <td>{{ category.categoryname }}</td>\r\n\r\n                  <td>\r\n                    <div class=\"floating-btn\">\r\n                      <a\r\n                        (click)=\"edit(category._id)\"\r\n                        class=\"btn btn-warning mr-1 btn-fab\"\r\n                        ><i class=\"icon-pencil\"></i\r\n                      ></a>\r\n                      <a\r\n                        (click)=\"delete(category._id)\"\r\n                        class=\"btn btn-danger mr-1 btn-fab\"\r\n                        ><i class=\"icon-trash\"></i\r\n                      ></a>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/account/manage/category/edit-category/edit-category.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/account/manage/category/edit-category/edit-category.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"horizontal-form-layouts\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Edit Expense Category</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content\">\r\n          <div class=\"px-3\">\r\n            <form class=\"form form-horizontal\" #updatedcategoryForm=\"ngForm\" novalidate>\r\n              <div class=\"form-body\">\r\n                <h4 class=\"form-section\">\r\n                  <i class=\"ft-category\"></i>Edit Expense Category Details\r\n                </h4>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" for=\"projectinput1\" required>Expense Category Name\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"name\" name=\"categoryname\"\r\n                      [(ngModel)]=\"updatedcategory.categoryname\" #categoryname=\"ngModel\" required />\r\n                    <div class=\"danger\" *ngIf=\"\r\n                        categoryname.invalid &&\r\n                        (categoryname.dirty || categoryname.touched)\r\n                      \">\r\n                      required field*\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-actions center\">\r\n                <button [disabled]=\"newcategoryForm.invalid\" type=\"button\" class=\"btn btn-raised btn-info mr-1\"\r\n                  (click)=\"update()\">\r\n                  <i class=\"ft ft-category-check\"></i> Edit Expense Category\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-raised btn-danger\" routerLink=\"/account/category\">\r\n                  <i class=\"ft ft-x\"></i> Go Back\r\n                </button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- // Basic form layout section end -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/student/category/add-category/add-category.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/student/category/add-category/add-category.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"horizontal-form-layouts\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Add New Student Category</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content\">\r\n          <div class=\"px-3\">\r\n            <form\r\n              class=\"form form-horizontal\"\r\n              #newcategoryForm=\"ngForm\"\r\n              novalidate\r\n            >\r\n              <div class=\"form-body\">\r\n                <h4 class=\"form-section\">\r\n                  <i class=\"ft-category\"></i> New Student Category Details\r\n                </h4>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" required\r\n                    >Student Category Name\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Category Name\"\r\n                      name=\"Enter Name\"\r\n                      [(ngModel)]=\"newcategory.categoryName\"\r\n                      #categoryName=\"ngModel\"\r\n                      required\r\n                    />\r\n\r\n                    <div\r\n                      *ngIf=\"categoryName.invalid && categoryName.dirty\"\r\n                      class=\"danger\"\r\n                    >\r\n                      Required Field**\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <fieldset>\r\n                  <div class=\"input-group\" style=\"margin-left:26%;\">\r\n                    <!-- <span class=\"input-group-text\" id=\"checkbox-addon1\"> -->\r\n                    <input\r\n                      type=\"checkbox\"\r\n                      aria-label=\"Checkbox for following text input\"\r\n                      style=\"margin-top: 5px;\"\r\n                      name=\"status\"\r\n                      [(ngModel)]=\"newcategory.status\"\r\n                      #categoryName=\"ngModel\"\r\n                      required\r\n                    />\r\n                    Active\r\n                    <!-- </span> -->\r\n                  </div>\r\n                </fieldset>\r\n\r\n                <div class=\"form-actions center\">\r\n                  <button\r\n                    [disabled]=\"newcategoryForm.invalid\"\r\n                    type=\"button\"\r\n                    class=\"btn btn-raised btn-info mr-1\"\r\n                    (click)=\"submit()\"\r\n                  >\r\n                    <i class=\"ft ft-user-check\"></i> Add New Student Category\r\n                  </button>\r\n\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn btn-raised btn-danger\"\r\n                    routerLink=\"/student/category\"\r\n                  >\r\n                    <i class=\"ft ft-x\"></i> Go Back\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- // Basic form layout section end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/student/category/category.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/student/category/category.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"extended\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">All Student Category List</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">All Student Category List</h4>\r\n        </div>\r\n        <!-- <fieldset disabled>\r\n              <a href=\"javascript:void(0)\" class=\"btn btn-raised mr-1 btn-primary\">Add New</a>\r\n          </fieldset> -->\r\n        <div\r\n          class=\"form-actions\"\r\n          style=\"margin-left: 30px; padding-top: 20px; margin-bottom: -30px;\"\r\n        >\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-raised btn-info mr-1\"\r\n            routerLink=\"add\"\r\n            routerLinkActive=\"active\"\r\n          >\r\n            Add New\r\n            <i class=\"fonticon-wrap\" class=\"icon-category-follow\"></i>\r\n          </button>\r\n\r\n          <button type=\"button\" class=\"btn btn-raised btn-warning\">\r\n            Trashed Category\r\n            <i class=\"fonticon-wrap\" class=\"icon-eye\"></i>\r\n          </button>\r\n\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-raised btn-info\"\r\n            style=\"float: right; margin-right: 30px;\"\r\n          >\r\n            Print\r\n            <i class=\"fonticon-wrap\" class=\"fa fa-print\"></i>\r\n          </button>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-raised btn-success\"\r\n            style=\"float: right; margin-right: 10px;\"\r\n          >\r\n            Save as PDF\r\n            <i class=\"fonticon-wrap\" class=\" fa fa-file-o\"></i>\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <table class=\"table table-responsive-md text-center\">\r\n              <thead>\r\n                <tr>\r\n                  <th>S.No</th>\r\n                  <th>Name</th>\r\n                  <th>Status</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <td\r\n                  colspan=\"4\"\r\n                  style=\"text-align: center;\"\r\n                  *ngIf=\"!categoryList.length\"\r\n                >\r\n                  <h2>No data in database</h2>\r\n                </td>\r\n                <tr *ngFor=\"let category of categoryList; let i = index\">\r\n                  <td>{{ i + 1 }}</td>\r\n                  <td>{{ category.categoryName }}</td>\r\n                  <td>{{ category.status }}</td>\r\n\r\n                  <td>\r\n                    <div class=\"floating-btn\">\r\n                      <a\r\n                        routerLink=\"edit/{{ category.id }}\"\r\n                        class=\"btn btn-warning mr-1 btn-fab\"\r\n                        ><i class=\"icon-pencil\"></i\r\n                      ></a>\r\n                      <a\r\n                        (click)=\"delete(category.id)\"\r\n                        class=\"btn btn-danger mr-1 btn-fab\"\r\n                        ><i class=\"icon-trash\"></i\r\n                      ></a>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/student/category/edit-category/edit-category.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/student/category/edit-category/edit-category.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"horizontal-form-layouts\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Add New Student Category</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content\">\r\n          <div class=\"px-3\">\r\n            <form\r\n              class=\"form form-horizontal\"\r\n              #newcategoryForm=\"ngForm\"\r\n              novalidate\r\n            >\r\n              <div class=\"form-body\">\r\n                <h4 class=\"form-section\">\r\n                  <i class=\"ft-category\"></i> New Student Category Details\r\n                </h4>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" required\r\n                    >Student Category Name\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Category Name\"\r\n                      name=\"Enter Name\"\r\n                      [(ngModel)]=\"newcategory.categoryName\"\r\n                      #categoryName=\"ngModel\"\r\n                      required\r\n                    />\r\n\r\n                    <div\r\n                      *ngIf=\"categoryName.invalid && categoryName.dirty\"\r\n                      class=\"danger\"\r\n                    >\r\n                      Required Field**\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <fieldset>\r\n                  <div class=\"input-group\" style=\"margin-left:26%;\">\r\n                    <!-- <span class=\"input-group-text\" id=\"checkbox-addon1\"> -->\r\n                    <input\r\n                      type=\"checkbox\"\r\n                      aria-label=\"Checkbox for following text input\"\r\n                      style=\"margin-top: 5px;\"\r\n                    />\r\n                    Active\r\n                    <!-- </span> -->\r\n                  </div>\r\n                </fieldset>\r\n\r\n                <div class=\"form-actions center\">\r\n                  <button\r\n                    [disabled]=\"newcategoryForm.invalid\"\r\n                    type=\"button\"\r\n                    class=\"btn btn-raised btn-info mr-1\"\r\n                    (click)=\"update()\"\r\n                  >\r\n                    <i class=\"ft ft-user-check\"></i> Add New Student Category\r\n                  </button>\r\n\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn btn-raised btn-danger\"\r\n                    routerLink=\"/category\"\r\n                  >\r\n                    <i class=\"ft ft-x\"></i> Edit Student Category\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- // Basic form layout section end -->\r\n"

/***/ }),

/***/ "./src/app/account/manage/category/add-category/add-category.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/account/manage/category/add-category/add-category.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvbWFuYWdlL2NhdGVnb3J5L2FkZC1jYXRlZ29yeS9hZGQtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/account/manage/category/add-category/add-category.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/account/manage/category/add-category/add-category.component.ts ***!
  \********************************************************************************/
/*! exports provided: AddCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function() { return AddCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/category.service */ "./src/app/account/manage/category/services/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_shared_models_category_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/models/category.model */ "./src/app/shared/models/category.model.ts");






let AddCategoryComponent = class AddCategoryComponent {
    constructor(categoryservice, router, activeRouter) {
        this.categoryservice = categoryservice;
        this.router = router;
        this.activeRouter = activeRouter;
        this.newcategory = new app_shared_models_category_model__WEBPACK_IMPORTED_MODULE_5__["Category"]({});
    }
    ngOnInit() { }
    submit() {
        console.log("Submitted>>>>>>>>>", this.newcategory);
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a
            .fire({
            title: "Do you want to add the category ?",
            text: "New category will be added in Category List",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Add"
        })
            .then(result => {
            if (result.value) {
                //dev
                this.categoryservice.addCategory(this.newcategory).subscribe((data) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Add!", "Category has been added.", "success").then(() => {
                        this.router.navigate(['account/category']);
                    });
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
AddCategoryComponent.ctorParameters = () => [
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
AddCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-add-category",
        template: __webpack_require__(/*! raw-loader!./add-category.component.html */ "./node_modules/raw-loader/index.js!./src/app/account/manage/category/add-category/add-category.component.html"),
        styles: [__webpack_require__(/*! ./add-category.component.scss */ "./src/app/account/manage/category/add-category/add-category.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], AddCategoryComponent);



/***/ }),

/***/ "./src/app/account/manage/category/category-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/account/manage/category/category-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: CategoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryRoutingModule", function() { return CategoryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category.component */ "./src/app/account/manage/category/category.component.ts");
/* harmony import */ var _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-category/add-category.component */ "./src/app/account/manage/category/add-category/add-category.component.ts");
/* harmony import */ var _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-category/edit-category.component */ "./src/app/account/manage/category/edit-category/edit-category.component.ts");






const routes = [
    {
        path: "",
        component: _category_component__WEBPACK_IMPORTED_MODULE_3__["CategoryComponent"],
        data: {
            title: "Category"
        }
    },
    {
        path: "add",
        component: _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_4__["AddCategoryComponent"],
        data: {
            title: "Add Category"
        }
    },
    {
        path: "edit/:id",
        component: _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_5__["EditCategoryComponent"],
        data: {
            title: "Edit Category"
        }
    }
];
let CategoryRoutingModule = class CategoryRoutingModule {
};
CategoryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CategoryRoutingModule);



/***/ }),

/***/ "./src/app/account/manage/category/category.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/account/manage/category/category.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvbWFuYWdlL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/account/manage/category/category.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/account/manage/category/category.component.ts ***!
  \***************************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/category.service */ "./src/app/account/manage/category/services/category.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let CategoryComponent = class CategoryComponent {
    constructor(categoryservice, router) {
        this.categoryservice = categoryservice;
        this.router = router;
        this.categoryList = [];
    }
    ngOnInit() {
        this.categoryservice.getCategory().subscribe((data) => {
            console.log("categorylist>>", data);
            this.categoryList = data.data;
        }, error => {
            console.log("cant fetch");
        });
    }
    edit(id) {
        console.log("category id>>", id);
        this.router.navigate(["account/manage/category/edit/" + id]);
    }
    delete(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a
            .fire({
            title: "Do you want to delete the category ?",
            text: "You won't be able to revert the deleted category",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        })
            .then(result => {
            if (result.value) {
                //dev
                this.categoryservice.deleteCategory(id).subscribe((data) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Deleted!", "Category has been deleted.", "success");
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
CategoryComponent.ctorParameters = () => [
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-category",
        template: __webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/index.js!./src/app/account/manage/category/category.component.html"),
        styles: [__webpack_require__(/*! ./category.component.scss */ "./src/app/account/manage/category/category.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], CategoryComponent);



/***/ }),

/***/ "./src/app/account/manage/category/category.module.ts":
/*!************************************************************!*\
  !*** ./src/app/account/manage/category/category.module.ts ***!
  \************************************************************/
/*! exports provided: CategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../category/add-category/add-category.component */ "./src/app/account/manage/category/add-category/add-category.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category.component */ "./src/app/account/manage/category/category.component.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/category.service */ "./src/app/account/manage/category/services/category.service.ts");
/* harmony import */ var _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-category/edit-category.component */ "./src/app/account/manage/category/edit-category/edit-category.component.ts");
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./category-routing.module */ "./src/app/account/manage/category/category-routing.module.ts");











let CategoryModule = class CategoryModule {
};
CategoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _category_routing_module__WEBPACK_IMPORTED_MODULE_10__["CategoryRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
        ],
        declarations: [
            _category_component__WEBPACK_IMPORTED_MODULE_7__["CategoryComponent"],
            _category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_5__["AddCategoryComponent"],
            _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_9__["EditCategoryComponent"]
        ],
        providers: [_services_category_service__WEBPACK_IMPORTED_MODULE_8__["CategoryService"]]
    })
], CategoryModule);



/***/ }),

/***/ "./src/app/account/manage/category/edit-category/edit-category.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/account/manage/category/edit-category/edit-category.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvbWFuYWdlL2NhdGVnb3J5L2VkaXQtY2F0ZWdvcnkvZWRpdC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/account/manage/category/edit-category/edit-category.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/account/manage/category/edit-category/edit-category.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EditCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryComponent", function() { return EditCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/category.service */ "./src/app/account/manage/category/services/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_shared_models_category_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/models/category.model */ "./src/app/shared/models/category.model.ts");






let EditCategoryComponent = class EditCategoryComponent {
    constructor(categoryservice, router, activeRouter) {
        this.categoryservice = categoryservice;
        this.router = router;
        this.activeRouter = activeRouter;
        this.updatedcategory = new app_shared_models_category_model__WEBPACK_IMPORTED_MODULE_5__["Category"]({});
        this.categoryid = this.activeRouter.snapshot.params["id"];
    }
    ngOnInit() {
        this.categoryservice.getCategoryById(this.categoryid).subscribe((data) => {
            console.log("categorylist>>", data);
            this.updatedcategory = data.data;
        }, error => {
            console.log("cant fetch");
        });
    }
    update() {
        console.log("Submitted>>>>>>>>>", this.updatedcategory);
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a
            .fire({
            title: "Do you want to edit the category details ?",
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
                this.categoryservice.editCategory(this.updatedcategory).subscribe((data) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Edit!", "Category User has been edited.", "success").then(() => {
                        this.router.navigate(['account/category']);
                    });
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
EditCategoryComponent.ctorParameters = () => [
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
EditCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-edit-category",
        template: __webpack_require__(/*! raw-loader!./edit-category.component.html */ "./node_modules/raw-loader/index.js!./src/app/account/manage/category/edit-category/edit-category.component.html"),
        styles: [__webpack_require__(/*! ./edit-category.component.scss */ "./src/app/account/manage/category/edit-category/edit-category.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], EditCategoryComponent);



/***/ }),

/***/ "./src/app/account/manage/category/services/category.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/account/manage/category/services/category.service.ts ***!
  \**********************************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../shared/services/base.service */ "./src/app/shared/services/base.service.ts");




let CategoryService = class CategoryService extends _shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(http) {
        super("category");
        this.http = http;
    }
    getCategory() {
        return this.http.get(this.url, this.getOptions());
    }
    getCategoryById(id) {
        return this.http.get(this.url + id, this.getOptions());
    }
    editCategory(data) {
        return this.http.put(this.url + data._id, { data: data }, this.getOptions());
    }
    deleteCategory(id) {
        return this.http.delete(this.url + id);
    }
    addCategory(data) {
        console.log("url>>", this.url);
        console.log("data>>", data);
        return this.http.post(this.url, { data: data }, this.getOptions());
    }
};
CategoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CategoryService);



/***/ }),

/***/ "./src/app/shared/models/category.model.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/models/category.model.ts ***!
  \*************************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
class Category {
    constructor(categoryInfo) {
        // this._id = userInfo._id || '';
        this.categoryName = categoryInfo.categoryName || "";
        this.status = categoryInfo.status || "";
    }
}
Category.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/student/category/add-category/add-category.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/student/category/add-category/add-category.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvY2F0ZWdvcnkvYWRkLWNhdGVnb3J5L2FkZC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/student/category/add-category/add-category.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/student/category/add-category/add-category.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function() { return AddCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _category_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../category/services/category.service */ "./src/app/student/category/services/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_models_category_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/models/category.model */ "./src/app/shared/models/category.model.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let AddCategoryComponent = class AddCategoryComponent {
    constructor(categorysservice, router) {
        this.categorysservice = categorysservice;
        this.router = router;
        this.newcategory = new _shared_models_category_model__WEBPACK_IMPORTED_MODULE_4__["Category"]({});
    }
    ngOnInit() { }
    submit() {
        console.log("Submitted>>>>>>>>>", this.newcategory);
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a
            .fire({
            title: "Do you want to add the category ?",
            text: "New category will be added in Category List",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Add"
        })
            .then(result => {
            if (result.value) {
                //dev
                this.categorysservice.addCategory(this.newcategory).subscribe((data) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Add!", "Category has been added.", "success");
                    //dev
                    console.log("Dataaa changeddd", data);
                }, error => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Not Added!", "There was some error.", "error");
                    //dev
                    console.log("ERRORR", error);
                });
            }
        });
    }
};
AddCategoryComponent.ctorParameters = () => [
    { type: _category_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AddCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-add-category",
        template: __webpack_require__(/*! raw-loader!./add-category.component.html */ "./node_modules/raw-loader/index.js!./src/app/student/category/add-category/add-category.component.html"),
        styles: [__webpack_require__(/*! ./add-category.component.scss */ "./src/app/student/category/add-category/add-category.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_category_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AddCategoryComponent);



/***/ }),

/***/ "./src/app/student/category/category-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/student/category/category-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CategoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryRoutingModule", function() { return CategoryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category.component */ "./src/app/student/category/category.component.ts");
/* harmony import */ var _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-category/add-category.component */ "./src/app/student/category/add-category/add-category.component.ts");
/* harmony import */ var _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-category/edit-category.component */ "./src/app/student/category/edit-category/edit-category.component.ts");






const routes = [
    {
        path: "",
        component: _category_component__WEBPACK_IMPORTED_MODULE_3__["CategoryComponent"],
        data: {
            title: "Category"
        }
    },
    {
        path: "add",
        component: _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_4__["AddCategoryComponent"],
        data: {
            title: "Add Category"
        }
    },
    {
        path: "edit/:id",
        component: _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_5__["EditCategoryComponent"],
        data: {
            title: "Edit Category"
        }
    }
];
let CategoryRoutingModule = class CategoryRoutingModule {
};
CategoryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CategoryRoutingModule);



/***/ }),

/***/ "./src/app/student/category/category.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/student/category/category.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/student/category/category.component.ts":
/*!********************************************************!*\
  !*** ./src/app/student/category/category.component.ts ***!
  \********************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/category.service */ "./src/app/student/category/services/category.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let CategoryComponent = class CategoryComponent {
    constructor(categoryservice, router) {
        this.categoryservice = categoryservice;
        this.router = router;
        this.categoryList = [];
    }
    ngOnInit() {
        this.categoryservice.getCategory().subscribe((data) => {
            this.categoryList = data;
            console.log(data);
        }, error => {
            console.log(error);
        });
    }
    delete(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a
            .fire({
            title: "Do you want to delete the Applicant?",
            text: "You won't be able to revert it back",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        })
            .then(result => {
            if (result.value) {
                this.categoryservice.deleteCategory(id).subscribe((data) => {
                    console.log("Deleted successfully");
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Deleted!", "Applicant Deleted.", "success");
                    this.router.navigate(["/category"]);
                    this.ngOnInit();
                }, error => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Not Deleted!", "There was some error.", "error");
                    console.log("Error", error);
                });
            }
        });
    }
};
CategoryComponent.ctorParameters = () => [
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-category",
        template: __webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/index.js!./src/app/student/category/category.component.html"),
        styles: [__webpack_require__(/*! ./category.component.scss */ "./src/app/student/category/category.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], CategoryComponent);



/***/ }),

/***/ "./src/app/student/category/category.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/student/category/category.module.ts ***!
  \*****************************************************/
/*! exports provided: CategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-routing.module */ "./src/app/student/category/category-routing.module.ts");
/* harmony import */ var _category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category.component */ "./src/app/student/category/category.component.ts");
/* harmony import */ var _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-category/add-category.component */ "./src/app/student/category/add-category/add-category.component.ts");
/* harmony import */ var _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-category/edit-category.component */ "./src/app/student/category/edit-category/edit-category.component.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/category.service */ "./src/app/student/category/services/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");











let CategoryModule = class CategoryModule {
};
CategoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _category_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]
        ],
        declarations: [
            _category_component__WEBPACK_IMPORTED_MODULE_6__["CategoryComponent"],
            _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_7__["AddCategoryComponent"],
            _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_8__["EditCategoryComponent"]
        ],
        providers: [_services_category_service__WEBPACK_IMPORTED_MODULE_9__["CategoryService"]]
    })
], CategoryModule);



/***/ }),

/***/ "./src/app/student/category/edit-category/edit-category.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/student/category/edit-category/edit-category.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvY2F0ZWdvcnkvZWRpdC1jYXRlZ29yeS9lZGl0LWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/student/category/edit-category/edit-category.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/student/category/edit-category/edit-category.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryComponent", function() { return EditCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/category.service */ "./src/app/student/category/services/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_shared_models_category_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/models/category.model */ "./src/app/shared/models/category.model.ts");






let EditCategoryComponent = class EditCategoryComponent {
    constructor(categoryservice, router, activeRouter) {
        this.categoryservice = categoryservice;
        this.router = router;
        this.activeRouter = activeRouter;
        this.updatedCategory = new app_shared_models_category_model__WEBPACK_IMPORTED_MODULE_5__["Category"]({});
        this.categoryid = this.activeRouter.snapshot.params["id"];
    }
    ngOnInit() {
        this.categoryservice.getCategoryById(this.categoryid).subscribe((data) => {
            console.log("data", data);
            this.updatedCategory = data;
        }, error => {
            console.log("error-->", error);
        });
    }
    edit() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a
            .fire({
            title: "Do you want to update the Category?",
            text: "You won't be able to revert it back",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Update"
        })
            .then(result => {
            if (result.value) {
                this.categoryservice
                    .editCategory(this.updatedCategory, this.categoryid)
                    .subscribe((data) => {
                    console.log("category added successfully");
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a
                        .fire("Updated!", "Category Updated.", "success")
                        .then(() => {
                        this.router.navigate(["category"]);
                    });
                    this.ngOnInit();
                }, error => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Not Updated!", "There was some error.", "error");
                    console.log("Error", error);
                });
            }
        });
        console.log("Submitted>>>>>>>>>", this.updatedCategory);
    }
};
EditCategoryComponent.ctorParameters = () => [
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
EditCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-edit-category",
        template: __webpack_require__(/*! raw-loader!./edit-category.component.html */ "./node_modules/raw-loader/index.js!./src/app/student/category/edit-category/edit-category.component.html"),
        styles: [__webpack_require__(/*! ./edit-category.component.scss */ "./src/app/student/category/edit-category/edit-category.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], EditCategoryComponent);



/***/ }),

/***/ "./src/app/student/category/services/category.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/student/category/services/category.service.ts ***!
  \***************************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let CategoryService = class CategoryService extends _shared_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(http) {
        super("category");
        this.http = http;
    }
    getCategory() {
        return this.http.get(this.url);
    }
    addCategory(data) {
        return this.http.post(this.url + "add/", data, this.getOptions());
    }
    getCategoryById(id) {
        return this.http.get(this.url + "edit/" + id, this.getOptions());
    }
    editCategory(updatedData, id) {
        return this.http.put(this.url + "edit/" + id, updatedData, this.getOptions());
    }
    deleteCategory(id) {
        return this.http.delete(this.url + "delete/" + id, this.getOptions());
    }
};
CategoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], CategoryService);



/***/ })

}]);
//# sourceMappingURL=category-category-module-es2015.js.map