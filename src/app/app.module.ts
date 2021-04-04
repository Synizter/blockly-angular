import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxBlocklyModule } from 'ngx-blockly';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { BlocklyworkspaceComponent } from './blocklyworkspace/blocklyworkspace.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConsoleComponent } from './console/console.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    BlocklyworkspaceComponent,
    NavbarComponent,
    ConsoleComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBlocklyModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
