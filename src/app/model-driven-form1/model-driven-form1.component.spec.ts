import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDrivenForm1Component } from './model-driven-form1.component';

describe('ModelDrivenForm1Component', () => {
  let component: ModelDrivenForm1Component;
  let fixture: ComponentFixture<ModelDrivenForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelDrivenForm1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelDrivenForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
