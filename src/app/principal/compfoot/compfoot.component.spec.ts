import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompfootComponent } from './compfoot.component';

describe('CompfootComponent', () => {
  let component: CompfootComponent;
  let fixture: ComponentFixture<CompfootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompfootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompfootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
