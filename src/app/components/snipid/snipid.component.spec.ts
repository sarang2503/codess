import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnipidComponent } from './snipid.component';

describe('SnipidComponent', () => {
  let component: SnipidComponent;
  let fixture: ComponentFixture<SnipidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnipidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnipidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
