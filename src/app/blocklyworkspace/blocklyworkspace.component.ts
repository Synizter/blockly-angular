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
    // console.log(code);
    // console.log(this.blocklyComponent.toXml())
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
    //Add predefined varialbe
    for (var i = 0; i < this.jsonContent['vars'].length; ++i)
    {
      this.blocklyComponent.workspace.createVariable(this.jsonContent['vars'][i]);
    }
  }

  public generateWorkspace() {
    //Push newly create variable to jsonContent
    this.jsonContent['vars'] = [] //remove everythings
    let varList:any = this.blocklyComponent.workspace.getAllVariables();
    for(var i = 0; i < varList.length; ++i) {
      console.log()
      this.jsonContent['vars'].push(varList[i].name);
    }
    //repace xml workspace
    let xmlworkspace: string = this.blocklyComponent.toXml();
    xmlworkspace.replace('"', '\\"')
    // console.log(xmlworkspace);
    this.jsonContent['xml-workspace'] = xmlworkspace; 

    //add javascript code
    let codeworkspace: string = this.generatedCode;
    codeworkspace.replace('"', '\\"')
    this.jsonContent['code-workspace'] = codeworkspace;


    //TEST: Hardcode - by pass method ref eg. b.a => b_a by blockly
    //replace varaible name

    this.exportJsonFile();
  }

  public exportJsonFile() {
    try {
      let exportJson = JSON.stringify(this.jsonContent);
      console.log(exportJson);
      let blob = new Blob([exportJson], {type:'text/json'});
      let url = window.webkitURL.createObjectURL(blob);
      let uri: SafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      // var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8, " + encodeURIComponent(exportJson));
      this.downloadJsonHref = uri;
    }catch(e){
      alert(e);
    }

  }
}

//TEST {"vars":["var1", "var2", "var3"]}
