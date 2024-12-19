import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPlantillaComponent } from './form-plantilla.component';

describe('FormPlantillaComponent', () => {
  let component: FormPlantillaComponent;
  let fixture: ComponentFixture<FormPlantillaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPlantillaComponent]
    });
    fixture = TestBed.createComponent(FormPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
