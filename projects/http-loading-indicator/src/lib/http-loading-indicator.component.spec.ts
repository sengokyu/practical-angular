import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpLoadingIndicatorComponent } from './http-loading-indicator.component';

describe('HttpLoadingIndicatorComponent', () => {
  let component: HttpLoadingIndicatorComponent;
  let fixture: ComponentFixture<HttpLoadingIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpLoadingIndicatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpLoadingIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
