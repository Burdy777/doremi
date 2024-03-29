/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TempoComponent } from './tempo.component';

describe('TempoComponent', () => {
  let component: TempoComponent;
  let fixture: ComponentFixture<TempoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
