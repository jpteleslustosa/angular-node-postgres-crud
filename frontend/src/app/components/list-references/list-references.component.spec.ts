import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReferencesComponent } from './list-references.component';

describe('ListReferencesComponent', () => {
  let component: ListReferencesComponent;
  let fixture: ComponentFixture<ListReferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
