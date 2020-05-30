(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/ng-components-ndiku/fesm2015/ng-components-ndiku.js":
/*!****************************************************************************************************************!*\
  !*** /home/travis/build/adrien19/ng-components-ndiku/dist/ng-components-ndiku/fesm2015/ng-components-ndiku.js ***!
  \****************************************************************************************************************/
/*! exports provided: ClickElsewhereDirective, ColumnMap, ColumnSetting, FormatCellPipe, MaterialModule, MyErrorStateMatcher, NgComponentsNdikuComponent, NgComponentsNdikuModule, NgComponentsNdikuSelectComponent, NgComponentsNdikuSelectModule, NgComponentsNdikuService, StyleCellDirective, TableEntryType, TableInlineEditService, TableLayoutComponent, TableLayoutModule, TableType, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickElsewhereDirective", function() { return ClickElsewhereDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnMap", function() { return ColumnMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnSetting", function() { return ColumnSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatCellPipe", function() { return FormatCellPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgComponentsNdikuComponent", function() { return NgComponentsNdikuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgComponentsNdikuModule", function() { return NgComponentsNdikuModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgComponentsNdikuSelectComponent", function() { return NgComponentsNdikuSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgComponentsNdikuSelectModule", function() { return NgComponentsNdikuSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgComponentsNdikuService", function() { return NgComponentsNdikuService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleCellDirective", function() { return StyleCellDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableEntryType", function() { return TableEntryType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableInlineEditService", function() { return TableInlineEditService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableLayoutComponent", function() { return TableLayoutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableLayoutModule", function() { return TableLayoutModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableType", function() { return TableType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ "../../node_modules/@angular/material/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "../../node_modules/@angular/material/fesm2015/select.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/fesm2015/table.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/fesm2015/snack-bar.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/coercion */ "../../node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
















let ClickElsewhereDirective = class ClickElsewhereDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.ndikuClickedElseWhere = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onClick(event) {
        const targetElement = event.target;
        // Check if the click was outside the element
        if (targetElement &&
            !this.elementRef.nativeElement.contains(targetElement)) {
            this.ndikuClickedElseWhere.emit();
        }
    }
};
ClickElsewhereDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ClickElsewhereDirective.prototype, "ndikuClickedElseWhere", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event'])
], ClickElsewhereDirective.prototype, "onClick", null);
ClickElsewhereDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[ndikuClickElseWhere]' })
], ClickElsewhereDirective);

const importedModules = [
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
];
let MaterialModule = class MaterialModule {
};
MaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [ClickElsewhereDirective],
        imports: importedModules,
        exports: [...importedModules, ClickElsewhereDirective],
    })
], MaterialModule);

let NgComponentsNdikuService = class NgComponentsNdikuService {
    constructor() {
        this.inputValueChanged$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
    }
};
NgComponentsNdikuService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function NgComponentsNdikuService_Factory() { return new NgComponentsNdikuService(); }, token: NgComponentsNdikuService, providedIn: "root" });
NgComponentsNdikuService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], NgComponentsNdikuService);

/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control &&
            control.invalid &&
            (control.dirty || control.touched || isSubmitted));
    }
}

let NgComponentsNdikuComponent = class NgComponentsNdikuComponent {
    constructor(fb, ngComponentsNdikuService) {
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
    get required() {
        return this._REQUIRED;
    }
    set required(value) {
        this._REQUIRED = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__["coerceBooleanProperty"])(value);
    }
    get notEmpty() {
        return this._NOTEMPTY;
    }
    set notEmpty(value) {
        this._NOTEMPTY = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__["coerceBooleanProperty"])(value);
    }
    get type() {
        return this._INTPUT_TYPE;
    }
    set type(value) {
        this._INTPUT_TYPE = value;
    }
    get id() {
        return this._INPUT_ID;
    }
    set id(value) {
        this._INPUT_ID = value;
    }
    get label() {
        return this._INPUT_LABEL;
    }
    set label(value) {
        this._INPUT_LABEL = value;
    }
    get placeholder() {
        return this._INPUT_PLACEHOLDER;
    }
    set placeholder(value) {
        this._INPUT_PLACEHOLDER = value;
    }
    get onComponentReady() {
        return this._ON_COMPONENT_READY;
    }
    set onComponentReady(value) {
        this._ON_COMPONENT_READY = value;
    }
    ngOnInit() {
        // construct validators based on component input properties
        const validators = [];
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
            input: ['', validators],
        });
        this.inputSub = this.componentFormGroup.controls.input.valueChanges.subscribe((value) => {
            this.ngComponentsNdikuService.inputValueChanged$.next(value);
        });
        this.onComponentReady.emit(this.componentFormGroup);
    }
    ngOnDestroy() {
        if (this.ngComponentsNdikuService.inputValueChanged$) {
            this.ngComponentsNdikuService.inputValueChanged$.unsubscribe();
        }
        if (this.inputSub) {
            this.inputSub.unsubscribe();
        }
    }
};
NgComponentsNdikuComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
    { type: NgComponentsNdikuService }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgComponentsNdikuComponent.prototype, "required", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgComponentsNdikuComponent.prototype, "notEmpty", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgComponentsNdikuComponent.prototype, "type", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgComponentsNdikuComponent.prototype, "id", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgComponentsNdikuComponent.prototype, "label", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgComponentsNdikuComponent.prototype, "placeholder", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgComponentsNdikuComponent.prototype, "onComponentReady", null);
NgComponentsNdikuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ndiku-ng-input',
        template: `
    <form [formGroup]="componentFormGroup">
      <mat-form-field>
        <mat-label *ngIf="label">{{ label }}</mat-label>
        <input
          matInput
          [type]="type"
          [id]="id"
          [placeholder]="placeholder"
          formControlName="input"
          [errorStateMatcher]="matcher"
        />

        <mat-error
          *ngIf="
            type === 'email' &&
            required &&
            componentFormGroup.controls.input.hasError('required')
          "
        >
          email field is required.
        </mat-error>
        <mat-error
          *ngIf="
            type === 'email' &&
            required &&
            !componentFormGroup.controls.input.hasError('required') &&
            !componentFormGroup.controls.input.valid
          "
        >
          Please enter valid email.
        </mat-error>
        <mat-error
          *ngIf="
            type === 'email' &&
            !required &&
            !componentFormGroup.controls.input.valid
          "
        >
          Please enter valid email.
        </mat-error>

        <mat-error
          *ngIf="
            type === 'password' &&
            required &&
            componentFormGroup.controls.input.hasError('required')
          "
        >
          password field is required.
        </mat-error>

        <mat-error
          *ngIf="
            type !== 'email' &&
            type !== 'password' &&
            required &&
            componentFormGroup.controls.input.hasError('required')
          "
        >
          Please enter valid input.
        </mat-error>
      </mat-form-field>
    </form>
  `,
        styles: ['']
    })
], NgComponentsNdikuComponent);

let NgComponentsNdikuModule = class NgComponentsNdikuModule {
};
NgComponentsNdikuModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [NgComponentsNdikuComponent],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            MaterialModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
        ],
        exports: [NgComponentsNdikuComponent],
    })
], NgComponentsNdikuModule);

let NgComponentsNdikuSelectComponent = class NgComponentsNdikuSelectComponent {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgComponentsNdikuSelectComponent.prototype, "name", void 0);
NgComponentsNdikuSelectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ndiku-ng-select',
        template: `<h2>Welcome to {{ name }} demo!</h2>`
    })
], NgComponentsNdikuSelectComponent);

let NgComponentsNdikuSelectModule = class NgComponentsNdikuSelectModule {
};
NgComponentsNdikuSelectModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [NgComponentsNdikuSelectComponent],
        exports: [NgComponentsNdikuSelectComponent],
    })
], NgComponentsNdikuSelectModule);

let FormatCellPipe = class FormatCellPipe {
    constructor(currencyPipe, datePipe, percentPipe) {
        this.currencyPipe = currencyPipe;
        this.datePipe = datePipe;
        this.percentPipe = percentPipe;
    }
    transform(value, format) {
        const symbol = '';
        if (value === undefined) {
            return 'not available';
        }
        if (format.formatType === 'default') {
            if (Array.isArray(value)) {
                if (typeof value[0] !== 'object') {
                    return value.join(', ');
                }
                else {
                    return value
                        .map((obj) => {
                        return obj.name;
                    })
                        .join(', ');
                }
            }
            if (typeof value === 'object') {
                return value.name;
            }
        }
        if (format.formatType === 'currency') {
            if (format.currencySymbol && format.currencyCode) {
                return this.currencyPipe.transform(value, format.currencyCode, format.currencySymbol);
            }
            else if (format.currencyCode) {
                return this.currencyPipe.transform(value, format.currencyCode);
            }
            else if (format.currencySymbol) {
                return this.currencyPipe.transform(value, format.currencySymbol);
            }
            else {
                return this.currencyPipe.transform(value);
            }
        }
        if (format.formatType === 'date') {
            if (format.dateFormat && format.dateTimeZone) {
                return this.datePipe.transform(value, format.dateFormat, format.dateTimeZone);
            }
            else if (format.dateFormat) {
                return this.datePipe.transform(value, format.dateFormat);
            }
            else if (format.dateTimeZone) {
                return this.datePipe.transform(value, format.dateTimeZone);
            }
            else {
                return this.datePipe.transform(value);
            }
        }
        if (format.formatType === 'percent') {
            if (format.percentFormat) {
                return this.percentPipe.transform(value, format.percentFormat);
            }
            else {
                return this.percentPipe.transform(value);
            }
        }
        return value;
    }
};
FormatCellPipe.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["CurrencyPipe"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["PercentPipe"] }
];
FormatCellPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'formatCell' })
], FormatCellPipe);

var TableType;
(function (TableType) {
    TableType[TableType["MatTable"] = 0] = "MatTable";
    TableType[TableType["DefaultTable"] = 1] = "DefaultTable";
})(TableType || (TableType = {}));
class ColumnSetting {
}
class ColumnMap {
    constructor(settings) {
        this.access = function (object) {
            if (object[this.primaryKey] || !this.alternativeKeys) {
                return this.primaryKey;
            }
            for (const key of this.alternativeKeys) {
                if (object[key]) {
                    return key;
                }
            }
            return this.primaryKey;
        };
        this.primaryKey = settings.primaryKey;
        this.header = settings.header;
        this.format = settings.format;
        this.alternativeKeys = settings.alternativeKeys;
        this.editable = settings.editable;
    }
    set header(setting) {
        this._HEADER = setting
            ? setting
            : this.primaryKey.slice(0, 1).toUpperCase() +
                this.primaryKey.replace(/_/g, ' ').slice(1);
    }
    get header() {
        return this._HEADER;
    }
    set format(setting) {
        this._FORMAT = setting ? setting : { formatType: 'default' };
    }
    get format() {
        return this._FORMAT;
    }
    set editable(setting) {
        this._EDITABLE = setting ? setting : false;
    }
    get editable() {
        return this._EDITABLE;
    }
}

let TableInlineEditService = class TableInlineEditService {
    constructor(snackBar) {
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
    updateSelectedCellsValues(text) {
        if (text == null) {
            return;
        }
        if (this.tableMouseDown && this.tableMouseUp) {
            if (this.tableMouseDown.cellsType === this.tableMouseUp.cellsType) {
                const dataCopy = this.table.dataSource.slice();
                let startCol;
                let endCol;
                let startRow;
                let endRow;
                if (this.tableMouseDown.colId <= this.tableMouseUp.colId) {
                    endCol = this.tableMouseUp.colId;
                    startCol = this.tableMouseDown.colId;
                }
                else {
                    endCol = this.tableMouseDown.colId;
                    startCol = this.tableMouseUp.colId;
                }
                if (this.tableMouseDown.rowId <= this.tableMouseUp.rowId) {
                    startRow = this.tableMouseDown.rowId;
                    endRow = this.tableMouseUp.rowId;
                }
                else {
                    endRow = this.tableMouseDown.rowId;
                    startRow = this.tableMouseUp.rowId;
                }
                // --Edit cells from the same column
                if (startCol === endCol) {
                    for (let i = startRow; i <= endRow; i++) {
                        const record = dataCopy[i];
                        if (record) {
                            dataCopy[i][this.columnMaps[startCol].access(record)] = text;
                            const editedCell = {
                                rowId: i,
                                colId: startCol,
                                header: this.columnMaps[startCol].header,
                                newCellValue: text,
                                tableId: this.table.tableId,
                                editedTimestamp: +new Date(),
                            };
                            this.table.saveEditedCell(editedCell);
                        }
                        else {
                            throw new Error('No record found!');
                        }
                    }
                }
                else {
                    // --Edit cells starting and ending not on the same column
                    for (let i = startRow; i <= endRow; i++) {
                        for (let j = startCol; j <= endCol; j++) {
                            const record = dataCopy[i];
                            if (record) {
                                dataCopy[i][this.columnMaps[j].access(record)] = text;
                                const editedCell = {
                                    rowId: i,
                                    colId: j,
                                    header: this.columnMaps[j].header,
                                    newCellValue: text,
                                    tableId: this.table.tableId,
                                    editedTimestamp: +new Date(),
                                };
                                this.table.saveEditedCell(editedCell);
                            }
                            else {
                                throw new Error('No record found!');
                            }
                        }
                    }
                }
                // dataSource = dataCopy;
                this.table.dataSource = dataCopy;
                this.dataSource$.next({ table: this.table });
            }
            else {
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
    onMouseDownTable(rowId, colId, cellsType) {
        this.tableMouseDown = { rowId, colId, cellsType };
    }
    /**
     * @description updates cell properties of selected cell on mouse released
     * @param rowId contains row number
     * @param colId contains column number
     * @param cellsType contains header as string
     */
    onMouseUpTable(rowId, colId, cellsType) {
        this.tableMouseUp = { rowId, colId, cellsType };
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
    updateSelectedCellsState(mouseDownColId, mouseUpColId, mouseDownRowId, mouseUpRowId) {
        // init selected cells
        this.setSelectedCells(this.table.tableCellStates.FIRST_EDITABLE_ROW, this.table.tableCellStates.LAST_EDITABLE_ROW, this.table.tableCellStates.FIRST_EDITABLE_COL, this.table.tableCellStates.LAST_EDITABLE_COL, false);
        // update selected cells
        let startCol;
        let endCol;
        let startRow;
        let endRow;
        if (mouseDownColId <= mouseUpColId) {
            startCol = mouseDownColId;
            endCol = mouseUpColId;
        }
        else {
            endCol = mouseDownColId;
            startCol = mouseUpColId;
        }
        if (mouseDownRowId <= mouseUpRowId) {
            startRow = mouseDownRowId;
            endRow = mouseUpRowId;
        }
        else {
            endRow = mouseDownRowId;
            startRow = mouseUpRowId;
        }
        for (let i = startRow; i <= endRow; i++) {
            for (let j = startCol; j <= endCol; j++) {
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
    setSelectedCells(firstEditableRow, lastEditableRow, firstEditableCol, lastEditableCol, value) {
        for (let i = firstEditableRow; i <= lastEditableRow; i++) {
            for (let j = firstEditableCol; j <= lastEditableCol; j++) {
                this.table.tableCellStates.tableCellStates[i][j] = value;
            }
        }
        this.updateCellStyle$.next(); // sending an event to update the selected cells in directive
    }
    /**
     * @description After the user enters a new value, all selected cells must be updated
     * @param event contains keyboard related event data
     */
    onKeyUpTable(event) {
        // If no cell is selected then ignore keyUp event
        if (this.tableMouseDown && this.tableMouseUp) {
            if (event.key === 'Delete') {
                this.newCellValue = '';
                this.updateSelectedCellsValues(this.newCellValue);
            }
            else if (event.key === 'Backspace') {
                // 'delete' key is pressed
                const end = this.newCellValue.length - 1;
                this.newCellValue = this.newCellValue.slice(0, end);
                this.updateSelectedCellsValues(this.newCellValue);
            }
            else if (this.isNotSpecialKeys(event)) {
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
    isNotSpecialKeys(event) {
        const specialKeys = [
            'Enter',
            'PrintScreen',
            'Escape',
            'cControl',
            'NumLock',
            'PageUp',
            'PageDown',
            'End',
            'Home',
            'Insert',
            'ContextMenu',
            'Control',
            'ControlAltGraph',
            'Alt',
            'Meta',
            'Shift',
            'CapsLock',
            'TabTab',
            'ArrowRight',
            'ArrowLeft',
            'ArrowDown',
            'ArrowUp',
            'Pause',
            'ScrollLock',
            'Dead',
            '',
            'F1',
            'F2',
            'F3',
            'F4',
            'F5',
            'F6',
            'F7',
            'F8',
            'F9',
            'F10',
            'F11',
            'F12',
        ];
        return this.indexOfInArray(event.key, specialKeys) === -1;
    }
    /**
     * @description returns an index of item in array
     * @param item contains keyboard key to evaluate
     * @param array contains array of keyboard keys
     */
    indexOfInArray(item, array) {
        let index = -1;
        for (let i = 0; i < array.length; i++) {
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
    openSnackBar(message, action) {
        const snackBarMessage = {
            message,
            action,
        };
        this.snackBarMessage$.next(snackBarMessage);
    }
};
TableInlineEditService.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }
];
TableInlineEditService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function TableInlineEditService_Factory() { return new TableInlineEditService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"])); }, token: TableInlineEditService, providedIn: "root" });
TableInlineEditService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], TableInlineEditService);

let TableLayoutComponent = class TableLayoutComponent {
    constructor(snackBar, tableInlineEditService) {
        this.snackBar = snackBar;
        this.tableInlineEditService = tableInlineEditService;
        this.saveTableButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editTableButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.types = TableType;
        this.editingMode = false;
    }
    get caption() {
        return this._CAPTION;
    }
    set caption(value) {
        this._CAPTION = value;
    }
    get settings() {
        return this._SETTINGS;
    }
    set settings(value) {
        this._SETTINGS = value;
    }
    get table() {
        return this._TABLE;
    }
    set table(tableType) {
        this._TABLE = tableType;
    }
    ngOnDestroy() {
        if (this.snackBarServiceSub) {
            this.snackBarServiceSub.unsubscribe();
        }
    }
    ngOnInit() {
        if (this.table.inlineEditable) {
            this.tableInlineEditService.table = this.table;
            this.handleUnmatchingCellTypes();
        }
    }
    ngOnChanges(changes) {
        if (changes.settings) {
            if (this.settings) {
                // when settings provided
                this.columnMaps = this.settings.map((col) => new ColumnMap(col));
            }
            else {
                // no settings, create column maps with defaults
                this.columnMaps = Object.keys(this.table.dataSource[0]).map((key) => {
                    return new ColumnMap({ primaryKey: key });
                });
            }
            this.displayedColumns = this.columnMaps.map((col) => col.header);
        }
    }
    handleUnmatchingCellTypes() {
        this.snackBarServiceSub = this.tableInlineEditService.snackBarMessage$.subscribe((receivedSnackBarMessage) => {
            if (receivedSnackBarMessage) {
                const snackBarRef = this.snackBar.open(receivedSnackBarMessage.message, receivedSnackBarMessage.action, { duration: 3000 });
                if (receivedSnackBarMessage.action === 'DISMISS') {
                    snackBarRef.afterDismissed().subscribe(() => {
                        this.enterKeyPressed();
                    });
                    snackBarRef.onAction().subscribe(() => {
                        this.enterKeyPressed();
                    });
                }
            }
        });
    }
    onKeyUp(event) {
        if (this.table && this.table.enableEditingMode) {
            event.stopImmediatePropagation();
            this.tableInlineEditService.onKeyUpTable(event);
        }
    }
    onMouseDown(rowId, colId, cellsType) {
        if (this.table && this.table.enableEditingMode) {
            this.tableInlineEditService.table = this.table;
            this.tableInlineEditService.columnMaps = this.columnMaps;
            this.tableInlineEditService.onMouseDownTable(rowId, colId, cellsType);
        }
    }
    onMouseUp(rowId, colId, cellsType) {
        if (this.table && this.table.enableEditingMode) {
            this.tableInlineEditService.onMouseUpTable(rowId, colId, cellsType);
        }
    }
    createCellId(tableType, i, j) {
        return `${tableType}${i}${j}`;
    }
    /**
     * @description Enables table editing mode. Emits bindable event
     * @param clickedTable contains table
     */
    onEditTable(clickedTable) {
        this.saveTableButtonClicked.emit(clickedTable);
        this.editingMode = true;
        clickedTable.enableEditingMode = true;
    }
    /**
     * @description clears cell/cells selection, disables table editting mode. Emits bindable event with table data.
     * @param clickedTable contains table
     */
    onSaveTable(clickedTable) {
        this.editTableButtonClicked.emit(clickedTable);
        this.enterKeyPressed();
        clickedTable.enableEditingMode = false;
        this.editingMode = false;
    }
    /**
     * @description Creates a Keyboard event to save or cancel a cell/cells selection
     */
    enterKeyPressed() {
        if (this.table && this.table.enableEditingMode) {
            const keyEventData = { isTrusted: true, key: 'Enter' };
            const keyBoardEvent = new KeyboardEvent('keyup', keyEventData);
            keyBoardEvent.stopImmediatePropagation();
            this.onKeyUp(keyBoardEvent);
        }
    }
};
TableLayoutComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
    { type: TableInlineEditService }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableLayoutComponent.prototype, "caption", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableLayoutComponent.prototype, "settings", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableLayoutComponent.prototype, "table", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TableLayoutComponent.prototype, "saveTableButtonClicked", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TableLayoutComponent.prototype, "editTableButtonClicked", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keyup', ['$event'])
], TableLayoutComponent.prototype, "onKeyUp", null);
TableLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ndiku-table-layout',
        template: `
    <ng-container [ngSwitch]="table.tableType">
      <table
        class="table"
        [id]="table.tableId"
        *ngSwitchCase="types.DefaultTable"
        (keyup)="onKeyUp($event)"
      >
        <caption *ngIf="caption">
          {{
            caption
          }}
          {{
            '(Default Table)'
          }}
          <span *ngIf="table.inlineEditable">
            <button *ngIf="!editingMode" (click)="onEditTable(table)">
              <!-- <mat-icon>home</mat-icon> -->
              Edit
            </button>
            <button *ngIf="editingMode" (click)="onSaveTable(table)">
              <!-- <mat-icon>home</mat-icon> -->
              Save
            </button>
          </span>
        </caption>
        <thead>
          <tr>
            <th *ngFor="let map of columnMaps" style="text-align: left;">
              {{ map.header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let record of table.dataSource; let i = index">
            <ng-container *ngFor="let map of columnMaps; let j = index">
              <td
                *ngIf="!map.editable && !table.inlineEditable"
                [ndikuStyleCell]="{
                  contentType: record[map.access(record)],
                  table: table
                }"
              >
                {{ record[map.access(record)] | formatCell: map.format }}
              </td>

              <td
                *ngIf="map.editable && table.inlineEditable"
                [id]="createCellId(table.tableId, i, j)"
                (mousedown)="onMouseDown(i, j, map.header)"
                (mouseup)="onMouseUp(i, j, map.header)"
                [ndikuStyleCell]="{
                  contentType: record[map.access(record)],
                  table: table,
                  selectCell: { rowId: i, colId: j }
                }"
              >
                {{ record[map.access(record)] | formatCell: map.format }}
                <i></i>
              </td>
            </ng-container>
          </tr>
        </tbody>
      </table>

      <table
        mat-table
        *ngSwitchCase="types.MatTable"
        [dataSource]="table.dataSource"
        class="mat-elevation-z0"
        [id]="table.tableId"
        (keyup)="onKeyUp($event)"
      >
        <caption *ngIf="caption">
          {{
            caption
          }}
          <span *ngIf="table.inlineEditable">
            <button
              mat-icon-button
              color="accent"
              *ngIf="!editingMode"
              (click)="onEditTable(table)"
            >
              <!-- <mat-icon>home</mat-icon> -->
              Edit
            </button>
            <button
              mat-icon-button
              color="accent"
              *ngIf="editingMode"
              (click)="onSaveTable(table)"
            >
              <!-- <mat-icon>home</mat-icon> -->
              Save
            </button>
          </span>
        </caption>
        <ng-container
          *ngFor="let map of columnMaps; let j = index"
          matColumnDef="{{ map.header }}"
        >
          <th mat-header-cell *matHeaderCellDef mat-sort-header>
            {{ map.header }}
          </th>
          <ng-container *ngIf="!map.editable && !table.inlineEditable">
            <td
              mat-cell
              class="unselected"
              *matCellDef="let record"
              [ndikuStyleCell]="{
                contentType: record[map.access(record)],
                table: table
              }"
            >
              {{ record[map.access(record)] | formatCell: map.format }}
            </td>
          </ng-container>
          <ng-container *ngIf="map.editable && table.inlineEditable">
            <td
              mat-cell
              *matCellDef="let record; let i = index"
              [id]="createCellId(table.tableId, i, j)"
              (mousedown)="onMouseDown(i, j, map.header)"
              (mouseup)="onMouseUp(i, j, map.header)"
              [ndikuStyleCell]="{
                contentType: record[map.access(record)],
                table: table,
                selectCell: { rowId: i, colId: j }
              }"
            >
              {{ record[map.access(record)] | formatCell: map.format }}
              <i></i>
            </td>
          </ng-container>
        </ng-container>

        <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
        <mat-row *matRowDef="let row; columns: displayedColumns"></mat-row>
      </table>
    </ng-container>
  `,
        styles: [`
      table {
        width: 100%;
      }
      .mat-row,
      .mat-header-row {
        display: flex;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        align-items: center;
        min-height: 48px;
        padding: 0 24px;
      }

      .mat-cell,
      .mat-header-cell {
        flex: 1;
        overflow: hidden;
        word-wrap: break-word;
        border-bottom: none;
      }

      /* below adds cursor  */
      .cursor {
        position: relative;
      }
      .cursor i {
        position: absolute;
        width: 1px;
        height: 80%;
        background-color: gray;
        left: 5px;
        top: 10%;
        animation-name: blink;
        animation-duration: 800ms;
        animation-iteration-count: infinite;
        opacity: 1;
      }

      .cursor :focus + i {
        display: none;
      }

      @keyframes blink {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
    `]
    })
], TableLayoutComponent);

let StyleCellDirective = class StyleCellDirective {
    constructor(el, renderer, tableInlineEditService) {
        this.el = el;
        this.renderer = renderer;
        this.tableInlineEditService = tableInlineEditService;
    }
    ngOnChanges(changes) {
        this.visualizeEditedCells();
    }
    ngOnDestroy() {
        if (this.cellsStatesSub) {
            this.cellsStatesSub.unsubscribe();
        }
        if (this.clearEditedVisualsSub) {
            this.clearEditedVisualsSub.unsubscribe();
        }
    }
    ngOnInit() {
        this.handlestylingUndefinedValues();
        this.visualizeEditedCells();
        this.cellsStatesSub = this.tableInlineEditService.updateCellStyle$.subscribe((cellStates) => {
            this.handleStylingSelectedCells();
        });
        this.clearEditedVisualsSub = this.tableInlineEditService.clearSavedDataInitiated$.subscribe(() => {
            this.visualizeEditedCells();
        });
    }
    /**
     * Styles each cell depending on its value.
     */
    handlestylingUndefinedValues() {
        const types = TableType;
        if (this.ndikuStyleCell.contentType === undefined &&
            this.ndikuStyleCell.table.tableType === types.MatTable) {
            this.renderer.setStyle(this.el.nativeElement, 'color', '#dcdcdc');
            // this.renderer.setStyle(this.el.nativeElement, 'text-align', 'center');
        }
        if (this.ndikuStyleCell.contentType === undefined &&
            this.ndikuStyleCell.table.tableType === types.DefaultTable) {
            this.renderer.setStyle(this.el.nativeElement, 'color', '#dcdcdc');
            this.renderer.setStyle(this.el.nativeElement, 'text-align', 'center');
        }
        if (typeof this.ndikuStyleCell.contentType === 'number' &&
            this.ndikuStyleCell.table.tableType === types.DefaultTable) {
            this.renderer.setStyle(this.el.nativeElement, 'text-align', 'right');
            this.renderer.setStyle(this.el.nativeElement, 'padding-right', '10%');
        }
    }
    /**
     * Adds border to user selected cells
     */
    handleStylingSelectedCells() {
        if (this.ndikuStyleCell.table.inlineEditable) {
            const rowId = this.ndikuStyleCell.selectCell.rowId;
            const colId = this.ndikuStyleCell.selectCell.colId;
            const tableCells = this.ndikuStyleCell.table.tableCellStates
                .tableCellStates;
            if (tableCells[rowId][colId]) {
                this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid #698ad8');
                this.renderer.addClass(this.el.nativeElement, 'cursor');
                this.renderer.setStyle(this.el.nativeElement, 'min-height', '22px');
            }
            else {
                this.renderer.setStyle(this.el.nativeElement, 'border', 'none');
                this.renderer.removeClass(this.el.nativeElement, 'cursor');
            }
            this.renderer.setStyle(this.el.nativeElement, '-webkit-user-select', 'none'); /* Webkit  */
            this.renderer.setStyle(this.el.nativeElement, '-moz-user-select', 'none'); /* Firefox */
            this.renderer.setStyle(this.el.nativeElement, '-ms-user-select', 'none'); /* IE 10   */
            this.renderer.setStyle(this.el.nativeElement, '-o-user-select', 'none'); /* Currently not supported in Opera but will be soon */
            this.renderer.setStyle(this.el.nativeElement, 'user-select', 'none');
        }
    }
    /**
     * Adds background and border color to edited cells
     */
    visualizeEditedCells() {
        const table = this.ndikuStyleCell.table;
        const rowId = this.ndikuStyleCell.selectCell.rowId;
        const colId = this.ndikuStyleCell.selectCell.colId;
        if (table.hasBeenEdited(table.tableId)) {
            const editedCells = table.getEditedCellsByTableId(table.tableId);
            editedCells.map((cell) => {
                if (cell.rowId === rowId && cell.colId === colId) {
                    this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid #B00020');
                    this.renderer.setStyle(this.el.nativeElement, 'background', '#FFB74D');
                }
            });
        }
        else {
            this.renderer.setStyle(this.el.nativeElement, 'border', 'none');
            this.renderer.setStyle(this.el.nativeElement, 'background', 'none');
        }
    }
};
StyleCellDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: TableInlineEditService }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StyleCellDirective.prototype, "ndikuStyleCell", void 0);
StyleCellDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[ndikuStyleCell]' })
], StyleCellDirective);

let TableLayoutModule = class TableLayoutModule {
};
TableLayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            TableLayoutComponent,
            FormatCellPipe,
            StyleCellDirective
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            MaterialModule
        ],
        exports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            TableLayoutComponent,
            FormatCellPipe,
            StyleCellDirective,
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["PercentPipe"]],
    })
], TableLayoutModule);

class TableEntryType {
    constructor(tableTypeName, tableId, dataSource, inlineEditable, nEditableCols, firstEditableRow, firstEditableCol) {
        this._ALL_TABLES_STATES = [];
        this._EDITED_CELLS = [];
        this.inlineEditable = false;
        this.enableEditingMode = false;
        this.nRows = 0;
        if (tableTypeName === 'mat-table') {
            this.tableType = TableType.MatTable;
        }
        else {
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
    get tableType() {
        return this._TABLE_TYPE;
    }
    set tableType(tableType) {
        this._TABLE_TYPE = tableType;
    }
    get tableId() {
        return this._TABLE_ID;
    }
    set tableId(tableId) {
        this._TABLE_ID = tableId;
    }
    /**
     * @description Creates table cells selection states
     * @param tableId contains table id
     */
    createCellsStates(tableId) {
        if (this.inlineEditable && this.nEditableCols) {
            const temp = [];
            for (let iIndex = 0; iIndex <= this.nRows; iIndex++) {
                temp[iIndex] = [];
                for (let jIndex = 0; jIndex <= this.nEditableCols; jIndex++) {
                    temp[iIndex][jIndex] = false;
                }
            }
            this.tableCellStates = {
                tableCellStates: temp,
                tableId,
                FIRST_EDITABLE_ROW: this.FIRST_EDITABLE_ROW,
                LAST_EDITABLE_ROW: this.LAST_EDITABLE_ROW,
                FIRST_EDITABLE_COL: this.FIRST_EDITABLE_COL,
                LAST_EDITABLE_COL: this.LAST_EDITABLE_COL,
            };
        }
        else if (this.inlineEditable) {
            throw new Error('You need to supply number of editable columns for inline editable table.');
        }
        else {
            return;
        }
    }
    /**
     * Resets cells of the table to default selection states
     */
    resetCellsStates() {
        if (this.tableCellStates.tableCellStates) {
            const temp = [];
            for (let iIndex = 0; iIndex <= this.nRows; iIndex++) {
                temp[iIndex] = [];
                for (let jIndex = 0; jIndex <= this.nEditableCols; jIndex++) {
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
    set tableCellStates(tableCellStates) {
        this._ALL_TABLES_STATES.push(tableCellStates);
    }
    get tableCellStates() {
        const tableCellStates = this._ALL_TABLES_STATES.filter((el) => {
            return el.tableId === this.tableId;
        });
        return tableCellStates[0];
    }
    /**
     * @description Returns all edited cells of a give table by table id
     * @param tableId contains table id
     */
    getEditedCellsByTableId(tableId) {
        const editedCells = this._EDITED_CELLS.filter((el) => {
            if (tableId) {
                return el.tableId === tableId;
            }
            else {
                return el.tableId === this.tableId;
            }
        });
        return editedCells;
    }
    /**
     * @description Updates table's edited cells history
     * @param editedCell contains edited cell properties
     */
    saveEditedCell(editedCell) {
        if (this.hasBeenEdited) {
            const foundEdited = this._EDITED_CELLS.find((cell, index) => {
                if (cell.colId === editedCell.colId &&
                    cell.colId === editedCell.colId &&
                    cell.tableId === editedCell.tableId) {
                    return (this._EDITED_CELLS[index] = editedCell);
                }
            });
            if (!foundEdited) {
                this._EDITED_CELLS.push(editedCell);
            }
        }
        else {
            this._EDITED_CELLS.push(editedCell);
        }
    }
    /**
     * @description Returns all edited cells of a column
     * @param header contains header as a string
     */
    getEditedCellsByHeader(header) {
        const editedCells = this._EDITED_CELLS.filter((el) => {
            return el.header === header;
        });
        return editedCells;
    }
    /**
     * @description Return edited cells by column and row number
     * @param rowNumber contains row number
     * @param colNumber contains column number
     */
    getEditedCellsByrowCol(rowNumber, colNumber) {
        let editedCells = [];
        if (rowNumber && colNumber) {
            editedCells = this._EDITED_CELLS.filter((el) => {
                return el.rowId === rowNumber && el.colId === colNumber;
            });
        }
        else if (rowNumber && !colNumber) {
            editedCells = this._EDITED_CELLS.filter((el) => {
                return el.rowId === rowNumber;
            });
        }
        else if (colNumber && !rowNumber) {
            editedCells = this._EDITED_CELLS.filter((el) => {
                return el.colId === colNumber;
            });
        }
        else {
            throw new Error('You must provide either a row number or column number');
        }
        return editedCells;
    }
    /**
     * @description Returns true if a table has edited cells history
     * @param tableId contains table id
     */
    hasBeenEdited(tableId) {
        let hasBeenEdited = false;
        let tableCells = [];
        if (tableId) {
            tableCells = this.getEditedCellsByTableId(tableId);
        }
        else {
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
    clearEditedCells(tableId) {
        const editedCells = this._EDITED_CELLS.filter((el) => {
            if (tableId) {
                return el.tableId !== tableId;
            }
            else {
                return el.tableId !== this.tableId;
            }
        });
        this._EDITED_CELLS = editedCells;
    }
}

/*
 * Public API Surface of ng-components-ndiku
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng-components-ndiku.js.map


/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!************************************************************************************************************************!*\
  !*** /home/travis/build/adrien19/ng-components-ndiku/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"row content-row\">\n    <div class=\"col-12 content-col\">\n      <ndiku-ng-select [name]=\"'ng-components-ndiku'\"></ndiku-ng-select>\n      <h2>CLICK THE BUTTON TO SEE MAGIC!</h2>\n      <h3>This will create an input control.</h3>\n      <form [formGroup]=\"editBaseForm\" (ngSubmit)=\"onAddItem()\">\n        <p>{{ enteredEmail }}</p>\n        <ndiku-ng-input\n          required\n          notEmpty\n          parentForm=\"editBaseForm\"\n          type=\"email\"\n          id=\"email\"\n          label=\"Email\"\n          placeholder=\"Enter email\"\n          onComponentReady=\"addChild('emailGroup', $event)\"\n        ></ndiku-ng-input>\n\n        <p>{{ enteredPassword }}</p>\n        <ndiku-ng-input\n          required\n          notEmpty\n          parentForm=\"editBaseForm\"\n          type=\"password\"\n          id=\"password\"\n          label=\"Password\"\n          placeholder=\"Enter password\"\n          onComponentReady=\"addChild('passwordGroup', $event)\"\n        ></ndiku-ng-input>\n      </form>\n\n      <button mat-flat-button color=\"primary\" (click)=\"subscribeToEmailValue()\">\n        Subscribe to Email value\n      </button>\n      <button\n        mat-flat-button\n        color=\"accent\"\n        (click)=\"subscribeToPasswordValue()\"\n      >\n        Subscribe to Password value\n      </button>\n      <button mat-flat-button color=\"warn\" (click)=\"unSubscribeToInputValue()\">\n        Unsubscribe to input values\n      </button>\n\n      <!-- below are for table -->\n      <h2 style=\"margin-top: 30px; text-align: center;\">TABLE COMPONENT</h2>\n      <P>\n        The 'ndiku-table-layout' provides a reusable table that takes care of\n        mapping data headers appropriately. For example, when we have nested\n        objects or null values. Also, provides the ability to pass column\n        configuration to control how data is displayed. See below for\n        examples...\n      </P>\n      <app-table-demo class=\"app-table-demo\"></app-table-demo>\n    </div>\n  </div>\n</div>\n");

/***/ }),

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

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid {\n  height: 100% !important;\n}\n.container-fluid > .content-row {\n  height: inherit !important;\n  padding: 15px;\n}\n.container-fluid > .content-row > ng-ndiku-input {\n  min-height: 50px;\n}\n.mat-flat-button {\n  margin-right: 15px;\n  margin-top: 15px;\n}\n::ng-deep .app-table-demo .container-fluid {\n  width: 550px;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hZHJpZW4xOS9uZy1jb21wb25lbnRzLW5kaWt1L3Byb2plY3RzL25nLWNvbXBvbmVudHMtbmRpa3Utc2hvd2Nhc2Uvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9uZy1jb21wb25lbnRzLW5kaWt1LXNob3djYXNlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUNDSjtBREFJO0VBQ0ksMEJBQUE7RUFDQSxhQUFBO0FDRVI7QURBUTtFQUNJLGdCQUFBO0FDRVo7QURJQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNERjtBREtBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDRkYiLCJmaWxlIjoicHJvamVjdHMvbmctY29tcG9uZW50cy1uZGlrdS1zaG93Y2FzZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgID4gLmNvbnRlbnQtcm93IHtcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG5cbiAgICAgICAgPiBuZy1uZGlrdS1pbnB1dCB7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbi5tYXQtZmxhdC1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cblxuOjpuZy1kZWVwIC5hcHAtdGFibGUtZGVtbyAuY29udGFpbmVyLWZsdWlkIHtcbiAgd2lkdGg6IDU1MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuIiwiLmNvbnRhaW5lci1mbHVpZCB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lci1mbHVpZCA+IC5jb250ZW50LXJvdyB7XG4gIGhlaWdodDogaW5oZXJpdCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLmNvbnRhaW5lci1mbHVpZCA+IC5jb250ZW50LXJvdyA+IG5nLW5kaWt1LWlucHV0IHtcbiAgbWluLWhlaWdodDogNTBweDtcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuOjpuZy1kZWVwIC5hcHAtdGFibGUtZGVtbyAuY29udGFpbmVyLWZsdWlkIHtcbiAgd2lkdGg6IDU1MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_components_ndiku__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-components-ndiku */ "../../dist/ng-components-ndiku/fesm2015/ng-components-ndiku.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");




let AppComponent = class AppComponent {
    constructor(fb, ngComponentsNdikuService) {
        this.ngComponentsNdikuService = ngComponentsNdikuService;
        this.title = 'ng-components-ndiku-showcase';
        this.enteredEmail = '';
        this.enteredPassword = '';
        this.editBaseForm = fb.group({
            name: [''],
        });
    }
    onAddItem() { }
    subscribeToEmailValue() {
        this.emailValueSubscription = this.ngComponentsNdikuService.inputValueChanged$.subscribe((value) => {
            this.enteredEmail = value;
        });
    }
    subscribeToPasswordValue() {
        this.passwordValueSubscription = this.ngComponentsNdikuService.inputValueChanged$.subscribe((value) => {
            this.enteredPassword = value;
        });
    }
    unSubscribeToInputValue() {
        if (this.emailValueSubscription) {
            this.emailValueSubscription.unsubscribe();
        }
        if (this.passwordValueSubscription) {
            this.passwordValueSubscription.unsubscribe();
        }
    }
    addChild(childName, childGroup) {
        this.editBaseForm.addControl(childName, childGroup);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: ng_components_ndiku__WEBPACK_IMPORTED_MODULE_2__["NgComponentsNdikuService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng_components_ndiku__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-components-ndiku */ "../../dist/ng-components-ndiku/fesm2015/ng-components-ndiku.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _table_data_table_demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./table-data/table-demo.component */ "./src/app/table-data/table-demo.component.ts");









let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _table_data_table_demo_component__WEBPACK_IMPORTED_MODULE_8__["TableDemoComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            ng_components_ndiku__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            ng_components_ndiku__WEBPACK_IMPORTED_MODULE_4__["NgComponentsNdikuModule"],
            ng_components_ndiku__WEBPACK_IMPORTED_MODULE_4__["NgComponentsNdikuSelectModule"],
            ng_components_ndiku__WEBPACK_IMPORTED_MODULE_4__["TableLayoutModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _table_data_table_demo_component__WEBPACK_IMPORTED_MODULE_8__["TableDemoComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/table-data/fake-data.ts":
/*!*****************************************!*\
  !*** ./src/app/table-data/fake-data.ts ***!
  \*****************************************/
/*! exports provided: PROJECTS, PERSONNEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECTS", function() { return PROJECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERSONNEL", function() { return PERSONNEL; });
const PROJECTS = [
    {
        id: 1,
        name: 'Mercury',
        cost: 277000000,
        FIRST_FLIGHT: 'September 9, 1959',
        status: 'Complete',
    },
    {
        id: 2,
        name: 'Gemini',
        cost: 1300000000,
        FIRST_FLIGHT: 'April 8, 1964',
        status: 'Complete',
    },
    {
        id: 3,
        name: 'Apollo',
        cost: 25400000000,
        FIRST_FLIGHT: 'February 26, 1966',
        status: 'Complete',
    },
    {
        id: 4,
        name: 'Skylab',
        launch: 'May 14, 1973',
        status: 'Complete',
    },
    {
        id: 5,
        name: 'Apollo-Soyuz',
        launch: 'July 15, 1975',
        status: 'Complete',
    },
    {
        id: 6,
        name: 'Space Shuttle',
        TOTAL_COST: 196000000000,
        FIRST_FLIGHT: 'August 12, 1977',
        status: 'Complete',
    },
];
const PERSONNEL = [
    {
        id: 151,
        name: 'Alan B. Shepard, Jr.',
        job: 'Astronaut',
        YEAR_JOINED: 1959,
        missions: ['MR-3', 'Apollo 14'],
        crewWith: [
            {
                id: 175,
                name: 'Stuart Roosa',
            },
            {
                id: 176,
                name: 'Edgar Mitchell',
            },
        ],
    },
    {
        id: 152,
        name: 'Virgil I. Grissom',
        job: 'Astronaut',
        YEAR_JOINED: 1959,
        missions: ['MR-4', 'Apollo 1'],
    },
    {
        id: 153,
        name: 'John H. Glenn, Jr.',
        job: 'Astronaut',
        YEAR_JOINED: 1959,
        missions: ['MA-6', 'STS-95'],
    },
    {
        id: 154,
        name: 'M. Scott Carpenter',
        job: 'Astronaut',
        YEAR_JOINED: 1959,
        missions: ['MA-7'],
    },
    {
        id: 161,
        name: 'James A. Lovell',
        job: 'Astronaut',
        YEAR_JOINED: 1962,
        missions: ['Gemini 7', 'Gemini 12', 'Apollo 8', 'Apollo 13'],
        manager: {
            id: 157,
            name: 'Deke Slayton',
        },
    },
];


/***/ }),

/***/ "./src/app/table-data/table-demo.component.ts":
/*!****************************************************!*\
  !*** ./src/app/table-data/table-demo.component.ts ***!
  \****************************************************/
/*! exports provided: TableDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDemoComponent", function() { return TableDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tableDataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableDataService */ "./src/app/table-data/tableDataService.ts");
/* harmony import */ var ng_components_ndiku__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-components-ndiku */ "../../dist/ng-components-ndiku/fesm2015/ng-components-ndiku.js");




let TableDemoComponent = class TableDemoComponent {
    constructor(tableDataService, inlineTableDataService) {
        this.tableDataService = tableDataService;
        this.inlineTableDataService = inlineTableDataService;
        this.projectsTableConfigSettings = [
            {
                primaryKey: 'name',
                header: 'Name',
                editable: true,
            },
            {
                primaryKey: 'first_Launch',
                header: 'First Launch',
                format: { formatType: 'date', dateFormat: 'short' },
                alternativeKeys: ['launch', 'FIRST_FLIGHT'],
                editable: true,
            },
            {
                primaryKey: 'cost',
                header: 'Cost',
                format: { formatType: 'currency', currencyCode: 'USD' },
                alternativeKeys: ['TOTAL_COST'],
                editable: true,
            },
        ];
        this.personnelSettings = [
            {
                primaryKey: 'name',
                editable: true,
            },
            {
                primaryKey: 'YEAR_JOINED',
                header: 'Joined',
                format: { formatType: 'date', dateFormat: 'yyyy' },
                editable: true,
            },
            {
                primaryKey: 'missions',
                editable: true,
            },
            {
                primaryKey: 'manager',
                editable: true,
            },
            {
                primaryKey: 'crewWith',
                header: 'Crew mates',
                editable: true,
            },
        ];
    }
    ngOnDestroy() {
        if (this.inlineTableDataSub) {
            this.inlineTableDataSub.unsubscribe();
        }
    }
    ngOnInit() {
        this.projects = this.tableDataService.getProjects();
        this.people = this.tableDataService.getPersonnel();
        this.tableConfig = new ng_components_ndiku__WEBPACK_IMPORTED_MODULE_3__["TableEntryType"]('mat-table', 'projectsTable', this.projects, true, 3);
        this.peapleTableConfig = new ng_components_ndiku__WEBPACK_IMPORTED_MODULE_3__["TableEntryType"]('default', 'peapleTable', this.people, true, 5);
        this.inlineTableDataSub = this.inlineTableDataService.dataSource$.subscribe((data) => {
            if (data) {
                if (data.table.tableId === this.tableConfig.tableId) {
                    this.tableConfig = data.table;
                    this.projects = data.table.dataSource;
                    console.log(`THESE ARE RETURNED: ${data.table.dataSource[0].cost}`);
                }
                else {
                    this.peapleTableConfig = data.table;
                    this.people = data.table.dataSource;
                }
            }
        });
    }
    clearEditedTableData() {
        if (this.tableConfig.hasBeenEdited(this.tableConfig.tableId)) {
            this.tableConfig.clearEditedCells(this.tableConfig.tableId);
        }
        if (this.peapleTableConfig.hasBeenEdited(this.peapleTableConfig.tableId)) {
            this.peapleTableConfig.clearEditedCells(this.peapleTableConfig.tableId);
        }
        this.inlineTableDataService.clearSavedDataInitiated$.next(); // send an event to clear colored edited data
    }
};
TableDemoComponent.ctorParameters = () => [
    { type: _tableDataService__WEBPACK_IMPORTED_MODULE_2__["TableDataService"] },
    { type: ng_components_ndiku__WEBPACK_IMPORTED_MODULE_3__["TableInlineEditService"] }
];
TableDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: `app-table-demo`,
        template: `
    <div class="container-fluid">
      <ng-container>
        <button
          mat-flat-button
          color="primary"
          (click)="clearEditedTableData()"
        >
          Clear Edited Table data
        </button>
      </ng-container>

      <ndiku-table-layout
        [table]="tableConfig"
        [caption]="'NASA Projects'"
        [settings]="projectsTableConfigSettings"
        class=" tableCaption projectsTable"
      >
      </ndiku-table-layout>
      <ndiku-table-layout
        [table]="peapleTableConfig"
        [caption]="'NASA Astronauts'"
        [settings]="personnelSettings"
        class=" tableCaption astronautsTable"
      >
      </ndiku-table-layout>
    </div>
  `,
        styles: ["\n      ::ng-deep .tableCaption table caption {\n        font-size: 28px;\n        font-weight: bold;\n        padding-bottom: 20px;\n      }\n\n      ::ng-deep .tableCaption table {\n        background-color: white;\n        margin-top: 30px;\n      }\n    "]
    })
], TableDemoComponent);



/***/ }),

/***/ "./src/app/table-data/tableDataService.ts":
/*!************************************************!*\
  !*** ./src/app/table-data/tableDataService.ts ***!
  \************************************************/
/*! exports provided: TableDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDataService", function() { return TableDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fake_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fake-data */ "./src/app/table-data/fake-data.ts");

// ./project-center/project.service.ts


let TableDataService = class TableDataService {
    getProjects() {
        // actual implementation would use async method
        return _fake_data__WEBPACK_IMPORTED_MODULE_2__["PROJECTS"];
    }
    getPersonnel() {
        return _fake_data__WEBPACK_IMPORTED_MODULE_2__["PERSONNEL"];
    }
};
TableDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], TableDataService);



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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/adrien19/ng-components-ndiku/projects/ng-components-ndiku-showcase/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map