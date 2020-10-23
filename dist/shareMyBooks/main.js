(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Assignment-Veena\shareMyBooks\src\main.ts */"zUnb");


/***/ }),

/***/ "2x93":
/*!**********************************************************!*\
  !*** ./src/app/add-edit-book/add-edit-book.component.ts ***!
  \**********************************************************/
/*! exports provided: AddEditBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditBookComponent", function() { return AddEditBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_actions_books_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/actions/books.actions */ "Et2S");
/* harmony import */ var _store_selectors_books_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/selectors/books.selector */ "RuRp");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function AddEditBookComponent_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Book Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddEditBookComponent_h2_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Book Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddEditBookComponent_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEditBookComponent_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx_r5.OnAddBook(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r2.invalid);
} }
function AddEditBookComponent_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEditBookComponent_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx_r7.OnUpdateBook(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r2.invalid);
} }
class AddEditBookComponent {
    constructor(_store, _router, _route) {
        this._store = _store;
        this._router = _router;
        this._route = _route;
        this.book = {};
        this.addBook = true;
        this.submitted = false;
        this._route.paramMap.subscribe((params) => {
            this.id = params.get('id');
        });
        // Load book details for edit
        if (this.id) {
            this.addBook = false;
            this._store.dispatch(Object(_store_actions_books_actions__WEBPACK_IMPORTED_MODULE_1__["loadBook"])({ bookId: this.id }));
            this._store.select(_store_selectors_books_selector__WEBPACK_IMPORTED_MODULE_2__["getBookDetails"]).subscribe((response) => {
                this.tempBook = response;
                this.book = Object.assign({}, this.tempBook[0]);
            });
        }
    }
    ngOnInit() { }
    // Add book details in server
    OnAddBook(form) {
        this.submitted = true;
        if (form.valid) {
            this._store.dispatch(Object(_store_actions_books_actions__WEBPACK_IMPORTED_MODULE_1__["addBook"])({ book: this.book }));
        }
    }
    // Update book details in server
    OnUpdateBook(form) {
        this.submitted = true;
        if (form.valid) {
            const update = {
                id: this.book.id,
                changes: Object.assign(Object.assign({}, this.book), form.value),
            };
            this._store.dispatch(_store_actions_books_actions__WEBPACK_IMPORTED_MODULE_1__["bookActionTypes"].updateBook({ update }));
        }
    }
}
AddEditBookComponent.ɵfac = function AddEditBookComponent_Factory(t) { return new (t || AddEditBookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
AddEditBookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddEditBookComponent, selectors: [["app-add-edit-book"]], decls: 28, vars: 8, consts: [[1, "formPane"], [1, "formContent"], [1, "formDiv"], ["class", "AddEditHeader", 4, "ngIf"], ["bookForm", "ngForm"], [1, "form-group"], ["for", "title"], ["type", "text", "id", "title", "name", "title", "required", "", 3, "ngModel", "ngModelChange"], ["for", "author"], ["type", "text", "id", "author", "name", "author", "required", "", 3, "ngModel", "ngModelChange"], ["for", "description"], ["type", "text", "rows", "3", "id", "description", "name", "description", "required", "", 3, "ngModel", "ngModelChange"], ["for", "category"], ["type", "text", "id", "category", "name", "category", "required", "", 3, "ngModel", "ngModelChange"], ["class", "btn buttonPrimary", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["routerLink", "/home", 1, "btn", "buttonDanger"], [1, "AddEditHeader"], ["type", "button", 1, "btn", "buttonPrimary", 3, "disabled", "click"]], template: function AddEditBookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddEditBookComponent_h2_3_Template, 2, 0, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AddEditBookComponent_h2_4_Template, 2, 0, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditBookComponent_Template_input_ngModelChange_10_listener($event) { return ctx.book.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditBookComponent_Template_input_ngModelChange_14_listener($event) { return ctx.book.author = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditBookComponent_Template_textarea_ngModelChange_18_listener($event) { return ctx.book.desc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditBookComponent_Template_input_ngModelChange_22_listener($event) { return ctx.book.category = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AddEditBookComponent_button_24_Template, 2, 1, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AddEditBookComponent_button_25_Template, 2, 1, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addBook);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.addBook);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.book.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.book.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.book.desc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.book.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addBook);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.addBook);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".formContent[_ngcontent-%COMP%] {\n  background-color: lightgray;\n  margin: 20px 0;\n  padding: 20px 0;\n}\n.formContent[_ngcontent-%COMP%]   .formDiv[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n.formContent[_ngcontent-%COMP%]   .formDiv[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .formContent[_ngcontent-%COMP%]   .formDiv[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 90%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  min-height: 30px;\n  border-radius: 6px;\n  border: none;\n  font-family: Arial;\n}\n.formContent[_ngcontent-%COMP%]   .formDiv[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .formContent[_ngcontent-%COMP%]   .formDiv[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: darkgray;\n}\n.formContent[_ngcontent-%COMP%]   .formDiv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 15px 0 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWVkaXQtYm9vay9hZGQtZWRpdC1ib29rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0FBQ0o7QUFDSTs7RUFFRSxVQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNOO0FBQ007O0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0FBRVI7QUFFSTtFQUNFLG9CQUFBO0FBQU4iLCJmaWxlIjoic3JjL2FwcC9hZGQtZWRpdC1ib29rL2FkZC1lZGl0LWJvb2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybUNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcblxyXG4gIC5mb3JtRGl2IHtcclxuICAgIG1hcmdpbjogMjBweDtcclxuXHJcbiAgICBpbnB1dCxcclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgICAgbWluLWhlaWdodDogMzBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuXHJcbiAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogZGFya2dyYXk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAxNXB4IDAgNXB4IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEditBookComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-edit-book',
                templateUrl: './add-edit-book.component.html',
                styleUrls: ['./add-edit-book.component.scss'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "9P30":
/*!*************************************************!*\
  !*** ./src/app/store/reducers/books.reducer.ts ***!
  \*************************************************/
/*! exports provided: adapter, initialState, bookReducer, selectAll, selectEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookReducer", function() { return bookReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "R0sL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_books_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/books.actions */ "Et2S");



const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])();
// set book inital state
const initialState = adapter.getInitialState({
    booksLoaded: false,
    selectedBookId: null,
});
const bookReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, 
// books loaded reducer
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_books_actions__WEBPACK_IMPORTED_MODULE_2__["bookActionTypes"].booksLoaded, (state, action) => {
    return adapter.setAll(action.books, Object.assign(Object.assign({}, state), { booksLoaded: true }));
}), 
// book loaded reducer
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_books_actions__WEBPACK_IMPORTED_MODULE_2__["bookActionTypes"].bookLoaded, (state, action) => {
    return adapter.setAll(action.book, Object.assign(Object.assign({}, state), { bookLoaded: true }));
}), 
// add book reducer
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_books_actions__WEBPACK_IMPORTED_MODULE_2__["bookActionTypes"].addBook, (state, action) => {
    return adapter.addOne(action.book, state);
}), 
// delete book reducer
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_books_actions__WEBPACK_IMPORTED_MODULE_2__["bookActionTypes"].deleteBook, (state, action) => {
    return adapter.removeOne(action.bookId, state);
}), 
// update book reducer
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_books_actions__WEBPACK_IMPORTED_MODULE_2__["bookActionTypes"].updateBook, (state, action) => {
    return adapter.updateOne(action.update, state);
}));
const { selectAll, selectEntities } = adapter.getSelectors();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_selectors_login_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/selectors/login.selector */ "rDO7");
/* harmony import */ var _store_selectors_books_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/selectors/books.selector */ "RuRp");
/* harmony import */ var _store_actions_books_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/books.actions */ "Et2S");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








function HomeComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Book");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/addeditbook", a1]; };
function HomeComponent_div_3_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Book");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_3_div_9_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const book_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.OnDeleteBook(book_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Delete Book");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, book_r2.id));
} }
function HomeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_div_3_div_9_Template, 5, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Author: ", book_r2.author, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Description: ", book_r2.desc, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Category: ", book_r2.category, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isLoggedIn);
} }
class HomeComponent {
    constructor(_store) {
        this._store = _store;
    }
    ngOnInit() {
        this._store.dispatch(_store_actions_books_actions__WEBPACK_IMPORTED_MODULE_3__["bookActionTypes"].loadBooks()); // dispatch load books actions
        this._store.select(_store_selectors_books_selector__WEBPACK_IMPORTED_MODULE_2__["getAllBooksList"])
            .subscribe(result => this.books$ = result); // get books list
        this._store.select(_store_selectors_login_selector__WEBPACK_IMPORTED_MODULE_1__["authSelector"])
            .subscribe(state => {
            if (state) {
                this.isLoggedIn = state.isAuthenticated;
            }
        });
    }
    // Delete a book
    OnDeleteBook(bookId) {
        this._store.dispatch(_store_actions_books_actions__WEBPACK_IMPORTED_MODULE_3__["bookActionTypes"].deleteBook({ bookId }));
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 4, vars: 2, consts: [[1, "home-container"], ["routerLink", "/addeditbook", 4, "ngIf"], [1, "card-container"], ["class", "card", 4, "ngFor", "ngForOf"], ["routerLink", "/addeditbook"], [1, "card"], [1, "bk-title"], [1, "bk-author"], [1, "bk-desc"], [1, "bk-category"], ["class", "action-buttons", 4, "ngIf"], [1, "action-buttons"], [3, "routerLink"], [3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_button_1_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 10, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.books$);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], styles: [".home-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-color: #e7f3f2;\n}\n.home-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 5px 10px;\n  border-radius: 10px;\n  box-shadow: 0 0 lightgrey;\n  border: 0.5px solid #57595d;\n}\n.home-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  min-height: 60px;\n  color: #57595d;\n  background-color: #bfd8d8;\n  padding: 10px 20px;\n  margin: 10px 0;\n  box-sizing: border-box;\n}\n.home-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.home-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .bk-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.home-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #cccccc;\n  margin: 5px 10px 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFDRTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQUNKO0FBSUk7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBRk47QUFJTTtFQUNFLGFBQUE7QUFGUjtBQUtNO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQUhSO0FBUVE7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0FBTlYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZjNmMjtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCBsaWdodGdyZXk7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICM1NzU5NWQ7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIge1xyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgbWluLWhlaWdodDogNjBweDtcclxuICAgICAgY29sb3I6ICM1NzU5NWQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiZmQ4ZDg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICBkaXYge1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5iay10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFjdGlvbi1idXR0b25zIHtcclxuICAgICAgICBcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICAgICAgICAgIG1hcmdpbjogNXB4IDEwcHggNXB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, null); })();


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
    production: false,
    BASE_URL: 'http://localhost:3000/'
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

/***/ "E//v":
/*!***********************************************!*\
  !*** ./src/app/services/authguard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuardService {
    constructor(_router) {
        this._router = _router;
        this.accessToken = localStorage.getItem('accessToken');
    }
    // Redirect to login page if not logged in
    canActivate() {
        if (!this.accessToken) {
            this._router.navigateByUrl('/loginregister/login');
        }
        return true;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "Em6w":
/*!****************************************************!*\
  !*** ./src/app/services/login-register.service.ts ***!
  \****************************************************/
/*! exports provided: LoginRegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRegisterService", function() { return LoginRegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class LoginRegisterService {
    constructor(_http) {
        this._http = _http;
        this.registerUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASE_URL + 'register';
        this.loginUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASE_URL + 'login';
    }
    // Set accesstoken to local storage
    setAccessToken(token) {
        localStorage.setItem('accessToken', token);
    }
    // Get accesstoken from local storage
    getAccessToken() {
        return localStorage.getItem('accessToken');
    }
    // Remove accesstoken from local storage
    removeAccessToken() {
        localStorage.removeItem('accessToken');
    }
    // Http call to register a new user
    registerUser(user) {
        return this._http.post(this.registerUrl, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            return data;
        }));
    }
    // Http call to login an existing user
    loginUser(user) {
        return this._http.post(this.loginUrl, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            return data;
        }));
    }
}
LoginRegisterService.ɵfac = function LoginRegisterService_Factory(t) { return new (t || LoginRegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
LoginRegisterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginRegisterService, factory: LoginRegisterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginRegisterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Et2S":
/*!************************************************!*\
  !*** ./src/app/store/actions/books.actions.ts ***!
  \************************************************/
/*! exports provided: loadBooks, booksLoaded, loadBook, bookLoaded, addBook, deleteBook, updateBook, bookActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadBooks", function() { return loadBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "booksLoaded", function() { return booksLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadBook", function() { return loadBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookLoaded", function() { return bookLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBook", function() { return addBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBook", function() { return deleteBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBook", function() { return updateBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookActionTypes", function() { return bookActionTypes; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const loadBooks = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Books List] Load Books List via Service');
const booksLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Books Effect] Books Loaded Successfully', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadBook = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Book List] Load Book via Service', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const bookLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Book Effect] Book Loaded Successfully', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addBook = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Add Book Component] Add Book', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteBook = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Books List Operations] Delete Book', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateBook = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Books List Operations] Update Book', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const bookActionTypes = {
    loadBooks,
    booksLoaded,
    loadBook,
    bookLoaded,
    addBook,
    updateBook,
    deleteBook,
};


/***/ }),

/***/ "FuIR":
/*!***************************************************!*\
  !*** ./src/app/store/actions/register.actions.ts ***!
  \***************************************************/
/*! exports provided: register, registerSuccess, registerFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerSuccess", function() { return registerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerFailure", function() { return registerFailure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const register = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] Register', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const registerSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] Register Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const registerFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] Register Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "Gb7h":
/*!************************************************!*\
  !*** ./src/app/store/effects/login.effects.ts ***!
  \************************************************/
/*! exports provided: UserEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEffects", function() { return UserEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions_login_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/login.actions */ "TgqS");
/* harmony import */ var _services_login_register_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/login-register.service */ "Em6w");









class UserEffects {
    constructor(_actions$, _loginRegisterService) {
        this._actions$ = _actions$;
        this._loginRegisterService = _loginRegisterService;
        this.login$ = this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_login_actions__WEBPACK_IMPORTED_MODULE_5__["login"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((action) => this._loginRegisterService.loginUser(action.user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => _actions_login_actions__WEBPACK_IMPORTED_MODULE_5__["loginSuccess"]({ accessToken: res })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_login_actions__WEBPACK_IMPORTED_MODULE_5__["loginFailure"]({ error }))))));
    }
}
UserEffects.ɵfac = function UserEffects_Factory(t) { return new (t || UserEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_login_register_service__WEBPACK_IMPORTED_MODULE_6__["LoginRegisterService"])); };
UserEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserEffects, factory: UserEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], UserEffects.prototype, "login$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _services_login_register_service__WEBPACK_IMPORTED_MODULE_6__["LoginRegisterService"] }]; }, { login$: [] }); })();


/***/ }),

/***/ "I/Et":
/*!****************************************************!*\
  !*** ./src/app/store/reducers/register.reducer.ts ***!
  \****************************************************/
/*! exports provided: initialState, registerReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerReducer", function() { return registerReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_register_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/register.actions */ "FuIR");


// set initial register state
const initialState = {
    isRegistered: false,
    user: null,
    token: null,
    message: null,
};
const registerReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, 
// Register reducer
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_register_actions__WEBPACK_IMPORTED_MODULE_1__["register"], (state, action) => {
    return Object.assign(Object.assign({}, state), { isRegistered: false, user: action.user, token: null, message: null });
}), 
// RegisterSuccess reducer
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_register_actions__WEBPACK_IMPORTED_MODULE_1__["registerSuccess"], (state, action) => {
    return Object.assign(Object.assign({}, state), { isRegistered: true, user: null, token: action.accessToken.accessToken, message: null });
}), 
// RegisterFailuer reducer
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_register_actions__WEBPACK_IMPORTED_MODULE_1__["registerFailure"], (state, action) => {
    return Object.assign(Object.assign({}, state), { isRegistered: false, user: null, token: null, message: action.error });
}));


/***/ }),

/***/ "IhZ2":
/*!************************************************!*\
  !*** ./src/app/store/effects/books.effects.ts ***!
  \************************************************/
/*! exports provided: BookEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookEffects", function() { return BookEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _actions_books_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/books.actions */ "Et2S");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/books.service */ "d5rD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");








class BookEffects {
    constructor(_bookService, _actions$, _router) {
        this._bookService = _bookService;
        this._actions$ = _actions$;
        this._router = _router;
        this.loadBooks$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_books_actions__WEBPACK_IMPORTED_MODULE_3__["bookActionTypes"].loadBooks), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(() => this._bookService.getBooks()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((books) => _actions_books_actions__WEBPACK_IMPORTED_MODULE_3__["bookActionTypes"].booksLoaded({ books }))));
        this.loadBook$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_books_actions__WEBPACK_IMPORTED_MODULE_3__["bookActionTypes"].loadBook), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])((action) => this._bookService.getBook(action.bookId)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((book) => _actions_books_actions__WEBPACK_IMPORTED_MODULE_3__["bookActionTypes"].bookLoaded({ book: [book] }))));
        this.addBook$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_books_actions__WEBPACK_IMPORTED_MODULE_3__["bookActionTypes"].addBook), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])((action) => this._bookService.addBook(action.book)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => this._router.navigateByUrl('/home'))), { dispatch: false });
        this.deleteBook$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_books_actions__WEBPACK_IMPORTED_MODULE_3__["bookActionTypes"].deleteBook), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])((action) => this._bookService.deleteBook(action.bookId))), { dispatch: false });
        this.updateBook$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_books_actions__WEBPACK_IMPORTED_MODULE_3__["bookActionTypes"].updateBook), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])((action) => this._bookService.updateBook(action.update.id, action.update.changes)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => this._router.navigateByUrl('/home'))), { dispatch: false });
    }
}
BookEffects.ɵfac = function BookEffects_Factory(t) { return new (t || BookEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_books_service__WEBPACK_IMPORTED_MODULE_4__["BooksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
BookEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BookEffects, factory: BookEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BookEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _services_books_service__WEBPACK_IMPORTED_MODULE_4__["BooksService"] }, { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "RuRp":
/*!***************************************************!*\
  !*** ./src/app/store/selectors/books.selector.ts ***!
  \***************************************************/
/*! exports provided: booksFeatureSelector, getAllBooksList, getBookDetails, getCurrentBookId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "booksFeatureSelector", function() { return booksFeatureSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllBooksList", function() { return getAllBooksList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBookDetails", function() { return getBookDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentBookId", function() { return getCurrentBookId; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _reducers_books_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/books.reducer */ "9P30");


const booksFeatureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('books');
// Get all books list
const getAllBooksList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(booksFeatureSelector, _reducers_books_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
// Get book details
const getBookDetails = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(booksFeatureSelector, _reducers_books_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
// Get id of book
const getCurrentBookId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(booksFeatureSelector, (state) => state.selectedBookId);


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _store_selectors_login_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/selectors/login.selector */ "rDO7");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/theme.service */ "WPWp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function AppComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "/ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.OnLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(_store, _themeService) {
        this._store = _store;
        this._themeService = _themeService;
        this.title = 'shareMyBooks';
        this.isLoggedIn = false;
        this.switchTheme = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
    }
    ngOnInit() {
        this._store.select(_store_selectors_login_selector__WEBPACK_IMPORTED_MODULE_2__["authSelector"]).subscribe((state) => {
            if (state) {
                this.isLoggedIn = state.isAuthenticated;
            }
        });
    }
    OnChangeTheme() {
        this.switchTheme.valueChanges.subscribe((value) => {
            if (value) {
                this._themeService.toggleDark();
            }
            else {
                this._themeService.toggleLight();
            }
        });
    }
    OnLogout() {
        localStorage.removeItem('accessToken');
        window.location.href = '/home';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 13, vars: 4, consts: [["role", "main", 1, "content"], ["role", "banner", 1, "header"], [1, "primeHeader"], ["routerLink", "/home", 1, "header-title"], [1, "btn-wrapper"], ["class", "login-buttons", 4, "ngIf"], ["class", "header-btn", "routerLink", "/home", 3, "click", 4, "ngIf"], [1, "theme-select-wrapper"], ["for", "switchTheme", 1, "switch"], ["id", "switchTheme", "type", "checkbox", 3, "formControl", "click"], [1, "slider", "round"], [1, "login-buttons"], ["routerLink", "/loginregister/login", 1, "header-btn"], ["routerLink", "/loginregister/register", 1, "header-btn"], ["routerLink", "/home", 1, "header-btn", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_6_Template, 6, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_a_7_Template, 2, 0, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_input_click_10_listener() { return ctx.OnChangeTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.switchTheme);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  background-color: var(--header-color);\n  color: var(--text-color);\n  font-weight: 600;\n}\n.header[_ngcontent-%COMP%]   .primeHeader[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  width: 100%;\n  display: flex;\n}\n.header[_ngcontent-%COMP%]   .primeHeader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  outline: none;\n  cursor: pointer;\n}\n.header[_ngcontent-%COMP%]   .primeHeader[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%] {\n  margin: 30px 20px 0 auto;\n}\n.header[_ngcontent-%COMP%]   .primeHeader[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]   .header-btn[_ngcontent-%COMP%] {\n  padding: 10px;\n  color: var(--text-color);\n  text-decoration: none;\n}\n.header[_ngcontent-%COMP%]   .primeHeader[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]   .header-btn[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n.theme-select-wrapper[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 20px;\n  \n  \n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.switch[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #425252;\n  transition: 0.4s;\n}\n.switch[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 20px;\n  width: 20px;\n  left: 0;\n  bottom: 0;\n  background-color: white;\n  transition: 0.4s;\n}\n.switch[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%] {\n  border-radius: 34px;\n}\n.switch[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%]:before {\n  border-radius: 50%;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #a3ced6;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px #a3ced6;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(20px);\n}\n.content[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQ0k7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUNOO0FBRUk7RUFDRSx3QkFBQTtBQUFOO0FBRU07RUFDRSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtBQUFSO0FBRVE7RUFDRSwwQkFBQTtFQUNBLGVBQUE7QUFBVjtBQVNBO0VBQ0UsZ0JBQUE7QUFORjtBQVNBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsK0JBQUE7RUFPQSxlQUFBO0FBYkY7QUFPRTtFQUNFLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUxKO0FBU0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFFQSxnQkFBQTtBQVBKO0FBU0k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFFQSxnQkFBQTtBQVBOO0FBVUk7RUFDRSxtQkFBQTtBQVJOO0FBVU07RUFDRSxrQkFBQTtBQVJSO0FBYUU7RUFDRSx5QkFBQTtBQVhKO0FBY0U7RUFDRSwyQkFBQTtBQVpKO0FBZUU7RUFHRSwyQkFBQTtBQWJKO0FBaUJBO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBZEYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICAucHJpbWVIZWFkZXIge1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIHNwYW57XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLXdyYXBwZXIge1xyXG4gICAgICBtYXJnaW46IDMwcHggMjBweCAwIGF1dG87XHJcblxyXG4gICAgICAuaGVhZGVyLWJ0biB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gY29kZSBmb3IgdG9nZ2xlIHN3aXRjaFxyXG5cclxuLnRoZW1lLXNlbGVjdC13cmFwcGVye1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5zd2l0Y2gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG5cclxuICAvKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xyXG4gIGlucHV0IHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICB9XHJcblxyXG4gIC8qIFRoZSBzbGlkZXIgKi9cclxuICAuc2xpZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjUyNTI7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG5cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICB9XHJcblxyXG4gICAgJi5yb3VuZCB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbiAgICAgIFxyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNjZWQ2O1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggI2EzY2VkNjtcclxuICB9XHJcblxyXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgbWFyZ2luLXRvcDogODBweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _services_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"] }]; }, null); })();


/***/ }),

/***/ "TgqS":
/*!************************************************!*\
  !*** ./src/app/store/actions/login.actions.ts ***!
  \************************************************/
/*! exports provided: login, loginSuccess, loginFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFailure", function() { return loginFailure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const login = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] Login', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loginSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] Login Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loginFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] Login Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "WPWp":
/*!*******************************************!*\
  !*** ./src/app/services/theme.service.ts ***!
  \*******************************************/
/*! exports provided: darkTheme, lightTheme, ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkTheme", function() { return darkTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightTheme", function() { return lightTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const darkTheme = {
    'header-color': '#425252',
    'background-color': '#57595d',
    'text-color': 'white'
};
// Light theme properties
const lightTheme = {
    'header-color': '#a3ced6',
    'background-color': 'white',
    'text-color': '#2c2d2f'
};
class ThemeService {
    constructor() { }
    // Set dark theme
    toggleDark() {
        this.setTheme(darkTheme);
    }
    // Set light theme
    toggleLight() {
        this.setTheme(lightTheme);
    }
    // Set properties of root variables
    setTheme(theme) {
        Object.keys(theme).forEach(k => document.documentElement.style.setProperty(`--${k}`, theme[k]));
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(); };
ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/theme.service */ "WPWp");
/* harmony import */ var _services_authguard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/authguard.service */ "E//v");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _add_edit_book_add_edit_book_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-edit-book/add-edit-book.component */ "2x93");
/* harmony import */ var _store_effects_login_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/effects/login.effects */ "Gb7h");
/* harmony import */ var _store_reducers_login_reducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./store/reducers/login.reducer */ "jbAj");
/* harmony import */ var _store_effects_register_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store/effects/register.effects */ "kL7j");
/* harmony import */ var _store_reducers_register_reducer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./store/reducers/register.reducer */ "I/Et");
/* harmony import */ var _store_effects_books_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./store/effects/books.effects */ "IhZ2");
/* harmony import */ var _store_reducers_books_reducer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./store/reducers/books.reducer */ "9P30");
/* harmony import */ var _login_register_login_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login-register/login-register.component */ "tUcS");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_theme_service__WEBPACK_IMPORTED_MODULE_7__["ThemeService"], _services_authguard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot({ user: _store_reducers_login_reducer__WEBPACK_IMPORTED_MODULE_14__["userReducer"], register: _store_reducers_register_reducer__WEBPACK_IMPORTED_MODULE_16__["registerReducer"], books: _store_reducers_books_reducer__WEBPACK_IMPORTED_MODULE_18__["bookReducer"] }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forRoot([_store_effects_login_effects__WEBPACK_IMPORTED_MODULE_13__["UserEffects"], _store_effects_register_effects__WEBPACK_IMPORTED_MODULE_15__["RegisterEffects"], _store_effects_books_effects__WEBPACK_IMPORTED_MODULE_17__["BookEffects"]]),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _add_edit_book_add_edit_book_component__WEBPACK_IMPORTED_MODULE_12__["AddEditBookComponent"],
        _login_register_login_register_component__WEBPACK_IMPORTED_MODULE_19__["LoginRegisterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsRootModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _add_edit_book_add_edit_book_component__WEBPACK_IMPORTED_MODULE_12__["AddEditBookComponent"],
                    _login_register_login_register_component__WEBPACK_IMPORTED_MODULE_19__["LoginRegisterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot({ user: _store_reducers_login_reducer__WEBPACK_IMPORTED_MODULE_14__["userReducer"], register: _store_reducers_register_reducer__WEBPACK_IMPORTED_MODULE_16__["registerReducer"], books: _store_reducers_books_reducer__WEBPACK_IMPORTED_MODULE_18__["bookReducer"] }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forRoot([_store_effects_login_effects__WEBPACK_IMPORTED_MODULE_13__["UserEffects"], _store_effects_register_effects__WEBPACK_IMPORTED_MODULE_15__["RegisterEffects"], _store_effects_books_effects__WEBPACK_IMPORTED_MODULE_17__["BookEffects"]]),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
                ],
                providers: [_services_theme_service__WEBPACK_IMPORTED_MODULE_7__["ThemeService"], _services_authguard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "d5rD":
/*!*******************************************!*\
  !*** ./src/app/services/books.service.ts ***!
  \*******************************************/
/*! exports provided: BooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return BooksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class BooksService {
    constructor(_http) {
        this._http = _http;
        this.booksUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL + 'books';
    }
    // Get books list
    getBooks() {
        return this._http.get(this.booksUrl);
    }
    // Get selected book details
    getBook(bookId) {
        return this._http.get(`${this.booksUrl}/${bookId}`);
    }
    // Add book to bookslist
    addBook(payload) {
        return this._http.post(this.booksUrl, payload);
    }
    // Update selected book
    updateBook(bookId, changes) {
        return this._http.put(`${this.booksUrl}/${bookId}`, changes);
    }
    // Delete selected book
    deleteBook(payload) {
        return this._http.delete(`${this.booksUrl}/${payload}`);
    }
}
BooksService.ɵfac = function BooksService_Factory(t) { return new (t || BooksService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
BooksService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BooksService, factory: BooksService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooksService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "jbAj":
/*!*************************************************!*\
  !*** ./src/app/store/reducers/login.reducer.ts ***!
  \*************************************************/
/*! exports provided: initialState, userReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_login_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/login.actions */ "TgqS");


// set initial state
const initialState = {
    isAuthenticated: false,
    loginToken: null,
    message: null,
};
const userReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, 
// Login Reducer
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_login_actions__WEBPACK_IMPORTED_MODULE_1__["login"], (state, action) => {
    return Object.assign(Object.assign({}, state), { isAuthenticated: false, loginToken: null, message: null });
}), 
// On LoginSuccess
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_login_actions__WEBPACK_IMPORTED_MODULE_1__["loginSuccess"], (state, action) => {
    return Object.assign(Object.assign({}, state), { isAuthenticated: true, loginToken: action.accessToken.accessToken, message: null });
}), 
// On LoginFailure
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_login_actions__WEBPACK_IMPORTED_MODULE_1__["loginFailure"], (state, action) => {
    return Object.assign(Object.assign({}, state), { isAuthenticated: false, loginToken: null, message: action.error });
}));


/***/ }),

/***/ "kL7j":
/*!***************************************************!*\
  !*** ./src/app/store/effects/register.effects.ts ***!
  \***************************************************/
/*! exports provided: RegisterEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterEffects", function() { return RegisterEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions_register_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/register.actions */ "FuIR");
/* harmony import */ var _services_login_register_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/login-register.service */ "Em6w");









class RegisterEffects {
    constructor(_actions$, _loginRegisterService) {
        this._actions$ = _actions$;
        this._loginRegisterService = _loginRegisterService;
        this.register$ = this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_register_actions__WEBPACK_IMPORTED_MODULE_5__["register"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((action) => this._loginRegisterService.registerUser(action.user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => _actions_register_actions__WEBPACK_IMPORTED_MODULE_5__["registerSuccess"]({ accessToken: res })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_register_actions__WEBPACK_IMPORTED_MODULE_5__["registerFailure"]({ error }))))));
    }
}
RegisterEffects.ɵfac = function RegisterEffects_Factory(t) { return new (t || RegisterEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_login_register_service__WEBPACK_IMPORTED_MODULE_6__["LoginRegisterService"])); };
RegisterEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RegisterEffects, factory: RegisterEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], RegisterEffects.prototype, "register$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _services_login_register_service__WEBPACK_IMPORTED_MODULE_6__["LoginRegisterService"] }]; }, { register$: [] }); })();


/***/ }),

/***/ "rDO7":
/*!***************************************************!*\
  !*** ./src/app/store/selectors/login.selector.ts ***!
  \***************************************************/
/*! exports provided: getAuthReferenceState, authSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthReferenceState", function() { return getAuthReferenceState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authSelector", function() { return authSelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const getAuthReferenceState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('user');
// Get Login state
const authSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthReferenceState, (state) => state);


/***/ }),

/***/ "tUcS":
/*!************************************************************!*\
  !*** ./src/app/login-register/login-register.component.ts ***!
  \************************************************************/
/*! exports provided: LoginRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRegisterComponent", function() { return LoginRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _store_actions_login_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/login.actions */ "TgqS");
/* harmony import */ var _store_selectors_login_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/selectors/login.selector */ "rDO7");
/* harmony import */ var _store_actions_register_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/register.actions */ "FuIR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _services_login_register_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/login-register.service */ "Em6w");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");












function LoginRegisterComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.error.error);
} }
function LoginRegisterComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginRegisterComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginRegisterComponent_div_13_div_1_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.required);
} }
function LoginRegisterComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginRegisterComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginRegisterComponent_div_18_div_1_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.password.errors.required);
} }
function LoginRegisterComponent_p_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Create an account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class LoginRegisterComponent {
    // tslint:disable-next-line: max-line-length
    constructor(_formBuilder, _router, _store, _route, _loginRegisterService) {
        this._formBuilder = _formBuilder;
        this._router = _router;
        this._store = _store;
        this._route = _route;
        this._loginRegisterService = _loginRegisterService;
        this.submitted = false;
        this.action = 'register';
        this._route.paramMap.subscribe((params) => {
            this.action = params.get('action');
            if (this.action === 'register') {
                // If 'register' is clicked
                this.heading = 'Register';
                this.buttonText = 'Register';
                this.username = 'Email Id';
            }
            else {
                // If login is clicked
                this.heading = 'Login';
                this.buttonText = 'Login';
                this.username = 'Username';
            }
        });
    }
    ngOnInit() {
        this.form = this._formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    get f() {
        return this.form.controls;
    }
    OnSubmit() {
        this.submitted = true;
        const payload = {
            email: this.f.email.value,
            password: this.f.password.value,
        };
        if (this.form.valid) {
            // Method called when register button is clicked
            if (this.action === 'register') {
                this._store.dispatch(_store_actions_register_actions__WEBPACK_IMPORTED_MODULE_4__["register"]({ user: payload }));
                this._store.select(_store_actions_register_actions__WEBPACK_IMPORTED_MODULE_4__["register"]).subscribe((response) => {
                    this.registerResponse = response;
                    if (this.registerResponse.register.token) {
                        window.location.href = 'loginregister/login'; // Redirect to login page
                    }
                    else {
                        if (this.registerResponse.register.message) {
                            this.error = this.registerResponse.register.message.error; // Show error message
                        }
                    }
                });
            }
            // Method called when login button is clicked
            else if (this.action === 'login') {
                this._store.dispatch(Object(_store_actions_login_actions__WEBPACK_IMPORTED_MODULE_2__["login"])({ user: payload }));
                this._store.select(_store_selectors_login_selector__WEBPACK_IMPORTED_MODULE_3__["authSelector"]).subscribe((res) => {
                    if (res) {
                        this.loginResponse = res;
                        this.navigate(res);
                    }
                });
            }
        }
    }
    navigate(response) {
        if (response.loginToken) {
            this._loginRegisterService.setAccessToken(response.loginToken);
            this._router.navigateByUrl('/home'); // Redirect to home when login attempt successful
        }
        else {
            if (this._loginRegisterService.getAccessToken) {
                this._loginRegisterService.removeAccessToken();
            }
            this.error = response.message;
        }
    }
}
LoginRegisterComponent.ɵfac = function LoginRegisterComponent_Factory(t) { return new (t || LoginRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_register_service__WEBPACK_IMPORTED_MODULE_7__["LoginRegisterService"])); };
LoginRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginRegisterComponent, selectors: [["app-login-register"]], decls: 25, vars: 14, consts: [[1, "containerPane"], [1, "loginRegPane"], [1, "loginRegContent"], ["id", "loginRegTitle", 1, "loginRegHeader"], [1, "loginRegDiv"], ["class", "alert-danger", 4, "ngIf"], [3, "formGroup"], ["for", "username", 1, "label"], ["type", "text", "formControlName", "email", 3, "ngClass"], ["for", "password", 1, "label"], ["type", "password", "formControlName", "password", 3, "ngClass"], ["id", "authButton", 1, "btn-primary", 3, "click"], [4, "ngIf"], [1, "alert-danger"], ["routerLink", "/loginregister/register"]], template: function LoginRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginRegisterComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginRegisterComponent_div_13_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginRegisterComponent_div_18_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginRegisterComponent_Template_button_click_22_listener() { return ctx.OnSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, LoginRegisterComponent_p_24_Template, 4, 0, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action == "login");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".loginRegContent[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: center;\n  margin: 0 25%;\n  background-color: lightgray;\n  padding: 20px 0;\n}\n.loginRegContent[_ngcontent-%COMP%]   .loginRegDiv[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: 0 15%;\n}\n.loginRegContent[_ngcontent-%COMP%]   .loginRegDiv[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p.label[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 5px;\n  font-weight: 600;\n}\n.loginRegContent[_ngcontent-%COMP%]   .loginRegDiv[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30px;\n  border-radius: 6px;\n  border: none;\n}\n.loginRegContent[_ngcontent-%COMP%]   .loginRegDiv[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: darkgray;\n}\n.loginRegContent[_ngcontent-%COMP%]   .loginRegDiv[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30px;\n  border-radius: 6px;\n  border: none;\n  color: white;\n  background-color: green;\n  font-weight: 600;\n}\n.loginRegContent[_ngcontent-%COMP%]   .loginRegDiv[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tcmVnaXN0ZXIvbG9naW4tcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFDRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0FBQ0o7QUFHTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQURSO0FBSU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUZSO0FBSVE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7QUFGVjtBQU1NO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUpSO0FBTVE7RUFDRSxhQUFBO0FBSlYiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi1yZWdpc3Rlci9sb2dpbi1yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpblJlZ0NvbnRlbnQge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMCAyNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxuXHJcbiAgLmxvZ2luUmVnRGl2IHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW46IDAgMTUlO1xyXG5cclxuICAgIGZvcm0ge1xyXG5cclxuICAgICAgcC5sYWJlbCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiBkYXJrZ3JheTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5idG4tcHJpbWFyeSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginRegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-register',
                templateUrl: './login-register.component.html',
                styleUrls: ['./login-register.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _services_login_register_service__WEBPACK_IMPORTED_MODULE_7__["LoginRegisterService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _add_edit_book_add_edit_book_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-book/add-edit-book.component */ "2x93");
/* harmony import */ var _services_authguard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/authguard.service */ "E//v");
/* harmony import */ var _login_register_login_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-register/login-register.component */ "tUcS");








const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'loginregister/:action', component: _login_register_login_register_component__WEBPACK_IMPORTED_MODULE_5__["LoginRegisterComponent"] },
    { path: 'addeditbook', component: _add_edit_book_add_edit_book_component__WEBPACK_IMPORTED_MODULE_3__["AddEditBookComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
    { path: 'addeditbook/:id', component: _add_edit_book_add_edit_book_component__WEBPACK_IMPORTED_MODULE_3__["AddEditBookComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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