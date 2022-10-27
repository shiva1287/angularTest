import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapdemoComponent } from './mapdemo.component';

describe('MapdemoComponent', () => {
  let component: MapdemoComponent;
  let fixture: ComponentFixture<MapdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
