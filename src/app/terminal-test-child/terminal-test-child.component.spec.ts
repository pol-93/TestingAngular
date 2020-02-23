import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalTestChildComponent } from './terminal-test-child.component';

describe('TerminalTestChildComponent', () => {
  let component: TerminalTestChildComponent;
  let fixture: ComponentFixture<TerminalTestChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalTestChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalTestChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
