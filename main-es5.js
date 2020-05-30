function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../../dist/ng-components-ndiku/fesm2015/ng-components-ndiku.js":
  /*!****************************************************************************************************************!*\
    !*** /home/travis/build/adrien19/ng-components-ndiku/dist/ng-components-ndiku/fesm2015/ng-components-ndiku.js ***!
    \****************************************************************************************************************/

  /*! exports provided: ClickElsewhereDirective, ColumnMap, ColumnSetting, FormatCellPipe, MaterialModule, MyErrorStateMatcher, NgComponentsNdikuComponent, NgComponentsNdikuModule, NgComponentsNdikuSelectComponent, NgComponentsNdikuSelectModule, NgComponentsNdikuService, StyleCellDirective, TableEntryType, TableInlineEditService, TableLayoutComponent, TableLayoutModule, TableType, ɵa */

  /***/
  function distNgComponentsNdikuFesm2015NgComponentsNdikuJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClickElsewhereDirective", function () {
      return ClickElsewhereDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColumnMap", function () {
      return ColumnMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColumnSetting", function () {
      return ColumnSetting;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormatCellPipe", function () {
      return FormatCellPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function () {
      return MyErrorStateMatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgComponentsNdikuComponent", function () {
      return NgComponentsNdikuComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgComponentsNdikuModule", function () {
      return NgComponentsNdikuModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgComponentsNdikuSelectComponent", function () {
      return NgComponentsNdikuSelectComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgComponentsNdikuSelectModule", function () {
      return NgComponentsNdikuSelectModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgComponentsNdikuService", function () {
      return NgComponentsNdikuService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StyleCellDirective", function () {
      return StyleCellDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableEntryType", function () {
      return TableEntryType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableInlineEditService", function () {
      return TableInlineEditService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableLayoutComponent", function () {
      return TableLayoutComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableLayoutModule", function () {
      return TableLayoutModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableType", function () {
      return TableType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "../../node_modules/@angular/material/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "../../node_modules/@angular/material/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/select */
    "../../node_modules/@angular/material/fesm2015/select.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/table */
    "../../node_modules/@angular/material/fesm2015/table.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "../../node_modules/@angular/material/fesm2015/snack-bar.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "../../node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/fesm2015/http.js");

    var ClickElsewhereDirective = /*#__PURE__*/function () {
      function ClickElsewhereDirective(elementRef) {
        _classCallCheck(this, ClickElsewhereDirective);

        this.elementRef = elementRef;
        this.ndikuClickedElseWhere = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ClickElsewhereDirective, [{
        key: "onClick",
        value: function onClick(event) {
          var targetElement = event.target; // Check if the click was outside the element

          if (targetElement && !this.elementRef.nativeElement.contains(targetElement)) {
            this.ndikuClickedElseWhere.emit();
          }
        }
      }]);

      return ClickElsewhereDirective;
    }();

    ClickElsewhereDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ClickElsewhereDirective.prototype, "ndikuClickedElseWhere", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event'])], ClickElsewhereDirective.prototype, "onClick", null);
    ClickElsewhereDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[ndikuClickElseWhere]'
    })], ClickElsewhereDirective);
    var importedModules = [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"]];

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [ClickElsewhereDirective],
      imports: importedModules,
      exports: [].concat(importedModules, [ClickElsewhereDirective])
    })], MaterialModule);

    var NgComponentsNdikuService = function NgComponentsNdikuService() {
      _classCallCheck(this, NgComponentsNdikuService);

      this.inputValueChanged$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
    };

    NgComponentsNdikuService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function NgComponentsNdikuService_Factory() {
        return new NgComponentsNdikuService();
      },
      token: NgComponentsNdikuService,
      providedIn: "root"
    });
    NgComponentsNdikuService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NgComponentsNdikuService);
    /** Error when invalid control is dirty, touched, or submitted. */

    var MyErrorStateMatcher = /*#__PURE__*/function () {
      function MyErrorStateMatcher() {
        _classCallCheck(this, MyErrorStateMatcher);
      }

      _createClass(MyErrorStateMatcher, [{
        key: "isErrorState",
        value: function isErrorState(control, form) {
          var isSubmitted = form && form.submitted;
          return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
        }
      }]);

      return MyErrorStateMatcher;
    }();

    var NgComponentsNdikuComponent = /*#__PURE__*/function () {
      function NgComponentsNdikuComponent(fb, ngComponentsNdikuService) {
        _classCallCheck(this, NgComponentsNdikuComponent);

        this.fb = fb;
        this.ngComponentsNdikuService = ngComponentsNdikuService;
        this.matcher = new MyErrorStateMatcher();
        this._REQUIRED = false;
        this._NOTEMPTY = false;
        this._INTPUT_TYPE = 'text';
        this._INPUT_ID = '';
        this._INPUT_LABEL = '';
        this._INPUT_PLACEHOLDER = '';
        this._ON_COMPONENT_READY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(NgComponentsNdikuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // construct validators based on component input properties
          var validators = [];

          if (this.required) {
            validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required);
          }

          if (this.type === 'email') {
            validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].email);
          }

          if (this.type === 'password') {
            validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(6));
          }

          this.componentFormGroup = this.fb.group({
            input: ['', validators]
          });
          this.inputSub = this.componentFormGroup.controls.input.valueChanges.subscribe(function (value) {
            _this.ngComponentsNdikuService.inputValueChanged$.next(value);
          });
          this.onComponentReady.emit(this.componentFormGroup);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.ngComponentsNdikuService.inputValueChanged$) {
            this.ngComponentsNdikuService.inputValueChanged$.unsubscribe();
          }

          if (this.inputSub) {
            this.inputSub.unsubscribe();
          }
        }
      }, {
        key: "required",
        get: function get() {
          return this._REQUIRED;
        },
        set: function set(value) {
          this._REQUIRED = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__["coerceBooleanProperty"])(value);
        }
      }, {
        key: "notEmpty",
        get: function get() {
          return this._NOTEMPTY;
        },
        set: function set(value) {
          this._NOTEMPTY = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__["coerceBooleanProperty"])(value);
        }
      }, {
        key: "type",
        get: function get() {
          return this._INTPUT_TYPE;
        },
        set: function set(value) {
          this._INTPUT_TYPE = value;
        }
      }, {
        key: "id",
        get: function get() {
          return this._INPUT_ID;
        },
        set: function set(value) {
          this._INPUT_ID = value;
        }
      }, {
        key: "label",
        get: function get() {
          return this._INPUT_LABEL;
        },
        set: function set(value) {
          this._INPUT_LABEL = value;
        }
      }, {
        key: "placeholder",
        get: function get() {
          return this._INPUT_PLACEHOLDER;
        },
        set: function set(value) {
          this._INPUT_PLACEHOLDER = value;
        }
      }, {
        key: "onComponentReady",
        get: function get() {
          return this._ON_COMPONENT_READY;
        },
        set: function set(value) {
          this._ON_COMPONENT_READY = value;
        }
      }]);

      return NgComponentsNdikuComponent;
    }();

    NgComponentsNdikuComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
      }, {
        type: NgComponentsNdikuService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgComponentsNdikuComponent.prototype, "required", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgComponentsNdikuComponent.prototype, "notEmpty", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgComponentsNdikuComponent.prototype, "type", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgComponentsNdikuComponent.prototype, "id", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgComponentsNdikuComponent.prototype, "label", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgComponentsNdikuComponent.prototype, "placeholder", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgComponentsNdikuComponent.prototype, "onComponentReady", null);
    NgComponentsNdikuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ndiku-ng-input',
      template: "\n    <form [formGroup]=\"componentFormGroup\">\n      <mat-form-field>\n        <mat-label *ngIf=\"label\">{{ label }}</mat-label>\n        <input\n          matInput\n          [type]=\"type\"\n          [id]=\"id\"\n          [placeholder]=\"placeholder\"\n          formControlName=\"input\"\n          [errorStateMatcher]=\"matcher\"\n        />\n\n        <mat-error\n          *ngIf=\"\n            type === 'email' &&\n            required &&\n            componentFormGroup.controls.input.hasError('required')\n          \"\n        >\n          email field is required.\n        </mat-error>\n        <mat-error\n          *ngIf=\"\n            type === 'email' &&\n            required &&\n            !componentFormGroup.controls.input.hasError('required') &&\n            !componentFormGroup.controls.input.valid\n          \"\n        >\n          Please enter valid email.\n        </mat-error>\n        <mat-error\n          *ngIf=\"\n            type === 'email' &&\n            !required &&\n            !componentFormGroup.controls.input.valid\n          \"\n        >\n          Please enter valid email.\n        </mat-error>\n\n        <mat-error\n          *ngIf=\"\n            type === 'password' &&\n            required &&\n            componentFormGroup.controls.input.hasError('required')\n          \"\n        >\n          password field is required.\n        </mat-error>\n\n        <mat-error\n          *ngIf=\"\n            type !== 'email' &&\n            type !== 'password' &&\n            required &&\n            componentFormGroup.controls.input.hasError('required')\n          \"\n        >\n          Please enter valid input.\n        </mat-error>\n      </mat-form-field>\n    </form>\n  ",
      styles: ['']
    })], NgComponentsNdikuComponent);

    var NgComponentsNdikuModule = function NgComponentsNdikuModule() {
      _classCallCheck(this, NgComponentsNdikuModule);
    };

    NgComponentsNdikuModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [NgComponentsNdikuComponent],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], MaterialModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"]],
      exports: [NgComponentsNdikuComponent]
    })], NgComponentsNdikuModule);

    var NgComponentsNdikuSelectComponent = function NgComponentsNdikuSelectComponent() {
      _classCallCheck(this, NgComponentsNdikuSelectComponent);
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgComponentsNdikuSelectComponent.prototype, "name", void 0);
    NgComponentsNdikuSelectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ndiku-ng-select',
      template: "<h2>Welcome to {{ name }} demo!</h2>"
    })], NgComponentsNdikuSelectComponent);

    var NgComponentsNdikuSelectModule = function NgComponentsNdikuSelectModule() {
      _classCallCheck(this, NgComponentsNdikuSelectModule);
    };

    NgComponentsNdikuSelectModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [NgComponentsNdikuSelectComponent],
      exports: [NgComponentsNdikuSelectComponent]
    })], NgComponentsNdikuSelectModule);

    var FormatCellPipe = /*#__PURE__*/function () {
      function FormatCellPipe(currencyPipe, datePipe, percentPipe) {
        _classCallCheck(this, FormatCellPipe);

        this.currencyPipe = currencyPipe;
        this.datePipe = datePipe;
        this.percentPipe = percentPipe;
      }

      _createClass(FormatCellPipe, [{
        key: "transform",
        value: function transform(value, format) {
          var symbol = '';

          if (value === undefined) {
            return 'not available';
          }

          if (format.formatType === 'default') {
            if (Array.isArray(value)) {
              if (typeof value[0] !== 'object') {
                return value.join(', ');
              } else {
                return value.map(function (obj) {
                  return obj.name;
                }).join(', ');
              }
            }

            if (typeof value === 'object') {
              return value.name;
            }
          }

          if (format.formatType === 'currency') {
            if (format.currencySymbol && format.currencyCode) {
              return this.currencyPipe.transform(value, format.currencyCode, format.currencySymbol);
            } else if (format.currencyCode) {
              return this.currencyPipe.transform(value, format.currencyCode);
            } else if (format.currencySymbol) {
              return this.currencyPipe.transform(value, format.currencySymbol);
            } else {
              return this.currencyPipe.transform(value);
            }
          }

          if (format.formatType === 'date') {
            if (format.dateFormat && format.dateTimeZone) {
              return this.datePipe.transform(value, format.dateFormat, format.dateTimeZone);
            } else if (format.dateFormat) {
              return this.datePipe.transform(value, format.dateFormat);
            } else if (format.dateTimeZone) {
              return this.datePipe.transform(value, format.dateTimeZone);
            } else {
              return this.datePipe.transform(value);
            }
          }

          if (format.formatType === 'percent') {
            if (format.percentFormat) {
              return this.percentPipe.transform(value, format.percentFormat);
            } else {
              return this.percentPipe.transform(value);
            }
          }

          return value;
        }
      }]);

      return FormatCellPipe;
    }();

    FormatCellPipe.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["CurrencyPipe"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["PercentPipe"]
      }];
    };

    FormatCellPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'formatCell'
    })], FormatCellPipe);
    var TableType;

    (function (TableType) {
      TableType[TableType["MatTable"] = 0] = "MatTable";
      TableType[TableType["DefaultTable"] = 1] = "DefaultTable";
    })(TableType || (TableType = {}));

    var ColumnSetting = function ColumnSetting() {
      _classCallCheck(this, ColumnSetting);
    };

    var ColumnMap = /*#__PURE__*/function () {
      function ColumnMap(settings) {
        _classCallCheck(this, ColumnMap);

        this.access = function (object) {
          if (object[this.primaryKey] || !this.alternativeKeys) {
            return this.primaryKey;
          }

          var _iterator = _createForOfIteratorHelper(this.alternativeKeys),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var key = _step.value;

              if (object[key]) {
                return key;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return this.primaryKey;
        };

        this.primaryKey = settings.primaryKey;
        this.header = settings.header;
        this.format = settings.format;
        this.alternativeKeys = settings.alternativeKeys;
        this.editable = settings.editable;
      }

      _createClass(ColumnMap, [{
        key: "header",
        set: function set(setting) {
          this._HEADER = setting ? setting : this.primaryKey.slice(0, 1).toUpperCase() + this.primaryKey.replace(/_/g, ' ').slice(1);
        },
        get: function get() {
          return this._HEADER;
        }
      }, {
        key: "format",
        set: function set(setting) {
          this._FORMAT = setting ? setting : {
            formatType: 'default'
          };
        },
        get: function get() {
          return this._FORMAT;
        }
      }, {
        key: "editable",
        set: function set(setting) {
          this._EDITABLE = setting ? setting : false;
        },
        get: function get() {
          return this._EDITABLE;
        }
      }]);

      return ColumnMap;
    }();

    var TableInlineEditService = /*#__PURE__*/function () {
      function TableInlineEditService(snackBar) {
        _classCallCheck(this, TableInlineEditService);

        this.snackBar = snackBar;
        this.newCellValue = '';
        this.dataSource$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.snackBarMessage$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.updateCellStyle$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.clearSavedDataInitiated$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
      }
      /**
       * @description updates selected cell states
       * Update table's dataSource
       * @param text contains user entered value
       */


      _createClass(TableInlineEditService, [{
        key: "updateSelectedCellsValues",
        value: function updateSelectedCellsValues(text) {
          if (text == null) {
            return;
          }

          if (this.tableMouseDown && this.tableMouseUp) {
            if (this.tableMouseDown.cellsType === this.tableMouseUp.cellsType) {
              var dataCopy = this.table.dataSource.slice();
              var startCol;
              var endCol;
              var startRow;
              var endRow;

              if (this.tableMouseDown.colId <= this.tableMouseUp.colId) {
                endCol = this.tableMouseUp.colId;
                startCol = this.tableMouseDown.colId;
              } else {
                endCol = this.tableMouseDown.colId;
                startCol = this.tableMouseUp.colId;
              }

              if (this.tableMouseDown.rowId <= this.tableMouseUp.rowId) {
                startRow = this.tableMouseDown.rowId;
                endRow = this.tableMouseUp.rowId;
              } else {
                endRow = this.tableMouseDown.rowId;
                startRow = this.tableMouseUp.rowId;
              } // --Edit cells from the same column


              if (startCol === endCol) {
                for (var i = startRow; i <= endRow; i++) {
                  var record = dataCopy[i];

                  if (record) {
                    dataCopy[i][this.columnMaps[startCol].access(record)] = text;
                    var editedCell = {
                      rowId: i,
                      colId: startCol,
                      header: this.columnMaps[startCol].header,
                      newCellValue: text,
                      tableId: this.table.tableId,
                      editedTimestamp: +new Date()
                    };
                    this.table.saveEditedCell(editedCell);
                  } else {
                    throw new Error('No record found!');
                  }
                }
              } else {
                // --Edit cells starting and ending not on the same column
                for (var _i = startRow; _i <= endRow; _i++) {
                  for (var j = startCol; j <= endCol; j++) {
                    var _record = dataCopy[_i];

                    if (_record) {
                      dataCopy[_i][this.columnMaps[j].access(_record)] = text;
                      var _editedCell = {
                        rowId: _i,
                        colId: j,
                        header: this.columnMaps[j].header,
                        newCellValue: text,
                        tableId: this.table.tableId,
                        editedTimestamp: +new Date()
                      };
                      this.table.saveEditedCell(_editedCell);
                    } else {
                      throw new Error('No record found!');
                    }
                  }
                }
              } // dataSource = dataCopy;


              this.table.dataSource = dataCopy;
              this.dataSource$.next({
                table: this.table
              });
            } else {
              this.openSnackBar('The selected cells dont have the same type.', 'DISMISS');
            }
          }
        }
        /**
         * @description updates cell properties of selected cell on mouse pressed
         * @param rowId contains row number
         * @param colId contains column number
         * @param cellsType contains header as string
         */

      }, {
        key: "onMouseDownTable",
        value: function onMouseDownTable(rowId, colId, cellsType) {
          this.tableMouseDown = {
            rowId: rowId,
            colId: colId,
            cellsType: cellsType
          };
        }
        /**
         * @description updates cell properties of selected cell on mouse released
         * @param rowId contains row number
         * @param colId contains column number
         * @param cellsType contains header as string
         */

      }, {
        key: "onMouseUpTable",
        value: function onMouseUpTable(rowId, colId, cellsType) {
          this.tableMouseUp = {
            rowId: rowId,
            colId: colId,
            cellsType: cellsType
          };

          if (this.tableMouseDown) {
            this.newCellValue = '';
            this.updateSelectedCellsState(this.tableMouseDown.colId, this.tableMouseUp.colId, this.tableMouseDown.rowId, this.tableMouseUp.rowId);
          }
        }
        /**
         * @description Update selectedCols && selectedRows arrays
         * @param mouseDownColId contains column number of selected cell when mouse pressed
         * @param mouseUpColId contains column number of selected cell when mouse released
         * @param mouseDownRowId contains row number of selected cell when mouse pressed
         * @param mouseUpRowId contains row number of selected cell when mouse released
         */

      }, {
        key: "updateSelectedCellsState",
        value: function updateSelectedCellsState(mouseDownColId, mouseUpColId, mouseDownRowId, mouseUpRowId) {
          // init selected cells
          this.setSelectedCells(this.table.tableCellStates.FIRST_EDITABLE_ROW, this.table.tableCellStates.LAST_EDITABLE_ROW, this.table.tableCellStates.FIRST_EDITABLE_COL, this.table.tableCellStates.LAST_EDITABLE_COL, false); // update selected cells

          var startCol;
          var endCol;
          var startRow;
          var endRow;

          if (mouseDownColId <= mouseUpColId) {
            startCol = mouseDownColId;
            endCol = mouseUpColId;
          } else {
            endCol = mouseDownColId;
            startCol = mouseUpColId;
          }

          if (mouseDownRowId <= mouseUpRowId) {
            startRow = mouseDownRowId;
            endRow = mouseUpRowId;
          } else {
            endRow = mouseDownRowId;
            startRow = mouseUpRowId;
          }

          for (var i = startRow; i <= endRow; i++) {
            for (var j = startCol; j <= endCol; j++) {
              this.table.tableCellStates.tableCellStates[i][j] = true;
            }
          }

          this.setSelectedCells(startRow, endRow, startCol, endCol, true);
        }
        /**
         * @description sets selected cell properties
         * @param firstEditableRow contains row number of first selected cell
         * @param lastEditableRow contains row number of last selected cell
         * @param firstEditableCol contains column number of first selected
         * @param lastEditableCol contains column number of last selected cell
         * @param value contains true or false to indicate selected or unselected
         */

      }, {
        key: "setSelectedCells",
        value: function setSelectedCells(firstEditableRow, lastEditableRow, firstEditableCol, lastEditableCol, value) {
          for (var i = firstEditableRow; i <= lastEditableRow; i++) {
            for (var j = firstEditableCol; j <= lastEditableCol; j++) {
              this.table.tableCellStates.tableCellStates[i][j] = value;
            }
          }

          this.updateCellStyle$.next(); // sending an event to update the selected cells in directive
        }
        /**
         * @description After the user enters a new value, all selected cells must be updated
         * @param event contains keyboard related event data
         */

      }, {
        key: "onKeyUpTable",
        value: function onKeyUpTable(event) {
          // If no cell is selected then ignore keyUp event
          if (this.tableMouseDown && this.tableMouseUp) {
            if (event.key === 'Delete') {
              this.newCellValue = '';
              this.updateSelectedCellsValues(this.newCellValue);
            } else if (event.key === 'Backspace') {
              // 'delete' key is pressed
              var end = this.newCellValue.length - 1;
              this.newCellValue = this.newCellValue.slice(0, end);
              this.updateSelectedCellsValues(this.newCellValue);
            } else if (this.isNotSpecialKeys(event)) {
              // key is not specialKeys
              this.newCellValue += event.key;
              this.updateSelectedCellsValues(this.newCellValue);
            }

            if (event.key === 'Enter') {
              this.setSelectedCells(this.table.tableCellStates.FIRST_EDITABLE_ROW, this.table.tableCellStates.LAST_EDITABLE_ROW, this.table.tableCellStates.FIRST_EDITABLE_COL, this.table.tableCellStates.LAST_EDITABLE_COL, false);
            }
          }
        }
        /**
         * @description returns whether a keyboard key is a special key
         * @param event contains keyboard related event data
         */

      }, {
        key: "isNotSpecialKeys",
        value: function isNotSpecialKeys(event) {
          var specialKeys = ['Enter', 'PrintScreen', 'Escape', 'cControl', 'NumLock', 'PageUp', 'PageDown', 'End', 'Home', 'Insert', 'ContextMenu', 'Control', 'ControlAltGraph', 'Alt', 'Meta', 'Shift', 'CapsLock', 'TabTab', 'ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'Pause', 'ScrollLock', 'Dead', '', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'];
          return this.indexOfInArray(event.key, specialKeys) === -1;
        }
        /**
         * @description returns an index of item in array
         * @param item contains keyboard key to evaluate
         * @param array contains array of keyboard keys
         */

      }, {
        key: "indexOfInArray",
        value: function indexOfInArray(item, array) {
          var index = -1;

          for (var i = 0; i < array.length; i++) {
            if (array[i] === item) {
              index = i;
            }
          }

          return index;
        }
        /**
         * @description emits an event to open a snack bar
         * @param message contains a message as a string
         * @param action contains action key as string
         */

      }, {
        key: "openSnackBar",
        value: function openSnackBar(message, action) {
          var snackBarMessage = {
            message: message,
            action: action
          };
          this.snackBarMessage$.next(snackBarMessage);
        }
      }]);

      return TableInlineEditService;
    }();

    TableInlineEditService.ctorParameters = function () {
      return [{
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
      }];
    };

    TableInlineEditService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function TableInlineEditService_Factory() {
        return new TableInlineEditService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]));
      },
      token: TableInlineEditService,
      providedIn: "root"
    });
    TableInlineEditService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TableInlineEditService);

    var TableLayoutComponent = /*#__PURE__*/function () {
      function TableLayoutComponent(snackBar, tableInlineEditService) {
        _classCallCheck(this, TableLayoutComponent);

        this.snackBar = snackBar;
        this.tableInlineEditService = tableInlineEditService;
        this.saveTableButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editTableButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.types = TableType;
        this.editingMode = false;
      }

      _createClass(TableLayoutComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.snackBarServiceSub) {
            this.snackBarServiceSub.unsubscribe();
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.table.inlineEditable) {
            this.tableInlineEditService.table = this.table;
            this.handleUnmatchingCellTypes();
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.settings) {
            if (this.settings) {
              // when settings provided
              this.columnMaps = this.settings.map(function (col) {
                return new ColumnMap(col);
              });
            } else {
              // no settings, create column maps with defaults
              this.columnMaps = Object.keys(this.table.dataSource[0]).map(function (key) {
                return new ColumnMap({
                  primaryKey: key
                });
              });
            }

            this.displayedColumns = this.columnMaps.map(function (col) {
              return col.header;
            });
          }
        }
      }, {
        key: "handleUnmatchingCellTypes",
        value: function handleUnmatchingCellTypes() {
          var _this2 = this;

          this.snackBarServiceSub = this.tableInlineEditService.snackBarMessage$.subscribe(function (receivedSnackBarMessage) {
            if (receivedSnackBarMessage) {
              var snackBarRef = _this2.snackBar.open(receivedSnackBarMessage.message, receivedSnackBarMessage.action, {
                duration: 3000
              });

              if (receivedSnackBarMessage.action === 'DISMISS') {
                snackBarRef.afterDismissed().subscribe(function () {
                  _this2.enterKeyPressed();
                });
                snackBarRef.onAction().subscribe(function () {
                  _this2.enterKeyPressed();
                });
              }
            }
          });
        }
      }, {
        key: "onKeyUp",
        value: function onKeyUp(event) {
          if (this.table && this.table.enableEditingMode) {
            event.stopImmediatePropagation();
            this.tableInlineEditService.onKeyUpTable(event);
          }
        }
      }, {
        key: "onMouseDown",
        value: function onMouseDown(rowId, colId, cellsType) {
          if (this.table && this.table.enableEditingMode) {
            this.tableInlineEditService.table = this.table;
            this.tableInlineEditService.columnMaps = this.columnMaps;
            this.tableInlineEditService.onMouseDownTable(rowId, colId, cellsType);
          }
        }
      }, {
        key: "onMouseUp",
        value: function onMouseUp(rowId, colId, cellsType) {
          if (this.table && this.table.enableEditingMode) {
            this.tableInlineEditService.onMouseUpTable(rowId, colId, cellsType);
          }
        }
      }, {
        key: "createCellId",
        value: function createCellId(tableType, i, j) {
          return "".concat(tableType).concat(i).concat(j);
        }
        /**
         * @description Enables table editing mode. Emits bindable event
         * @param clickedTable contains table
         */

      }, {
        key: "onEditTable",
        value: function onEditTable(clickedTable) {
          this.saveTableButtonClicked.emit(clickedTable);
          this.editingMode = true;
          clickedTable.enableEditingMode = true;
        }
        /**
         * @description clears cell/cells selection, disables table editting mode. Emits bindable event with table data.
         * @param clickedTable contains table
         */

      }, {
        key: "onSaveTable",
        value: function onSaveTable(clickedTable) {
          this.editTableButtonClicked.emit(clickedTable);
          this.enterKeyPressed();
          clickedTable.enableEditingMode = false;
          this.editingMode = false;
        }
        /**
         * @description Creates a Keyboard event to save or cancel a cell/cells selection
         */

      }, {
        key: "enterKeyPressed",
        value: function enterKeyPressed() {
          if (this.table && this.table.enableEditingMode) {
            var keyEventData = {
              isTrusted: true,
              key: 'Enter'
            };
            var keyBoardEvent = new KeyboardEvent('keyup', keyEventData);
            keyBoardEvent.stopImmediatePropagation();
            this.onKeyUp(keyBoardEvent);
          }
        }
      }, {
        key: "caption",
        get: function get() {
          return this._CAPTION;
        },
        set: function set(value) {
          this._CAPTION = value;
        }
      }, {
        key: "settings",
        get: function get() {
          return this._SETTINGS;
        },
        set: function set(value) {
          this._SETTINGS = value;
        }
      }, {
        key: "table",
        get: function get() {
          return this._TABLE;
        },
        set: function set(tableType) {
          this._TABLE = tableType;
        }
      }]);

      return TableLayoutComponent;
    }();

    TableLayoutComponent.ctorParameters = function () {
      return [{
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
      }, {
        type: TableInlineEditService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TableLayoutComponent.prototype, "caption", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TableLayoutComponent.prototype, "settings", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TableLayoutComponent.prototype, "table", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TableLayoutComponent.prototype, "saveTableButtonClicked", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TableLayoutComponent.prototype, "editTableButtonClicked", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keyup', ['$event'])], TableLayoutComponent.prototype, "onKeyUp", null);
    TableLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ndiku-table-layout',
      template: "\n    <ng-container [ngSwitch]=\"table.tableType\">\n      <table\n        class=\"table\"\n        [id]=\"table.tableId\"\n        *ngSwitchCase=\"types.DefaultTable\"\n        (keyup)=\"onKeyUp($event)\"\n      >\n        <caption *ngIf=\"caption\">\n          {{\n            caption\n          }}\n          {{\n            '(Default Table)'\n          }}\n          <span *ngIf=\"table.inlineEditable\">\n            <button *ngIf=\"!editingMode\" (click)=\"onEditTable(table)\">\n              <!-- <mat-icon>home</mat-icon> -->\n              Edit\n            </button>\n            <button *ngIf=\"editingMode\" (click)=\"onSaveTable(table)\">\n              <!-- <mat-icon>home</mat-icon> -->\n              Save\n            </button>\n          </span>\n        </caption>\n        <thead>\n          <tr>\n            <th *ngFor=\"let map of columnMaps\" style=\"text-align: left;\">\n              {{ map.header }}\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let record of table.dataSource; let i = index\">\n            <ng-container *ngFor=\"let map of columnMaps; let j = index\">\n              <td\n                *ngIf=\"!map.editable && !table.inlineEditable\"\n                [ndikuStyleCell]=\"{\n                  contentType: record[map.access(record)],\n                  table: table\n                }\"\n              >\n                {{ record[map.access(record)] | formatCell: map.format }}\n              </td>\n\n              <td\n                *ngIf=\"map.editable && table.inlineEditable\"\n                [id]=\"createCellId(table.tableId, i, j)\"\n                (mousedown)=\"onMouseDown(i, j, map.header)\"\n                (mouseup)=\"onMouseUp(i, j, map.header)\"\n                [ndikuStyleCell]=\"{\n                  contentType: record[map.access(record)],\n                  table: table,\n                  selectCell: { rowId: i, colId: j }\n                }\"\n              >\n                {{ record[map.access(record)] | formatCell: map.format }}\n                <i></i>\n              </td>\n            </ng-container>\n          </tr>\n        </tbody>\n      </table>\n\n      <table\n        mat-table\n        *ngSwitchCase=\"types.MatTable\"\n        [dataSource]=\"table.dataSource\"\n        class=\"mat-elevation-z0\"\n        [id]=\"table.tableId\"\n        (keyup)=\"onKeyUp($event)\"\n      >\n        <caption *ngIf=\"caption\">\n          {{\n            caption\n          }}\n          <span *ngIf=\"table.inlineEditable\">\n            <button\n              mat-icon-button\n              color=\"accent\"\n              *ngIf=\"!editingMode\"\n              (click)=\"onEditTable(table)\"\n            >\n              <!-- <mat-icon>home</mat-icon> -->\n              Edit\n            </button>\n            <button\n              mat-icon-button\n              color=\"accent\"\n              *ngIf=\"editingMode\"\n              (click)=\"onSaveTable(table)\"\n            >\n              <!-- <mat-icon>home</mat-icon> -->\n              Save\n            </button>\n          </span>\n        </caption>\n        <ng-container\n          *ngFor=\"let map of columnMaps; let j = index\"\n          matColumnDef=\"{{ map.header }}\"\n        >\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>\n            {{ map.header }}\n          </th>\n          <ng-container *ngIf=\"!map.editable && !table.inlineEditable\">\n            <td\n              mat-cell\n              class=\"unselected\"\n              *matCellDef=\"let record\"\n              [ndikuStyleCell]=\"{\n                contentType: record[map.access(record)],\n                table: table\n              }\"\n            >\n              {{ record[map.access(record)] | formatCell: map.format }}\n            </td>\n          </ng-container>\n          <ng-container *ngIf=\"map.editable && table.inlineEditable\">\n            <td\n              mat-cell\n              *matCellDef=\"let record; let i = index\"\n              [id]=\"createCellId(table.tableId, i, j)\"\n              (mousedown)=\"onMouseDown(i, j, map.header)\"\n              (mouseup)=\"onMouseUp(i, j, map.header)\"\n              [ndikuStyleCell]=\"{\n                contentType: record[map.access(record)],\n                table: table,\n                selectCell: { rowId: i, colId: j }\n              }\"\n            >\n              {{ record[map.access(record)] | formatCell: map.format }}\n              <i></i>\n            </td>\n          </ng-container>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n      </table>\n    </ng-container>\n  ",
      styles: ["\n      table {\n        width: 100%;\n      }\n      .mat-row,\n      .mat-header-row {\n        display: flex;\n        border-bottom-width: 1px;\n        border-bottom-style: solid;\n        align-items: center;\n        min-height: 48px;\n        padding: 0 24px;\n      }\n\n      .mat-cell,\n      .mat-header-cell {\n        flex: 1;\n        overflow: hidden;\n        word-wrap: break-word;\n        border-bottom: none;\n      }\n\n      /* below adds cursor  */\n      .cursor {\n        position: relative;\n      }\n      .cursor i {\n        position: absolute;\n        width: 1px;\n        height: 80%;\n        background-color: gray;\n        left: 5px;\n        top: 10%;\n        animation-name: blink;\n        animation-duration: 800ms;\n        animation-iteration-count: infinite;\n        opacity: 1;\n      }\n\n      .cursor :focus + i {\n        display: none;\n      }\n\n      @keyframes blink {\n        from {\n          opacity: 1;\n        }\n        to {\n          opacity: 0;\n        }\n      }\n    "]
    })], TableLayoutComponent);

    var StyleCellDirective = /*#__PURE__*/function () {
      function StyleCellDirective(el, renderer, tableInlineEditService) {
        _classCallCheck(this, StyleCellDirective);

        this.el = el;
        this.renderer = renderer;
        this.tableInlineEditService = tableInlineEditService;
      }

      _createClass(StyleCellDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.visualizeEditedCells();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.cellsStatesSub) {
            this.cellsStatesSub.unsubscribe();
          }

          if (this.clearEditedVisualsSub) {
            this.clearEditedVisualsSub.unsubscribe();
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.handlestylingUndefinedValues();
          this.visualizeEditedCells();
          this.cellsStatesSub = this.tableInlineEditService.updateCellStyle$.subscribe(function (cellStates) {
            _this3.handleStylingSelectedCells();
          });
          this.clearEditedVisualsSub = this.tableInlineEditService.clearSavedDataInitiated$.subscribe(function () {
            _this3.visualizeEditedCells();
          });
        }
        /**
         * Styles each cell depending on its value.
         */

      }, {
        key: "handlestylingUndefinedValues",
        value: function handlestylingUndefinedValues() {
          var types = TableType;

          if (this.ndikuStyleCell.contentType === undefined && this.ndikuStyleCell.table.tableType === types.MatTable) {
            this.renderer.setStyle(this.el.nativeElement, 'color', '#dcdcdc'); // this.renderer.setStyle(this.el.nativeElement, 'text-align', 'center');
          }

          if (this.ndikuStyleCell.contentType === undefined && this.ndikuStyleCell.table.tableType === types.DefaultTable) {
            this.renderer.setStyle(this.el.nativeElement, 'color', '#dcdcdc');
            this.renderer.setStyle(this.el.nativeElement, 'text-align', 'center');
          }

          if (typeof this.ndikuStyleCell.contentType === 'number' && this.ndikuStyleCell.table.tableType === types.DefaultTable) {
            this.renderer.setStyle(this.el.nativeElement, 'text-align', 'right');
            this.renderer.setStyle(this.el.nativeElement, 'padding-right', '10%');
          }
        }
        /**
         * Adds border to user selected cells
         */

      }, {
        key: "handleStylingSelectedCells",
        value: function handleStylingSelectedCells() {
          if (this.ndikuStyleCell.table.inlineEditable) {
            var rowId = this.ndikuStyleCell.selectCell.rowId;
            var colId = this.ndikuStyleCell.selectCell.colId;
            var tableCells = this.ndikuStyleCell.table.tableCellStates.tableCellStates;

            if (tableCells[rowId][colId]) {
              this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid #698ad8');
              this.renderer.addClass(this.el.nativeElement, 'cursor');
              this.renderer.setStyle(this.el.nativeElement, 'min-height', '22px');
            } else {
              this.renderer.setStyle(this.el.nativeElement, 'border', 'none');
              this.renderer.removeClass(this.el.nativeElement, 'cursor');
            }

            this.renderer.setStyle(this.el.nativeElement, '-webkit-user-select', 'none');
            /* Webkit  */

            this.renderer.setStyle(this.el.nativeElement, '-moz-user-select', 'none');
            /* Firefox */

            this.renderer.setStyle(this.el.nativeElement, '-ms-user-select', 'none');
            /* IE 10   */

            this.renderer.setStyle(this.el.nativeElement, '-o-user-select', 'none');
            /* Currently not supported in Opera but will be soon */

            this.renderer.setStyle(this.el.nativeElement, 'user-select', 'none');
          }
        }
        /**
         * Adds background and border color to edited cells
         */

      }, {
        key: "visualizeEditedCells",
        value: function visualizeEditedCells() {
          var _this4 = this;

          var table = this.ndikuStyleCell.table;
          var rowId = this.ndikuStyleCell.selectCell.rowId;
          var colId = this.ndikuStyleCell.selectCell.colId;

          if (table.hasBeenEdited(table.tableId)) {
            var editedCells = table.getEditedCellsByTableId(table.tableId);
            editedCells.map(function (cell) {
              if (cell.rowId === rowId && cell.colId === colId) {
                _this4.renderer.setStyle(_this4.el.nativeElement, 'border', '1px solid #B00020');

                _this4.renderer.setStyle(_this4.el.nativeElement, 'background', '#FFB74D');
              }
            });
          } else {
            this.renderer.setStyle(this.el.nativeElement, 'border', 'none');
            this.renderer.setStyle(this.el.nativeElement, 'background', 'none');
          }
        }
      }]);

      return StyleCellDirective;
    }();

    StyleCellDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: TableInlineEditService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleCellDirective.prototype, "ndikuStyleCell", void 0);
    StyleCellDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[ndikuStyleCell]'
    })], StyleCellDirective);

    var TableLayoutModule = function TableLayoutModule() {
      _classCallCheck(this, TableLayoutModule);
    };

    TableLayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [TableLayoutComponent, FormatCellPipe, StyleCellDirective],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], MaterialModule],
      exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], TableLayoutComponent, FormatCellPipe, StyleCellDirective],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["PercentPipe"]]
    })], TableLayoutModule);

    var TableEntryType = /*#__PURE__*/function () {
      function TableEntryType(tableTypeName, tableId, dataSource, inlineEditable, nEditableCols, firstEditableRow, firstEditableCol) {
        _classCallCheck(this, TableEntryType);

        this._ALL_TABLES_STATES = [];
        this._EDITED_CELLS = [];
        this.inlineEditable = false;
        this.enableEditingMode = false;
        this.nRows = 0;

        if (tableTypeName === 'mat-table') {
          this.tableType = TableType.MatTable;
        } else {
          this.tableType = TableType.DefaultTable;
        }

        this.tableId = tableId;
        this.dataSource = dataSource;
        this.nRows = this.dataSource.length - 1;
        this.nEditableCols = nEditableCols;
        this.inlineEditable = inlineEditable;
        this.FIRST_EDITABLE_ROW = firstEditableRow ? firstEditableRow : 0;
        this.FIRST_EDITABLE_COL = firstEditableCol ? firstEditableCol : 0;
        this.LAST_EDITABLE_ROW = this.nRows;
        this.LAST_EDITABLE_COL = nEditableCols ? nEditableCols : 0;
        this.createCellsStates(tableId);
      }

      _createClass(TableEntryType, [{
        key: "createCellsStates",

        /**
         * @description Creates table cells selection states
         * @param tableId contains table id
         */
        value: function createCellsStates(tableId) {
          if (this.inlineEditable && this.nEditableCols) {
            var temp = [];

            for (var iIndex = 0; iIndex <= this.nRows; iIndex++) {
              temp[iIndex] = [];

              for (var jIndex = 0; jIndex <= this.nEditableCols; jIndex++) {
                temp[iIndex][jIndex] = false;
              }
            }

            this.tableCellStates = {
              tableCellStates: temp,
              tableId: tableId,
              FIRST_EDITABLE_ROW: this.FIRST_EDITABLE_ROW,
              LAST_EDITABLE_ROW: this.LAST_EDITABLE_ROW,
              FIRST_EDITABLE_COL: this.FIRST_EDITABLE_COL,
              LAST_EDITABLE_COL: this.LAST_EDITABLE_COL
            };
          } else if (this.inlineEditable) {
            throw new Error('You need to supply number of editable columns for inline editable table.');
          } else {
            return;
          }
        }
        /**
         * Resets cells of the table to default selection states
         */

      }, {
        key: "resetCellsStates",
        value: function resetCellsStates() {
          if (this.tableCellStates.tableCellStates) {
            var temp = [];

            for (var iIndex = 0; iIndex <= this.nRows; iIndex++) {
              temp[iIndex] = [];

              for (var jIndex = 0; jIndex <= this.nEditableCols; jIndex++) {
                temp[iIndex][jIndex] = false;
              }
            }

            this.tableCellStates.tableCellStates = temp;
            this.tableCellStates.FIRST_EDITABLE_ROW = 0;
            this.tableCellStates.LAST_EDITABLE_ROW = this.nRows;
            this.tableCellStates.FIRST_EDITABLE_COL = 0;
            this.tableCellStates.LAST_EDITABLE_COL = this.nEditableCols;
          }
        }
      }, {
        key: "getEditedCellsByTableId",

        /**
         * @description Returns all edited cells of a give table by table id
         * @param tableId contains table id
         */
        value: function getEditedCellsByTableId(tableId) {
          var _this5 = this;

          var editedCells = this._EDITED_CELLS.filter(function (el) {
            if (tableId) {
              return el.tableId === tableId;
            } else {
              return el.tableId === _this5.tableId;
            }
          });

          return editedCells;
        }
        /**
         * @description Updates table's edited cells history
         * @param editedCell contains edited cell properties
         */

      }, {
        key: "saveEditedCell",
        value: function saveEditedCell(editedCell) {
          var _this6 = this;

          if (this.hasBeenEdited) {
            var foundEdited = this._EDITED_CELLS.find(function (cell, index) {
              if (cell.colId === editedCell.colId && cell.colId === editedCell.colId && cell.tableId === editedCell.tableId) {
                return _this6._EDITED_CELLS[index] = editedCell;
              }
            });

            if (!foundEdited) {
              this._EDITED_CELLS.push(editedCell);
            }
          } else {
            this._EDITED_CELLS.push(editedCell);
          }
        }
        /**
         * @description Returns all edited cells of a column
         * @param header contains header as a string
         */

      }, {
        key: "getEditedCellsByHeader",
        value: function getEditedCellsByHeader(header) {
          var editedCells = this._EDITED_CELLS.filter(function (el) {
            return el.header === header;
          });

          return editedCells;
        }
        /**
         * @description Return edited cells by column and row number
         * @param rowNumber contains row number
         * @param colNumber contains column number
         */

      }, {
        key: "getEditedCellsByrowCol",
        value: function getEditedCellsByrowCol(rowNumber, colNumber) {
          var editedCells = [];

          if (rowNumber && colNumber) {
            editedCells = this._EDITED_CELLS.filter(function (el) {
              return el.rowId === rowNumber && el.colId === colNumber;
            });
          } else if (rowNumber && !colNumber) {
            editedCells = this._EDITED_CELLS.filter(function (el) {
              return el.rowId === rowNumber;
            });
          } else if (colNumber && !rowNumber) {
            editedCells = this._EDITED_CELLS.filter(function (el) {
              return el.colId === colNumber;
            });
          } else {
            throw new Error('You must provide either a row number or column number');
          }

          return editedCells;
        }
        /**
         * @description Returns true if a table has edited cells history
         * @param tableId contains table id
         */

      }, {
        key: "hasBeenEdited",
        value: function hasBeenEdited(tableId) {
          var hasBeenEdited = false;
          var tableCells = [];

          if (tableId) {
            tableCells = this.getEditedCellsByTableId(tableId);
          } else {
            tableCells = this.getEditedCellsByTableId();
          }

          if (tableCells.length !== 0) {
            hasBeenEdited = true;
          }

          return hasBeenEdited;
        }
        /**
         * @description Removes edited cells history
         * @param tableId contains table id
         */

      }, {
        key: "clearEditedCells",
        value: function clearEditedCells(tableId) {
          var _this7 = this;

          var editedCells = this._EDITED_CELLS.filter(function (el) {
            if (tableId) {
              return el.tableId !== tableId;
            } else {
              return el.tableId !== _this7.tableId;
            }
          });

          this._EDITED_CELLS = editedCells;
        }
      }, {
        key: "tableType",
        get: function get() {
          return this._TABLE_TYPE;
        },
        set: function set(tableType) {
          this._TABLE_TYPE = tableType;
        }
      }, {
        key: "tableId",
        get: function get() {
          return this._TABLE_ID;
        },
        set: function set(tableId) {
          this._TABLE_ID = tableId;
        }
      }, {
        key: "tableCellStates",
        set: function set(tableCellStates) {
          this._ALL_TABLES_STATES.push(tableCellStates);
        },
        get: function get() {
          var _this8 = this;

          var tableCellStates = this._ALL_TABLES_STATES.filter(function (el) {
            return el.tableId === _this8.tableId;
          });

          return tableCellStates[0];
        }
      }]);

      return TableEntryType;
    }();
    /*
     * Public API Surface of ng-components-ndiku
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ng-components-ndiku.js.map

    /***/

  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!************************************************************************************************************************!*\
    !*** /home/travis/build/adrien19/ng-components-ndiku/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n  <div class=\"row content-row\">\n    <div class=\"col-12 content-col\">\n      <ndiku-ng-select [name]=\"'ng-components-ndiku'\"></ndiku-ng-select>\n      <h2>CLICK THE BUTTON TO SEE MAGIC!</h2>\n      <h3>This will create an input control.</h3>\n      <form [formGroup]=\"editBaseForm\" (ngSubmit)=\"onAddItem()\">\n        <p>{{ enteredEmail }}</p>\n        <ndiku-ng-input\n          required\n          notEmpty\n          parentForm=\"editBaseForm\"\n          type=\"email\"\n          id=\"email\"\n          label=\"Email\"\n          placeholder=\"Enter email\"\n          onComponentReady=\"addChild('emailGroup', $event)\"\n        ></ndiku-ng-input>\n\n        <p>{{ enteredPassword }}</p>\n        <ndiku-ng-input\n          required\n          notEmpty\n          parentForm=\"editBaseForm\"\n          type=\"password\"\n          id=\"password\"\n          label=\"Password\"\n          placeholder=\"Enter password\"\n          onComponentReady=\"addChild('passwordGroup', $event)\"\n        ></ndiku-ng-input>\n      </form>\n\n      <button mat-flat-button color=\"primary\" (click)=\"subscribeToEmailValue()\">\n        Subscribe to Email value\n      </button>\n      <button\n        mat-flat-button\n        color=\"accent\"\n        (click)=\"subscribeToPasswordValue()\"\n      >\n        Subscribe to Password value\n      </button>\n      <button mat-flat-button color=\"warn\" (click)=\"unSubscribeToInputValue()\">\n        Unsubscribe to input values\n      </button>\n\n      <!-- below are for table -->\n      <h2 style=\"margin-top: 30px; text-align: center;\">TABLE COMPONENT</h2>\n      <P>\n        The 'ndiku-table-layout' provides a reusable table that takes care of\n        mapping data headers appropriately. For example, when we have nested\n        objects or null values. Also, provides the ability to pass column\n        configuration to control how data is displayed. See below for\n        examples...\n      </P>\n      <app-table-demo class=\"app-table-demo\"></app-table-demo>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container-fluid {\n  height: 100% !important;\n}\n.container-fluid > .content-row {\n  height: inherit !important;\n  padding: 15px;\n}\n.container-fluid > .content-row > ng-ndiku-input {\n  min-height: 50px;\n}\n.mat-flat-button {\n  margin-right: 15px;\n  margin-top: 15px;\n}\n::ng-deep .app-table-demo .container-fluid {\n  width: 550px;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hZHJpZW4xOS9uZy1jb21wb25lbnRzLW5kaWt1L3Byb2plY3RzL25nLWNvbXBvbmVudHMtbmRpa3Utc2hvd2Nhc2Uvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9uZy1jb21wb25lbnRzLW5kaWt1LXNob3djYXNlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUNDSjtBREFJO0VBQ0ksMEJBQUE7RUFDQSxhQUFBO0FDRVI7QURBUTtFQUNJLGdCQUFBO0FDRVo7QURJQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNERjtBREtBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDRkYiLCJmaWxlIjoicHJvamVjdHMvbmctY29tcG9uZW50cy1uZGlrdS1zaG93Y2FzZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgID4gLmNvbnRlbnQtcm93IHtcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG5cbiAgICAgICAgPiBuZy1uZGlrdS1pbnB1dCB7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbi5tYXQtZmxhdC1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cblxuOjpuZy1kZWVwIC5hcHAtdGFibGUtZGVtbyAuY29udGFpbmVyLWZsdWlkIHtcbiAgd2lkdGg6IDU1MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuIiwiLmNvbnRhaW5lci1mbHVpZCB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lci1mbHVpZCA+IC5jb250ZW50LXJvdyB7XG4gIGhlaWdodDogaW5oZXJpdCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLmNvbnRhaW5lci1mbHVpZCA+IC5jb250ZW50LXJvdyA+IG5nLW5kaWt1LWlucHV0IHtcbiAgbWluLWhlaWdodDogNTBweDtcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuOjpuZy1kZWVwIC5hcHAtdGFibGUtZGVtbyAuY29udGFpbmVyLWZsdWlkIHtcbiAgd2lkdGg6IDU1MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ng_components_ndiku__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-components-ndiku */
    "../../dist/ng-components-ndiku/fesm2015/ng-components-ndiku.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(fb, ngComponentsNdikuService) {
        _classCallCheck(this, AppComponent);

        this.ngComponentsNdikuService = ngComponentsNdikuService;
        this.title = 'ng-components-ndiku-showcase';
        this.enteredEmail = '';
        this.enteredPassword = '';
        this.editBaseForm = fb.group({
          name: ['']
        });
      }

      _createClass(AppComponent, [{
        key: "onAddItem",
        value: function onAddItem() {}
      }, {
        key: "subscribeToEmailValue",
        value: function subscribeToEmailValue() {
          var _this9 = this;

          this.emailValueSubscription = this.ngComponentsNdikuService.inputValueChanged$.subscribe(function (value) {
            _this9.enteredEmail = value;
          });
        }
      }, {
        key: "subscribeToPasswordValue",
        value: function subscribeToPasswordValue() {
          var _this10 = this;

          this.passwordValueSubscription = this.ngComponentsNdikuService.inputValueChanged$.subscribe(function (value) {
            _this10.enteredPassword = value;
          });
        }
      }, {
        key: "unSubscribeToInputValue",
        value: function unSubscribeToInputValue() {
          if (this.emailValueSubscription) {
            this.emailValueSubscription.unsubscribe();
          }

          if (this.passwordValueSubscription) {
            this.passwordValueSubscription.unsubscribe();
          }
        }
      }, {
        key: "addChild",
        value: function addChild(childName, childGroup) {
          this.editBaseForm.addControl(childName, childGroup);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: ng_components_ndiku__WEBPACK_IMPORTED_MODULE_2__["NgComponentsNdikuService"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var ng_components_ndiku__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-components-ndiku */
    "../../dist/ng-components-ndiku/fesm2015/ng-components-ndiku.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _table_data_table_demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./table-data/table-demo.component */
    "./src/app/table-data/table-demo.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _table_data_table_demo_component__WEBPACK_IMPORTED_MODULE_8__["TableDemoComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], ng_components_ndiku__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], ng_components_ndiku__WEBPACK_IMPORTED_MODULE_4__["NgComponentsNdikuModule"], ng_components_ndiku__WEBPACK_IMPORTED_MODULE_4__["NgComponentsNdikuSelectModule"], ng_components_ndiku__WEBPACK_IMPORTED_MODULE_4__["TableLayoutModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _table_data_table_demo_component__WEBPACK_IMPORTED_MODULE_8__["TableDemoComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/table-data/fake-data.ts":
  /*!*****************************************!*\
    !*** ./src/app/table-data/fake-data.ts ***!
    \*****************************************/

  /*! exports provided: PROJECTS, PERSONNEL */

  /***/
  function srcAppTableDataFakeDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PROJECTS", function () {
      return PROJECTS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PERSONNEL", function () {
      return PERSONNEL;
    });

    var PROJECTS = [{
      id: 1,
      name: 'Mercury',
      cost: 277000000,
      FIRST_FLIGHT: 'September 9, 1959',
      status: 'Complete'
    }, {
      id: 2,
      name: 'Gemini',
      cost: 1300000000,
      FIRST_FLIGHT: 'April 8, 1964',
      status: 'Complete'
    }, {
      id: 3,
      name: 'Apollo',
      cost: 25400000000,
      FIRST_FLIGHT: 'February 26, 1966',
      status: 'Complete'
    }, {
      id: 4,
      name: 'Skylab',
      launch: 'May 14, 1973',
      status: 'Complete'
    }, {
      id: 5,
      name: 'Apollo-Soyuz',
      launch: 'July 15, 1975',
      status: 'Complete'
    }, {
      id: 6,
      name: 'Space Shuttle',
      TOTAL_COST: 196000000000,
      FIRST_FLIGHT: 'August 12, 1977',
      status: 'Complete'
    }];
    var PERSONNEL = [{
      id: 151,
      name: 'Alan B. Shepard, Jr.',
      job: 'Astronaut',
      YEAR_JOINED: 1959,
      missions: ['MR-3', 'Apollo 14'],
      crewWith: [{
        id: 175,
        name: 'Stuart Roosa'
      }, {
        id: 176,
        name: 'Edgar Mitchell'
      }]
    }, {
      id: 152,
      name: 'Virgil I. Grissom',
      job: 'Astronaut',
      YEAR_JOINED: 1959,
      missions: ['MR-4', 'Apollo 1']
    }, {
      id: 153,
      name: 'John H. Glenn, Jr.',
      job: 'Astronaut',
      YEAR_JOINED: 1959,
      missions: ['MA-6', 'STS-95']
    }, {
      id: 154,
      name: 'M. Scott Carpenter',
      job: 'Astronaut',
      YEAR_JOINED: 1959,
      missions: ['MA-7']
    }, {
      id: 161,
      name: 'James A. Lovell',
      job: 'Astronaut',
      YEAR_JOINED: 1962,
      missions: ['Gemini 7', 'Gemini 12', 'Apollo 8', 'Apollo 13'],
      manager: {
        id: 157,
        name: 'Deke Slayton'
      }
    }];
    /***/
  },

  /***/
  "./src/app/table-data/table-demo.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/table-data/table-demo.component.ts ***!
    \****************************************************/

  /*! exports provided: TableDemoComponent */

  /***/
  function srcAppTableDataTableDemoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableDemoComponent", function () {
      return TableDemoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _tableDataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tableDataService */
    "./src/app/table-data/tableDataService.ts");
    /* harmony import */


    var ng_components_ndiku__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-components-ndiku */
    "../../dist/ng-components-ndiku/fesm2015/ng-components-ndiku.js");

    var TableDemoComponent = /*#__PURE__*/function () {
      function TableDemoComponent(tableDataService, inlineTableDataService) {
        _classCallCheck(this, TableDemoComponent);

        this.tableDataService = tableDataService;
        this.inlineTableDataService = inlineTableDataService;
        this.projectsTableConfigSettings = [{
          primaryKey: 'name',
          header: 'Name',
          editable: true
        }, {
          primaryKey: 'first_Launch',
          header: 'First Launch',
          format: {
            formatType: 'date',
            dateFormat: 'short'
          },
          alternativeKeys: ['launch', 'FIRST_FLIGHT'],
          editable: true
        }, {
          primaryKey: 'cost',
          header: 'Cost',
          format: {
            formatType: 'currency',
            currencyCode: 'USD'
          },
          alternativeKeys: ['TOTAL_COST'],
          editable: true
        }];
        this.personnelSettings = [{
          primaryKey: 'name',
          editable: true
        }, {
          primaryKey: 'YEAR_JOINED',
          header: 'Joined',
          format: {
            formatType: 'date',
            dateFormat: 'yyyy'
          },
          editable: true
        }, {
          primaryKey: 'missions',
          editable: true
        }, {
          primaryKey: 'manager',
          editable: true
        }, {
          primaryKey: 'crewWith',
          header: 'Crew mates',
          editable: true
        }];
      }

      _createClass(TableDemoComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.inlineTableDataSub) {
            this.inlineTableDataSub.unsubscribe();
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.projects = this.tableDataService.getProjects();
          this.people = this.tableDataService.getPersonnel();
          this.tableConfig = new ng_components_ndiku__WEBPACK_IMPORTED_MODULE_3__["TableEntryType"]('mat-table', 'projectsTable', this.projects, true, 3);
          this.peapleTableConfig = new ng_components_ndiku__WEBPACK_IMPORTED_MODULE_3__["TableEntryType"]('default', 'peapleTable', this.people, true, 5);
          this.inlineTableDataSub = this.inlineTableDataService.dataSource$.subscribe(function (data) {
            if (data) {
              if (data.table.tableId === _this11.tableConfig.tableId) {
                _this11.tableConfig = data.table;
                _this11.projects = data.table.dataSource;
                console.log("THESE ARE RETURNED: ".concat(data.table.dataSource[0].cost));
              } else {
                _this11.peapleTableConfig = data.table;
                _this11.people = data.table.dataSource;
              }
            }
          });
        }
      }, {
        key: "clearEditedTableData",
        value: function clearEditedTableData() {
          if (this.tableConfig.hasBeenEdited(this.tableConfig.tableId)) {
            this.tableConfig.clearEditedCells(this.tableConfig.tableId);
          }

          if (this.peapleTableConfig.hasBeenEdited(this.peapleTableConfig.tableId)) {
            this.peapleTableConfig.clearEditedCells(this.peapleTableConfig.tableId);
          }

          this.inlineTableDataService.clearSavedDataInitiated$.next(); // send an event to clear colored edited data
        }
      }]);

      return TableDemoComponent;
    }();

    TableDemoComponent.ctorParameters = function () {
      return [{
        type: _tableDataService__WEBPACK_IMPORTED_MODULE_2__["TableDataService"]
      }, {
        type: ng_components_ndiku__WEBPACK_IMPORTED_MODULE_3__["TableInlineEditService"]
      }];
    };

    TableDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-table-demo",
      template: "\n    <div class=\"container-fluid\">\n      <ng-container>\n        <button\n          mat-flat-button\n          color=\"primary\"\n          (click)=\"clearEditedTableData()\"\n        >\n          Clear Edited Table data\n        </button>\n      </ng-container>\n\n      <ndiku-table-layout\n        [table]=\"tableConfig\"\n        [caption]=\"'NASA Projects'\"\n        [settings]=\"projectsTableConfigSettings\"\n        class=\" tableCaption projectsTable\"\n      >\n      </ndiku-table-layout>\n      <ndiku-table-layout\n        [table]=\"peapleTableConfig\"\n        [caption]=\"'NASA Astronauts'\"\n        [settings]=\"personnelSettings\"\n        class=\" tableCaption astronautsTable\"\n      >\n      </ndiku-table-layout>\n    </div>\n  ",
      styles: ["\n      ::ng-deep .tableCaption table caption {\n        font-size: 28px;\n        font-weight: bold;\n        padding-bottom: 20px;\n      }\n\n      ::ng-deep .tableCaption table {\n        background-color: white;\n        margin-top: 30px;\n      }\n    "]
    })], TableDemoComponent);
    /***/
  },

  /***/
  "./src/app/table-data/tableDataService.ts":
  /*!************************************************!*\
    !*** ./src/app/table-data/tableDataService.ts ***!
    \************************************************/

  /*! exports provided: TableDataService */

  /***/
  function srcAppTableDataTableDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableDataService", function () {
      return TableDataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fake_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./fake-data */
    "./src/app/table-data/fake-data.ts"); // ./project-center/project.service.ts


    var TableDataService = /*#__PURE__*/function () {
      function TableDataService() {
        _classCallCheck(this, TableDataService);
      }

      _createClass(TableDataService, [{
        key: "getProjects",
        value: function getProjects() {
          // actual implementation would use async method
          return _fake_data__WEBPACK_IMPORTED_MODULE_2__["PROJECTS"];
        }
      }, {
        key: "getPersonnel",
        value: function getPersonnel() {
          return _fake_data__WEBPACK_IMPORTED_MODULE_2__["PERSONNEL"];
        }
      }]);

      return TableDataService;
    }();

    TableDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TableDataService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/travis/build/adrien19/ng-components-ndiku/projects/ng-components-ndiku-showcase/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map