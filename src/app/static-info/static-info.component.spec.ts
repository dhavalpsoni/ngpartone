import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticInfoComponent } from './static-info.component';

describe('StaticInfoComponent', () => {
  let component: StaticInfoComponent;
  let fixture: ComponentFixture<StaticInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
