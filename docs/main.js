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
    constructor(UserData) {
        this.FirstName = UserData.firstName;
        this.LastName = UserData.lastName;
        this.Ages = UserData.ages;
        this.Email = UserData.email;
        this.Password = UserData.password;
    }
}


/***/ }),

/***/ "52OU":
/*!*****************************************************!*\
  !*** ./src/app/third-page/models/userMore.model.ts ***!
  \*****************************************************/
/*! exports provided: UserMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMore", function() { return UserMore; });
class UserMore {
    constructor(UserDataMore) {
        this.Male = UserDataMore.male;
        this.Children = UserDataMore.children;
        this.Job = UserDataMore.job;
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
/*! exports provided: usersMore, ThirdPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersMore", function() { return usersMore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdPageComponent", function() { return ThirdPageComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _models_userMore_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/userMore.model */ "52OU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var UserEnumMore;
(function (UserEnumMore) {
    UserEnumMore["Male"] = "Male";
    UserEnumMore["Children"] = "Children";
    UserEnumMore["Job"] = "Job";
})(UserEnumMore || (UserEnumMore = {}));
const usersMore = [];
class ThirdPageComponent {
    constructor() {
        this.UserEnumMore = UserEnumMore;
        this.usersMore = usersMore;
        this.valuesArray = [
            { value: 'Male' },
            { value: 'Female' }
        ];
    }
    ngOnInit() {
        console.log(usersMore);
        this.thirdPageForm = this.createFormGroup();
    }
    getControl(name) {
        var _a;
        return (_a = this.thirdPageForm) === null || _a === void 0 ? void 0 : _a.get(name);
    }
    get UserDataMore() {
        const formValue = this.thirdPageForm.value;
        return {
            male: formValue[UserEnumMore.Male],
            children: formValue[UserEnumMore.Children],
            job: formValue[UserEnumMore.Job]
        };
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            [UserEnumMore.Male]: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('Male'),
            [UserEnumMore.Children]: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](false),
            [UserEnumMore.Job]: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](false),
        });
    }
    addPersonalInfoMore() {
        usersMore.push(new _models_userMore_model__WEBPACK_IMPORTED_MODULE_1__["UserMore"](this.UserDataMore));
        this.thirdPageForm.reset();
        this.thirdPageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            Male: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('Male'),
            Children: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](false),
            Job: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](false)
        });
        console.log(usersMore);
    }
}
ThirdPageComponent.ɵfac = function ThirdPageComponent_Factory(t) { return new (t || ThirdPageComponent)(); };
ThirdPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ThirdPageComponent, selectors: [["app-third-page"]], decls: 14, vars: 21, consts: [[1, "thirdPage-container"], [1, "header"], ["src", "./assets/headerfooter.jpg", 1, "headerImage"], [1, "thirdPage-form", 3, "formGroup"], [1, "thirdPage-content"], [3, "classLabel", "textLabel", "id", "control", "valuesArray"], [3, "classLabel", "textLabel", "id", "control"], [1, "action"], ["type", "submit", 1, "buttonThirdPage", 3, "click"], [3, "usersMore"], [1, "footer"], ["src", "./assets/headerfooter.jpg", 1, "footerImage"]], template: function ThirdPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-select-user", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "app-checkbox-user", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-checkbox-user", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ThirdPageComponent_Template_button_click_9_listener() { return ctx.addPersonalInfoMore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "app-user-table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.thirdPageForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("input");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("classLabel", "titleLabel")("textLabel", "Male")("id", ctx.UserEnumMore.Male)("control", ctx.getControl(ctx.UserEnumMore.Male))("valuesArray", ctx.valuesArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("input");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("classLabel", "titleLabel")("textLabel", "Have children")("id", ctx.UserEnumMore.Children)("control", ctx.getControl(ctx.UserEnumMore.Children));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("input");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("classLabel", "titleLabel")("textLabel", "Got a job")("id", ctx.UserEnumMore.Job)("control", ctx.getControl(ctx.UserEnumMore.Job));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("usersMore", ctx.usersMore);
    } }, styles: ["#button[_ngcontent-%COMP%] {\n  height: 30px;\n  border-radius: 17px;\n  margin-bottom: 15px;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid transparent;\n  color: #f0f0fc;\n  background-color: #7e3d9c;\n  border-color: #7e3d9c;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n#content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n#titleLabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 155px;\n  margin-bottom: 15px;\n  font-family: 'Roboto';\n  font-size: 22px;\n}\n#input[_ngcontent-%COMP%] {\n  min-height: 25px;\n  min-width: 270px;\n  font-family: 'Roboto';\n  font-size: 20px;\n}\n#errorInput[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  color: red;\n  font-family: 'Roboto';\n  font-size: 20px;\n}\n#table[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px;\n}\n.thirdPage-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n.thirdPage-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .headerImage[_ngcontent-%COMP%], .thirdPage-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .headerImage[_ngcontent-%COMP%], .thirdPage-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .footerImage[_ngcontent-%COMP%], .thirdPage-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .footerImage[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n.thirdPage-container[_ngcontent-%COMP%]   .thirdPage-form[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  flex: 1;\n  margin-top: 30px;\n}\n.thirdPage-container[_ngcontent-%COMP%]   .thirdPage-form[_ngcontent-%COMP%]   .titleLabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 155px;\n  margin-bottom: 15px;\n  font-family: 'Roboto';\n  font-size: 22px;\n}\n.thirdPage-container[_ngcontent-%COMP%]   .thirdPage-form[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  min-height: 25px;\n  min-width: 270px;\n  font-family: 'Roboto';\n  font-size: 20px;\n}\n.thirdPage-container[_ngcontent-%COMP%]   .thirdPage-form[_ngcontent-%COMP%]   .buttonThirdPage[_ngcontent-%COMP%] {\n  height: 30px;\n  border-radius: 17px;\n  margin-bottom: 15px;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid transparent;\n  color: #f0f0fc;\n  background-color: #7e3d9c;\n  border-color: #7e3d9c;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  height: 55px;\n  width: 65px;\n  font-size: 1.2rem;\n}\n.buttonThirdPage[_ngcontent-%COMP%]:active, .buttonThirdPage[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5jb21wb25lbnQubGVzcyIsInRoaXJkLXBhZ2UuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFFQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGVBQUE7QUNMSjtBRFFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNOSjtBRFNBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFFQSxxQkFBQTtFQUNBLGVBQUE7QUNSSjtBRFdBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLHFCQUFBO0VBQ0EsZUFBQTtBQ1ZKO0FEYUE7RUFDSSxrQkFBQTtFQUVBLFVBQUE7RUFFQSxxQkFBQTtFQUNBLGVBQUE7QUNiSjtBRGdCQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNkSjtBQTFDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBNENKO0FBL0NBOzs7O0VBT1EsZUFBQTtFQUNBLGdCQUFBO0FBOENSO0FBdERBO0VEbUJJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VDVEcsT0FBQTtFQUNBLGdCQUFBO0FBZ0RQO0FBL0RBO0VEMkJJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBRUEscUJBQUE7RUFDQSxlQUFBO0FDc0NKO0FBdEVBO0VEb0NJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxxQkFBQTtFQUNBLGVBQUE7QUNvQ0o7QUE1RUE7RURFSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFFQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGVBQUE7RUNhTyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBOERYO0FBeERBOztFQUNJLHdCQUFBO0FBMkRKIiwiZmlsZSI6InRoaXJkLXBhZ2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZ3JhZGllbnRXaGl0ZTogI2YwZjBmYztcbkBwdXBybGU6ICM3ZTNkOWM7XG5cbiNidXR0b24ge1xuICAgIGhlaWdodDozMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgXG4gICAgY29sb3I6IEBncmFkaWVudFdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBwdXBybGU7XG4gICAgYm9yZGVyLWNvbG9yOiBAcHVwcmxlO1xuICBcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2NvbnRlbnQge1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbiN0aXRsZUxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDE1NXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG5cbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4jaW5wdXQge1xuICAgIG1pbi1oZWlnaHQ6IDI1cHg7XG4gICAgbWluLXdpZHRoOiAyNzBweDtcblxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbiNlcnJvcklucHV0IHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG5cbiAgICBjb2xvcjogcmVkO1xuXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI3RhYmxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xufSIsIkBpbXBvcnQgJy4uL2FwcC5jb21wb25lbnQubGVzcyc7XG5cbi50aGlyZFBhZ2UtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG5cbiAgICAuaGVhZGVyLC5mb290ZXIge1xuICAgICAgICAuaGVhZGVySW1hZ2UsIC5mb290ZXJJbWFnZSB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50aGlyZFBhZ2UtZm9ybSB7XG4gICAgICAgI2NvbnRlbnQ7XG4gICAgICAgZmxleDogMTtcbiAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuXG4gICAgICAgLnRpdGxlTGFiZWwge1xuICAgICAgICAjdGl0bGVMYWJlbDtcbiAgICAgICB9XG5cbiAgICAgICAuaW5wdXQge1xuICAgICAgICAgICAjaW5wdXQ7XG4gICAgICAgfVxuXG4gICAgICAgLmJ1dHRvblRoaXJkUGFnZSB7XG4gICAgICAgICAgICNidXR0b247XG5cbiAgICAgICAgICAgaGVpZ2h0OiA1NXB4O1xuICAgICAgICAgICB3aWR0aDogNjVweDtcbiAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgfVxuICAgIH1cblxufVxuXG4uYnV0dG9uVGhpcmRQYWdlOmFjdGl2ZSwgLmJ1dHRvblRoaXJkUGFnZTpmb2N1cyAgIHsgXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgfVxuIl19 */"], changeDetection: 0 });


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
    ngOnInit() { }
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#button[_ngcontent-%COMP%] {\n  height: 30px;\n  border-radius: 17px;\n  margin-bottom: 15px;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid transparent;\n  color: #f0f0fc;\n  background-color: #7e3d9c;\n  border-color: #7e3d9c;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n#content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n#titleLabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 155px;\n  margin-bottom: 15px;\n  font-family: 'Roboto';\n  font-size: 22px;\n}\n#input[_ngcontent-%COMP%] {\n  min-height: 25px;\n  min-width: 270px;\n  font-family: 'Roboto';\n  font-size: 20px;\n}\n#errorInput[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  color: red;\n  font-family: 'Roboto';\n  font-size: 20px;\n}\n#table[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px;\n}\nimg.background[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  min-height: 100%;\n  min-width: 640px;\n  width: 100%;\n  height: auto;\n}\n@media screen and (max-width: 640px) {\n  img.background[_ngcontent-%COMP%]   img.bg[_ngcontent-%COMP%] {\n    left: 50%;\n    margin-left: -320px;\n  }\n}\n.body[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: absolute;\n  top: 25%;\n  left: 40%;\n  color: #f0f0fc;\n  font-family: 'Roboto';\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 400;\n}\n.body[_ngcontent-%COMP%]   .buttonGroups[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n.body[_ngcontent-%COMP%]   .buttonGroups[_ngcontent-%COMP%]   .secondPage[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .buttonGroups[_ngcontent-%COMP%]   .thirdPage[_ngcontent-%COMP%] {\n  height: 30px;\n  border-radius: 17px;\n  margin-bottom: 15px;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid transparent;\n  color: #f0f0fc;\n  background-color: #7e3d9c;\n  border-color: #7e3d9c;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.secondPage[_ngcontent-%COMP%]:active, .secondPage[_ngcontent-%COMP%]:focus, .thirdPage[_ngcontent-%COMP%]:active, .thirdPage[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5jb21wb25lbnQubGVzcyIsImZpcnN0LXBhZ2UuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFFQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGVBQUE7QUNMSjtBRFFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNOSjtBRFNBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFFQSxxQkFBQTtFQUNBLGVBQUE7QUNSSjtBRFdBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLHFCQUFBO0VBQ0EsZUFBQTtBQ1ZKO0FEYUE7RUFDSSxrQkFBQTtFQUVBLFVBQUE7RUFFQSxxQkFBQTtFQUNBLGVBQUE7QUNiSjtBRGdCQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNkSjtBQTFDQztFQUNHLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUVBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQTJDSjtBQXpDSTtFQUFBO0lBRUksU0FBQTtJQUVBLG1CQUFBO0VBMENOO0FBQ0Y7QUF0Q0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLGNBQUE7RUFFQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBc0NKO0FBakRFO0VBY00sYUFBQTtFQUNBLDZCQUFBO0FBc0NSO0FBckRFOztFRGpCRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFFQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGVBQUE7QUN1RUo7QUE1Q0U7Ozs7RUFDRSx3QkFBQTtBQWlESiIsImZpbGUiOiJmaXJzdC1wYWdlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGdyYWRpZW50V2hpdGU6ICNmMGYwZmM7XG5AcHVwcmxlOiAjN2UzZDljO1xuXG4jYnV0dG9uIHtcbiAgICBoZWlnaHQ6MzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIFxuICAgIGNvbG9yOiBAZ3JhZGllbnRXaGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAcHVwcmxlO1xuICAgIGJvcmRlci1jb2xvcjogQHB1cHJsZTtcbiAgXG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNjb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4jdGl0bGVMYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxNTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuI2lucHV0IHtcbiAgICBtaW4taGVpZ2h0OiAyNXB4O1xuICAgIG1pbi13aWR0aDogMjcwcHg7XG5cbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jZXJyb3JJbnB1dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuXG4gICAgY29sb3I6IHJlZDtcblxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbiN0YWJsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbn0iLCIgQGltcG9ydCAnLi4vYXBwLmNvbXBvbmVudC5sZXNzJztcbiBcbiBpbWcuYmFja2dyb3VuZCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuXG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDY0MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KXtcbiAgICAgIGltZy5iZyB7XG4gICAgICAgIGxlZnQ6IDUwJTtcblxuICAgICAgICBtYXJnaW4tbGVmdDogLTMyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5ib2R5IHtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6MjUlO1xuICAgIGxlZnQ6NDAlO1xuXG4gICAgY29sb3I6IEBncmFkaWVudFdoaXRlO1xuXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgIC5idXR0b25Hcm91cHMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblxuICAgICAgICAuc2Vjb25kUGFnZSwgLnRoaXJkUGFnZSB7XG4gICAgICAgICAgICAjYnV0dG9uO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnNlY29uZFBhZ2U6YWN0aXZlLCAuc2Vjb25kUGFnZTpmb2N1cywgLnRoaXJkUGFnZTphY3RpdmUsIC50aGlyZFBhZ2U6Zm9jdXMgICB7IFxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgIH0iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ "KNFn":
/*!**********************************************************!*\
  !*** ./src/app/checkbox-user/checkbox-user.component.ts ***!
  \**********************************************************/
/*! exports provided: CheckboxUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxUserComponent", function() { return CheckboxUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


class CheckboxUserComponent {
    constructor() { }
    ngOnInit() {
    }
}
CheckboxUserComponent.ɵfac = function CheckboxUserComponent_Factory(t) { return new (t || CheckboxUserComponent)(); };
CheckboxUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckboxUserComponent, selectors: [["app-checkbox-user"]], inputs: { control: "control", id: "id", class: "class", classLabel: "classLabel", textLabel: "textLabel" }, decls: 4, vars: 8, consts: [[3, "for"], ["type", "checkbox", 3, "id", "formControl"]], template: function CheckboxUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.textLabel, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.class);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("formControl", ctx.control);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], styles: ["#button[_ngcontent-%COMP%] {\n  height: 30px;\n  border-radius: 17px;\n  margin-bottom: 15px;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid transparent;\n  color: #f0f0fc;\n  background-color: #7e3d9c;\n  border-color: #7e3d9c;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n#content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n#titleLabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 155px;\n  margin-bottom: 15px;\n  font-family: 'Roboto';\n  font-size: 22px;\n}\n#input[_ngcontent-%COMP%] {\n  min-height: 25px;\n  min-width: 270px;\n  font-family: 'Roboto';\n  font-size: 20px;\n}\n#errorInput[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  color: red;\n  font-family: 'Roboto';\n  font-size: 20px;\n}\n#table[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px;\n}\n.input[_ngcontent-%COMP%] {\n  min-height: 25px;\n  min-width: 270px;\n  font-family: 'Roboto';\n  font-size: 20px;\n}\n.titleLabel[_ngcontent-%COMP%], .titleLabelRequired[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 155px;\n  margin-bottom: 15px;\n  font-family: 'Roboto';\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5jb21wb25lbnQubGVzcyIsImNoZWNrYm94LXVzZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFFQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGVBQUE7QUNMSjtBRFFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNOSjtBRFNBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFFQSxxQkFBQTtFQUNBLGVBQUE7QUNSSjtBRFdBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLHFCQUFBO0VBQ0EsZUFBQTtBQ1ZKO0FEYUE7RUFDSSxrQkFBQTtFQUVBLFVBQUE7RUFFQSxxQkFBQTtFQUNBLGVBQUE7QUNiSjtBRGdCQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNkSjtBQXpDTztFRG1DSCxnQkFBQTtFQUNBLGdCQUFBO0VBRUEscUJBQUE7RUFDQSxlQUFBO0FDUUo7QUEzQ087O0VEc0JILHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBRUEscUJBQUE7RUFDQSxlQUFBO0FDd0JKIiwiZmlsZSI6ImNoZWNrYm94LXVzZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZ3JhZGllbnRXaGl0ZTogI2YwZjBmYztcbkBwdXBybGU6ICM3ZTNkOWM7XG5cbiNidXR0b24ge1xuICAgIGhlaWdodDozMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgXG4gICAgY29sb3I6IEBncmFkaWVudFdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBwdXBybGU7XG4gICAgYm9yZGVyLWNvbG9yOiBAcHVwcmxlO1xuICBcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2NvbnRlbnQge1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbiN0aXRsZUxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDE1NXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG5cbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4jaW5wdXQge1xuICAgIG1pbi1oZWlnaHQ6IDI1cHg7XG4gICAgbWluLXdpZHRoOiAyNzBweDtcblxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbiNlcnJvcklucHV0IHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG5cbiAgICBjb2xvcjogcmVkO1xuXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI3RhYmxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xufSIsIkBpbXBvcnQgJy4uL2FwcC5jb21wb25lbnQubGVzcyc7XG5cblxuICAgICAgIC5pbnB1dCB7XG4gICAgICAgICAgICNpbnB1dDtcbiAgICAgICB9XG5cbiAgICAgICAudGl0bGVMYWJlbCwgLnRpdGxlTGFiZWxSZXF1aXJlZCB7XG4gICAgICAgICN0aXRsZUxhYmVsO1xuICAgICAgIH0iXX0= */"], changeDetection: 0 });


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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["#button[_ngcontent-%COMP%] {\n  height: 30px;\n  border-radius: 17px;\n  margin-bottom: 15px;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid transparent;\n  color: #f0f0fc;\n  background-color: #7e3d9c;\n  border-color: #7e3d9c;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n#content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n#titleLabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 155px;\n  margin-bottom: 15px;\n  font-family: 'Roboto';\n  font-size: 22px;\n}\n#input[_ngcontent-%COMP%] {\n  min-height: 25px;\n  min-width: 270px;\n  font-family: 'Roboto';\n  font-size: 20px;\n}\n#errorInput[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  color: red;\n  font-family: 'Roboto';\n  font-size: 20px;\n}\n#table[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUVBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZUFBQTtBQUxKO0FBUUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQU5KO0FBU0E7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUVBLHFCQUFBO0VBQ0EsZUFBQTtBQVJKO0FBV0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEscUJBQUE7RUFDQSxlQUFBO0FBVko7QUFhQTtFQUNJLGtCQUFBO0VBRUEsVUFBQTtFQUVBLHFCQUFBO0VBQ0EsZUFBQTtBQWJKO0FBZ0JBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQWRKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBncmFkaWVudFdoaXRlOiAjZjBmMGZjO1xuQHB1cHJsZTogIzdlM2Q5YztcblxuI2J1dHRvbiB7XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBcbiAgICBjb2xvcjogQGdyYWRpZW50V2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQHB1cHJsZTtcbiAgICBib3JkZXItY29sb3I6IEBwdXBybGU7XG4gIFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jY29udGVudCB7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuI3RpdGxlTGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTU1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcblxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBmb250LXNpemU6IDIycHg7XG59XG5cbiNpbnB1dCB7XG4gICAgbWluLWhlaWdodDogMjVweDtcbiAgICBtaW4td2lkdGg6IDI3MHB4O1xuXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI2Vycm9ySW5wdXQge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcblxuICAgIGNvbG9yOiByZWQ7XG5cbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jdGFibGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG59Il19 */"] });


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
/* harmony import */ var _input_user_input_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./input-user/input-user.component */ "lBj9");
/* harmony import */ var _checkbox_user_checkbox_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./checkbox-user/checkbox-user.component */ "KNFn");
/* harmony import */ var _select_user_select_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./select-user/select-user.component */ "hHar");
/* harmony import */ var _user_table_user_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-table/user-table.component */ "rKFv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");
















const appRoutes = [
    { path: '', component: _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_5__["FirstPageComponent"] },
    { path: 'second-page', component: _second_page_second_page_component__WEBPACK_IMPORTED_MODULE_6__["SecondPageComponent"] },
    { path: 'third-page', component: _third_page_third_page_component__WEBPACK_IMPORTED_MODULE_7__["ThirdPageComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"] }
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_5__["FirstPageComponent"],
        _second_page_second_page_component__WEBPACK_IMPORTED_MODULE_6__["SecondPageComponent"],
        _third_page_third_page_component__WEBPACK_IMPORTED_MODULE_7__["ThirdPageComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
        _input_user_input_user_component__WEBPACK_IMPORTED_MODULE_9__["InputUserComponent"],
        _checkbox_user_checkbox_user_component__WEBPACK_IMPORTED_MODULE_10__["CheckboxUserComponent"],
        _select_user_select_user_component__WEBPACK_IMPORTED_MODULE_11__["SelectUserComponent"],
        _user_table_user_table_component__WEBPACK_IMPORTED_MODULE_12__["UserTableComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetComponentScope"](_third_page_third_page_component__WEBPACK_IMPORTED_MODULE_7__["ThirdPageComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _select_user_select_user_component__WEBPACK_IMPORTED_MODULE_11__["SelectUserComponent"],
    _checkbox_user_checkbox_user_component__WEBPACK_IMPORTED_MODULE_10__["CheckboxUserComponent"],
    _user_table_user_table_component__WEBPACK_IMPORTED_MODULE_12__["UserTableComponent"]], []);


/***/ }),

/***/ "ZXOp":
/*!******************************************************!*\
  !*** ./src/app/second-page/second-page.component.ts ***!
  \******************************************************/
/*! exports provided: UserEnum, users, SecondPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEnum", function() { return UserEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users", function() { return users; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondPageComponent", function() { return SecondPageComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/user.model */ "1PcF");
/* harmony import */ var _ages_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ages.validators */ "eb8e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _input_user_input_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../input-user/input-user.component */ "lBj9");







function SecondPageComponent_app_input_user_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-input-user", 10);
} if (rf & 2) {
    const input_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("input");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("classLabel", input_r1.classLabel)("textLabel", input_r1.textLabel)("id", input_r1.id)("control", ctx_r0.getControl(input_r1.id));
} }
var UserEnum;
(function (UserEnum) {
    UserEnum["FirstName"] = "FirstName";
    UserEnum["LastName"] = "LastName";
    UserEnum["Ages"] = "Ages";
    UserEnum["Email"] = "Email";
    UserEnum["Password"] = "Password";
})(UserEnum || (UserEnum = {}));
;
const users = [];
class SecondPageComponent {
    constructor() {
        this.UserEnum = UserEnum;
        this.inputArray = [
            { classLabel: 'titleLabelRequired', textLabel: 'First Name', id: UserEnum.FirstName },
            { classLabel: 'titleLabel', textLabel: 'Last Name', id: UserEnum.LastName },
            { classLabel: 'titleLabel', textLabel: 'Ages', id: UserEnum.Ages },
            { classLabel: 'titleLabelRequired', textLabel: 'Email', id: UserEnum.Email },
            { classLabel: 'titleLabelRequired', textLabel: 'Password', id: UserEnum.Password },
        ];
    }
    ngOnInit() {
        console.log(users);
        this.secondPageForm = this.createFormGroup();
    }
    getControl(name) {
        var _a;
        return (_a = this.secondPageForm) === null || _a === void 0 ? void 0 : _a.get(name);
    }
    get UserData() {
        const formValue = this.secondPageForm.value;
        return {
            firstName: formValue[UserEnum.FirstName],
            lastName: formValue[UserEnum.LastName],
            ages: formValue[UserEnum.Ages],
            email: formValue[UserEnum.Email],
            password: formValue[UserEnum.Password]
        };
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            [UserEnum.FirstName]: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            [UserEnum.LastName]: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
            [UserEnum.Ages]: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _ages_validators__WEBPACK_IMPORTED_MODULE_2__["AgesInputValidators"].cannotContainCharacters),
            [UserEnum.Email]: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            [UserEnum.Password]: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        });
    }
    addPersonalInfo() {
        users.push(new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"](this.UserData));
        this.secondPageForm.reset();
        console.log(users);
    }
}
SecondPageComponent.ɵfac = function SecondPageComponent_Factory(t) { return new (t || SecondPageComponent)(); };
SecondPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SecondPageComponent, selectors: [["app-second-page"]], decls: 11, vars: 3, consts: [[1, "secondPage-container"], [1, "header"], ["src", "./assets/headerfooter.jpg", 1, "headerImage"], [1, "secondPage-form", 3, "formGroup"], [1, "secondPage-content"], [3, "class", "classLabel", "textLabel", "id", "control", 4, "ngFor", "ngForOf"], [1, "action"], ["type", "submit", 1, "buttonSecondPage", 3, "disabled", "click"], [1, "footer"], ["src", "./assets/headerfooter.jpg", 1, "footerImage"], [3, "classLabel", "textLabel", "id", "control"]], template: function SecondPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SecondPageComponent_app_input_user_5_Template, 1, 6, "app-input-user", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SecondPageComponent_Template_button_click_7_listener() { return ctx.addPersonalInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.secondPageForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.inputArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.secondPageForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _input_user_input_user_component__WEBPACK_IMPORTED_MODULE_5__["InputUserComponent"]], styles: ["#button[_ngcontent-%COMP%] {\n  height: 30px;\n  border-radius: 17px;\n  margin-bottom: 15px;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid transparent;\n  color: #f0f0fc;\n  background-color: #7e3d9c;\n  border-color: #7e3d9c;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n#content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n#titleLabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 155px;\n  margin-bottom: 15px;\n  font-family: 'Roboto';\n  font-size: 22px;\n}\n#input[_ngcontent-%COMP%] {\n  min-height: 25px;\n  min-width: 270px;\n  font-family: 'Roboto';\n  font-size: 20px;\n}\n#errorInput[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  color: red;\n  font-family: 'Roboto';\n  font-size: 20px;\n}\n#table[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px;\n}\n.secondPage-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n.secondPage-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .headerImage[_ngcontent-%COMP%], .secondPage-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .headerImage[_ngcontent-%COMP%], .secondPage-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .footerImage[_ngcontent-%COMP%], .secondPage-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .footerImage[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n.secondPage-container[_ngcontent-%COMP%]   .secondPage-form[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  flex: 1;\n  margin-top: 30px;\n}\n.secondPage-container[_ngcontent-%COMP%]   .secondPage-form[_ngcontent-%COMP%]   .buttonSecondPage[_ngcontent-%COMP%] {\n  height: 30px;\n  border-radius: 17px;\n  margin-bottom: 15px;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid transparent;\n  color: #f0f0fc;\n  background-color: #7e3d9c;\n  border-color: #7e3d9c;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  height: 55px;\n  width: 65px;\n  font-size: 1.2rem;\n}\n.buttonSecondPage[_ngcontent-%COMP%]:active, .buttonSecondPage[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5jb21wb25lbnQubGVzcyIsInNlY29uZC1wYWdlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBRUEsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSxlQUFBO0FDTEo7QURRQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDTko7QURTQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBRUEscUJBQUE7RUFDQSxlQUFBO0FDUko7QURXQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxxQkFBQTtFQUNBLGVBQUE7QUNWSjtBRGFBO0VBQ0ksa0JBQUE7RUFFQSxVQUFBO0VBRUEscUJBQUE7RUFDQSxlQUFBO0FDYko7QURnQkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDZEo7QUExQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQTRDSjtBQS9DQTs7OztFQU9RLGVBQUE7RUFDQSxnQkFBQTtBQThDUjtBQXREQTtFRG1CSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQ1JHLE9BQUE7RUFDQSxnQkFBQTtBQStDUDtBQS9EQTtFREVJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUVBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZUFBQTtFQ01PLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUF3RFg7QUFsREE7O0VBQ0ksd0JBQUE7QUFxREoiLCJmaWxlIjoic2Vjb25kLXBhZ2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZ3JhZGllbnRXaGl0ZTogI2YwZjBmYztcbkBwdXBybGU6ICM3ZTNkOWM7XG5cbiNidXR0b24ge1xuICAgIGhlaWdodDozMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgXG4gICAgY29sb3I6IEBncmFkaWVudFdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBwdXBybGU7XG4gICAgYm9yZGVyLWNvbG9yOiBAcHVwcmxlO1xuICBcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2NvbnRlbnQge1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbiN0aXRsZUxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDE1NXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG5cbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4jaW5wdXQge1xuICAgIG1pbi1oZWlnaHQ6IDI1cHg7XG4gICAgbWluLXdpZHRoOiAyNzBweDtcblxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbiNlcnJvcklucHV0IHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG5cbiAgICBjb2xvcjogcmVkO1xuXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI3RhYmxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xufSIsIkBpbXBvcnQgJy4uL2FwcC5jb21wb25lbnQubGVzcyc7XG5cbi5zZWNvbmRQYWdlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuXG4gICAgLmhlYWRlciwuZm9vdGVyIHtcbiAgICAgICAgLmhlYWRlckltYWdlLCAuZm9vdGVySW1hZ2Uge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2Vjb25kUGFnZS1mb3JtIHtcbiAgICAgICAjY29udGVudDtcbiAgICAgICBcbiAgICAgICBmbGV4OiAxO1xuICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgICAgICAuYnV0dG9uU2Vjb25kUGFnZSB7XG4gICAgICAgICAgICNidXR0b247XG5cbiAgICAgICAgICAgaGVpZ2h0OiA1NXB4O1xuICAgICAgICAgICB3aWR0aDogNjVweDtcbiAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgfVxuICAgIH1cblxufVxuXG4uYnV0dG9uU2Vjb25kUGFnZTphY3RpdmUsIC5idXR0b25TZWNvbmRQYWdlOmZvY3VzICAgeyBcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICB9XG4iXX0= */"], changeDetection: 0 });


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

/***/ "hHar":
/*!******************************************************!*\
  !*** ./src/app/select-user/select-user.component.ts ***!
  \******************************************************/
/*! exports provided: SelectUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectUserComponent", function() { return SelectUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function SelectUserComponent_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", value_r1.value, " ");
} }
class SelectUserComponent {
    constructor() { }
    ngOnInit() {
    }
}
SelectUserComponent.ɵfac = function SelectUserComponent_Factory(t) { return new (t || SelectUserComponent)(); };
SelectUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectUserComponent, selectors: [["app-select-user"]], inputs: { control: "control", valuesArray: "valuesArray", classLabel: "classLabel", id: "id", textLabel: "textLabel", class: "class" }, decls: 5, vars: 9, consts: [[3, "for"], [3, "id", "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SelectUserComponent_option_4_Template, 2, 2, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.textLabel, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.class);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("formControl", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.valuesArray);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"]], styles: ["#button[_ngcontent-%COMP%] {\n  height: 30px;\n  border-radius: 17px;\n  margin-bottom: 15px;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid transparent;\n  color: #f0f0fc;\n  background-color: #7e3d9c;\n  border-color: #7e3d9c;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n#content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n#titleLabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 155px;\n  margin-bottom: 15px;\n  font-family: 'Roboto';\n  font-size: 22px;\n}\n#input[_ngcontent-%COMP%] {\n  min-height: 25px;\n  min-width: 270px;\n  font-family: 'Roboto';\n  font-size: 20px;\n}\n#errorInput[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  color: red;\n  font-family: 'Roboto';\n  font-size: 20px;\n}\n#table[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px;\n}\n.input[_ngcontent-%COMP%] {\n  min-height: 25px;\n  min-width: 270px;\n  font-family: 'Roboto';\n  font-size: 20px;\n}\n.titleLabel[_ngcontent-%COMP%], .titleLabelRequired[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 155px;\n  margin-bottom: 15px;\n  font-family: 'Roboto';\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5jb21wb25lbnQubGVzcyIsInNlbGVjdC11c2VyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBRUEsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSxlQUFBO0FDTEo7QURRQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDTko7QURTQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBRUEscUJBQUE7RUFDQSxlQUFBO0FDUko7QURXQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxxQkFBQTtFQUNBLGVBQUE7QUNWSjtBRGFBO0VBQ0ksa0JBQUE7RUFFQSxVQUFBO0VBRUEscUJBQUE7RUFDQSxlQUFBO0FDYko7QURnQkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDZEo7QUF6Q087RURtQ0gsZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLHFCQUFBO0VBQ0EsZUFBQTtBQ1FKO0FBM0NPOztFRHNCSCxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUVBLHFCQUFBO0VBQ0EsZUFBQTtBQ3dCSiIsImZpbGUiOiJzZWxlY3QtdXNlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBncmFkaWVudFdoaXRlOiAjZjBmMGZjO1xuQHB1cHJsZTogIzdlM2Q5YztcblxuI2J1dHRvbiB7XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBcbiAgICBjb2xvcjogQGdyYWRpZW50V2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQHB1cHJsZTtcbiAgICBib3JkZXItY29sb3I6IEBwdXBybGU7XG4gIFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jY29udGVudCB7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuI3RpdGxlTGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTU1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcblxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBmb250LXNpemU6IDIycHg7XG59XG5cbiNpbnB1dCB7XG4gICAgbWluLWhlaWdodDogMjVweDtcbiAgICBtaW4td2lkdGg6IDI3MHB4O1xuXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI2Vycm9ySW5wdXQge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcblxuICAgIGNvbG9yOiByZWQ7XG5cbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jdGFibGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG59IiwiQGltcG9ydCAnLi4vYXBwLmNvbXBvbmVudC5sZXNzJztcblxuXG4gICAgICAgLmlucHV0IHtcbiAgICAgICAgICAgI2lucHV0O1xuICAgICAgIH1cblxuICAgICAgIC50aXRsZUxhYmVsLCAudGl0bGVMYWJlbFJlcXVpcmVkIHtcbiAgICAgICAgI3RpdGxlTGFiZWw7XG4gICAgICAgfSJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "lBj9":
/*!****************************************************!*\
  !*** ./src/app/input-user/input-user.component.ts ***!
  \****************************************************/
/*! exports provided: InputUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputUserComponent", function() { return InputUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function InputUserComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ages cannot contain characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputUserComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.textLabel, " is required");
} }
function InputUserComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email should have email format");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputUserComponent_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Password length should be at least ", ctx_r4.control.errors.minlength.requiredLength, " symbols. Now ", ctx_r4.control.errors.minlength.actualLength, ". ");
} }
function InputUserComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputUserComponent_div_4_div_1_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InputUserComponent_div_4_div_2_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InputUserComponent_div_4_div_3_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InputUserComponent_div_4_div_4_Template, 2, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.control.errors.cannotContainCharacters);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.control.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.control.errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.control.errors.minlength && ctx_r0.control.errors.minlength.requiredLength);
} }
class InputUserComponent {
    constructor() { }
    ngOnInit() { }
}
InputUserComponent.ɵfac = function InputUserComponent_Factory(t) { return new (t || InputUserComponent)(); };
InputUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputUserComponent, selectors: [["app-input-user"]], inputs: { control: "control", id: "id", class: "class", classLabel: "classLabel", textLabel: "textLabel", type: "type" }, decls: 5, vars: 10, consts: [[3, "for"], [3, "type", "id", "formControl"], ["class", "errorInput", 4, "ngIf"], [1, "errorInput"], [4, "ngIf"]], template: function InputUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InputUserComponent_div_4_Template, 5, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.textLabel, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.class);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.id === "Password" ? "password" : "text")("id", ctx.id)("formControl", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.control.touched && ctx.control.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["#button[_ngcontent-%COMP%] {\n  height: 30px;\n  border-radius: 17px;\n  margin-bottom: 15px;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid transparent;\n  color: #f0f0fc;\n  background-color: #7e3d9c;\n  border-color: #7e3d9c;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n#content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n#titleLabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 155px;\n  margin-bottom: 15px;\n  font-family: 'Roboto';\n  font-size: 22px;\n}\n#input[_ngcontent-%COMP%] {\n  min-height: 25px;\n  min-width: 270px;\n  font-family: 'Roboto';\n  font-size: 20px;\n}\n#errorInput[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  color: red;\n  font-family: 'Roboto';\n  font-size: 20px;\n}\n#table[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px;\n}\n.input[_ngcontent-%COMP%] {\n  min-height: 25px;\n  min-width: 270px;\n  font-family: 'Roboto';\n  font-size: 20px;\n}\n.titleLabel[_ngcontent-%COMP%], .titleLabelRequired[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 155px;\n  margin-bottom: 15px;\n  font-family: 'Roboto';\n  font-size: 22px;\n}\n.errorInput[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  color: red;\n  font-family: 'Roboto';\n  font-size: 20px;\n}\n.titleLabelRequired[_ngcontent-%COMP%]::after {\n  content: '*';\n  color: #ff1010;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5jb21wb25lbnQubGVzcyIsImlucHV0LXVzZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFFQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGVBQUE7QUNMSjtBRFFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNOSjtBRFNBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFFQSxxQkFBQTtFQUNBLGVBQUE7QUNSSjtBRFdBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLHFCQUFBO0VBQ0EsZUFBQTtBQ1ZKO0FEYUE7RUFDSSxrQkFBQTtFQUVBLFVBQUE7RUFFQSxxQkFBQTtFQUNBLGVBQUE7QUNiSjtBRGdCQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNkSjtBQXpDTztFRG1DSCxnQkFBQTtFQUNBLGdCQUFBO0VBRUEscUJBQUE7RUFDQSxlQUFBO0FDUUo7QUEzQ087O0VEc0JILHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBRUEscUJBQUE7RUFDQSxlQUFBO0FDd0JKO0FBL0NPO0VEbUNILGtCQUFBO0VBRUEsVUFBQTtFQUVBLHFCQUFBO0VBQ0EsZUFBQTtBQ2FKO0FBakRPO0VBQ0MsWUFBQTtFQUNBLGNBQUE7QUFtRFIiLCJmaWxlIjoiaW5wdXQtdXNlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBncmFkaWVudFdoaXRlOiAjZjBmMGZjO1xuQHB1cHJsZTogIzdlM2Q5YztcblxuI2J1dHRvbiB7XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBcbiAgICBjb2xvcjogQGdyYWRpZW50V2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQHB1cHJsZTtcbiAgICBib3JkZXItY29sb3I6IEBwdXBybGU7XG4gIFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jY29udGVudCB7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuI3RpdGxlTGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTU1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcblxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBmb250LXNpemU6IDIycHg7XG59XG5cbiNpbnB1dCB7XG4gICAgbWluLWhlaWdodDogMjVweDtcbiAgICBtaW4td2lkdGg6IDI3MHB4O1xuXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI2Vycm9ySW5wdXQge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcblxuICAgIGNvbG9yOiByZWQ7XG5cbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jdGFibGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG59IiwiQGltcG9ydCAnLi4vYXBwLmNvbXBvbmVudC5sZXNzJztcblxuXG4gICAgICAgLmlucHV0IHtcbiAgICAgICAgICAgI2lucHV0O1xuICAgICAgIH1cblxuICAgICAgIC50aXRsZUxhYmVsLCAudGl0bGVMYWJlbFJlcXVpcmVkIHtcbiAgICAgICAgI3RpdGxlTGFiZWw7XG4gICAgICAgfVxuXG4gICAgICAgLmVycm9ySW5wdXQge1xuICAgICAgICAgICAjZXJyb3JJbnB1dDtcbiAgICAgICB9XG5cbiAgICAgICAudGl0bGVMYWJlbFJlcXVpcmVkOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcqJztcbiAgICAgICAgY29sb3I6ICNmZjEwMTA7XG4gICAgICAgfSJdfQ== */"], changeDetection: 0 });


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
    ngOnInit() { }
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
    } }, styles: ["#button[_ngcontent-%COMP%] {\n  height: 30px;\n  border-radius: 17px;\n  margin-bottom: 15px;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid transparent;\n  color: #f0f0fc;\n  background-color: #7e3d9c;\n  border-color: #7e3d9c;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n#content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n#titleLabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 155px;\n  margin-bottom: 15px;\n  font-family: 'Roboto';\n  font-size: 22px;\n}\n#input[_ngcontent-%COMP%] {\n  min-height: 25px;\n  min-width: 270px;\n  font-family: 'Roboto';\n  font-size: 20px;\n}\n#errorInput[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  color: red;\n  font-family: 'Roboto';\n  font-size: 20px;\n}\n#table[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px;\n}\n.notFound-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n.notFound-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .headerImage[_ngcontent-%COMP%], .notFound-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .headerImage[_ngcontent-%COMP%], .notFound-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .footerImage[_ngcontent-%COMP%], .notFound-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .footerImage[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n.notFound-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  flex: 1;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5jb21wb25lbnQubGVzcyIsIm5vdC1mb3VuZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUVBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZUFBQTtBQ0xKO0FEUUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ05KO0FEU0E7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUVBLHFCQUFBO0VBQ0EsZUFBQTtBQ1JKO0FEV0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEscUJBQUE7RUFDQSxlQUFBO0FDVko7QURhQTtFQUNJLGtCQUFBO0VBRUEsVUFBQTtFQUVBLHFCQUFBO0VBQ0EsZUFBQTtBQ2JKO0FEZ0JBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ2RKO0FBMUNBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUE0Q0o7QUEvQ0E7Ozs7RUFPUSxlQUFBO0VBQ0EsZ0JBQUE7QUE4Q1I7QUF0REE7RURtQkksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUNUSSxPQUFBO0VBQ0EsZ0JBQUE7QUFnRFIiLCJmaWxlIjoibm90LWZvdW5kLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGdyYWRpZW50V2hpdGU6ICNmMGYwZmM7XG5AcHVwcmxlOiAjN2UzZDljO1xuXG4jYnV0dG9uIHtcbiAgICBoZWlnaHQ6MzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIFxuICAgIGNvbG9yOiBAZ3JhZGllbnRXaGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAcHVwcmxlO1xuICAgIGJvcmRlci1jb2xvcjogQHB1cHJsZTtcbiAgXG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNjb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4jdGl0bGVMYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxNTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuI2lucHV0IHtcbiAgICBtaW4taGVpZ2h0OiAyNXB4O1xuICAgIG1pbi13aWR0aDogMjcwcHg7XG5cbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jZXJyb3JJbnB1dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuXG4gICAgY29sb3I6IHJlZDtcblxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbiN0YWJsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbn0iLCJAaW1wb3J0ICcuLi9hcHAuY29tcG9uZW50Lmxlc3MnO1xuXG4ubm90Rm91bmQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG5cbiAgICAuaGVhZGVyLC5mb290ZXIge1xuICAgICAgICAuaGVhZGVySW1hZ2UsIC5mb290ZXJJbWFnZSB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgICAgI2NvbnRlbnQ7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgfVxufVxuXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ "rKFv":
/*!****************************************************!*\
  !*** ./src/app/user-table/user-table.component.ts ***!
  \****************************************************/
/*! exports provided: UserTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTableComponent", function() { return UserTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function UserTableComponent_ul_0_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const idx_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("User ", idx_r3 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.Male);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.Children === false ? "No" : "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.Job === false ? "No" : "Yes");
} }
function UserTableComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Have children");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Got a job");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserTableComponent_ul_0_li_9_Template, 9, 4, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.usersMore);
} }
class UserTableComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.usersMore);
    }
}
UserTableComponent.ɵfac = function UserTableComponent_Factory(t) { return new (t || UserTableComponent)(); };
UserTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserTableComponent, selectors: [["app-user-table"]], inputs: { usersMore: "usersMore" }, decls: 1, vars: 1, consts: [["class", "user-table", 4, "ngIf"], [1, "user-table"], [1, "user-header"], [1, "titleMale"], [1, "titleChildren"], [1, "titleJob"], ["class", "user-columns", 4, "ngFor", "ngForOf"], [1, "user-columns"], [1, "columnUser"], [1, "columnMale"], [1, "columnChildren"], [1, "columnJob"]], template: function UserTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserTableComponent_ul_0_Template, 10, 1, "ul", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usersMore.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["#button[_ngcontent-%COMP%] {\n  height: 30px;\n  border-radius: 17px;\n  margin-bottom: 15px;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid transparent;\n  color: #f0f0fc;\n  background-color: #7e3d9c;\n  border-color: #7e3d9c;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n#content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n#titleLabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 155px;\n  margin-bottom: 15px;\n  font-family: 'Roboto';\n  font-size: 22px;\n}\n#input[_ngcontent-%COMP%] {\n  min-height: 25px;\n  min-width: 270px;\n  font-family: 'Roboto';\n  font-size: 20px;\n}\n#errorInput[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  color: red;\n  font-family: 'Roboto';\n  font-size: 20px;\n}\n#table[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px;\n}\n.user-table[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-family: 'Roboto';\n  font-size: 20px;\n}\n.user-table[_ngcontent-%COMP%]   .user-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px;\n  border: solid 3px #7e3d9c;\n}\n.user-table[_ngcontent-%COMP%]   .user-header[_ngcontent-%COMP%]   .titleJob[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  flex-basis: 14%;\n}\n.user-table[_ngcontent-%COMP%]   .user-columns[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px;\n}\n.user-table[_ngcontent-%COMP%]   .user-columns[_ngcontent-%COMP%]   .columnMale[_ngcontent-%COMP%], .user-table[_ngcontent-%COMP%]   .user-columns[_ngcontent-%COMP%]   .columnChildren[_ngcontent-%COMP%] {\n  flex-basis: 19%;\n}\n.user-table[_ngcontent-%COMP%]   .user-columns[_ngcontent-%COMP%]   .columnJob[_ngcontent-%COMP%] {\n  flex-basis: 13%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5jb21wb25lbnQubGVzcyIsInVzZXItdGFibGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFFQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGVBQUE7QUNMSjtBRFFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNOSjtBRFNBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFFQSxxQkFBQTtFQUNBLGVBQUE7QUNSSjtBRFdBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLHFCQUFBO0VBQ0EsZUFBQTtBQ1ZKO0FEYUE7RUFDSSxrQkFBQTtFQUVBLFVBQUE7RUFFQSxxQkFBQTtFQUNBLGVBQUE7QUNiSjtBRGdCQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNkSjtBQTFDQTtFRG1CSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQ3BCQSxxQkFBQTtFQUNBLGVBQUE7QUErQ0o7QUFuREE7RURxREksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQy9DSSx5QkFBQTtBQWlEUjtBQTFEQTtFQVlZLG1CQUFBO0VBQ0EsZUFBQTtBQWlEWjtBQTlEQTtFRHFESSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDWUo7QUFwRUE7O0VBc0JZLGVBQUE7QUFrRFo7QUF4RUE7RUEwQlksZUFBQTtBQWlEWiIsImZpbGUiOiJ1c2VyLXRhYmxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGdyYWRpZW50V2hpdGU6ICNmMGYwZmM7XG5AcHVwcmxlOiAjN2UzZDljO1xuXG4jYnV0dG9uIHtcbiAgICBoZWlnaHQ6MzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIFxuICAgIGNvbG9yOiBAZ3JhZGllbnRXaGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAcHVwcmxlO1xuICAgIGJvcmRlci1jb2xvcjogQHB1cHJsZTtcbiAgXG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNjb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4jdGl0bGVMYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxNTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuI2lucHV0IHtcbiAgICBtaW4taGVpZ2h0OiAyNXB4O1xuICAgIG1pbi13aWR0aDogMjcwcHg7XG5cbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jZXJyb3JJbnB1dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuXG4gICAgY29sb3I6IHJlZDtcblxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbiN0YWJsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbn0iLCJAaW1wb3J0ICcuLi9hcHAuY29tcG9uZW50Lmxlc3MnO1xuXG4udXNlci10YWJsZSB7XG4gICAgI2NvbnRlbnQ7XG5cbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuXG4gICAgLnVzZXItaGVhZGVyIHtcbiAgICAgICAgI3RhYmxlO1xuXG4gICAgICAgIGJvcmRlcjogc29saWQgM3B4IEBwdXBybGU7XG5cbiAgICAgICAgLnRpdGxlSm9iIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAxNCU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC51c2VyLWNvbHVtbnN7XG4gICAgICAgICN0YWJsZTtcblxuICAgICAgICAuY29sdW1uTWFsZSwgLmNvbHVtbkNoaWxkcmVuIHtcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDE5JTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb2x1bW5Kb2Ige1xuICAgICAgICAgICAgZmxleC1iYXNpczogMTMlO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });


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