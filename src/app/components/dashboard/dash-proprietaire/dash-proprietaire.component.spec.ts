import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashProprietaireComponent } from './dash-proprietaire.component';

describe('DashProprietaireComponent', () => {
  let component: DashProprietaireComponent;
  let fixture: ComponentFixture<DashProprietaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashProprietaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashProprietaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
