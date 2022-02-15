import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRequestErrorHandlingComponent } from './get-request-error-handling.component';

describe('GetRequestErrorHandlingComponent', () => {
  let component: GetRequestErrorHandlingComponent;
  let fixture: ComponentFixture<GetRequestErrorHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetRequestErrorHandlingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRequestErrorHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
