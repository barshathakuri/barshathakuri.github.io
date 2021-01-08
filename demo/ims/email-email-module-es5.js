(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["email-email-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/email/enquiries/enquiries.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/email/enquiries/enquiries.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"horizontal-form-layouts\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">All Enquiries List</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content\">\r\n          <div class=\"px-3\">\r\n            <form\r\n              class=\"form form-horizontal\"\r\n              #newenquriesForm=\"ngForm\"\r\n              novalidate\r\n            >\r\n              <div class=\"form-body\">\r\n                <h4 class=\"form-section\">\r\n                  <i class=\"ft-user\"></i> All Enquiries List\r\n                </h4>\r\n\r\n                <label class=\"col-md-4 label-control\" for=\"projectinput\"\r\n                  >Select Email Template\r\n                </label>\r\n                <div class=\"col-md-12\">\r\n                  <!-- <fieldset class=\"form-group position-relative\"> -->\r\n                  <select\r\n                    class=\"form-control\"\r\n                    id=\"DefaultSelect\"\r\n                    placeholder=\"Select User Role\"\r\n                    name=\"etemplate\"\r\n                    required\r\n                  >\r\n                    <option value=\"Other\">Other</option>\r\n                  </select>\r\n                  <!-- <div\r\n                      class=\"danger\"\r\n                      *ngIf=\"\r\n                        etemplate.invalid &&\r\n                        (etemplate.dirty || etemplate.touched)\r\n                      \"\r\n                    >\r\n                      required field*\r\n                    </div> -->\r\n                  <!-- </fieldset> -->\r\n                </div>\r\n\r\n                <div class=\"col-md-12\" style=\"padding-top: 20px;\">\r\n                  <label class=\"label-control\" for=\"projectinput9\">Email</label>\r\n                  <br />\r\n                  <textarea\r\n                    id=\"projectinput9\"\r\n                    rows=\"2\"\r\n                    class=\"form-control\"\r\n                    name=\"remarks\"\r\n                    placeholder=\"Please select Mail Template or Type\"\r\n                  ></textarea>\r\n                </div>\r\n\r\n                <div class=\"col-md-12\" style=\"padding-top: 20px;\">\r\n                  <label class=\"label-control\" for=\"projectinput1\" required>\r\n                    Subject\r\n                    <i class=\"icon-envelope\"></i>\r\n                  </label>\r\n\r\n                  <input\r\n                    type=\"text\"\r\n                    id=\"projectinput1\"\r\n                    class=\"form-control\"\r\n                    placeholder=\"Enter Subject\"\r\n                    name=\"subject\"\r\n                    required\r\n                  />\r\n                </div>\r\n                <div class=\"form-actions center\" style=\"float: right;\">\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn btn-raised btn-info mr-1\"\r\n                    (click)=\"submit()\"\r\n                  >\r\n                    Send <i class=\"icon-paper-plane\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n\r\n          <table class=\"table table-responsive-md text-center\">\r\n            <thead>\r\n              <tr>\r\n                <th>\r\n                  <fieldset>\r\n                    <div class=\"input-group\">\r\n                      <!-- <span class=\"input-group-text\" id=\"checkbox-addon1\"> -->\r\n                      <input\r\n                        type=\"checkbox\"\r\n                        aria-label=\"Checkbox for following text input\"\r\n                        style=\"margin-top: 35px;\"\r\n                      />\r\n                      <!-- </span> -->\r\n                    </div>\r\n                  </fieldset>\r\n                </th>\r\n                <th>S.No</th>\r\n                <th>Name</th>\r\n                <th>Email</th>\r\n                <th>Phone</th>\r\n                <th>Category</th>\r\n                <th>Source</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <!-- <td colspan=\"3\"></td>\r\n                                <td\r\n                                  colspan=\"4\"\r\n                                  style=\"text-align: left;\"\r\n                                  *ngIf=\"!templateList.length\"\r\n                                >\r\n                                  <h2>No data in database</h2>\r\n                                </td> -->\r\n\r\n              <tr>\r\n                <td>\r\n                  <fieldset>\r\n                    <div class=\"input-group\">\r\n                      <!-- <span class=\"input-group-text\" id=\"checkbox-addon1\"> -->\r\n                      <input\r\n                        type=\"checkbox\"\r\n                        aria-label=\"Checkbox for following text input\"\r\n                        style=\"margin-top: 10px;\"\r\n                      />\r\n                      <!-- </span> -->\r\n                    </div>\r\n                  </fieldset>\r\n                </td>\r\n                <td>John</td>\r\n\r\n                <td>abc@gmail.com</td>\r\n                <td>9865632326</td>\r\n                <td>abc</td>\r\n                <td>MBBS</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- // Basic form layout section end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/email/staffs/staffs.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/email/staffs/staffs.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"horizontal-form-layouts\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">All Staffs List</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content\">\r\n          <div class=\"px-3\">\r\n            <form\r\n              class=\"form form-horizontal\"\r\n              #newstaffsForm=\"ngForm\"\r\n              novalidate\r\n            >\r\n              <div class=\"form-body\">\r\n                <h4 class=\"form-section\">\r\n                  <i class=\"ft-user\"></i> All Staffs List\r\n                </h4>\r\n\r\n                <label class=\"col-md-4 label-control\" for=\"projectinput\"\r\n                  >Select Email Template\r\n                </label>\r\n                <div class=\"col-md-12\">\r\n                  <!-- <fieldset class=\"form-group position-relative\"> -->\r\n                  <select\r\n                    class=\"form-control\"\r\n                    id=\"DefaultSelect\"\r\n                    placeholder=\"Select User Role\"\r\n                    name=\"etemplate\"\r\n                    required\r\n                  >\r\n                    <option value=\"Other\">Other</option>\r\n                  </select>\r\n                  <!-- <div\r\n                      class=\"danger\"\r\n                      *ngIf=\"\r\n                        etemplate.invalid &&\r\n                        (etemplate.dirty || etemplate.touched)\r\n                      \"\r\n                    >\r\n                      required field*\r\n                    </div> -->\r\n                  <!-- </fieldset> -->\r\n                </div>\r\n\r\n                <div class=\"col-md-12\" style=\"padding-top: 20px;\">\r\n                  <label class=\"label-control\" for=\"projectinput9\">Email</label>\r\n                  <br />\r\n                  <textarea\r\n                    id=\"projectinput9\"\r\n                    rows=\"2\"\r\n                    class=\"form-control\"\r\n                    name=\"remarks\"\r\n                    placeholder=\"Please select Mail Template or Type\"\r\n                  ></textarea>\r\n                </div>\r\n\r\n                <div class=\"col-md-12\" style=\"padding-top: 20px;\">\r\n                  <label class=\"label-control\" for=\"projectinput1\" required>\r\n                    Subject\r\n                    <i class=\"icon-envelope\"></i>\r\n                  </label>\r\n\r\n                  <input\r\n                    type=\"text\"\r\n                    id=\"projectinput1\"\r\n                    class=\"form-control\"\r\n                    placeholder=\"Enter Subject\"\r\n                    name=\"subject\"\r\n                    required\r\n                  />\r\n                </div>\r\n                <div class=\"form-actions center\" style=\"float: right;\">\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn btn-raised btn-info mr-1\"\r\n                    (click)=\"submit()\"\r\n                  >\r\n                    Send <i class=\"icon-paper-plane\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n\r\n          <table class=\"table table-responsive-md text-center\">\r\n            <thead>\r\n              <tr>\r\n                <th>\r\n                  <fieldset>\r\n                    <div class=\"input-group\">\r\n                      <!-- <span class=\"input-group-text\" id=\"checkbox-addon1\"> -->\r\n                      <input\r\n                        type=\"checkbox\"\r\n                        aria-label=\"Checkbox for following text input\"\r\n                        style=\"margin-top: 35px;\"\r\n                      />\r\n                      <!-- </span> -->\r\n                    </div>\r\n                  </fieldset>\r\n                </th>\r\n                <th>Name</th>\r\n                <th>Staff's Email</th>\r\n                <th>Phone</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <!-- <td colspan=\"3\"></td>\r\n                                <td\r\n                                  colspan=\"4\"\r\n                                  style=\"text-align: left;\"\r\n                                  *ngIf=\"!templateList.length\"\r\n                                >\r\n                                  <h2>No data in database</h2>\r\n                                </td> -->\r\n\r\n              <!-- <tr *ngFor=\"let applicant of applicantList; let i = index\">\r\n                <td>{{ i + 1 }}</td>\r\n\r\n                <td>{{ applicant.fname }}</td>\r\n\r\n                <td>{{ applicant.email }}</td>\r\n                <td>{{ applicant.phone }}</td>\r\n                <td>{{ applicant.address }}</td>\r\n                <td>{{ applicant.service }}</td>\r\n              </tr> -->\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- // Basic form layout section end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/email/student/student.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/email/student/student.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"horizontal-form-layouts\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">All Student List</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content\">\r\n          <div class=\"px-3\">\r\n            <form\r\n              class=\"form form-horizontal\"\r\n              #newstudentForm=\"ngForm\"\r\n              novalidate\r\n            >\r\n              <div class=\"form-body\">\r\n                <h4 class=\"form-section\">\r\n                  <i class=\"ft-user\"></i> All Student List\r\n                </h4>\r\n\r\n                <label class=\"col-md-4 label-control\" for=\"projectinput\"\r\n                  >Select Email Template\r\n                </label>\r\n                <div class=\"col-md-12\">\r\n                  <!-- <fieldset class=\"form-group position-relative\"> -->\r\n                  <select\r\n                    class=\"form-control\"\r\n                    id=\"DefaultSelect\"\r\n                    placeholder=\"Select User Role\"\r\n                    name=\"etemplate\"\r\n                    required\r\n                  >\r\n                    <option value=\"Other\">Other</option>\r\n                  </select>\r\n                  <!-- <div\r\n                      class=\"danger\"\r\n                      *ngIf=\"\r\n                        etemplate.invalid &&\r\n                        (etemplate.dirty || etemplate.touched)\r\n                      \"\r\n                    >\r\n                      required field*\r\n                    </div> -->\r\n                  <!-- </fieldset> -->\r\n                </div>\r\n\r\n                <div class=\"col-md-12\" style=\"padding-top: 20px;\">\r\n                  <label class=\"label-control\" for=\"projectinput9\">Email</label>\r\n                  <br />\r\n                  <textarea\r\n                    id=\"projectinput9\"\r\n                    rows=\"2\"\r\n                    class=\"form-control\"\r\n                    name=\"remarks\"\r\n                    placeholder=\"Please select Mail Template or Type\"\r\n                  ></textarea>\r\n                </div>\r\n\r\n                <div class=\"col-md-12\" style=\"padding-top: 20px;\">\r\n                  <label class=\"label-control\" for=\"projectinput1\" required>\r\n                    Subject\r\n                    <i class=\"icon-envelope\"></i>\r\n                  </label>\r\n\r\n                  <input\r\n                    type=\"text\"\r\n                    id=\"projectinput1\"\r\n                    class=\"form-control\"\r\n                    placeholder=\"Enter Subject\"\r\n                    name=\"subject\"\r\n                    required\r\n                  />\r\n                </div>\r\n                <div class=\"form-actions center\" style=\"float: right;\">\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn btn-raised btn-info mr-1\"\r\n                    (click)=\"submit()\"\r\n                  >\r\n                    Send <i class=\"icon-paper-plane\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n\r\n          <table class=\"table table-responsive-md text-center\">\r\n            <thead>\r\n              <tr>\r\n                <th>\r\n                  <fieldset>\r\n                    <div class=\"input-group\">\r\n                      <!-- <span class=\"input-group-text\" id=\"checkbox-addon1\"> -->\r\n                      <input\r\n                        type=\"checkbox\"\r\n                        aria-label=\"Checkbox for following text input\"\r\n                        style=\"margin-top: 35px;\"\r\n                      />\r\n                      <!-- </span> -->\r\n                    </div>\r\n                  </fieldset>\r\n                </th>\r\n                <th>First Name</th>\r\n                <th>Student's Email</th>\r\n                <th>Phone</th>\r\n                <th>Address</th>\r\n                <th>Services</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>\r\n                  <fieldset>\r\n                    <div class=\"input-group\">\r\n                      <!-- <span class=\"input-group-text\" id=\"checkbox-addon1\"> -->\r\n                      <input\r\n                        type=\"checkbox\"\r\n                        aria-label=\"Checkbox for following text input\"\r\n                        style=\"margin-top:10px;\"\r\n                      />\r\n                      <!-- </span> -->\r\n                    </div>\r\n                  </fieldset>\r\n                </td>\r\n\r\n                <td>John</td>\r\n\r\n                <td>xyz@gmail.com</td>\r\n                <td>5258141235</td>\r\n                <td>xyz</td>\r\n                <td>hfj</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- // Basic form layout section end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/email/teacher/teacher.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/email/teacher/teacher.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"horizontal-form-layouts\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">All Teacher List</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content\">\r\n          <div class=\"px-3\">\r\n            <form\r\n              class=\"form form-horizontal\"\r\n              #newteacherForm=\"ngForm\"\r\n              novalidate\r\n            >\r\n              <div class=\"form-body\">\r\n                <h4 class=\"form-section\">\r\n                  <i class=\"ft-user\"></i> All Teacher List\r\n                </h4>\r\n\r\n                <label class=\"col-md-4 label-control\" for=\"projectinput\"\r\n                  >Select Email Template\r\n                </label>\r\n                <div class=\"col-md-12\">\r\n                  <!-- <fieldset class=\"form-group position-relative\"> -->\r\n                  <select\r\n                    class=\"form-control\"\r\n                    id=\"DefaultSelect\"\r\n                    placeholder=\"Select User Role\"\r\n                    name=\"etemplate\"\r\n                    required\r\n                  >\r\n                    <option value=\"Other\">Other</option>\r\n                  </select>\r\n                  <!-- <div\r\n                      class=\"danger\"\r\n                      *ngIf=\"\r\n                        etemplate.invalid &&\r\n                        (etemplate.dirty || etemplate.touched)\r\n                      \"\r\n                    >\r\n                      required field*\r\n                    </div> -->\r\n                  <!-- </fieldset> -->\r\n                </div>\r\n\r\n                <div class=\"col-md-12\" style=\"padding-top: 20px;\">\r\n                  <label class=\"label-control\" for=\"projectinput9\">Email</label>\r\n                  <br />\r\n                  <textarea\r\n                    id=\"projectinput9\"\r\n                    rows=\"2\"\r\n                    class=\"form-control\"\r\n                    name=\"remarks\"\r\n                    placeholder=\"Please select Mail Template or Type\"\r\n                  ></textarea>\r\n                </div>\r\n\r\n                <div class=\"col-md-12\" style=\"padding-top: 20px;\">\r\n                  <label class=\"label-control\" for=\"projectinput1\" required>\r\n                    Subject\r\n                    <i class=\"icon-envelope\"></i>\r\n                  </label>\r\n\r\n                  <input\r\n                    type=\"text\"\r\n                    id=\"projectinput1\"\r\n                    class=\"form-control\"\r\n                    placeholder=\"Enter Subject\"\r\n                    name=\"subject\"\r\n                    required\r\n                  />\r\n                </div>\r\n                <div class=\"form-actions center\" style=\"float: right;\">\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn btn-raised btn-info mr-1\"\r\n                    (click)=\"submit()\"\r\n                  >\r\n                    Send <i class=\"icon-paper-plane\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n\r\n          <table class=\"table table-responsive-md text-center\">\r\n            <thead>\r\n              <tr>\r\n                <th>\r\n                  <fieldset>\r\n                    <div class=\"input-group\">\r\n                      <!-- <span class=\"input-group-text\" id=\"checkbox-addon1\"> -->\r\n                      <input\r\n                        type=\"checkbox\"\r\n                        aria-label=\"Checkbox for following text input\"\r\n                        style=\"margin-top: 35px;\"\r\n                      />\r\n                      <!-- </span> -->\r\n                    </div>\r\n                  </fieldset>\r\n                </th>\r\n                <th>First Name</th>\r\n                <th>Teacher's Email</th>\r\n                <th>Phone</th>\r\n                <th>Address</th>\r\n                <th>Services</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>\r\n                  <fieldset>\r\n                    <div class=\"input-group\">\r\n                      <!-- <span class=\"input-group-text\" id=\"checkbox-addon1\"> -->\r\n                      <input\r\n                        type=\"checkbox\"\r\n                        aria-label=\"Checkbox for following text input\"\r\n                        style=\"margin-top:10px;\"\r\n                      />\r\n                      <!-- </span> -->\r\n                    </div>\r\n                  </fieldset>\r\n                </td>\r\n\r\n                <td>John</td>\r\n\r\n                <td>xyz@gmail.com</td>\r\n                <td>5258141235</td>\r\n                <td>xyz</td>\r\n                <td>hfj</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- // Basic form layout section end -->\r\n"

/***/ }),

/***/ "./src/app/email/email-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/email/email-routing.module.ts ***!
  \***********************************************/
/*! exports provided: EmailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailRoutingModule", function() { return EmailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _staffs_staffs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staffs/staffs.component */ "./src/app/email/staffs/staffs.component.ts");
/* harmony import */ var _enquiries_enquiries_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enquiries/enquiries.component */ "./src/app/email/enquiries/enquiries.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./student/student.component */ "./src/app/email/student/student.component.ts");
/* harmony import */ var _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teacher/teacher.component */ "./src/app/email/teacher/teacher.component.ts");







var routes = [
    {
        path: "",
        data: {
            title: "Email Process"
        }
    },
    {
        path: "student",
        component: _student_student_component__WEBPACK_IMPORTED_MODULE_5__["StudentComponent"]
    },
    {
        path: "teacher",
        component: _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_6__["TeacherComponent"]
    },
    {
        path: "enquries",
        component: _enquiries_enquiries_component__WEBPACK_IMPORTED_MODULE_4__["EnquiriesComponent"]
    },
    {
        path: "staffs",
        component: _staffs_staffs_component__WEBPACK_IMPORTED_MODULE_3__["StaffsComponent"]
    },
    {
        path: "template",
        loadChildren: function () {
            return Promise.all(/*! import() | template-template-module */[__webpack_require__.e("default~batch-batch-module~category-category-module~course-course-module~email-email-module~enquirie~b615e052"), __webpack_require__.e("default~email-email-module~template-template-module"), __webpack_require__.e("template-template-module")]).then(__webpack_require__.bind(null, /*! ./template/template.module */ "./src/app/email/template/template.module.ts")).then(function (m) { return m.TemplateModule; });
        }
    }
];
var EmailRoutingModule = /** @class */ (function () {
    function EmailRoutingModule() {
    }
    EmailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EmailRoutingModule);
    return EmailRoutingModule;
}());



/***/ }),

/***/ "./src/app/email/email.module.ts":
/*!***************************************!*\
  !*** ./src/app/email/email.module.ts ***!
  \***************************************/
/*! exports provided: EmailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailModule", function() { return EmailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _email_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email-routing.module */ "./src/app/email/email-routing.module.ts");
/* harmony import */ var _template_template_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./template/template.module */ "./src/app/email/template/template.module.ts");
/* harmony import */ var _enquiries_enquiries_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./enquiries/enquiries.component */ "./src/app/email/enquiries/enquiries.component.ts");
/* harmony import */ var _staffs_staffs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./staffs/staffs.component */ "./src/app/email/staffs/staffs.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./student/student.component */ "./src/app/email/student/student.component.ts");
/* harmony import */ var _email_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../email/teacher/teacher.component */ "./src/app/email/teacher/teacher.component.ts");












var EmailModule = /** @class */ (function () {
    function EmailModule() {
    }
    EmailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _email_routing_module__WEBPACK_IMPORTED_MODULE_6__["EmailRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _template_template_module__WEBPACK_IMPORTED_MODULE_7__["TemplateModule"]
            ],
            declarations: [
                _staffs_staffs_component__WEBPACK_IMPORTED_MODULE_9__["StaffsComponent"],
                _enquiries_enquiries_component__WEBPACK_IMPORTED_MODULE_8__["EnquiriesComponent"],
                _student_student_component__WEBPACK_IMPORTED_MODULE_10__["StudentComponent"],
                _email_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_11__["TeacherComponent"]
            ],
            providers: []
        })
    ], EmailModule);
    return EmailModule;
}());



/***/ }),

/***/ "./src/app/email/enquiries/enquiries.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/email/enquiries/enquiries.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtYWlsL2VucXVpcmllcy9lbnF1aXJpZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/email/enquiries/enquiries.component.ts":
/*!********************************************************!*\
  !*** ./src/app/email/enquiries/enquiries.component.ts ***!
  \********************************************************/
/*! exports provided: EnquiriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquiriesComponent", function() { return EnquiriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EnquiriesComponent = /** @class */ (function () {
    function EnquiriesComponent() {
    }
    EnquiriesComponent.prototype.ngOnInit = function () { };
    EnquiriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-enquiries",
            template: __webpack_require__(/*! raw-loader!./enquiries.component.html */ "./node_modules/raw-loader/index.js!./src/app/email/enquiries/enquiries.component.html"),
            styles: [__webpack_require__(/*! ./enquiries.component.scss */ "./src/app/email/enquiries/enquiries.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EnquiriesComponent);
    return EnquiriesComponent;
}());



/***/ }),

/***/ "./src/app/email/staffs/staffs.component.scss":
/*!****************************************************!*\
  !*** ./src/app/email/staffs/staffs.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtYWlsL3N0YWZmcy9zdGFmZnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/email/staffs/staffs.component.ts":
/*!**************************************************!*\
  !*** ./src/app/email/staffs/staffs.component.ts ***!
  \**************************************************/
/*! exports provided: StaffsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffsComponent", function() { return StaffsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StaffsComponent = /** @class */ (function () {
    function StaffsComponent() {
    }
    StaffsComponent.prototype.ngOnInit = function () { };
    StaffsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-staffs",
            template: __webpack_require__(/*! raw-loader!./staffs.component.html */ "./node_modules/raw-loader/index.js!./src/app/email/staffs/staffs.component.html"),
            styles: [__webpack_require__(/*! ./staffs.component.scss */ "./src/app/email/staffs/staffs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StaffsComponent);
    return StaffsComponent;
}());



/***/ }),

/***/ "./src/app/email/student/student.component.scss":
/*!******************************************************!*\
  !*** ./src/app/email/student/student.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtYWlsL3N0dWRlbnQvc3R1ZGVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/email/student/student.component.ts":
/*!****************************************************!*\
  !*** ./src/app/email/student/student.component.ts ***!
  \****************************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StudentComponent = /** @class */ (function () {
    function StudentComponent() {
    }
    StudentComponent.prototype.ngOnInit = function () { };
    StudentComponent.prototype.submit = function () { };
    StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-student",
            template: __webpack_require__(/*! raw-loader!./student.component.html */ "./node_modules/raw-loader/index.js!./src/app/email/student/student.component.html"),
            styles: [__webpack_require__(/*! ./student.component.scss */ "./src/app/email/student/student.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StudentComponent);
    return StudentComponent;
}());



/***/ }),

/***/ "./src/app/email/teacher/teacher.component.scss":
/*!******************************************************!*\
  !*** ./src/app/email/teacher/teacher.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtYWlsL3RlYWNoZXIvdGVhY2hlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/email/teacher/teacher.component.ts":
/*!****************************************************!*\
  !*** ./src/app/email/teacher/teacher.component.ts ***!
  \****************************************************/
/*! exports provided: TeacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherComponent", function() { return TeacherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TeacherComponent = /** @class */ (function () {
    function TeacherComponent() {
    }
    TeacherComponent.prototype.ngOnInit = function () { };
    TeacherComponent.prototype.submit = function () { };
    TeacherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-teacher",
            template: __webpack_require__(/*! raw-loader!./teacher.component.html */ "./node_modules/raw-loader/index.js!./src/app/email/teacher/teacher.component.html"),
            styles: [__webpack_require__(/*! ./teacher.component.scss */ "./src/app/email/teacher/teacher.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TeacherComponent);
    return TeacherComponent;
}());



/***/ })

}]);
//# sourceMappingURL=email-email-module-es5.js.map