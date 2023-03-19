import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplComponent } from './compl.component';

describe('ComplComponent', () => {
  let component: ComplComponent;
  let fixture: ComponentFixture<ComplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
