(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["enquiries-enquiries-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/enquiry/enquiries/add-enquiries/add-enquiries.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/enquiry/enquiries/add-enquiries/add-enquiries.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"horizontal-form-layouts\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Add New Enquiry</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content\">\r\n          <div class=\"px-3\">\r\n            <form\r\n              class=\"form form-horizontal\"\r\n              #newenquiriesForm=\"ngForm\"\r\n              novalidate\r\n            >\r\n              <div class=\"form-body\">\r\n                <h4 class=\"form-section\">\r\n                  <i class=\"ft-enquiries\"></i> New Enquiry Details\r\n                </h4>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" required\r\n                    >Select Category\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Category Name\"\r\n                      name=\"Enter Name\"\r\n                      [(ngModel)]=\"newenquiries.categoryName\"\r\n                      #categoryName=\"ngModel\"\r\n                      required\r\n                    />\r\n\r\n                    <div\r\n                      *ngIf=\"categoryName.invalid && categoryName.dirty\"\r\n                      class=\"danger\"\r\n                    >\r\n                      Required Field**\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" required\r\n                    >Select Source\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Source Name\"\r\n                      name=\"Enter Source\"\r\n                      [(ngModel)]=\"newenquiries.source\"\r\n                      #source=\"ngModel\"\r\n                      required\r\n                    />\r\n\r\n                    <div *ngIf=\"source.invalid && source.dirty\" class=\"danger\">\r\n                      Required Field**\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" required> Name </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Category Name\"\r\n                      name=\"Enter Name\"\r\n                      [(ngModel)]=\"newenquiries.name\"\r\n                      #name=\"ngModel\"\r\n                      required\r\n                    />\r\n\r\n                    <div *ngIf=\"name.invalid && name.dirty\" class=\"danger\">\r\n                      Required Field**\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" required>Email </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"email\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Email\"\r\n                      name=\"email\"\r\n                      [(ngModel)]=\"newenquiries.email\"\r\n                      #email=\"ngModel\"\r\n                      required\r\n                      email\r\n                    />\r\n\r\n                    <div *ngIf=\"email.invalid && email.dirty\" class=\"danger\">\r\n                      Not a valid Email**\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" required>Phone </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"number\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Enter Contact number\"\r\n                      name=\"phone\"\r\n                      [(ngModel)]=\"newenquiries.phone\"\r\n                      #phone=\"ngModel\"\r\n                      required\r\n                    />\r\n\r\n                    <div *ngIf=\"phone.invalid && phone.dirty\" class=\"danger\">\r\n                      Required Field**\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" required\r\n                    >Enquiry DAte\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"date\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Enter DAte\"\r\n                      name=\"date\"\r\n                      [(ngModel)]=\"newenquiries.date\"\r\n                      #date=\"ngModel\"\r\n                      required\r\n                    />\r\n\r\n                    <div *ngIf=\"date.invalid && date.dirty\" class=\"danger\">\r\n                      Required Field**\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" required\r\n                    >Responded Through\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Responded Through\"\r\n                      name=\"Enter Name\"\r\n                      [(ngModel)]=\"newenquiries.response\"\r\n                      #response=\"ngModel\"\r\n                      required\r\n                    />\r\n\r\n                    <div\r\n                      *ngIf=\"response.invalid && response.dirty\"\r\n                      class=\"danger\"\r\n                    >\r\n                      Required Field**\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\" col-md-3  label-control\" for=\"projectinput9\"\r\n                    >Remarks</label\r\n                  >\r\n                  <br />\r\n                  <textarea\r\n                    id=\"projectinput9\"\r\n                    rows=\"2\"\r\n                    class=\"form-control\"\r\n                    name=\"remarks\"\r\n                    placeholder=\"Please select Sms Template or Type\"\r\n                    [(ngModel)]=\"newtemplate.remarks\"\r\n                    #remarks=\"ngModel\"\r\n                    style=\"height: 50px; width: 75%; \"\r\n                  ></textarea>\r\n                </div>\r\n\r\n                <fieldset>\r\n                  <div class=\"input-group\" style=\"margin-left:26%;\">\r\n                    <!-- <span class=\"input-group-text\" id=\"checkbox-addon1\"> -->\r\n                    <input\r\n                      type=\"checkbox\"\r\n                      aria-label=\"Checkbox for following text input\"\r\n                      style=\"margin-top: 5px;\"\r\n                    />\r\n                    Visited Office\r\n                    <!-- </span> -->\r\n                  </div>\r\n                </fieldset>\r\n\r\n                <div class=\"form-actions center\">\r\n                  <button\r\n                    [disabled]=\"newenquiriesForm.invalid\"\r\n                    type=\"button\"\r\n                    class=\"btn btn-raised btn-info mr-1\"\r\n                    (click)=\"submit()\"\r\n                  >\r\n                    <i class=\"ft ft-user-check\"></i> Add New Enquiry\r\n                  </button>\r\n\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn btn-raised btn-danger\"\r\n                    routerLink=\"/enquiries\"\r\n                  >\r\n                    <i class=\"ft ft-x\"></i> Go Back\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- // Basic form layout section end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/enquiry/enquiries/edit-enquiries/edit-enquiries.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/enquiry/enquiries/edit-enquiries/edit-enquiries.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"horizontal-form-layouts\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Edit Enquiry</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content\">\r\n          <div class=\"px-3\">\r\n            <form\r\n              class=\"form form-horizontal\"\r\n              #newenquiriesForm=\"ngForm\"\r\n              novalidate\r\n            >\r\n              <div class=\"form-body\">\r\n                <h4 class=\"form-section\">\r\n                  <i class=\"ft-enquiries\"></i> Update Enquiry Details\r\n                </h4>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" required\r\n                    >Select Category\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Category Name\"\r\n                      name=\"Enter Name\"\r\n                      [(ngModel)]=\"newenquiries.categoryName\"\r\n                      #categoryName=\"ngModel\"\r\n                      required\r\n                    />\r\n\r\n                    <div\r\n                      *ngIf=\"categoryName.invalid && categoryName.dirty\"\r\n                      class=\"danger\"\r\n                    >\r\n                      Required Field**\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" required\r\n                    >Select Source\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Source Name\"\r\n                      name=\"Enter Source\"\r\n                      [(ngModel)]=\"newenquiries.source\"\r\n                      #source=\"ngModel\"\r\n                      required\r\n                    />\r\n\r\n                    <div *ngIf=\"source.invalid && source.dirty\" class=\"danger\">\r\n                      Required Field**\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" required> Name </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Category Name\"\r\n                      name=\"Enter Name\"\r\n                      [(ngModel)]=\"newenquiries.name\"\r\n                      #name=\"ngModel\"\r\n                      required\r\n                    />\r\n\r\n                    <div *ngIf=\"name.invalid && name.dirty\" class=\"danger\">\r\n                      Required Field**\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" required>Email </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"email\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Email\"\r\n                      name=\"email\"\r\n                      [(ngModel)]=\"newenquiries.email\"\r\n                      #email=\"ngModel\"\r\n                      required\r\n                      email\r\n                    />\r\n\r\n                    <div *ngIf=\"email.invalid && email.dirty\" class=\"danger\">\r\n                      Not a valid Email**\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" required>Phone </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"number\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Enter Contact number\"\r\n                      name=\"phone\"\r\n                      [(ngModel)]=\"newenquiries.phone\"\r\n                      #phone=\"ngModel\"\r\n                      required\r\n                    />\r\n\r\n                    <div *ngIf=\"phone.invalid && phone.dirty\" class=\"danger\">\r\n                      Required Field**\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" required\r\n                    >Enquiry DAte\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"date\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Enter DAte\"\r\n                      name=\"date\"\r\n                      [(ngModel)]=\"newenquiries.date\"\r\n                      #date=\"ngModel\"\r\n                      required\r\n                    />\r\n\r\n                    <div *ngIf=\"date.invalid && date.dirty\" class=\"danger\">\r\n                      Required Field**\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" required\r\n                    >Responded Through\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Responded Through\"\r\n                      name=\"Enter Name\"\r\n                      [(ngModel)]=\"newenquiries.response\"\r\n                      #response=\"ngModel\"\r\n                      required\r\n                    />\r\n\r\n                    <div\r\n                      *ngIf=\"response.invalid && response.dirty\"\r\n                      class=\"danger\"\r\n                    >\r\n                      Required Field**\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-6\" style=\"margin-top: 20px;\">\r\n                  <label class=\"label-control\" for=\"projectinput9\"\r\n                    >Remarks</label\r\n                  >\r\n                  <br />\r\n                  <textarea\r\n                    id=\"projectinput9\"\r\n                    rows=\"2\"\r\n                    class=\"form-control\"\r\n                    name=\"remarks\"\r\n                    placeholder=\"Please select Sms Template or Type\"\r\n                    [(ngModel)]=\"newtemplate.remarks\"\r\n                    #remarks=\"ngModel\"\r\n                    style=\"height: 0px;\"\r\n                  ></textarea>\r\n                </div>\r\n\r\n                <fieldset>\r\n                  <div class=\"input-group\" style=\"margin-left:26%;\">\r\n                    <!-- <span class=\"input-group-text\" id=\"checkbox-addon1\"> -->\r\n                    <input\r\n                      type=\"checkbox\"\r\n                      aria-label=\"Checkbox for following text input\"\r\n                      style=\"margin-top: 5px;\"\r\n                    />\r\n                    Visited Office\r\n                    <!-- </span> -->\r\n                  </div>\r\n                </fieldset>\r\n\r\n                <div class=\"form-actions center\">\r\n                  <button\r\n                    [disabled]=\"newenquiriesForm.invalid\"\r\n                    type=\"button\"\r\n                    class=\"btn btn-raised btn-info mr-1\"\r\n                    (click)=\"update()\"\r\n                  >\r\n                    <i class=\"ft ft-user-check\"></i> Edit Enquiry\r\n                  </button>\r\n\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn btn-raised btn-danger\"\r\n                    routerLink=\"/enquiries\"\r\n                  >\r\n                    <i class=\"ft ft-x\"></i> Go Back\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- // Basic form layout section end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/enquiry/enquiries/enquiries.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/enquiry/enquiries/enquiries.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"extended\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">All Enquiries List</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">All Enquiries List</h4>\r\n        </div>\r\n        <!-- <fieldset disabled>\r\n              <a href=\"javascript:void(0)\" class=\"btn btn-raised mr-1 btn-primary\">Add New</a>\r\n          </fieldset> -->\r\n        <div\r\n          class=\"form-actions\"\r\n          style=\"margin-left: 30px; padding-top: 20px; margin-bottom: -30px;\"\r\n        >\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-raised btn-info mr-1\"\r\n            routerLink=\"add\"\r\n            routerLinkActive=\"active\"\r\n          >\r\n            Add New\r\n            <i class=\"fonticon-wrap\" class=\"icon-enquiries-follow\"></i>\r\n          </button>\r\n\r\n          <button type=\"button\" class=\"btn btn-raised btn-warning\">\r\n            Trashed Enquiries\r\n            <i class=\"fonticon-wrap\" class=\"icon-eye\"></i>\r\n          </button>\r\n\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-raised btn-info\"\r\n            style=\"float: right; margin-right: 30px;\"\r\n          >\r\n            Print\r\n            <i class=\"fonticon-wrap\" class=\"fa fa-print\"></i>\r\n          </button>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-raised btn-success\"\r\n            style=\"float: right; margin-right: 10px;\"\r\n          >\r\n            Save as PDF\r\n            <i class=\"fonticon-wrap\" class=\" fa fa-file-o\"></i>\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <table class=\"table table-responsive-md text-center\">\r\n              <thead>\r\n                <tr>\r\n                  <th>S.No</th>\r\n                  <th>Enquiry By</th>\r\n                  <th>Email</th>\r\n                  <th>Enquiry On</th>\r\n                  <th>Category</th>\r\n                  <th>Source</th>\r\n                  <th>Responded Through</th>\r\n                  <th>Office Visit</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <td\r\n                  colspan=\"9\"\r\n                  style=\"text-align: center;\"\r\n                  *ngIf=\"!enquiriesList.length\"\r\n                >\r\n                  <h2>No data in database</h2>\r\n                </td>\r\n                <tr *ngFor=\"let enquiries of enquiriesList; let i = index\">\r\n                  <td>{{ i + 1 }}</td>\r\n                  <td>{{ enquiries.categoryName }}</td>\r\n                  <td>{{ enquiries.source }}</td>\r\n                  <td>{{ enquiries.name }}</td>\r\n                  <td>{{ enquiries.email }}</td>\r\n                  <td>{{ enquiries.phone }}</td>\r\n                  <td>{{ enquiries.date }}</td>\r\n                  <td>{{ enquiries.response }}</td>\r\n                  <td>{{ enquiries.remarks }}</td>\r\n\r\n                  <td>\r\n                    <div class=\"floating-btn\">\r\n                      <a\r\n                        routerLink=\"edit/{{ enquiries.id }}\"\r\n                        class=\"btn btn-warning mr-1 btn-fab\"\r\n                        ><i class=\"icon-pencil\"></i\r\n                      ></a>\r\n                      <a\r\n                        (click)=\"delete(enquiries.id)\"\r\n                        class=\"btn btn-danger mr-1 btn-fab\"\r\n                        ><i class=\"icon-trash\"></i\r\n                      ></a>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/enquiry/enquiries/add-enquiries/add-enquiries.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/enquiry/enquiries/add-enquiries/add-enquiries.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VucXVpcnkvZW5xdWlyaWVzL2FkZC1lbnF1aXJpZXMvYWRkLWVucXVpcmllcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/enquiry/enquiries/add-enquiries/add-enquiries.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/enquiry/enquiries/add-enquiries/add-enquiries.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddEnquiriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEnquiriesComponent", function() { return AddEnquiriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_enquiries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/enquiries.service */ "./src/app/enquiry/enquiries/services/enquiries.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_models_enquiries_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/models/enquiries.model */ "./src/app/shared/models/enquiries.model.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let AddEnquiriesComponent = class AddEnquiriesComponent {
    constructor(enquiriessservice, router) {
        this.enquiriessservice = enquiriessservice;
        this.router = router;
        this.newenquiries = new _shared_models_enquiries_model__WEBPACK_IMPORTED_MODULE_4__["Enquiries"]({});
    }
    ngOnInit() { }
    submit() {
        console.log("Submitted>>>>>>>>>", this.newenquiries);
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a
            .fire({
            title: "Do you want to add the enquiries ?",
            text: "New enquiries will be added in Enquiries List",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Add"
        })
            .then(result => {
            if (result.value) {
                //dev
                this.enquiriessservice.addEnquiries(this.newenquiries).subscribe((data) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Add!", "Enquiries has been added.", "success");
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
AddEnquiriesComponent.ctorParameters = () => [
    { type: _services_enquiries_service__WEBPACK_IMPORTED_MODULE_2__["EnquiriesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AddEnquiriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-add-enquiries",
        template: __webpack_require__(/*! raw-loader!./add-enquiries.component.html */ "./node_modules/raw-loader/index.js!./src/app/enquiry/enquiries/add-enquiries/add-enquiries.component.html"),
        styles: [__webpack_require__(/*! ./add-enquiries.component.scss */ "./src/app/enquiry/enquiries/add-enquiries/add-enquiries.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_enquiries_service__WEBPACK_IMPORTED_MODULE_2__["EnquiriesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AddEnquiriesComponent);



/***/ }),

/***/ "./src/app/enquiry/enquiries/edit-enquiries/edit-enquiries.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/enquiry/enquiries/edit-enquiries/edit-enquiries.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VucXVpcnkvZW5xdWlyaWVzL2VkaXQtZW5xdWlyaWVzL2VkaXQtZW5xdWlyaWVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/enquiry/enquiries/edit-enquiries/edit-enquiries.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/enquiry/enquiries/edit-enquiries/edit-enquiries.component.ts ***!
  \******************************************************************************/
/*! exports provided: EditEnquiriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEnquiriesComponent", function() { return EditEnquiriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_enquiries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/enquiries.service */ "./src/app/enquiry/enquiries/services/enquiries.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_shared_models_enquiries_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/models/enquiries.model */ "./src/app/shared/models/enquiries.model.ts");






let EditEnquiriesComponent = class EditEnquiriesComponent {
    constructor(enquiriesservice, router, activeRouter) {
        this.enquiriesservice = enquiriesservice;
        this.router = router;
        this.activeRouter = activeRouter;
        this.updatedEnquiries = new app_shared_models_enquiries_model__WEBPACK_IMPORTED_MODULE_5__["Enquiries"]({});
        this.enquiriesid = this.activeRouter.snapshot.params["id"];
    }
    ngOnInit() {
        this.enquiriesservice.getEnquiriesById(this.enquiriesid).subscribe((data) => {
            console.log("data", data);
            this.updatedEnquiries = data;
        }, error => {
            console.log("error-->", error);
        });
    }
    edit() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a
            .fire({
            title: "Do you want to update the Enquiries?",
            text: "You won't be able to revert it back",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Update"
        })
            .then(result => {
            if (result.value) {
                this.enquiriesservice
                    .editEnquiries(this.updatedEnquiries, this.enquiriesid)
                    .subscribe((data) => {
                    console.log("enquiries added successfully");
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a
                        .fire("Updated!", "Enquiries Updated.", "success")
                        .then(() => {
                        this.router.navigate(["enquiries"]);
                    });
                    this.ngOnInit();
                }, error => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Not Updated!", "There was some error.", "error");
                    console.log("Error", error);
                });
            }
        });
        console.log("Submitted>>>>>>>>>", this.updatedEnquiries);
    }
};
EditEnquiriesComponent.ctorParameters = () => [
    { type: _services_enquiries_service__WEBPACK_IMPORTED_MODULE_2__["EnquiriesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
EditEnquiriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-edit-enquiries",
        template: __webpack_require__(/*! raw-loader!./edit-enquiries.component.html */ "./node_modules/raw-loader/index.js!./src/app/enquiry/enquiries/edit-enquiries/edit-enquiries.component.html"),
        styles: [__webpack_require__(/*! ./edit-enquiries.component.scss */ "./src/app/enquiry/enquiries/edit-enquiries/edit-enquiries.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_enquiries_service__WEBPACK_IMPORTED_MODULE_2__["EnquiriesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], EditEnquiriesComponent);



/***/ }),

/***/ "./src/app/enquiry/enquiries/enquiries-routing.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/enquiry/enquiries/enquiries-routing.component.ts ***!
  \******************************************************************/
/*! exports provided: EnquiriesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquiriesRoutingModule", function() { return EnquiriesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _enquiries_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enquiries.component */ "./src/app/enquiry/enquiries/enquiries.component.ts");
/* harmony import */ var _add_enquiries_add_enquiries_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-enquiries/add-enquiries.component */ "./src/app/enquiry/enquiries/add-enquiries/add-enquiries.component.ts");
/* harmony import */ var _edit_enquiries_edit_enquiries_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-enquiries/edit-enquiries.component */ "./src/app/enquiry/enquiries/edit-enquiries/edit-enquiries.component.ts");






const routes = [
    {
        path: "",
        component: _enquiries_component__WEBPACK_IMPORTED_MODULE_3__["EnquiriesComponent"],
        data: {
            title: "Enquiries"
        }
    },
    {
        path: "add",
        component: _add_enquiries_add_enquiries_component__WEBPACK_IMPORTED_MODULE_4__["AddEnquiriesComponent"],
        data: {
            title: "Add Enquiries"
        }
    },
    {
        path: "edit/:id",
        component: _edit_enquiries_edit_enquiries_component__WEBPACK_IMPORTED_MODULE_5__["EditEnquiriesComponent"],
        data: {
            title: "Edit Enquiries"
        }
    }
];
let EnquiriesRoutingModule = class EnquiriesRoutingModule {
};
EnquiriesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EnquiriesRoutingModule);



/***/ }),

/***/ "./src/app/enquiry/enquiries/enquiries.component.scss":
/*!************************************************************!*\
  !*** ./src/app/enquiry/enquiries/enquiries.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VucXVpcnkvZW5xdWlyaWVzL2VucXVpcmllcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/enquiry/enquiries/enquiries.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/enquiry/enquiries/enquiries.component.ts ***!
  \**********************************************************/
/*! exports provided: EnquiriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquiriesComponent", function() { return EnquiriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_enquiries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/enquiries.service */ "./src/app/enquiry/enquiries/services/enquiries.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let EnquiriesComponent = class EnquiriesComponent {
    constructor(enquiriesservice, router) {
        this.enquiriesservice = enquiriesservice;
        this.router = router;
        this.enquiriesList = [];
    }
    ngOnInit() {
        this.enquiriesservice.getEnquiries().subscribe((data) => {
            this.enquiriesList = data;
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
                this.enquiriesservice.deleteEnquiries(id).subscribe((data) => {
                    console.log("Deleted successfully");
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Deleted!", "Applicant Deleted.", "success");
                    this.router.navigate(["/enquiries"]);
                    this.ngOnInit();
                }, error => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Not Deleted!", "There was some error.", "error");
                    console.log("Error", error);
                });
            }
        });
    }
};
EnquiriesComponent.ctorParameters = () => [
    { type: _services_enquiries_service__WEBPACK_IMPORTED_MODULE_3__["EnquiriesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
EnquiriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-enquiries",
        template: __webpack_require__(/*! raw-loader!./enquiries.component.html */ "./node_modules/raw-loader/index.js!./src/app/enquiry/enquiries/enquiries.component.html"),
        styles: [__webpack_require__(/*! ./enquiries.component.scss */ "./src/app/enquiry/enquiries/enquiries.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_enquiries_service__WEBPACK_IMPORTED_MODULE_3__["EnquiriesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], EnquiriesComponent);



/***/ }),

/***/ "./src/app/enquiry/enquiries/enquiries.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/enquiry/enquiries/enquiries.module.ts ***!
  \*******************************************************/
/*! exports provided: EnquiriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquiriesModule", function() { return EnquiriesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _enquiries_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enquiries.component */ "./src/app/enquiry/enquiries/enquiries.component.ts");
/* harmony import */ var _add_enquiries_add_enquiries_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-enquiries/add-enquiries.component */ "./src/app/enquiry/enquiries/add-enquiries/add-enquiries.component.ts");
/* harmony import */ var _edit_enquiries_edit_enquiries_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-enquiries/edit-enquiries.component */ "./src/app/enquiry/enquiries/edit-enquiries/edit-enquiries.component.ts");
/* harmony import */ var _services_enquiries_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/enquiries.service */ "./src/app/enquiry/enquiries/services/enquiries.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _enquiries_routing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./enquiries-routing.component */ "./src/app/enquiry/enquiries/enquiries-routing.component.ts");











let EnquiriesModule = class EnquiriesModule {
};
EnquiriesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _enquiries_routing_component__WEBPACK_IMPORTED_MODULE_10__["EnquiriesRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]
        ],
        declarations: [
            _enquiries_component__WEBPACK_IMPORTED_MODULE_5__["EnquiriesComponent"],
            _add_enquiries_add_enquiries_component__WEBPACK_IMPORTED_MODULE_6__["AddEnquiriesComponent"],
            _edit_enquiries_edit_enquiries_component__WEBPACK_IMPORTED_MODULE_7__["EditEnquiriesComponent"]
        ],
        providers: [_services_enquiries_service__WEBPACK_IMPORTED_MODULE_8__["EnquiriesService"]]
    })
], EnquiriesModule);



/***/ }),

/***/ "./src/app/enquiry/enquiries/services/enquiries.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/enquiry/enquiries/services/enquiries.service.ts ***!
  \*****************************************************************/
/*! exports provided: EnquiriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquiriesService", function() { return EnquiriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let EnquiriesService = class EnquiriesService extends _shared_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(http) {
        super("enquiries");
        this.http = http;
    }
    getEnquiries() {
        return this.http.get(this.url);
    }
    addEnquiries(data) {
        return this.http.post(this.url + "add/", data, this.getOptions());
    }
    getEnquiriesById(id) {
        return this.http.get(this.url + "edit/" + id, this.getOptions());
    }
    editEnquiries(updatedData, id) {
        return this.http.put(this.url + "edit/" + id, updatedData, this.getOptions());
    }
    deleteEnquiries(id) {
        return this.http.delete(this.url + "delete/" + id, this.getOptions());
    }
};
EnquiriesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
EnquiriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], EnquiriesService);



/***/ }),

/***/ "./src/app/shared/models/enquiries.model.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/models/enquiries.model.ts ***!
  \**************************************************/
/*! exports provided: Enquiries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enquiries", function() { return Enquiries; });
class Enquiries {
    constructor(enquiriesInfo) {
        // this._id = userInfo._id || '';
        this.categoryName = enquiriesInfo.categoryName || "";
        this.source = enquiriesInfo.source || "";
        this.email = enquiriesInfo.email || "";
        this.phone = enquiriesInfo.phone || "";
        this.date = enquiriesInfo.date || "";
        this.response = enquiriesInfo.response || "";
        this.remarks = enquiriesInfo.remarks || "";
    }
}
Enquiries.ctorParameters = () => [
    { type: undefined }
];


/***/ })

}]);
//# sourceMappingURL=enquiries-enquiries-module-es2015.js.map