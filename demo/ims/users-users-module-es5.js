(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/users/add-user/add-user.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/add-user/add-user.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\n<section id=\"horizontal-form-layouts\">\n  <div class=\"row text-left\">\n    <div class=\"col-sm-12\">\n      <div class=\"content-header\">Add New Users</div>\n    </div>\n  </div>\n  <div class=\"row text-left\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <div class=\"px-3\">\n            <form class=\"form form-horizontal\" #newuserForm=\"ngForm\" novalidate>\n              <div class=\"form-body\">\n                <h4 class=\"form-section\">\n                  <i class=\"ft-user\"></i> New Users Details\n                </h4>\n\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3 label-control\" for=\"projectinput\"\n                    >Select Role\n                  </label>\n                  <div class=\"col-md-9\">\n                    <!-- <fieldset class=\"form-group position-relative\"> -->\n                    <select\n                      class=\"form-control\"\n                      id=\"DefaultSelect\"\n                      placeholder=\"Select User Role\"\n                      name=\"role\"\n                      [(ngModel)]=\"newuser.role\"\n                      #role=\"ngModel\"\n                      required\n                    >\n                      <option value=\"Admin\">Admin</option>\n                      <option value=\"Staff\">Staff</option>\n                      <option value=\"Teacher\">Teacher</option>\n                      <option value=\"Customer\">Customer</option>\n                    </select>\n                    <div\n                      class=\"danger\"\n                      *ngIf=\"role.invalid && (role.dirty || role.touched)\"\n                    >\n                      required field*\n                    </div>\n                    <!-- </fieldset> -->\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label\n                    class=\"col-md-3 label-control\"\n                    for=\"projectinput1\"\n                    required\n                    >Name\n                  </label>\n                  <div class=\"col-md-9\">\n                    <input\n                      type=\"text\"\n                      id=\"projectinput1\"\n                      class=\"form-control\"\n                      placeholder=\"First name\"\n                      name=\"fullname\"\n                      [(ngModel)]=\"newuser.fname\"\n                      #fullname=\"ngModel\"\n                      required\n                    />\n                    <div\n                      class=\"danger\"\n                      *ngIf=\"\n                        fullname.invalid && (fullname.dirty || fullname.touched)\n                      \"\n                    >\n                      required field*\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label\n                    class=\"col-md-3 label-control\"\n                    for=\"projectinput3\"\n                    required\n                    >Email address</label\n                  >\n                  <div class=\"col-md-9\">\n                    <input\n                      type=\"email\"\n                      id=\"projectinput3\"\n                      class=\"form-control\"\n                      placeholder=\"E-mail\"\n                      name=\"email\"\n                      [(ngModel)]=\"newuser.email\"\n                      #email=\"ngModel\"\n                      required\n                    />\n                  </div>\n                  <div\n                    class=\"dangernew\"\n                    *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n                  >\n                    <div *ngIf=\"email.errors.required\">\n                      required field*\n                    </div>\n                    <div *ngIf=\"email.errors.email\">\n                      invalid email\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3 label-control\" for=\"projectinput5\"\n                    >Address\n                  </label>\n                  <div class=\"col-md-9\">\n                    <input\n                      type=\"text\"\n                      id=\"projectinput5\"\n                      class=\"form-control\"\n                      placeholder=\"Address\"\n                      name=\"address\"\n                      [(ngModel)]=\"newuser.address\"\n                      #address=\"ngModel\"\n                      required\n                    />\n                    <div\n                      class=\"danger\"\n                      *ngIf=\"\n                        address.invalid && (address.dirty || address.touched)\n                      \"\n                    >\n                      required field*\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label\n                    class=\"col-md-3 label-control\"\n                    for=\"projectinput4\"\n                    required\n                    >Contact Number\n                  </label>\n                  <div class=\"col-md-9\">\n                    <input\n                      type=\"number\"\n                      id=\"projectinput4\"\n                      class=\"form-control\"\n                      placeholder=\"Contact number\"\n                      name=\"phone\"\n                      [(ngModel)]=\"newuser.phone\"\n                      minlength=\"10\"\n                      maxlength=\"10\"\n                      ng-pattern=\"[0-9]{10}\"\n                      #phone=\"ngModel\"\n                      required\n                    />\n\n                    <div\n                      class=\"danger\"\n                      *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\"\n                    >\n                      <div *ngIf=\"phone.errors.required\">\n                        required field*\n                      </div>\n                      <div\n                        *ngIf=\"phone.errors.maxlength || phone.errors.minlength\"\n                      >\n                        ten digits required*\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3 label-control\">Photo </label>\n                  <div class=\"col-md-9\">\n                    <label id=\"projectinput8\" class=\"file  mx-auto\">\n                      <input\n                        type=\"file\"\n                        id=\"file\"\n                        name=\"photo\"\n                        [(ngModel)]=\"newuser.photo\"\n                        #photo=\"ngModel\"\n                      />\n                      <span class=\"file-custom\"></span>\n                      :\n                    </label>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-actions center\">\n                <button\n                  [disabled]=\"newuserForm.invalid\"\n                  type=\"button\"\n                  class=\"btn btn-raised btn-info mr-1\"\n                  (click)=\"submit()\"\n                >\n                  <i class=\"ft ft-user-check\"></i> Add New User\n                </button>\n                <button\n                  type=\"button\"\n                  class=\"btn btn-raised btn-danger\"\n                  routerLink=\"/users\"\n                >\n                  <i class=\"ft ft-x\"></i> Cancel\n                </button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- // Basic form layout section end -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/edit-user/edit-user.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/edit-user/edit-user.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Basic form layout section start -->\n<section id=\"horizontal-form-layouts\">\n  <div class=\"row text-left\">\n    <div class=\"col-sm-12\">\n      <div class=\"content-header\">Edit User</div>\n    </div>\n  </div>\n  <div class=\"row text-left\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <div class=\"px-3\">\n            <form\n              class=\"form form-horizontal\"\n              #edituserForm=\"ngForm\"\n              novalidate\n            >\n              <div class=\"form-body\">\n                <h4 class=\"form-section\">\n                  <i class=\"ft-user\"></i> New Users Details\n                </h4>\n\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3 label-control\" for=\"projectinput\"\n                    >Select Role\n                  </label>\n                  <div class=\"col-md-9\">\n                    <!-- <fieldset class=\"form-group position-relative\"> -->\n                    <select\n                      class=\"form-control\"\n                      id=\"DefaultSelect\"\n                      name=\"role\"\n                      [(ngModel)]=\"updatedUser.role\"\n                      #role=\"ngModel\"\n                      required\n                    >\n                      <option selected>Select User Role</option>\n                      <option value=\"1\">Admin</option>\n                      <option value=\"2\">Staff</option>\n                      <option value=\"Teacher\">Teacher</option>\n                      <option value=\"3\">Customers</option>\n                    </select>\n                    <!-- </fieldset> -->\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label\n                    class=\"col-md-3 label-control\"\n                    for=\"projectinput1\"\n                    required\n                    >Name\n                  </label>\n                  <div class=\"col-md-9\">\n                    <input\n                      type=\"text\"\n                      id=\"projectinput1\"\n                      class=\"form-control\"\n                      placeholder=\"First name\"\n                      name=\"fullname\"\n                      [(ngModel)]=\"updatedUser.fname\"\n                      #fullname=\"ngModel\"\n                      required\n                    />\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label\n                    class=\"col-md-3 label-control\"\n                    for=\"projectinput3\"\n                    required\n                    >Email address</label\n                  >\n                  <div class=\"col-md-9\">\n                    <input\n                      type=\"email\"\n                      id=\"projectinput3\"\n                      class=\"form-control\"\n                      placeholder=\"E-mail\"\n                      name=\"email\"\n                      [(ngModel)]=\"updatedUser.email\"\n                      #email=\"ngModel\"\n                      required\n                    />\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3 label-control\" for=\"projectinput5\"\n                    >Address\n                  </label>\n                  <div class=\"col-md-9\">\n                    <input\n                      type=\"text\"\n                      id=\"projectinput5\"\n                      class=\"form-control\"\n                      placeholder=\"Address\"\n                      name=\"address\"\n                      [(ngModel)]=\"updatedUser.address\"\n                      #address=\"ngModel\"\n                      required\n                    />\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label\n                    class=\"col-md-3 label-control\"\n                    for=\"projectinput4\"\n                    required\n                    >Contact Number\n                  </label>\n                  <div class=\"col-md-9\">\n                    <input\n                      type=\"number\"\n                      id=\"projectinput4\"\n                      class=\"form-control\"\n                      placeholder=\"Contact number\"\n                      name=\"phone\"\n                      [(ngModel)]=\"updatedUser.phone\"\n                      #phone=\"ngModel\"\n                      required\n                    />\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3 label-control\">Photo </label>\n                  <div class=\"col-md-9\">\n                    <label id=\"projectinput8\" class=\"file  mx-auto\">\n                      <input type=\"file\" id=\"file\" name=\"photo\" />\n                      <span class=\"file-custom\"></span>\n                      :\n                    </label>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-actions center\">\n                <button\n                  type=\"button\"\n                  class=\"btn btn-raised btn-info mr-1\"\n                  (click)=\"update()\"\n                >\n                  <i class=\"ft ft-user-check\"></i> Update\n                </button>\n                <button\n                  type=\"button\"\n                  class=\"btn btn-raised btn-danger\"\n                  routerLink=\"/users\"\n                >\n                  <i class=\"ft ft-x\"></i> Cancel\n                </button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- // Basic form layout section end -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/users.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/users.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"extended\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">All Users List</h4>\r\n        </div>\r\n        <!-- <fieldset disabled>\r\n              <a href=\"javascript:void(0)\" class=\"btn btn-raised mr-1 btn-primary\">Add New</a>\r\n          </fieldset> -->\r\n        <div\r\n          class=\"form-actions\"\r\n          style=\"margin-left: 30px; padding-top: 20px; margin-bottom: -30px;\"\r\n        >\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-raised btn-info mr-1\"\r\n            routerLink=\"add\"\r\n            routerLinkActive=\"active\"\r\n          >\r\n            Add New\r\n            <i class=\"fonticon-wrap\" class=\"icon-user-follow\"></i>\r\n          </button>\r\n\r\n          <button type=\"button\" class=\"btn btn-raised btn-warning\">\r\n            Trashed Users\r\n            <i class=\"fonticon-wrap\" class=\"icon-eye\"></i>\r\n          </button>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-raised btn-info\"\r\n            style=\"float: right; margin-right: 30px;\"\r\n          >\r\n            Print\r\n            <i class=\"fonticon-wrap\" class=\"fa fa-print\"></i>\r\n          </button>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-raised btn-success\"\r\n            style=\"float: right; margin-right: 10px;\"\r\n          >\r\n            Save as PDF\r\n            <i class=\"fonticon-wrap\" class=\"fa fa-file-o\"></i>\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <table class=\"table table-responsive-md text-center\">\r\n              <thead>\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>Name</th>\r\n                  <th>User Role</th>\r\n                  <th>Phone</th>\r\n                  <th>Email</th>\r\n                  <th>Address</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <td colspan=\"3\"></td>\r\n                <td\r\n                  colspan=\"4\"\r\n                  style=\"text-align: left;\"\r\n                  *ngIf=\"!usersList.length\"\r\n                >\r\n                  <h2>No data in database</h2>\r\n                </td>\r\n\r\n                <tr *ngFor=\"let user of usersList; let i = index\">\r\n                  <!-- <td><img class=\"media-object round-media\" src=\"{{user.photo}}\" alt=\"Generic placeholder image\"\r\n                        style=\"height: 45px;\" /></td> -->\r\n                  <td>{{ i + 1 }}</td>\r\n                  <!-- <td>\r\n                      <div class=\"custom-control custom-checkbox m-0\">\r\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"item1\">\r\n                        <label class=\"custom-control-label col-form-label\" for=\"item1\"></label>\r\n                      </div>\r\n                    </td> -->\r\n                  <td>{{ user.fname }}</td>\r\n                  <td>{{ user.role }}</td>\r\n                  <td>{{ user.phone }}</td>\r\n                  <td>{{ user.email }}</td>\r\n                  <td>{{ user.address }}</td>\r\n                  <td>\r\n                    <div class=\"floating-btn\">\r\n                      <a\r\n                        (click)=\"edit(user._id)\"\r\n                        class=\"btn btn-warning mr-1 btn-fab\"\r\n                        ><i class=\"icon-pencil\"></i\r\n                      ></a>\r\n                      <a\r\n                        (click)=\"delete(user._id)\"\r\n                        class=\"btn btn-danger mr-1 btn-fab\"\r\n                        ><i class=\"icon-trash\"></i\r\n                      ></a>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n\r\n        <div\r\n          class=\"col-xl-6 col-lg-12\"\r\n          style=\"margin-top: -40px; margin-left: -20px;\"\r\n        >\r\n          <div class=\"card-content\">\r\n            <div class=\"card-body\">\r\n              <ngb-pagination\r\n                [collectionSize]=\"70\"\r\n                [(page)]=\"page\"\r\n              ></ngb-pagination>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/shared/models/user.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/user.model.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(userInfo) {
        // this._id = userInfo._id || '';
        this.fname = userInfo.fname || "";
        this.role = userInfo.role || "";
        this.email = userInfo.email || "";
        this.address = userInfo.address || "";
        this.phone = userInfo.phone || "";
        this.photo = userInfo.photo || "";
    }
    User.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return User;
}());



/***/ }),

/***/ "./src/app/users/add-user/add-user.component.scss":
/*!********************************************************!*\
  !*** ./src/app/users/add-user/add-user.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".danger {\n  color: red; }\n\n.dangernew {\n  color: red;\n  margin-left: 26%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvYWRkLXVzZXIvRDpcXHdvcmtcXElNUy9zcmNcXGFwcFxcdXNlcnNcXGFkZC11c2VyXFxhZGQtdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVUsRUFBQTs7QUFFZDtFQUNJLFVBQVU7RUFDVixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2FkZC11c2VyL2FkZC11c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhbmdlcntcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuLmRhbmdlcm5ld3tcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjYlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/users/add-user/add-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/users/add-user/add-user.component.ts ***!
  \******************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ "./src/app/users/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/models/user.model */ "./src/app/shared/models/user.model.ts");






var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(usersservice, router, activeRouter) {
        this.usersservice = usersservice;
        this.router = router;
        this.activeRouter = activeRouter;
        this.newuser = new app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_5__["User"]({});
    }
    AddUserComponent.prototype.ngOnInit = function () { };
    AddUserComponent.prototype.submit = function () {
        var _this = this;
        console.log("Submitted>>>>>>>>>", this.newuser);
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a
            .fire({
            title: "Do you want to add the user ?",
            text: "New user will be added in User List",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Add"
        })
            .then(function (result) {
            if (result.value) {
                //dev
                _this.usersservice.addUser(_this.newuser).subscribe(function (data) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Add!", "User has been added.", "success");
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
    AddUserComponent.ctorParameters = function () { return [
        { type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-add-user",
            template: __webpack_require__(/*! raw-loader!./add-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.scss */ "./src/app/users/add-user/add-user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/users/edit-user/edit-user.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/users/edit-user/edit-user.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2VkaXQtdXNlci9lZGl0LXVzZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/users/edit-user/edit-user.component.ts":
/*!********************************************************!*\
  !*** ./src/app/users/edit-user/edit-user.component.ts ***!
  \********************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ "./src/app/users/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/models/user.model */ "./src/app/shared/models/user.model.ts");






var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(usersservice, router, activeRouter) {
        this.usersservice = usersservice;
        this.router = router;
        this.activeRouter = activeRouter;
        this.updatedUser = new app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_5__["User"]({});
        this.userid = this.activeRouter.snapshot.params["id"];
    }
    EditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersservice.getUsersById(this.userid).subscribe(function (data) {
            console.log("userslist>>", data);
            _this.updatedUser = data.data;
        }, function (error) {
            console.log("cant fetch");
        });
    };
    EditUserComponent.prototype.update = function () {
        var _this = this;
        console.log("Submitted>>>>>>>>>", this.updatedUser);
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a
            .fire({
            title: "Do you want to edit the user details ?",
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
                _this.usersservice.editUser(_this.updatedUser).subscribe(function (data) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Edit!", "User has been edited.", "success");
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
    EditUserComponent.ctorParameters = function () { return [
        { type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    EditUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-edit-user",
            template: __webpack_require__(/*! raw-loader!./edit-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/edit-user/edit-user.component.html"),
            styles: [__webpack_require__(/*! ./edit-user.component.scss */ "./src/app/users/edit-user/edit-user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/users/services/users.service.ts":
/*!*************************************************!*\
  !*** ./src/app/users/services/users.service.ts ***!
  \*************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/base.service */ "./src/app/shared/services/base.service.ts");




// import { User } from "app/shared/models/user.model";
var UsersService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UsersService, _super);
    function UsersService(http) {
        var _this = _super.call(this, "users") || this;
        _this.http = http;
        return _this;
    }
    UsersService.prototype.getUsers = function () {
        return this.http.get("http://64.225.124.144:8080/users", this.getOptions());
        // return this.http.get(this.url, this.getOptions());
    };
    UsersService.prototype.getUsersById = function (id) {
        return this.http.get(this.url + id, this.getOptions());
    };
    UsersService.prototype.editUser = function (data) {
        return this.http.put(this.url + data._id, { data: data }, this.getOptions());
    };
    UsersService.prototype.deleteUser = function (id) {
        return this.http.delete(this.url + id);
    };
    UsersService.prototype.addUser = function (data) {
        console.log("url>>", this.url);
        console.log("data>>", data);
        return this.http.post(this.url, { data: data }, this.getOptions());
    };
    UsersService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UsersService);
    return UsersService;
}(_shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/users/users-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/users/users-routing.module.ts ***!
  \***********************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/users/add-user/add-user.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/users/edit-user/edit-user.component.ts");






var routes = [
    {
        path: '',
        component: _users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
        data: {
            title: 'Users'
        }
    },
    {
        path: 'add',
        component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__["AddUserComponent"],
        data: {
            title: 'Add Users'
        }
    },
    {
        path: 'edit/:id',
        component: _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_5__["EditUserComponent"],
        data: {
            title: 'Edit Users'
        }
    },
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "./src/app/users/users.component.scss":
/*!********************************************!*\
  !*** ./src/app/users/users.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-left {\n  width: 100%;\n  overflow-x: scroll; }\n\ntable,\nth,\ntd {\n  border: 1px solid #ddd;\n  text-align: left; }\n\ntd {\n  vertical-align: bottom; }\n\n.card {\n  width: 1600px; }\n\n:host /deep/ .page-link {\n  margin-right: 0;\n  border-radius: 0;\n  border-width: 1px; }\n\n:host /deep/ .page-item:first-child .page-link {\n  border-top-left-radius: 0.3em;\n  border-bottom-left-radius: 0.3em; }\n\n:host /deep/ .page-item:last-child .page-link {\n  border-top-right-radius: 0.3em;\n  border-bottom-right-radius: 0.3em; }\n\n:host /deep/ .pagination-lg .page-item:first-child .page-link,\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.3em;\n  border-bottom-left-radius: 0.3em; }\n\n:host /deep/ .pagination-lg .page-item:last-child .page-link,\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.3em;\n  border-bottom-right-radius: 0.3em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvRDpcXHdvcmtcXElNUy9zcmNcXGFwcFxcdXNlcnNcXHVzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUVwQjs7O0VBR0Usc0JBQXNCO0VBQ3RCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGFBQWEsRUFBQTs7QUFFZjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR25CO0VBR00sNkJBQTZCO0VBQzdCLGdDQUFnQyxFQUFBOztBQUp0QztFQVNNLDhCQUE4QjtFQUM5QixpQ0FBaUMsRUFBQTs7QUFJdkM7O0VBR0ksNkJBQTZCO0VBQzdCLGdDQUFnQyxFQUFBOztBQUlwQzs7RUFHSSw4QkFBOEI7RUFDOUIsaUNBQWlDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWxlZnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcclxufVxyXG50YWJsZSxcclxudGgsXHJcbnRkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxudGQge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICB3aWR0aDogMTYwMHB4O1xyXG59XHJcbjpob3N0IC9kZWVwLyAucGFnZS1saW5rIHtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5wYWdlLWl0ZW0ge1xyXG4gICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgLnBhZ2UtbGluayB7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuM2VtO1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjNlbTtcclxuICAgIH1cclxuICB9XHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIC5wYWdlLWxpbmsge1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4zZW07XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjNlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5wYWdpbmF0aW9uLWxnLFxyXG4ucGFnaW5hdGlvbi1zbSB7XHJcbiAgLnBhZ2UtaXRlbTpmaXJzdC1jaGlsZCAucGFnZS1saW5rIHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuM2VtO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4zZW07XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLnBhZ2luYXRpb24tbGcsXHJcbi5wYWdpbmF0aW9uLXNtIHtcclxuICAucGFnZS1pdGVtOmxhc3QtY2hpbGQgLnBhZ2UtbGluayB7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4zZW07XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4zZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/users.service */ "./src/app/users/services/users.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");






var UsersComponent = /** @class */ (function () {
    function UsersComponent(usersservice, router, config) {
        this.usersservice = usersservice;
        this.router = router;
        this.page = 4;
        this.page1 = 4;
        this.page2 = 4;
        this.page3 = 4;
        this.page4 = 4;
        this.page5 = 4;
        this.page6 = 4;
        this.page7 = 4;
        this.currentPage = 2;
        this.currentPage1 = 2;
        this.currentPage2 = 2;
        this.isDisabled = true;
        this.usersList = [];
        config.boundaryLinks = true;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersservice.getUsers().subscribe(function (data) {
            console.log("userslist>>", data);
            _this.usersList = data.data;
        }, function (error) {
            console.log("cant fetch");
        });
    };
    UsersComponent.prototype.edit = function (id) {
        console.log("user id>>", id);
        this.router.navigate(["users/edit/" + id]);
    };
    UsersComponent.prototype.toggleDisabled = function () {
        this.isDisabled = !this.isDisabled;
    };
    UsersComponent.prototype.delete = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a
            .fire({
            title: "Do you want to delete the user ?",
            text: "You won't be able to revert the deleted user",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete",
        })
            .then(function (result) {
            if (result.value) {
                //dev
                _this.usersservice.deleteUser(id).subscribe(function (data) {
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
    UsersComponent.ctorParameters = function () { return [
        { type: _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPaginationConfig"] }
    ]; };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-users",
            template: __webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/users/users.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPaginationConfig"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/users/users.module.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/users/users-routing.module.ts");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/users/add-user/add-user.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/users/edit-user/edit-user.component.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/users.service */ "./src/app/users/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");











var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _users_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsersRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]
            ],
            declarations: [_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"], _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_7__["AddUserComponent"], _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_8__["EditUserComponent"]],
            providers: [_services_users_service__WEBPACK_IMPORTED_MODULE_9__["UsersService"]]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ })

}]);
//# sourceMappingURL=users-users-module-es5.js.map