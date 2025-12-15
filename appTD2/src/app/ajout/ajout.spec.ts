import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ajout } from './ajout';

describe('Ajout', () => {
  let component: Ajout;
  let fixture: ComponentFixture<Ajout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ajout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ajout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
