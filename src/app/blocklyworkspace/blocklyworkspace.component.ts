import { getLocaleFirstDayOfWeek } from '@angular/common';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { variable } from '@angular/compiler/src/output/output_ast';
import { stringify } from '@angular/compiler/src/util';
import { AfterViewInit, Component, OnInit, ViewChild, Input, AfterViewChecked } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { 
  NgxBlocklyComponent,
  CustomBlock, 
  NgxBlocklyConfig, 
  NgxBlocklyGeneratorConfig, 
  NgxBlocklyToolbox } from 'ngx-blockly';
import { 
  NgxToolboxBuilderService,    
  LOGIC_CATEGORY,
  LOOP_CATEGORY,
  MATH_CATEGORY,
  TEXT_CATEGORY,
  LISTS_CATEGORY,
  VARIABLES_CATEGORY,
  Category } from 'ngx-blockly';

//CustomBlock import
import {
  SkillCallBlock, 
  SkillGoToBlock, 
  SkillSpeakBlock } from '../customblock/temi.skill.block'


declare var Blockly: any;


@Component({
  selector: 'app-blocklyworkspace',
  templateUrl: './blocklyworkspace.component.html',
  styleUrls: ['./blocklyworkspace.component.css']
})
export class BlocklyworkspaceComponent implements AfterViewInit {

  @ViewChild(NgxBlocklyComponent) blocklyComponent: NgxBlocklyComponent; //blockly workspace
  @Input() jsonContent: JSON;
  
  public customBlocks: CustomBlock[] = [
    //note that this string shoud be resemble block name in XML
    new SkillCallBlock('temi_skill_call', null, null),
    new SkillGoToBlock('temi_skill_goto',null, null),
    new SkillSpeakBlock('temi_skill_speak',null, null)
  ];

  private generatedCode:string;
  public downloadJsonHref: SafeUrl;
  public config: NgxBlocklyConfig = {
    scrollbars: true,
    trashcan: true,
    plugins: {
      toolbox: NgxBlocklyToolbox
    }
  }
  public generatorConfig: NgxBlocklyGeneratorConfig = {
    // dart: true,
    javascript: true,
    // lua: true,
    // php: true,
    // python: true,
    xml: true
  };

  //Callback function
  onCode(code: string) {
    //console.log(code)
    this.generatedCode = code;
  }

  getGeneratedCode() {
    return this.generatedCode;
  }
  
  constructor(ngxToolboxBuilder: NgxToolboxBuilderService, private sanitizer: DomSanitizer) {
    ngxToolboxBuilder.nodes = [
        LOGIC_CATEGORY,
        LOOP_CATEGORY,
        MATH_CATEGORY,
        TEXT_CATEGORY,
        LISTS_CATEGORY,
        VARIABLES_CATEGORY,
        new Category('Temi Skill', '#FF21FF',this.customBlocks, null)
    ];
    this.config.toolbox = ngxToolboxBuilder.build();
    
  }
  ngAfterViewInit(): void {
    //Initialize workspace with block (+ create variable on code
    if(this.jsonContent.hasOwnProperty('xml-workspace')) {
      this.blocklyComponent.fromXml(this.jsonContent['xml-workspace']);
    }
    else {//if no workspace xml provided, initialize with empty workspace
      this.blocklyComponent.fromXml("<xml xmlns=\"https://developers.google.com/blockly/xml\"></xml>");
    }
    //Add predefined external varialbe if key vars-ext exist
    if(this.jsonContent.hasOwnProperty('vars-ext')) {
      for (var i = 0; i < this.jsonContent['vars-ext'].length; ++i) {
        this.blocklyComponent.workspace.createVariable(this.jsonContent['vars-ext'][i]);
      }
    }
  }

  private replaceAllOccuren(qstr:string, tstr:string, out:string) {
      var re = new RegExp(qstr, 'gi');
      return out.replace(re, tstr);
  }

  public generateWorkspace() {
    let outputJson:JSON = this.jsonContent;
    //1 pack xml workspace file
    outputJson['xml-workspace'] = this.blocklyComponent.toXml()
    
    //2 pack variable to internal (vars-int : created on blockly) and external (vars-ext : create by external workspace)
    let allWorkspaceVariable:any[] = this.blocklyComponent.workspace.getAllVariables();
    //console.log(outputJson['vars-ext'].some(ele => ele === "obj.name"))
    allWorkspaceVariable.forEach(element => {
      (outputJson['vars-ext'].some(ele => ele === element.name) === -1 && outputJson['vars-int'].indexOf(element.name) === -1) ? (outputJson['vars-int'].push(element.name)): (null);
    });
    
    //3 remove all variable declaration from generated code and add only internal variable declaration
    let codeworkspace: string = this.generatedCode;
    codeworkspace = codeworkspace.substring(codeworkspace.indexOf('\n\n') ,codeworkspace.length - 1)
    let intVarDeclareStr = new String()
    for(var i in outputJson['vars-int']) {
      intVarDeclareStr += 'var ' + outputJson['vars-int'][i] + '\n'
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

  public exportJsonFile() {
    try {
      let exportJson = JSON.stringify(this.jsonContent);
      // console.log(exportJson);
      let blob = new Blob([exportJson], {type:'text/json'});
      let url = window.webkitURL.createObjectURL(blob);
      let uri: SafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      this.downloadJsonHref = uri;
    }catch(e){
      alert(e);
    }

  }
}

//TEST {"vars":["var1", "var2", "var3"]}
