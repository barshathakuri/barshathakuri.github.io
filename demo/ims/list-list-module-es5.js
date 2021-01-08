(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/student/list/add-list/add-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/student/list/add-list/add-list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"horizontal-form-layouts\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Add New Student</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content\">\r\n          <div class=\"px-3\">\r\n            <form class=\"form form-horizontal\" #newlistForm=\"ngForm\" novalidate>\r\n              <div class=\"form-body\">\r\n                <h4 class=\"form-section\">\r\n                  <i class=\"ft-list\"></i> New Student Details\r\n                </h4>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" required\r\n                    >First Name\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"First Name\"\r\n                      name=\"firstName\"\r\n                      [(ngModel)]=\"newlist.firstName\"\r\n                      #firstName=\"ngModel\"\r\n                      required\r\n                    />\r\n\r\n                    <div\r\n                      *ngIf=\"firstName.invalid && firstName.dirty\"\r\n                      class=\"danger\"\r\n                    >\r\n                      Required Field**\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" required\r\n                    >Last Name\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Last Name\"\r\n                      name=\"lastName\"\r\n                      [(ngModel)]=\"newlist.lastName\"\r\n                      #lastName=\"ngModel\"\r\n                      required\r\n                    />\r\n\r\n                    <div\r\n                      *ngIf=\"lastName.invalid && lastName.dirty\"\r\n                      class=\"danger\"\r\n                    >\r\n                      Required Field**\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\"\r\n                    >Select Student Gender\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <select\r\n                      class=\"form-control\"\r\n                      name=\"gender\"\r\n                      placeholder=\"Select Student Gender\"\r\n                      [(ngModel)]=\"newlist.gender\"\r\n                      #gender=\"ngModel\"\r\n                      required\r\n                    >\r\n                      <option value=\"Male\">Male</option>\r\n                      <option value=\"Female\">Female</option>\r\n                      <option value=\"Others\">Others</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" required\r\n                    >Date Of Birth\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"date\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Date Of Birth\"\r\n                      name=\"dob\"\r\n                      [(ngModel)]=\"newlist.dob\"\r\n                      #dob=\"ngModel\"\r\n                      required\r\n                    />\r\n\r\n                    <div *ngIf=\"dob.invalid && dob.dirty\" class=\"danger\">\r\n                      Required Field**\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" required>Email </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"email\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Email\"\r\n                      name=\"email\"\r\n                      [(ngModel)]=\"newlist.email\"\r\n                      #email=\"ngModel\"\r\n                      required\r\n                      email\r\n                    />\r\n\r\n                    <div *ngIf=\"email.invalid && email.dirty\" class=\"danger\">\r\n                      Not a valid Email**\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\"\r\n                    >Select Student Category</label\r\n                  >\r\n                  <div class=\"col-md-9\">\r\n                    <select\r\n                      class=\"form-control\"\r\n                      name=\"category\"\r\n                      placeholder=\"Select Student Category\"\r\n                      [(ngModel)]=\"newlist.category\"\r\n                      #category=\"ngModel\"\r\n                      required\r\n                    >\r\n                      <option value=\"Part Time\">Bachelor Running</option>\r\n                      <option value=\"Full Time\">Bachelor Completed</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\"\r\n                    >Please Select Batch</label\r\n                  >\r\n                  <div class=\"col-md-9\">\r\n                    <select\r\n                      class=\"form-control\"\r\n                      name=\"batch\"\r\n                      placeholder=\"Please Select Batch\"\r\n                      [(ngModel)]=\"newlist.batch\"\r\n                      #batch=\"ngModel\"\r\n                      required\r\n                    >\r\n                      <option></option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\"\r\n                    >Please Select Section</label\r\n                  >\r\n                  <div class=\"col-md-9\">\r\n                    <select\r\n                      class=\"form-control\"\r\n                      name=\"section\"\r\n                      placeholder=\"Please Select Section\"\r\n                      [(ngModel)]=\"newlist.section\"\r\n                      #section=\"ngModel\"\r\n                      required\r\n                    >\r\n                      <option></option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\"\r\n                    >Please Select Course</label\r\n                  >\r\n                  <div class=\"col-md-9\">\r\n                    <select\r\n                      class=\"form-control\"\r\n                      name=\"course\"\r\n                      placeholder=\"Please Select Course\"\r\n                      [(ngModel)]=\"newlist.course\"\r\n                      #course=\"ngModel\"\r\n                      required\r\n                    >\r\n                      <option></option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" required>\r\n                    Address\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Enter Address\"\r\n                      name=\"address\"\r\n                      [(ngModel)]=\"newlist.address\"\r\n                      #address=\"ngModel\"\r\n                      required\r\n                    />\r\n\r\n                    <div\r\n                      *ngIf=\"listAddress.invalid && listAddress.dirty\"\r\n                      class=\"danger\"\r\n                    >\r\n                      Required Field**\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" required\r\n                    >Contact Number\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"number\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Enter Contact number\"\r\n                      name=\"phone\"\r\n                      [(ngModel)]=\"newlist.phone\"\r\n                      #phone=\"ngModel\"\r\n                      required\r\n                    />\r\n\r\n                    <div *ngIf=\"phone.invalid && phone.dirty\" class=\"danger\">\r\n                      Required Field**\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\">Image </label>\r\n                  <div class=\"col-md-9\">\r\n                    <label id=\"projectinput8\" class=\"file  mx-auto\">\r\n                      <input\r\n                        type=\"file\"\r\n                        id=\"file\"\r\n                        name=\"photo\"\r\n                        [(ngModel)]=\"newlist.photo\"\r\n                        #photo=\"ngModel\"\r\n                      />\r\n                      <span class=\"file-custom\"></span>\r\n                      :\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n\r\n                <fieldset>\r\n                  <div class=\"input-group\" style=\"margin-left:26%;\">\r\n                    <!-- <span class=\"input-group-text\" id=\"checkbox-addon1\"> -->\r\n                    <input\r\n                      type=\"checkbox\"\r\n                      aria-label=\"Checkbox for following text input\"\r\n                      style=\"margin-top: 5px;\"\r\n                    />\r\n                    Register for User\r\n                    <!-- </span> -->\r\n                  </div>\r\n                </fieldset>\r\n\r\n                <div class=\"form-actions center\">\r\n                  <button\r\n                    [disabled]=\"newlistForm.invalid\"\r\n                    type=\"button\"\r\n                    class=\"btn btn-raised btn-info mr-1\"\r\n                    (click)=\"submit()\"\r\n                  >\r\n                    <i class=\"ft ft-user-check\"></i> Add New Student\r\n                  </button>\r\n\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn btn-raised btn-danger\"\r\n                    routerLink=\"/student/list\"\r\n                  >\r\n                    <i class=\"ft ft-x\"></i> View All\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- // Basic form layout section end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/student/list/edit-list/edit-list.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/student/list/edit-list/edit-list.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\r\n<section id=\"horizontal-form-layouts\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Edit Student</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-content\">\r\n          <div class=\"px-3\">\r\n            <form class=\"form form-horizontal\" #newlistForm=\"ngForm\" novalidate>\r\n              <div class=\"form-body\">\r\n                <h4 class=\"form-section\">\r\n                  <i class=\"ft-list\"></i> Update Student Details\r\n                </h4>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" required\r\n                    >First Name\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"First Name\"\r\n                      name=\"firstName\"\r\n                      [(ngModel)]=\"newlist.firstName\"\r\n                      #firstName=\"ngModel\"\r\n                      required\r\n                    />\r\n\r\n                    <div\r\n                      *ngIf=\"firstName.invalid && firstName.dirty\"\r\n                      class=\"danger\"\r\n                    >\r\n                      Required Field**\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" required\r\n                    >Last Name\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"First Name\"\r\n                      name=\"firstName\"\r\n                      [(ngModel)]=\"newlist.lastName\"\r\n                      #lastName=\"ngModel\"\r\n                      required\r\n                    />\r\n\r\n                    <div\r\n                      *ngIf=\"lastName.invalid && lastName.dirty\"\r\n                      class=\"danger\"\r\n                    >\r\n                      Required Field**\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\"\r\n                    >Select Student Gender\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <select\r\n                      class=\"form-control\"\r\n                      name=\"gender\"\r\n                      placeholder=\"Select Student Gender\"\r\n                      [(ngModel)]=\"newlist.gender\"\r\n                      #gender=\"ngModel\"\r\n                      required\r\n                    >\r\n                      <option value=\"Male\">Male</option>\r\n                      <option value=\"Female\">Female</option>\r\n                      <option value=\"Others\">Others</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" required\r\n                    >Date Of Birth\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"date\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Date Of Birth\"\r\n                      name=\"dob\"\r\n                      [(ngModel)]=\"newlist.dob\"\r\n                      #dob=\"ngModel\"\r\n                      required\r\n                    />\r\n\r\n                    <div *ngIf=\"dob.invalid && dob.dirty\" class=\"danger\">\r\n                      Required Field**\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" required>Email </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"email\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Email\"\r\n                      name=\"email\"\r\n                      [(ngModel)]=\"newlist.email\"\r\n                      #email=\"ngModel\"\r\n                      required\r\n                      email\r\n                    />\r\n\r\n                    <div *ngIf=\"email.invalid && email.dirty\" class=\"danger\">\r\n                      Not a valid Email**\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\"\r\n                    >Select Student Category</label\r\n                  >\r\n                  <div class=\"col-md-9\">\r\n                    <select\r\n                      class=\"form-control\"\r\n                      name=\"category\"\r\n                      placeholder=\"Select Student Category\"\r\n                      [(ngModel)]=\"newlist.category\"\r\n                      #category=\"ngModel\"\r\n                      required\r\n                    >\r\n                      <option value=\"Part Time\">Bachelor Running</option>\r\n                      <option value=\"Full Time\">Bachelor Completed</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\"\r\n                    >Please Select Batch</label\r\n                  >\r\n                  <div class=\"col-md-9\">\r\n                    <select\r\n                      class=\"form-control\"\r\n                      name=\"batch\"\r\n                      placeholder=\"Please Select Batch\"\r\n                      [(ngModel)]=\"newlist.batch\"\r\n                      #batch=\"ngModel\"\r\n                      required\r\n                    >\r\n                      <option></option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\"\r\n                    >Please Select Section</label\r\n                  >\r\n                  <div class=\"col-md-9\">\r\n                    <select\r\n                      class=\"form-control\"\r\n                      name=\"section\"\r\n                      placeholder=\"Please Select Section\"\r\n                      [(ngModel)]=\"newlist.section\"\r\n                      #section=\"ngModel\"\r\n                      required\r\n                    >\r\n                      <option></option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\"\r\n                    >Please Select Course</label\r\n                  >\r\n                  <div class=\"col-md-9\">\r\n                    <select\r\n                      class=\"form-control\"\r\n                      name=\"course\"\r\n                      placeholder=\"Please Select Course\"\r\n                      [(ngModel)]=\"newlist.course\"\r\n                      #course=\"ngModel\"\r\n                      required\r\n                    >\r\n                      <option></option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" required>\r\n                    Address\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Enter Address\"\r\n                      name=\"listAddress\"\r\n                      [(ngModel)]=\"newlist.listAddress\"\r\n                      #listAddress=\"ngModel\"\r\n                      required\r\n                    />\r\n\r\n                    <div\r\n                      *ngIf=\"listAddress.invalid && listAddress.dirty\"\r\n                      class=\"danger\"\r\n                    >\r\n                      Required Field**\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\" required\r\n                    >Contact Number\r\n                  </label>\r\n                  <div class=\"col-md-9\">\r\n                    <input\r\n                      type=\"number\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Enter Contact number\"\r\n                      name=\"phone\"\r\n                      [(ngModel)]=\"newlist.phone\"\r\n                      #phone=\"ngModel\"\r\n                      required\r\n                    />\r\n\r\n                    <div *ngIf=\"phone.invalid && phone.dirty\" class=\"danger\">\r\n                      Required Field**\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 label-control\">Image </label>\r\n                  <div class=\"col-md-9\">\r\n                    <label id=\"projectinput8\" class=\"file  mx-auto\">\r\n                      <input\r\n                        type=\"file\"\r\n                        id=\"file\"\r\n                        name=\"photo\"\r\n                        [(ngModel)]=\"newlist.photo\"\r\n                        #photo=\"ngModel\"\r\n                      />\r\n                      <span class=\"file-custom\"></span>\r\n                      :\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n\r\n                <fieldset>\r\n                  <div class=\"input-group\" style=\"margin-left:26%;\">\r\n                    <!-- <span class=\"input-group-text\" id=\"checkbox-addon1\"> -->\r\n                    <input\r\n                      type=\"checkbox\"\r\n                      aria-label=\"Checkbox for following text input\"\r\n                      style=\"margin-top: 5px;\"\r\n                    />\r\n                    Register for User\r\n                    <!-- </span> -->\r\n                  </div>\r\n                </fieldset>\r\n\r\n                <div class=\"form-actions center\">\r\n                  <button\r\n                    [disabled]=\"newlistForm.invalid\"\r\n                    type=\"button\"\r\n                    class=\"btn btn-raised btn-info mr-1\"\r\n                    (click)=\"submit()\"\r\n                  >\r\n                    <i class=\"ft ft-user-check\"></i> Add New Student\r\n                  </button>\r\n\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn btn-raised btn-danger\"\r\n                    routerLink=\"/student/list\"\r\n                  >\r\n                    <i class=\"ft ft-x\"></i> View All\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- // Basic form layout section end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/student/list/list.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/student/list/list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"extended\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">All Students List</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">All Students List</h4>\r\n        </div>\r\n        <!-- <fieldset disabled>\r\n              <a href=\"javascript:void(0)\" class=\"btn btn-raised mr-1 btn-primary\">Add New</a>\r\n          </fieldset> -->\r\n        <div\r\n          class=\"form-actions\"\r\n          style=\"margin-left: 30px; padding-top: 20px; margin-bottom: -30px;\"\r\n        >\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-raised btn-info mr-1\"\r\n            routerLink=\"add\"\r\n            routerLinkActive=\"active\"\r\n          >\r\n            Add New\r\n            <i class=\"fonticon-wrap\" class=\"icon-list-follow\"></i>\r\n          </button>\r\n\r\n          <button type=\"button\" class=\"btn btn-raised btn-warning\">\r\n            Trashed List\r\n            <i class=\"fonticon-wrap\" class=\"icon-eye\"></i>\r\n          </button>\r\n\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-raised btn-info\"\r\n            style=\"float: right; margin-right: 30px;\"\r\n          >\r\n            Print\r\n            <i class=\"fonticon-wrap\" class=\"fa fa-print\"></i>\r\n          </button>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-raised btn-success\"\r\n            style=\"float: right; margin-right: 10px;\"\r\n          >\r\n            Save as PDF\r\n            <i class=\"fonticon-wrap\" class=\" fa fa-file-o\"></i>\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <table class=\"table table-responsive-md text-center\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Photo</th>\r\n                  <th>First Name</th>\r\n                  <th>Last Name</th>\r\n                  <th>Gender</th>\r\n                  <th>Date Of Birth</th>\r\n                  <th>Student's Email</th>\r\n                  <th>Phone</th>\r\n                  <th>Address</th>\r\n                  <th>Category</th>\r\n                  <th>Courses</th>\r\n                  <th>Batch</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <td\r\n                  colspan=\"12\"\r\n                  style=\"text-align: center;\"\r\n                  *ngIf=\"!listList.length\"\r\n                >\r\n                  <h2>No data in database</h2>\r\n                </td>\r\n                <tr *ngFor=\"let list of listList; let i = index\">\r\n                  <td>{{ i + 1 }}</td>\r\n                  <td>{{ list.firstName }}</td>\r\n                  <td>{{ list.lastName }}</td>\r\n                  <td>{{ list.gender }}</td>\r\n                  <td>{{ list.dob }}</td>\r\n                  <td>{{ list.email }}</td>\r\n                  <td>{{ list.category }}</td>\r\n                  <td>{{ list.batch }}</td>\r\n                  <td>{{ list.section }}</td>\r\n                  <td>{{ list.course }}</td>\r\n                  <td>{{ list.address }}</td>\r\n                  <td>{{ list.phone }}</td>\r\n                  <td>{{ list.photo }}</td>\r\n                  <td>\r\n                    <div class=\"floating-btn\">\r\n                      <a\r\n                        routerLink=\"edit/{{ list.id }}\"\r\n                        class=\"btn btn-warning mr-1 btn-fab\"\r\n                        ><i class=\"icon-pencil\"></i\r\n                      ></a>\r\n                      <a\r\n                        (click)=\"delete(list.id)\"\r\n                        class=\"btn btn-danger mr-1 btn-fab\"\r\n                        ><i class=\"icon-trash\"></i\r\n                      ></a>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/shared/models/list.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/list.model.ts ***!
  \*********************************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
var List = /** @class */ (function () {
    function List(details) {
        this.firstName = details.firstName || "";
        this.lastName = details.lastName || "";
        this.gender = details.gender || "";
        this.dob = details.dob || "";
        this.email = details.email || "";
        this.category = details.category || "";
        this.batch = details.batch || "";
        this.section = details.section || "";
        this.course = details.course || "";
        this.phone = details.phone || "";
        this.photo = details.photo || "";
    }
    List.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return List;
}());



/***/ }),

/***/ "./src/app/student/list/add-list/add-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/student/list/add-list/add-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvbGlzdC9hZGQtbGlzdC9hZGQtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/student/list/add-list/add-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/student/list/add-list/add-list.component.ts ***!
  \*************************************************************/
/*! exports provided: AddListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddListComponent", function() { return AddListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/list.service */ "./src/app/student/list/services/list.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_models_list_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/models/list.model */ "./src/app/shared/models/list.model.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






var AddListComponent = /** @class */ (function () {
    function AddListComponent(listsservice, router) {
        this.listsservice = listsservice;
        this.router = router;
        this.newlist = new app_shared_models_list_model__WEBPACK_IMPORTED_MODULE_4__["List"]({});
    }
    AddListComponent.prototype.ngOnInit = function () { };
    AddListComponent.prototype.submit = function () {
        var _this = this;
        console.log("Submitted>>>>>>>>>", this.newlist);
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a
            .fire({
            title: "Do you want to add the list ?",
            text: "New list will be added in List List",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Add"
        })
            .then(function (result) {
            if (result.value) {
                //dev
                _this.listsservice.addList(_this.newlist).subscribe(function (data) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Add!", "List has been added.", "success");
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
    AddListComponent.ctorParameters = function () { return [
        { type: _services_list_service__WEBPACK_IMPORTED_MODULE_2__["ListService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AddListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-add-list",
            template: __webpack_require__(/*! raw-loader!./add-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/student/list/add-list/add-list.component.html"),
            styles: [__webpack_require__(/*! ./add-list.component.scss */ "./src/app/student/list/add-list/add-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_list_service__WEBPACK_IMPORTED_MODULE_2__["ListService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddListComponent);
    return AddListComponent;
}());



/***/ }),

/***/ "./src/app/student/list/edit-list/edit-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/student/list/edit-list/edit-list.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvbGlzdC9lZGl0LWxpc3QvZWRpdC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/student/list/edit-list/edit-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/student/list/edit-list/edit-list.component.ts ***!
  \***************************************************************/
/*! exports provided: EditListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditListComponent", function() { return EditListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/list.service */ "./src/app/student/list/services/list.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_shared_models_list_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/models/list.model */ "./src/app/shared/models/list.model.ts");






var EditListComponent = /** @class */ (function () {
    function EditListComponent(listservice, router, activeRouter) {
        this.listservice = listservice;
        this.router = router;
        this.activeRouter = activeRouter;
        this.updatedList = new app_shared_models_list_model__WEBPACK_IMPORTED_MODULE_5__["List"]({});
        this.listid = this.activeRouter.snapshot.params["id"];
    }
    EditListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listservice.getListById(this.listid).subscribe(function (data) {
            console.log("data", data);
            _this.updatedList = data;
        }, function (error) {
            console.log("error-->", error);
        });
    };
    EditListComponent.prototype.edit = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a
            .fire({
            title: "Do you want to update the List?",
            text: "You won't be able to revert it back",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Update"
        })
            .then(function (result) {
            if (result.value) {
                _this.listservice.editList(_this.updatedList, _this.listid).subscribe(function (data) {
                    console.log("list added successfully");
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Updated!", "List Updated.", "success").then(function () {
                        _this.router.navigate(["list"]);
                    });
                    _this.ngOnInit();
                }, function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Not Updated!", "There was some error.", "error");
                    console.log("Error", error);
                });
            }
        });
        console.log("Submitted>>>>>>>>>", this.updatedList);
    };
    EditListComponent.ctorParameters = function () { return [
        { type: _services_list_service__WEBPACK_IMPORTED_MODULE_2__["ListService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    EditListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-edit-list",
            template: __webpack_require__(/*! raw-loader!./edit-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/student/list/edit-list/edit-list.component.html"),
            styles: [__webpack_require__(/*! ./edit-list.component.scss */ "./src/app/student/list/edit-list/edit-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_list_service__WEBPACK_IMPORTED_MODULE_2__["ListService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditListComponent);
    return EditListComponent;
}());



/***/ }),

/***/ "./src/app/student/list/list-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/student/list/list-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRoutingModule", function() { return ListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.component */ "./src/app/student/list/list.component.ts");
/* harmony import */ var _add_list_add_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-list/add-list.component */ "./src/app/student/list/add-list/add-list.component.ts");
/* harmony import */ var _edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-list/edit-list.component */ "./src/app/student/list/edit-list/edit-list.component.ts");






var routes = [
    {
        path: "",
        component: _list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"],
        data: {
            title: "List"
        }
    },
    {
        path: "add",
        component: _add_list_add_list_component__WEBPACK_IMPORTED_MODULE_4__["AddListComponent"],
        data: {
            title: "Add List"
        }
    },
    {
        path: "edit/:id",
        component: _edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_5__["EditListComponent"],
        data: {
            title: "Edit List"
        }
    }
];
var ListRoutingModule = /** @class */ (function () {
    function ListRoutingModule() {
    }
    ListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ListRoutingModule);
    return ListRoutingModule;
}());



/***/ }),

/***/ "./src/app/student/list/list.component.scss":
/*!**************************************************!*\
  !*** ./src/app/student/list/list.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-left {\n  width: 100%;\n  overflow-x: scroll; }\n\ntable,\nth,\ntd {\n  border: 1px solid #ddd;\n  text-align: left; }\n\ntd {\n  vertical-align: bottom; }\n\n.card {\n  width: 1600px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9saXN0L0Q6XFx3b3JrXFxJTVMvc3JjXFxhcHBcXHN0dWRlbnRcXGxpc3RcXGxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBRXBCOzs7RUFHRSxzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGVudC9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1sZWZ0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbn1cclxudGFibGUsXHJcbnRoLFxyXG50ZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbnRkIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgd2lkdGg6IDE2MDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/student/list/list.component.ts":
/*!************************************************!*\
  !*** ./src/app/student/list/list.component.ts ***!
  \************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/list.service */ "./src/app/student/list/services/list.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var ListComponent = /** @class */ (function () {
    function ListComponent(listservice, router) {
        this.listservice = listservice;
        this.router = router;
        this.listList = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listservice.getList().subscribe(function (data) {
            _this.listList = data;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
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
            .then(function (result) {
            if (result.value) {
                _this.listservice.deleteList(id).subscribe(function (data) {
                    console.log("Deleted successfully");
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Deleted!", "Applicant Deleted.", "success");
                    _this.router.navigate(["/list"]);
                    _this.ngOnInit();
                }, function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Not Deleted!", "There was some error.", "error");
                    console.log("Error", error);
                });
            }
        });
    };
    ListComponent.ctorParameters = function () { return [
        { type: _services_list_service__WEBPACK_IMPORTED_MODULE_3__["ListService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-list",
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/student/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/student/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_list_service__WEBPACK_IMPORTED_MODULE_3__["ListService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/student/list/list.module.ts":
/*!*********************************************!*\
  !*** ./src/app/student/list/list.module.ts ***!
  \*********************************************/
/*! exports provided: ListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListModule", function() { return ListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list.component */ "./src/app/student/list/list.component.ts");
/* harmony import */ var _add_list_add_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-list/add-list.component */ "./src/app/student/list/add-list/add-list.component.ts");
/* harmony import */ var _edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-list/edit-list.component */ "./src/app/student/list/edit-list/edit-list.component.ts");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/list.service */ "./src/app/student/list/services/list.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list-routing.module */ "./src/app/student/list/list-routing.module.ts");











var ListModule = /** @class */ (function () {
    function ListModule() {
    }
    ListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                _list_routing_module__WEBPACK_IMPORTED_MODULE_10__["ListRoutingModule"]
            ],
            declarations: [_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"], _add_list_add_list_component__WEBPACK_IMPORTED_MODULE_6__["AddListComponent"], _edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_7__["EditListComponent"]],
            providers: [_services_list_service__WEBPACK_IMPORTED_MODULE_8__["ListService"]]
        })
    ], ListModule);
    return ListModule;
}());



/***/ }),

/***/ "./src/app/student/list/services/list.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/student/list/services/list.service.ts ***!
  \*******************************************************/
/*! exports provided: ListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListService", function() { return ListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ListService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ListService, _super);
    function ListService(http) {
        var _this = _super.call(this, "list") || this;
        _this.http = http;
        return _this;
    }
    ListService.prototype.getList = function () {
        return this.http.get(this.url);
    };
    ListService.prototype.addList = function (data) {
        return this.http.post(this.url + "add/", data, this.getOptions());
    };
    ListService.prototype.getListById = function (id) {
        return this.http.get(this.url + "edit/" + id, this.getOptions());
    };
    ListService.prototype.editList = function (updatedData, id) {
        return this.http.put(this.url + "edit/" + id, updatedData, this.getOptions());
    };
    ListService.prototype.deleteList = function (id) {
        return this.http.delete(this.url + "delete/" + id, this.getOptions());
    };
    ListService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    ListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ListService);
    return ListService;
}(_shared_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));



/***/ })

}]);
//# sourceMappingURL=list-list-module-es5.js.map