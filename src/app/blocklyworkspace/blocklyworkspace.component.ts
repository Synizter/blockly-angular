import { analyzeAndValidateNgModules } from '@angular/compiler';
import { variable } from '@angular/compiler/src/output/output_ast';
import { AfterViewInit, Component, OnInit, ViewChild, Input } from '@angular/core';
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
import { EMLINK, SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'node:constants';

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
    //Initialize workspace with block + create variable on code
    this.blocklyComponent.fromXml(this.jsonContent['xml-workspace']);
    //Add predefined external varialbe
    for (var i = 0; i < this.jsonContent['vars-ext'].length; ++i) {
      this.blocklyComponent.workspace.createVariable(this.jsonContent['vars-ext'][i]);
    }
  }

  private replaceElement(qstr:string, tstr:string, out:string) {
      var re = new RegExp(qstr, 'gi');
      console.log(`regrex ${re}, repalce ${tstr}`)
      return out.replace(re, tstr);
  }
  public generateWorkspace() {
    var outputJson:JSON = this.jsonContent;
    //1 pack xml workspace file
    outputJson['xml-workspace'] = this.blocklyComponent.toXml();
    //2 pack variable to internal (vars-int : created on blockly) and external (vars-ext : create by external workspace)
    let allWorkspaceVariable:any = this.blocklyComponent.workspace.getAllVariables();
    allWorkspaceVariable.forEach(element => {
       outputJson['vars-ext'].indexOf(element.name) === -1 ? outputJson['vars-int'].push(element.name) : null
    });
    //3 remove external variable declaration from generated code
    let codeworkspace: string = this.generatedCode;
    for(var i = 0; i < outputJson['vars-ext'].length; ++i) {
      this.replaceElement(outputJson['vars-ext'][i], '', codeworkspace)
    }
    console.log(codeworkspace);

    // let varList:any = this.blocklyComponent.workspace.getAllVariables();
    // for(var i = 0; i < varList.length; ++i) {
    //   this.jsonContent['vars'].push(varList[i].name);
    // }
    // this.jsonContent['xml-workspace'] = this.blocklyComponent.toXml(); 


    // let codeworkspace: string = this.generatedCode;

    
    // //fix object reference tranform of blockly : eg. b.a -> b_a using regrex
    // for(var i = 0; i < varList.length; ++i) {
    //   var re = new RegExp(varList[i].name.replace(/\./g, '_'), 'gi')
    //   codeworkspace = codeworkspace.replace(re, varList[i].name);
    // }

    // console.log(`${codeworkspace}`)
    // this.jsonContent['code-workspace'] = codeworkspace;

    // //TEST: Hardcode - by pass method ref eg. b.a => b_a by blockly
    //replace varaible name

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
