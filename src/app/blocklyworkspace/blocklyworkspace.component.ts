import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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
  public customBlocks: CustomBlock[] = [
    //note that this string shoud be resemble block name in XML
    new SkillCallBlock('temi_skill_call', null, null),
    new SkillGoToBlock('temi_skill_goto',null, null),
    new SkillSpeakBlock('temi_skill_speak',null, null)
  ];
  private generatedCode:String;
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
  onCode(code: String) {
    console.log(code);
    console.log(this.blocklyComponent.toXml())
    this.generatedCode = code;
  }

  getGeneratedCode() {
    return this.generatedCode;
  }
  
  constructor(ngxToolboxBuilder: NgxToolboxBuilderService) {
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
    this.blocklyComponent.workspace.createVariable('test', null, null);
    this.blocklyComponent.workspace.createVariable('test1', null, null);
    this.blocklyComponent.workspace.createVariable('test2', null, null);
  }
  

}
