import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandLineComponent } from './comand-line.component';

describe('ComandLineComponent', () => {
  let component: ComandLineComponent;
  let fixture: ComponentFixture<ComandLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComandLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComandLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
