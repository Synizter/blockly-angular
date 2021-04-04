import { BlockMutator, CustomBlock } from "ngx-blockly";

declare var Blockly : any;

export class SkillCallBlock extends CustomBlock {
    constructor(type: string, block: any, blockMutator: BlockMutator, ...args: any[]) {
        super(type, block, blockMutator, ...args);
        this.class = SkillCallBlock;
    }
    
    defineBlock() {
        this.block.appendDummyInput()
        .appendField("Call")
        .appendField(new Blockly.FieldDropdown([["Man","fe1090ed941db12ed1d350730031ea5b"], ["Pear","4990c18cea5e6604cc1adc384fe224e8"], ["AjVirach","67696f1ff709a3b0804ae43641ed8d85"]]), "contact");
        this.block.setPreviousStatement(true, null);
        this.block.setNextStatement(true, null);
        this.block.setColour(230);
        this.block.setTooltip("");
        this.block.setHelpUrl("Select person to call from drop down list");
    }

    toXML() {
        return '<block type="temi_skill_call"></block>';
    }

    toJavaScriptCode(block: CustomBlock): string | any[] {
        var contact = this.block.getFieldValue('contact');
        // var code = `actionlist.append('{"action":"CALL", "content":"${dropdown_contact}"}')\n`
        var code = `robot.call("${contact}")\n`
        return code;
    }

    onChange(changeEvent: any) {
        //console.log(changeEvent);
    }
}

export class SkillGoToBlock extends CustomBlock {
    constructor(type: string, block: any, blockMutator: BlockMutator, ...args: any[]) {
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

    toJavaScriptCode(block: CustomBlock): string | any[] {
        var location = this.block.getFieldValue('location');
        var code = `robot.goto("${location}")\n`
        return code;
    }

    onChange(changeEvent: any) {
        //console.log(changeEvent);
    }
}

export class SkillSpeakBlock extends CustomBlock {
    private param : any[];
    constructor(type: string, block: any, blockMutator: BlockMutator, ...args: any[]) {
        super(type, block, blockMutator, ...args);
        this.class = SkillSpeakBlock;
    }
    
    defineBlock() {
        this.block.appendDummyInput()
            .appendField("Say")
            .appendField(new Blockly.FieldTextInput("hello world"), "utterance")
            .appendField("in")
            .appendField(new Blockly.FieldDropdown([["English","en"],["Thai","th"], ["Japanese","JP"]]), "language_options");
        this.block.setPreviousStatement(true, null);
        this.block.setNextStatement(true, null);
        this.block.setColour(315);
        this.block.setTooltip("Type what you want temi to say, select languge either English, Japanese or Thai");
        this.block.setHelpUrl("");
    }

    toXML() {
        return '<block type="temi_skill_speak"></block>';
    }

    toJavaScriptCode(block: CustomBlock): string | any[] {
        var utterance = this.block.getFieldValue('utterance');
        var language_option = this.block.getFieldValue('language_options');
        var code = `robot.speak("${utterance}", "${language_option}")\n`
        return code;

    }

    onChange(changeEvent: any) {
        //console.log(changeEvent);
    }
}