(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hr-hr-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/hr/hr.component.html":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/hr/hr.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Hr process works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/hr/report/report.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/hr/report/report.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"horizontal-form-layouts\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Attendance Report</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content\">\r\n          <div class=\"px-3\">\r\n            <form\r\n              class=\"form form-horizontal\"\r\n              #newreportForm=\"ngForm\"\r\n              novalidate\r\n            >\r\n              <div class=\"form-body\">\r\n                <h4 class=\"form-section\">\r\n                  <i class=\"ft-report\"></i> Date Today:\r\n                </h4>\r\n\r\n                <div class=\"form-group row\">\r\n                  <div class=\"col-md-4\">\r\n                    <label class=\"label-control\" for=\"projectinput\"\r\n                      >Date\r\n                    </label>\r\n                    <input\r\n                      type=\"date\"\r\n                      class=\"form-control\"\r\n                      id=\"DefaultSelect\"\r\n                      placeholder=\"Select date\"\r\n                      name=\"date\"\r\n                      [(ngModel)]=\"newreport.date\"\r\n                      #date=\"ngModel\"\r\n                      required\r\n                    />\r\n                  </div>\r\n\r\n                  <div class=\"col-md-4\">\r\n                    <label class=\"label-control\" for=\"projectinput\"\r\n                      >User Type\r\n                    </label>\r\n                    <select\r\n                      class=\"form-control\"\r\n                      id=\"DefaultSelect\"\r\n                      placeholder=\" Select a User Type\"\r\n                      name=\"type\"\r\n                      [(ngModel)]=\"newreport.type\"\r\n                      #type=\"ngModel\"\r\n                      required\r\n                    >\r\n                      <option value=\"Report\">Staff</option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <button\r\n                      type=\"button\"\r\n                      style=\"margin: 30px 40px;\"\r\n                      class=\"btn btn-raised btn-info mr-1\"\r\n                      (click)=\"generate()\"\r\n                    >\r\n                      <i class=\"ft ft-report-check\"></i> Generate Report\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n\r\n                <div\r\n                  class=\"form-group row\"\r\n                  *ngFor=\"let staff of staffList; index as i\"\r\n                >\r\n                  <div class=\"col-md-4\">\r\n                    <label class=\"label-control\" for=\"projectinput\"\r\n                      >Date\r\n                    </label>\r\n                    {{ staff.date }}\r\n                  </div>\r\n\r\n                  <div class=\"col-md-4\">\r\n                    <label class=\"label-control\" for=\"projectinput\"\r\n                      >Name\r\n                    </label>\r\n                    {{ staff.name }}\r\n                  </div>\r\n\r\n                  <div class=\"col-md-4\">\r\n                    <button\r\n                      type=\"button\"\r\n                      style=\"margin: 30px 40px;\"\r\n                      class=\"btn btn-raised btn-info mr-1\"\r\n                    >\r\n                      <i class=\"ft ft-report-check\"></i> Generate Report\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- // Basic form layout section end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/hr/staff/staff.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/hr/staff/staff.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"horizontal-form-layouts\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Attendance Details</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content\">\r\n          <div class=\"px-3\">\r\n            <div class=\"staff\">\r\n              <div class=\"form-body\">\r\n                <h4 class=\"form-section\">\r\n                  <i class=\"ft-staff\"></i> <b>Today's Date:</b>\r\n                  {{ this.datePipe.transform(this.date, \"mediumDate\") }}\r\n                </h4>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-2 label-control\" required\r\n                    ><b>DATE:</b>\r\n                  </label>\r\n                  <div class=\"col-md-4\">\r\n                    <input\r\n                      type=\"date\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Date \"\r\n                      name=\"dates\"\r\n                      [(ngModel)]=\"date\"\r\n                      required\r\n                    />\r\n                  </div>\r\n\r\n                  <div class=\"col-md-4\">\r\n                    <button\r\n                      type=\"button\"\r\n                      class=\"btn btn-outline-success mr-1\"\r\n                      (click)=\"selectDate()\"\r\n                    >\r\n                      <i class=\"ft ft-report-check\"></i> Select Date\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!--Pills Starts-->\r\n      <div class=\"col-md-12 col-lg-12\">\r\n        <ngb-tabset type=\"pills\">\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle><b>Check </b>In </ng-template>\r\n            <ng-template ngbTabContent>\r\n              <div class=\"card\">\r\n                <div class=\"card-content\">\r\n                  <div class=\"card-body\">\r\n                    <div\r\n                      class=\"form-group row\"\r\n                      *ngFor=\"let staff of staffList; index as i\"\r\n                    >\r\n                      <div class=\"col-md-4\">\r\n                        <label class=\"label-control\" for=\"projectinput\">\r\n                        </label>\r\n                        {{ staff.f_name }}\r\n                      </div>\r\n\r\n                      <div class=\"col-md-4\">\r\n                        <label class=\"label-control\" for=\"projectinput\"\r\n                          >Time\r\n                        </label>\r\n                        <input\r\n                          type=\"time\"\r\n                          class=\"form-control\"\r\n                          name=\"checkin{{ i }}\"\r\n                          [(ngModel)]=\"staff.checkin\"\r\n                          #checkInTime=\"ngModel\"\r\n                          value=\"10:00:00\"\r\n                          required\r\n                        />\r\n                      </div>\r\n                      <div class=\"col-md-4\">\r\n                        <button\r\n                          type=\"button\"\r\n                          style=\"margin: 30px 40px;\"\r\n                          [disabled]=\"staff.status\"\r\n                          class=\"btn btn-raised btn-info mr-1\"\r\n                          (click)=\"in(staff._id, staff.checkin, staff.f_name)\"\r\n                        >\r\n                          <i class=\"ft ft-report-check\"></i> Check In\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle><b>Check</b> out</ng-template>\r\n            <ng-template ngbTabContent>\r\n              <div class=\"card\">\r\n                <div class=\"card-content\">\r\n                  <div class=\"card-body\">\r\n                    <div\r\n                      class=\"form-group row\"\r\n                      *ngFor=\"let checkedIn of checkedInList; index as i\"\r\n                    >\r\n                      <div class=\"col-md-3\">\r\n                        <label class=\"label-control\" for=\"projectinput\">\r\n                        </label>\r\n                        {{ checkedIn.user_name }}\r\n                      </div>\r\n\r\n                      <div class=\"col-md-3\">\r\n                        <label class=\"label-control\" for=\"projectinput\">\r\n                          Checked In\r\n                        </label>\r\n                        {{ checkedIn.check_in }}\r\n                      </div>\r\n\r\n                      <div class=\"col-md-3\">\r\n                        <label class=\"label-control\" for=\"projectinput\"\r\n                          >Time\r\n                        </label>\r\n                        <input\r\n                          type=\"time\"\r\n                          class=\"form-control\"\r\n                          placeholder=\"Select Time\"\r\n                          name=\"checkout{{ i }}\"\r\n                          [(ngModel)]=\"checkedIn.checkout\"\r\n                          required\r\n                        />\r\n                      </div>\r\n                      <div class=\"col-md-3\">\r\n                        <button\r\n                          type=\"button\"\r\n                          style=\"margin: 30px 40px;\"\r\n                          class=\"btn btn-raised btn-info mr-1\"\r\n                          (click)=\"out(checkedIn._id, checkedIn.checkout)\"\r\n                        >\r\n                          <i class=\"ft ft-report-check\"></i> Check Out\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n        </ngb-tabset>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- // Basic form layout section end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/hr/student/student.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/hr/student/student.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"horizontal-form-layouts\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Attendance Details</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content\">\r\n          <div class=\"px-3\">\r\n            <div class=\"student\">\r\n              <div class=\"form-body\">\r\n                <h4 class=\"form-section\">\r\n                  <i class=\"ft-student\"></i> <b>Today's Date:</b>\r\n                  {{ this.datePipe.transform(this.date, \"mediumDate\") }}\r\n                </h4>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-2 label-control\" required\r\n                    ><b>DATE:</b>\r\n                  </label>\r\n                  <div class=\"col-md-4\">\r\n                    <input\r\n                      type=\"date\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Date \"\r\n                      name=\"dates\"\r\n                      [(ngModel)]=\"date\"\r\n                      required\r\n                    />\r\n                  </div>\r\n\r\n                  <div class=\"col-md-4\">\r\n                    <button\r\n                      type=\"button\"\r\n                      class=\"btn btn-outline-success mr-1\"\r\n                      (click)=\"selectDate()\"\r\n                    >\r\n                      <i class=\"ft ft-report-check\"></i> Select Date\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!--Pills Starts-->\r\n      <div class=\"col-md-12 col-lg-12\">\r\n        <ngb-tabset type=\"pills\">\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle><b>Check </b>In </ng-template>\r\n            <ng-template ngbTabContent>\r\n              <div class=\"card\">\r\n                <div class=\"card-content\">\r\n                  <div class=\"card-body\">\r\n                    <div\r\n                      class=\"form-group row\"\r\n                      *ngFor=\"let student of studentList; index as i\"\r\n                    >\r\n                      <div class=\"col-md-4\">\r\n                        <label class=\"label-control\" for=\"projectinput\">\r\n                        </label>\r\n                        {{ student.f_name }}\r\n                      </div>\r\n\r\n                      <div class=\"col-md-4\">\r\n                        <label class=\"label-control\" for=\"projectinput\"\r\n                          >Time\r\n                        </label>\r\n                        <input\r\n                          type=\"time\"\r\n                          class=\"form-control\"\r\n                          name=\"checkin{{ i }}\"\r\n                          [(ngModel)]=\"student.checkin\"\r\n                          #checkInTime=\"ngModel\"\r\n                          value=\"10:00:00\"\r\n                          required\r\n                        />\r\n                      </div>\r\n                      <div class=\"col-md-4\">\r\n                        <button\r\n                          type=\"button\"\r\n                          style=\"margin: 30px 40px;\"\r\n                          [disabled]=\"student.status\"\r\n                          class=\"btn btn-raised btn-info mr-1\"\r\n                          (click)=\"\r\n                            in(student._id, student.checkin, student.f_name)\r\n                          \"\r\n                        >\r\n                          <i class=\"ft ft-report-check\"></i> Check In\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle><b>Check</b> out</ng-template>\r\n            <ng-template ngbTabContent>\r\n              <div class=\"card\">\r\n                <div class=\"card-content\">\r\n                  <div class=\"card-body\">\r\n                    <div\r\n                      class=\"form-group row\"\r\n                      *ngFor=\"let checkedIn of checkedInList; index as i\"\r\n                    >\r\n                      <div class=\"col-md-3\">\r\n                        <label class=\"label-control\" for=\"projectinput\">\r\n                        </label>\r\n                        {{ checkedIn.user_name }}\r\n                      </div>\r\n\r\n                      <div class=\"col-md-3\">\r\n                        <label class=\"label-control\" for=\"projectinput\">\r\n                          Checked In\r\n                        </label>\r\n                        {{ checkedIn.check_in }}\r\n                      </div>\r\n\r\n                      <div class=\"col-md-3\">\r\n                        <label class=\"label-control\" for=\"projectinput\"\r\n                          >Time\r\n                        </label>\r\n                        <input\r\n                          type=\"time\"\r\n                          class=\"form-control\"\r\n                          placeholder=\"Select Time\"\r\n                          name=\"checkout{{ i }}\"\r\n                          [(ngModel)]=\"checkedIn.checkout\"\r\n                          required\r\n                        />\r\n                      </div>\r\n                      <div class=\"col-md-3\">\r\n                        <button\r\n                          type=\"button\"\r\n                          style=\"margin: 30px 40px;\"\r\n                          class=\"btn btn-raised btn-info mr-1\"\r\n                          (click)=\"out(checkedIn._id, checkedIn.checkout)\"\r\n                        >\r\n                          <i class=\"ft ft-report-check\"></i> Check Out\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n        </ngb-tabset>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- // Basic form layout section end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/hr/teacher/teacher.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/hr/teacher/teacher.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"horizontal-form-layouts\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Attendance Details</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content\">\r\n          <div class=\"px-3\">\r\n            <div class=\"teacher\">\r\n              <div class=\"form-body\">\r\n                <h4 class=\"form-section\">\r\n                  <i class=\"ft-teacher\"></i> <b>Today's Date:</b>\r\n                  {{ this.datePipe.transform(this.date, \"mediumDate\") }}\r\n                </h4>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-2 label-control\" required\r\n                    ><b>DATE:</b>\r\n                  </label>\r\n                  <div class=\"col-md-4\">\r\n                    <input\r\n                      type=\"date\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Date \"\r\n                      name=\"dates\"\r\n                      [(ngModel)]=\"date\"\r\n                      required\r\n                    />\r\n                  </div>\r\n\r\n                  <div class=\"col-md-4\">\r\n                    <button\r\n                      type=\"button\"\r\n                      class=\"btn btn-outline-success mr-1\"\r\n                      (click)=\"selectDate()\"\r\n                    >\r\n                      <i class=\"ft ft-report-check\"></i> Select Date\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!--Pills Starts-->\r\n      <div class=\"col-md-12 col-lg-12\">\r\n        <ngb-tabset type=\"pills\">\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle><b>Check </b>In </ng-template>\r\n            <ng-template ngbTabContent>\r\n              <div class=\"card\">\r\n                <div class=\"card-content\">\r\n                  <div class=\"card-body\">\r\n                    <div\r\n                      class=\"form-group row\"\r\n                      *ngFor=\"let teacher of teacherList; index as i\"\r\n                    >\r\n                      <div class=\"col-md-4\">\r\n                        <label class=\"label-control\" for=\"projectinput\">\r\n                        </label>\r\n                        {{ teacher.f_name }}\r\n                      </div>\r\n\r\n                      <div class=\"col-md-4\">\r\n                        <label class=\"label-control\" for=\"projectinput\"\r\n                          >Time\r\n                        </label>\r\n                        <input\r\n                          type=\"time\"\r\n                          class=\"form-control\"\r\n                          name=\"checkin{{ i }}\"\r\n                          [(ngModel)]=\"teacher.checkin\"\r\n                          #checkInTime=\"ngModel\"\r\n                          value=\"10:00:00\"\r\n                          required\r\n                        />\r\n                      </div>\r\n                      <div class=\"col-md-4\">\r\n                        <button\r\n                          type=\"button\"\r\n                          style=\"margin: 30px 40px;\"\r\n                          [disabled]=\"teacher.status\"\r\n                          class=\"btn btn-raised btn-info mr-1\"\r\n                          (click)=\"\r\n                            in(teacher._id, teacher.checkin, teacher.f_name)\r\n                          \"\r\n                        >\r\n                          <i class=\"ft ft-report-check\"></i> Check In\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle><b>Check</b> out</ng-template>\r\n            <ng-template ngbTabContent>\r\n              <div class=\"card\">\r\n                <div class=\"card-content\">\r\n                  <div class=\"card-body\">\r\n                    <div\r\n                      class=\"form-group row\"\r\n                      *ngFor=\"let checkedIn of checkedInList; index as i\"\r\n                    >\r\n                      <div class=\"col-md-3\">\r\n                        <label class=\"label-control\" for=\"projectinput\">\r\n                        </label>\r\n                        {{ checkedIn.user_name }}\r\n                      </div>\r\n\r\n                      <div class=\"col-md-3\">\r\n                        <label class=\"label-control\" for=\"projectinput\">\r\n                          Checked In\r\n                        </label>\r\n                        {{ checkedIn.check_in }}\r\n                      </div>\r\n\r\n                      <div class=\"col-md-3\">\r\n                        <label class=\"label-control\" for=\"projectinput\"\r\n                          >Time\r\n                        </label>\r\n                        <input\r\n                          type=\"time\"\r\n                          class=\"form-control\"\r\n                          placeholder=\"Select Time\"\r\n                          name=\"checkout{{ i }}\"\r\n                          [(ngModel)]=\"checkedIn.checkout\"\r\n                          required\r\n                        />\r\n                      </div>\r\n                      <div class=\"col-md-3\">\r\n                        <button\r\n                          type=\"button\"\r\n                          style=\"margin: 30px 40px;\"\r\n                          class=\"btn btn-raised btn-info mr-1\"\r\n                          (click)=\"out(checkedIn._id, checkedIn.checkout)\"\r\n                        >\r\n                          <i class=\"ft ft-report-check\"></i> Check Out\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n        </ngb-tabset>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- // Basic form layout section end -->\r\n"

/***/ }),

/***/ "./src/app/hr/hr-routing.module.ts":
/*!*****************************************!*\
  !*** ./src/app/hr/hr-routing.module.ts ***!
  \*****************************************/
/*! exports provided: HrRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrRoutingModule", function() { return HrRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _hr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hr.component */ "./src/app/hr/hr.component.ts");
/* harmony import */ var _staff_staff_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staff/staff.component */ "./src/app/hr/staff/staff.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report/report.component */ "./src/app/hr/report/report.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student/student.component */ "./src/app/hr/student/student.component.ts");
/* harmony import */ var _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./teacher/teacher.component */ "./src/app/hr/teacher/teacher.component.ts");








const routes = [
    {
        path: "",
        component: _hr_component__WEBPACK_IMPORTED_MODULE_3__["HrComponent"],
        data: {
            title: "Hr Process"
        }
    },
    {
        path: "staff",
        component: _staff_staff_component__WEBPACK_IMPORTED_MODULE_4__["StaffComponent"]
    },
    {
        path: "student",
        component: _student_student_component__WEBPACK_IMPORTED_MODULE_6__["StudentComponent"]
    },
    {
        path: "teacher",
        component: _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_7__["TeacherComponent"]
    },
    {
        path: "report",
        component: _report_report_component__WEBPACK_IMPORTED_MODULE_5__["ReportComponent"]
    }
];
let HrRoutingModule = class HrRoutingModule {
};
HrRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HrRoutingModule);



/***/ }),

/***/ "./src/app/hr/hr.component.scss":
/*!**************************************!*\
  !*** ./src/app/hr/hr.component.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hyL2hyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/hr/hr.component.ts":
/*!************************************!*\
  !*** ./src/app/hr/hr.component.ts ***!
  \************************************/
/*! exports provided: HrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrComponent", function() { return HrComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HrComponent = class HrComponent {
    constructor() { }
    ngOnInit() { }
};
HrComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-hr",
        template: __webpack_require__(/*! raw-loader!./hr.component.html */ "./node_modules/raw-loader/index.js!./src/app/hr/hr.component.html"),
        styles: [__webpack_require__(/*! ./hr.component.scss */ "./src/app/hr/hr.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HrComponent);



/***/ }),

/***/ "./src/app/hr/hr.module.ts":
/*!*********************************!*\
  !*** ./src/app/hr/hr.module.ts ***!
  \*********************************/
/*! exports provided: HrModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrModule", function() { return HrModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _hr_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hr-routing.module */ "./src/app/hr/hr-routing.module.ts");
/* harmony import */ var _hr_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hr.component */ "./src/app/hr/hr.component.ts");
/* harmony import */ var _staff_staff_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./staff/staff.component */ "./src/app/hr/staff/staff.component.ts");
/* harmony import */ var _staff_services_staff_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./staff/services/staff.service */ "./src/app/hr/staff/services/staff.service.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./report/report.component */ "./src/app/hr/report/report.component.ts");
/* harmony import */ var _report_services_report_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./report/services/report.service */ "./src/app/hr/report/services/report.service.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./student/student.component */ "./src/app/hr/student/student.component.ts");
/* harmony import */ var _student_services_student_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./student/services/student.service */ "./src/app/hr/student/services/student.service.ts");
/* harmony import */ var _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./teacher/teacher.component */ "./src/app/hr/teacher/teacher.component.ts");
/* harmony import */ var _teacher_services_teacher_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./teacher/services/teacher.service */ "./src/app/hr/teacher/services/teacher.service.ts");

















let HrModule = class HrModule {
};
HrModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _hr_routing_module__WEBPACK_IMPORTED_MODULE_6__["HrRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
        ],
        declarations: [
            _hr_component__WEBPACK_IMPORTED_MODULE_7__["HrComponent"],
            _staff_staff_component__WEBPACK_IMPORTED_MODULE_8__["StaffComponent"],
            _report_report_component__WEBPACK_IMPORTED_MODULE_10__["ReportComponent"],
            _student_student_component__WEBPACK_IMPORTED_MODULE_12__["StudentComponent"],
            _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_14__["TeacherComponent"]
        ],
        providers: [
            _staff_services_staff_service__WEBPACK_IMPORTED_MODULE_9__["StaffService"],
            _report_services_report_service__WEBPACK_IMPORTED_MODULE_11__["ReportService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _student_services_student_service__WEBPACK_IMPORTED_MODULE_13__["StudentService"],
            _teacher_services_teacher_service__WEBPACK_IMPORTED_MODULE_15__["TeacherService"]
        ]
    })
], HrModule);



/***/ }),

/***/ "./src/app/hr/report/report.component.scss":
/*!*************************************************!*\
  !*** ./src/app/hr/report/report.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hyL3JlcG9ydC9yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/hr/report/report.component.ts":
/*!***********************************************!*\
  !*** ./src/app/hr/report/report.component.ts ***!
  \***********************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _report_services_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../report/services/report.service */ "./src/app/hr/report/services/report.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _staff_services_staff_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../staff/services/staff.service */ "./src/app/hr/staff/services/staff.service.ts");






let ReportComponent = class ReportComponent {
    constructor(reportservice, router, activeRouter, datePipe, staffservice) {
        this.reportservice = reportservice;
        this.router = router;
        this.activeRouter = activeRouter;
        this.datePipe = datePipe;
        this.staffservice = staffservice;
        this.date = Date.now();
        this.staffList = [];
        this.newreport = {};
    }
    ngOnInit() {
        {
            let i;
            this.staffservice.getAgencystaff().subscribe((data) => {
                for (i = 0; i < data.length; i++) {
                    this.staffList.push({ name: data[i].name, user_id: data[i].id });
                }
                console.log("NAMESSSS IN LIST ", this.staffList);
                this.newreport.report = this.staffList;
            }, error => {
                console.log(error);
            });
        }
    }
    submit() {
        console.log("Submitted>>>>>>>>>", this.newreport);
    }
};
ReportComponent.ctorParameters = () => [
    { type: _report_services_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
    { type: _staff_services_staff_service__WEBPACK_IMPORTED_MODULE_5__["StaffService"] }
];
ReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-report",
        template: __webpack_require__(/*! raw-loader!./report.component.html */ "./node_modules/raw-loader/index.js!./src/app/hr/report/report.component.html"),
        styles: [__webpack_require__(/*! ./report.component.scss */ "./src/app/hr/report/report.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_report_services_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
        _staff_services_staff_service__WEBPACK_IMPORTED_MODULE_5__["StaffService"]])
], ReportComponent);



/***/ }),

/***/ "./src/app/hr/report/services/report.service.ts":
/*!******************************************************!*\
  !*** ./src/app/hr/report/services/report.service.ts ***!
  \******************************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/base.service */ "./src/app/shared/services/base.service.ts");




let ReportService = class ReportService extends app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(http) {
        super("hr/report");
        this.http = http;
    }
    sendDate(data) {
        return this.http.post(this.url, data, this.getOptions());
    }
};
ReportService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ReportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ReportService);



/***/ }),

/***/ "./src/app/hr/staff/services/staff.service.ts":
/*!****************************************************!*\
  !*** ./src/app/hr/staff/services/staff.service.ts ***!
  \****************************************************/
/*! exports provided: StaffService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffService", function() { return StaffService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/base.service */ "./src/app/shared/services/base.service.ts");




// import { Staff } from "app/shared/models/staff.model";
let StaffService = class StaffService extends app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(http) {
        super("");
        this.http = http;
    }
    getAgencystaff() {
        return this.http.get("http://192.168.10.22:8000/admin/get-staff-list", this.getOptionsWithToken());
    }
    addCheckin(data) {
        return this.http.post("http://192.168.10.22:8000/admin/attendance/checkin", data, this.getOptionsWithToken());
    }
    getCheckinList(data) {
        return this.http.post("http://192.168.10.22:8000/admin/attendance/get-checkin-list", { date: data }, this.getOptionsWithToken());
    }
    addCheckout(id, data) {
        return this.http.post("http://192.168.10.22:8000/admin/attendance/checkout/" + id, { check_out: data }, this.getOptionsWithToken());
    }
};
StaffService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StaffService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], StaffService);



/***/ }),

/***/ "./src/app/hr/staff/staff.component.scss":
/*!***********************************************!*\
  !*** ./src/app/hr/staff/staff.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hyL3N0YWZmL3N0YWZmLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/hr/staff/staff.component.ts":
/*!*********************************************!*\
  !*** ./src/app/hr/staff/staff.component.ts ***!
  \*********************************************/
/*! exports provided: StaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffComponent", function() { return StaffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _staff_services_staff_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../staff/services/staff.service */ "./src/app/hr/staff/services/staff.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




// import { Staff } from "../../shared/models/staff.model";


let StaffComponent = class StaffComponent {
    constructor(staffservice, router, activeRouter, datePipe) {
        this.staffservice = staffservice;
        this.router = router;
        this.activeRouter = activeRouter;
        this.datePipe = datePipe;
        this.staffList = [];
        this.checkedInList = [];
        this.date = new Date();
        this.date = this.datePipe.transform(this.date, "yyyy-MM-dd");
        // console.log(this.datePipe.transform(this.date, 'yyyy-MM-dd'));
        // this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    }
    selectDate() {
        console.log(this.date);
        this.ngOnInit();
    }
    in(id, time, name) {
        var checkIn = { staff_id: "", staff_name: "", check_in: "", date: "" };
        checkIn.staff_id = id;
        checkIn.staff_name = name;
        checkIn.check_in = time;
        checkIn.date = this.date;
        console.log("CheckIN Object", checkIn);
        this.staffservice.addCheckin(checkIn).subscribe((data) => {
            console.log("Added Successfully");
            this.ngOnInit();
        }),
            error => {
                console.log(" Adding Failed", error);
            };
    }
    out(id, check_out) {
        console.log(check_out, id);
        this.staffservice.addCheckout(id, check_out).subscribe((data) => {
            console.log("Added Successfully");
        }),
            error => {
                console.log(" Adding Failed", error);
            };
    }
    isCheckedIn() {
        console.log("stafffList>", this.staffList);
        console.log("Already Checked IN--->", this.checkedInList);
        let i;
        let j;
        for (i = 0; i < this.staffList.length; i++) {
            for (j = 0; j < this.checkedInList.length; j++) {
                if (this.staffList[i]._id == this.checkedInList[j].user_id) {
                    this.staffList[i].status = "checkedInForToday";
                    console.log("Property added of", this.staffList[i]);
                }
                else {
                    console.log("Property not added");
                }
            }
        }
    }
    ngOnInit() {
        let staffHTTP = this.staffservice.getAgencystaff();
        let checkedInHTTP = this.staffservice.getCheckinList(this.date);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([staffHTTP, checkedInHTTP]).subscribe((datas) => {
            this.staffList = datas[0].staff;
            this.checkedInList = datas[1].data;
            this.isCheckedIn();
        }, error => {
            console.log("could not fetch", error);
        });
    }
};
StaffComponent.ctorParameters = () => [
    { type: _staff_services_staff_service__WEBPACK_IMPORTED_MODULE_2__["StaffService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }
];
StaffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-staff",
        template: __webpack_require__(/*! raw-loader!./staff.component.html */ "./node_modules/raw-loader/index.js!./src/app/hr/staff/staff.component.html"),
        styles: [__webpack_require__(/*! ./staff.component.scss */ "./src/app/hr/staff/staff.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_staff_services_staff_service__WEBPACK_IMPORTED_MODULE_2__["StaffService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])
], StaffComponent);



/***/ }),

/***/ "./src/app/hr/student/services/student.service.ts":
/*!********************************************************!*\
  !*** ./src/app/hr/student/services/student.service.ts ***!
  \********************************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/base.service */ "./src/app/shared/services/base.service.ts");




// import { Student } from "app/shared/models/student.model";
let StudentService = class StudentService extends app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(http) {
        super("");
        this.http = http;
    }
    getAgencystudent() {
        return this.http.get("http://192.168.10.22:8000/admin/get-student-list", this.getOptionsWithToken());
    }
    addCheckin(data) {
        return this.http.post("http://192.168.10.22:8000/admin/attendance/checkin", data, this.getOptionsWithToken());
    }
    getCheckinList(data) {
        return this.http.post("http://192.168.10.22:8000/admin/attendance/get-checkin-list", { date: data }, this.getOptionsWithToken());
    }
    addCheckout(id, data) {
        return this.http.post("http://192.168.10.22:8000/admin/attendance/checkout/" + id, { check_out: data }, this.getOptionsWithToken());
    }
};
StudentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StudentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], StudentService);



/***/ }),

/***/ "./src/app/hr/student/student.component.scss":
/*!***************************************************!*\
  !*** ./src/app/hr/student/student.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hyL3N0dWRlbnQvc3R1ZGVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/hr/student/student.component.ts":
/*!*************************************************!*\
  !*** ./src/app/hr/student/student.component.ts ***!
  \*************************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _student_services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../student/services/student.service */ "./src/app/hr/student/services/student.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




// import { Student } from "../../shared/models/student.model";


let StudentComponent = class StudentComponent {
    constructor(studentservice, router, activeRouter, datePipe) {
        this.studentservice = studentservice;
        this.router = router;
        this.activeRouter = activeRouter;
        this.datePipe = datePipe;
        this.studentList = [];
        this.checkedInList = [];
        this.date = new Date();
        this.date = this.datePipe.transform(this.date, "yyyy-MM-dd");
        // console.log(this.datePipe.transform(this.date, 'yyyy-MM-dd'));
        // this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    }
    selectDate() {
        console.log(this.date);
        this.ngOnInit();
    }
    in(id, time, name) {
        var checkIn = { student_id: "", student_name: "", check_in: "", date: "" };
        checkIn.student_id = id;
        checkIn.student_name = name;
        checkIn.check_in = time;
        checkIn.date = this.date;
        console.log("CheckIN Object", checkIn);
        this.studentservice.addCheckin(checkIn).subscribe((data) => {
            console.log("Added Successfully");
            this.ngOnInit();
        }),
            error => {
                console.log(" Adding Failed", error);
            };
    }
    out(id, check_out) {
        console.log(check_out, id);
        this.studentservice.addCheckout(id, check_out).subscribe((data) => {
            console.log("Added Successfully");
        }),
            error => {
                console.log(" Adding Failed", error);
            };
    }
    isCheckedIn() {
        console.log("studentfList>", this.studentList);
        console.log("Already Checked IN--->", this.checkedInList);
        let i;
        let j;
        for (i = 0; i < this.studentList.length; i++) {
            for (j = 0; j < this.checkedInList.length; j++) {
                if (this.studentList[i]._id == this.checkedInList[j].user_id) {
                    this.studentList[i].status = "checkedInForToday";
                    console.log("Property added of", this.studentList[i]);
                }
                else {
                    console.log("Property not added");
                }
            }
        }
    }
    ngOnInit() {
        let studentHTTP = this.studentservice.getAgencystudent();
        let checkedInHTTP = this.studentservice.getCheckinList(this.date);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([studentHTTP, checkedInHTTP]).subscribe((datas) => {
            this.studentList = datas[0].student;
            this.checkedInList = datas[1].data;
            this.isCheckedIn();
        }, error => {
            console.log("could not fetch", error);
        });
    }
};
StudentComponent.ctorParameters = () => [
    { type: _student_services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }
];
StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-student",
        template: __webpack_require__(/*! raw-loader!./student.component.html */ "./node_modules/raw-loader/index.js!./src/app/hr/student/student.component.html"),
        styles: [__webpack_require__(/*! ./student.component.scss */ "./src/app/hr/student/student.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_student_services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])
], StudentComponent);



/***/ }),

/***/ "./src/app/hr/teacher/services/teacher.service.ts":
/*!********************************************************!*\
  !*** ./src/app/hr/teacher/services/teacher.service.ts ***!
  \********************************************************/
/*! exports provided: TeacherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherService", function() { return TeacherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/base.service */ "./src/app/shared/services/base.service.ts");




// import { Teacher } from "app/shared/models/teacher.model";
let TeacherService = class TeacherService extends app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(http) {
        super("");
        this.http = http;
    }
    getAgencyteacher() {
        return this.http.get("http://192.168.10.22:8000/admin/get-teacher-list", this.getOptionsWithToken());
    }
    addCheckin(data) {
        return this.http.post("http://192.168.10.22:8000/admin/attendance/checkin", data, this.getOptionsWithToken());
    }
    getCheckinList(data) {
        return this.http.post("http://192.168.10.22:8000/admin/attendance/get-checkin-list", { date: data }, this.getOptionsWithToken());
    }
    addCheckout(id, data) {
        return this.http.post("http://192.168.10.22:8000/admin/attendance/checkout/" + id, { check_out: data }, this.getOptionsWithToken());
    }
};
TeacherService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TeacherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], TeacherService);



/***/ }),

/***/ "./src/app/hr/teacher/teacher.component.scss":
/*!***************************************************!*\
  !*** ./src/app/hr/teacher/teacher.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hyL3RlYWNoZXIvdGVhY2hlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/hr/teacher/teacher.component.ts":
/*!*************************************************!*\
  !*** ./src/app/hr/teacher/teacher.component.ts ***!
  \*************************************************/
/*! exports provided: TeacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherComponent", function() { return TeacherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _teacher_services_teacher_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../teacher/services/teacher.service */ "./src/app/hr/teacher/services/teacher.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




// import { Teacher } from "../../shared/models/teacher.model";


let TeacherComponent = class TeacherComponent {
    constructor(teacherservice, router, activeRouter, datePipe) {
        this.teacherservice = teacherservice;
        this.router = router;
        this.activeRouter = activeRouter;
        this.datePipe = datePipe;
        this.teacherList = [];
        this.checkedInList = [];
        this.date = new Date();
        this.date = this.datePipe.transform(this.date, "yyyy-MM-dd");
        // console.log(this.datePipe.transform(this.date, 'yyyy-MM-dd'));
        // this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    }
    selectDate() {
        console.log(this.date);
        this.ngOnInit();
    }
    in(id, time, name) {
        var checkIn = { teacher_id: "", teacher_name: "", check_in: "", date: "" };
        checkIn.teacher_id = id;
        checkIn.teacher_name = name;
        checkIn.check_in = time;
        checkIn.date = this.date;
        console.log("CheckIN Object", checkIn);
        this.teacherservice.addCheckin(checkIn).subscribe((data) => {
            console.log("Added Successfully");
            this.ngOnInit();
        }),
            error => {
                console.log(" Adding Failed", error);
            };
    }
    out(id, check_out) {
        console.log(check_out, id);
        this.teacherservice.addCheckout(id, check_out).subscribe((data) => {
            console.log("Added Successfully");
        }),
            error => {
                console.log(" Adding Failed", error);
            };
    }
    isCheckedIn() {
        console.log("teacherfList>", this.teacherList);
        console.log("Already Checked IN--->", this.checkedInList);
        let i;
        let j;
        for (i = 0; i < this.teacherList.length; i++) {
            for (j = 0; j < this.checkedInList.length; j++) {
                if (this.teacherList[i]._id == this.checkedInList[j].user_id) {
                    this.teacherList[i].status = "checkedInForToday";
                    console.log("Property added of", this.teacherList[i]);
                }
                else {
                    console.log("Property not added");
                }
            }
        }
    }
    ngOnInit() {
        let teacherHTTP = this.teacherservice.getAgencyteacher();
        let checkedInHTTP = this.teacherservice.getCheckinList(this.date);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([teacherHTTP, checkedInHTTP]).subscribe((datas) => {
            this.teacherList = datas[0].teacher;
            this.checkedInList = datas[1].data;
            this.isCheckedIn();
        }, error => {
            console.log("could not fetch", error);
        });
    }
};
TeacherComponent.ctorParameters = () => [
    { type: _teacher_services_teacher_service__WEBPACK_IMPORTED_MODULE_2__["TeacherService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }
];
TeacherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-teacher",
        template: __webpack_require__(/*! raw-loader!./teacher.component.html */ "./node_modules/raw-loader/index.js!./src/app/hr/teacher/teacher.component.html"),
        styles: [__webpack_require__(/*! ./teacher.component.scss */ "./src/app/hr/teacher/teacher.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_teacher_services_teacher_service__WEBPACK_IMPORTED_MODULE_2__["TeacherService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])
], TeacherComponent);



/***/ }),

/***/ "./src/app/shared/services/base.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/base.service.ts ***!
  \*************************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


class BaseService {
    constructor(PostUrl) {
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].BaseUrl + PostUrl + "/";
    }
    getOptions() {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
                Accept: "application/json"
            })
        };
    }
    getOptionsWithToken() {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
                authorization: localStorage.getItem("login_token")
            })
        };
    }
}
BaseService.ctorParameters = () => [
    { type: String }
];


/***/ })

}]);
//# sourceMappingURL=hr-hr-module-es2015.js.map