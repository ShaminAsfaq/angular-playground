import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSuggestionChipEmailComponent } from './auto-suggestion-chip-email.component';

describe('AutoSuggestionChipEmailComponent', () => {
  let component: AutoSuggestionChipEmailComponent;
  let fixture: ComponentFixture<AutoSuggestionChipEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoSuggestionChipEmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoSuggestionChipEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
