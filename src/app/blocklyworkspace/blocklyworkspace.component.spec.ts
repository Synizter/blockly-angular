import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocklyworkspaceComponent } from './blocklyworkspace.component';

describe('BlocklyworkspaceComponent', () => {
  let component: BlocklyworkspaceComponent;
  let fixture: ComponentFixture<BlocklyworkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocklyworkspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocklyworkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
