import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminadorComponent } from './eliminador.component';

describe('EliminadorComponent', () => {
  let component: EliminadorComponent;
  let fixture: ComponentFixture<EliminadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
