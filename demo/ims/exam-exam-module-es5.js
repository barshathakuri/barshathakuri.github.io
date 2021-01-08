(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["exam-exam-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/exam/add-exam/add-exam.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/exam/add-exam/add-exam.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\n<section id=\"horizontal-form-layouts\">\n  <div class=\"row text-left\">\n    <div class=\"col-sm-12\">\n      <div class=\"content-header\">Add New Exam</div>\n    </div>\n  </div>\n  <div class=\"row text-left\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <div class=\"px-3\">\n            <form class=\"form form-horizontal\" #newexamForm=\"ngForm\" novalidate>\n              <div class=\"form-body\">\n                <h4 class=\"form-section\">\n                  <i class=\"ft-exam\"></i> New Exam Details\n                </h4>\n\n                <div class=\"form-group row\">\n                  <label\n                    class=\"col-md-3 label-control\"\n                    for=\"projectinput1\"\n                    required\n                    >Exam Name\n                  </label>\n                  <div class=\"col-md-9\">\n                    <input\n                      type=\"text\"\n                      id=\"projectinput1\"\n                      class=\"form-control\"\n                      placeholder=\"Please select Exam name\"\n                      name=\"examname\"\n                      [(ngModel)]=\"newexam.examname\"\n                      #examname=\"ngModel\"\n                      required\n                    />\n                    <div\n                      class=\"danger\"\n                      *ngIf=\"\n                        examname.invalid && (examname.dirty || examname.touched)\n                      \"\n                    >\n                      required field*\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3 label-control\" for=\"projectinput\"\n                    >Select Course\n                  </label>\n                  <div class=\"col-md-9\">\n                    <!-- <fieldset class=\"form-group position-relative\"> -->\n                    <select\n                      class=\"form-control\"\n                      id=\"DefaultSelect\"\n                      placeholder=\"Please Select Course\"\n                      name=\"course\"\n                      [(ngModel)]=\"newexam.course\"\n                      #course=\"ngModel\"\n                      required\n                    >\n                      <option></option>\n                    </select>\n                    <div\n                      class=\"danger\"\n                      *ngIf=\"course.invalid && (course.dirty || course.touched)\"\n                    >\n                      required field*\n                    </div>\n                    <!-- </fieldset> -->\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label\n                    class=\"col-md-3 label-control\"\n                    for=\"projectinput3\"\n                    required\n                    >Date of Exam</label\n                  >\n                  <div class=\"col-md-9\">\n                    <input\n                      type=\"date\"\n                      id=\"projectinput3\"\n                      class=\"form-control\"\n                      placeholder=\"E-mail\"\n                      name=\"date\"\n                      [(ngModel)]=\"newexam.date\"\n                      #date=\"ngModel\"\n                      required\n                    />\n                  </div>\n                  <div\n                    class=\"dangernew\"\n                    *ngIf=\"date.invalid && (date.dirty || date.touched)\"\n                  >\n                    <div *ngIf=\"date.errors.required\">\n                      required field*\n                    </div>\n                    <div *ngIf=\"date.errors.date\">\n                      invalid date\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-actions center\">\n                <button\n                  [disabled]=\"newexamForm.invalid\"\n                  type=\"button\"\n                  class=\"btn btn-raised btn-info mr-1\"\n                  (click)=\"submit()\"\n                >\n                  <i class=\"ft ft-exam-check\"></i> Schedule Exam\n                </button>\n                <button\n                  type=\"button\"\n                  class=\"btn btn-raised btn-success\"\n                  routerLink=\"/exam\"\n                >\n                  <i class=\"ft ft-x\"></i> View All\n                </button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- // Basic form layout section end -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/exam/edit-exam/edit-exam.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/exam/edit-exam/edit-exam.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\n<section id=\"horizontal-form-layouts\">\n  <div class=\"row text-left\">\n    <div class=\"col-sm-12\">\n      <div class=\"content-header\">Edit Exam</div>\n    </div>\n  </div>\n  <div class=\"row text-left\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <div class=\"px-3\">\n            <form class=\"form form-horizontal\" #newexamForm=\"ngForm\" novalidate>\n              <div class=\"form-body\">\n                <h4 class=\"form-section\">\n                  <i class=\"ft-exam\"></i> Edit Exam Details\n                </h4>\n\n                <div class=\"form-group row\">\n                  <label\n                    class=\"col-md-3 label-control\"\n                    for=\"projectinput1\"\n                    required\n                    >Exam Name\n                  </label>\n                  <div class=\"col-md-9\">\n                    <input\n                      type=\"text\"\n                      id=\"projectinput1\"\n                      class=\"form-control\"\n                      placeholder=\"Please select Exam name\"\n                      name=\"examname\"\n                      [(ngModel)]=\"newexam.examname\"\n                      #examname=\"ngModel\"\n                      required\n                    />\n                    <div\n                      class=\"danger\"\n                      *ngIf=\"\n                        examname.invalid && (examname.dirty || examname.touched)\n                      \"\n                    >\n                      required field*\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3 label-control\" for=\"projectinput\"\n                    >Select Course\n                  </label>\n                  <div class=\"col-md-9\">\n                    <!-- <fieldset class=\"form-group position-relative\"> -->\n                    <select\n                      class=\"form-control\"\n                      id=\"DefaultSelect\"\n                      placeholder=\"Please Select Course\"\n                      name=\"course\"\n                      [(ngModel)]=\"newexam.course\"\n                      #course=\"ngModel\"\n                      required\n                    >\n                      <option></option>\n                    </select>\n                    <div\n                      class=\"danger\"\n                      *ngIf=\"course.invalid && (course.dirty || course.touched)\"\n                    >\n                      required field*\n                    </div>\n                    <!-- </fieldset> -->\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label\n                    class=\"col-md-3 label-control\"\n                    for=\"projectinput3\"\n                    required\n                    >Date of Exam</label\n                  >\n                  <div class=\"col-md-9\">\n                    <input\n                      type=\"date\"\n                      id=\"projectinput3\"\n                      class=\"form-control\"\n                      placeholder=\"E-mail\"\n                      name=\"date\"\n                      [(ngModel)]=\"newexam.date\"\n                      #date=\"ngModel\"\n                      required\n                    />\n                  </div>\n                  <div\n                    class=\"dangernew\"\n                    *ngIf=\"date.invalid && (date.dirty || date.touched)\"\n                  >\n                    <div *ngIf=\"date.errors.required\">\n                      required field*\n                    </div>\n                    <div *ngIf=\"date.errors.date\">\n                      invalid date\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-actions center\">\n                <button\n                  [disabled]=\"newexamForm.invalid\"\n                  type=\"button\"\n                  class=\"btn btn-raised btn-info mr-1\"\n                  (click)=\"upadte()\"\n                >\n                  <i class=\"ft ft-exam-check\"></i> Schedule Exam\n                </button>\n                <button\n                  type=\"button\"\n                  class=\"btn btn-raised btn-success\"\n                  routerLink=\"/exam\"\n                >\n                  <i class=\"ft ft-x\"></i> View All\n                </button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- // Basic form layout section end -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/exam/exam.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/exam/exam.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"extended\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">All Exam List</h4>\r\n        </div>\r\n        <!-- <fieldset disabled>\r\n              <a href=\"javascript:void(0)\" class=\"btn btn-raised mr-1 btn-primary\">Add New</a>\r\n          </fieldset> -->\r\n        <div\r\n          class=\"form-actions\"\r\n          style=\"margin-left: 30px; padding-top: 20px; margin-bottom: -30px;\"\r\n        >\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-raised btn-info mr-1\"\r\n            routerLink=\"add\"\r\n            routerLinkActive=\"active\"\r\n          >\r\n            Add New\r\n            <i class=\"fonticon-wrap\" class=\"icon-exam-follow\"></i>\r\n          </button>\r\n\r\n          <button type=\"button\" class=\"btn btn-raised btn-warning\">\r\n            Trashed Exam\r\n            <i class=\"fonticon-wrap\" class=\"icon-eye\"></i>\r\n          </button>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-raised btn-info\"\r\n            style=\"float: right; margin-right: 30px;\"\r\n          >\r\n            Print\r\n            <i class=\"fonticon-wrap\" class=\"fa fa-print\"></i>\r\n          </button>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-raised btn-success\"\r\n            style=\"float: right; margin-right: 10px;\"\r\n          >\r\n            Save as PDF\r\n            <i class=\"fonticon-wrap\" class=\" fa fa-file-o\"></i>\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <table class=\"table table-responsive-md text-center\">\r\n              <thead>\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>Exams Name</th>\r\n                  <th>Course</th>\r\n                  <th>Exams Date</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <td\r\n                  colspan=\"5\"\r\n                  style=\"text-align: center;\"\r\n                  *ngIf=\"!examList.length\"\r\n                >\r\n                  <h2>No data in database</h2>\r\n                </td>\r\n\r\n                <tr *ngFor=\"let exam of examList; let i = index\">\r\n                  <!-- <td><img class=\"media-object round-media\" src=\"{{exam.photo}}\" alt=\"Generic placeholder image\"\r\n                        style=\"height: 45px;\" /></td> -->\r\n                  <td>{{ i + 1 }}</td>\r\n                  <!-- <td>\r\n                      <div class=\"custom-control custom-checkbox m-0\">\r\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"item1\">\r\n                        <label class=\"custom-control-label col-form-label\" for=\"item1\"></label>\r\n                      </div>\r\n                    </td> -->\r\n                  <td>{{ exam.examname }}</td>\r\n                  <td>{{ exam.course }}</td>\r\n                  <td>{{ exam.date }}</td>\r\n                  <td>\r\n                    <div class=\"floating-btn\">\r\n                      <a\r\n                        (click)=\"edit(exam._id)\"\r\n                        class=\"btn btn-warning mr-1 btn-fab\"\r\n                        ><i class=\"icon-pencil\"></i\r\n                      ></a>\r\n                      <a\r\n                        (click)=\"delete(exam._id)\"\r\n                        class=\"btn btn-danger mr-1 btn-fab\"\r\n                        ><i class=\"icon-trash\"></i\r\n                      ></a>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/exam/report/report.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/exam/report/report.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"extended\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Exam : PHP Advanced (Laravel)</h4>\r\n        </div>\r\n        <!-- <fieldset disabled>\r\n              <a href=\"javascript:void(0)\" class=\"btn btn-raised mr-1 btn-primary\">Add New</a>\r\n          </fieldset> -->\r\n        <div\r\n          class=\"form-actions\"\r\n          style=\"margin-left: 30px; padding-top: 20px; margin-bottom: -30px;\"\r\n        ></div>\r\n\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <table class=\"table table-responsive-md text-center\">\r\n              <thead>\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>Students Name</th>\r\n                  <th>Result</th>\r\n                  <th>Edit</th>\r\n                </tr>\r\n              </thead>\r\n              <!-- <tbody>\r\n                <td\r\n                  colspan=\"4\"\r\n                  style=\"text-align: center;\"\r\n                  *ngIf=\"!examList.length\"\r\n                >\r\n                  <h2>No data in database</h2>\r\n                </td>\r\n\r\n                  <td>{{ exam.examname }}</td>\r\n                  <td>{{ exam.course }}</td>\r\n                  <td>{{ exam.date }}</td>\r\n         \r\n                </tr>\r\n              </tbody> -->\r\n            </table>\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-raised btn-info\"\r\n              style=\"float: right; margin-right: 30px;\"\r\n            >\r\n              Submit\r\n              <i class=\"fonticon-wrap\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/exam/view/view.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/exam/view/view.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"extended\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">All Examinee List</div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Exam : PHP Advanced (Laravel)</h4>\r\n        </div>\r\n        <!-- <fieldset disabled>\r\n              <a href=\"javascript:void(0)\" class=\"btn btn-raised mr-1 btn-primary\">Add New</a>\r\n          </fieldset> -->\r\n        <div\r\n          class=\"form-actions\"\r\n          style=\"margin-left: 30px; padding-top: 20px; margin-bottom: -30px;\"\r\n        >\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-raised btn-info\"\r\n            style=\"float: right; margin-right: 30px;\"\r\n          >\r\n            Report\r\n            <i class=\"fonticon-wrap\"></i>\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <table class=\"table table-responsive-md text-center\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Students Name</th>\r\n                  <th>Result</th>\r\n                  <th>Remarks</th>\r\n                </tr>\r\n              </thead>\r\n              <!-- <tbody>\r\n                <td\r\n                  colspan=\"4\"\r\n                  style=\"text-align: center;\"\r\n                  *ngIf=\"!examList.length\"\r\n                >\r\n                  <h2>No data in database</h2>\r\n                </td>\r\n\r\n                  <td>{{ exam.examname }}</td>\r\n                  <td>{{ exam.course }}</td>\r\n                  <td>{{ exam.date }}</td>\r\n         \r\n                </tr>\r\n              </tbody> -->\r\n            </table>\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-raised btn-info\"\r\n              style=\"float: right; margin-right: 30px;\"\r\n            >\r\n              Submit\r\n              <i class=\"fonticon-wrap\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/exam/add-exam/add-exam.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/exam/add-exam/add-exam.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".danger {\n  color: red; }\n\n.dangernew {\n  color: red;\n  margin-left: 26%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhhbS9hZGQtZXhhbS9EOlxcd29ya1xcSU1TL3NyY1xcYXBwXFxleGFtXFxhZGQtZXhhbVxcYWRkLWV4YW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxVQUFVO0VBQ1YsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9leGFtL2FkZC1leGFtL2FkZC1leGFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhbmdlcntcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuLmRhbmdlcm5ld3tcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjYlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/exam/add-exam/add-exam.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/exam/add-exam/add-exam.component.ts ***!
  \*****************************************************/
/*! exports provided: AddExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddExamComponent", function() { return AddExamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_exam_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/exam.services */ "./src/app/exam/services/exam.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_shared_models_exam_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/models/exam.model */ "./src/app/shared/models/exam.model.ts");






var AddExamComponent = /** @class */ (function () {
    function AddExamComponent(examervice, router, activeRouter) {
        this.examervice = examervice;
        this.router = router;
        this.activeRouter = activeRouter;
        this.newexam = new app_shared_models_exam_model__WEBPACK_IMPORTED_MODULE_5__["Exam"]({});
    }
    AddExamComponent.prototype.ngOnInit = function () { };
    AddExamComponent.prototype.submit = function () {
        var _this = this;
        console.log("Submitted>>>>>>>>>", this.newexam);
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a
            .fire({
            title: "Do you want to add the exam ?",
            text: "New exam will be added in Exam List",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Add"
        })
            .then(function (result) {
            if (result.value) {
                //dev
                _this.examervice.addExam(_this.newexam).subscribe(function (data) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Add!", "Exam has been added.", "success");
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
    AddExamComponent.ctorParameters = function () { return [
        { type: _services_exam_services__WEBPACK_IMPORTED_MODULE_2__["ExamService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    AddExamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-add-exam",
            template: __webpack_require__(/*! raw-loader!./add-exam.component.html */ "./node_modules/raw-loader/index.js!./src/app/exam/add-exam/add-exam.component.html"),
            styles: [__webpack_require__(/*! ./add-exam.component.scss */ "./src/app/exam/add-exam/add-exam.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_exam_services__WEBPACK_IMPORTED_MODULE_2__["ExamService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AddExamComponent);
    return AddExamComponent;
}());



/***/ }),

/***/ "./src/app/exam/edit-exam/edit-exam.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/exam/edit-exam/edit-exam.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW0vZWRpdC1leGFtL2VkaXQtZXhhbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/exam/edit-exam/edit-exam.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/exam/edit-exam/edit-exam.component.ts ***!
  \*******************************************************/
/*! exports provided: EditExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditExamComponent", function() { return EditExamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_exam_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/exam.services */ "./src/app/exam/services/exam.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_shared_models_exam_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/models/exam.model */ "./src/app/shared/models/exam.model.ts");






var EditExamComponent = /** @class */ (function () {
    function EditExamComponent(examervice, router, activeRouter) {
        this.examervice = examervice;
        this.router = router;
        this.activeRouter = activeRouter;
        this.updatedExam = new app_shared_models_exam_model__WEBPACK_IMPORTED_MODULE_5__["Exam"]({});
        this.examid = this.activeRouter.snapshot.params["id"];
    }
    EditExamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.examervice.getExamById(this.examid).subscribe(function (data) {
            console.log("examlist>>", data);
            _this.updatedExam = data.data;
        }, function (error) {
            console.log("cant fetch");
        });
    };
    EditExamComponent.prototype.update = function () {
        var _this = this;
        console.log("Submitted>>>>>>>>>", this.updatedExam);
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a
            .fire({
            title: "Do you want to edit the exam details ?",
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
                _this.examervice.editExam(_this.updatedExam).subscribe(function (data) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Edit!", "Exam has been edited.", "success");
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
    EditExamComponent.ctorParameters = function () { return [
        { type: _services_exam_services__WEBPACK_IMPORTED_MODULE_2__["ExamService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    EditExamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-edit-exam",
            template: __webpack_require__(/*! raw-loader!./edit-exam.component.html */ "./node_modules/raw-loader/index.js!./src/app/exam/edit-exam/edit-exam.component.html"),
            styles: [__webpack_require__(/*! ./edit-exam.component.scss */ "./src/app/exam/edit-exam/edit-exam.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_exam_services__WEBPACK_IMPORTED_MODULE_2__["ExamService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditExamComponent);
    return EditExamComponent;
}());



/***/ }),

/***/ "./src/app/exam/exam-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/exam/exam-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ExamRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamRoutingModule", function() { return ExamRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _exam_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exam.component */ "./src/app/exam/exam.component.ts");
/* harmony import */ var _add_exam_add_exam_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-exam/add-exam.component */ "./src/app/exam/add-exam/add-exam.component.ts");
/* harmony import */ var _edit_exam_edit_exam_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-exam/edit-exam.component */ "./src/app/exam/edit-exam/edit-exam.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/view.component */ "./src/app/exam/view/view.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./report/report.component */ "./src/app/exam/report/report.component.ts");








var routes = [
    {
        path: "",
        component: _exam_component__WEBPACK_IMPORTED_MODULE_3__["ExamComponent"],
        data: {
            title: "Exam"
        }
    },
    {
        path: "add",
        component: _add_exam_add_exam_component__WEBPACK_IMPORTED_MODULE_4__["AddExamComponent"],
        data: {
            title: "Add Exam"
        }
    },
    {
        path: "edit/:id",
        component: _edit_exam_edit_exam_component__WEBPACK_IMPORTED_MODULE_5__["EditExamComponent"],
        data: {
            title: "Edit Exam"
        }
    },
    {
        path: "view",
        component: _view_view_component__WEBPACK_IMPORTED_MODULE_6__["ViewComponent"],
        data: {
            title: "View Exam"
        }
    },
    {
        path: "report",
        component: _report_report_component__WEBPACK_IMPORTED_MODULE_7__["ReportComponent"],
        data: {
            title: "View Reports"
        }
    }
];
var ExamRoutingModule = /** @class */ (function () {
    function ExamRoutingModule() {
    }
    ExamRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ExamRoutingModule);
    return ExamRoutingModule;
}());



/***/ }),

/***/ "./src/app/exam/exam.component.scss":
/*!******************************************!*\
  !*** ./src/app/exam/exam.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW0vZXhhbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/exam/exam.component.ts":
/*!****************************************!*\
  !*** ./src/app/exam/exam.component.ts ***!
  \****************************************/
/*! exports provided: ExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamComponent", function() { return ExamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_exam_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/exam.services */ "./src/app/exam/services/exam.services.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var ExamComponent = /** @class */ (function () {
    function ExamComponent(examservice, router) {
        this.examservice = examservice;
        this.router = router;
        this.examList = [];
    }
    ExamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.examservice.getExam().subscribe(function (data) {
            console.log("examlist>>", data);
            _this.examList = data.data;
        }, function (error) {
            console.log("cant fetch");
        });
    };
    ExamComponent.prototype.edit = function (id) {
        console.log("exam id>>", id);
        this.router.navigate(["exam/edit/" + id]);
    };
    ExamComponent.prototype.delete = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a
            .fire({
            title: "Do you want to delete the exam ?",
            text: "You won't be able to revert the deleted exam",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        })
            .then(function (result) {
            if (result.value) {
                //dev
                _this.examservice.deleteExam(id).subscribe(function (data) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Deleted!", "Exam has been deleted.", "success");
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
    ExamComponent.ctorParameters = function () { return [
        { type: _services_exam_services__WEBPACK_IMPORTED_MODULE_3__["ExamService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ExamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-exam",
            template: __webpack_require__(/*! raw-loader!./exam.component.html */ "./node_modules/raw-loader/index.js!./src/app/exam/exam.component.html"),
            styles: [__webpack_require__(/*! ./exam.component.scss */ "./src/app/exam/exam.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_exam_services__WEBPACK_IMPORTED_MODULE_3__["ExamService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ExamComponent);
    return ExamComponent;
}());



/***/ }),

/***/ "./src/app/exam/exam.module.ts":
/*!*************************************!*\
  !*** ./src/app/exam/exam.module.ts ***!
  \*************************************/
/*! exports provided: ExamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamModule", function() { return ExamModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _exam_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exam-routing.module */ "./src/app/exam/exam-routing.module.ts");
/* harmony import */ var _exam_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exam.component */ "./src/app/exam/exam.component.ts");
/* harmony import */ var _add_exam_add_exam_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-exam/add-exam.component */ "./src/app/exam/add-exam/add-exam.component.ts");
/* harmony import */ var _edit_exam_edit_exam_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-exam/edit-exam.component */ "./src/app/exam/edit-exam/edit-exam.component.ts");
/* harmony import */ var _services_exam_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/exam.services */ "./src/app/exam/services/exam.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view/view.component */ "./src/app/exam/view/view.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./report/report.component */ "./src/app/exam/report/report.component.ts");













var ExamModule = /** @class */ (function () {
    function ExamModule() {
    }
    ExamModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _exam_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExamRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]
            ],
            declarations: [
                _exam_component__WEBPACK_IMPORTED_MODULE_6__["ExamComponent"],
                _add_exam_add_exam_component__WEBPACK_IMPORTED_MODULE_7__["AddExamComponent"],
                _edit_exam_edit_exam_component__WEBPACK_IMPORTED_MODULE_8__["EditExamComponent"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_11__["ViewComponent"],
                _report_report_component__WEBPACK_IMPORTED_MODULE_12__["ReportComponent"]
            ],
            providers: [_services_exam_services__WEBPACK_IMPORTED_MODULE_9__["ExamService"]]
        })
    ], ExamModule);
    return ExamModule;
}());



/***/ }),

/***/ "./src/app/exam/report/report.component.scss":
/*!***************************************************!*\
  !*** ./src/app/exam/report/report.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW0vcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/exam/report/report.component.ts":
/*!*************************************************!*\
  !*** ./src/app/exam/report/report.component.ts ***!
  \*************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReportComponent = /** @class */ (function () {
    function ReportComponent() {
    }
    ReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-report",
            template: __webpack_require__(/*! raw-loader!./report.component.html */ "./node_modules/raw-loader/index.js!./src/app/exam/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.scss */ "./src/app/exam/report/report.component.scss")]
        })
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/exam/services/exam.services.ts":
/*!************************************************!*\
  !*** ./src/app/exam/services/exam.services.ts ***!
  \************************************************/
/*! exports provided: ExamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamService", function() { return ExamService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/services/base.service */ "./src/app/shared/services/base.service.ts");




// import { Exam } from "app/shared/models/exam.model";
var ExamService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExamService, _super);
    function ExamService(http) {
        var _this = _super.call(this, "exam") || this;
        _this.http = http;
        return _this;
    }
    ExamService.prototype.getExam = function () {
        return this.http.get(this.url, this.getOptions());
    };
    ExamService.prototype.getExamById = function (id) {
        return this.http.get(this.url + id, this.getOptions());
    };
    ExamService.prototype.editExam = function (data) {
        return this.http.put(this.url + data._id, { data: data }, this.getOptions());
    };
    ExamService.prototype.deleteExam = function (id) {
        return this.http.delete(this.url + id);
    };
    ExamService.prototype.addExam = function (data) {
        console.log("url>>", this.url);
        console.log("data>>", data);
        return this.http.post(this.url, { data: data }, this.getOptions());
    };
    ExamService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ExamService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ExamService);
    return ExamService;
}(_shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/exam/view/view.component.scss":
/*!***********************************************!*\
  !*** ./src/app/exam/view/view.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW0vdmlldy92aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/exam/view/view.component.ts":
/*!*********************************************!*\
  !*** ./src/app/exam/view/view.component.ts ***!
  \*********************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ViewComponent = /** @class */ (function () {
    function ViewComponent() {
    }
    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-view",
            template: __webpack_require__(/*! raw-loader!./view.component.html */ "./node_modules/raw-loader/index.js!./src/app/exam/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.scss */ "./src/app/exam/view/view.component.scss")]
        })
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/exam.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/exam.model.ts ***!
  \*********************************************/
/*! exports provided: Exam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exam", function() { return Exam; });
var Exam = /** @class */ (function () {
    function Exam(examInfo) {
        // this._id = userInfo._id || '';
        this.fname = examInfo.fname || "";
        this.role = examInfo.role || "";
        this.email = examInfo.email || "";
        this.address = examInfo.address || "";
        this.phone = examInfo.phone || "";
        this.photo = examInfo.photo || "";
    }
    Exam.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return Exam;
}());



/***/ })

}]);
//# sourceMappingURL=exam-exam-module-es5.js.map