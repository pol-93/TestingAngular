import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalTestParentComponent } from './terminal-test-parent.component';

describe('TerminalTestParentComponent', () => {
  let component: TerminalTestParentComponent;
  let fixture: ComponentFixture<TerminalTestParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalTestParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalTestParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
