import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalldescriptionComponent } from './halldescription.component';

describe('HalldescriptionComponent', () => {
  let component: HalldescriptionComponent;
  let fixture: ComponentFixture<HalldescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalldescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalldescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
