import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PianetiComponent } from './pianeti.component';

describe('PianetiComponent', () => {
  let component: PianetiComponent;
  let fixture: ComponentFixture<PianetiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PianetiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PianetiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
