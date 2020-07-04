import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultImportComponent } from './result-import.component';

describe('ResultImportComponent', () => {
  let component: ResultImportComponent;
  let fixture: ComponentFixture<ResultImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
