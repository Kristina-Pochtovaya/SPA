(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ITRANSITION.CORP/k.pochtovaya/Documents/Angular Projects/SPA/SPA/src/main.ts */"zUnb");


/***/ }),

/***/ "1PcF":
/*!**************************************************!*\
  !*** ./src/app/second-page/models/user.model.ts ***!
  \**************************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(firstName, lastName, ages, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.ages = ages;
        this.email = email;
        this.password = password;
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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

/***/ "DbpQ":
/*!****************************************************!*\
  !*** ./src/app/third-page/third-page.component.ts ***!
  \****************************************************/
/*! exports provided: ThirdPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdPageComponent", function() { return ThirdPageComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _userMore_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userMore.model */ "Z/1o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ThirdPageComponent {
    constructor() {
        this.male = 'Male';
        this.children = false;
        this.job = false;
        this.usersMore = [];
    }
    ngOnInit() {
        console.log(this.usersMore);
        this.thirdPageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            male: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
            children: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](false),
            job: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](false)
        });
    }
    addPersonalInfoMore() {
        this.usersMore.push(new _userMore_model__WEBPACK_IMPORTED_MODULE_1__["UserMore"](this.male, this.children, this.job));
        this.clearInfo();
        console.log(this.usersMore);
    }
    clearInfo() {
        this.male = 'Male';
        this.children = false;
        this.job = false;
    }
}
ThirdPageComponent.ɵfac = function ThirdPageComponent_Factory(t) { return new (t || ThirdPageComponent)(); };
ThirdPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ThirdPageComponent, selectors: [["app-third-page"]], decls: 26, vars: 4, consts: [[1, "thirdPage-container"], [1, "header"], ["src", "./assets/headerfooter.jpg", 1, "headerImage"], [1, "thirdPage-form", 3, "formGroup"], [1, "thirdPage-content"], ["for", "male", 1, "titleLabel"], ["formControlName", "male", 1, "input", 3, "ngModel", "ngModelChange"], ["value", "Male"], ["value", "Female"], ["for", "children", 1, "titleLabel"], ["formControlName", "children", "id", "children", "type", "checkbox", 1, "input", 3, "ngModel", "ngModelChange"], ["for", "job", 1, "titleLabel"], ["formControlName", "job", "id", "job", "type", "checkbox", 1, "input", 3, "ngModel", "ngModelChange"], [1, "action"], ["type", "submit", 1, "buttonThirdPage", 3, "click"], [1, "footer"], ["src", "./assets/headerfooter.jpg", 1, "footerImage"]], template: function ThirdPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Male: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ThirdPageComponent_Template_select_ngModelChange_8_listener($event) { return ctx.male = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Have children: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ThirdPageComponent_Template_input_ngModelChange_16_listener($event) { return ctx.children = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Got a job: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ThirdPageComponent_Template_input_ngModelChange_20_listener($event) { return ctx.job = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ThirdPageComponent_Template_button_click_22_listener() { return ctx.addPersonalInfoMore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.thirdPageForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.male);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.children);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.job);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["CheckboxControlValueAccessor"]], styles: ["#button[_ngcontent-%COMP%] {\n  height: 30px;\n  border-radius: 17px;\n  margin-bottom: 15px;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid transparent;\n  color: #f0f0fc;\n  background-color: #7e3d9c;\n  border-color: #7e3d9c;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n#content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n#titleLabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 155px;\n  margin-bottom: 15px;\n  font-family: 'Roboto';\n  font-size: 22px;\n}\n#input[_ngcontent-%COMP%] {\n  min-height: 25px;\n  min-width: 270px;\n  font-family: 'Roboto';\n  font-size: 20px;\n}\n.thirdPage-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n.thirdPage-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .headerImage[_ngcontent-%COMP%], .thirdPage-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .headerImage[_ngcontent-%COMP%], .thirdPage-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .footerImage[_ngcontent-%COMP%], .thirdPage-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .footerImage[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n.thirdPage-container[_ngcontent-%COMP%]   .thirdPage-form[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  flex: 1;\n  margin-top: 30px;\n}\n.thirdPage-container[_ngcontent-%COMP%]   .thirdPage-form[_ngcontent-%COMP%]   .titleLabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 155px;\n  margin-bottom: 15px;\n  font-family: 'Roboto';\n  font-size: 22px;\n}\n.thirdPage-container[_ngcontent-%COMP%]   .thirdPage-form[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  min-height: 25px;\n  min-width: 270px;\n  font-family: 'Roboto';\n  font-size: 20px;\n}\n.thirdPage-container[_ngcontent-%COMP%]   .thirdPage-form[_ngcontent-%COMP%]   .buttonThirdPage[_ngcontent-%COMP%] {\n  height: 30px;\n  border-radius: 17px;\n  margin-bottom: 15px;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid transparent;\n  color: #f0f0fc;\n  background-color: #7e3d9c;\n  border-color: #7e3d9c;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  height: 55px;\n  width: 65px;\n  font-size: 1.2rem;\n}\n.buttonThirdPage[_ngcontent-%COMP%]:active, .buttonThirdPage[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5jb21wb25lbnQubGVzcyIsInRoaXJkLXBhZ2UuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFFQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGVBQUE7QUNMSjtBRFFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNOSjtBRFNBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFFQSxxQkFBQTtFQUNBLGVBQUE7QUNSSjtBRFdBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLHFCQUFBO0VBQ0EsZUFBQTtBQ1ZKO0FBOUJBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFnQ0o7QUFuQ0E7Ozs7RUFPUSxlQUFBO0VBQ0EsZ0JBQUE7QUFrQ1I7QUExQ0E7RURtQkksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUNURyxPQUFBO0VBQ0EsZ0JBQUE7QUFvQ1A7QUFuREE7RUQyQkkscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFFQSxxQkFBQTtFQUNBLGVBQUE7QUMwQko7QUExREE7RURvQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLHFCQUFBO0VBQ0EsZUFBQTtBQ3dCSjtBQWhFQTtFREVJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUVBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZUFBQTtFQ2FPLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFrRFg7QUE1Q0E7O0VBQ0ksd0JBQUE7QUErQ0oiLCJmaWxlIjoidGhpcmQtcGFnZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBncmFkaWVudFdoaXRlOiAjZjBmMGZjO1xuQHB1cHJsZTogIzdlM2Q5YztcblxuI2J1dHRvbiB7XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBcbiAgICBjb2xvcjogQGdyYWRpZW50V2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQHB1cHJsZTtcbiAgICBib3JkZXItY29sb3I6IEBwdXBybGU7XG4gIFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jY29udGVudCB7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuI3RpdGxlTGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTU1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcblxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBmb250LXNpemU6IDIycHg7XG59XG5cbiNpbnB1dCB7XG4gICAgbWluLWhlaWdodDogMjVweDtcbiAgICBtaW4td2lkdGg6IDI3MHB4O1xuXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn0iLCJAaW1wb3J0ICcuLi9hcHAuY29tcG9uZW50Lmxlc3MnO1xuXG4udGhpcmRQYWdlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuXG4gICAgLmhlYWRlciwuZm9vdGVyIHtcbiAgICAgICAgLmhlYWRlckltYWdlLCAuZm9vdGVySW1hZ2Uge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudGhpcmRQYWdlLWZvcm0ge1xuICAgICAgICNjb250ZW50O1xuICAgICAgIGZsZXg6IDE7XG4gICAgICAgbWFyZ2luLXRvcDogMzBweDtcblxuICAgICAgIC50aXRsZUxhYmVsIHtcbiAgICAgICAgI3RpdGxlTGFiZWw7XG4gICAgICAgfVxuXG4gICAgICAgLmlucHV0IHtcbiAgICAgICAgICAgI2lucHV0O1xuICAgICAgIH1cblxuICAgICAgIC5idXR0b25UaGlyZFBhZ2Uge1xuICAgICAgICAgICAjYnV0dG9uO1xuXG4gICAgICAgICAgIGhlaWdodDogNTVweDtcbiAgICAgICAgICAgd2lkdGg6IDY1cHg7XG4gICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgIH1cbiAgICB9XG5cbn1cblxuLmJ1dHRvblRoaXJkUGFnZTphY3RpdmUsIC5idXR0b25UaGlyZFBhZ2U6Zm9jdXMgICB7IFxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgIH1cbiJdfQ== */"] });


/***/ }),

/***/ "Hkbg":
/*!****************************************************!*\
  !*** ./src/app/first-page/first-page.component.ts ***!
  \****************************************************/
/*! exports provided: FirstPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstPageComponent", function() { return FirstPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class FirstPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
FirstPageComponent.ɵfac = function FirstPageComponent_Factory(t) { return new (t || FirstPageComponent)(); };
FirstPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FirstPageComponent, selectors: [["app-first-page"]], decls: 12, vars: 0, consts: [[1, "firstPage-container"], ["src", "./assets/landscape.jpg", 1, "background"], [1, "body"], [1, "buttonGroups"], ["routerLink", "/second-page"], ["type", "button", 1, "secondPage"], ["routerLink", "/third-page"], ["type", "button", 1, "thirdPage"]], template: function FirstPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome to our website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Second Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Third Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#button[_ngcontent-%COMP%] {\n  height: 30px;\n  border-radius: 17px;\n  margin-bottom: 15px;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid transparent;\n  color: #f0f0fc;\n  background-color: #7e3d9c;\n  border-color: #7e3d9c;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n#content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n#titleLabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 155px;\n  margin-bottom: 15px;\n  font-family: 'Roboto';\n  font-size: 22px;\n}\n#input[_ngcontent-%COMP%] {\n  min-height: 25px;\n  min-width: 270px;\n  font-family: 'Roboto';\n  font-size: 20px;\n}\nimg.background[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  min-height: 100%;\n  min-width: 640px;\n  width: 100%;\n  height: auto;\n}\n@media screen and (max-width: 640px) {\n  img.background[_ngcontent-%COMP%]   img.bg[_ngcontent-%COMP%] {\n    left: 50%;\n    margin-left: -320px;\n  }\n}\n.body[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: absolute;\n  top: 25%;\n  left: 40%;\n  color: #f0f0fc;\n  font-family: 'Roboto';\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 400;\n}\n.body[_ngcontent-%COMP%]   .buttonGroups[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n.body[_ngcontent-%COMP%]   .buttonGroups[_ngcontent-%COMP%]   .secondPage[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .buttonGroups[_ngcontent-%COMP%]   .thirdPage[_ngcontent-%COMP%] {\n  height: 30px;\n  border-radius: 17px;\n  margin-bottom: 15px;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid transparent;\n  color: #f0f0fc;\n  background-color: #7e3d9c;\n  border-color: #7e3d9c;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.secondPage[_ngcontent-%COMP%]:active, .secondPage[_ngcontent-%COMP%]:focus, .thirdPage[_ngcontent-%COMP%]:active, .thirdPage[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5jb21wb25lbnQubGVzcyIsImZpcnN0LXBhZ2UuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFFQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGVBQUE7QUNMSjtBRFFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNOSjtBRFNBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFFQSxxQkFBQTtFQUNBLGVBQUE7QUNSSjtBRFdBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLHFCQUFBO0VBQ0EsZUFBQTtBQ1ZKO0FBOUJDO0VBQ0csZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBK0JKO0FBN0JJO0VBQUE7SUFFSSxTQUFBO0lBRUEsbUJBQUE7RUE4Qk47QUFDRjtBQTFCRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsY0FBQTtFQUVBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUEwQko7QUFyQ0U7RUFjTSxhQUFBO0VBQ0EsNkJBQUE7QUEwQlI7QUF6Q0U7O0VEakJFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUVBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZUFBQTtBQzJESjtBQWhDRTs7OztFQUNFLHdCQUFBO0FBcUNKIiwiZmlsZSI6ImZpcnN0LXBhZ2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZ3JhZGllbnRXaGl0ZTogI2YwZjBmYztcbkBwdXBybGU6ICM3ZTNkOWM7XG5cbiNidXR0b24ge1xuICAgIGhlaWdodDozMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgXG4gICAgY29sb3I6IEBncmFkaWVudFdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBwdXBybGU7XG4gICAgYm9yZGVyLWNvbG9yOiBAcHVwcmxlO1xuICBcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2NvbnRlbnQge1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbiN0aXRsZUxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDE1NXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG5cbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4jaW5wdXQge1xuICAgIG1pbi1oZWlnaHQ6IDI1cHg7XG4gICAgbWluLXdpZHRoOiAyNzBweDtcblxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBmb250LXNpemU6IDIwcHg7XG59IiwiIEBpbXBvcnQgJy4uL2FwcC5jb21wb25lbnQubGVzcyc7XG4gXG4gaW1nLmJhY2tncm91bmQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcblxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgbWluLXdpZHRoOiA2NDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCl7XG4gICAgICBpbWcuYmcge1xuICAgICAgICBsZWZ0OiA1MCU7XG5cbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zMjBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYm9keSB7XG4gICAgei1pbmRleDogMTA7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOjI1JTtcbiAgICBsZWZ0OjQwJTtcblxuICAgIGNvbG9yOiBAZ3JhZGllbnRXaGl0ZTtcblxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAuYnV0dG9uR3JvdXBzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cbiAgICAgICAgLnNlY29uZFBhZ2UsIC50aGlyZFBhZ2Uge1xuICAgICAgICAgICAgI2J1dHRvbjtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zZWNvbmRQYWdlOmFjdGl2ZSwgLnNlY29uZFBhZ2U6Zm9jdXMsIC50aGlyZFBhZ2U6YWN0aXZlLCAudGhpcmRQYWdlOmZvY3VzICAgeyBcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICB9Il19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'SPA';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["#button[_ngcontent-%COMP%] {\n  height: 30px;\n  border-radius: 17px;\n  margin-bottom: 15px;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid transparent;\n  color: #f0f0fc;\n  background-color: #7e3d9c;\n  border-color: #7e3d9c;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n#content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n#titleLabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 155px;\n  margin-bottom: 15px;\n  font-family: 'Roboto';\n  font-size: 22px;\n}\n#input[_ngcontent-%COMP%] {\n  min-height: 25px;\n  min-width: 270px;\n  font-family: 'Roboto';\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUVBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZUFBQTtBQUxKO0FBUUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQU5KO0FBU0E7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUVBLHFCQUFBO0VBQ0EsZUFBQTtBQVJKO0FBV0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEscUJBQUE7RUFDQSxlQUFBO0FBVkoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGdyYWRpZW50V2hpdGU6ICNmMGYwZmM7XG5AcHVwcmxlOiAjN2UzZDljO1xuXG4jYnV0dG9uIHtcbiAgICBoZWlnaHQ6MzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIFxuICAgIGNvbG9yOiBAZ3JhZGllbnRXaGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAcHVwcmxlO1xuICAgIGJvcmRlci1jb2xvcjogQHB1cHJsZTtcbiAgXG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNjb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4jdGl0bGVMYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxNTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuI2lucHV0IHtcbiAgICBtaW4taGVpZ2h0OiAyNXB4O1xuICAgIG1pbi13aWR0aDogMjcwcHg7XG5cbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "Z/1o":
/*!**********************************************!*\
  !*** ./src/app/third-page/userMore.model.ts ***!
  \**********************************************/
/*! exports provided: UserMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMore", function() { return UserMore; });
class UserMore {
    constructor(male, children, job) {
        this.male = male;
        this.children = children;
        this.job = job;
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./first-page/first-page.component */ "Hkbg");
/* harmony import */ var _second_page_second_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./second-page/second-page.component */ "ZXOp");
/* harmony import */ var _third_page_third_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./third-page/third-page.component */ "DbpQ");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











const appRoutes = [
    { path: '', component: _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_5__["FirstPageComponent"] },
    { path: 'second-page', component: _second_page_second_page_component__WEBPACK_IMPORTED_MODULE_6__["SecondPageComponent"] },
    { path: 'third-page', component: _third_page_third_page_component__WEBPACK_IMPORTED_MODULE_7__["ThirdPageComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"] }
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_5__["FirstPageComponent"],
        _second_page_second_page_component__WEBPACK_IMPORTED_MODULE_6__["SecondPageComponent"],
        _third_page_third_page_component__WEBPACK_IMPORTED_MODULE_7__["ThirdPageComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "ZXOp":
/*!******************************************************!*\
  !*** ./src/app/second-page/second-page.component.ts ***!
  \******************************************************/
/*! exports provided: SecondPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondPageComponent", function() { return SecondPageComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/user.model */ "1PcF");
/* harmony import */ var _ages_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ages.validators */ "eb8e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function SecondPageComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Ages cannot contain characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SecondPageComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SecondPageComponent_div_17_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.ages.errors.cannotContainCharacters);
} }
class SecondPageComponent {
    constructor() {
        this.users = [];
    }
    ngOnInit() {
        console.log(this.users);
        this.secondPageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
            ages: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _ages_validators__WEBPACK_IMPORTED_MODULE_2__["AgesInputValidators"].cannotContainCharacters),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null)
        });
    }
    get ages() {
        return this.secondPageForm.get('ages');
    }
    addPersonalInfo() {
        this.users.push(new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"](this.firstName, this.lastName, this.myAges, this.email, this.password));
        this.clearInfo();
        console.log(this.users);
    }
    clearInfo() {
        this.firstName = null;
        this.lastName = null;
        this.myAges = null;
        this.email = null;
        this.password = null;
    }
}
SecondPageComponent.ɵfac = function SecondPageComponent_Factory(t) { return new (t || SecondPageComponent)(); };
SecondPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SecondPageComponent, selectors: [["app-second-page"]], decls: 31, vars: 7, consts: [[1, "secondPage-container"], [1, "header"], ["src", "./assets/headerfooter.jpg", 1, "headerImage"], [1, "secondPage-form", 3, "formGroup"], [1, "secondPage-content"], ["for", "firstName", 1, "titleLabel"], ["formControlName", "firstName", "id", "firstName", "type", "text", 1, "input", 3, "ngModel", "ngModelChange"], ["for", "lastName", 1, "titleLabel"], ["formControlName", "lastName", "id", "lastName", "type", "text", 1, "input", 3, "ngModel", "ngModelChange"], ["for", "ages", 1, "titleLabel"], ["formControlName", "ages", "id", "ages", "type", "text", 1, "input", 3, "ngModel", "ngModelChange"], ["class", "agesError", 4, "ngIf"], ["for", "email", 1, "titleLabel"], ["formControlName", "email", "id", "email", "type", "email", 1, "input", 3, "ngModel", "ngModelChange"], ["for", "password", 1, "titleLabel"], ["formControlName", "password", "id", "password", "type", "password", 1, "input", 3, "ngModel", "ngModelChange"], [1, "action"], ["type", "submit", 1, "buttonSecondPage", 3, "click"], [1, "footer"], ["src", "./assets/headerfooter.jpg", 1, "footerImage"], [1, "agesError"], [4, "ngIf"]], template: function SecondPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "First name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SecondPageComponent_Template_input_ngModelChange_8_listener($event) { return ctx.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Last name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SecondPageComponent_Template_input_ngModelChange_12_listener($event) { return ctx.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Ages: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SecondPageComponent_Template_input_ngModelChange_16_listener($event) { return ctx.myAges = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, SecondPageComponent_div_17_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "E-mail: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SecondPageComponent_Template_input_ngModelChange_21_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SecondPageComponent_Template_input_ngModelChange_25_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SecondPageComponent_Template_button_click_27_listener() { return ctx.addPersonalInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.secondPageForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.myAges);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.ages.touched && ctx.ages.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["#button[_ngcontent-%COMP%] {\n  height: 30px;\n  border-radius: 17px;\n  margin-bottom: 15px;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid transparent;\n  color: #f0f0fc;\n  background-color: #7e3d9c;\n  border-color: #7e3d9c;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n#content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n#titleLabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 155px;\n  margin-bottom: 15px;\n  font-family: 'Roboto';\n  font-size: 22px;\n}\n#input[_ngcontent-%COMP%] {\n  min-height: 25px;\n  min-width: 270px;\n  font-family: 'Roboto';\n  font-size: 20px;\n}\n.secondPage-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n.secondPage-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .headerImage[_ngcontent-%COMP%], .secondPage-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .headerImage[_ngcontent-%COMP%], .secondPage-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .footerImage[_ngcontent-%COMP%], .secondPage-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .footerImage[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n.secondPage-container[_ngcontent-%COMP%]   .secondPage-form[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  flex: 1;\n  margin-top: 30px;\n}\n.secondPage-container[_ngcontent-%COMP%]   .secondPage-form[_ngcontent-%COMP%]   .titleLabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 155px;\n  margin-bottom: 15px;\n  font-family: 'Roboto';\n  font-size: 22px;\n}\n.secondPage-container[_ngcontent-%COMP%]   .secondPage-form[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  min-height: 25px;\n  min-width: 270px;\n  font-family: 'Roboto';\n  font-size: 20px;\n}\n.secondPage-container[_ngcontent-%COMP%]   .secondPage-form[_ngcontent-%COMP%]   .buttonSecondPage[_ngcontent-%COMP%] {\n  height: 30px;\n  border-radius: 17px;\n  margin-bottom: 15px;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid transparent;\n  color: #f0f0fc;\n  background-color: #7e3d9c;\n  border-color: #7e3d9c;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  height: 55px;\n  width: 65px;\n  font-size: 1.2rem;\n}\n.buttonSecondPage[_ngcontent-%COMP%]:active, .buttonSecondPage[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5jb21wb25lbnQubGVzcyIsInNlY29uZC1wYWdlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBRUEsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSxlQUFBO0FDTEo7QURRQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDTko7QURTQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBRUEscUJBQUE7RUFDQSxlQUFBO0FDUko7QURXQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxxQkFBQTtFQUNBLGVBQUE7QUNWSjtBQTlCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBZ0NKO0FBbkNBOzs7O0VBT1EsZUFBQTtFQUNBLGdCQUFBO0FBa0NSO0FBMUNBO0VEbUJJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VDVEcsT0FBQTtFQUNBLGdCQUFBO0FBb0NQO0FBbkRBO0VEMkJJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBRUEscUJBQUE7RUFDQSxlQUFBO0FDMEJKO0FBMURBO0VEb0NJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxxQkFBQTtFQUNBLGVBQUE7QUN3Qko7QUFoRUE7RURFSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFFQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGVBQUE7RUNhTyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBa0RYO0FBNUNBOztFQUNJLHdCQUFBO0FBK0NKIiwiZmlsZSI6InNlY29uZC1wYWdlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGdyYWRpZW50V2hpdGU6ICNmMGYwZmM7XG5AcHVwcmxlOiAjN2UzZDljO1xuXG4jYnV0dG9uIHtcbiAgICBoZWlnaHQ6MzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIFxuICAgIGNvbG9yOiBAZ3JhZGllbnRXaGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAcHVwcmxlO1xuICAgIGJvcmRlci1jb2xvcjogQHB1cHJsZTtcbiAgXG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNjb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4jdGl0bGVMYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxNTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuI2lucHV0IHtcbiAgICBtaW4taGVpZ2h0OiAyNXB4O1xuICAgIG1pbi13aWR0aDogMjcwcHg7XG5cbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufSIsIkBpbXBvcnQgJy4uL2FwcC5jb21wb25lbnQubGVzcyc7XG5cbi5zZWNvbmRQYWdlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuXG4gICAgLmhlYWRlciwuZm9vdGVyIHtcbiAgICAgICAgLmhlYWRlckltYWdlLCAuZm9vdGVySW1hZ2Uge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2Vjb25kUGFnZS1mb3JtIHtcbiAgICAgICAjY29udGVudDtcbiAgICAgICBmbGV4OiAxO1xuICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgICAgICAudGl0bGVMYWJlbCB7XG4gICAgICAgICN0aXRsZUxhYmVsO1xuICAgICAgIH1cblxuICAgICAgIC5pbnB1dCB7XG4gICAgICAgICAgICNpbnB1dDtcbiAgICAgICB9XG5cbiAgICAgICAuYnV0dG9uU2Vjb25kUGFnZSB7XG4gICAgICAgICAgICNidXR0b247XG5cbiAgICAgICAgICAgaGVpZ2h0OiA1NXB4O1xuICAgICAgICAgICB3aWR0aDogNjVweDtcbiAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgfVxuICAgIH1cblxufVxuXG4uYnV0dG9uU2Vjb25kUGFnZTphY3RpdmUsIC5idXR0b25TZWNvbmRQYWdlOmZvY3VzICAgeyBcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICB9XG4iXX0= */"] });


/***/ }),

/***/ "eb8e":
/*!************************************************!*\
  !*** ./src/app/second-page/ages.validators.ts ***!
  \************************************************/
/*! exports provided: AgesInputValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgesInputValidators", function() { return AgesInputValidators; });
class AgesInputValidators {
    static cannotContainCharacters(control) {
        let val = control.value;
        if (isNaN(val)) {
            return { cannotContainCharacters: true };
        }
        return null;
    }
}


/***/ }),

/***/ "nod/":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 7, vars: 0, consts: [[1, "notFound-container"], [1, "header"], ["src", "./assets/headerfooter.jpg", 1, "headerImage"], [1, "content"], [1, "footer"], ["src", "./assets/headerfooter.jpg", 1, "footerImage"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#button[_ngcontent-%COMP%] {\n  height: 30px;\n  border-radius: 17px;\n  margin-bottom: 15px;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid transparent;\n  color: #f0f0fc;\n  background-color: #7e3d9c;\n  border-color: #7e3d9c;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n#content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n#titleLabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 155px;\n  margin-bottom: 15px;\n  font-family: 'Roboto';\n  font-size: 22px;\n}\n#input[_ngcontent-%COMP%] {\n  min-height: 25px;\n  min-width: 270px;\n  font-family: 'Roboto';\n  font-size: 20px;\n}\n.notFound-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n.notFound-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .headerImage[_ngcontent-%COMP%], .notFound-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .headerImage[_ngcontent-%COMP%], .notFound-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .footerImage[_ngcontent-%COMP%], .notFound-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .footerImage[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n.notFound-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  flex: 1;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5jb21wb25lbnQubGVzcyIsIm5vdC1mb3VuZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUVBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZUFBQTtBQ0xKO0FEUUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ05KO0FEU0E7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUVBLHFCQUFBO0VBQ0EsZUFBQTtBQ1JKO0FEV0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEscUJBQUE7RUFDQSxlQUFBO0FDVko7QUE5QkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQWdDSjtBQW5DQTs7OztFQU9RLGVBQUE7RUFDQSxnQkFBQTtBQWtDUjtBQTFDQTtFRG1CSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQ1RJLE9BQUE7RUFDQSxnQkFBQTtBQW9DUiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZ3JhZGllbnRXaGl0ZTogI2YwZjBmYztcbkBwdXBybGU6ICM3ZTNkOWM7XG5cbiNidXR0b24ge1xuICAgIGhlaWdodDozMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgXG4gICAgY29sb3I6IEBncmFkaWVudFdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBwdXBybGU7XG4gICAgYm9yZGVyLWNvbG9yOiBAcHVwcmxlO1xuICBcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2NvbnRlbnQge1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbiN0aXRsZUxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDE1NXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG5cbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4jaW5wdXQge1xuICAgIG1pbi1oZWlnaHQ6IDI1cHg7XG4gICAgbWluLXdpZHRoOiAyNzBweDtcblxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBmb250LXNpemU6IDIwcHg7XG59IiwiQGltcG9ydCAnLi4vYXBwLmNvbXBvbmVudC5sZXNzJztcblxuLm5vdEZvdW5kLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuXG4gICAgLmhlYWRlciwuZm9vdGVyIHtcbiAgICAgICAgLmhlYWRlckltYWdlLCAuZm9vdGVySW1hZ2Uge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICAgICNjb250ZW50O1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cbn1cblxuIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map