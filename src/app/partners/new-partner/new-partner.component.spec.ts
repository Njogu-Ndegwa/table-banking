import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPartnerComponent } from './new-partner.component';

describe('NewPartnerComponent', () => {
  let component: NewPartnerComponent;
  let fixture: ComponentFixture<NewPartnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPartnerComponent]
    });
    fixture = TestBed.createComponent(NewPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
