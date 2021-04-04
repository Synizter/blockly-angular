import { Component, OnInit } from '@angular/core';
import { 
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
import { TestBlock } from '../customblock/testBlock.block'
import {
  SkillCallBlock, 
  SkillGoToBlock, 
  SkillSpeakBlock } from '../customblock/temi.skill.block'

@Component({
  selector: 'app-blocklyworkspace',
  templateUrl: './blocklyworkspace.component.html',
  styleUrls: ['./blocklyworkspace.component.css']
})
export class BlocklyworkspaceComponent {

  public customBlocks: CustomBlock[] = [
    //note that this string shoud be resemble block name in XML
    // new TestBlock('test', null, null)
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
    // xml: true
  };
  //Callback function
  onCode(code: String) {
    console.log(code);
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
  

}
