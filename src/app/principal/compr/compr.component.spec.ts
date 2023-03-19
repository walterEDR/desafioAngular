import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprComponent } from './compr.component';

describe('ComprComponent', () => {
  let component: ComprComponent;
  let fixture: ComponentFixture<ComprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
