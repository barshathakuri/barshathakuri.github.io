(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/content/content-layout.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/content/content-layout.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper p-0\" [dir]=\"direction\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/full/full-layout.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/full/full-layout.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #wrapper class=\"wrapper\" [ngClass]=\"{'nav-collapsed': iscollapsed, 'menu-collapsed': iscollapsed, 'sidebar-sm': isSidebar_sm, 'sidebar-lg': isSidebar_lg}\" [dir]=\"options.direction\">\n  <div #appSidebar appSidebar class=\"app-sidebar\" (toggleHideSidebar)=\"toggleHideSidebar($event)\" [ngClass]=\"{'hide-sidebar': hideSidebar}\" data-active-color=\"white\" [attr.data-background-color]=\"bgColor\" [attr.data-image]=\"bgImage\">\n      <app-sidebar></app-sidebar>\n      <div class=\"sidebar-background\" #sidebarBgImage></div>\n  </div>\n  <app-navbar (toggleHideSidebar)=\"toggleHideSidebar($event)\"></app-navbar>\n  <div class=\"main-panel\">\n      <div class=\"main-content\">\n          <div class=\"content-wrapper\">\n              <div class=\"container-fluid\">\n                  <router-outlet></router-outlet>\n              </div>\n          </div>\n      </div>\n      <app-footer></app-footer>\n  </div>\n  <app-notification-sidebar></app-notification-sidebar>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Footer Starts-->\n<footer>\n    <div class=\"container-fluid\">\n        <p class=\"copyright text-center\">\n                Copyright  &copy;  {{currentDate | date: 'yyyy'}} <a id=\"pixinventLink\" href=\"https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent\">PIXINVENT</a>, All rights reserved.          \n        </p>\n        \n    </div>\n</footer>\n<!--Footer Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar (Header) Starts -->\n<nav class=\"header-navbar navbar navbar-expand-lg navbar-light bg-faded\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle d-lg-none float-left\" data-toggle=\"collapse\" (click)=\"toggleSidebar()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <span class=\"d-lg-none navbar-right navbar-collapse-toggle\">\n                <a class=\"open-navbar-container\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbarSupportedContent\">\n                    <i class=\"ft-more-vertical\"></i>\n                </a>\n            </span>\n            <form class=\"navbar-form navbar-right mt-1\" role=\"search\">\n                <div class=\"position-relative has-icon-right\">\n                    <input type=\"text\" class=\"form-control round\" placeholder=\"Search\">\n                    <div class=\"form-control-position\">\n                        <i class=\"ft-search\"></i>\n                    </div>\n                </div>\n            </form>\n           \n        </div>\n        <div class=\"navbar-container\">\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [ngbCollapse]=\"isCollapsed\">\n                <ul class=\"navbar-nav\">\n                    <li class=\"nav-item mr-2  d-none d-lg-block\">\n                        <a href=\"javascript:;\" class=\"nav-link\" id=\"navbar-fullscreen\" appToggleFullscreen (click)=\"ToggleClass()\">                            \n                            <i class=\"{{toggleClass}} font-medium-3 blue-grey darken-4\"></i>\n                            <p class=\"d-none\">fullscreen</p>\n                        </a>\n                    </li>\n                    \n                    <li class=\"nav-item\" ngbDropdown [placement]=\"placement\">\n                        <a class=\"nav-link position-relative\" id=\"dropdownBasic2\" ngbDropdownToggle>\n                            <i class=\"ft-bell font-medium-3 blue-grey darken-4\"></i>\n                            <span class=\"notification badge badge-pill badge-danger\">4</span>\n                            <p class=\"d-none\">Notifications</p>\n                        </a>\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\" class=\"notification-dropdown\">\n                            <div class=\"noti-list\" [perfectScrollbar]>\n                                <a class=\"dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4\">\n                                    <i class=\"ft-bell info float-left d-block font-large-1 mt-1 mr-2\"></i>\n                                    <span class=\"noti-wrapper\">\n                                        <span class=\"noti-title line-height-1 d-block text-bold-400 info\">New Order Received</span>\n                                        <span class=\"noti-text\">Lorem ipsum dolor sit ametitaque in, et!</span>\n                                    </span>\n                                </a>\n                                <a class=\"dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4\">\n                                    <i class=\"ft-bell warning float-left d-block font-large-1 mt-1 mr-2\"></i>\n                                    <span class=\"noti-wrapper\">\n                                        <span class=\"noti-title line-height-1 d-block text-bold-400 warning\">New User Registered</span>\n                                        <span class=\"noti-text\">Lorem ipsum dolor sit ametitaque in </span>\n                                    </span>\n                                </a>\n                                <a class=\"dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4\">\n                                    <i class=\"ft-bell danger float-left d-block font-large-1 mt-1 mr-2\"></i>\n                                    <span class=\"noti-wrapper\">\n                                        <span class=\"noti-title line-height-1 d-block text-bold-400 danger\">New Order Received</span>\n                                        <span class=\"noti-text\">Lorem ipsum dolor sit ametest?</span>\n                                    </span>\n                                </a>\n                                <a class=\"dropdown-item noti-container py-3\">\n                                    <i class=\"ft-bell success float-left d-block font-large-1 mt-1 mr-2\"></i>\n                                    <span class=\"noti-wrapper\">\n                                        <span class=\"noti-title line-height-1 d-block text-bold-400 success\">New User Registered</span>\n                                        <span class=\"noti-text\">Lorem ipsum dolor sit ametnatus aut.</span>\n                                    </span>\n                                </a>\n                            </div>\n                            <a class=\"noti-footer primary text-center d-block border-top border-top-blue-grey border-top-lighten-4 text-bold-400 py-1\">Read All Notifications</a>\n                        </div>\n                    </li>\n                    <li class=\"nav-item\" ngbDropdown [placement]=\"placement\">\n                        <a class=\"nav-link position-relative\" id=\"dropdownBasic3\" ngbDropdownToggle>\n                            <i class=\"ft-user font-medium-3 blue-grey darken-4\"></i>\n                            <p class=\"d-none\">User Settings</p>\n                        </a>\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic3\" class=\"text-left\">                           \n                            <a class=\"dropdown-item py-1\" href=\"javascript:;\">\n                                <i class=\"ft-edit mr-2\"></i>\n                                <span>My Profile</span>\n                            </a>\n                            <a class=\"dropdown-item py-1\" href=\"javascript:;\">\n                                <i class=\"ft-mail mr-2\"></i>\n                                <span>My Inbox</span>\n                            </a>\n                            <a class=\"dropdown-item py-1\" href=\"javascript:;\">\n                                <i class=\"ft-settings mr-2\"></i>\n                                <span>Settings</span>\n                            </a>\n                            <div class=\"dropdown-divider\"></div>\n                            <a class=\"dropdown-item\" href=\"javascript:;\">\n                                <i class=\"ft-power mr-2\"></i>\n                                <span>Logout</span>\n                            </a>\n                        </div>\n                    </li>\n                    <li class=\"nav-item d-none d-lg-block\">\n                        <a class=\"nav-link position-relative notification-sidebar-toggle\" (click)=\"toggleNotificationSidebar();\">\n                            <i class=\"ft-align-left font-medium-3 blue-grey darken-4\"></i>\n                            <p class=\"d-none\">Notifications Sidebar</p>\n                        </a>\n                    </li>\n                   \n                </ul>\n            </div>\n        </div>\n    </div>\n</nav>\n<!-- Navbar (Header) Ends -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/notification-sidebar/notification-sidebar.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/notification-sidebar/notification-sidebar.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- //////////////////////////////////////////////////////////////////////////// -->\n<!-- START Notification Sidebar -->\n<aside #sidebar id=\"notification-sidebar\" class=\"notification-sidebar d-none d-sm-none d-md-block\">\n  <a class=\"notification-sidebar-close\" (click)=\"onClose()\">\n    <i class=\"ft-x font-medium-3\"></i>\n  </a>\n  <div class=\"side-nav notification-sidebar-content\" [perfectScrollbar]>\n    <div class=\"row\">\n      <div class=\"col-12 mt-1\">\n        <ngb-tabset>\n          \n          <ngb-tab>\n            <ng-template ngbTabTitle><b>Chat</b></ng-template>\n            <ng-template ngbTabContent>\n              <div id=\"chatapp\" class=\"col-12\">\n                <h6 class=\"mt-1 mb-3 text-bold-400 text-left\">RECENT CHAT</h6>\n                <div class=\"collection border-none\">\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-12.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Elizabeth Elliott </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">5.00 AM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Thank you </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-6.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Mary Adams </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.14 AM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Hello Boo </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-11.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Caleb Richards </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">9.00 PM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Keny ! </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-18.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">June Lane </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.14 AM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Ohh God </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-1.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Edward Fletcher </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">5.15 PM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Love you </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-2.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Crystal Bates </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">8.00 AM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Can we </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-3.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Nathan Watts </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">9.53 PM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Great! </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-15.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Willard Wood </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.20 AM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Do it </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-19.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Ronnie Ellis </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">5.30 PM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Got that </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-14.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Gwendolyn Wood </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.34 AM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Like you </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-13.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Daniel Russell </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">12.00 AM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Thank you </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-22.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Sarah Graves </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">11.14 PM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Okay you </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-9.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Andrew Hoffman </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">7.30 PM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Can do </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-20.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Camila Lynch </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">2.00 PM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Leave it </p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab>\n            <ng-template ngbTabTitle><b>Settings</b></ng-template>\n            <ng-template ngbTabContent>\n              <div id=\"settings\" class=\"col-12\">\n                <h6 class=\"mt-1 mb-3 text-bold-400 text-left\">GENERAL SETTINGS</h6>\n                <ul class=\"list-unstyled\">\n                  <li class=\"text-left\">\n                    <div class=\"togglebutton\">\n                      <div class=\"switch d-flex justify-content-between w-100\">\n                        <span class=\"text-bold-500\">Notifications</span>\n                        <div class=\"notification-cb\">\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                            <input checked=\"checked\" class=\"custom-control-input cz-bg-image-display\" type=\"checkbox\"\n                              id=\"notifications1\">\n                            <label class=\"custom-control-label d-block\" for=\"notifications1\"></label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <p>Use checkboxes when looking for yes or no answers.</p>\n                  </li>\n                  <li class=\"text-left\">\n                    <div class=\"togglebutton\">\n                      <div class=\"switch d-flex justify-content-between w-100\">\n                        <span class=\"text-bold-500\">Show recent activity</span>\n                        <div class=\"notification-cb\">\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                            <input checked=\"checked\" class=\"custom-control-input cz-bg-image-display\" type=\"checkbox\"\n                              id=\"recent-activity1\">\n                            <label class=\"custom-control-label d-block\" for=\"recent-activity1\"></label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\n                  </li>\n                  <li class=\"text-left\">\n                    <div class=\"togglebutton\">\n                      <div class=\"switch  d-flex justify-content-between w-100\">\n                        <span class=\"text-bold-500\">Notifications</span>\n                        <div class=\"notification-cb\">\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                            <input class=\"custom-control-input cz-bg-image-display\" type=\"checkbox\" id=\"notifications2\">\n                            <label class=\"custom-control-label d-block\" for=\"notifications2\"></label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <p>Use checkboxes when looking for yes or no answers.</p>\n                  </li>\n                  <li class=\"text-left\">\n                    <div class=\"togglebutton\">\n                      <div class=\"switch d-flex justify-content-between w-100\">\n                        <span class=\"text-bold-500\">Show recent activity</span>\n                        <div class=\"notification-cb\">\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                            <input class=\"custom-control-input cz-bg-image-display\" type=\"checkbox\"\n                              id=\"recent-activity2\">\n                            <label class=\"custom-control-label d-block\" for=\"recent-activity2\"></label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\n                  </li>\n                  <li class=\"text-left\">\n                    <div class=\"togglebutton\">\n                      <div class=\"switch d-flex justify-content-between w-100\">\n                        <span class=\"text-bold-500\">Show your emails</span>\n                        <div class=\"notification-cb\">\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                            <input class=\"custom-control-input cz-bg-image-display\" type=\"checkbox\" id=\"show-emails\">\n                            <label class=\"custom-control-label d-block\" for=\"show-emails\"></label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <p>Use checkboxes when looking for yes or no answers.</p>\n                  </li>\n                  <li class=\"text-left\">\n                    <div class=\"togglebutton\">\n                      <div class=\"switch d-flex justify-content-between w-100\">\n                        <span class=\"text-bold-500\">Show Task statistics</span>\n                        <div class=\"notification-cb\">\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                            <input class=\"custom-control-input cz-bg-image-display\" type=\"checkbox\" id=\"show-stats\">\n                            <label class=\"custom-control-label d-block\" for=\"show-stats\"></label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\n                  </li>\n                </ul>\n              </div>\n            </ng-template>\n          </ngb-tab>\n        </ngb-tabset>\n      </div>\n    </div>\n  </div>\n</aside>\n<!-- END Notification Sidebar -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/sidebar/sidebar.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/sidebar/sidebar.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar Header starts -->\n<div class=\"sidebar-header\">\n    <div class=\"logo clearfix\">\n        <a [routerLink]=\"['/']\" class=\"logo-text float-left\">\n            <div class=\"logo-img\">\n                <img [src]=\"logoUrl\" />\n            </div>\n            <span class=\"text align-middle\">APEX</span>\n        </a>\n        <a class=\"nav-toggle d-none d-sm-none d-md-none d-lg-block\" id=\"sidebarToggle\" href=\"javascript:;\">\n            <i #toggleIcon appSidebarToggle class=\"ft-toggle-right toggle-icon\" data-toggle=\"expanded\"></i>\n        </a>\n        <a class=\"nav-close d-block d-md-block d-lg-none d-xl-none\" id=\"sidebarClose\" href=\"javascript:;\">\n            <i class=\"ft-x\"></i>\n        </a>\n    </div>\n</div>\n<!-- Sidebar Header Ends -->\n\n<!-- Sidebar Content starts -->\n<div class=\"sidebar-content\"  [perfectScrollbar]>\n    <div class=\"nav-container\">\n        <ul class=\"navigation\" appSidebarList>\n            <!-- First level menu -->\n             <li appSidebarlink level=\"{{depth + 1}}\" (toggleEmit)=\"handleToggle($event)\" (click)=\"toggleSlideInOut()\" [routePath]=\"menuItem.path\" [classes]=\"menuItem.class\" [title]=\"menuItem.title\"  [parent]=\"\" *ngFor=\"let menuItem of menuItems\"   [ngClass]=\"{'has-sub': menuItem.class === 'has-sub' ? true: false, 'open': activeTitles.includes(menuItem.title) && !nav_collapsed_open ? true : false, 'nav-collapsed-open': nav_collapsed_open && activeTitles.includes(menuItem.title)}\" [routerLinkActive]=\"menuItem.submenu.length != 0 ? '' : 'active'\"\n                [routerLinkActiveOptions]=\"{exact: true}\">\n                <a appSidebarAnchorToggle [routerLink]=\"menuItem.class === '' ? [menuItem.path] : null\" *ngIf=\"!menuItem.isExternalLink; else externalLinkBlock\">\n                    <i [ngClass]=\"[menuItem.icon]\"></i>\n                    <span class=\"menu-title\">{{menuItem.title | translate }}</span>\n                    <span *ngIf=\"menuItem.badge != '' \" [ngClass]=\"[menuItem.badgeClass]\">{{menuItem.badge}}</span>\n                </a>\n                <ng-template #externalLinkBlock>\n                    <a [href]=\"[menuItem.path]\" target=\"_blank\">\n                        <i [ngClass]=\"[menuItem.icon]\"></i>\n                        <span class=\"menu-title\">{{menuItem.title | translate }}</span>\n                        <span *ngIf=\"menuItem.badge != '' \" [ngClass]=\"[menuItem.badgeClass]\">{{menuItem.badge}}</span>\n                    </a>\n                </ng-template>\n                <!-- Second level menu -->\n                <ul class=\"menu-content\" *ngIf=\"menuItem.submenu.length > 0\" [@slideInOut]=\"activeTitles.includes(menuItem.title) ? true : false\">\n                    <li appSidebarlink level=\"{{depth + 2}}\" (toggleEmit)=\"handleToggle($event)\" [routePath]=\"menuSubItem.path\" [classes]=\"menuSubItem.class\" [title]=\"menuSubItem.title\" [parent]=\"menuItem.title\" *ngFor=\"let menuSubItem of menuItem.submenu\" [routerLinkActive]=\"menuSubItem.submenu.length > 0 ? '' : 'active'\" [ngClass]=\"{'has-sub': menuSubItem.class === 'has-sub' ? true: false, 'open': activeTitles.includes(menuSubItem.title) && !nav_collapsed_open ? true : false, 'nav-collapsed-open': nav_collapsed_open && activeTitles.includes(menuSubItem.title)}\">\n                        <a appSidebarAnchorToggle [routerLink]=\"menuSubItem.submenu.length > 0 ? null : [menuSubItem.path]\" *ngIf=\"!menuSubItem.isExternalLink; else externalSubLinkBlock\">\n                            <i [ngClass]=\"[menuSubItem.icon]\"></i>\n                            <span class=\"menu-title\">{{menuSubItem.title | translate }}</span>\n                            <span *ngIf=\"menuSubItem.badge != '' \" [ngClass]=\"[menuSubItem.badgeClass]\">{{menuSubItem.badge}}</span>\n                        </a>\n                        <ng-template #externalSubLinkBlock>\n                            <a [href]=\"[menuSubItem.path]\">\n                                <i [ngClass]=\"[menuSubItem.icon]\"></i>\n                                <span class=\"menu-title\">{{menuSubItem.title | translate }}</span>\n                                <span *ngIf=\"menuSubItem.badge != '' \" [ngClass]=\"[menuSubItem.badgeClass]\">{{menuSubItem.badge}}</span>\n                            </a>\n                        </ng-template>\n                        <!-- Third level menu -->\n                        <ul class=\"menu-content\" *ngIf=\"menuSubItem.submenu.length > 0\" [@slideInOut]=\"activeTitles.includes(menuSubItem.title) ? true : false\">\n                            <li appSidebarlink level=\"{{depth + 3}}\" [routePath]=\"menuSubsubItem.path\" [classes]=\"menuSubsubItem.class\" [title]=\"menuSubsubItem.title\" [parent]=\"menuSubItem.title\" *ngFor=\"let menuSubsubItem of menuSubItem.submenu\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"\n                                [ngClass]=\"[menuSubsubItem.class]\">\n                                <a appSidebarAnchorToggle [routerLink]=\"[menuSubsubItem.path]\" *ngIf=\"!menuSubsubItem.isExternalLink; else externalSubSubLinkBlock\">\n                                    <i [ngClass]=\"[menuSubsubItem.icon]\"></i>\n                                    <span class=\"menu-title\">{{menuSubsubItem.title | translate }}</span>\n                                    <span *ngIf=\"menuSubsubItem.badge != '' \" [ngClass]=\"[menuSubsubItem.badgeClass]\">{{menuSubsubItem.badge}}</span>\n                                </a>\n                                <ng-template #externalSubSubLinkBlock>\n                                    <a [href]=\"[menuSubsubItem.path]\">\n                                        <i [ngClass]=\"[menuSubsubItem.icon]\"></i>\n                                        <span class=\"menu-title\">{{menuSubsubItem.title | translate }}</span>\n                                        <span *ngIf=\"menuSubsubItem.badge != '' \" [ngClass]=\"[menuSubsubItem.badgeClass]\">{{menuSubsubItem.badge}}</span>\n                                    </a>\n                                </ng-template>\n                            </li>\n                        </ul>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </div>\n</div>\n<!-- Sidebar Content Ends -->\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ "./src/app/layouts/full/full-layout.component.ts");
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ "./src/app/layouts/content/content-layout.component.ts");
/* harmony import */ var _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/routes/full-layout.routes */ "./src/app/shared/routes/full-layout.routes.ts");
/* harmony import */ var _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/routes/content-layout.routes */ "./src/app/shared/routes/content-layout.routes.ts");
/* harmony import */ var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/auth/auth-guard.service */ "./src/app/shared/auth/auth-guard.service.ts");








var appRoutes = [
    {
        path: '',
        redirectTo: 'full-layout',
        pathMatch: 'full',
    },
    { path: '', component: _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_3__["FullLayoutComponent"], data: { title: 'full Views' }, children: _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_5__["Full_ROUTES"], canActivate: [_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: '', component: _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_4__["ContentLayoutComponent"], data: { title: 'content Views' }, children: _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_6__["CONTENT_ROUTES"], canActivate: [_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.subscription = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(function () { return window.scrollTo(0, 0); });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ "./src/app/layouts/content/content-layout.component.ts");
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ "./src/app/layouts/full/full-layout.component.ts");
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/auth/auth-guard.service */ "./src/app/shared/auth/auth-guard.service.ts");















var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: false
};
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_12__["FullLayoutComponent"], _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_11__["ContentLayoutComponent"]],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
                    }
                }),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"]
            ],
            providers: [
                _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"],
                _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"],
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                },
                { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PERFECT_SCROLLBAR_CONFIG"], useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/courses/course.routes.ts":
/*!******************************************!*\
  !*** ./src/app/courses/course.routes.ts ***!
  \******************************************/
/*! exports provided: COURSE_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COURSE_ROUTES", function() { return COURSE_ROUTES; });
//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...
var COURSE_ROUTES = [
    {
        path: "courses",
        loadChildren: function () {
            return Promise.all(/*! import() | course-course-module */[__webpack_require__.e("default~batch-batch-module~category-category-module~course-course-module~email-email-module~enquirie~b615e052"), __webpack_require__.e("course-course-module")]).then(__webpack_require__.bind(null, /*! ./course/course.module */ "./src/app/courses/course/course.module.ts")).then(function (m) { return m.CourseModule; });
        }
    },
    {
        path: "section",
        loadChildren: function () {
            return Promise.all(/*! import() | section-section-module */[__webpack_require__.e("default~batch-batch-module~category-category-module~course-course-module~email-email-module~enquirie~b615e052"), __webpack_require__.e("section-section-module")]).then(__webpack_require__.bind(null, /*! ./section/section.module */ "./src/app/courses/section/section.module.ts")).then(function (m) { return m.SectionModule; });
        }
    },
    {
        path: "batch",
        loadChildren: function () { return Promise.all(/*! import() | batch-batch-module */[__webpack_require__.e("default~batch-batch-module~category-category-module~course-course-module~email-email-module~enquirie~b615e052"), __webpack_require__.e("batch-batch-module")]).then(__webpack_require__.bind(null, /*! ./batch/batch.module */ "./src/app/courses/batch/batch.module.ts")).then(function (m) { return m.BatchModule; }); }
    }
];


/***/ }),

/***/ "./src/app/enquiry/enquiry.routes.ts":
/*!*******************************************!*\
  !*** ./src/app/enquiry/enquiry.routes.ts ***!
  \*******************************************/
/*! exports provided: ENQUIRY_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENQUIRY_ROUTES", function() { return ENQUIRY_ROUTES; });
//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...
var ENQUIRY_ROUTES = [
    {
        path: "enquiries",
        loadChildren: function () {
            return Promise.all(/*! import() | enquiries-enquiries-module */[__webpack_require__.e("default~batch-batch-module~category-category-module~course-course-module~email-email-module~enquirie~b615e052"), __webpack_require__.e("enquiries-enquiries-module")]).then(__webpack_require__.bind(null, /*! ./enquiries/enquiries.module */ "./src/app/enquiry/enquiries/enquiries.module.ts")).then(function (m) { return m.EnquiriesModule; });
        }
    },
    {
        path: "management",
        loadChildren: function () {
            return Promise.all(/*! import() | management-management-module */[__webpack_require__.e("default~batch-batch-module~category-category-module~course-course-module~email-email-module~enquirie~b615e052"), __webpack_require__.e("management-management-module")]).then(__webpack_require__.bind(null, /*! ./management/management.module */ "./src/app/enquiry/management/management.module.ts")).then(function (m) { return m.ManagementModule; });
        }
    },
    {
        path: "source",
        loadChildren: function () {
            return Promise.all(/*! import() | source-source-module */[__webpack_require__.e("default~batch-batch-module~category-category-module~course-course-module~email-email-module~enquirie~b615e052"), __webpack_require__.e("source-source-module")]).then(__webpack_require__.bind(null, /*! ./source/source.module */ "./src/app/enquiry/source/source.module.ts")).then(function (m) { return m.SourceModule; });
        }
    }
];


/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvY29udGVudC9jb250ZW50LWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: ContentLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentLayoutComponent", function() { return ContentLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var ContentLayoutComponent = /** @class */ (function () {
    function ContentLayoutComponent(configService, document, renderer) {
        this.configService = configService;
        this.document = document;
        this.renderer = renderer;
        this.config = {};
    }
    ContentLayoutComponent.prototype.ngOnInit = function () {
        this.config = this.configService.templateConf;
    };
    ContentLayoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.config.layout.dir) {
                _this.direction = _this.config.layout.dir;
            }
            if (_this.config.layout.variant === "Dark") {
                _this.renderer.addClass(_this.document.body, 'layout-dark');
            }
            else if (_this.config.layout.variant === "Transparent") {
                _this.renderer.addClass(_this.document.body, 'layout-dark');
                _this.renderer.addClass(_this.document.body, 'layout-transparent');
                if (_this.config.layout.sidebar.backgroundColor) {
                    _this.renderer.addClass(_this.document.body, _this.config.layout.sidebar.backgroundColor);
                }
                else {
                    _this.renderer.addClass(_this.document.body, 'bg-glass-1');
                }
            }
        }, 0);
    };
    ContentLayoutComponent.ctorParameters = function () { return [
        { type: app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content-wrapper', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ContentLayoutComponent.prototype, "wrapper", void 0);
    ContentLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content-layout',
            template: __webpack_require__(/*! raw-loader!./content-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/content/content-layout.component.html"),
            styles: [__webpack_require__(/*! ./content-layout.component.scss */ "./src/app/layouts/content/content-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            Document,
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], ContentLayoutComponent);
    return ContentLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZnVsbC9mdWxsLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.ts ***!
  \*******************************************************/
/*! exports provided: FullLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutComponent", function() { return FullLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent(elementRef, configService, document, renderer) {
        this.elementRef = elementRef;
        this.configService = configService;
        this.document = document;
        this.renderer = renderer;
        this.options = {
            direction: 'ltr',
            bgColor: 'black',
            bgImage: 'assets/img/sidebar-bg/01.jpg'
        };
        this.iscollapsed = false;
        this.isSidebar_sm = false;
        this.isSidebar_lg = false;
        this.bgColor = 'black';
        this.bgImage = 'assets/img/sidebar-bg/01.jpg';
        this.config = {};
    }
    FullLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.config = this.configService.templateConf;
        this.bgColor = this.config.layout.sidebar.backgroundColor;
        if (!this.config.layout.sidebar.backgroundImage) {
            this.bgImage = '';
        }
        else {
            this.bgImage = this.config.layout.sidebar.backgroundImageURL;
        }
        if (this.config.layout.variant === "Transparent") {
            if (this.config.layout.sidebar.backgroundColor.toString().trim() === '') {
                this.bgColor = 'bg-glass-1';
            }
        }
        else {
            if (this.config.layout.sidebar.backgroundColor.toString().trim() === '') {
                this.bgColor = 'black';
            }
        }
        setTimeout(function () {
            if (_this.config.layout.sidebar.size === 'sidebar-lg') {
                _this.isSidebar_sm = false;
                _this.isSidebar_lg = true;
            }
            else if (_this.config.layout.sidebar.size === 'sidebar-sm') {
                _this.isSidebar_sm = true;
                _this.isSidebar_lg = false;
            }
            else {
                _this.isSidebar_sm = false;
                _this.isSidebar_lg = false;
            }
            _this.iscollapsed = _this.config.layout.sidebar.collapsed;
        }, 0);
    };
    FullLayoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.config.layout.dir) {
                _this.options.direction = _this.config.layout.dir;
            }
            if (_this.config.layout.variant === "Dark") {
                _this.renderer.addClass(_this.document.body, 'layout-dark');
            }
            else if (_this.config.layout.variant === "Transparent") {
                _this.renderer.addClass(_this.document.body, 'layout-dark');
                _this.renderer.addClass(_this.document.body, 'layout-transparent');
                if (_this.config.layout.sidebar.backgroundColor) {
                    _this.renderer.addClass(_this.document.body, _this.config.layout.sidebar.backgroundColor);
                }
                else {
                    _this.renderer.addClass(_this.document.body, 'bg-glass-1');
                }
                _this.bgColor = 'black';
                _this.options.bgColor = 'black';
                _this.bgImage = '';
                _this.options.bgImage = '';
                _this.bgImage = '';
                _this.renderer.setAttribute(_this.sidebarBgImage.nativeElement, 'style', 'display: none');
            }
        }, 0);
    };
    FullLayoutComponent.prototype.toggleHideSidebar = function ($event) {
        var _this = this;
        setTimeout(function () {
            _this.hideSidebar = $event;
        }, 0);
    };
    FullLayoutComponent.prototype.getOptions = function ($event) {
        this.options = $event;
    };
    FullLayoutComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidebarBgImage', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FullLayoutComponent.prototype, "sidebarBgImage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appSidebar', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FullLayoutComponent.prototype, "appSidebar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('wrapper', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FullLayoutComponent.prototype, "wrapper", void 0);
    FullLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-full-layout',
            template: __webpack_require__(/*! raw-loader!./full-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/full/full-layout.component.html"),
            styles: [__webpack_require__(/*! ./full-layout.component.scss */ "./src/app/layouts/full/full-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            Document,
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/animations/custom-animations.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/animations/custom-animations.ts ***!
  \********************************************************/
/*! exports provided: customAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customAnimations", function() { return customAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var customAnimations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0px' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 <=> 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200))
    ])
];


/***/ }),

/***/ "./src/app/shared/auth/auth-guard.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/auth/auth-guard.service.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/auth/auth.service.ts");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.authService.isAuthenticated();
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/auth/auth.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/auth/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.signupUser = function (email, password) {
        //your code for signing up the new user
    };
    AuthService.prototype.signinUser = function (email, password) {
        //your code for checking credentials and getting tokens for for signing in user
    };
    AuthService.prototype.logout = function () {
        this.token = null;
    };
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.isAuthenticated = function () {
        // here you can check if user is authenticated or not through his token 
        return true;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebar.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/directives/sidebar.directive.ts ***!
  \********************************************************/
/*! exports provided: SidebarDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarDirective", function() { return SidebarDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SidebarDirective = /** @class */ (function () {
    function SidebarDirective(el, renderer, router, cd) {
        this.el = el;
        this.renderer = renderer;
        this.router = router;
        this.cd = cd;
        this.navlinks = [];
        this.activeLinks = [];
        this.toggleHideSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SidebarDirective.prototype.ngOnInit = function () {
        this.activeRoute = this.router.url;
        this.innerWidth = window.innerWidth;
    };
    SidebarDirective.prototype.ngAfterViewInit = function () {
        var element = this.el.nativeElement;
        this.$wrapper = this.renderer.parentNode(this.el.nativeElement); // document.getElementsByClassName("wrapper")[0];
        var $sidebar_img_container = this.el.nativeElement.querySelector('.sidebar-background');
        var $sidebar_img = element.getAttribute("data-image");
        if ($sidebar_img_container.length !== 0 && $sidebar_img !== undefined) {
            this.renderer.setAttribute($sidebar_img_container, 'style', 'background-image: url("' + $sidebar_img + '")');
        }
        if (!this.$wrapper.classList.contains("nav-collapsed")) {
            this.expandActive();
        }
        if (this.innerWidth < 992) {
            this.renderer.removeClass(this.$wrapper, 'nav-collapsed');
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            this.toggleHideSidebar.emit(true);
        }
        this.cd.detectChanges();
    };
    SidebarDirective.prototype.onMouseOver = function (e) {
        if (this.$wrapper.classList.contains("nav-collapsed")) {
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            this.navlinks
                .filter(function (_) { return _.navCollapsedOpen === true; })
                .forEach(function (link) {
                link.open = true;
                link.navCollapsedOpen = false;
            });
        }
    };
    SidebarDirective.prototype.onMouseOut = function (e) {
        if (this.$wrapper.classList.contains("nav-collapsed")) {
            this.renderer.addClass(this.$wrapper, 'menu-collapsed');
            this.navlinks
                .filter(function (_) { return _.open === true; })
                .forEach(function (link) {
                link.open = false;
                link.navCollapsedOpen = true;
            });
        }
    };
    SidebarDirective.prototype.onClick = function (e) {
        if (e.target.parentElement.classList.contains("logo-text") ||
            e.target.parentElement.classList.contains("logo-img")) {
            this.activeLinks = [];
            this.activeRoute = this.router.url;
            this.expandActive();
            this.hideSidebar();
        }
        else if (e.target.parentElement.classList.contains("nav-close") ||
            e.target.classList.contains("nav-close")) {
            this.toggleHideSidebar.emit(true);
        }
    };
    SidebarDirective.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
        if (event.target.innerWidth < 992) {
            this.renderer.removeClass(this.$wrapper, 'nav-collapsed');
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            this.toggleHideSidebar.emit(true);
        }
        if (event.target.innerWidth > 992) {
            var toggleStatus = this.el.nativeElement;
            this.el.nativeElement.querySelector('.toggle-icon')
                .getAttribute("data-toggle");
            if (toggleStatus === "collapsed" &&
                this.$wrapper.classList.contains("nav-collapsed") &&
                this.$wrapper.classList.contains("menu-collapsed")) {
                this.$wrapper.classList.add("nav-collapsed");
                this.$wrapper.classList.add("menu-collapsed");
            }
            this.toggleHideSidebar.emit(false);
        }
    };
    // check outside click and close sidebar for smaller screen <992
    SidebarDirective.prototype.onOutsideClick = function (event) {
        if (this.innerWidth < 992) {
            var clickedComponent = event.target;
            var inside = false;
            do {
                if (clickedComponent === this.el.nativeElement) {
                    inside = true;
                }
                clickedComponent = clickedComponent.parentNode;
            } while (clickedComponent);
            if (!this.el.nativeElement.classList.contains("hide-sidebar") &&
                !inside &&
                !event.target.classList.contains("navbar-toggle")) {
                this.toggleHideSidebar.emit(true);
            }
        }
    };
    SidebarDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    SidebarDirective.prototype.getLinks = function () {
        return this.navlinks;
    };
    SidebarDirective.prototype.hideSidebar = function () {
        if (this.innerWidth < 992) {
            this.toggleHideSidebar.emit(true);
        }
    };
    SidebarDirective.prototype.expandActive = function () {
        var _this = this;
        this.navlinks
            .filter(function (_) { return _.routePath === _this.activeRoute; })
            .forEach(function (link) {
            link.isShown = true;
            if (link.level.toString().trim() === "3") {
                _this.navlinks
                    .filter(function (_) { return _.level.toString().trim() === "2" && _.title === link.parent; })
                    .forEach(function (parentLink) {
                    parentLink.open = true;
                    _this.activeLinks.push(parentLink.title);
                    _this.navlinks
                        .filter(function (_) {
                        return _.level.toString().trim() === "1" &&
                            _.title === parentLink.parent;
                    })
                        .forEach(function (superParentLink) {
                        superParentLink.open = true;
                        _this.activeLinks.push(superParentLink.title);
                        superParentLink.toggleEmit.emit(_this.activeLinks);
                    });
                });
            }
            else if (link.level.toString().trim() === "2") {
                _this.navlinks
                    .filter(function (_) { return _.level.toString().trim() === "1" && _.title === link.parent; })
                    .forEach(function (parentLink) {
                    parentLink.open = true;
                    _this.activeLinks.push(parentLink.title);
                    parentLink.toggleEmit.emit(_this.activeLinks);
                });
            }
        });
    };
    SidebarDirective.prototype.toggleActiveList = function () {
        var _this = this;
        this.navlinks
            .filter(function (_) {
            return _.level.toString().trim() === "3" && _.routePath !== _this.activeRoute;
        })
            .forEach(function (link) {
            link.active = false;
        });
    };
    SidebarDirective.prototype.setIsShown = function (parentLink) {
        var childLevel = Number(parentLink.level) + 1;
        this.navlinks
            .filter(function (_) {
            return _.level.toString().trim() === childLevel.toString().trim() &&
                _.parent === parentLink.title;
        })
            .forEach(function (link) {
            link.isShown = true;
            link.isHidden = false;
        });
    };
    SidebarDirective.prototype.setIsHidden = function (parentLink) {
        var childLevel = Number(parentLink.level) + 1;
        this.navlinks
            .filter(function (_) {
            return _.level.toString().trim() === childLevel.toString().trim() &&
                _.parent === parentLink.title;
        })
            .forEach(function (link) {
            link.isShown = false;
            link.isHidden = true;
        });
    };
    SidebarDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidebarDirective.prototype, "toggleHideSidebar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseenter", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarDirective.prototype, "onMouseOver", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseleave", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarDirective.prototype, "onMouseOut", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarDirective.prototype, "onClick", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:resize", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarDirective.prototype, "onResize", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:click", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarDirective.prototype, "onOutsideClick", null);
    SidebarDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: "[appSidebar]" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], SidebarDirective);
    return SidebarDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebaranchortoggle.directive.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/directives/sidebaranchortoggle.directive.ts ***!
  \********************************************************************/
/*! exports provided: SidebarAnchorToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarAnchorToggleDirective", function() { return SidebarAnchorToggleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebarlink.directive */ "./src/app/shared/directives/sidebarlink.directive.ts");



var SidebarAnchorToggleDirective = /** @class */ (function () {
    function SidebarAnchorToggleDirective(navlink) {
        this.navlink = navlink;
    }
    SidebarAnchorToggleDirective.prototype.onClick = function () {
        this.navlink.toggle();
    };
    SidebarAnchorToggleDirective.ctorParameters = function () { return [
        { type: _sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarLinkDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarLinkDirective"],] }] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarAnchorToggleDirective.prototype, "onClick", null);
    SidebarAnchorToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: "[appSidebarAnchorToggle]"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarLinkDirective"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarLinkDirective"]])
    ], SidebarAnchorToggleDirective);
    return SidebarAnchorToggleDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebarlink.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/sidebarlink.directive.ts ***!
  \************************************************************/
/*! exports provided: SidebarLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarLinkDirective", function() { return SidebarLinkDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebarlist.directive */ "./src/app/shared/directives/sidebarlist.directive.ts");
/* harmony import */ var _sidebar_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.directive */ "./src/app/shared/directives/sidebar.directive.ts");




var SidebarLinkDirective = /** @class */ (function () {
    function SidebarLinkDirective(sidebarList, sidebar, el) {
        this.el = el;
        this.toggleEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sidebarList = sidebarList;
        this.sidebar = sidebar;
    }
    Object.defineProperty(SidebarLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarLinkDirective.prototype, "navCollapsedOpen", {
        get: function () {
            return this._navCollapsedOpen;
        },
        set: function (value) {
            this._navCollapsedOpen = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarLinkDirective.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (value) {
            this._active = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarLinkDirective.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        set: function (value) {
            this._isShown = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarLinkDirective.prototype, "isHidden", {
        get: function () {
            return this._isHidden;
        },
        set: function (value) {
            this._isHidden = value;
        },
        enumerable: true,
        configurable: true
    });
    SidebarLinkDirective.prototype.ngOnInit = function () {
        this.sidebar.addLink(this);
    };
    SidebarLinkDirective.prototype.toggle = function () {
        this.sidebarList.activeLinks = [];
        this.sidebarList.setList(this.sidebar.getLinks());
        var classList = this.el.nativeElement.classList;
        if (this.level.toString().trim() === "3") {
            this.active = true;
            this.sidebarList.toggleActiveList(this);
            this.sidebar.hideSidebar();
        }
        if (this.level.toString().trim() === "1" && !classList.contains("has-sub")) {
            this.sidebarList.collapseOtherLinks(this);
        }
        if (classList.contains("has-sub") && classList.contains("open")) {
            this.sidebarList.collapse(this);
        }
        else {
            if (classList.contains("has-sub")) {
                this.sidebarList.expand(this);
            }
        }
    };
    SidebarLinkDirective.ctorParameters = function () { return [
        { type: _sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarListDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarListDirective"],] }] },
        { type: _sidebar_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_sidebar_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarDirective"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SidebarLinkDirective.prototype, "level", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SidebarLinkDirective.prototype, "classes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SidebarLinkDirective.prototype, "parent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SidebarLinkDirective.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SidebarLinkDirective.prototype, "routePath", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidebarLinkDirective.prototype, "toggleEmit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.open"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarLinkDirective.prototype, "open", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.nav-collapsed-open"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarLinkDirective.prototype, "navCollapsedOpen", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.active"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarLinkDirective.prototype, "active", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.is-shown"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarLinkDirective.prototype, "isShown", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.is-hidden"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarLinkDirective.prototype, "isHidden", null);
    SidebarLinkDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: "[appSidebarlink]" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarListDirective"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_sidebar_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarDirective"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarListDirective"],
            _sidebar_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarDirective"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SidebarLinkDirective);
    return SidebarLinkDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebarlist.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/sidebarlist.directive.ts ***!
  \************************************************************/
/*! exports provided: SidebarListDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarListDirective", function() { return SidebarListDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarListDirective = /** @class */ (function () {
    function SidebarListDirective() {
        this.navlinks = [];
        this.activeLinks = [];
    }
    SidebarListDirective.prototype.setList = function (list) {
        this.navlinks = list;
    };
    SidebarListDirective.prototype.collapse = function (link) {
        link.open = false;
        this.setIsHidden(link);
        if (link.level.toString().trim() === "2") {
            this.activeLinks.push(this.navlinks
                .filter(function (_) { return _.level.toString().trim() === "1" && _.open === true; })[0].title);
        }
        link.toggleEmit.emit(this.activeLinks);
    };
    SidebarListDirective.prototype.expand = function (link) {
        link.open = true;
        this.activeLinks.push(link.title);
        this.collapseOtherLinks(link);
        this.setIsShown(link);
        link.toggleEmit.emit(this.activeLinks);
    };
    SidebarListDirective.prototype.toggleActiveList = function (openLink) {
        this.navlinks
            .filter(function (_) { return _.level.toString().trim() === "3"; })
            .forEach(function (link) {
            if (link !== openLink) {
                link.active = false;
            }
        });
    };
    SidebarListDirective.prototype.collapseOtherLinks = function (openLink) {
        var _this = this;
        if (openLink.level.toString().trim() === "1") {
            this.navlinks
                .filter(function (_) {
                return (_.level.toString().trim() === openLink.level.toString().trim() ||
                    _.level.toString().trim() === "2") &&
                    _.open === true;
            })
                .forEach(function (link) {
                if (link !== openLink) {
                    link.open = false;
                    _this.setIsHidden(link);
                }
            });
        }
        else if (openLink.level.toString().trim() === "2") {
            this.activeLinks.push(this.navlinks
                .filter(function (_) { return _.level.toString().trim() === "1" && _.open === true; })[0].title);
            this.navlinks
                .filter(function (_) {
                return _.level.toString().trim() === openLink.level.toString().trim() &&
                    _.parent === openLink.parent &&
                    _.open === true;
            })
                .forEach(function (link) {
                if (link !== openLink) {
                    link.open = false;
                    _this.setIsHidden(link);
                }
            });
        }
    };
    SidebarListDirective.prototype.setIsShown = function (parentLink) {
        var childLevel = Number(parentLink.level) + 1;
        this.navlinks
            .filter(function (_) {
            return _.level.toString().trim() === childLevel.toString().trim() &&
                _.parent === parentLink.title;
        })
            .forEach(function (link) {
            link.isShown = true;
            link.isHidden = false;
        });
    };
    SidebarListDirective.prototype.setIsHidden = function (parentLink) {
        var childLevel = Number(parentLink.level) + 1;
        this.navlinks
            .filter(function (_) {
            return _.level.toString().trim() === childLevel.toString().trim() &&
                _.parent === parentLink.title;
        })
            .forEach(function (link) {
            link.isShown = false;
            link.isHidden = true;
        });
    };
    SidebarListDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: "[appSidebarList]" })
    ], SidebarListDirective);
    return SidebarListDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebartoggle.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/sidebartoggle.directive.ts ***!
  \**************************************************************/
/*! exports provided: SidebarToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarToggleDirective", function() { return SidebarToggleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarToggleDirective = /** @class */ (function () {
    function SidebarToggleDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this._dataToggle = "expanded";
        this._toggleRight = true;
        this._toggleLeft = false;
        this.fireRefreshEventOnWindow = function () {
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("resize", true, false);
            window.dispatchEvent(evt);
        };
    }
    Object.defineProperty(SidebarToggleDirective.prototype, "dataToggle", {
        get: function () {
            return this._dataToggle;
        },
        set: function (value) {
            this._dataToggle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarToggleDirective.prototype, "toggleRight", {
        get: function () {
            return this._toggleRight;
        },
        set: function (value) {
            this._toggleRight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarToggleDirective.prototype, "toggleLeft", {
        get: function () {
            return this._toggleLeft;
        },
        set: function (value) {
            this._toggleLeft = value;
        },
        enumerable: true,
        configurable: true
    });
    SidebarToggleDirective.prototype.ngAfterViewInit = function () {
        this.$wrapper = document.getElementsByClassName("wrapper")[0];
        this.compact_menu_checkbox = this.$wrapper.querySelector('.cz-compact-menu');
    };
    SidebarToggleDirective.prototype.onClick = function (e) {
        var _this = this;
        if (this.dataToggle === "expanded") {
            this.dataToggle = "collapsed";
            this.renderer.addClass(this.$wrapper, 'nav-collapsed');
            if (this.compact_menu_checkbox) {
                this.compact_menu_checkbox.checked = true;
            }
        }
        else {
            this.dataToggle = "expanded";
            this.renderer.removeClass(this.$wrapper, 'nav-collapsed');
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            if (this.compact_menu_checkbox) {
                this.compact_menu_checkbox.checked = false;
            }
        }
        this.toggleLeft = !this.toggleLeft;
        this.toggleRight = !this.toggleRight;
        setTimeout(function () {
            _this.fireRefreshEventOnWindow();
        }, 300);
    };
    SidebarToggleDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("attr.data-toggle"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], SidebarToggleDirective.prototype, "dataToggle", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.ft-toggle-right"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarToggleDirective.prototype, "toggleRight", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.ft-toggle-left"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarToggleDirective.prototype, "toggleLeft", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarToggleDirective.prototype, "onClick", null);
    SidebarToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: "[appSidebarToggle]" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], SidebarToggleDirective);
    return SidebarToggleDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/toggle-fullscreen.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/directives/toggle-fullscreen.directive.ts ***!
  \******************************************************************/
/*! exports provided: ToggleFullscreenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFullscreenDirective", function() { return ToggleFullscreenDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);



var ToggleFullscreenDirective = /** @class */ (function () {
    function ToggleFullscreenDirective() {
    }
    ToggleFullscreenDirective.prototype.onClick = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_2__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_2__["toggle"]();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ToggleFullscreenDirective.prototype, "onClick", null);
    ToggleFullscreenDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appToggleFullscreen]'
        })
    ], ToggleFullscreenDirective);
    return ToggleFullscreenDirective;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        //Variables
        this.currentDate = new Date();
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/config.service */ "./src/app/shared/services/config.service.ts");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(translate, layoutService, configService) {
        this.translate = translate;
        this.layoutService = layoutService;
        this.configService = configService;
        this.currentLang = "en";
        this.toggleClass = "ft-maximize";
        this.placement = "bottom-right";
        this.isCollapsed = true;
        this.toggleHideSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.config = {};
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : "en");
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.config = this.configService.templateConf;
    };
    NavbarComponent.prototype.ngAfterViewInit = function () {
        if (this.config.layout.dir) {
            var dir = this.config.layout.dir;
            if (dir === "rtl") {
                this.placement = "bottom-left";
            }
            else if (dir === "ltr") {
                this.placement = "bottom-right";
            }
        }
    };
    NavbarComponent.prototype.ChangeLanguage = function (language) {
        this.translate.use(language);
    };
    NavbarComponent.prototype.ToggleClass = function () {
        if (this.toggleClass === "ft-maximize") {
            this.toggleClass = "ft-minimize";
        }
        else {
            this.toggleClass = "ft-maximize";
        }
    };
    NavbarComponent.prototype.toggleNotificationSidebar = function () {
        this.layoutService.emitChange(true);
    };
    NavbarComponent.prototype.toggleSidebar = function () {
        var appSidebar = document.getElementsByClassName("app-sidebar")[0];
        if (appSidebar.classList.contains("hide-sidebar")) {
            this.toggleHideSidebar.emit(false);
        }
        else {
            this.toggleHideSidebar.emit(true);
        }
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"] },
        { type: _services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavbarComponent.prototype, "toggleHideSidebar", void 0);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-navbar",
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"], _services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/notification-sidebar/notification-sidebar.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/notification-sidebar/notification-sidebar.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#notification-sidebar {\n  width: 400px;\n  right: -400px;\n  padding: 0;\n  background-color: #FFF;\n  z-index: 1051;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  height: 100vh;\n  transition: right 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-left: 1px solid rgba(0, 0, 0, 0.05);\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); }\n  #notification-sidebar.open {\n    right: 0; }\n  #notification-sidebar .notification-sidebar-content {\n    position: relative;\n    height: 100%;\n    padding: 10px; }\n  #notification-sidebar .notification-sidebar-content #timeline.timeline-left .timeline-item:before {\n      border: none; }\n  #notification-sidebar .notification-sidebar-content #timeline.timeline-left .timeline-item:after {\n      border: none; }\n  #notification-sidebar .notification-sidebar-content #settings .switch {\n      border: none; }\n  #notification-sidebar a.notification-sidebar-toggle {\n    background: #FFF;\n    color: theme-color(\"primary\");\n    display: block;\n    box-shadow: -3px 0px 8px rgba(0, 0, 0, 0.1); }\n  #notification-sidebar a.notification-sidebar-close {\n    color: #000; }\n  #notification-sidebar .notification-sidebar-close {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    padding: 7px;\n    width: auto;\n    z-index: 10; }\n  #notification-sidebar .notification-sidebar-toggle {\n    position: absolute;\n    top: 35%;\n    width: 54px;\n    height: 50px;\n    left: -54px;\n    text-align: center;\n    line-height: 50px;\n    cursor: pointer; }\n  [dir=\"rtl\"] :host ::ng-deep #notification-sidebar {\n  left: -400px;\n  right: auto; }\n  [dir=\"rtl\"] :host ::ng-deep #notification-sidebar.open {\n    left: 0;\n    right: auto; }\n  [dir=\"rtl\"] :host ::ng-deep #notification-sidebar .notification-sidebar-close {\n    left: 10px;\n    right: auto; }\n  [dir=\"rtl\"] :host ::ng-deep #notification-sidebar .notification-sidebar-toggle {\n    right: -54px;\n    left: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25vdGlmaWNhdGlvbi1zaWRlYmFyL0Q6XFx3b3JrXFxJTVMvc3JjXFxhcHBcXHNoYXJlZFxcbm90aWZpY2F0aW9uLXNpZGViYXJcXG5vdGlmaWNhdGlvbi1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvbm90aWZpY2F0aW9uLXNpZGViYXIvbm90aWZpY2F0aW9uLXNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFZO0VBQ1QsYUFBYTtFQUNoQixVQUFVO0VBQ1Asc0JBQXNCO0VBQ3pCLGFBQWE7RUFDVixlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxhQUFhO0VBQ2IsMERBQTBEO0VBQzFELG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsMENBQTBDO0VBQzFDLHNDQUFzQyxFQUFBO0VBYjFDO0lBZ0JFLFFBQVEsRUFBQTtFQWhCVjtJQXNCRSxrQkFBa0I7SUFDZixZQUFZO0lBQ1osYUFBYSxFQUFBO0VBeEJsQjtNQThCTSxZQUFXLEVBQUE7RUE5QmpCO01BaUNNLFlBQVcsRUFBQTtFQWpDakI7TUF5Q0ksWUFBWSxFQUFBO0VBekNoQjtJQWdERSxnQkFBZ0I7SUFDaEIsNkJBQTRCO0lBQzVCLGNBQWM7SUFDWCwyQ0FBMkMsRUFBQTtFQW5EaEQ7SUFzREssV0FBVyxFQUFBO0VBdERoQjtJQXlERSxrQkFBa0I7SUFDZixXQUFXO0lBQ1gsU0FBUztJQUNULFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVyxFQUFBO0VBOURoQjtJQWlFRSxrQkFBa0I7SUFDZixRQUFRO0lBQ1IsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7RUN0QnBCO0VEZ0NFLFlBQVk7RUFDWixXQUFXLEVBQUE7RUM5Qlg7SURnQ0MsT0FBTztJQUNQLFdBQVcsRUFBQTtFQzlCWjtJRGlDQyxVQUFVO0lBQ1YsV0FBVyxFQUFBO0VDL0JaO0lEa0NDLFlBQVk7SUFDWixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbm90aWZpY2F0aW9uLXNpZGViYXIvbm90aWZpY2F0aW9uLXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbm90aWZpY2F0aW9uLXNpZGViYXJ7XG5cdHdpZHRoOiA0MDBweDtcbiAgICByaWdodDogLTQwMHB4O1xuXHRwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG5cdHotaW5kZXg6IDEwNTE7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB0cmFuc2l0aW9uOiByaWdodCAwLjRzIGN1YmljLWJlemllcigwLjA1LCAwLjc0LCAwLjIsIDAuOTkpO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cblx0Ji5vcGVue1xuXHRcdHJpZ2h0OiAwO1xuXHR9XG5cblx0XG5cblx0Lm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNvbnRlbnR7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuICAgIFx0aGVpZ2h0OiAxMDAlO1xuICAgIFx0cGFkZGluZzogMTBweDtcblxuICAgIFx0I3RpbWVsaW5le1xuICAgIFx0XHQmLnRpbWVsaW5lLWxlZnR7XG4gICAgXHRcdFx0LnRpbWVsaW5lLWl0ZW17XG4gICAgXHRcdFx0XHQmOmJlZm9yZXtcblx0XHRcdFx0XHRcdGJvcmRlcjpub25lO1xuICAgIFx0XHRcdFx0fVxuICAgIFx0XHRcdFx0JjphZnRlcntcblx0XHRcdFx0XHRcdGJvcmRlcjpub25lO1xuICAgIFx0XHRcdFx0fVxuICAgIFx0XHRcdH1cbiAgICBcdFx0fVxuXHRcdH1cblx0XHRcblx0XHQjc2V0dGluZ3N7XG5cdFx0XHQuc3dpdGNoe1xuXHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHRhLm5vdGlmaWNhdGlvbi1zaWRlYmFyLXRvZ2dsZXtcblx0XHRiYWNrZ3JvdW5kOiAjRkZGO1xuXHRcdGNvbG9yOnRoZW1lLWNvbG9yKCdwcmltYXJ5Jyk7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG4gICAgXHRib3gtc2hhZG93OiAtM3B4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXHR9XG5cdGEubm90aWZpY2F0aW9uLXNpZGViYXItY2xvc2Uge1xuICAgIFx0Y29sb3I6ICMwMDA7XG5cdH1cblx0Lm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNsb3Nle1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ICAgIHJpZ2h0OiAxMHB4O1xuXHQgICAgdG9wOiAxMHB4O1xuXHQgICAgcGFkZGluZzogN3B4O1xuXHQgICAgd2lkdGg6IGF1dG87XG5cdCAgICB6LWluZGV4OiAxMDtcblx0fVxuXHQubm90aWZpY2F0aW9uLXNpZGViYXItdG9nZ2xle1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ICAgIHRvcDogMzUlO1xuXHQgICAgd2lkdGg6IDU0cHg7XG5cdCAgICBoZWlnaHQ6IDUwcHg7XG5cdCAgICBsZWZ0OiAtNTRweDtcblx0ICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0ICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuXHQgICAgY3Vyc29yOiBwb2ludGVyO1xuXHR9XG5cdFxuXG5cdFxuXG59XG5cbltkaXI9XCJydGxcIl0gOmhvc3QgOjpuZy1kZWVwe1xuXHQjbm90aWZpY2F0aW9uLXNpZGViYXJ7XHRcblx0XHRsZWZ0OiAtNDAwcHg7XHRcblx0XHRyaWdodDogYXV0bztcdCAgIFxuXHRcdCYub3Blbntcblx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRyaWdodDogYXV0bztcblx0XHR9XG5cdFx0Lm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNsb3Nle1xuXHRcdFx0bGVmdDogMTBweDtcblx0XHRcdHJpZ2h0OiBhdXRvO1xuXHRcdH1cblx0XHQubm90aWZpY2F0aW9uLXNpZGViYXItdG9nZ2xle1x0XG5cdFx0XHRyaWdodDogLTU0cHg7XG5cdFx0XHRsZWZ0OiBhdXRvO1xuXHRcdH1cdFxuXHR9XG59IiwiI25vdGlmaWNhdGlvbi1zaWRlYmFyIHtcbiAgd2lkdGg6IDQwMHB4O1xuICByaWdodDogLTQwMHB4O1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICB6LWluZGV4OiAxMDUxO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0cmFuc2l0aW9uOiByaWdodCAwLjRzIGN1YmljLWJlemllcigwLjA1LCAwLjc0LCAwLjIsIDAuOTkpO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cbiAgI25vdGlmaWNhdGlvbi1zaWRlYmFyLm9wZW4ge1xuICAgIHJpZ2h0OiAwOyB9XG4gICNub3RpZmljYXRpb24tc2lkZWJhciAubm90aWZpY2F0aW9uLXNpZGViYXItY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4OyB9XG4gICAgI25vdGlmaWNhdGlvbi1zaWRlYmFyIC5ub3RpZmljYXRpb24tc2lkZWJhci1jb250ZW50ICN0aW1lbGluZS50aW1lbGluZS1sZWZ0IC50aW1lbGluZS1pdGVtOmJlZm9yZSB7XG4gICAgICBib3JkZXI6IG5vbmU7IH1cbiAgICAjbm90aWZpY2F0aW9uLXNpZGViYXIgLm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNvbnRlbnQgI3RpbWVsaW5lLnRpbWVsaW5lLWxlZnQgLnRpbWVsaW5lLWl0ZW06YWZ0ZXIge1xuICAgICAgYm9yZGVyOiBub25lOyB9XG4gICAgI25vdGlmaWNhdGlvbi1zaWRlYmFyIC5ub3RpZmljYXRpb24tc2lkZWJhci1jb250ZW50ICNzZXR0aW5ncyAuc3dpdGNoIHtcbiAgICAgIGJvcmRlcjogbm9uZTsgfVxuICAjbm90aWZpY2F0aW9uLXNpZGViYXIgYS5ub3RpZmljYXRpb24tc2lkZWJhci10b2dnbGUge1xuICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgY29sb3I6IHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3gtc2hhZG93OiAtM3B4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XG4gICNub3RpZmljYXRpb24tc2lkZWJhciBhLm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNsb3NlIHtcbiAgICBjb2xvcjogIzAwMDsgfVxuICAjbm90aWZpY2F0aW9uLXNpZGViYXIgLm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiAxMHB4O1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICB6LWluZGV4OiAxMDsgfVxuICAjbm90aWZpY2F0aW9uLXNpZGViYXIgLm5vdGlmaWNhdGlvbi1zaWRlYmFyLXRvZ2dsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzUlO1xuICAgIHdpZHRoOiA1NHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBsZWZ0OiAtNTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbltkaXI9XCJydGxcIl0gOmhvc3QgOjpuZy1kZWVwICNub3RpZmljYXRpb24tc2lkZWJhciB7XG4gIGxlZnQ6IC00MDBweDtcbiAgcmlnaHQ6IGF1dG87IH1cbiAgW2Rpcj1cInJ0bFwiXSA6aG9zdCA6Om5nLWRlZXAgI25vdGlmaWNhdGlvbi1zaWRlYmFyLm9wZW4ge1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IGF1dG87IH1cbiAgW2Rpcj1cInJ0bFwiXSA6aG9zdCA6Om5nLWRlZXAgI25vdGlmaWNhdGlvbi1zaWRlYmFyIC5ub3RpZmljYXRpb24tc2lkZWJhci1jbG9zZSB7XG4gICAgbGVmdDogMTBweDtcbiAgICByaWdodDogYXV0bzsgfVxuICBbZGlyPVwicnRsXCJdIDpob3N0IDo6bmctZGVlcCAjbm90aWZpY2F0aW9uLXNpZGViYXIgLm5vdGlmaWNhdGlvbi1zaWRlYmFyLXRvZ2dsZSB7XG4gICAgcmlnaHQ6IC01NHB4O1xuICAgIGxlZnQ6IGF1dG87IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/notification-sidebar/notification-sidebar.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/notification-sidebar/notification-sidebar.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NotificationSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationSidebarComponent", function() { return NotificationSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/shared/services/layout.service.ts");



var NotificationSidebarComponent = /** @class */ (function () {
    function NotificationSidebarComponent(elRef, renderer, layoutService) {
        var _this = this;
        this.elRef = elRef;
        this.renderer = renderer;
        this.layoutService = layoutService;
        this.isOpen = false;
        this.layoutSub = layoutService.changeEmitted$.subscribe(function (value) {
            if (_this.isOpen) {
                _this.renderer.removeClass(_this.sidebar.nativeElement, 'open');
                _this.isOpen = false;
            }
            else {
                _this.renderer.addClass(_this.sidebar.nativeElement, 'open');
                _this.isOpen = true;
            }
        });
    }
    NotificationSidebarComponent.prototype.ngOnInit = function () {
    };
    NotificationSidebarComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    NotificationSidebarComponent.prototype.onClose = function () {
        this.renderer.removeClass(this.sidebar.nativeElement, 'open');
        this.isOpen = false;
    };
    NotificationSidebarComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidebar', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NotificationSidebarComponent.prototype, "sidebar", void 0);
    NotificationSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification-sidebar',
            template: __webpack_require__(/*! raw-loader!./notification-sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/notification-sidebar/notification-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./notification-sidebar.component.scss */ "./src/app/shared/notification-sidebar/notification-sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]])
    ], NotificationSidebarComponent);
    return NotificationSidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/routes/content-layout.routes.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/routes/content-layout.routes.ts ***!
  \********************************************************/
/*! exports provided: CONTENT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_ROUTES", function() { return CONTENT_ROUTES; });
//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...
var CONTENT_ROUTES = [
    {
        path: 'content-layout',
        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-content-layout-page-content-pages-module */ "pages-content-layout-page-content-pages-module").then(__webpack_require__.bind(null, /*! ../../pages/content-layout-page/content-pages.module */ "./src/app/pages/content-layout-page/content-pages.module.ts")).then(function (m) { return m.ContentPagesModule; }); }
    }
];


/***/ }),

/***/ "./src/app/shared/routes/full-layout.routes.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/routes/full-layout.routes.ts ***!
  \*****************************************************/
/*! exports provided: Full_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Full_ROUTES", function() { return Full_ROUTES; });
/* harmony import */ var app_courses_course_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/courses/course.routes */ "./src/app/courses/course.routes.ts");
/* harmony import */ var app_student_student_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/student/student-routing.module */ "./src/app/student/student-routing.module.ts");
/* harmony import */ var app_enquiry_enquiry_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/enquiry/enquiry.routes */ "./src/app/enquiry/enquiry.routes.ts");



//Route for content layout with sidebar, navbar and footer
var Full_ROUTES = [
    {
        path: "changelog",
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | changelog-changelog-module */ "changelog-changelog-module").then(__webpack_require__.bind(null, /*! ../../changelog/changelog.module */ "./src/app/changelog/changelog.module.ts")).then(function (m) { return m.ChangeLogModule; });
        }
    },
    {
        path: "full-layout",
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | pages-full-layout-page-full-pages-module */ "pages-full-layout-page-full-pages-module").then(__webpack_require__.bind(null, /*! ../../pages/full-layout-page/full-pages.module */ "./src/app/pages/full-layout-page/full-pages.module.ts")).then(function (m) { return m.FullPagesModule; });
        }
    },
    {
        path: "users",
        loadChildren: function () {
            return Promise.all(/*! import() | users-users-module */[__webpack_require__.e("default~batch-batch-module~category-category-module~course-course-module~email-email-module~enquirie~b615e052"), __webpack_require__.e("users-users-module")]).then(__webpack_require__.bind(null, /*! ../../users/users.module */ "./src/app/users/users.module.ts")).then(function (m) { return m.UsersModule; });
        }
    },
    {
        path: "teacher",
        loadChildren: function () {
            return Promise.all(/*! import() | teacher-teacher-module */[__webpack_require__.e("default~batch-batch-module~category-category-module~course-course-module~email-email-module~enquirie~b615e052"), __webpack_require__.e("teacher-teacher-module")]).then(__webpack_require__.bind(null, /*! ../../teacher/teacher.module */ "./src/app/teacher/teacher.module.ts")).then(function (m) { return m.TeacherModule; });
        }
    },
    {
        path: "exam",
        loadChildren: function () { return Promise.all(/*! import() | exam-exam-module */[__webpack_require__.e("default~batch-batch-module~category-category-module~course-course-module~email-email-module~enquirie~b615e052"), __webpack_require__.e("exam-exam-module")]).then(__webpack_require__.bind(null, /*! ../../exam/exam.module */ "./src/app/exam/exam.module.ts")).then(function (m) { return m.ExamModule; }); }
    },
    {
        path: "course",
        children: app_courses_course_routes__WEBPACK_IMPORTED_MODULE_0__["COURSE_ROUTES"]
    },
    {
        path: "student",
        children: app_student_student_routing_module__WEBPACK_IMPORTED_MODULE_1__["STUDENT_ROUTES"]
    },
    {
        path: "enquiry",
        children: app_enquiry_enquiry_routes__WEBPACK_IMPORTED_MODULE_2__["ENQUIRY_ROUTES"]
    },
    {
        path: "email",
        loadChildren: function () {
            return Promise.all(/*! import() | email-email-module */[__webpack_require__.e("default~batch-batch-module~category-category-module~course-course-module~email-email-module~enquirie~b615e052"), __webpack_require__.e("default~email-email-module~template-template-module"), __webpack_require__.e("email-email-module")]).then(__webpack_require__.bind(null, /*! ../../email/email.module */ "./src/app/email/email.module.ts")).then(function (m) { return m.EmailModule; });
        }
    },
    {
        path: "sms",
        loadChildren: function () { return __webpack_require__.e(/*! import() | sms-sms-module */ "sms-sms-module").then(__webpack_require__.bind(null, /*! ../../sms/sms.module */ "./src/app/sms/sms.module.ts")).then(function (m) { return m.SmsModule; }); }
    },
    {
        path: "hr",
        loadChildren: function () { return __webpack_require__.e(/*! import() | hr-hr-module */ "hr-hr-module").then(__webpack_require__.bind(null, /*! ../../hr/hr.module */ "./src/app/hr/hr.module.ts")).then(function (m) { return m.HrModule; }); }
    },
    {
        path: "account",
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | account-account-module */ "account-account-module").then(__webpack_require__.bind(null, /*! ../../account/account.module */ "./src/app/account/account.module.ts")).then(function (m) { return m.AccountModule; });
        }
    }
];


/***/ }),

/***/ "./src/app/shared/services/config.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/config.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.setConfigValue();
    }
    ConfigService.prototype.setConfigValue = function () {
        this.templateConf = {
            layout: {
                variant: 'Light',
                dir: 'ltr',
                sidebar: {
                    collapsed: false,
                    size: 'sidebar-md',
                    backgroundColor: "man-of-steel",
                    backgroundImage: true,
                    backgroundImageURL: 'assets/img/sidebar-bg/01.jpg'
                }
            }
        };
    };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/shared/services/layout.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/layout.service.ts ***!
  \***************************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LayoutService = /** @class */ (function () {
    function LayoutService() {
        this.emitChangeSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.changeEmitted$ = this.emitChangeSource.asObservable();
    }
    LayoutService.prototype.emitChange = function (change) {
        this.emitChangeSource.next(change);
    };
    LayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LayoutService);
    return LayoutService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notification-sidebar/notification-sidebar.component */ "./src/app/shared/notification-sidebar/notification-sidebar.component.ts");
/* harmony import */ var _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/toggle-fullscreen.directive */ "./src/app/shared/directives/toggle-fullscreen.directive.ts");
/* harmony import */ var _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/sidebar.directive */ "./src/app/shared/directives/sidebar.directive.ts");
/* harmony import */ var _directives_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/sidebarlink.directive */ "./src/app/shared/directives/sidebarlink.directive.ts");
/* harmony import */ var _directives_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/sidebarlist.directive */ "./src/app/shared/directives/sidebarlist.directive.ts");
/* harmony import */ var _directives_sidebaranchortoggle_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/sidebaranchortoggle.directive */ "./src/app/shared/directives/sidebaranchortoggle.directive.ts");
/* harmony import */ var _directives_sidebartoggle_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/sidebartoggle.directive */ "./src/app/shared/directives/sidebartoggle.directive.ts");







//COMPONENTS




//DIRECTIVES






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
                _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["NotificationSidebarComponent"],
                _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_11__["ToggleFullscreenDirective"],
                _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_12__["SidebarDirective"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"]
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
                _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["NotificationSidebarComponent"],
                _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_11__["ToggleFullscreenDirective"],
                _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_12__["SidebarDirective"],
                _directives_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_13__["SidebarLinkDirective"],
                _directives_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_14__["SidebarListDirective"],
                _directives_sidebaranchortoggle_directive__WEBPACK_IMPORTED_MODULE_15__["SidebarAnchorToggleDirective"],
                _directives_sidebartoggle_directive__WEBPACK_IMPORTED_MODULE_16__["SidebarToggleDirective"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/sidebar-routes.config.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar-routes.config.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
var ROUTES = [
    {
        path: "/users",
        title: "Users",
        icon: "ft-users",
        class: "has-sub",
        badge: "",
        badgeClass: "badge badge-pill badge-danger float-right mr-1 mt-1",
        isExternalLink: false,
        submenu: [
            {
                path: "/users/add",
                title: "Add User",
                icon: "icon-user-follow",
                class: "",
                badge: "",
                badgeClass: "",
                isExternalLink: false,
                submenu: []
            },
            {
                path: "/users",
                title: "View All Users",
                icon: "icon-eye",
                class: "",
                badge: "",
                badgeClass: "",
                isExternalLink: false,
                submenu: []
            }
        ]
    },
    {
        path: "/enquiry",
        title: "Enquiry",
        icon: "icon-bubbles",
        class: "has-sub",
        badge: "",
        badgeClass: "badge badge-pill badge-danger float-right mr-1 mt-1",
        isExternalLink: false,
        submenu: [
            {
                path: "/enquiry/enquiries",
                title: "View Enquiries",
                icon: "icon-eye",
                class: "",
                badge: "",
                badgeClass: "",
                isExternalLink: false,
                submenu: []
            },
            {
                path: "/enquiry/management",
                title: "Category",
                icon: "icon-layers",
                class: "",
                badge: "",
                badgeClass: "",
                isExternalLink: false,
                submenu: []
            },
            {
                path: "/enquiry/source",
                title: "Enquiry Source",
                icon: "icon-social-dropbox",
                class: "",
                badge: "",
                badgeClass: "",
                isExternalLink: false,
                submenu: []
            }
        ]
    },
    {
        path: "/student",
        title: "Student",
        icon: "ft-users",
        class: "has-sub",
        badge: "",
        badgeClass: "badge badge-pill badge-danger float-right mr-1 mt-1",
        isExternalLink: false,
        submenu: [
            {
                path: "/student/category",
                title: "Student Category",
                icon: "icon-layers",
                class: "",
                badge: "",
                badgeClass: "",
                isExternalLink: false,
                submenu: []
            },
            {
                path: "/student/list",
                title: "Student",
                icon: "icon-emoticon-smile",
                class: "",
                badge: "",
                badgeClass: "",
                isExternalLink: false,
                submenu: []
            }
        ]
    },
    {
        path: "/teacher",
        title: "Teacher",
        icon: "icon-user",
        class: "has-sub",
        badge: "",
        badgeClass: "badge badge-pill badge-danger float-right mr-1 mt-1",
        isExternalLink: false,
        submenu: [
            {
                path: "/teacher/add",
                title: "Add Teacher",
                icon: "icon-user-follow",
                class: "",
                badge: "",
                badgeClass: "",
                isExternalLink: false,
                submenu: []
            },
            {
                path: "/teacher",
                title: "View All Teachers",
                icon: "icon-eye",
                class: "",
                badge: "",
                badgeClass: "",
                isExternalLink: false,
                submenu: []
            }
        ]
    },
    {
        path: "/courses",
        title: "Courses",
        icon: "icon-graduation",
        class: "has-sub",
        badge: "",
        badgeClass: "badge badge-pill badge-danger float-right mr-1 mt-1",
        isExternalLink: false,
        submenu: [
            {
                path: "/course/courses",
                title: " Course",
                icon: "icon-graduation",
                class: "",
                badge: "",
                badgeClass: "",
                isExternalLink: false,
                submenu: []
            },
            {
                path: "/course/section",
                title: "Section",
                icon: "icon-puzzle",
                class: "",
                badge: "",
                badgeClass: "",
                isExternalLink: false,
                submenu: []
            },
            {
                path: "/course/batch",
                title: "Batch",
                icon: "icon-settings",
                class: "",
                badge: "",
                badgeClass: "",
                isExternalLink: false,
                submenu: []
            }
        ]
    },
    {
        path: "/exam",
        title: "Exam",
        icon: "icon-doc",
        class: "has-sub",
        badge: "",
        badgeClass: "badge badge-pill badge-danger float-right mr-1 mt-1",
        isExternalLink: false,
        submenu: [
            {
                path: "/exam/add",
                title: "Add Exam",
                icon: "icon-user-follow",
                class: "",
                badge: "",
                badgeClass: "",
                isExternalLink: false,
                submenu: []
            },
            {
                path: "/exam",
                title: "View All Exams",
                icon: "icon-eye",
                class: "",
                badge: "",
                badgeClass: "",
                isExternalLink: false,
                submenu: []
            }
        ]
    },
    {
        path: "/hr",
        title: "Attendance",
        icon: "icon-book-open",
        class: "has-sub",
        badge: "",
        badgeClass: "badge badge-pill badge-danger float-right mr-1 mt-1",
        isExternalLink: false,
        submenu: [
            {
                path: "/hr/teacher",
                title: "Teacher",
                icon: "icon-users",
                class: "icon-users",
                badge: "",
                badgeClass: "",
                isExternalLink: false,
                submenu: []
            },
            {
                path: "/hr/staff",
                title: "Staff",
                icon: "icon-users",
                class: "",
                badge: "",
                badgeClass: "",
                isExternalLink: false,
                submenu: []
            },
            {
                path: "/hr/student",
                title: "Student",
                icon: "icon-users",
                class: "",
                badge: "",
                badgeClass: "",
                isExternalLink: false,
                submenu: []
            },
            {
                path: "/hr/report",
                title: "Report",
                icon: "icon-doc",
                class: "",
                badge: "",
                badgeClass: "",
                isExternalLink: false,
                submenu: []
            }
        ]
    },
    {
        path: "/account",
        title: "Account",
        icon: "ft-align-left",
        class: "has-sub",
        badge: "",
        badgeClass: "badge badge-pill badge-danger float-right mr-1 mt-1",
        isExternalLink: false,
        submenu: [
            {
                path: "/account/manage",
                title: "Manage Expenses",
                icon: "",
                class: "has-sub",
                badge: "",
                badgeClass: "badge badge-pill badge-danger float-right mr-1 mt-1",
                isExternalLink: false,
                submenu: [
                    {
                        path: "/account/manage/category",
                        title: "Expense Category",
                        icon: "",
                        class: "",
                        badge: "",
                        badgeClass: "",
                        isExternalLink: false,
                        submenu: []
                    },
                    {
                        path: "/account/manage/expenses",
                        title: "Expenses",
                        icon: "",
                        class: "",
                        badge: "",
                        badgeClass: "",
                        isExternalLink: false,
                        submenu: []
                    }
                ]
            },
            {
                path: "/account/income",
                title: "Manage Income",
                icon: "",
                class: "",
                badge: "",
                badgeClass: "",
                isExternalLink: false,
                submenu: []
            }
        ]
    },
    {
        path: "/sms",
        title: "Send SMS",
        icon: "icon-speech",
        class: "has-sub",
        badge: "",
        badgeClass: "badge badge-pill badge-danger float-right mr-1 mt-1",
        isExternalLink: false,
        submenu: [
            {
                path: "/sms/template",
                title: "SMS Template",
                icon: "icon-envelope-letter",
                class: "",
                badge: "",
                badgeClass: "",
                isExternalLink: false,
                submenu: []
            },
            {
                path: "/sms/student",
                title: "To Student",
                icon: "icon-user",
                class: "",
                badge: "",
                badgeClass: "",
                isExternalLink: false,
                submenu: []
            },
            {
                path: "/sms/teacher",
                title: "To Teacher",
                icon: "icon-user-female",
                class: "",
                badge: "",
                badgeClass: "",
                isExternalLink: false,
                submenu: []
            },
            {
                path: "/sms/enquiries",
                title: "To Enquiries",
                icon: "icon-users",
                class: "",
                badge: "",
                badgeClass: "",
                isExternalLink: false,
                submenu: []
            },
            {
                path: "/sms/staffs",
                title: "To Staff",
                icon: "icon-user-female",
                class: "",
                badge: "",
                badgeClass: "",
                isExternalLink: false,
                submenu: []
            }
        ]
    },
    {
        path: "/email",
        title: "Send Email",
        icon: "icon-envelope-open",
        class: "has-sub",
        badge: "",
        badgeClass: "badge badge-pill badge-danger float-right mr-1 mt-1",
        isExternalLink: false,
        submenu: [
            {
                path: "/email/template",
                title: "Email Template",
                icon: "icon-envelope-letter",
                class: "",
                badge: "",
                badgeClass: "",
                isExternalLink: false,
                submenu: []
            },
            {
                path: "/email/student",
                title: "To Student",
                icon: "icon-user",
                class: "",
                badge: "",
                badgeClass: "",
                isExternalLink: false,
                submenu: []
            },
            {
                path: "/email/teacher",
                title: "To Teacher",
                icon: "icon-user-female",
                class: "",
                badge: "",
                badgeClass: "",
                isExternalLink: false,
                submenu: []
            },
            {
                path: "/email/enquries",
                title: "To Enquiries",
                icon: "icon-users",
                class: "",
                badge: "",
                badgeClass: "",
                isExternalLink: false,
                submenu: []
            },
            {
                path: "/email/staffs",
                title: "To Staff",
                icon: "icon-user-female",
                class: "",
                badge: "",
                badgeClass: "",
                isExternalLink: false,
                submenu: []
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar-routes.config */ "./src/app/shared/sidebar/sidebar-routes.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _animations_custom_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../animations/custom-animations */ "./src/app/shared/animations/custom-animations.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/config.service */ "./src/app/shared/services/config.service.ts");







var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(elementRef, renderer, router, route, translate, configService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.configService = configService;
        this.activeTitles = [];
        this.nav_collapsed_open = false;
        this.logoUrl = 'assets/img/logo.png';
        this.config = {};
        if (this.depth === undefined) {
            this.depth = 0;
            this.expanded = true;
        }
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.config = this.configService.templateConf;
        this.menuItems = _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_2__["ROUTES"];
        if (this.config.layout.sidebar.backgroundColor === 'white') {
            this.logoUrl = 'assets/img/logo-dark.png';
        }
        else {
            this.logoUrl = 'assets/img/logo.png';
        }
    };
    SidebarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.config.layout.sidebar.collapsed != undefined) {
                if (_this.config.layout.sidebar.collapsed === true) {
                    _this.expanded = false;
                    _this.renderer.addClass(_this.toggleIcon.nativeElement, 'ft-toggle-left');
                    _this.renderer.removeClass(_this.toggleIcon.nativeElement, 'ft-toggle-right');
                    _this.nav_collapsed_open = true;
                }
                else if (_this.config.layout.sidebar.collapsed === false) {
                    _this.expanded = true;
                    _this.renderer.removeClass(_this.toggleIcon.nativeElement, 'ft-toggle-left');
                    _this.renderer.addClass(_this.toggleIcon.nativeElement, 'ft-toggle-right');
                    _this.nav_collapsed_open = false;
                }
            }
        }, 0);
    };
    SidebarComponent.prototype.toggleSlideInOut = function () {
        this.expanded = !this.expanded;
    };
    SidebarComponent.prototype.handleToggle = function (titles) {
        this.activeTitles = titles;
    };
    // NGX Wizard - skip url change
    SidebarComponent.prototype.ngxWizardFunction = function (path) {
        if (path.indexOf("forms/ngx") !== -1)
            this.router.navigate(["forms/ngx/wizard"], { skipLocationChange: false });
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('toggleIcon', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SidebarComponent.prototype, "toggleIcon", void 0);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sidebar",
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/sidebar/sidebar.component.html"),
            animations: _animations_custom_animations__WEBPACK_IMPORTED_MODULE_5__["customAnimations"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/student/student-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/student/student-routing.module.ts ***!
  \***************************************************/
/*! exports provided: STUDENT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STUDENT_ROUTES", function() { return STUDENT_ROUTES; });
//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...
var STUDENT_ROUTES = [
    {
        path: "category",
        loadChildren: function () {
            return Promise.all(/*! import() | category-category-module */[__webpack_require__.e("default~batch-batch-module~category-category-module~course-course-module~email-email-module~enquirie~b615e052"), __webpack_require__.e("category-category-module")]).then(__webpack_require__.bind(null, /*! ./category/category.module */ "./src/app/student/category/category.module.ts")).then(function (m) { return m.CategoryModule; });
        }
    },
    {
        path: "list",
        loadChildren: function () { return Promise.all(/*! import() | list-list-module */[__webpack_require__.e("default~batch-batch-module~category-category-module~course-course-module~email-email-module~enquirie~b615e052"), __webpack_require__.e("list-list-module")]).then(__webpack_require__.bind(null, /*! ./list/list.module */ "./src/app/student/list/list.module.ts")).then(function (m) { return m.ListModule; }); }
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    BaseUrl: "http://192.168.10.22:8000/"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\work\IMS\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map