import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ipComponent } from './ip.component';

describe('IpComponent', () => {
  let component: ipComponent;
  let fixture: ComponentFixture<ipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
