(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/goragodp/blockly-angular/src/main.ts */"zUnb");


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
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor/editor.component */ "xD4D");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _blocklyworkspace_blocklyworkspace_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocklyworkspace/blocklyworkspace.component */ "mb5r");





function AppComponent_app_blocklyworkspace_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-blocklyworkspace", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("jsonContent", ctx_r0.content);
} }
class AppComponent {
    constructor() {
        this.title = 'siit-blockly';
        this.displayWorkspace = false;
    }
    receiveCodeEvent(code) {
        try {
            this.content = JSON.parse(code);
        }
        catch (e) {
            alert('Invalid json format!');
            this.displayWorkspace = false;
        }
    }
    DisplayBlocklyWorkspace(isDisplay) {
        this.displayWorkspace = isDisplay;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 1, consts: [[1, "navbar", "navbar-light", "bg-light"], [1, "container", "text-center", "p-2"], [1, "mx-auto", "text-bold"], [3, "codeEmittor", "displayBlocklyWorkspace"], [3, "jsonContent", 4, "ngIf"], [3, "jsonContent"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Blockly CMS Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-editor", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("codeEmittor", function AppComponent_Template_app_editor_codeEmittor_5_listener($event) { return ctx.receiveCodeEvent($event); })("displayBlocklyWorkspace", function AppComponent_Template_app_editor_displayBlocklyWorkspace_5_listener($event) { return ctx.DisplayBlocklyWorkspace($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_app_blocklyworkspace_6_Template, 1, 1, "app-blocklyworkspace", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayWorkspace);
    } }, directives: [_editor_editor_component__WEBPACK_IMPORTED_MODULE_1__["EditorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _blocklyworkspace_blocklyworkspace_component__WEBPACK_IMPORTED_MODULE_3__["BlocklyworkspaceComponent"]], styles: [".navbar-style[_ngcontent-%COMP%] {\n    display: flex; \n    justify-content:flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCIiwiZmlsZSI6Ii4uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLXN0eWxlIHtcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var ngx_blockly__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-blockly */ "nZKQ");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material/material.module */ "hctd");
/* harmony import */ var _blocklyworkspace_blocklyworkspace_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocklyworkspace/blocklyworkspace.component */ "mb5r");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor/editor.component */ "xD4D");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ngx_blockly__WEBPACK_IMPORTED_MODULE_4__["NgxBlocklyModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _blocklyworkspace_blocklyworkspace_component__WEBPACK_IMPORTED_MODULE_7__["BlocklyworkspaceComponent"],
        _editor_editor_component__WEBPACK_IMPORTED_MODULE_8__["EditorComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        ngx_blockly__WEBPACK_IMPORTED_MODULE_4__["NgxBlocklyModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _blocklyworkspace_blocklyworkspace_component__WEBPACK_IMPORTED_MODULE_7__["BlocklyworkspaceComponent"],
                    _editor_editor_component__WEBPACK_IMPORTED_MODULE_8__["EditorComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    ngx_blockly__WEBPACK_IMPORTED_MODULE_4__["NgxBlocklyModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "doUd":
/*!*************************************************!*\
  !*** ./src/app/customblock/temi.skill.block.ts ***!
  \*************************************************/
/*! exports provided: SkillCallBlock, SkillGoToBlock, SkillSpeakBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillCallBlock", function() { return SkillCallBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillGoToBlock", function() { return SkillGoToBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillSpeakBlock", function() { return SkillSpeakBlock; });
/* harmony import */ var ngx_blockly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-blockly */ "nZKQ");

class SkillCallBlock extends ngx_blockly__WEBPACK_IMPORTED_MODULE_0__["CustomBlock"] {
    constructor(type, block, blockMutator, ...args) {
        super(type, block, blockMutator, ...args);
        this.class = SkillCallBlock;
    }
    defineBlock() {
        this.block.appendDummyInput()
            .appendField("Call")
            .appendField(new Blockly.FieldDropdown([["Man", "fe1090ed941db12ed1d350730031ea5b"], ["Pear", "4990c18cea5e6604cc1adc384fe224e8"], ["AjVirach", "67696f1ff709a3b0804ae43641ed8d85"]]), "contact");
        this.block.setPreviousStatement(true, null);
        this.block.setNextStatement(true, null);
        this.block.setColour(230);
        this.block.setTooltip("");
        this.block.setHelpUrl("Select person to call from drop down list");
    }
    toXML() {
        return '<block type="temi_skill_call"></block>';
    }
    toJavaScriptCode(block) {
        var contact = this.block.getFieldValue('contact');
        // var code = `actionlist.append('{"action":"CALL", "content":"${dropdown_contact}"}')\n`
        var code = `robot.call("${contact}")\n`;
        return code;
    }
    onChange(changeEvent) {
        //console.log(changeEvent);
    }
}
class SkillGoToBlock extends ngx_blockly__WEBPACK_IMPORTED_MODULE_0__["CustomBlock"] {
    constructor(type, block, blockMutator, ...args) {
        super(type, block, blockMutator, ...args);
        this.class = SkillGoToBlock;
    }
    defineBlock() {
        this.block.appendDummyInput()
            .appendField("Go to")
            .appendField(new Blockly.FieldTextInput("kitchen"), "location");
        this.block.setPreviousStatement(true, null);
        this.block.setNextStatement(true, null);
        this.block.setColour(230);
        this.block.setTooltip("Command temi to go to a pre-defined location");
        this.block.setHelpUrl("");
    }
    toXML() {
        return '<block type="temi_skill_goto"></block>';
    }
    toJavaScriptCode(block) {
        var location = this.block.getFieldValue('location');
        var code = `robot.goto("${location}")\n`;
        return code;
    }
    onChange(changeEvent) {
        //console.log(changeEvent);
    }
}
class SkillSpeakBlock extends ngx_blockly__WEBPACK_IMPORTED_MODULE_0__["CustomBlock"] {
    constructor(type, block, blockMutator, ...args) {
        super(type, block, blockMutator, ...args);
        this.class = SkillSpeakBlock;
    }
    defineBlock() {
        this.block.appendDummyInput()
            .appendField("Say")
            .appendField(new Blockly.FieldTextInput("hello world"), "utterance")
            .appendField("in")
            .appendField(new Blockly.FieldDropdown([["English", "en"], ["Thai", "th"], ["Japanese", "JP"]]), "language_options");
        this.block.setPreviousStatement(true, null);
        this.block.setNextStatement(true, null);
        this.block.setColour(315);
        this.block.setTooltip("Type what you want temi to say, select languge either English, Japanese or Thai");
        this.block.setHelpUrl("");
    }
    toXML() {
        return '<block type="temi_skill_speak"></block>';
    }
    toJavaScriptCode(block) {
        var utterance = this.block.getFieldValue('utterance');
        var language_option = this.block.getFieldValue('language_options');
        var code = `robot.speak("${utterance}", "${language_option}")\n`;
        return code;
    }
    onChange(changeEvent) {
        //console.log(changeEvent);
    }
}


/***/ }),

/***/ "hctd":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



const MaterialComponents = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
];
class MaterialModule {
    constructor() { }
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[MaterialComponents], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [MaterialComponents],
                exports: [MaterialComponents]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mb5r":
/*!****************************************************************!*\
  !*** ./src/app/blocklyworkspace/blocklyworkspace.component.ts ***!
  \****************************************************************/
/*! exports provided: BlocklyworkspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlocklyworkspaceComponent", function() { return BlocklyworkspaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_blockly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-blockly */ "nZKQ");
/* harmony import */ var _customblock_temi_skill_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customblock/temi.skill.block */ "doUd");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



//CustomBlock import




class BlocklyworkspaceComponent {
    constructor(ngxToolboxBuilder, sanitizer) {
        this.sanitizer = sanitizer;
        this.customBlocks = [
            //note that this string shoud be resemble block name in XML
            new _customblock_temi_skill_block__WEBPACK_IMPORTED_MODULE_2__["SkillCallBlock"]('temi_skill_call', null, null),
            new _customblock_temi_skill_block__WEBPACK_IMPORTED_MODULE_2__["SkillGoToBlock"]('temi_skill_goto', null, null),
            new _customblock_temi_skill_block__WEBPACK_IMPORTED_MODULE_2__["SkillSpeakBlock"]('temi_skill_speak', null, null)
        ];
        this.config = {
            scrollbars: true,
            trashcan: true,
            plugins: {
                toolbox: ngx_blockly__WEBPACK_IMPORTED_MODULE_1__["NgxBlocklyToolbox"]
            }
        };
        this.generatorConfig = {
            // dart: true,
            javascript: true,
            // lua: true,
            // php: true,
            // python: true,
            xml: true
        };
        ngxToolboxBuilder.nodes = [
            ngx_blockly__WEBPACK_IMPORTED_MODULE_1__["LOGIC_CATEGORY"],
            ngx_blockly__WEBPACK_IMPORTED_MODULE_1__["LOOP_CATEGORY"],
            ngx_blockly__WEBPACK_IMPORTED_MODULE_1__["MATH_CATEGORY"],
            ngx_blockly__WEBPACK_IMPORTED_MODULE_1__["TEXT_CATEGORY"],
            ngx_blockly__WEBPACK_IMPORTED_MODULE_1__["LISTS_CATEGORY"],
            ngx_blockly__WEBPACK_IMPORTED_MODULE_1__["VARIABLES_CATEGORY"],
            new ngx_blockly__WEBPACK_IMPORTED_MODULE_1__["Category"]('Temi Skill', '#FF21FF', this.customBlocks, null)
        ];
        this.config.toolbox = ngxToolboxBuilder.build();
    }
    //Callback function
    onCode(code) {
        //console.log(code)
        this.generatedCode = code;
    }
    getGeneratedCode() {
        return this.generatedCode;
    }
    ngAfterViewInit() {
        //Initialize workspace with block + create variable on code
        this.blocklyComponent.fromXml(this.jsonContent['xml-workspace']);
        //Add predefined external varialbe
        for (var i = 0; i < this.jsonContent['vars-ext'].length; ++i) {
            this.blocklyComponent.workspace.createVariable(this.jsonContent['vars-ext'][i]);
        }
    }
    replaceAllOccuren(qstr, tstr, out) {
        var re = new RegExp(qstr, 'gi');
        return out.replace(re, tstr);
    }
    generateWorkspace() {
        let outputJson = this.jsonContent;
        //1 pack xml workspace file
        outputJson['xml-workspace'] = this.blocklyComponent.toXml();
        //2 pack variable to internal (vars-int : created on blockly) and external (vars-ext : create by external workspace)
        let allWorkspaceVariable = this.blocklyComponent.workspace.getAllVariables();
        allWorkspaceVariable.forEach(element => {
            (outputJson['vars-ext'].indexOf(element.name) === -1 && outputJson['vars-int'].indexOf(element.name) === -1) ? (outputJson['vars-int'].push(element.name)) : (null);
        });
        //3 remove all variable declaration from generated code and add only internal variable declaration
        let codeworkspace = this.generatedCode;
        codeworkspace = codeworkspace.substring(codeworkspace.indexOf('\n\n'), codeworkspace.length - 1);
        let intVarDeclareStr = new String();
        for (var i in outputJson['vars-int']) {
            intVarDeclareStr += 'var ' + outputJson['vars-int'][i] + '\n';
        }
        //console.log(intVarDeclareStr + codeworkspace)
        //4. replace external variable object reference converted by blockly
        allWorkspaceVariable.forEach(element => {
            (outputJson['vars-ext'].indexOf(element.name) !== -1) ? (codeworkspace = this.replaceAllOccuren(element.name, element.name, codeworkspace)) : (null);
        });
        // console.log(intVarDeclareStr+codeworkspace);
        outputJson['code-workspace'] = intVarDeclareStr + codeworkspace;
        //RESET and export
        intVarDeclareStr = undefined;
        this.exportJsonFile();
    }
    exportJsonFile() {
        try {
            let exportJson = JSON.stringify(this.jsonContent);
            // console.log(exportJson);
            let blob = new Blob([exportJson], { type: 'text/json' });
            let url = window.webkitURL.createObjectURL(blob);
            let uri = this.sanitizer.bypassSecurityTrustResourceUrl(url);
            this.downloadJsonHref = uri;
        }
        catch (e) {
            alert(e);
        }
    }
}
BlocklyworkspaceComponent.ɵfac = function BlocklyworkspaceComponent_Factory(t) { return new (t || BlocklyworkspaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_blockly__WEBPACK_IMPORTED_MODULE_1__["NgxToolboxBuilderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
BlocklyworkspaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlocklyworkspaceComponent, selectors: [["app-blocklyworkspace"]], viewQuery: function BlocklyworkspaceComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_blockly__WEBPACK_IMPORTED_MODULE_1__["NgxBlocklyComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.blocklyComponent = _t.first);
    } }, inputs: { jsonContent: "jsonContent" }, decls: 6, vars: 4, consts: [[3, "click"], ["target", "_blank", "download", "workspace.json", 1, "btn", "btn-border", 3, "href"], [3, "config", "customBlocks", "generatorConfig", "javascriptCode"]], template: function BlocklyworkspaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlocklyworkspaceComponent_Template_button_click_1_listener() { return ctx.generateWorkspace(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Generate Workspace JSON ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Export JSON ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngx-blockly", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("javascriptCode", function BlocklyworkspaceComponent_Template_ngx_blockly_javascriptCode_5_listener($event) { return ctx.onCode($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.downloadJsonHref, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config)("customBlocks", ctx.customBlocks)("generatorConfig", ctx.generatorConfig);
    } }, directives: [ngx_blockly__WEBPACK_IMPORTED_MODULE_1__["NgxBlocklyComponent"]], styles: ["ngx-blockly[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    height: 70%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvYmxvY2tseXdvcmtzcGFjZS9ibG9ja2x5d29ya3NwYWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7RUFDYiIsImZpbGUiOiIuLi9zcmMvYXBwL2Jsb2NrbHl3b3Jrc3BhY2UvYmxvY2tseXdvcmtzcGFjZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmd4LWJsb2NrbHkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlocklyworkspaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blocklyworkspace',
                templateUrl: './blocklyworkspace.component.html',
                styleUrls: ['./blocklyworkspace.component.css']
            }]
    }], function () { return [{ type: ngx_blockly__WEBPACK_IMPORTED_MODULE_1__["NgxToolboxBuilderService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }]; }, { blocklyComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_blockly__WEBPACK_IMPORTED_MODULE_1__["NgxBlocklyComponent"]]
        }], jsonContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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




const routes = [];
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

/***/ "xD4D":
/*!********************************************!*\
  !*** ./src/app/editor/editor.component.ts ***!
  \********************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ace-builds */ "bU/s");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ace_builds__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ace_builds_src_noconflict_mode_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ace-builds/src-noconflict/mode-json */ "VeWa");
/* harmony import */ var ace_builds_src_noconflict_mode_json__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_noconflict_mode_json__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ace_builds_src_noconflict_theme_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ace-builds/src-noconflict/theme-github */ "umNf");
/* harmony import */ var ace_builds_src_noconflict_theme_github__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_noconflict_theme_github__WEBPACK_IMPORTED_MODULE_3__);

// ace editor




const _c0 = ["codeEditor"];
const EDITOR_THEME = 'ace/theme/github';
const EDITOR_MODE_LANG = 'ace/mode/json';
class EditorComponent {
    constructor() {
        this.codeEmittor = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.displayBlocklyWorkspace = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        //create element reference
        const element = this.codeEditorElementRef.nativeElement;
        //create option for editor
        const editorOption = {
            highlightActiveLine: true,
            minLines: 10,
            maxLines: Infinity
        };
        this.codeEditor = ace_builds__WEBPACK_IMPORTED_MODULE_1__["edit"](element, editorOption);
        this.codeEditor.setTheme(EDITOR_THEME);
        this.codeEditor.getSession().setMode(EDITOR_MODE_LANG);
        this.codeEditor.setShowFoldWidgets(true);
    }
    //Methods
    getCodeContent() {
        if (this.codeEditor) {
            const code = this.codeEditor.getValue();
            return code;
        }
    }
    clearCode() {
        this.codeEditor.setValue('');
        this.displayBlocklyWorkspace.emit(false);
    }
    emitCode() {
        this.displayBlocklyWorkspace.emit(true);
        this.codeEmittor.emit(this.getCodeContent());
    }
}
EditorComponent.ɵfac = function EditorComponent_Factory(t) { return new (t || EditorComponent)(); };
EditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditorComponent, selectors: [["app-editor"]], viewQuery: function EditorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.codeEditorElementRef = _t.first);
    } }, outputs: { codeEmittor: "codeEmittor", displayBlocklyWorkspace: "displayBlocklyWorkspace" }, decls: 11, vars: 0, consts: [[1, "row", "mb-4"], [1, "col"], [1, "code-editor"], ["codeEditor", ""], [1, "row", "mb-4", "justify-content-center", "mx-4"], [1, "col-4", "col-lg-2", "col-md-3", "col-sm-4", "w-75"], ["type", "button", 1, "btn", "btn-dark", "btn-sm", "btn-block", "px-4", "mx-2", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "btn-block", "px-4", "mx-2", 3, "click"]], template: function EditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_6_listener() { return ctx.emitCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Run ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_9_listener() { return ctx.clearCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div.code-editor[_ngcontent-%COMP%] { max-height: 70vh; }\n\ndiv.label-box[_ngcontent-%COMP%] {\n    border-top-left-radius: .5rem!important;\n    border-top-right-radius: .5rem!important;\n}\n\n.form-control[_ngcontent-%COMP%] { border-radius: 0 !important; }\n\n.form-control[_ngcontent-%COMP%]:disabled { background-color: #ffffff !important; }\n\n.output[_ngcontent-%COMP%] {\n    border-bottom-left-radius: .5rem!important;\n    border-bottom-right-radius: .5rem!important;\n}\n\n.btn-beautify[_ngcontent-%COMP%] {\n    color: #ffffff;\n    background-color: #e83e8c;\n}\n\nselect.languages-select[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\nselect.languages-select[_ngcontent-%COMP%]    > option[_ngcontent-%COMP%] {\n    display: block;\n    background: ghostwhite;\n}\n\nselect.languages-select[_ngcontent-%COMP%]:focus    > option[_ngcontent-%COMP%]:checked { \n    font-weight: bold;\n}\n\ndiv.code-editor[_ngcontent-%COMP%] {\n    max-height: 70vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvZWRpdG9yL2VkaXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQixnQkFBZ0IsRUFBRTs7QUFFcEM7SUFDSSx1Q0FBdUM7SUFDdkMsd0NBQXdDO0FBQzVDOztBQUVBLGdCQUFnQiwyQkFBMkIsRUFBRTs7QUFFN0MseUJBQXlCLG9DQUFvQyxFQUFFOztBQUUvRDtJQUNJLDBDQUEwQztJQUMxQywyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiLi4vc3JjL2FwcC9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuY29kZS1lZGl0b3IgeyBtYXgtaGVpZ2h0OiA3MHZoOyB9XG5cbmRpdi5sYWJlbC1ib3gge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IC41cmVtIWltcG9ydGFudDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLjVyZW0haW1wb3J0YW50O1xufVxuXG4uZm9ybS1jb250cm9sIHsgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50OyB9XG5cbi5mb3JtLWNvbnRyb2w6ZGlzYWJsZWQgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7IH1cblxuLm91dHB1dCB7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogLjVyZW0haW1wb3J0YW50O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAuNXJlbSFpbXBvcnRhbnQ7XG59XG5cbi5idG4tYmVhdXRpZnkge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlODNlOGM7XG59XG5cbnNlbGVjdC5sYW5ndWFnZXMtc2VsZWN0IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnNlbGVjdC5sYW5ndWFnZXMtc2VsZWN0ID4gb3B0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiBnaG9zdHdoaXRlO1xufVxuXG5zZWxlY3QubGFuZ3VhZ2VzLXNlbGVjdDpmb2N1cyA+IG9wdGlvbjpjaGVja2VkIHsgXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmRpdi5jb2RlLWVkaXRvciB7XG4gICAgbWF4LWhlaWdodDogNzB2aDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-editor',
                templateUrl: './editor.component.html',
                styleUrls: ['./editor.component.css']
            }]
    }], function () { return []; }, { codeEditorElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['codeEditor']
        }], codeEmittor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], displayBlocklyWorkspace: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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