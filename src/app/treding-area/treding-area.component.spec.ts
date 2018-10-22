import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TredingAreaComponent } from './treding-area.component';

describe('TredingAreaComponent', () => {
  let component: TredingAreaComponent;
  let fixture: ComponentFixture<TredingAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TredingAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TredingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
