import { AfterViewInit, 
  Component, 
  ElementRef, 
  OnInit, 
  Output,
  ViewChild,
  EventEmitter } from '@angular/core';
// ace editor
import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-github';



const EDITOR_THEME = 'ace/theme/github';
const EDITOR_MODE_LANG = 'ace/mode/json';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, AfterViewInit {

  @ViewChild('codeEditor') codeEditorElementRef : ElementRef;
  @Output() codeEmittor:EventEmitter<string> = new EventEmitter<string>();
  @Output() displayBlocklyWorkspace: EventEmitter<boolean> = new EventEmitter<boolean>();
  private codeEditor: ace.Ace.Editor;

  constructor() {
  }
   
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
        //create element reference
        const element = this.codeEditorElementRef.nativeElement;
        //create option for editor
        const editorOption : Partial<ace.Ace.EditorOptions> = {
          highlightActiveLine: true,
          minLines: 10,
          maxLines: Infinity
        }
        this.codeEditor = ace.edit(element, editorOption);
        this.codeEditor.setTheme(EDITOR_THEME);
        this.codeEditor.getSession().setMode(EDITOR_MODE_LANG);
        this.codeEditor.setShowFoldWidgets(true);
  }

  //Methods
  public getCodeContent() {
    if(this.codeEditor) {
      const code = this.codeEditor.getValue();
      return code;
    }
  }
  
  public clearCode() {
    this.codeEditor.setValue('');
    this.displayBlocklyWorkspace.emit(false);
  }

  public emitCode() {
    this.displayBlocklyWorkspace.emit(true);
    this.codeEmittor.emit(this.getCodeContent());
  }

  
  

}
