(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<title>Travel Request Portal</title>\r\n\r\n<body class=\"layout-demo\" detect-scroll (onScroll)=\"handleScrollDown($event);\">\r\n  <header class=\"usa-header usa-header-basic\" role=\"banner\">\r\n    <app-header></app-header>\r\n  </header>\r\n  <div class=\"blackBackground\">\r\n      <router-outlet></router-outlet>\r\n  </div>\r\n  <footer class=\"usa-footer usa-footer-medium\" role=\"contentinfo\">\r\n    <app-footer></app-footer>\r\n  </footer>\r\n</body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/celebrities/celebrities.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/celebrities/celebrities.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <button (click)='debugClick();'>test</button>\r\n\t<button (click)='debugLoad();'>load</button> -->\r\n\r\n\t<ng-template #content let-modal>\r\n\t\t<div style=\"top:100px;right:100px; width:100px;\">\r\n\t\t\t<h4 class=\"modal-title\">Modal title</h4>\r\n\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t<div class=\"modal-body\">\r\n\t\t\t<p>Our modal works somehow :)</p>\r\n\t\t</div>\r\n\t\t<div class=\"modal-footer\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\r\n\t\t</div>\r\n\t</ng-template>\r\n\r\n\t<div id=\"testmodal\">\r\n\t</div>\r\n\r\n\r\n\t<div class=\"grid-row\">                                <!--(click)=\"debugClick();\">-->\r\n\t\t<div class=\"grid-col-4\" *ngFor=\"let item of localCelebrityList\" style=\"margin: 10px 0px\">\r\n\r\n      <div *ngIf=\"item\">\r\n        <p-card header={{item.name}} subheader= \"Born {{item.birthdate | date:'MMMM d, yyyy'}} in {{item.birthplace}}\" [style]=\"{width: '300px', height: '350px', 'text-align': 'center'}\" styleClass=\"ui-card-shadow\">\r\n          <p-header>\r\n            <div class=\"display-flex flex-column flex-align-center\">\r\n              <div class=\"align center\" id=\"avatar\" [ngStyle]=\"{background: 'url(' + item.headshot + ')', width: '70px', height: '75px'}\" ></div>\r\n            </div>\r\n          </p-header>\r\n          <div (click)=\"getObservable();\"> {{item.miniBio.substr(0, 162)}}.. </div>\r\n          <p-footer>\r\n            <a (click)=\"clickProfile(item)\">View Profile</a>\r\n          </p-footer>\r\n        </p-card>\r\n      </div>\r\n\r\n\t\t</div>\r\n\t</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/celebrityprofile/celebrityprofile.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/celebrityprofile/celebrityprofile.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"grid-container\">\r\n  <br>\r\n  <div *ngIf=\"CelebrityProfile\">\r\n\r\n    <p-card [style]=\"{'text-align': 'center'}\" styleClass=\"ui-card-shadow\">\r\n\r\n      <p-header>\r\n        <div class=\"card\">\r\n          <div class=\"display-flex flex-column flex-align-center\">\r\n            <div class=\"align center\" id=\"avatar\" [ngStyle]=\"{background: 'url(' + CelebrityProfile.headshot + ')', width: '70px', height: '75px'}\" ></div>\r\n          </div>\r\n          <h2>{{CelebrityProfile.name}}</h2>\r\n          <h3 class=\"title\">Born {{CelebrityProfile.birthDate | date:'MMMM d, yyyy'}} in {{CelebrityProfile.birthPlace}}</h3>\r\n          <h3 class=\"title\">Height : {{CelebrityProfile.height}} </h3>\r\n        </div>\r\n      </p-header>\r\n      <p-carousel [value]=\"movies\" styleClass=\"custom-carousel\" [numVisible]=\"5\" [numScroll]=\"2\" [circular]=\"true\" [autoplayInterval]=\"3000\">\r\n        <p-header>\r\n          <h3>Movies</h3>\r\n        </p-header>\r\n        <ng-template let-movie pTemplate=\"item\">\r\n          <div class=\"car-details\">\r\n            <div class=\"p-grid p-nogutter\">\r\n              <div class=\"p-col-12\">\r\n                <img src=\"{{movie.coverUrl}}\" />\r\n              </div>\r\n              <div class=\"p-col-12 car-data\">\r\n                <div class=\"car-title\">{{movie.movieTitle}}</div>\r\n                <div class=\"car-subtitle\">{{movie.year}}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </p-carousel>\r\n\r\n      <p-panel header=\"Biography\" [toggleable]=\"true\">\r\n        <div> {{CelebrityProfile.miniBio}} </div>\r\n        <div align=\"center\">\r\n          <highcharts-chart\r\n            id=\"worcloud-container\"\r\n            [Highcharts]=\"Highcharts\"\r\n            [constructorType]=\"chartConstructor\"\r\n            [options]=\"chartOptions\"\r\n            [callbackFunction]=\"chartCallback\"\r\n            [(update)]=\"updateFromInput\"\r\n            [oneToOne]=\"true\"\r\n            style=\"width: 100%; display: block;\"\r\n            ></highcharts-chart>\r\n        </div>\r\n      </p-panel>\r\n    </p-card>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/confirm/confirm.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/confirm/confirm.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"usa-hero\">\r\n  <div class=\"grid-container\">\r\n    <div class=\"usa-hero-callout\">\r\n      <h1 class=\"usa-hero__heading\"><span class=\"usa-hero__heading--alt\">Confirm Registration</span>\r\n      </h1>\r\n    <form class=\"usa-form\">\r\n        <fieldset class=\"usa-fieldset\">\r\n           \r\n            <span>In order to complete your account set up please enter a new password.</span>\r\n\r\n            <div class=\"usa-alert usa-alert--info usa-alert--validation\">\r\n                <div class=\"usa-alert__body\">\r\n                    <h3 class=\"usa-alert__heading\">Password information</h3>\r\n                    \r\n                            <div class=\"usa-alert__text\">\r\n                                    <ul *ngIf=\"isSame()\">Password must:\r\n                                    <li *ngIf=\"isLong()\">\r\n                                        8+ characters in length\r\n                                    </li>\r\n                                    <li *ngIf=\"isUpper()\">\r\n                                        Contain 1+ uppercase letter(s)\r\n                                    </li>\r\n                                    <li *ngIf=\"isLower()\">\r\n                                        Contain 1+ lowercase letter(s)\r\n                                    </li>\r\n                                    <li *ngIf=\"isNumber()\">\r\n                                        Contain 1+ number(s)\r\n                                    </li>\r\n                                    <li *ngIf=\"isSpecial()\">\r\n                                        Contain 1+ special character(s)\r\n                                    </li>\r\n                                    <li *ngIf=\"isSame()\">\r\n                                        New and Confirm Passwords must match\r\n                                    </li>\r\n                                    </ul>\r\n                                    <p *ngIf=\"!isSame()\">Password is Acceptable and Strong.</p>\r\n                                </div>\r\n                    \r\n                </div>\r\n            </div>\r\n\r\n            <label class=\"usa-label\" for=\"password-temp\">Temp password</label>\r\n            <input class=\"usa-input\" id=\"password-temp\" name=\"password\" type=\"password\" [(ngModel)]=\"loginObj.temppassword\" required=\"true\" placeholder=\"temp password\">\r\n\r\n            <label class=\"usa-label\" for=\"password-new\">New password</label>\r\n            <input class=\"usa-input\" id=\"password-new\" name=\"password\" type=\"password\" [(ngModel)]=\"loginObj.newpassword\" required=\"true\" placeholder=\"new password\">\r\n\r\n            <label class=\"usa-label\" for=\"password-conf\">Confirm password</label>\r\n            <input class=\"usa-input\" id=\"password-conf\" name=\"confirmPassword\" type=\"password\" [(ngModel)]=\"loginObj.confpassword\" required=\"true\" placeholder=\"new password\">\r\n            <p class=\"usa-form__note\">\r\n                <a href=\"javascript:void(0);\" class=\"usa-show-multipassword\" aria-controls=\"password-new password-conf\" >Show my typing</a>\r\n            </p>\r\n\r\n            <input type=\"button\" (click)=\"updateUser()\" class=\"usa-button full-width-button\" id=\"submit\" value=\"Update\"  [disabled]=\"isSame()\">\r\n        </fieldset>\r\n    </form>\r\n  </div>\r\n</div>\r\n</section>\r\n<!-- <section class=\"ice-hero\">\r\n    <div class=\"usa-grid\">\r\n      <div class=\"usa-hero-callout usa-section-dark usa-width-one-third\" style=\"float: right\">\r\n        <h2>\r\n          <span class=\"usa-hero-callout-alt\">Confirm Registration</span>\r\n        </h2>\r\n        <form>\r\n          <fieldset>\r\n            <legend class=\"usa-drop_text\">Update Information</legend>\r\n            <span>In order to complete your account set up please enter a new password.</span>\r\n            <div>\r\n              <label for=\"password-temp\">Temp Password</label>\r\n              <input id=\"password-temp\" [(ngModel)]=\"loginObj.temppassword\" name=\"password\" type=\"password\" required=\"true\" placeholder=\"temp password\">\r\n            </div>\r\n            <div>\r\n              <label for=\"password-new\">New Password</label>\r\n              <input id=\"password-new\" [(ngModel)]=\"loginObj.newpassword\" name=\"password\" type=\"password\" required=\"true\" placeholder=\"new password\">\r\n            </div>\r\n            <div>\r\n              <label for=\"password-conf\">Confirm Password</label>\r\n              <input id=\"password-conf\" [(ngModel)]=\"loginObj.confpassword\" name=\"password\" type=\"password\" required=\"true\"  placeholder=\"confirm password\">\r\n            </div>\r\n            <input type=\"button\" (click)=\"updateUser()\" class=\"usa-button full-width-button\" id=\"submit\" value=\"Update\"  [disabled]=\"isSame()\">\r\n          </fieldset>\r\n        </form>\r\n      </div>\r\n      <div class=\"usa-hero-callout usa-section-dark usa-width-one-third\" style=\"float: right\">\r\n        <div>\r\n          <ul *ngIf=\"isSame()\">Password must:\r\n            <li *ngIf=\"isLong()\">\r\n              8+ characters in length\r\n            </li>\r\n            <li *ngIf=\"isUpper()\">\r\n              Contain 1+ uppercase letter(s)\r\n            </li>\r\n            <li *ngIf=\"isLower()\">\r\n              Contain 1+ lowercase letter(s)\r\n            </li>\r\n            <li *ngIf=\"isNumber()\">\r\n              Contain 1+ number(s)\r\n            </li>\r\n            <li *ngIf=\"isSpecial()\">\r\n              Contain 1+ special character(s)\r\n            </li>\r\n            <li *ngIf=\"isSame()\">\r\n              New and Confirm Passwords must match\r\n            </li>\r\n          </ul>\r\n          <p *ngIf=\"!isSame()\">Password is Acceptable and Strong.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/contact/contact.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/contact/contact.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"grid-container\">\r\n    <aside class=\"usa-width-one-fourth usa-layout-docs-sidenav\">\r\n    </aside>\r\n    <div class=\"usa-width-three-fourths usa-layout-docs-main_content\">\r\n      <h1>Contact us:</h1>\r\n      <h2>\r\n        Headquarters Office\r\n      </h2>\r\n      <h4>\r\n        11490 Commerce Park Drive Suite 340 <br>Reston, Virginia 20191\r\n      </h4>\r\n      <a href=\"tel:1-703-391-2800\">(703) 391-2800</a><br>\r\n      <a href=\"tel:1-703-391-2833\">(703) 391-2833</a><br>\r\n      <a href=\"mailto:krose@aceinfosolutions.com\">info@aceinfosolutions.com</a>\r\n      <h2>\r\n        Western Regional Office\r\n      </h2>\r\n      <h4>\r\n        3926 John F Kennedy Parkway Suite B <br>Fort Collins, Colorado 80525\r\n      </h4>\r\n      <a href=\"tel:1-970-514-3478\">(970) 514-3478</a><br>\r\n      <a href=\"tel:1-970-893-2181\">(970) 893-2181</a><br>\r\n      <a href=\"mailto:jpignataro@aceinfosolutions.com\">jpignataro@aceinfosolutions.com</a>\r\n      <h2>\r\n        Southern Regional Office\r\n      </h2>\r\n      <h4>\r\n        6220 Blue Ridge Cutoff, Suite 208,<br>Raytown, Missouri 64133\r\n      </h4>\r\n      <a href=\"tel:1-816-737-1443\">(816) 737-1443</a><br>\r\n      <a href=\"tel:1-913-269-3501\">(913) 269-3501</a><br>\r\n      <a href=\"mailto:krose@aceinfosolutions.com\">krose@aceinfosolutions.com</a>\r\n    </div>\r\n</div> -->\r\n\r\n<section class=\"usa-graphic-list usa-section usa-section--dark\">\r\n        <div class=\"grid-container\">\r\n            <div class=\"usa-graphic-list__row grid-row grid-gap\">\r\n                <div class=\"usa-media-block tablet:grid-col\">\r\n                    <div class=\"usa-media-block__body\">\r\n                        <h3 class=\"usa-graphic-list__heading\">Headquarters Office</h3>\r\n                        <p>\r\n                                \r\n                                        11490 Commerce Park Drive Suite 340 <br>Reston, Virginia 20191<br>\r\n                                      \r\n                                      <a href=\"tel:1-703-391-2800\">(703) 391-2800</a><br>\r\n                                      <a href=\"tel:1-703-391-2833\">(703) 391-2833</a><br>\r\n                                      <a href='mailto:krose@aceinfosolutions.com'>info@aceinfosolutions.com</a>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"usa-media-block tablet:grid-col\">\r\n                   \r\n                    <div class=\"usa-media-block__body\">\r\n                        <h3 class=\"usa-graphic-list__heading\">Western Regional Office</h3>\r\n                        <p>\r\n                                \r\n                                        3926 John F Kennedy Parkway Suite B <br>Fort Collins, Colorado 80525<br>\r\n                                      \r\n                                      <a href=\"tel:1-970-514-3478\">(970) 514-3478</a><br>\r\n                                      <a href=\"tel:1-970-893-2181\">(970) 893-2181</a><br>\r\n                                      <a href='mailto:jpignataro@aceinfosolutions.com'>jpignataro@aceinfosolutions.com</a>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"usa-media-block tablet:grid-col\">\r\n                   \r\n                        <div class=\"usa-media-block__body\">\r\n                            <h3 class=\"usa-graphic-list__heading\">Southern Regional Office</h3>\r\n                            <p>\r\n                                    \r\n                                    6220 Blue Ridge Cutoff, Suite 208,<br>Raytown, Missouri 64133<br>\r\n                                          \r\n                                    <a href=\"tel:1-816-737-1443\">(816) 737-1443</a><br>\r\n                                    <a href=\"tel:1-913-269-3501\">(913) 269-3501</a><br>\r\n                                    <a href='mailto:krose@aceinfosolutions.com'>krose@aceinfosolutions.com</a>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n            </div>\r\n            </div>\r\n            </section> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/forgot-password/forgot-password.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/forgot-password/forgot-password.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"usa-hero\">\r\n  <div class=\"grid-container\">\r\n    <div class=\"usa-hero-callout\">\r\n      <h1 class=\"usa-hero__heading\"><span class=\"usa-hero__heading--alt\">Forgot Password</span>\r\n      </h1>\r\n      <form class=\"usa-form\">\r\n        <fieldset class=\"usa-fieldset\">\r\n          <!--          <h2><span class=\"usa-hero-callout-alt\">Forgot Password:</span></h2>-->\r\n          <p *ngIf=\"!isWaitingConfirmation\" >Please enter your username, then check your email for a verification code.</p>\r\n          <p *ngIf=\"isWaitingConfirmation\">Please enter the verification code sent to your email.</p>\r\n          <div [ngClass]=\"{'usa-input-error': usernameError}\">\r\n\r\n            <span *ngIf=\"httpError\" class=\"usa-input-error-message\">\r\n              Incorrect Verification Code.\r\n            </span>\r\n            <br>\r\n            <label *ngIf=\"isWaitingConfirmation\" for=\"confcode\">Verification Code</label>\r\n            <input *ngIf=\"isWaitingConfirmation\" class=\"usa-input\" id=\"confcode\" name=\"confcode\" type=\"text\"\r\n                                                                               [(ngModel)]=\"confcode\" required aria-required=\"true\">\r\n\r\n            <span *ngIf=\"notValidPass\" class=\"usa-input-error-message\">\r\n              Please enter a valid password.\r\n            </span>\r\n            <label *ngIf=\"isWaitingConfirmation\" for=\"newPass\">New Password</label>\r\n            <input *ngIf=\"isWaitingConfirmation\" class=\"usa-input\" id=\"newPass\" name=\"newPass\" type=\"password\"\r\n                                                                             [(ngModel)]=\"newPass\" required aria-required=\"true\">\r\n\r\n            <label *ngIf=\"!isWaitingConfirmation\" for=\"username\">Username</label>\r\n            <br>\r\n            <span *ngIf=\"usernameError\" class=\"usa-input-error-message\">\r\n              A proper Username is required.\r\n            </span>\r\n                    <input *ngIf=\"!isWaitingConfirmation\" id=\"username\" class=\"usa-input\" name=\"username\" type=\"text\" [(ngModel)]=\"userName\" autocapitalize=\"off\" autocorrect=\"off\" required=\"true\" placeholder=\"Username\">\r\n            <!--<input *ngIf=\"!isWaitingConfirmation\" type=\"text\" name=\"username\" autofocus [(ngModel)]=\"userName\" required aria-required=\"true\">-->\r\n          </div>\r\n          <!-- <label for=\"email\">Email Address</label>\r\n            <input id=\"email\" name=\"email\" type=\"email\" [(ngModel)]=\"u.email\"\r\n            required aria-required=\"true\" [disabled]=\"!u.enabled\"> -->\r\n            <br>\r\n            <input *ngIf=\"isWaitingConfirmation\" type=\"button\" (click)=\"finishSetTempPassword(confcode, newPass)\"\r\n                                                 class=\"usa-button full-width-button\" id=\"setTemp\" value=\"Reset Password\">\r\n            <input *ngIf=\"!isWaitingConfirmation\" type=\"button\" (click)=\"beginSetTempPassword(userName)\"\r\n                                                  class=\"usa-button full-width-button\" id=\"setTemp\" value=\"Send Email\">\r\n        </fieldset>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/home/home.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/home/home.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"grid-container\">\r\n  <br>  \r\n\r\n\r\n  <form class=\"usa-search usa-search--big\">\r\n    <div role=\"search\" style=\"margin-left:150px;\">\r\n      <label class=\"usa-sr-only\" for=\"search-field-big\">Search</label>\r\n      <input class=\"usa-input\" id=\"search-field-big\" [(ngModel)]=\"searchTerm\" type=\"search\" name=\"search\">\r\n      <button class=\"usa-button\" type=\"submit\" (click)=\"search(searchTerm);\">\r\n        <span class=\"usa-search__submit-text\">Search</span>\r\n      </button>\r\n    </div>\r\n  </form>\r\n  <br>\r\n  <br>\r\n  <br>\r\n\r\n\r\n  <p-tabView orientation=\"top\" (onChange)=\"setActiveTab($event)\">\r\n    <p-tabPanel header=\"Celebrities\" leftIcon=\"pi pi-star\" [index]=\"celebTab\"> \r\n      <app-celebrities></app-celebrities>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"Movies\" leftIcon=\"pi pi-video\" [index]=\"movieTab\">\r\n      <app-movies></app-movies>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"Visualize\" leftIcon=\"pi pi-chart-bar\" [index]=\"visTab\">\r\n      <app-visualize></app-visualize>\r\n    </p-tabPanel>\r\n  </p-tabView>\r\n      <!-- Balas changes below \r\n\r\n        <p-tabView orientation=\"top\" [(activeIndex)]=\"index\">\r\n        <p-tabPanel header=\"Celebrities\" leftIcon=\"pi pi-star\"> \r\n        <app-celebrities #celebTab></app-celebrities>\r\n        </p-tabPanel>\r\n        <p-tabPanel header=\"Movies\" leftIcon=\"pi pi-video\">\r\n        <app-movies #movieTab></app-movies>\r\n        </p-tabPanel>\r\n        <p-tabPanel header=\"Visualize\" leftIcon=\"pi pi-chart-bar\">\r\n        <app-visualize #visTab></app-visualize>\r\n        </p-tabPanel>\r\n        </p-tabView>\r\n      -->\r\n\r\n      <br>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/login/login.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/login/login.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"usa-hero\">\r\n    <div class=\"grid-container class.ice-hero-records\">\r\n        <div class=\"usa-hero-callout\">\r\n            <h1 class=\"usa-hero__heading\"><span class=\"usa-hero__heading--alt\">Sign in</span>\r\n            </h1>\r\n            <br>\r\n            <label for=\"newuserConfirmationMsg\">{{newuserConfirmationMsg}}</label>\r\n            <form class=\"usa-form\">\r\n                <fieldset class=\"usa-fieldset\">\r\n                    <!-- <span class=\"usa-input-error-message\" id=\"input-error-message\" *ngIf=\"error\" >{{error}}</span> -->\r\n                    <br>\r\n                    <div class=\"usa-input-error-message\" role=\"alert\" *ngIf=\"error\">\r\n                        {{error}}\r\n                    </div>\r\n\r\n                    <label class=\"usa-label\" for=\"username\">Username</label>\r\n                    <input id=\"username\" class=\"usa-input\" name=\"username\" type=\"text\" [(ngModel)]=\"username\" autocapitalize=\"off\" autocorrect=\"off\" required=\"true\" placeholder=\"Username\">\r\n                    \r\n                    <label class=\"usa-label\" for=\"password-sign-in\">Password</label>\r\n                    <input id=\"password-sign-in\" class=\"usa-input\" [(ngModel)]=\"password\" name=\"password\" type=\"password\" required=\"true\" placeholder=\"password\">\r\n\r\n                    <p class=\"usa-form__note\"><span routerLink=\"javascript:void(0);\" class=\"usa-show-password usa-nav-link-2\" aria-controls=\"password-sign-in\">\r\n                        Show password\r\n                        </span></p>\r\n        \r\n                    <input type=\"button\" (click)=\"loginUser()\" class=\"usa-button full-width-button\" id=\"submit\" value=\"Sign In\" >\r\n\r\n                    <p><span routerLink=\"/forgotPassword\" class=\"usa-nav-link-2\" id=\"modify1\">\r\n                        Forgot Password\r\n                        </span> \r\n                        <span style=\"padding-right: 40px;\"></span>\r\n                        <span routerLink=\"/newuser\" class=\"usa-nav-link-2\" id=\"modify1\">\r\n                           Sign up\r\n                            </span></p>\r\n                </fieldset>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/modal-celebrities/modal-celebrities.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/modal-celebrities/modal-celebrities.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>modal-celebrityObject works!</p> -->\r\n<!--\r\n\t<div style=\"width: 100px;\">\r\n\t<div  style=\"top:30px;right:30px;width:200px;\">\r\n\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"passback('close')\">\r\n\t<span aria-hidden=\"true\">&times; Close</span>\r\n\t</button>\r\n\t<div style=\"display:block\">\r\n\t<h4 class=\"modal-title\">{{ this.celebrityObject.name }}  </h4>\r\n\r\n\t</div>\r\n\r\n\t</div>\r\n\t<div style=\"width:800px;\">\r\n\r\n\r\n\t<img style=\"margin-left:30%;width:10%\" src={{this.celebrityObject.headshot}}>\r\n\t<br>\r\n\t<br>\r\n\t<div>\r\n\t<p style=\"display:inline;\"> <b>Name: </b> <i>{{this.celebrityObject.name}}</i></p>\r\n\t&nbsp;\r\n\t<br>\r\n\t<p style=\"display:inline;\"><b>Birth Date: </b> <i>{{this.celebrityObject.birthdate}}</i></p>\r\n\t<br>\r\n\t<p style=\"display:inline;\"><b>Brith Place: </b> <i>{{this.celebrityObject.birthplace}}</i></p>\r\n\t<br>\r\n\t<p style=\"display:inline;\"><b>Mini Bio: </b> <i>{{this.celebrityObject.minibio}}</i></p>\r\n\t</div>\r\n\t<hr>\r\n\t<p>{{ this.celebrityObject.plot }}</p>\r\n\r\n\r\n\t</div>\r\n-->\r\n<!-- <div class=\"modal-footer\">\r\n\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"passback('full')\">View Full Profile</button>\r\n\t<button type=\"button\" class=\"btn btn-default\" (click)=\"passback('close')\">Close</button>\r\n\t</div> \r\n\t</div>\r\n-->\r\n\r\n<!------------------------------- -->\r\n<!-- <div> -->\r\n<div style=\"position:absolute;left:25%;right:25%;width:300px;height:300px;overflow-y:auto;z-index:10;\">\r\n\t<div class=\"modal-header\"><!-- style=\"top:500px;right:500px;\"> -->\r\n\t\t<div style=\"display:block\">\r\n\t\t\t<h4 class=\"modal-title\">{{ this.celebrityObject.name }}  ({{this.celebrityObject.birth_year}})</h4>\r\n\t\t\t<h5>{{ this.celebrityObject.birthplace }}</h5>\r\n\t\t</div>\r\n\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"passback('close')\">\r\n\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t</button>\r\n\t</div>\r\n\t<div class=\"modal-body\">\r\n\r\n\r\n\r\n\t\t<img style=\"margin-left:30%;width:40%\" src={{this.celebrityObject.headshot}}>\r\n\t\t<br>\r\n\t\t<br>\r\n\t\t<div>\r\n\r\n\t\t\t<p style=\"display:inline;\"><b>Birth Date: </b> <i>{{this.celebrityObject.birthdate}}</i></p>\r\n\t\t\t<br>\r\n\t\t\t<p style=\"display:inline;\"><b>Birth Place: </b> <i>{{this.celebrityObject.birthplace}}</i></p>\r\n\t\t\t<br>\r\n\t\t\t<p style=\"display:inline;\"><b>Mini Bio: </b> {{this.celebrityObject.minibio}}</p>\r\n\t\t</div>\r\n\t\t<hr>\r\n\r\n\r\n\t</div>\r\n\t<div class=\"modal-footer\">\r\n\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"passback('full')\">View Full Profile</button>\r\n\t\t<button type=\"button\" class=\"btn btn-default\" (click)=\"passback('close')\">Close</button>\r\n\t</div>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/modal-movie/modal-movie.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/modal-movie/modal-movie.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>modal-movie works!</p> -->\r\n<div class=\"modal-header\" style=\"overflow-y:hidden;\">\r\n  <div style=\"display:block\">\r\n    <h4 class=\"modal-title\">{{ this.movieObject.title }}  ({{this.movieObject.year}})</h4>\r\n    <h5>{{ this.movieObject.genres }}</h5>\r\n  </div>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"passback('close')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n\r\n\r\n\r\n  <img style=\"margin-left:30%;width:40%\" src={{this.movieObject.cover_url}}>\r\n  <br>\r\n  <br>\r\n  <div>\r\n    <p style=\"display:inline;\"> <b>Budget: </b> <i>{{this.movieObject.budget}}</i></p>\r\n    &nbsp;\r\n    <p style=\"display:inline;\"><b>Directors: </b> <i>{{this.movieObject.directors}}</i></p>\r\n  </div>\r\n  <hr>\r\n  <p>{{ this.movieObject.plot }}</p>\r\n\r\n\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"passback('full')\">View Full Profile</button>\r\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"passback('close')\">Close</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/movieprofile/movieprofile.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/movieprofile/movieprofile.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"grid-container\">\r\n  <div *ngIf=\"curMovie\">\r\n  <p-card [style]=\"{'text-align': 'center'}\" styleClass=\"ui-card-shadow\">\r\n\r\n    <p-header>\r\n      <div class=\"card\">\r\n        <div class=\"display-flex flex-column flex-align-center\">\r\n          <div class=\"align center\" id=\"avatar\" [ngStyle]=\"{background: 'url(' + curMovie.coverUrl + ')', width: '70px', height: '75px'}\"></div>\r\n        </div>\r\n        <h2 style=\"margin-top:1%;margin-bottom:1%;\">{{curMovie.movieTitle}}</h2>\r\n        <h3 class=\"title\" style=\"\">{{ this.genre }} </h3>\r\n        <h3 class=\"title\" style=\"margin-bottom:1%;margin-top:1%;\">Released in <i> {{curMovie.year}} </i></h3>\r\n        <span *ngIf=\"curMovie.writers.length > 0\" class=\"title h3\" style=\"\"> Written by: \r\n        {{writers.substr(0, writers.length-2)}}\r\n\r\n          <!--      <span *ngFor=\"let k of curMovie.writers; let writer = index;\" class=\"title\">\r\n            {{ k.name }}\r\n    </span>--> <!--.replace(' |', ',') }}</h3> -->\r\n        </span>\r\n      </div>\r\n    </p-header>\r\n\r\n\r\n    <div *ngIf=\"this.celebsPresent\">\r\n      <p-carousel [value]=\"celebs\" styleClass=\"custom-carousel\" [numVisible]=\"3\" [numScroll]=\"2\" [circular]=\"true\" [autoplayInterval]=\"3000\">\r\n        <p-header>\r\n          <h3>Celebrities</h3>\r\n        </p-header>\r\n        <ng-template let-celeb pTemplate=\"item\">\r\n          <div class=\"car-details\">\r\n            <div class=\"p-grid p-nogutter\">\r\n              <div class=\"p-col-12\">\r\n                <img src=\"{{celeb.headshot}}\" />\r\n              </div>\r\n              <div class=\"p-col-12 car-data\">\r\n                <div class=\"car-title\">{{celeb.name}}</div>\r\n                <div class=\"car-subtitle\">{{celeb.birth_year}}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </p-carousel>\r\n    </div>\r\n    \r\n      <p-panel header=\"Information\" [toggler]=\"'header'\" [toggleable]=\"true\">\r\n\r\n        <div class=\"ui-g grid-border-lightblue\" style=\"\">\r\n          <div class=\"ui-g-4\" style=\"border-right: 1px red solid;\">\r\n            <h3>Budget</h3>\r\n            <h4>{{ curMovie.budget }}</h4>\r\n          </div>\r\n          <div class=\"ui-g-4\" style=\"border-right: 1px red solid; border-left: 1px red solid;\">\r\n            <h3>Runtime</h3>\r\n            <h4>{{ curMovie.runTime }} minutes</h4>\r\n          </div>\r\n          <div class=\"ui-g-4\" style=\"border-left: 1px red solid;\">\r\n            <h3>Source</h3>\r\n            <!-- <h4>{{ curMovie.site }}</h4> -->\r\n            <a href=\"{{ curMovie.site }}\">External Link ({{ curMovie.sourceFrom }})</a>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </p-panel>\r\n\r\n      <p-panel header=\"Plot\" [toggler]=\"'header'\" [toggleable]=\"true\">\r\n        <div> {{curMovie.plot}} </div>\r\n        <div align=\"center\">\r\n          <div *ngIf=\"curMovie.plot.length > 100\">\r\n          <hr> \r\n        <highcharts-chart\r\n            id=\"worcloud-container\"\r\n            [Highcharts]=\"Highcharts\"\r\n            [constructorType]=\"chartConstructor\"\r\n            [options]=\"chartOptions\"\r\n            [callbackFunction]=\"chartCallback\"\r\n            [(update)]=\"updateFromInput\"\r\n            [oneToOne]=\"true\"\r\n            style=\"width: 100%; display: block;\"\r\n            ></highcharts-chart>\r\n          </div>\r\n        </div>\r\n      </p-panel>\r\n\r\n  </p-card>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/movies/movies.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/movies/movies.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"grid-row\">\r\n    <div class=\"grid-col-4\" *ngFor=\"let item of localMovieList\" style=\"margin: 10px 0px\">\r\n    \r\n\r\n\t\t<!--<p-card (click)=\"openModal(item)\" header=\"{{item.title}} ({{item.year}})\" subheader=\"{{item.genres}}\" [style]=\"{width: '300px', height: '500px', 'text-align': 'center'}\" styleClass=\"ui-card-shadow\">-->\r\n        <p-card header=\"{{item.title}} ({{item.year}})\" subheader=\"{{item.genres}}\" [style]=\"{width: '300px', height: '500px', 'text-align': 'center'}\" styleClass=\"ui-card-shadow\">\r\n\r\n            <!-- <p-header>\r\n                <div class=\"display-flex flex-column flex-align-center\">\r\n            </div>\r\n            </p-header> -->\r\n            <img  src={{item.cover_url}}  style=\"width:100px;height:150px;\" (click)=\"testMovieService()\">\r\n            <div> <b>Budget: </b> <i>{{item.budget}}</i></div>\r\n\t\t\t<!--<div *ngIf=\"item.directors\"><b>Writers: </b> <i>{{item.directors}}</i></div> -->\r\n\t\t\t<!--<div *ngIf=\"!item.directors\"><b>Writers: </b> <i>N/A</i></div> -->\r\n            <br>\r\n            <div>{{item.plot.substr(0, 162)}}..</div>\r\n            <p-footer>\r\n\r\n              <!--                    <button class=\"btn btn-primary\" (click)=\"openFullMovieView(item)\">View Movie Profile</button>   -->\r\n              <a (click)=\"clickProfile(item)\">View Profile</a>\r\n            </p-footer>\r\n            </p-card>\r\n    </div>\r\n    </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/newuser/newuser.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/newuser/newuser.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"usa-hero\">\r\n    <div class=\"grid-container class.ice-hero-records\">\r\n        <div class=\"usa-hero-callout\">\r\n            <h1 class=\"usa-hero__heading\"><span class=\"usa-hero__heading--alt\">Sign up</span>\r\n            </h1>\r\n\r\n            <form class=\"usa-form\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\"> \r\n                <fieldset class=\"usa-fieldset\">\r\n                    <!-- <span class=\"usa-input-error-message\" id=\"input-error-message\" role=\"alert\" *ngIf=\"error\" >{{error}}</span>-->\r\n                <div>\r\n                    <div class=\"usa-input-error-message\" role=\"alert\" *ngIf=\"newuserValidation\">\r\n                        {{newuserValidation}}\r\n                    </div>\r\n                    <label class=\"usa-label\" for=\"firstName\">First Name*</label> \r\n                    <!-- <input id=\"firstname\" class=\"usa-input\" name=\"firstname\" type=\"text\" [(ngModel)]=\"firstname\" \r\n                    [ngClass]=\"{ 'is-invalid': submitted && f.firstname.errors }\" required=\"true\" placeholder=\"FirstName\"> -->\r\n                  \r\n                    <input type=\"text\" [(ngModel)]=\"firstName\" placeholder=\"First Name\" formControlName=\"firstName\" class=\"usa-input\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\r\n\r\n                    <div *ngIf=\"submitted && f.firstName.errors\" >\r\n                        <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <label class=\"usa-label\" for=\"lastName\">Last Name*</label>\r\n                    <input formControlName=\"lastName\" [(ngModel)]=\"lastName\" class=\"usa-input\" name=\"lastName\" type=\"text\" autocapitalize=\"off\" autocorrect=\"off\" required=\"true\" placeholder=\"LastName\">\r\n                    \r\n                    <div *ngIf=\"submitted && f.lastName.errors\" >\r\n                        <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\r\n                    </div>\r\n                    <label class=\"usa-label\" for=\"emailid\">Email ID*</label>\r\n                    <input formControlName=\"emailid\" [(ngModel)]=\"emailid\"  class=\"usa-input\" name=\"emailid\" type=\"text\"  autocapitalize=\"off\" autocorrect=\"off\" required=\"true\" placeholder=\"Email id\">\r\n                    \r\n                    <div *ngIf=\"submitted && f.emailid.errors\" >\r\n                        <div *ngIf=\"f.emailid.errors.required\">emailid is required</div>\r\n                        <div *ngIf=\"f.emailid.errors.email\">Email must be a valid email address</div>\r\n                    </div>\r\n\r\n                    <label class=\"usa-label\" for=\"userName\">User Name*</label>\r\n                    <input formControlName=\"userName\"  [(ngModel)]=\"userName\"  class=\"usa-input\" name=\"userName\" type=\"text\"  autocapitalize=\"off\" autocorrect=\"off\" required=\"true\" placeholder=\"User Name\">\r\n                  \r\n                    <div *ngIf=\"submitted && f.userName.errors\" >\r\n                        <div *ngIf=\"f.userName.errors.required\">User Name is required</div>\r\n                    </div>\r\n\r\n\r\n                    <label class=\"usa-label\" for=\"password\">Password*</label>\r\n                    <input formControlName=\"password\"   [(ngModel)]=\"password\" class=\"usa-input\" name=\"password\" type=\"password\"  autocapitalize=\"off\" autocorrect=\"off\" required=\"true\" placeholder=\"Password\">\r\n                    \r\n                    <div *ngIf=\"submitted && f.password.errors\" >\r\n                        <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                        <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\r\n                    </div>\r\n\r\n\r\n                    <label class=\"usa-label\" for=\"confirmPassword\">Confirm Password*</label>\r\n                    <input formControlName=\"confirmPassword\" class=\"usa-input\" name=\"confirmPassword\" type=\"password\"  autocapitalize=\"off\" autocorrect=\"off\" required=\"true\" placeholder=\"Confirm Password\">\r\n                    \r\n                <div *ngIf=\"submitted && f.confirmPassword.errors\" >\r\n                        <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\r\n                        <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\r\n                    </div>\r\n                  <!--  <input id=\"password-sign-in\" class=\"usa-input\" [(ngModel)]=\"password\" name=\"password\" type=\"password\" required=\"true\" placeholder=\"password\">\r\n       \r\n                    <input type=\"button\"  class=\"usa-button full-width-button\" id=\"submit\" value=\"Register\" > -->\r\n                    <button class=\"usa-button full-width-button\" >Sign up</button>\r\n                   <!-- <button class=\"usa-button full-width-button\">Register</button>-->\r\n                    <button class=\"usa-button full-width-button\" type=\"reset\" (click)=\"onReset()\">Cancel</button>\r\n\r\n                </fieldset>\r\n            </form>\r\n        </div>\r\n        <!-- <label for=\"newuserValidation\">{{newuserValidation}}</label> -->\r\n        <label class=\"usa-label\" [(ngModel)]=\"newuserValidation1\" for=\"newuserValidation1\"></label>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/regconfirm/regconfirm.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/regconfirm/regconfirm.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"usa-hero\">\r\n    <div class=\"grid-container class.ice-hero-records\">\r\n        <div class=\"usa-hero-callout\">\r\n            <h1 class=\"usa-hero__heading\"><span class=\"usa-hero__heading--alt\">New User Registration Confirmation</span>\r\n            </h1>\r\n\r\n            <form class=\"usa-form\" [formGroup]=\"regconfirmForm\" (ngSubmit)=\"onSubmit()\">  \r\n                  \r\n                <div>\r\n                <div class=\"usa-input-error-message\" role=\"alert\" *ngIf=\"newuserConfirmationValidation\">\r\n                    {{newuserConfirmationValidation}}\r\n                </div>  \r\n                <label class=\"usa-label\" for=\"userName\">User Name</label>\r\n                    <input formControlName=\"userName\"  [(ngModel)]=\"userName\"  class=\"usa-input\" type=\"text\" readonly  placeholder=\"User Name\">\r\n                </div> \r\n               \r\n                <div>\r\n                    <label class=\"usa-label\" for=\"confirmationCode\">Confirmation Code</label>\r\n                    <input  formControlName=\"confirmationCode\"  [(ngModel)]=\"confirmationCode\"  class=\"usa-input\" name=\"confirmationCode\" type=\"text\"  autocapitalize=\"off\" autocorrect=\"off\" required=\"true\" placeholder=\"confirmation Code\">\r\n                </div>\r\n                    <div *ngIf=\"submitted && f.confirmationCode.errors\" >\r\n                        <div *ngIf=\"f.confirmationCode.errors.required\">Confirmation Code is required</div>\r\n                    </div>\r\n               \r\n                <button class=\"usa-button full-width-button\" >Register</button>\r\n                </form>\r\n                <!-- <label for=\"newuserConfirmationValidation\">{{newuserConfirmationValidation}}</label> -->\r\n\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/visualize/visualize.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/visualize/visualize.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"boxChart__container\">\r\n \r\n  <div *ngIf=\"chartLoaded\">\r\n      \r\n      <div  class=\"pull-right\">\r\n          <form #charinputs = \"ngForm\" (ngSubmit) = \"onClickSubmit(charinputs.value)\"    >\r\n              Chart Iteration   <input type = \"text\" style=\"width:40px\" name = \"iterationid\" placeholder = \"200\" ngModel>\r\n           \r\n             No. Of Celebrities  <input type=\"text\"    style=\"width:40px\" placeholder=10 id=\"celebritiescountid\"  name=\"celebritiescountid\"  ngModel/>\r\n             &nbsp;&nbsp;  <input type = \"submit\" value = \"Go\">\r\n                </form>\r\n\r\n\r\n              </div>\r\n      <highcharts-chart\r\n        id=\"container\"\r\n        [Highcharts]=\"Highcharts\"\r\n        [constructorType]=\"chartConstructor\"\r\n        [options]=\"chartOptions\"\r\n        [callbackFunction]=\"chartCallback\"\r\n        [(update)]=\"updateFromInput\"\r\n        [oneToOne]=\"true\"\r\n        style=\"width: 100%; display: block;\"\r\n      >\r\n     \r\n      </highcharts-chart>\r\n   \r\n    </div>\r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"usa-footer\">\r\n        <!-- <div class=\"usa-footer__primary-section\">\r\n          <nav class=\"usa-footer__nav\">\r\n            <ul class=\"grid-row grid-gap\">\r\n              <li class=\"mobile-lg:grid-col-4 desktop:grid-col-2 usa-footer__primary-content\">\r\n                <a class=\"usa-footer__primary-link\" href=\"javascript:void(0);\">Home</a>\r\n              </li>\r\n              <li class=\"mobile-lg:grid-col-4 desktop:grid-col-2 usa-footer__primary-content\">\r\n                <a class=\"usa-footer__primary-link\" href=\"javascript:void(0);\">About Us</a>\r\n              </li>\r\n              <li class=\"mobile-lg:grid-col-4 desktop:grid-col-2 usa-footer__primary-content\">\r\n                <a class=\"usa-footer__primary-link\" href=\"javascript:void(0);\">Primary link</a>\r\n              </li>\r\n              <li class=\"mobile-lg:grid-col-4 desktop:grid-col-2 usa-footer__primary-content\">\r\n                <a class=\"usa-footer__primary-link\" href=\"javascript:void(0);\">Primary link</a>\r\n              </li>\r\n              <li class=\"mobile-lg:grid-col-4 desktop:grid-col-2 usa-footer__primary-content\">\r\n                <a class=\"usa-footer__primary-link\" href=\"javascript:void(0);\">Primary link</a>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n        </div> -->\r\n      \r\n        <div class=\"usa-footer__secondary-section\">\r\n          <div class=\"grid-container\">\r\n            <div class=\"grid-row grid-gap\">\r\n              <div class=\"usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2\">\r\n                <div class=\"mobile-lg:grid-col-auto\">\r\n                  <img class=\"usa-footer__logo-img\" src=\"/assets/img/FooterIcon.png\" alt=\"\" />\r\n                </div>\r\n                <div class=\"mobile-lg:grid-col-auto\">\r\n                  <h3 class=\"usa-footer__logo-heading\">Name of Agency</h3>\r\n                </div>\r\n              </div>\r\n              <div class=\"usa-footer__contact-links mobile-lg:grid-col-6\">\r\n                <div class=\"usa-footer__social-links grid-row grid-gap-1\">\r\n                  <div class=\"grid-col-auto\">\r\n                    <a class=\"usa-social-link usa-social-link--facebook\" href=\"javascript:void(0);\">\r\n                      <span>Facebook</span>\r\n                    </a>\r\n                  </div>\r\n                  <div class=\"grid-col-auto\">\r\n                    <a class=\"usa-social-link usa-social-link--twitter\" href=\"javascript:void(0);\">\r\n                      <span>Twitter</span>\r\n                    </a>\r\n                  </div>\r\n                  <div class=\"grid-col-auto\">\r\n                    <a class=\"usa-social-link usa-social-link--youtube\" href=\"javascript:void(0);\">\r\n                      <span>YouTube</span>\r\n                    </a>\r\n                  </div>\r\n                  <div class=\"grid-col-auto\">\r\n                    <a class=\"usa-social-link usa-social-link--rss\" href=\"javascript:void(0);\">\r\n                      <span>RSS</span>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n                <h3 class=\"usa-footer__contact-heading\">Agency Contact Center</h3>\r\n                <address class=\"usa-footer__address\">\r\n                  <div class=\"usa-footer__contact-info grid-row grid-gap\">\r\n                    <div class=\"grid-col-auto\">\r\n                      <a href=\"tel:1-800-555-5555\">(800) CALL-GOVT</a>\r\n                    </div>\r\n                    <div class=\"grid-col-auto\">\r\n                      <a href=\"mailto:info@agency.gov\">info@agency.gov</a>\r\n                    </div>\r\n                  </div>\r\n                </address>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"usa-header usa-header--basic\">\r\n    <div class=\"usa-nav-container\">\r\n      <div class=\"usa-navbar\">\r\n    <div class=\"usa-logo\" id=\"basic-logo\">\r\n      <em class=\"usa-logo__text\">\r\n        <a href=\"/\" title=\"Home\" aria-label=\"Home\">\r\n          <img style=\"height:40px;float:left;\" src=\"../../assets/img/MovieIconBlack.png\"/>\r\n          Celebrity Network New</a></em>\r\n    </div>\r\n    <button class=\"usa-menu-btn\">Menu</button>\r\n  </div>\r\n  <nav aria-label=\"Primary navigation\" class=\"usa-nav\">\r\n        <button class=\"usa-nav__close\"><img src=\"../../assets/img/close.svg\" alt=\"close\"></button>\r\n  <ul class=\"usa-nav__primary usa-accordion\">\r\n    <!-- <li class=\"usa-nav__primary-item\">\r\n      <button class=\"usa-accordion__button usa-nav__link\" aria-expanded=\"false\" aria-controls=\"basic-nav-section-two\"><span>Section</span></button>\r\n      <ul id=\"basic-nav-section-two\" class=\"usa-nav__submenu\">\r\n        <li class=\"usa-nav__submenu-item\">\r\n          <a href=\"#\">Navigation link</a>\r\n        </li>\r\n        <li class=\"usa-nav__submenu-item\">\r\n          <a href=\"#\">Navigation link</a>\r\n        </li>\r\n      </ul>\r\n    </li> -->\r\n    <!-- <li class=\"usa-nav__primary-item\">\r\n        <a class=\"usa-nav__link\" href=\"/home\"><span>Home</span></a>\r\n      </li>   -->\r\n    \r\n    <li class=\"usa-nav__primary-item\">\r\n      <a class=\"usa-nav__link\" href=\"/contact\"><span>Contact Us</span></a>\r\n    </li>\r\n\r\n        <li class=\"usa-nav__primary-item\">\r\n        <a class=\"usa-nav__link\" *ngIf=\"isUserLoggedIn()\" href=\"#\" (click)=\"this.LogOutUser()\"><span>Log Out</span></a>\r\n      </li>\r\n\r\n  </ul>\r\n  <!-- <form class=\"usa-search usa-search--small \">\r\n    <div role=\"search\">\r\n      <label class=\"usa-sr-only\" for=\"basic-search-field-small\">Search small</label>\r\n      <input class=\"usa-input\" id=\"basic-search-field-small\" type=\"search\" name=\"search\">\r\n      <button class=\"usa-button\" type=\"submit\"><span class=\"usa-sr-only\">Search</span></button>\r\n    </div>\r\n  </form> -->\r\n  </nav>\r\n    </div>\r\n  </header>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_app_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/app.global */ "./src/app/app.global.ts");
/* harmony import */ var _services_tab_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/tab.service */ "./src/app/services/tab.service.ts");
/* harmony import */ var _feature_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feature/home/home.component */ "./src/app/feature/home/home.component.ts");





let AppComponent = class AppComponent {
    constructor(global, tabService) {
        this.global = global;
        this.tabService = tabService;
        this.title = 'CoETechTraining-Web';
        this.isloginPage = true;
    }
    //@ContentChild(HomeComponent, {static: false})
    //@ViewChild(HomeComponent, {static: false})
    //homeComponent: HomeComponent;
    ngoninit() {
        this.global.isloginPage = this.isloginPage;
    }
    notLoginPage() {
        this.global.isloginPage = !this.isloginPage;
        this.isloginPage = !this.isloginPage;
    }
    LoginPage() {
        this.global.isloginPage = true;
        this.isloginPage = true;
    }
    handleScrollDown(event) {
        //    console.log("Scroll Event");
        if (event['isReachingBottom'] == true) {
            //     console.log('reaching bottom of AppComponent!');
            //this.tabService.getActiveTab();
            this.tabService.announceScrollDown();
            //this.homeComponent.handleScrollDownCelebrities(event);
            console.log(event);
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _app_app_global__WEBPACK_IMPORTED_MODULE_2__["AppGlobals"] },
    { type: _services_tab_service__WEBPACK_IMPORTED_MODULE_3__["TabService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_feature_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], { static: false })
], AppComponent.prototype, "homeComponent", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        providers: [_app_app_global__WEBPACK_IMPORTED_MODULE_2__["AppGlobals"], _feature_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.global.ts":
/*!*******************************!*\
  !*** ./src/app/app.global.ts ***!
  \*******************************/
/*! exports provided: AppGlobals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppGlobals", function() { return AppGlobals; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppGlobals = class AppGlobals {
    constructor() {
        this.baseAPIUrl = 'NOTHING';
        this.appName = 'Celebrity Network Application';
    }
};
AppGlobals = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppGlobals);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _configuration_app_config_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configuration/app-config.module */ "./src/app/configuration/app-config.module.ts");
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/scrollpanel */ "./node_modules/primeng/scrollpanel.js");
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/token-interceptor.service */ "./src/app/services/token-interceptor.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _feature_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./feature/login/login.component */ "./src/app/feature/login/login.component.ts");
/* harmony import */ var _feature_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./feature/contact/contact.component */ "./src/app/feature/contact/contact.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _feature_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./feature/home/home.component */ "./src/app/feature/home/home.component.ts");
/* harmony import */ var _feature_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./feature/confirm/confirm.component */ "./src/app/feature/confirm/confirm.component.ts");
/* harmony import */ var _feature_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./feature/forgot-password/forgot-password.component */ "./src/app/feature/forgot-password/forgot-password.component.ts");
/* harmony import */ var _feature_celebrities_celebrities_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./feature/celebrities/celebrities.component */ "./src/app/feature/celebrities/celebrities.component.ts");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/tabview.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_tabview__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _feature_movies_movies_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./feature/movies/movies.component */ "./src/app/feature/movies/movies.component.ts");
/* harmony import */ var _feature_visualize_visualize_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./feature/visualize/visualize.component */ "./src/app/feature/visualize/visualize.component.ts");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _feature_celebrityprofile_celebrityprofile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./feature/celebrityprofile/celebrityprofile.component */ "./src/app/feature/celebrityprofile/celebrityprofile.component.ts");
/* harmony import */ var _feature_movieprofile_movieprofile_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./feature/movieprofile/movieprofile.component */ "./src/app/feature/movieprofile/movieprofile.component.ts");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./helpers/auth-guard */ "./src/app/helpers/auth-guard.ts");
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/tabmenu */ "./node_modules/primeng/tabmenu.js");
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(primeng_tabmenu__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var ngx_scroll_event__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-scroll-event */ "./node_modules/ngx-scroll-event/index.js");
/* harmony import */ var ngx_scroll_event__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(ngx_scroll_event__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm2015/highcharts-angular.js");
/* harmony import */ var _feature_newuser_newuser_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./feature/newuser/newuser.component */ "./src/app/feature/newuser/newuser.component.ts");
/* harmony import */ var _feature_regconfirm_regconfirm_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./feature/regconfirm/regconfirm.component */ "./src/app/feature/regconfirm/regconfirm.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _feature_modal_movie_modal_movie_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./feature/modal-movie/modal-movie.component */ "./src/app/feature/modal-movie/modal-movie.component.ts");
/* harmony import */ var _feature_modal_celebrities_modal_celebrities_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./feature/modal-celebrities/modal-celebrities.component */ "./src/app/feature/modal-celebrities/modal-celebrities.component.ts");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/panel.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(primeng_panel__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/fieldset */ "./node_modules/primeng/fieldset.js");
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(primeng_fieldset__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/carousel.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(primeng_carousel__WEBPACK_IMPORTED_MODULE_39__);









































const appRoutes = [
    { path: '', component: _feature_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"], canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_27__["AuthGuard"]] },
    { path: 'login', component: _feature_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"] },
    { path: 'forgotPassword', component: _feature_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__["ForgotPasswordComponent"] },
    { path: 'confirm', component: _feature_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmComponent"] },
    { path: 'contact', component: _feature_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"] },
    { path: 'celebrities', component: _feature_celebrities_celebrities_component__WEBPACK_IMPORTED_MODULE_19__["CelebritiesComponent"], canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_27__["AuthGuard"]] },
    { path: 'celebrityprofile', component: _feature_celebrityprofile_celebrityprofile_component__WEBPACK_IMPORTED_MODULE_24__["CelebrityprofileComponent"], canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_27__["AuthGuard"]] },
    { path: 'movieprofile', component: _feature_movieprofile_movieprofile_component__WEBPACK_IMPORTED_MODULE_25__["MovieprofileComponent"], canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_27__["AuthGuard"]] },
    { path: 'newuser', component: _feature_newuser_newuser_component__WEBPACK_IMPORTED_MODULE_31__["NewuserComponent"] },
    { path: 'regconfirm', component: _feature_regconfirm_regconfirm_component__WEBPACK_IMPORTED_MODULE_32__["RegconfirmComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _shared_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
            _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
            _feature_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
            _feature_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
            _feature_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
            _feature_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmComponent"],
            _feature_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__["ForgotPasswordComponent"],
            _feature_celebrities_celebrities_component__WEBPACK_IMPORTED_MODULE_19__["CelebritiesComponent"],
            _feature_movies_movies_component__WEBPACK_IMPORTED_MODULE_21__["MoviesComponent"],
            _feature_visualize_visualize_component__WEBPACK_IMPORTED_MODULE_22__["VisualizeComponent"],
            _feature_celebrityprofile_celebrityprofile_component__WEBPACK_IMPORTED_MODULE_24__["CelebrityprofileComponent"],
            _feature_movieprofile_movieprofile_component__WEBPACK_IMPORTED_MODULE_25__["MovieprofileComponent"],
            _feature_newuser_newuser_component__WEBPACK_IMPORTED_MODULE_31__["NewuserComponent"],
            _feature_regconfirm_regconfirm_component__WEBPACK_IMPORTED_MODULE_32__["RegconfirmComponent"],
            _feature_modal_movie_modal_movie_component__WEBPACK_IMPORTED_MODULE_34__["ModalMovieComponent"],
            _feature_modal_celebrities_modal_celebrities_component__WEBPACK_IMPORTED_MODULE_35__["ModalCelebritiesComponent"],
        ],
        imports: [
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_33__["NgbModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_37__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(appRoutes),
            ngx_scroll_event__WEBPACK_IMPORTED_MODULE_29__["ScrollEventModule"],
            primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_7__["ScrollPanelModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
            _configuration_app_config_module__WEBPACK_IMPORTED_MODULE_6__["AppConfigModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_20__["TabViewModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_23__["CardModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_26__["ButtonModule"],
            primeng_tabmenu__WEBPACK_IMPORTED_MODULE_28__["TabMenuModule"],
            primeng_panel__WEBPACK_IMPORTED_MODULE_36__["PanelModule"],
            highcharts_angular__WEBPACK_IMPORTED_MODULE_30__["HighchartsChartModule"],
            primeng_panel__WEBPACK_IMPORTED_MODULE_36__["PanelModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_37__["BrowserAnimationsModule"],
            primeng_fieldset__WEBPACK_IMPORTED_MODULE_38__["FieldsetModule"],
            primeng_carousel__WEBPACK_IMPORTED_MODULE_39__["CarouselModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"], useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_8__["TokenInterceptorService"], multi: true },
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        entryComponents: [_feature_modal_movie_modal_movie_component__WEBPACK_IMPORTED_MODULE_34__["ModalMovieComponent"], _feature_modal_celebrities_modal_celebrities_component__WEBPACK_IMPORTED_MODULE_35__["ModalCelebritiesComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/configuration/app-config.module.ts":
/*!****************************************************!*\
  !*** ./src/app/configuration/app-config.module.ts ***!
  \****************************************************/
/*! exports provided: AppConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigModule", function() { return AppConfigModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.config */ "./src/app/configuration/app.config.ts");



let AppConfigModule = class AppConfigModule {
};
AppConfigModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [{
                provide: _app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"], useValue: _app_config__WEBPACK_IMPORTED_MODULE_2__["APP_DI_CONFIG"]
            }]
    })
], AppConfigModule);



/***/ }),

/***/ "./src/app/configuration/app.config.ts":
/*!*********************************************!*\
  !*** ./src/app/configuration/app.config.ts ***!
  \*********************************************/
/*! exports provided: AppConfig, APP_DI_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_DI_CONFIG", function() { return APP_DI_CONFIG; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");


class AppConfig {
}
const APP_DI_CONFIG = {
    cognitoURL: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].cognitoURL,
    cognitoPort: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].cognitoPort,
    cognitoHttpString: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].cognitoHttpString,
    tokenKey: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].tokenKey,
    cognitoAPIEP: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].cognitoAPIEP,
    CelebMSEP: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].celebMSEP,
    backendAPIEP: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backendAPIEP,
};


/***/ }),

/***/ "./src/app/feature/celebrities/celebrities.component.css":
/*!***************************************************************!*\
  !*** ./src/app/feature/celebrities/celebrities.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#avatar {\r\n    /* This image is 687 wide by 1024 tall, similar to your aspect ratio */\r\n    /*background-image: url('http://i.stack.imgur.com/Dj7eP.jpg');*/\r\n    \r\n    /* make a square container */\r\n /*   width: 100px;\r\n    height: 100px;\r\n\r\n    /* fill the container, preserving aspect ratio, and cropping to fit */\r\n    background-size: cover;\r\n\r\n    /* center the image vertically and horizontally */\r\n    background-position: top center;\r\n\r\n    /* round the edges to a circle with border radius 1/2 container size */\r\n    border-radius: 50%;\r\n}\r\n.dark-modal .modal-content {\r\n      background-color: #292b2c;\r\n      color: white;\r\n    }\r\n.dark-modal .close {\r\n      color: white;\r\n    }\r\n.light-blue-backdrop {\r\n      background-color: #5cb3fd;\r\n    }\r\n.xlModal > .modal-dialog {\r\n      max-width: 400px !important;\r\n      min-width: 300px !important;   \r\n      width: 40% !important;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9jZWxlYnJpdGllcy9jZWxlYnJpdGllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0VBQXNFO0lBQ3RFLCtEQUErRDs7SUFFL0QsNEJBQTRCO0NBQy9COzs7eUVBR3dFO0lBQ3JFLHNCQUFzQjs7SUFFdEIsaURBQWlEO0lBQ2pELCtCQUErQjs7SUFFL0Isc0VBQXNFO0lBQ3RFLGtCQUFrQjtBQUN0QjtBQUNBO01BQ00seUJBQXlCO01BQ3pCLFlBQVk7SUFDZDtBQUNKO01BQ00sWUFBWTtJQUNkO0FBQ0g7TUFDSyx5QkFBeUI7SUFDM0I7QUFDQTtNQUNFLDJCQUEyQjtNQUMzQiwyQkFBMkI7TUFDM0IscUJBQXFCO0VBQ3pCIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZS9jZWxlYnJpdGllcy9jZWxlYnJpdGllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2F2YXRhciB7XHJcbiAgICAvKiBUaGlzIGltYWdlIGlzIDY4NyB3aWRlIGJ5IDEwMjQgdGFsbCwgc2ltaWxhciB0byB5b3VyIGFzcGVjdCByYXRpbyAqL1xyXG4gICAgLypiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHA6Ly9pLnN0YWNrLmltZ3VyLmNvbS9EajdlUC5qcGcnKTsqL1xyXG4gICAgXHJcbiAgICAvKiBtYWtlIGEgc3F1YXJlIGNvbnRhaW5lciAqL1xyXG4gLyogICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG5cclxuICAgIC8qIGZpbGwgdGhlIGNvbnRhaW5lciwgcHJlc2VydmluZyBhc3BlY3QgcmF0aW8sIGFuZCBjcm9wcGluZyB0byBmaXQgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG4gICAgLyogY2VudGVyIHRoZSBpbWFnZSB2ZXJ0aWNhbGx5IGFuZCBob3Jpem9udGFsbHkgKi9cclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XHJcblxyXG4gICAgLyogcm91bmQgdGhlIGVkZ2VzIHRvIGEgY2lyY2xlIHdpdGggYm9yZGVyIHJhZGl1cyAxLzIgY29udGFpbmVyIHNpemUgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uZGFyay1tb2RhbCAubW9kYWwtY29udGVudCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTJiMmM7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuLmRhcmstbW9kYWwgLmNsb3NlIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gLmxpZ2h0LWJsdWUtYmFja2Ryb3Age1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiM2ZkO1xyXG4gICAgfVxyXG4gICAgLnhsTW9kYWwgPiAubW9kYWwtZGlhbG9nIHtcclxuICAgICAgbWF4LXdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xyXG4gICAgICBtaW4td2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7ICAgXHJcbiAgICAgIHdpZHRoOiA0MCUgIWltcG9ydGFudDtcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/feature/celebrities/celebrities.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/feature/celebrities/celebrities.component.ts ***!
  \**************************************************************/
/*! exports provided: CelebritiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelebritiesComponent", function() { return CelebritiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_celebrity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/celebrity.service */ "./src/app/services/celebrity.service.ts");
/* harmony import */ var _services_tab_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tab.service */ "./src/app/services/tab.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _modal_celebrities_modal_celebrities_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal-celebrities/modal-celebrities.component */ "./src/app/feature/modal-celebrities/modal-celebrities.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let CelebritiesComponent = class CelebritiesComponent {
    // celebrityDataSub: Subscription;
    constructor(celebService, tabService, modalService, userService, router) {
        this.celebService = celebService;
        this.tabService = tabService;
        this.modalService = modalService;
        this.userService = userService;
        this.router = router;
        this.localCelebrityList = [];
        this.listLimit = 0;
        this.searchMade = false;
        this.httpError = false;
        this.isSuccessUpdate = false;
        this.isWarningUpdate = false;
        this.isErrorUpdate = false;
        this.isWaitingResponse = true;
        this.isWaitingConfirmation = false;
        this.searchNum = 0;
        this.subStatus = 'rest';
        this.searchSubStatus = 'rest';
        this.loadStatus = 'load';
        this.searchStatus = 'search';
        this.subscription = tabService.celebTab$.subscribe(celebTab => {
            this.subStatus = celebTab;
        });
        this.searchSubscription = tabService.celebSearch$.subscribe(celebSearch => {
            this.searchSubStatus = celebSearch;
        });
        /*
                        this.celebrityDataSub = celebService.getCelebrityList().subscribe(
                          celebData => {
                            console.log('inside our component constructor!');
                            this.celebrityList = celebData;
                            localStorage.setItem('celebrities', JSON.stringify(celebData));
                          });
        */
    }
    getObservable() {
        console.log("sub status: " + this.subStatus); // + " tab status: " + this.tabStatus + " sub: " + this.subscription);
    }
    ngOnInit() {
        this.getcelebrityList();
    }
    openModal(celebrityItem) {
        const modalRef = this.modalService.open(_modal_celebrities_modal_celebrities_component__WEBPACK_IMPORTED_MODULE_6__["ModalCelebritiesComponent"], { windowClass: "xlModal",
            container: "#testmodal"
        });
        modalRef.componentInstance.celebrityObject = celebrityItem;
        console.log(celebrityItem);
        modalRef.componentInstance.passEntry.subscribe(entry => {
            console.log(entry);
            modalRef.close();
        });
        //this.modalService.open(celebrityItem);//, {backdropClass: 'light-blue-backdrop'});
    }
    loadMoreData() {
        console.log('here in loadmoredata() in celeb component');
        let lim = this.celebrityList.length;
        console.log("HERE WE ARE IN LOAD MORE DATA, SIZE OF LOCAL: " + this.localCelebrityList.length + " celebsLIST: " + this.celebrityList.length);
        if (lim == this.localCelebrityList.length) {
            if (this.searchMade) {
                return;
            }
            console.log("TELLING SERVICE WE NEED NEXT PAGE");
            this.celebService.nextPage();
            return;
        }
        let localLim = this.localCelebrityList.length;
        //console.log("lim: " + lim + " our full MoviesList: " + JSON.stringify(this.MoviesList, null, 4));
        for (let i = localLim; i < localLim + 3; i++) {
            if (i == lim) {
                break;
            }
            //console.log("PUSHING: " + JSON.stringify(this.MoviesList[i], null, 2));
            if (this.celebrityList[i]) {
                this.localCelebrityList.push(this.celebrityList[i]);
                console.log("OK WE ARE ADDING CELEBS\n\n " + this.celebrityList[i]);
            }
        }
    }
    debugLoad() {
        for (let i = 0; i < 15; i++) {
            this.localCelebrityList.push(this.celebrityList[i]);
        }
    }
    debugClick() {
        console.log('size of celebrityList in component:' + this.celebrityList.length);
        console.log('size of localCelebrityList in component:' + this.localCelebrityList.length);
        console.log('size of datastore back in the service:' + this.celebService.dataStore.celebrities.length);
        //console.log('heres whats in it:'+JSON.stringify(this.celebrityList, null, 4));
    }
    /*
                  loadMoreData(){
                    let lim = this.localCelebrityList.length;
    
                    if (lim == this.celebrityList.length){
                      return;
                    }
    
                    for(let i = lim; i < lim+15; i++){ this.localCelebrityList.push(this.celebrityList[i]); }
    
                  }
    */
    ngDoCheck() {
        //console.log("INSIDE DOCHECK, tabStatus: " + this.subStatus);
        if (this.subStatus != 'rest') {
            if (this.subStatus == this.loadStatus) {
                //load more data
                this.loadMoreData();
                //console.log("Just loaded more data!");
                //then once data load is finished
                this.tabService.announceLoadFinishedCelebrity();
                //console.log("Just let service know we are done loading data");
            }
            if (this.subStatus == this.searchStatus) {
                console.log("Okay we are searching for " + this.searchSubStatus);
                this.searchMade = true;
                this.subStatus = 'rest';
                this.localCelebrityList = [];
                this.celebrityList = [];
                this.userService.searchCelebrity(this.searchSubStatus, this.searchNum).subscribe(resp => {
                    console.log('our response:' + JSON.stringify(resp['body'], null, 4));
                    this.searchNum += 1;
                    let data = resp['body'];
                    for (let i = 0; i < data['rows'].length; i++) {
                        //console.log("our search response:"+JSON.stringify(data['rows'][i], null, 4));
                        /*--
                                            let miniBioText = data.mini_biography;
                        
                        
                                            //miniBioText = miniBioText.toString().substr(0, 164) + '..';
                                            //console.log(miniBioText);
                                            //console.log(Array.isArray(miniBioText));
                        
                                            const obj = {
                                              id: data.id,
                                              name: data.name,
                                              nickname : data.nickname,
                                              birthdate : data.birth_info.birth_date,
                                              birthplace: data.birth_info.birth_place,
                                              minibio: miniBioText,
                                              height : data.height,
                                              headshot : data.headshot,
                                              moviesList : data.filmography,
                                            }
                                            //console.log('about to push this obj into datastore:'+JSON.stringify(obj, null, 2));
                                            this.dataStore.celebrities.push(obj);
                        --*/
                        let objData = data['rows'][i];
                        let miniBioText = objData.mini_biography;
                        //console.log(miniBioText);
                        //console.log(Array.isArray(miniBioText));
                        if (miniBioText == null) {
                            miniBioText = '';
                        }
                        else {
                            if (Array.isArray(miniBioText)) {
                                miniBioText = miniBioText.join(',');
                            }
                            //                      miniBioText = miniBioText.toString().substr(0, 164) + '..'; 
                        }
                        const obj = {
                            id: i,
                            name: objData.name,
                            nickname: objData.nickname,
                            birthdate: objData.birth_info.birth_date,
                            birthplace: objData.birth_info.birth_place,
                            miniBio: miniBioText,
                            height: objData.height,
                            headshot: objData.headshot,
                            moviesList: objData.filmography,
                        };
                        this.celebrityList.push(obj);
                    }
                }, (err) => {
                    console.log(err);
                    this.isWaitingResponse = false;
                    this.httpError = true;
                    this.isSuccessUpdate = false;
                    this.isWarningUpdate = false;
                    this.isErrorUpdate = true;
                }, () => {
                    this.httpError = false;
                    this.isWaitingResponse = false;
                    console.log("IN HTTPRESPONSE");
                    this.tabService.announceSearchFinishedCelebrity();
                    this.displayResults();
                });
            }
        }
    }
    displayResults() {
        console.log("HERE WE ARE DISPLAYING RESULTS");
        let lim = this.localCelebrityList.length;
        if (this.celebrityList.length == 0) {
            this.celebrityList = [];
            return;
        }
        console.log("VBNM LIM:" + lim);
        if (lim == this.celebrityList.length) {
            console.log("RETURNING BECAUSE REACHED LIMIT");
            return;
        }
        for (let i = lim; i < lim + 6; i++) {
            if (this.celebrityList[i]) {
                this.localCelebrityList.push(this.celebrityList[i]);
                console.log("OK WE ARE ADDING CELEBS\n\n " + this.celebrityList[i]);
            }
        }
    }
    getcelebrityList() {
        console.log('here in getcelebritylist in celeb component');
        this.celebService.getCelebrityList().subscribe(celeb => {
            this.celebrityList = celeb;
            //      localStorage.setItem('celebrities', JSON.stringify(celeb));
            //console.log('inside celeb subscription in component, celeb obj:'+JSON.stringify(celeb, null, 4));
            // console.log('inside celeb subscription in component, size of celeb:'+celeb.length);
            //console.log(celeb);
            for (let c of celeb) {
                if (this.localCelebrityList.length == 15) {
                    break;
                }
                this.localCelebrityList.push(c);
            }
        });
    }
    clickProfile(item) {
        console.log(item);
        this.router.navigate(['/celebrityprofile'], { queryParams: { id: item.id } });
    }
    handleScrollDown(event) {
        console.log('in handlescrolldown');
        if (event['isReachingBottom'] == true) {
            let lim = this.localCelebrityList.length;
            if (lim == this.celebrityList.length) {
                return;
            }
            for (let i = lim; i < lim + 15; i++) {
                this.localCelebrityList.push(this.celebrityList[i]);
            }
        }
    }
};
CelebritiesComponent.ctorParameters = () => [
    { type: src_app_services_celebrity_service__WEBPACK_IMPORTED_MODULE_2__["CelebrityService"] },
    { type: _services_tab_service__WEBPACK_IMPORTED_MODULE_3__["TabService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
CelebritiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-celebrities',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./celebrities.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/celebrities/celebrities.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./celebrities.component.css */ "./src/app/feature/celebrities/celebrities.component.css")).default]
    })
], CelebritiesComponent);



/***/ }),

/***/ "./src/app/feature/celebrityprofile/celebrityprofile.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/feature/celebrityprofile/celebrityprofile.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#avatar {\r\n    /* This image is 687 wide by 1024 tall, similar to your aspect ratio */\r\n    /*background-image: url('http://i.stack.imgur.com/Dj7eP.jpg');*/\r\n    \r\n    /* make a square container */\r\n /*   width: 100px;\r\n    height: 100px;\r\n\r\n    /* fill the container, preserving aspect ratio, and cropping to fit */\r\n    background-size: cover;\r\n\r\n    /* center the image vertically and horizontally */\r\n    background-position: top center;\r\n\r\n    /* round the edges to a circle with border radius 1/2 container size */\r\n    border-radius: 20%;\r\n}\r\n\r\n.card\r\n{\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    max-width: 800px;\r\n    margin: auto;\r\n    text-align: center;\r\n    background-image: url('usercard.png');\r\n}\r\n\r\n.title \r\n{\r\n    color: grey;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9jZWxlYnJpdHlwcm9maWxlL2NlbGVicml0eXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNFQUFzRTtJQUN0RSwrREFBK0Q7O0lBRS9ELDRCQUE0QjtDQUMvQjs7O3lFQUd3RTtJQUNyRSxzQkFBc0I7O0lBRXRCLGlEQUFpRDtJQUNqRCwrQkFBK0I7O0lBRS9CLHNFQUFzRTtJQUN0RSxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksMENBQTBDO0lBQzFDLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFDQUF5RDtBQUM3RDs7QUFDQTs7SUFFSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlL2NlbGVicml0eXByb2ZpbGUvY2VsZWJyaXR5cHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2F2YXRhciB7XHJcbiAgICAvKiBUaGlzIGltYWdlIGlzIDY4NyB3aWRlIGJ5IDEwMjQgdGFsbCwgc2ltaWxhciB0byB5b3VyIGFzcGVjdCByYXRpbyAqL1xyXG4gICAgLypiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHA6Ly9pLnN0YWNrLmltZ3VyLmNvbS9EajdlUC5qcGcnKTsqL1xyXG4gICAgXHJcbiAgICAvKiBtYWtlIGEgc3F1YXJlIGNvbnRhaW5lciAqL1xyXG4gLyogICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG5cclxuICAgIC8qIGZpbGwgdGhlIGNvbnRhaW5lciwgcHJlc2VydmluZyBhc3BlY3QgcmF0aW8sIGFuZCBjcm9wcGluZyB0byBmaXQgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG4gICAgLyogY2VudGVyIHRoZSBpbWFnZSB2ZXJ0aWNhbGx5IGFuZCBob3Jpem9udGFsbHkgKi9cclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XHJcblxyXG4gICAgLyogcm91bmQgdGhlIGVkZ2VzIHRvIGEgY2lyY2xlIHdpdGggYm9yZGVyIHJhZGl1cyAxLzIgY29udGFpbmVyIHNpemUgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcclxufVxyXG5cclxuLmNhcmRcclxue1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvdXNlcmNhcmQucG5nXCIpO1xyXG59XHJcbi50aXRsZSBcclxue1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/feature/celebrityprofile/celebrityprofile.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/feature/celebrityprofile/celebrityprofile.component.ts ***!
  \************************************************************************/
/*! exports provided: CelebrityprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelebrityprofileComponent", function() { return CelebrityprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_celebrity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/celebrity.service */ "./src/app/services/celebrity.service.ts");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var highcharts_modules_wordcloud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highcharts/modules/wordcloud */ "./node_modules/highcharts/modules/wordcloud.js");
/* harmony import */ var highcharts_modules_wordcloud__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_wordcloud__WEBPACK_IMPORTED_MODULE_5__);






highcharts_modules_wordcloud__WEBPACK_IMPORTED_MODULE_5___default()(highcharts__WEBPACK_IMPORTED_MODULE_4__);
let CelebrityprofileComponent = class CelebrityprofileComponent {
    constructor(route, celebService) {
        this.route = route;
        this.celebService = celebService;
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_4__;
        this.chartConstructor = "chart";
        this.movies = [];
        this.iscircular = true;
        this.chartOptions = {
            series: [{
                    type: 'wordcloud',
                    name: 'Occurrences',
                    minFontSize: 7
                }],
            title: {
                text: 'Wordcloud of Biography'
            },
            rotation: {
                from: 0,
                to: 0
            },
            style: {
                fontFamily: 'Arial',
            }
        };
        console.log("In Celeb Profile Page");
        this.route.queryParams.subscribe(params => { this.CelebId = params['id']; });
    }
    ngOnInit() {
        this.celebService.getCelebrityProfile(this.CelebId).subscribe(resp => {
            let respdata = resp['body'];
            console.log(resp['body']);
            this.CelebrityProfile = respdata[0];
            for (let index = 1; index < respdata.length; index++) {
                const element = respdata[index];
                if (element && element.coverUrl.startsWith("http")) {
                    this.movies.push(element);
                }
            }
            console.log(this.movies);
            var miniBioText = respdata[0].miniBio;
            if (miniBioText == null) {
                console.log(miniBioText);
                miniBioText = '';
            }
            else {
                if (Array.isArray(miniBioText)) {
                    miniBioText = miniBioText.join(',');
                }
                console.log('our bio:' + miniBioText);
            }
            this.CelebrityProfile.miniBio = miniBioText;
            console.log(miniBioText);
            var text = this.CelebrityProfile.miniBio;
            var removeUselessWords = function (txt) {
                var uselessWordsArray = [
                    "a", "at", "be", "can", "cant", "could", "couldnt",
                    "do", "does", "how", "i", "in", "is", "many", "much", "of",
                    "on", "or", "should", "shouldnt", "so", "such", "the",
                    "them", "they", "to", "us", "we", "what", "who", "why",
                    "with", "wont", "would", "wouldnt", "you", "he", "and", "as",
                    "was", "his", "for", "an", "by", "yes", "no", "has", "from",
                    "this", "that", "her", "she", "also", "had", "him", "it", "but",
                    "until"
                ];
                var expStr = uselessWordsArray.join("|");
                return txt.replace(new RegExp('\\b(' + expStr + ')\\b', 'gi'), ' ')
                    .replace(/\s{2,}/g, ' ');
            };
            text = removeUselessWords(text);
            var lines = text.split(/[,\. ]+/g), data = highcharts__WEBPACK_IMPORTED_MODULE_4__["reduce"](lines, function (arr, word) {
                var obj = highcharts__WEBPACK_IMPORTED_MODULE_4__["find"](arr, function (obj) {
                    return obj.name === word;
                });
                if (obj) {
                    obj['weight'] = obj['weight'] + 1;
                }
                else {
                    obj = {
                        name: word,
                        weight: 1
                    };
                    arr.push(obj);
                }
                return arr;
            }, []);
            console.log(data);
            var filtered = data.filter(function (value, index, arr) {
                return value.weight > 1;
            });
            this.chartOptions.series[0]['data'] = filtered;
        });
    }
};
CelebrityprofileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_celebrity_service__WEBPACK_IMPORTED_MODULE_3__["CelebrityService"] }
];
CelebrityprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-celebrityprofile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./celebrityprofile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/celebrityprofile/celebrityprofile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./celebrityprofile.component.css */ "./src/app/feature/celebrityprofile/celebrityprofile.component.css")).default]
    })
], CelebrityprofileComponent);



/***/ }),

/***/ "./src/app/feature/confirm/confirm.component.css":
/*!*******************************************************!*\
  !*** ./src/app/feature/confirm/confirm.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.usa-hero{\r\n    font-family:Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r\n    font-size:1.06rem;\r\n    line-height:1.5;\r\n    padding-bottom:2rem;\r\n    padding-top:2rem;\r\n    background-image:url('BitmapGoodDarkest.png');\r\n    background-position:center;\r\n    background-size:cover;\r\n    color:white;\r\n  }\r\n  \r\n  .usa-hero-callout {\r\n  \r\n    background-color:#4a4444;\r\n    opacity:0.75;\r\n    -webkit-backdrop-filter:blur(1.5rem);\r\n            backdrop-filter:blur(1.5rem);\r\n    padding: 2rem;\r\n    max-width:30rem;\r\n  }\r\n  \r\n  .usa-button {\r\n  \r\n    background-color:black;\r\n  }\r\n  \r\n  .usa-input-error-label {\r\n  \r\n    color:white;\r\n  }\r\n  \r\n  .usa-show-password {\r\n    color: #ffffff;\r\n  }\r\n  \r\n  .usa-alert{\r\n    background-color:#4a4444;\r\n  }\r\n  \r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9jb25maXJtL2NvbmZpcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxxRkFBcUY7SUFDckYsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLDZDQUFpRTtJQUNqRSwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLFdBQVc7RUFDYjs7RUFFQTs7SUFFRSx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLGVBQWU7RUFDakI7O0VBRUE7O0lBRUUsc0JBQXNCO0VBQ3hCOztFQUVBOztJQUVFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUIiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlL2NvbmZpcm0vY29uZmlybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi51c2EtaGVyb3tcclxuICAgIGZvbnQtZmFtaWx5OlNvdXJjZSBTYW5zIFBybyBXZWIsIEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6MS4wNnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OjEuNTtcclxuICAgIHBhZGRpbmctYm90dG9tOjJyZW07XHJcbiAgICBwYWRkaW5nLXRvcDoycmVtO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL0JpdG1hcEdvb2REYXJrZXN0LnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC51c2EtaGVyby1jYWxsb3V0IHtcclxuICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzRhNDQ0NDtcclxuICAgIG9wYWNpdHk6MC43NTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjpibHVyKDEuNXJlbSk7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgbWF4LXdpZHRoOjMwcmVtO1xyXG4gIH1cclxuICBcclxuICAudXNhLWJ1dHRvbiB7XHJcbiAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gIH1cclxuICBcclxuICAudXNhLWlucHV0LWVycm9yLWxhYmVsIHtcclxuICBcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gIH1cclxuICBcclxuICAudXNhLXNob3ctcGFzc3dvcmQge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuICAudXNhLWFsZXJ0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNGE0NDQ0O1xyXG4gIH1cclxuICBcclxuICBcclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/feature/confirm/confirm.component.ts":
/*!******************************************************!*\
  !*** ./src/app/feature/confirm/confirm.component.ts ***!
  \******************************************************/
/*! exports provided: ConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return ConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/header/header.component */ "./src/app/shared/header/header.component.ts");






let ConfirmComponent = class ConfirmComponent {
    constructor(cookieService, userService, router, header) {
        this.cookieService = cookieService;
        this.userService = userService;
        this.router = router;
        this.header = header;
        this.loginObj = { username: this.cookieService.get('username'),
            password: '',
            newpassword: '',
            temppassword: '',
            confpassword: '',
        };
    }
    ngOnInit() {
    }
    isSame() {
        return !(this.loginObj.newpassword === this.loginObj.confpassword && this.isUpper() === false && this.isLower() === false
            && this.isLong() === false && this.isSpecial() === false && this.isNumber() === false);
    }
    isUpper() {
        return /[A-Z]/.test(this.loginObj.newpassword) === false;
    }
    isLower() {
        return /[a-z]/.test(this.loginObj.newpassword) === false;
    }
    isNumber() {
        return /[0-9]/.test(this.loginObj.newpassword) === false;
    }
    isSpecial() {
        return /[!-*,-/:-<>-@[-`{-~]/.test(this.loginObj.newpassword) === false;
    }
    isLong() {
        return this.loginObj.newpassword.length < 8;
    }
    updateUser() {
        // const obj: any = {
        //   'username': this.username,
        //   'tempPassword': this.temppassword,
        //   'password': this.newpassword,
        //   'confPassword': this.confpassword,
        //   'session': this.cookieService.get('session')};
        // this.payload = <JSON>obj;
        this.userService.confirmUser(this.loginObj).subscribe(res => {
            this.isLogOut();
        }, (err) => { });
        // this.http.post(this.sg['baseAPIUrl'] + '/authenticate2', this.payload, {headers: this.createAuthorizationHeader()}).subscribe(res => {
        //     /*this.cookie.set('userVo', JSON.stringify(res));
        //     for (let x = 0; x < res['groups'].length; x++) {
        //       this.groups.push(res['groups'][x]['groupName']);
        //     }
        //     this.cookie.set('groups', JSON.stringify(this.groups));
        //     this.cookie.delete('session');
        //     this.router.navigateByUrl('/user');*/
        //     this.isLogOut();
        //   },
        //   (err: HttpErrorResponse) => {});
    }
    isLogOut() {
        this.cookieService.deleteAll();
        //this.header.resetAll();
        this.router.navigateByUrl('/');
    }
};
ConfirmComponent.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"] }
];
ConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirm',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/confirm/confirm.component.html")).default,
        providers: [src_app_shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirm.component.css */ "./src/app/feature/confirm/confirm.component.css")).default]
    })
], ConfirmComponent);



/***/ }),

/***/ "./src/app/feature/contact/contact.component.css":
/*!*******************************************************!*\
  !*** ./src/app/feature/contact/contact.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/feature/contact/contact.component.ts":
/*!******************************************************!*\
  !*** ./src/app/feature/contact/contact.component.ts ***!
  \******************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/feature/contact/contact.component.css")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/feature/forgot-password/forgot-password.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/feature/forgot-password/forgot-password.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.usa-hero{\r\n  font-family:Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r\n  font-size:1.06rem;\r\n  line-height:1.5;\r\n  padding-bottom:2rem;\r\n  padding-top:2rem;\r\n  background-image:url('BitmapGoodDarkest.png');\r\n  background-position:center;\r\n  background-size:cover;\r\n  color:white;\r\n}\r\n\r\n.usa-hero-callout {\r\n\r\n  background-color:#4a4444;\r\n  opacity:0.75;\r\n  -webkit-backdrop-filter:blur(1.5rem);\r\n          backdrop-filter:blur(1.5rem);\r\n  padding: 2rem;\r\n  max-width:20rem;\r\n}\r\n\r\n.usa-button {\r\n\r\n  background-color:black;\r\n}\r\n\r\n.usa-input-error-message {\r\n\r\n  color:red;\r\n  background-color: rgb(216, 209, 209);\r\n}\r\n\r\n.usa-show-password {\r\n  color: #ffffff;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UscUZBQXFGO0VBQ3JGLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiw2Q0FBaUU7RUFDakUsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixvQ0FBNEI7VUFBNUIsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxTQUFTO0VBQ1Qsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi51c2EtaGVyb3tcclxuICBmb250LWZhbWlseTpTb3VyY2UgU2FucyBQcm8gV2ViLCBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZToxLjA2cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OjEuNTtcclxuICBwYWRkaW5nLWJvdHRvbToycmVtO1xyXG4gIHBhZGRpbmctdG9wOjJyZW07XHJcbiAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL0JpdG1hcEdvb2REYXJrZXN0LnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi51c2EtaGVyby1jYWxsb3V0IHtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjojNGE0NDQ0O1xyXG4gIG9wYWNpdHk6MC43NTtcclxuICBiYWNrZHJvcC1maWx0ZXI6Ymx1cigxLjVyZW0pO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgbWF4LXdpZHRoOjIwcmVtO1xyXG59XHJcblxyXG4udXNhLWJ1dHRvbiB7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbn1cclxuXHJcbi51c2EtaW5wdXQtZXJyb3ItbWVzc2FnZSB7XHJcblxyXG4gIGNvbG9yOnJlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAyMDksIDIwOSk7XHJcbn1cclxuXHJcbi51c2Etc2hvdy1wYXNzd29yZCB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/feature/forgot-password/forgot-password.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/feature/forgot-password/forgot-password.component.ts ***!
  \**********************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.isSuccessUpdate = false;
        this.isWarningUpdate = false;
        this.isErrorUpdate = false;
        this.isWaitingResponse = true;
        this.isWaitingConfirmation = false;
        this.confCode = "";
        this.newPass = "";
        this.userName = "";
        this.notValidPass = false;
        this.usernameError = false;
        this.firstNameError = false;
        this.lastNameError = false;
        this.firstName = '';
        this.lastName = '';
        this.httpError = false;
        this.error = "";
    }
    ngOnInit() {
    }
    isValid() {
        return !(this.isUpper() === false && this.isLower() === false
            && this.isLong() === false && this.isSpecial() === false && this.isNumber() === false);
    }
    isUpper() {
        return /[A-Z]/.test(this.newPass) === false;
    }
    isLower() {
        return /[a-z]/.test(this.newPass) === false;
    }
    isNumber() {
        return /[0-9]/.test(this.newPass) === false;
    }
    isSpecial() {
        return /[!-*,-/:-<>-@[-`{-~]/.test(this.newPass) === false;
    }
    isLong() {
        return this.newPass.length < 8;
    }
    beginSetTempPassword(u) {
        this.userName = u;
        console.log(u);
        //call user service api here
        this.userService.beginResetPassword(u).subscribe(resp => {
            console.log(JSON.stringify(resp, null, 4));
            this.isWaitingConfirmation = true;
            this.error = "";
        }, (err) => {
            console.log(err);
            this.isSuccessUpdate = false;
            this.isWarningUpdate = false;
            this.isErrorUpdate = true;
            this.error = "Invalid Username";
        });
        console.log("After making call");
    }
    finishSetTempPassword(code, newpass) {
        console.log(code);
        this.isWaitingResponse = false;
        //call user service api here
        this.userService.finishResetPassword(this.userName, code, newpass).subscribe(resp => {
            console.log(JSON.stringify(resp, null, 4));
        }, (err) => {
            console.log(err);
            this.isWaitingResponse = false;
            this.httpError = true;
            this.isSuccessUpdate = false;
            this.isWarningUpdate = false;
            this.isErrorUpdate = true;
        }, () => {
            this.httpError = false;
            this.isWaitingResponse = false;
            console.log("IN HTTPRESPONSE");
            alert("Password successfully reset!");
            this.router.navigateByUrl('');
        });
        console.log("After making call in finish");
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/forgot-password/forgot-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/feature/forgot-password/forgot-password.component.css")).default]
    })
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/feature/home/home.component.css":
/*!*************************************************!*\
  !*** ./src/app/feature/home/home.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ui-tabview {\r\n    padding: .25em;\r\n    text-align: center;\r\n}\r\n\r\n.ui-tabview .ui-tabview-nav li {\r\n    list-style: none;\r\n    float: none;\r\n    position: relative;\r\n    margin: 0 .125em 1px 0;\r\n    padding: 0;\r\n    white-space: nowrap;\r\n    display: inline-block!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQiwrQkFBK0I7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVpLXRhYnZpZXcge1xyXG4gICAgcGFkZGluZzogLjI1ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi51aS10YWJ2aWV3IC51aS10YWJ2aWV3LW5hdiBsaSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDAgLjEyNWVtIDFweCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2shaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/feature/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/feature/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _celebrities_celebrities_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../celebrities/celebrities.component */ "./src/app/feature/celebrities/celebrities.component.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movies/movies.component */ "./src/app/feature/movies/movies.component.ts");
/* harmony import */ var _services_tab_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tab.service */ "./src/app/services/tab.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");




//import {TabMenuModule} from 'primeng/tabmenu';
//import {MenuItem} from 'primeng/api';


let HomeComponent = class HomeComponent {
    constructor(tabService, userService) {
        this.tabService = tabService;
        this.userService = userService;
        this.httpError = false;
        this.isSuccessUpdate = false;
        this.isWarningUpdate = false;
        this.isErrorUpdate = false;
        this.isWaitingResponse = true;
        this.isWaitingConfirmation = false;
        this.activeTab = 'celeb';
        this.msg = '';
    }
    ngOnInit() { this.tabService.initTab(); }
    setActiveTab(t) {
        this.tabService.setActiveTab(t);
    }
    search(term) {
        this.isWaitingResponse = false;
        //call user service api here
        this.tabService.announceSearchMade(term);
        /*
            this.userService.searchMovie(term).subscribe(
              resp => {
                console.log(JSON.stringify(resp, null, 4));
              },
                (err: HttpErrorResponse) => {
                  console.log(err);
                  this.isWaitingResponse = false;
                  this.httpError = true;
                  this.isSuccessUpdate = false;
                  this.isWarningUpdate = false;
                  this.isErrorUpdate = true;
                },
                () => {
        
                  this.httpError = false;
                  this.isWaitingResponse = false;
                  console.log("IN HTTPRESPONSE");
        
                }
            );
          */
        console.log("After making call in finish");
    }
    handleScrollDownCelebrities(event) {
        //console.log("scroll occured event in celebrities: " + JSON.stringify(event, null, 2));
        if (event['isReachingBottom'] == true) {
            console.log('reaching bottom of celebrities!');
            console.log(this);
            this.celebrityComponent.handleScrollDown(event);
        }
    }
    handleScrollDownMovies(event) {
        //console.log("scroll occured event in movies: " + JSON.stringify(event, null, 2));
        if (event['isReachingBottom'] == true) {
            console.log('reaching bottom of movies!');
            this.movieComponent.handleScrollDown(event);
        }
    }
    // handleScrollDownVisualize(event){
    //   //console.log("scroll occured event in visualize: " + JSON.stringify(event, null, 2));
    //   if (event['isReachingBottom'] == true){
    //     console.log('reaching bottom of visualize!');
    //     //this.visualizeComponent.handleScrollDown(event);
    //   }
    // }
    handleChange(e) {
        this.index = e.index;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_tab_service__WEBPACK_IMPORTED_MODULE_4__["TabService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_celebrities_celebrities_component__WEBPACK_IMPORTED_MODULE_2__["CelebritiesComponent"], { static: false })
], HomeComponent.prototype, "celebrityComponent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_movies_movies_component__WEBPACK_IMPORTED_MODULE_3__["MoviesComponent"], { static: false })
], HomeComponent.prototype, "movieComponent", void 0);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/home/home.component.html")).default,
        providers: [_celebrities_celebrities_component__WEBPACK_IMPORTED_MODULE_2__["CelebritiesComponent"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/feature/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/feature/login/login.component.css":
/*!***************************************************!*\
  !*** ./src/app/feature/login/login.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".usa-hero{\r\n  font-family:Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r\n  font-size:1.06rem;\r\n  line-height:1.5;\r\n  padding-bottom:2rem;\r\n  padding-top:2rem;\r\n  background-image:url('BitmapGoodDarkest.png');\r\n  background-position:center;\r\n  background-size:cover;\r\n  color:white;\r\n}\r\n\r\n.usa-hero-callout {\r\n\r\n  background-color:#4a4444;\r\n  opacity:0.75;\r\n  -webkit-backdrop-filter:blur(1.5rem);\r\n          backdrop-filter:blur(1.5rem);\r\n  padding: 2rem;\r\n  max-width:20rem;\r\n}\r\n\r\n.usa-button {\r\n\r\n  background-color:black;\r\n}\r\n\r\n.usa-nav-link-3\r\n{\r\n  padding-right:10%;\r\n\r\n\r\n}\r\n\r\n.usa-input-error-message {\r\n\r\n  color:red;\r\n  background-color: rgb(216, 209, 209);\r\n}\r\n\r\n.usa-show-password {\r\n  color: #ffffff;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUZBQXFGO0VBQ3JGLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiw2Q0FBaUU7RUFDakUsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixvQ0FBNEI7VUFBNUIsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxpQkFBaUI7OztBQUduQjs7QUFDQTs7RUFFRSxTQUFTO0VBQ1Qsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2EtaGVyb3tcclxuICBmb250LWZhbWlseTpTb3VyY2UgU2FucyBQcm8gV2ViLCBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZToxLjA2cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OjEuNTtcclxuICBwYWRkaW5nLWJvdHRvbToycmVtO1xyXG4gIHBhZGRpbmctdG9wOjJyZW07XHJcbiAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL0JpdG1hcEdvb2REYXJrZXN0LnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi51c2EtaGVyby1jYWxsb3V0IHtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjojNGE0NDQ0O1xyXG4gIG9wYWNpdHk6MC43NTtcclxuICBiYWNrZHJvcC1maWx0ZXI6Ymx1cigxLjVyZW0pO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgbWF4LXdpZHRoOjIwcmVtO1xyXG59XHJcblxyXG4udXNhLWJ1dHRvbiB7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbn1cclxuXHJcbi51c2EtbmF2LWxpbmstM1xyXG57XHJcbiAgcGFkZGluZy1yaWdodDoxMCU7XHJcblxyXG5cclxufVxyXG4udXNhLWlucHV0LWVycm9yLW1lc3NhZ2Uge1xyXG5cclxuICBjb2xvcjpyZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMjA5LCAyMDkpO1xyXG59XHJcblxyXG4udXNhLXNob3ctcGFzc3dvcmQge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/feature/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/feature/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");



//import { CookieService } from 'ngx-cookie-service';
//import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//import { AppConfig } from 'src/app/configuration/app.config';

//import { UserService } from 'src/app/services/user.service';
//import { IUser, ILogin } from 'src/app/models/user.model';


let LoginComponent = class LoginComponent {
    constructor(router, route, myapp, authService) {
        this.router = router;
        this.route = route;
        this.myapp = myapp;
        this.authService = authService;
        // redirect to home if already logged in
        if (this.authService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.route.queryParams.subscribe(params => {
            console.log(JSON.stringify(params.usernamelogin));
            // this.usernamelogin = params.get ('usernamelogin');
            if (params['usernamelogin']) {
                this.newuserConfirmationMsg = params.usernamelogin + ' has been registered successfully, please sign in!'; // popular4
            }
        });
    }
    loginUser() {
        console.log(this.username + this.password);
        this.authService.login(this.username, this.password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(resp => {
            console.log(resp);
            if (resp.status == 202) {
                console.log('First time user: Redirect to Confirm/Change password page');
                this.router.navigate(['/confirm']);
            }
            else {
                this.router.navigate([this.returnUrl]);
            }
        }, error => {
            this.error = "Invalid Username or Password";
            console.log('loging error');
            console.log(this.error);
            //this.loading = false;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/feature/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/feature/modal-celebrities/modal-celebrities.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/feature/modal-celebrities/modal-celebrities.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#avatar {\r\n    /* This image is 687 wide by 1024 tall, similar to your aspect ratio */\r\n    /*background-image: url('http://i.stack.imgur.com/Dj7eP.jpg');*/\r\n    \r\n    /* make a square container */\r\n /*   width: 100px;\r\n    height: 100px;\r\n\r\n    /* fill the container, preserving aspect ratio, and cropping to fit */\r\n    background-size: cover;\r\n\r\n    /* center the image vertically and horizontally */\r\n    background-position: top center;\r\n\r\n    /* round the edges to a circle with border radius 1/2 container size */\r\n    border-radius: 50%;\r\n}\r\n.xlModal > .modal-dialog {\r\n    max-width: 400px !important;\r\n    min-width: 300px !important;   \r\n    width: 40% !important;\r\n}\r\n.modal-open {\r\n  overflow: hidden;\r\n}\r\n.modal-open .modal {\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n}\r\n.modal {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1050;\r\n  display: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  outline: 0;\r\n}\r\n.modal-dialog {\r\n  position: relative;\r\n  width: auto;\r\n  margin: 0.5rem;\r\n  pointer-events: none;\r\n}\r\n.modal.fade .modal-dialog {\r\n  transition: transform 0.3s ease-out;\r\n  transform: translate(0, -50px);\r\n}\r\n@media (prefers-reduced-motion: reduce) {\r\n  .modal.fade .modal-dialog {\r\n    transition: none;\r\n  }\r\n}\r\n.modal.show .modal-dialog {\r\n  transform: none;\r\n}\r\n.modal.modal-static .modal-dialog {\r\n  transform: scale(1.02);\r\n}\r\n.modal-dialog-scrollable {\r\n  display: flex;\r\n  max-height: calc(100% - 1rem);\r\n}\r\n.modal-dialog-scrollable .modal-content {\r\n  max-height: calc(100vh - 1rem);\r\n  overflow: hidden;\r\n}\r\n.modal-dialog-scrollable .modal-header,\r\n.modal-dialog-scrollable .modal-footer {\r\n  flex-shrink: 0;\r\n}\r\n.modal-dialog-scrollable .modal-body {\r\n  overflow-y: auto;\r\n}\r\n.modal-dialog-centered {\r\n  display: flex;\r\n  align-items: center;\r\n  min-height: calc(100% - 1rem);\r\n}\r\n.modal-dialog-centered::before {\r\n  display: block;\r\n  height: calc(100vh - 1rem);\r\n  content: \"\";\r\n}\r\n.modal-dialog-centered.modal-dialog-scrollable {\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  height: 100%;\r\n}\r\n.modal-dialog-centered.modal-dialog-scrollable .modal-content {\r\n  max-height: none;\r\n}\r\n.modal-dialog-centered.modal-dialog-scrollable::before {\r\n  content: none;\r\n}\r\n.modal-content {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  pointer-events: auto;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  border: 1px solid rgba(0, 0, 0, 0.2);\r\n  border-radius: 0.3rem;\r\n  outline: 0;\r\n}\r\n.modal-backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1040;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: #000;\r\n}\r\n.modal-backdrop.fade {\r\n  opacity: 0;\r\n}\r\n.modal-backdrop.show {\r\n  opacity: 0.5;\r\n}\r\n.modal-header {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n  padding: 1rem 1rem;\r\n  border-bottom: 1px solid #dee2e6;\r\n  border-top-left-radius: calc(0.3rem - 1px);\r\n  border-top-right-radius: calc(0.3rem - 1px);\r\n}\r\n.modal-header .close {\r\n  padding: 1rem 1rem;\r\n  margin: -1rem -1rem -1rem auto;\r\n}\r\n.modal-title {\r\n  margin-bottom: 0;\r\n  line-height: 1.5;\r\n}\r\n.modal-body {\r\n  position: relative;\r\n  flex: 1 1 auto;\r\n  padding: 1rem;\r\n}\r\n.modal-footer {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n  padding: 0.75rem;\r\n  border-top: 1px solid #dee2e6;\r\n  border-bottom-right-radius: calc(0.3rem - 1px);\r\n  border-bottom-left-radius: calc(0.3rem - 1px);\r\n}\r\n.modal-footer > * {\r\n  margin: 0.25rem;\r\n}\r\n.modal-scrollbar-measure {\r\n  position: absolute;\r\n  top: -9999px;\r\n  width: 50px;\r\n  height: 50px;\r\n  overflow: scroll;\r\n}\r\n@media (min-width: 576px) {\r\n  .modal-dialog {\r\n    max-width: 500px;\r\n    margin: 1.75rem auto;\r\n  }\r\n  .modal-dialog-scrollable {\r\n    max-height: calc(100% - 3.5rem);\r\n  }\r\n  .modal-dialog-scrollable .modal-content {\r\n    max-height: calc(100vh - 3.5rem);\r\n  }\r\n  .modal-dialog-centered {\r\n    min-height: calc(100% - 3.5rem);\r\n  }\r\n  .modal-dialog-centered::before {\r\n    height: calc(100vh - 3.5rem);\r\n  }\r\n  .modal-sm {\r\n    max-width: 300px;\r\n  }\r\n}\r\n@media (min-width: 992px) {\r\n  .modal-lg,\r\n  .modal-xl {\r\n    max-width: 800px;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .modal-xl {\r\n    max-width: 1140px;\r\n  }\r\n}\r\n.dark-modal .modal-content {\r\n      background-color: #292b2c;\r\n      color: white;\r\n    }\r\n.dark-modal .close {\r\n      color: white;\r\n    }\r\n.light-blue-backdrop {\r\n      background-color: #5cb3fd;\r\n    }\r\n.xlModal > .modal-dialog {\r\n      max-width: 400px !important;\r\n      min-width: 300px !important;   \r\n      width: 40% !important;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9tb2RhbC1jZWxlYnJpdGllcy9tb2RhbC1jZWxlYnJpdGllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0VBQXNFO0lBQ3RFLCtEQUErRDs7SUFFL0QsNEJBQTRCO0NBQy9COzs7eUVBR3dFO0lBQ3JFLHNCQUFzQjs7SUFFdEIsaURBQWlEO0lBQ2pELCtCQUErQjs7SUFFL0Isc0VBQXNFO0lBQ3RFLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQixxQkFBcUI7QUFDekI7QUFJQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztFQUNkLG9CQUFvQjtBQUN0QjtBQUVBO0VBRUUsbUNBQW1DO0VBR25DLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUVBO0VBRUUsZUFBZTtBQUNqQjtBQUVBO0VBRUUsc0JBQXNCO0FBQ3hCO0FBRUE7RUFFRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCO0FBRUE7O0VBR0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFFRSxhQUFhO0VBRWIsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsY0FBYztFQUNkLDBCQUEwQjtFQUMxQixXQUFXO0FBQ2I7QUFFQTtFQUVFLHNCQUFzQjtFQUV0Qix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0Usa0JBQWtCO0VBRWxCLGFBQWE7RUFFYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLG9DQUFvQztFQUNwQyxxQkFBcUI7RUFDckIsVUFBVTtBQUNaO0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFFRSxhQUFhO0VBRWIsdUJBQXVCO0VBRXZCLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLDBDQUEwQztFQUMxQywyQ0FBMkM7QUFDN0M7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGtCQUFrQjtFQUVsQixjQUFjO0VBQ2QsYUFBYTtBQUNmO0FBRUE7RUFFRSxhQUFhO0VBRWIsZUFBZTtFQUVmLG1CQUFtQjtFQUVuQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3Qiw4Q0FBOEM7RUFDOUMsNkNBQTZDO0FBQy9DO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFFQTtFQUNFOztJQUVFLGdCQUFnQjtFQUNsQjtBQUNGO0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGO0FBSUE7TUFDTSx5QkFBeUI7TUFDekIsWUFBWTtJQUNkO0FBQ0o7TUFDTSxZQUFZO0lBQ2Q7QUFDSDtNQUNLLHlCQUF5QjtJQUMzQjtBQUNBO01BQ0UsMkJBQTJCO01BQzNCLDJCQUEyQjtNQUMzQixxQkFBcUI7RUFDekIiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlL21vZGFsLWNlbGVicml0aWVzL21vZGFsLWNlbGVicml0aWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYXZhdGFyIHtcclxuICAgIC8qIFRoaXMgaW1hZ2UgaXMgNjg3IHdpZGUgYnkgMTAyNCB0YWxsLCBzaW1pbGFyIHRvIHlvdXIgYXNwZWN0IHJhdGlvICovXHJcbiAgICAvKmJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2kuc3RhY2suaW1ndXIuY29tL0RqN2VQLmpwZycpOyovXHJcbiAgICBcclxuICAgIC8qIG1ha2UgYSBzcXVhcmUgY29udGFpbmVyICovXHJcbiAvKiAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcblxyXG4gICAgLyogZmlsbCB0aGUgY29udGFpbmVyLCBwcmVzZXJ2aW5nIGFzcGVjdCByYXRpbywgYW5kIGNyb3BwaW5nIHRvIGZpdCAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbiAgICAvKiBjZW50ZXIgdGhlIGltYWdlIHZlcnRpY2FsbHkgYW5kIGhvcml6b250YWxseSAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuXHJcbiAgICAvKiByb3VuZCB0aGUgZWRnZXMgdG8gYSBjaXJjbGUgd2l0aCBib3JkZXIgcmFkaXVzIDEvMiBjb250YWluZXIgc2l6ZSAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi54bE1vZGFsID4gLm1vZGFsLWRpYWxvZyB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7ICAgXHJcbiAgICB3aWR0aDogNDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLm1vZGFsLW9wZW4ge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5tb2RhbC1vcGVuIC5tb2RhbCB7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDEwNTA7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG4ubW9kYWwtZGlhbG9nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWFyZ2luOiAwLjVyZW07XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5tb2RhbC5mYWRlIC5tb2RhbC1kaWFsb2cge1xyXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQ7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTBweCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwcHgpO1xyXG59XHJcblxyXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xyXG4gIC5tb2RhbC5mYWRlIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgdHJhbnNpdGlvbjogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5tb2RhbC5zaG93IC5tb2RhbC1kaWFsb2cge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gIHRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuLm1vZGFsLm1vZGFsLXN0YXRpYyAubW9kYWwtZGlhbG9nIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wMik7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxufVxyXG5cclxuLm1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlIHtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDFyZW0pO1xyXG59XHJcblxyXG4ubW9kYWwtZGlhbG9nLXNjcm9sbGFibGUgLm1vZGFsLWNvbnRlbnQge1xyXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxcmVtKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubW9kYWwtZGlhbG9nLXNjcm9sbGFibGUgLm1vZGFsLWhlYWRlcixcclxuLm1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlIC5tb2RhbC1mb290ZXIge1xyXG4gIC1tcy1mbGV4LW5lZ2F0aXZlOiAwO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4ubW9kYWwtZGlhbG9nLXNjcm9sbGFibGUgLm1vZGFsLWJvZHkge1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5tb2RhbC1kaWFsb2ctY2VudGVyZWQge1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDFyZW0pO1xyXG59XHJcblxyXG4ubW9kYWwtZGlhbG9nLWNlbnRlcmVkOjpiZWZvcmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDFyZW0pO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuXHJcbi5tb2RhbC1kaWFsb2ctY2VudGVyZWQubW9kYWwtZGlhbG9nLXNjcm9sbGFibGUge1xyXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1vZGFsLWRpYWxvZy1jZW50ZXJlZC5tb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZSAubW9kYWwtY29udGVudCB7XHJcbiAgbWF4LWhlaWdodDogbm9uZTtcclxufVxyXG5cclxuLm1vZGFsLWRpYWxvZy1jZW50ZXJlZC5tb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBub25lO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG4ubW9kYWwtYmFja2Ryb3Age1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDQwO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5tb2RhbC1iYWNrZHJvcC5mYWRlIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ubW9kYWwtYmFja2Ryb3Auc2hvdyB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC1tcy1mbGV4LWFsaWduOiBzdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAxcmVtIDFyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogY2FsYygwLjNyZW0gLSAxcHgpO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBjYWxjKDAuM3JlbSAtIDFweCk7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcclxuICBwYWRkaW5nOiAxcmVtIDFyZW07XHJcbiAgbWFyZ2luOiAtMXJlbSAtMXJlbSAtMXJlbSBhdXRvO1xyXG59XHJcblxyXG4ubW9kYWwtdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAtbXMtZmxleDogMSAxIGF1dG87XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLm1vZGFsLWZvb3RlciB7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtcGFjazogZW5kO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgcGFkZGluZzogMC43NXJlbTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogY2FsYygwLjNyZW0gLSAxcHgpO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IGNhbGMoMC4zcmVtIC0gMXB4KTtcclxufVxyXG5cclxuLm1vZGFsLWZvb3RlciA+ICoge1xyXG4gIG1hcmdpbjogMC4yNXJlbTtcclxufVxyXG5cclxuLm1vZGFsLXNjcm9sbGJhci1tZWFzdXJlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtOTk5OXB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAubW9kYWwtZGlhbG9nIHtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBtYXJnaW46IDEuNzVyZW0gYXV0bztcclxuICB9XHJcbiAgLm1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlIHtcclxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDMuNXJlbSk7XHJcbiAgfVxyXG4gIC5tb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZSAubW9kYWwtY29udGVudCB7XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMy41cmVtKTtcclxuICB9XHJcbiAgLm1vZGFsLWRpYWxvZy1jZW50ZXJlZCB7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjVyZW0pO1xyXG4gIH1cclxuICAubW9kYWwtZGlhbG9nLWNlbnRlcmVkOjpiZWZvcmUge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMy41cmVtKTtcclxuICB9XHJcbiAgLm1vZGFsLXNtIHtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAubW9kYWwtbGcsXHJcbiAgLm1vZGFsLXhsIHtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLm1vZGFsLXhsIHtcclxuICAgIG1heC13aWR0aDogMTE0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4uZGFyay1tb2RhbCAubW9kYWwtY29udGVudCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTJiMmM7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuLmRhcmstbW9kYWwgLmNsb3NlIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gLmxpZ2h0LWJsdWUtYmFja2Ryb3Age1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiM2ZkO1xyXG4gICAgfVxyXG4gICAgLnhsTW9kYWwgPiAubW9kYWwtZGlhbG9nIHtcclxuICAgICAgbWF4LXdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xyXG4gICAgICBtaW4td2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7ICAgXHJcbiAgICAgIHdpZHRoOiA0MCUgIWltcG9ydGFudDtcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/feature/modal-celebrities/modal-celebrities.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/feature/modal-celebrities/modal-celebrities.component.ts ***!
  \**************************************************************************/
/*! exports provided: ModalCelebritiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCelebritiesComponent", function() { return ModalCelebritiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let ModalCelebritiesComponent = class ModalCelebritiesComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.passEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        console.log('just instantiated modalMovieComponent! our movie:' + JSON.stringify(this.celebrityObject, null, 4));
    }
    passback(msg) {
        console.log('passing back: ' + msg);
        this.passEntry.emit(msg);
    }
};
ModalCelebritiesComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModalCelebritiesComponent.prototype, "celebrityObject", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ModalCelebritiesComponent.prototype, "passEntry", void 0);
ModalCelebritiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-celebrities',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-celebrities.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/modal-celebrities/modal-celebrities.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal-celebrities.component.css */ "./src/app/feature/modal-celebrities/modal-celebrities.component.css")).default]
    })
], ModalCelebritiesComponent);



/***/ }),

/***/ "./src/app/feature/modal-movie/modal-movie.component.css":
/*!***************************************************************!*\
  !*** ./src/app/feature/modal-movie/modal-movie.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mx-auto {\r\n  margin-left: 50% !important;\r\n  margin-right: 50% !important;\r\n  width: auto;\r\n}\r\n.img-fluid {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n.img-thumbnail {\r\n  padding: 0.25rem;\r\n  background-color: #fff;\r\n  border: 1px solid #dee2e6;\r\n  border-radius: 0.25rem;\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9tb2RhbC1tb3ZpZS9tb2RhbC1tb3ZpZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZS9tb2RhbC1tb3ZpZS9tb2RhbC1tb3ZpZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm14LWF1dG8ge1xyXG4gIG1hcmdpbi1sZWZ0OiA1MCUgIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IDUwJSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcbi5pbWctZmx1aWQge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5pbWctdGh1bWJuYWlsIHtcclxuICBwYWRkaW5nOiAwLjI1cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/feature/modal-movie/modal-movie.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/feature/modal-movie/modal-movie.component.ts ***!
  \**************************************************************/
/*! exports provided: ModalMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalMovieComponent", function() { return ModalMovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let ModalMovieComponent = class ModalMovieComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.passEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        //    console.log('just instantiated modalMovieComponent! our movie:'+JSON.stringify(this.movieObject, null, 4));
    }
    passback(msg) {
        console.log('passing back: ' + msg);
        this.passEntry.emit(msg);
    }
};
ModalMovieComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModalMovieComponent.prototype, "movieObject", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ModalMovieComponent.prototype, "passEntry", void 0);
ModalMovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-movie',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-movie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/modal-movie/modal-movie.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal-movie.component.css */ "./src/app/feature/modal-movie/modal-movie.component.css")).default]
    })
], ModalMovieComponent);



/***/ }),

/***/ "./src/app/feature/movieprofile/movieprofile.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/feature/movieprofile/movieprofile.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card\r\n{\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    max-width: 800px;\r\n    margin: auto;\r\n    text-align: center;\r\n    background-image: url('usercard.png');\r\n}\r\n.h3 {\r\n  font-size: 1.17em;\r\n  margin-top: 1em;\r\n  margin-bottom: 1em;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  font-weight: bold;\r\n}\r\n.title \r\n{\r\n    color: grey;\r\n}\r\n.grid-border-lightblue {\r\n  border-top: 5px solid #2badcc;\r\n  border-right: 5px solid #2badcc;\r\n  border-left: 5px solid #2badcc;\r\n  border-bottom: 5px solid #2badcc;\r\n}\r\n.grid-border-red {\r\n  border-top: 1px solid red;\r\n  border-right: 1px solid red;\r\n  border-left: 1px solid red;\r\n  border-bottom: 1px solid red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9tb3ZpZXByb2ZpbGUvbW92aWVwcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMENBQTBDO0lBQzFDLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFDQUF5RDtBQUM3RDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTs7SUFFSSxXQUFXO0FBQ2Y7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QiwrQkFBK0I7RUFDL0IsOEJBQThCO0VBQzlCLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIsNEJBQTRCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZS9tb3ZpZXByb2ZpbGUvbW92aWVwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZFxyXG57XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy91c2VyY2FyZC5wbmdcIik7XHJcbn1cclxuLmgzIHtcclxuICBmb250LXNpemU6IDEuMTdlbTtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4udGl0bGUgXHJcbntcclxuICAgIGNvbG9yOiBncmV5O1xyXG59XHJcblxyXG4uZ3JpZC1ib3JkZXItbGlnaHRibHVlIHtcclxuICBib3JkZXItdG9wOiA1cHggc29saWQgIzJiYWRjYztcclxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjMmJhZGNjO1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzJiYWRjYztcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzJiYWRjYztcclxufVxyXG4uZ3JpZC1ib3JkZXItcmVkIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmVkO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJlZDtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJlZDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/feature/movieprofile/movieprofile.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/feature/movieprofile/movieprofile.component.ts ***!
  \****************************************************************/
/*! exports provided: MovieprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieprofileComponent", function() { return MovieprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var highcharts_modules_wordcloud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highcharts/modules/wordcloud */ "./node_modules/highcharts/modules/wordcloud.js");
/* harmony import */ var highcharts_modules_wordcloud__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_wordcloud__WEBPACK_IMPORTED_MODULE_5__);






highcharts_modules_wordcloud__WEBPACK_IMPORTED_MODULE_5___default()(highcharts__WEBPACK_IMPORTED_MODULE_4__);
let MovieprofileComponent = class MovieprofileComponent {
    //---------------------
    constructor(movieService, route) {
        this.movieService = movieService;
        this.route = route;
        this.celebs = [];
        this.writers = '';
        this.genre = '';
        this.celebsPresent = false;
        this.chartConstructor = 'chart';
        this.iscircular = true;
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_4__;
        this.chartOptions = {
            series: [{
                    type: 'wordcloud',
                    name: 'Occurrences',
                    minFontSize: 7
                }],
            title: {
                text: 'Plot Wordcloud'
            },
            rotation: {
                from: 0,
                to: 0
            },
            style: {
                fontFamily: 'Arial',
            }
        };
        this.route.queryParams.subscribe(params => { this.MovieId = params['id']; });
    }
    ngOnInit() {
        //this.curMovie = this.movieService.getClickedMovie();
        this.movieService.getMovieProfile(this.MovieId).subscribe(resp => {
            console.log('our response:' + JSON.stringify(resp, null, 4));
            let dataResp = resp['body'];
            this.curMovie = dataResp[0];
            if (dataResp[0].writers) {
                dataResp[0].writers.forEach(writer => {
                    if (writer.name.length > 0) {
                        console.log('adding this writer in:' + writer.name);
                        this.writers += writer.name + ', ';
                    }
                });
                //this.curMovie.writers = this.curMovie.writers.join(',');
            }
            let plotText = dataResp[0].plot;
            //console.log('our writers:'+this.writers);
            for (let i = 1; i < dataResp.length; i++) {
                this.celebs.push(dataResp[i]);
                this.celebsPresent = true;
                console.log('pushing this celeb' + dataResp[i].name);
            }
            if (Array.isArray(plotText)) {
                plotText = plotText.join(',');
                //console.log('our plot was an array');
            }
            plotText = plotText.replace('\", \"', '\n');
            plotText = plotText.replace('\\', '');
            plotText = plotText.toString().substr(2, plotText.length - 4);
            //plotText = plotText.toString().substr(-2);
            let genreList = [];
            this.curMovie.genres.forEach(genreString => {
                //console.log('genre:'+JSON.stringify(genreString, null, 4));
                genreList.push(genreString['genre']);
            });
            //console.log('our genres:'+JSON.stringify(genreList, null, 4));
            this.genre = genreList.join(' | ');
            this.curMovie.plot = plotText;
            var text = plotText;
            var removeUselessWords = function (txt) {
                var uselessWordsArray = [
                    "a", "at", "be", "can", "cant", "could", "couldnt",
                    "do", "does", "how", "i", "in", "is", "many", "much", "of",
                    "on", "or", "should", "shouldnt", "so", "such", "the",
                    "them", "they", "to", "us", "we", "what", "who", "why",
                    "with", "wont", "would", "wouldnt", "you", "he", "and", "as",
                    "was", "his", "for", "an", "by", "yes", "no", "has", "from",
                    "this", "that", "her", "she", "also", "had", "him", "it", "but",
                    "until"
                ];
                var expStr = uselessWordsArray.join("|");
                return txt.replace(new RegExp('\\b(' + expStr + ')\\b', 'gi'), ' ')
                    .replace(/\s{2,}/g, ' ');
            };
            text = removeUselessWords(text);
            if (Array.isArray(text)) {
                text = text.join(',');
            }
            //console.log('text:'+text);
            var lines = text.split(/[,\. ]+/g), data = highcharts__WEBPACK_IMPORTED_MODULE_4__["reduce"](lines, function (arr, word) {
                var obj = highcharts__WEBPACK_IMPORTED_MODULE_4__["find"](arr, function (obj) {
                    return obj.name === word;
                });
                if (obj) {
                    obj['weight'] = obj['weight'] + 1;
                }
                else {
                    obj = {
                        name: word,
                        weight: 1
                    };
                    arr.push(obj);
                }
                return arr;
            }, []);
            //console.log(data);
            var filtered = data.filter(function (value, index, arr) {
                return value.weight > 1;
            });
            this.chartOptions.series[0]['data'] = filtered;
        });
    }
};
MovieprofileComponent.ctorParameters = () => [
    { type: src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
MovieprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-movieprofile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movieprofile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/movieprofile/movieprofile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movieprofile.component.css */ "./src/app/feature/movieprofile/movieprofile.component.css")).default]
    })
], MovieprofileComponent);



/***/ }),

/***/ "./src/app/feature/movies/movies.component.css":
/*!*****************************************************!*\
  !*** ./src/app/feature/movies/movies.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#avatar {\r\n    /* This image is 687 wide by 1024 tall, similar to your aspect ratio */\r\n    /*background-image: url('http://i.stack.imgur.com/Dj7eP.jpg');*/\r\n    \r\n    /* make a square container */\r\n /*   width: 100px;\r\n    height: 100px;\r\n\r\n    /* fill the container, preserving aspect ratio, and cropping to fit */\r\n    background-size: cover;\r\n\r\n    /* center the image vertically and horizontally */\r\n    background-position: top center;\r\n\r\n    /* round the edges to a circle with border radius 1/2 container size */\r\n    border-radius: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzRUFBc0U7SUFDdEUsK0RBQStEOztJQUUvRCw0QkFBNEI7Q0FDL0I7Ozt5RUFHd0U7SUFDckUsc0JBQXNCOztJQUV0QixpREFBaUQ7SUFDakQsK0JBQStCOztJQUUvQixzRUFBc0U7SUFDdEUsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZS9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYXZhdGFyIHtcclxuICAgIC8qIFRoaXMgaW1hZ2UgaXMgNjg3IHdpZGUgYnkgMTAyNCB0YWxsLCBzaW1pbGFyIHRvIHlvdXIgYXNwZWN0IHJhdGlvICovXHJcbiAgICAvKmJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2kuc3RhY2suaW1ndXIuY29tL0RqN2VQLmpwZycpOyovXHJcbiAgICBcclxuICAgIC8qIG1ha2UgYSBzcXVhcmUgY29udGFpbmVyICovXHJcbiAvKiAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcblxyXG4gICAgLyogZmlsbCB0aGUgY29udGFpbmVyLCBwcmVzZXJ2aW5nIGFzcGVjdCByYXRpbywgYW5kIGNyb3BwaW5nIHRvIGZpdCAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbiAgICAvKiBjZW50ZXIgdGhlIGltYWdlIHZlcnRpY2FsbHkgYW5kIGhvcml6b250YWxseSAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuXHJcbiAgICAvKiByb3VuZCB0aGUgZWRnZXMgdG8gYSBjaXJjbGUgd2l0aCBib3JkZXIgcmFkaXVzIDEvMiBjb250YWluZXIgc2l6ZSAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/feature/movies/movies.component.ts":
/*!****************************************************!*\
  !*** ./src/app/feature/movies/movies.component.ts ***!
  \****************************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var _services_tab_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tab.service */ "./src/app/services/tab.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _modal_movie_modal_movie_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal-movie/modal-movie.component */ "./src/app/feature/modal-movie/modal-movie.component.ts");








let MoviesComponent = class MoviesComponent {
    constructor(movieService, modalService, tabService, router, userService) {
        this.movieService = movieService;
        this.modalService = modalService;
        this.tabService = tabService;
        this.router = router;
        this.userService = userService;
        this.localMovieList = [];
        this.subStatus = 'rest';
        this.searchSubStatus = 'rest';
        this.loadStatus = 'load';
        this.searchStatus = 'search';
        this.searchNum = 0;
        this.searchMade = false;
        this.httpError = false;
        this.isSuccessUpdate = false;
        this.isWarningUpdate = false;
        this.isErrorUpdate = false;
        this.isWaitingResponse = true;
        this.isWaitingConfirmation = false;
        this.subscription = tabService.movieTab$.subscribe(movieTab => {
            this.subStatus = movieTab;
        });
        this.subscription = tabService.movieSearch$.subscribe(movieSearch => {
            this.searchSubStatus = movieSearch;
        });
    }
    ngOnInit() {
        this.getmoviesList();
    }
    openFullMovieView(obj) {
        this.movieService.setClickedMovie(obj);
        console.log('here we are navigating to our movie profile with movie:' + obj.title);
        this.router.navigate(['movieprofile/']);
    }
    testMovieService() {
        let mov = this.movieService.getClickedMovie();
        console.log('getting movie back from service' + JSON.stringify(mov, null, 4));
    }
    openModal(movieItem) {
        const modalRef = this.modalService.open(_modal_movie_modal_movie_component__WEBPACK_IMPORTED_MODULE_7__["ModalMovieComponent"]);
        modalRef.componentInstance.movieObject = movieItem;
        //this.movieService.setClickedMovie(movieItem);
        modalRef.componentInstance.passEntry.subscribe(entry => {
            console.log(entry);
            if (entry == 'close') {
                modalRef.close();
            }
            else {
                this.openFullMovieView(movieItem);
            }
        });
    }
    loadMoreData() {
        let lim = this.MoviesList.length;
        console.log("HERE WE ARE IN LOAD MORE DATA, SIZE OF LOCAL: " + this.localMovieList.length + " MOVIESLIST: " + this.MoviesList.length);
        if (lim == this.localMovieList.length) {
            if (this.searchMade) {
                return;
            }
            console.log("TELLING SERVICE WE NEED ANOTHER PAGE");
            this.movieService.nextPage();
            return;
        }
        let localLim = this.localMovieList.length;
        //console.log("lim: " + lim + " our full MoviesList: " + JSON.stringify(this.MoviesList, null, 4));
        for (let i = localLim; i < localLim + 3; i++) {
            if (i == lim) {
                break;
            }
            //console.log("PUSHING: " + JSON.stringify(this.MoviesList[i], null, 2));
            if (this.MoviesList[i]) {
                this.localMovieList.push(this.MoviesList[i]);
            }
        }
    }
    ngDoCheck() {
        //console.log("INSIDE DOCHECK, tabStatus: " + this.subStatus);
        if (this.subStatus != 'rest') {
            if (this.subStatus == this.loadStatus) {
                //load more data
                this.loadMoreData();
                console.log("Just loaded more data!");
                //then once data load is finished
                this.tabService.announceLoadFinishedMovie();
                console.log("Just let service know we are done loading data");
            }
            if (this.subStatus == this.searchStatus) {
                console.log("Okay we are searching for " + this.searchSubStatus);
                this.searchMade = true;
                this.subStatus = 'rest';
                this.MoviesList = [];
                this.localMovieList = [];
                this.userService.searchMovie(this.searchSubStatus, this.searchNum).subscribe(resp => {
                    console.log(JSON.stringify(resp['body'], null, 4));
                    this.searchNum += 1;
                    let data = resp['body'];
                    for (let i = 0; i < data['rows'].length; i++) {
                        console.log(JSON.stringify(data['rows'][i], null, 4));
                        let objData = data['rows'][i];
                        let plotText = objData.plot;
                        //--
                        /*
                           let miniBioText = objData.mini_biography.substr(2, 164) + '..';
                           console.log(miniBioText);
                           console.log(Array.isArray(miniBioText));

                           if (Array.isArray(miniBioText)){

                           miniBioText = miniBioText.join(',');
                           }

                           const obj = {
id: i,
name: objData.celebritiesname,
nickname : objData.nickname,
birthdate : objData.birthdate,
birthplace: objData.birth_place,
minibio: miniBioText,
height : objData.height,
headshot : objData.headshot,
moviesList : 'none',
        if (plotText == null){
          plotText = ''
        } else {

        if (Array.isArray(plotText)){

          plotText = plotText.join(',');
          //console.log('our plot was an array');
        }
          plotText = plotText.replace('\", \"', '\n');
          plotText = plotText.toString().substr(0, 164) + '..';

        }
        

        if (data.genres == null){
          data.genres = '';
        } else { data.genres = data.genres.join( ' | '); }

        const obj = {
          id: data.id,
          year: data.year,
          title: data.title,
          budget: data.budget,
          cover_url: data.cover_url,
          actors: data.actors,
          genres: data.genres,
          directors: data.director,
          distributors: data.distributors,
          plot: plotText
        }


}*/
                        if (plotText == null) {
                            plotText = '';
                        }
                        else {
                            if (Array.isArray(plotText)) {
                                plotText = plotText.join(',');
                                //console.log('our plot was an array');
                            }
                            plotText = plotText.replace('\", \"', '\n');
                            //            plotText = plotText.toString().substr(0, 164) + '..'; 
                        }
                        if (objData.genres == null) {
                            objData.genres = '';
                        }
                        else {
                            objData.genres = objData.genres.join(' | ');
                        }
                        const obj = {
                            id: objData.id,
                            year: objData.year,
                            title: objData.title,
                            budget: objData.budget,
                            cover_url: objData.cover_url,
                            actors: objData.actors,
                            genres: objData.genres,
                            directors: objData.director,
                            distributors: objData.distributors,
                            plot: plotText
                        };
                        console.log("FIRST OBJECT: " + JSON.stringify(objData, null, 2));
                        console.log("SECOND OBJECT: " + JSON.stringify(obj, null, 2));
                        this.MoviesList.push(obj);
                    }
                }, (err) => {
                    console.log(err);
                    this.isWaitingResponse = false;
                    this.httpError = true;
                    this.isSuccessUpdate = false;
                    this.isWarningUpdate = false;
                    this.isErrorUpdate = true;
                }, () => {
                    this.httpError = false;
                    this.isWaitingResponse = false;
                    console.log("IN HTTPRESPONSE");
                    this.tabService.announceSearchFinishedMovie();
                    this.displayResults();
                });
            }
        }
    }
    displayResults() {
        console.log("HERE WE ARE DISPLAYING RESULTS");
        let lim = this.localMovieList.length;
        console.log("VBNM LIM:" + lim);
        if (this.MoviesList.length == 0) {
            this.MoviesList = [];
            return;
        }
        if (lim == this.MoviesList.length) {
            console.log("RETURNING BECAUSE REACHED LIMIT");
            return;
        }
        for (let i = lim; i < lim + 6; i++) {
            if (this.MoviesList[i]) {
                this.localMovieList.push(this.MoviesList[i]);
            }
        }
    }
    getmoviesList() {
        this.movieService.getmoviesList().subscribe(movie => {
            this.MoviesList = movie;
            localStorage.setItem('movies', JSON.stringify(movie));
            //console.log(movie);
            for (let m of movie) {
                if (this.localMovieList.length == 15) {
                    break;
                }
                this.localMovieList.push(m);
            }
        });
    }
    clickProfile(item) {
        this.router.navigate(['/movieprofile'], { queryParams: { id: item.id } });
    }
    handleScrollDown(event) {
        console.log('HANDLING SCROLLDOWN EVENT');
        if (event['isReachingBottom'] == true) {
            let lim = this.localMovieList.length;
            if (lim == this.MoviesList.length) {
                return;
            }
            for (let i = lim; i < lim + 15; i++) {
                this.localMovieList.push(this.MoviesList[i]);
            }
        }
    }
};
MoviesComponent.ctorParameters = () => [
    { type: src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
    { type: _services_tab_service__WEBPACK_IMPORTED_MODULE_4__["TabService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
MoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-movies',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movies.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/movies/movies.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movies.component.css */ "./src/app/feature/movies/movies.component.css")).default]
    })
], MoviesComponent);



/***/ }),

/***/ "./src/app/feature/newuser/newuser.component.css":
/*!*******************************************************!*\
  !*** ./src/app/feature/newuser/newuser.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".usa-hero{\r\n    font-family:Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r\n    font-size:1.06rem;\r\n    line-height:1.5;\r\n    padding-bottom:2rem;\r\n    padding-top:2rem;\r\n    background-image:url('BitmapGoodDarkest.png');\r\n    background-position:center;\r\n    background-size:cover;\r\n    color:white;\r\n  }\r\n  \r\n.usa-hero-callout {\r\n\r\n    background-color:#4a4444;\r\n    opacity:0.75;\r\n    -webkit-backdrop-filter:blur(1.5rem);\r\n            backdrop-filter:blur(1.5rem);\r\n    padding: 2rem;\r\n    max-width:30rem;\r\n  }\r\n  \r\n.usa-button {\r\n  \r\n    background-color:black;\r\n  }\r\n  \r\n.usa-input-error-message {\r\n\r\n    color:red;\r\n    background-color: rgb(216, 209, 209);\r\n  }\r\n  \r\n.usa-show-password {\r\n    color: #ffffff;\r\n  }\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9uZXd1c2VyL25ld3VzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFGQUFxRjtJQUNyRixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsNkNBQWlFO0lBQ2pFLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsV0FBVztFQUNiOztBQUVGOztJQUVJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsZUFBZTtFQUNqQjs7QUFFQTs7SUFFRSxzQkFBc0I7RUFDeEI7O0FBRUE7O0lBRUUsU0FBUztJQUNULG9DQUFvQztFQUN0Qzs7QUFFQTtJQUNFLGNBQWM7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlL25ld3VzZXIvbmV3dXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzYS1oZXJve1xyXG4gICAgZm9udC1mYW1pbHk6U291cmNlIFNhbnMgUHJvIFdlYiwgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZToxLjA2cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6MS41O1xyXG4gICAgcGFkZGluZy1ib3R0b206MnJlbTtcclxuICAgIHBhZGRpbmctdG9wOjJyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvQml0bWFwR29vZERhcmtlc3QucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICB9XHJcbiAgXHJcbi51c2EtaGVyby1jYWxsb3V0IHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0YTQ0NDQ7XHJcbiAgICBvcGFjaXR5OjAuNzU7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6Ymx1cigxLjVyZW0pO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIG1heC13aWR0aDozMHJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnVzYS1idXR0b24ge1xyXG4gIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLnVzYS1pbnB1dC1lcnJvci1tZXNzYWdlIHtcclxuXHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAyMDksIDIwOSk7XHJcbiAgfVxyXG4gIFxyXG4gIC51c2Etc2hvdy1wYXNzd29yZCB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgXHJcbiAgIl19 */");

/***/ }),

/***/ "./src/app/feature/newuser/newuser.component.ts":
/*!******************************************************!*\
  !*** ./src/app/feature/newuser/newuser.component.ts ***!
  \******************************************************/
/*! exports provided: NewuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewuserComponent", function() { return NewuserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/helpers/must-match.validator */ "./src/app/helpers/must-match.validator.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");






let NewuserComponent = class NewuserComponent {
    constructor(formBuilder, authService, router, route) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.submitted = false;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            emailid: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        }, {
            validator: Object(src_app_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_4__["MustMatch"])('password', 'confirmPassword')
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    onSubmit() {
        // console.log(this.firstName + this.password);
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.valid) {
            this.authService.signUp(this.firstName, this.lastName, this.emailid, this.userName, this.password)
                .subscribe(data => {
                //       data;
                //console.log ("testdata values" + JSON.stringify(data));
                this.router.navigate(['/regconfirm'], { queryParams: { userName: this.userName } });
            }, error => {
                this.newuserValidation = JSON.stringify(error.message);
            }, () => {
                console.log('all');
            });
            return;
        }
    }
    onReset() {
        this.submitted = false;
        this.registerForm.reset();
        this.router.navigate(['']);
    }
};
NewuserComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
NewuserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-newuser',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./newuser.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/newuser/newuser.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./newuser.component.css */ "./src/app/feature/newuser/newuser.component.css")).default]
    })
], NewuserComponent);



/***/ }),

/***/ "./src/app/feature/regconfirm/regconfirm.component.css":
/*!*************************************************************!*\
  !*** ./src/app/feature/regconfirm/regconfirm.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".usa-hero{\r\n    font-family:Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r\n    font-size:1.06rem;\r\n    line-height:1.5;\r\n    padding-bottom:2rem;\r\n    padding-top:2rem;\r\n    background-image:url('BitmapGoodDarkest.png');\r\n    background-position:center;\r\n    background-size:cover;\r\n    color:white;\r\n  }\r\n  \r\n.usa-hero-callout {\r\n\r\n    background-color:#4a4444;\r\n    opacity:0.75;\r\n    -webkit-backdrop-filter:blur(1.5rem);\r\n            backdrop-filter:blur(1.5rem);\r\n    padding: 2rem;\r\n    max-width:30rem;\r\n  }\r\n  \r\n.usa-button {\r\n  \r\n    background-color:black;\r\n  }\r\n  \r\n.usa-input-error-message {\r\n\r\n    color:red;\r\n    background-color: rgb(216, 209, 209);\r\n  }\r\n  \r\n.usa-show-password {\r\n    color: #ffffff;\r\n  }\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9yZWdjb25maXJtL3JlZ2NvbmZpcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFGQUFxRjtJQUNyRixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsNkNBQWlFO0lBQ2pFLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsV0FBVztFQUNiOztBQUVGOztJQUVJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsZUFBZTtFQUNqQjs7QUFFQTs7SUFFRSxzQkFBc0I7RUFDeEI7O0FBRUE7O0lBRUUsU0FBUztJQUNULG9DQUFvQztFQUN0Qzs7QUFFQTtJQUNFLGNBQWM7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlL3JlZ2NvbmZpcm0vcmVnY29uZmlybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzYS1oZXJve1xyXG4gICAgZm9udC1mYW1pbHk6U291cmNlIFNhbnMgUHJvIFdlYiwgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZToxLjA2cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6MS41O1xyXG4gICAgcGFkZGluZy1ib3R0b206MnJlbTtcclxuICAgIHBhZGRpbmctdG9wOjJyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvQml0bWFwR29vZERhcmtlc3QucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICB9XHJcbiAgXHJcbi51c2EtaGVyby1jYWxsb3V0IHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0YTQ0NDQ7XHJcbiAgICBvcGFjaXR5OjAuNzU7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6Ymx1cigxLjVyZW0pO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIG1heC13aWR0aDozMHJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnVzYS1idXR0b24ge1xyXG4gIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLnVzYS1pbnB1dC1lcnJvci1tZXNzYWdlIHtcclxuXHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAyMDksIDIwOSk7XHJcbiAgfVxyXG4gIFxyXG4gIC51c2Etc2hvdy1wYXNzd29yZCB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgXHJcbiAgIl19 */");

/***/ }),

/***/ "./src/app/feature/regconfirm/regconfirm.component.ts":
/*!************************************************************!*\
  !*** ./src/app/feature/regconfirm/regconfirm.component.ts ***!
  \************************************************************/
/*! exports provided: RegconfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegconfirmComponent", function() { return RegconfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");





let RegconfirmComponent = 
//export class RegconfirmComponent implements OnInit {
class RegconfirmComponent {
    constructor(formBuilder, authService, router, route) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.submitted = false;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.userName = params.userName; // popular4
        });
        this.regconfirmForm = this.formBuilder.group({
            confirmationCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    get f() { return this.regconfirmForm.controls; }
    onSubmit() {
        // console.log(this.firstName + this.password);
        this.submitted = true;
        if (this.regconfirmForm.valid) {
            console.log(this.confirmationCode);
            this.authService.signUpConfirm(this.userName, this.confirmationCode)
                .subscribe(data => {
                this.router.navigate(['/login'], { queryParams: { usernamelogin: this.userName } });
            }, error => {
                this.newuserConfirmationValidation = "Invalid verification code";
            });
            return;
        }
    }
};
RegconfirmComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
RegconfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-regconfirm',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./regconfirm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/regconfirm/regconfirm.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./regconfirm.component.css */ "./src/app/feature/regconfirm/regconfirm.component.css")).default]
    })
    //export class RegconfirmComponent implements OnInit {
], RegconfirmComponent);



/***/ }),

/***/ "./src/app/feature/visualize/visualize.component.css":
/*!***********************************************************!*\
  !*** ./src/app/feature/visualize/visualize.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvdmlzdWFsaXplL3Zpc3VhbGl6ZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/feature/visualize/visualize.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/feature/visualize/visualize.component.ts ***!
  \**********************************************************/
/*! exports provided: VisualizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizeComponent", function() { return VisualizeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_celebrity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/celebrity.service */ "./src/app/services/celebrity.service.ts");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var highcharts_modules_networkgraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highcharts/modules/networkgraph */ "./node_modules/highcharts/modules/networkgraph.js");
/* harmony import */ var highcharts_modules_networkgraph__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_networkgraph__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_6__);







highcharts_modules_networkgraph__WEBPACK_IMPORTED_MODULE_5___default()(highcharts__WEBPACK_IMPORTED_MODULE_4__);
highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_6___default()(highcharts__WEBPACK_IMPORTED_MODULE_4__);
let VisualizeComponent = class VisualizeComponent {
    constructor(celebService, movieService) {
        this.celebService = celebService;
        this.movieService = movieService;
        this.chartLoaded = false;
        this.celebData = false;
        this.movieData = false;
        this.celebStatus = false;
        this.movieStatus = false;
        this.graphLoaded = false;
        this.title = "app";
        this.updateFromInput = false;
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_4__;
        this.chartConstructor = "chart";
        this.chartOptions = {
            chart: {
                type: "networkgraph",
                height: "100%",
                plotBorderWidth: 1
            },
            title: {
                text: "The Celebrity Network Tree"
            },
            subtitle: {
                text: "A Force-Directed Network Graph in Highcharts"
            },
            plotOptions: {
                networkgraph: {
                    keys: ["from", "to", "dashStyle"],
                    layoutAlgorithm: {
                        enableSimulation: true,
                        friction: -0.9,
                        integration: 'euler',
                        linkLength: 15,
                        //initialPositionRadius: 3,
                        maxIterations: 120
                    }
                }
            },
            tooltip: {
                positioner: function () {
                    return {
                        x: this.chart.plotLeft,
                        y: this.chart.plotTop //this.chart.plotTop
                    };
                },
                shared: true,
                "enabled": true,
                "useHTML": true,
                "distance": 50,
                "formatter": function () {
                    let linkFrom_li = '';
                    let linkTo_li = '';
                    let tooltipHTML = '';
                    //this.point.linksTo = this.point.linksTo.filter((el, i, a) => i === a.indexOf(el));
                    for (let i = 0; i < this.point.linksTo.length; i++) {
                        if (linkFrom_li.indexOf(this.point.linksTo[i].from) < 0) {
                            linkFrom_li = linkFrom_li + `<li>${this.point.linksTo[i].from.substring(0, 20)}</li>`;
                        }
                    }
                    //this.point.linksFrom = this.point.linksFrom.filter((el, i, a) => i === a.indexOf(el));
                    for (let i = 0; i < this.point.linksFrom.length; i++) {
                        if (linkTo_li.indexOf(this.point.linksFrom[i].to) < 0) {
                            linkTo_li = linkTo_li + `<li>${this.point.linksFrom[i].to.substring(0, 20)}</li>`;
                        }
                    }
                    tooltipHTML = tooltipHTML + `<b>Links from [${this.point.name}]</b>:<ul>${linkFrom_li}</ul>`;
                    tooltipHTML = tooltipHTML + `<b>Links to [${this.point.name}]</b>:<ul>${linkTo_li}</ul>`;
                    return tooltipHTML;
                }
            },
            series: [
                {
                    dataLabels: {
                        enabled: true,
                        linkFormat: ''
                    },
                    data: [],
                    nodes: [{ id: 'Noah', color: 'orange' }]
                }
            ]
        };
        const self = this;
        this.chartCallback = chart => {
            self.chart = chart;
        };
        this.celebSub = this.celebService._celebsReady$.subscribe(sub => {
            this.celebStatus = sub;
        });
        this.movieSub = this.movieService._moviesReady$.subscribe(subs => {
            this.movieStatus = subs;
        });
    }
    ngOnInit() {
        //console.log('hello from ngOnInit in visualize component, celebs:');
        //console.log(this.celebrityList);
        //console.log('hello from ngOnInit in visualize component, movies:');
        //console.log(this.movieList);
    }
    ngDoCheck() {
        //console.log('in ngdoCheck:'+this.celebStatus+':'+this.movieStatus+':');
        //checking if our data is populated
        if (this.celebStatus) {
            this.celebService.getCelebrityList().subscribe(celebs => {
                console.log('inside getting celeblist');
                this.celebrityList = celebs;
                this.celebData = true;
                this.celebStatus = false;
            });
            //console.log(this.celebrityList);
        }
        //check if data populated
        if (this.movieStatus) {
            this.movieService.getmoviesList().subscribe(movies => {
                this.movieList = movies;
                this.movieData = true;
                this.movieStatus = false;
            });
            //console.log(this.movieList);
        }
        //if data is populated, load graph.
        if (this.celebData && this.movieData) {
            if (!this.graphLoaded) {
                this.graphLoaded = true;
                console.log('@@@@@@@@@@making our graph');
                this.makeGraph();
            }
        }
    }
    makeGraph() {
        //Display only nodes for some celebrities 
        //this.celebrityList = this.celebrityList.slice(0, 10);
        //console.log("movies:"+this.movieList)
        //console.log("celebrities"+this.celebrityList);
        // this.celebrityList.forEach(element => 
        //   { 
        //     element.moviesList = element.moviesList.slice(0, 10); 
        //   });
        const data = [];
        const nodes = [];
        this.celebrityList.forEach(element => {
            //console.log('element:'+JSON.stringify(element, null, 4));
            //console.log('elementname'+element.moviesList);
            element.moviesList.forEach(movie => {
                //console.log('movie:'+JSON.stringify(movie, null, 4));
                movie = movie['title'];
                //Check if the movies are in the Movies List since we are filtering Movie List
                //for movies released in last 10 years; instead of all movie nodes, it will be too many movie nodes without filtering
                if ((this.movieList.findIndex(x => x.title === movie)) != -1) {
                    const link = [element.name, movie]; //, "dash" 
                    if (data.indexOf(link) == -1) {
                        data.push(link);
                    }
                    const node = { "id": movie, "marker": { "radius": 8 } };
                    //console.log(node);
                    if (nodes.indexOf(node) == -1) {
                        nodes.push(node);
                    }
                    //console.log('before second degree:'+JSON.stringify(movie, null,  4));
                    //Second degree Links
                    this.movieList.find(x => x.title === movie).actors.forEach(a => {
                        //console.log("Second degree a: " + JSON.stringify(a, null, 4)); 
                        //console.log("Second degree element: " + JSON.stringify(element.name, null, 4)); 
                        if ((this.celebrityList.findIndex(x => x.name === a['actorName'])) != -1) {
                            if (element.name != a['actorName']) {
                                //           console.log(element.name + " --->" + a['actorName']);
                                const link2 = [element.name, a['actorName'], "dash"];
                                if (data.indexOf(link2) == -1) {
                                    data.push(link2);
                                }
                            }
                        }
                    });
                }
            });
            const node = { "id": element.name, "color": "orange", "marker": { "radius": 8 } };
            //console.log(node);
            if (nodes.indexOf(node) == -1) {
                nodes.push(node);
            }
        });
        //console.log(data);
        //console.log(celebnodes);
        this.chartOptions.series[0]['data'] = data;
        this.chartOptions.series[0]['nodes'] = nodes;
        this.chartLoaded = true;
        //console.log("Printing Nodes");
        //console.log(this.chartOptions.series[0]['nodes']);
    }
};
VisualizeComponent.ctorParameters = () => [
    { type: _services_celebrity_service__WEBPACK_IMPORTED_MODULE_2__["CelebrityService"] },
    { type: _services_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"] }
];
VisualizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visualize',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./visualize.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/visualize/visualize.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./visualize.component.css */ "./src/app/feature/visualize/visualize.component.css")).default]
    })
], VisualizeComponent);



/***/ }),

/***/ "./src/app/helpers/auth-guard.ts":
/*!***************************************!*\
  !*** ./src/app/helpers/auth-guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route, state) {
        const currentUser = this.authService.currentUserValue;
        if (currentUser) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        console.log('redirect to login');
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthGuard);



/***/ }),

/***/ "./src/app/helpers/must-match.validator.ts":
/*!*************************************************!*\
  !*** ./src/app/helpers/must-match.validator.ts ***!
  \*************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _configuration_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../configuration/app.config */ "./src/app/configuration/app.config.ts");






let AuthenticationService = class AuthenticationService {
    constructor(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        this.__headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'ORIGIN': '*',
                'Access-Control-Allow-Origin': '*'
            })
        };
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(username, password) {
        const obj = { 'userName': username, 'userPassword': password };
        const payload = obj;
        return this.http.post(this.appConfig.cognitoAPIEP + '/authenticate', payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
    }
    signUp(firstname, lastname, email, username, password) {
        const obj = { 'firstname': firstname, 'lastname': lastname, 'email': email, 'username': username, 'password': password };
        const payloadreg = obj;
        console.log(payloadreg);
        return this.http.post(this.appConfig.cognitoAPIEP + '/signUp', payloadreg)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(resp => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            console.log("response values" + resp);
            //  this.currentUserSubject.next(user);
            return resp;
        }));
    }
    signUpConfirm(username, confirmationcode) {
        const obj = { 'username': username, 'confirmationcode': confirmationcode };
        const payloadreg = obj;
        console.log(payloadreg);
        return this.http.post(this.appConfig.cognitoAPIEP + '/signUpConfirm', payloadreg)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(resp => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            //    console.log (resp);
            //  this.currentUserSubject.next(user);
            return resp;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _configuration_app_config__WEBPACK_IMPORTED_MODULE_5__["AppConfig"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/services/celebrity.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/celebrity.service.ts ***!
  \***********************************************/
/*! exports provided: CelebrityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelebrityService", function() { return CelebrityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _configuration_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration/app.config */ "./src/app/configuration/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


//import { LocalStorage } from '@ngx-pwa/local-storage';




let CelebrityService = class CelebrityService {
    constructor(appConfig, http, userService) {
        this.appConfig = appConfig;
        this.http = http;
        this.userService = userService;
        this.pageNum = 0;
        this._celebsReady = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this._celebsReady$ = this._celebsReady.asObservable();
        this.dataStore = {
            celebrities: []
        };
        this._celebrities = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    getCelebrityList() {
        if (this.dataStore.celebrities.length == 0) {
            this.loadCelebrities();
        }
        console.log('before returning observable, size of dataStore:' + this.dataStore.celebrities.length);
        //                console.log('actual observable object:'+JSON.stringify(this._celebrities.asObservable(), null, 4));
        return this._celebrities.asObservable();
    }
    nextPage() {
        this.pageNum += 1;
        this.loadCelebrities();
    }
    loadCelebrities() {
        console.log('before rest call in celeb service' + this.pageNum);
        this.userService.getAllCelebritiesPSQL(this.pageNum, 99)
            .subscribe(celebObj => {
            //console.log('here we are in our subscription in celeb service. size of our object:'+celebObj['body']['content'].length);
            let celebData = celebObj['body']['content'];
            //console.log('our data:'+JSON.stringify(celebData, null, 3));
            celebData.forEach(data => {
                //console.log('our individual celeb'+JSON.stringify(data, null, 4));
                //console.log('hi from celebrityService');
                let miniBioText = data.miniBio;
                if (miniBioText == null) {
                    miniBioText = '';
                }
                else {
                    if (Array.isArray(miniBioText)) {
                        miniBioText = miniBioText.join(',');
                    }
                    miniBioText = miniBioText.toString().substr(2);
                }
                //miniBioText = miniBioText.toString().substr(0, 164) + '..';
                //console.log(miniBioText);
                //console.log(Array.isArray(miniBioText));
                const obj = {
                    id: data.celebId,
                    name: data.name,
                    nickname: data.nickname,
                    birthdate: data.birthDate,
                    birthplace: data.birthPlace,
                    miniBio: miniBioText,
                    height: data.height,
                    headshot: data.headshot,
                    moviesList: data.filmography,
                };
                //console.log('about to push this obj into datastore:'+JSON.stringify(obj, null, 2));
                this.dataStore.celebrities.push(obj);
            });
            console.log('size of datastore:' + this.dataStore.celebrities.length);
            // localStorage.setItem('celebrities', JSON.stringify(this.dataStore.celebrities));
            /*                  this.localStor.setItem('celebrities', JSON.stringify(this.dataStore.celebrities))
                                .subscribe( () => {
                                
                                console.log('########### just in celebs');
                                });
              */
            console.log('################### before setting next');
            this._celebrities.next(Object.assign({}, this.dataStore).celebrities);
            this._celebsReady.next(true);
        }, error => {
            console.log('in httpError in celebService');
        });
        console.log('right before setting next in service');
        console.log('size of datastore:' + this.dataStore.celebrities.length);
        //this._celebrities.next(Object.assign({}, this.dataStore).celebrities);
    } //end loadCelebrities
    getCelebrityProfile(CelebId) {
        return this.http.get(this.appConfig.backendAPIEP + '/celebrities/id/' + CelebId, { observe: 'response' });
    }
};
CelebrityService.ctorParameters = () => [
    { type: _configuration_app_config__WEBPACK_IMPORTED_MODULE_4__["AppConfig"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
CelebrityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CelebrityService);



/***/ }),

/***/ "./src/app/services/movie.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/movie.service.ts ***!
  \*******************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _configuration_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configuration/app.config */ "./src/app/configuration/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");


//import { LocalStorage } from '@ngx-pwa/local-storage';




let MovieService = class MovieService {
    constructor(appConfig, http, 
    //            private localStor: LocalStorage,
    userService) {
        this.appConfig = appConfig;
        this.http = http;
        this.userService = userService;
        this.pageNum = 0;
        this._moviesReady = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this._moviesReady$ = this._moviesReady.asObservable();
        this.dataStore = {
            movies: []
        };
        this._movies = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    getClickedMovie() {
        console.log('returning our clicked movie' + this.clickedMovie);
        return this.clickedMovie;
    }
    setClickedMovie(movie) {
        console.log('just set our clicked movie' + movie); //JSON.stringify(movie, null, 4));
        this.clickedMovie = movie;
        this.getMovieActorObjects(movie.id);
        console.log('after calling getactor objects method');
    }
    getmoviesList() {
        if (this.dataStore.movies.length == 0) {
            this.loadMovies();
        }
        return this._movies.asObservable();
    }
    nextPage() {
        this.pageNum += 1;
        this.loadMovies();
    }
    getMovieActorObjects(movie) {
        //make rest call, marshall data.
        this.userService.getMoviebyIdandCelebs(movie)
            .subscribe(data => {
            console.log('here is our data!' + JSON.stringify(data['body']));
            //console.log('size of data:'+data['body'].length);
            //let restData = data['body']['rows'];
            //console.log('size:'+restData);
            //console.log('our rest data:'+JSON.stringify(data, null, 4));
            //console.log('our rest data attrib, celeb:'+restData['celeb']);
            //console.log('our rest data attrib, movie:'+restData['movie']);
            //console.log('size of restData'+restData.size);
            /*
                      for (let i = 1; i < data['body'].length; i++){
                        //console.log('here is our rest data!'+JSON.stringify(data['body'][i], null, 4));
                        
                        //this.celebToPush = data['body'][i];
                        console.log('name of celeb we got:'+this.celebToPush.name);
                        this.celebRepo.push(data['body'][i]);
                      }
            */
            /*restData.forEach( object => {
  
              console.log('here is our rest data!'+JSON.stringify(object, null, 4));
              this.celebToPush = object;
              this.celebRepo.push(this.celebToPush);
  
            });*/
        });
    }
    loadMovies() {
        //Commenting the Micro services call and manually constructing the list
        //const endpoint = this.appConfig.CelebMSEP + '/findallmovies';
        // return this.http.get < IMovie[] > (endpoint)
        //   .subscribe(data => {
        //     this.dataStore.movies = data;
        //     this._movies.next(Object.assign({}, this.dataStore).movies);
        //   }, error => {
        //     console.log('Failed to fetch movies');
        //   });
        this.userService.getAllMoviesPSQL(this.pageNum, 99)
            .subscribe(movieObj => {
            let today = new Date();
            let year = today.getFullYear();
            let movieData = movieObj['body']['content'];
            //console.log('our data:'+JSON.stringify(movieData, null, 3));
            movieData.forEach(data => {
                console.log('hi from movieService');
                let plotText = data.plot;
                //console.log('movie from server:'+JSON.stringify(data, null, 4));
                if (plotText == null) {
                    plotText = '';
                }
                else {
                    if (Array.isArray(plotText)) {
                        plotText = plotText.join(',');
                        //console.log('our plot was an array');
                    }
                    plotText = plotText.replace('\", \"', '\n');
                    plotText = plotText.replace('\\', '');
                    plotText = plotText.toString().substr(2, plotText.length - 4);
                    //plotText = plotText.toString().substr(-2);
                }
                if (data.genres == null) {
                    data.genres = '';
                }
                else {
                    let genreList = [];
                    data.genres.forEach(genreString => {
                        genreList.push(genreString.genre);
                    });
                    //console.log('our genres:'+JSON.stringify(genreList, null, 4));
                    data.genres = genreList.join(' | ');
                }
                if (data.writers == null) {
                    data.writers = '';
                }
                else {
                    let writerList = [];
                    data.writers.forEach(writerString => {
                        if (writerString.name == "") {
                        }
                        else {
                            writerList.push(writerString.name);
                        }
                    });
                    //console.log('our writers:'+JSON.stringify(data.writers, null, 4));
                    data.writers = writerList.join(' | ');
                }
                const obj = {
                    id: data.movieId,
                    year: data.year,
                    title: data.movieTitle,
                    budget: data.budget,
                    cover_url: data.coverUrl,
                    actors: data.actors,
                    genres: data.genres,
                    directors: data.writers,
                    distributors: data.productionCompanies,
                    plot: plotText
                };
                //Add movies that are released in last 10 years
                if (obj.year >= year - 10) {
                    console.log('about to push this obj into datastore:' + JSON.stringify(obj, null, 2));
                    this.dataStore.movies.push(obj);
                }
            });
            /*    this.localStor.setItem('movies', JSON.stringify(this.dataStore.movies))
                .subscribe( () => {
        
                  console.log('########### just in movies lenght:'+this.dataStore.movies.length);
                });*/
            this.dataStore.movies = this.dataStore.movies.sort((m1, m2) => {
                return m2.year - m1.year;
                /*if (m1.year > m2.year){
                  return m1;
                } else { return m2; } */
            });
            this._movies.next(Object.assign({}, this.dataStore).movies);
            this._moviesReady.next(true);
        }, error => {
            console.log('in httpError in movieService');
        });
        /*
        var today = new Date();
        var year = today.getFullYear();
        console.log(year);
        
        for (let i = 0; i < jsonData.data.length; i++){
          
          let data = jsonData.data[i];
    
                              let plotText = data.plot;
                              if (Array.isArray(plotText)){
    
                                plotText = plotText.join(',');
                              }
                              plotText = plotText.toString().substr(0, 164) + '..';
    
                              
          const obj = {
            id: i,
            year: data.year,
            title: data.title,
            budget: data.budget,
            cover_url: data.cover_url,
            actors: data.actors,
            genres: data.genres,
            directors: data.director,
            plot: plotText
          }
          
    
          //Add movies that are released in last 10 years
          if(obj.year >= year - 10)
          {
            this.dataStore.movies.push(obj);
          }
        }
    
        this._movies.next(Object.assign({}, this.dataStore).movies);
        */
    }
    getMovieProfile(MovieId) {
        return this.http.get(this.appConfig.backendAPIEP + '/movies/id/' + MovieId, { observe: 'response' });
    }
};
MovieService.ctorParameters = () => [
    { type: _configuration_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MovieService);



/***/ }),

/***/ "./src/app/services/tab.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/tab.service.ts ***!
  \*****************************************/
/*! exports provided: TabService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabService", function() { return TabService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let TabService = class TabService {
    constructor() {
        this.celebTabSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.celebSearchSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.movieTabSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.movieSearchSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.visTabSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.visSearchSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.visReadySource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.moviesStored = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.celebsStored = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.celebTab$ = this.celebTabSource.asObservable();
        this.celebSearch$ = this.celebSearchSource.asObservable();
        this.movieTab$ = this.movieTabSource.asObservable();
        this.movieSearch$ = this.movieSearchSource.asObservable();
        this.visTab$ = this.visTabSource.asObservable();
        this.visReady$ = this.visReadySource.asObservable();
        this.moviesStored$ = this.moviesStored.asObservable();
        this.celebsStored$ = this.celebsStored.asObservable();
    }
    announceScrollDown() {
        if (this._tab == 0) {
            this.announceScrollDownCelebrity();
        }
        if (this._tab == 1) {
            this.announceScrollDownMovie();
        }
        if (this._tab == 2) {
            this.announceScrollDownVis();
        }
    }
    announceSearchMade(searchTerm) {
        //console.log("In tabservice, searchTerm: " + searchTerm);
        if (this._tab == 0) {
            //search in celebrities
            console.log("We tried to search in celeb tab!");
            this.announceSearchCelebrity(searchTerm);
        }
        if (this._tab == 1) {
            //search in movies
            console.log("We tried to search in movie tab!");
            this.announceSearchMovie(searchTerm);
        }
        if (this._tab == 2) {
            console.log("We tried to search in vis tab!");
            this.announceSearchVis(searchTerm);
        }
    }
    announceSearchCelebrity(s) {
        this.celebSearchSource.next(s);
        this.celebTabSource.next("search");
        console.log("setting next celebrity search source in service");
    }
    announceSearchMovie(s) {
        this.movieSearchSource.next(s);
        this.movieTabSource.next("search");
        console.log("setting next movie search source in service");
    }
    announceSearchVis(s) {
        this.visSearchSource.next(s);
        this.visTabSource.next("search");
        console.log("setting next vis search source in service");
    }
    announceSearchFinishedCelebrity() {
        this.celebSearchSource.next('rest');
        this.celebTabSource.next('rest');
        console.log("setting next celebrity search source in service");
    }
    announceSearchFinishedMovie() {
        this.movieSearchSource.next('rest');
        this.movieTabSource.next('rest');
        console.log("setting next movie search source in service");
    }
    announceSearchFinishedVis() {
        this.visSearchSource.next('rest');
        this.visTabSource.next('rest');
        console.log("setting next vis search source in service");
    }
    announceScrollDownCelebrity() {
        this.celebTabSource.next("load");
        console.log("setting next celebrity observable in service");
    }
    announceLoadFinishedCelebrity() {
        this.celebTabSource.next("rest");
        console.log("setting default celebrity observable in service");
    }
    announceScrollDownMovie() {
        this.movieTabSource.next("load");
        console.log("setting next movie observable in service");
    }
    announceLoadFinishedMovie() {
        this.movieTabSource.next("rest");
        console.log("setting default movie observable in service");
    }
    announceScrollDownVis() {
        this.visTabSource.next("load");
        console.log("setting next vis observable in service");
    }
    announceLoadFinishedVis() {
        this.visTabSource.next("rest");
        console.log("setting default vis observable in service");
    }
    initTab() {
        this._tab = 0;
    }
    setActiveTab(e) {
        this._tab = e.index;
        console.log("in setActiveTab in service.");
    }
    getActiveTab() {
        console.log("Getting active tab in service: " + this._tab);
        return this._tab;
    }
};
TabService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TabService);



/***/ }),

/***/ "./src/app/services/token-interceptor.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/token-interceptor.service.ts ***!
  \*******************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");






let TokenInterceptorService = class TokenInterceptorService {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        let currentUser = this.authService.currentUserValue;
        console.log('Intercept Htp Req');
        //   request = request.clone({
        //     headers: request.headers.set('Access-Control-Allow-Origin', '*'),
        //         //'origin': ' *',
        //         //'Content-Type': 'application/json'
        // });
        if (currentUser && currentUser.cognitoSession) {
            request = request.clone({
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    Authorization: `Bearer ${currentUser.cognitoSession}`
                })
            });
        }
        console.log(request);
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((event) => {
            return event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            if (err.status === 401) {
                //this.authService.logoutUser();
                this.authService.logout();
            }
            console.log(err);
            const error = err.error;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    }
};
TokenInterceptorService.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
];
TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TokenInterceptorService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _configuration_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configuration/app.config */ "./src/app/configuration/app.config.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");





let UserService = class UserService {
    constructor(http, appConfig, cookieService) {
        this.http = http;
        this.appConfig = appConfig;
        this.cookieService = cookieService;
        //	__headers:
        this.__headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'ORIGIN': '*',
                'Access-Control-Allow-Origin': '*'
            })
        };
    }
    // authenticateUser(user : ILogin) : Observable<HttpResponse<IUser>> {
    //   const obj: any = {'userName': user.username, 'userPassword': user.password };
    //   const payload = <JSON>obj;
    //   return this.http.post<IUser>(this.appConfig.cognitoAPIEP + '/authenticate', payload, { observe: 'response' });
    // }
    /*
       createAuthorizationHeader(): HttpHeaders {
    // Just checking is this._options is null using lodash
    if (isNull(this.__headers)) {
    this.__headers = {
  headers: new HttpHeaders({
  'ORIGIN': '*',
  'Access-Control-Allow-Origin': '*'
  })
  };
  }
  
  return this.__headers;
  }
     */
    confirmUser(user) {
        const obj = {
            'username': user.username,
            'tempPassword': user.temppassword,
            'password': user.newpassword,
            'confPassword': user.confpassword,
            'session': this.cookieService.get('session')
        };
        const payload = obj;
        return this.http.post(this.appConfig.cognitoAPIEP + '/authenticate2', payload, { observe: 'response' });
    }
    beginResetPassword(user) {
        return this.http.post(this.appConfig.cognitoAPIEP + '/forgotPassword/' + user, { observe: 'response' });
    }
    finishResetPassword(user, code, newpass) {
        return this.http.post(this.appConfig.cognitoAPIEP + '/confirmPassword/' + user + '/' + code + '/' + newpass, { observe: 'response' });
    }
    searchMovie(title, num) {
        const obj = {
            "movieTitle": title
        };
        const payload = obj;
        return this.http.post(this.appConfig.backendAPIEP + '/movies/search', payload, { observe: 'response' });
    }
    getMoviebyIdandCelebs(movieId) {
        return this.http.get(this.appConfig.backendAPIEP + '/movies/id/' + movieId, { observe: 'response' });
    }
    getAllMoviesPSQL(pagenum, pagesize) {
        return this.http.get(this.appConfig.backendAPIEP + '/movies/' + pagenum + '/' + pagesize, { observe: 'response' }); //, {headers: this.__headers});
    }
    getAllMoviesELS() {
        return this.http.get(this.appConfig.backendAPIEP + '/movies/els/', { observe: 'response' });
    }
    searchCelebrity(name, num) {
        const obj = {
            "celebrityName": name
        };
        const payload = obj;
        return this.http.post(this.appConfig.backendAPIEP + '/celebrities/search/' + num, payload, { observe: 'response' });
    }
    getAllCelebritiesPSQL(pagenum, pagesize) {
        return this.http.get(this.appConfig.backendAPIEP + '/celebrities/' + pagenum + '/' + pagesize, { observe: 'response' }); //, {headers: this.__headers});
    }
    getAllCelebritiesELS() {
        return this.http.get(this.appConfig.backendAPIEP + '/celebrities/els/', { observe: 'response' });
    }
    getCelebrityProfile(CelebId) {
        return this.http.get(this.appConfig.backendAPIEP + '/celebrities/id/' + CelebId, { observe: 'response' });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _configuration_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.usa-header{\r\n    background: #dcdee0;\r\n    }\r\n    \r\n    .usa-nav-link{\r\n    \r\n    color:black;\r\n    \r\n    }\r\n    \r\n    .usa-nav {\r\n    \r\n    background: #dcdee0;\r\n    }\r\n    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkI7O0lBRUE7O0lBRUEsV0FBVzs7SUFFWDs7SUFFQTs7SUFFQSxtQkFBbUI7SUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi51c2EtaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZDogI2RjZGVlMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnVzYS1uYXYtbGlua3tcclxuICAgIFxyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnVzYS1uYXYge1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjZGNkZWUwO1xyXG4gICAgfVxyXG4gICAgIl19 */");

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.global */ "./src/app/app.global.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");







let HeaderComponent = class HeaderComponent {
    constructor(_global, cookieService, router, myapp, authService) {
        this._global = _global;
        this.cookieService = cookieService;
        this.router = router;
        this.myapp = myapp;
        this.authService = authService;
        this.logoutEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        if (this.cookieService.check('userVO') === true) {
            this.userVO = this.cookieService.get('userVO');
        }
        // if (this.cookieService.check('groups') === true) {
        //   this.groups = JSON.parse(this.cookieService.get('groups'));
        // }
    }
    isUserLoggedIn() {
        if (this.authService.currentUserValue) {
            return true;
        }
        else {
            return false;
        }
    }
    LogOutUser() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _app_global__WEBPACK_IMPORTED_MODULE_2__["AppGlobals"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HeaderComponent.prototype, "logoutEvent", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html")).default,
        providers: [_app_global__WEBPACK_IMPORTED_MODULE_2__["AppGlobals"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")).default]
    })
], HeaderComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const environment = {
    production: false,
    cognitoURL: '',
    cognitoPort: '',
    cognitoHttpString: '',
    tokenKey: 'APP_OAUTH_TOKEN',
    //cognitoAPIEP : 'http://localhost:9000',
    //cognitoAPIEP : 'https://cognito-dhsjetsrecs-test.apps.aceinfosolutions.com',
    //cognitoAPIEP : 'http://34.232.4.16:9000',
    //cognitoAPIEP : jsonData['API_COGNITO'],
    //backendAPIEP : jsonData['API_MICROSERVICE'],
    cognitoAPIEP: 'https://cognito.aceinfosolutions.com',
    //cognitoAPIEP : 'https://bdso-cognito-bdso-test.apps.aceinfosolutions.com',
    //backendAPIEP : 'http://localhost:9001',
    //backendAPIEP : 'http://34.232.4.16:9001',
    //backendAPIEP : 'http://localhost:9000',
    backendAPIEP: 'https://celebrityms.aceinfosolutions.com',
    celebMSEP: ''
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\trayemo\Documents\ACE_Projects\cloud_adoption_turnkey\CoETechTraining-Web\src\dev\resources\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map