import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserReviewComponent } from './inser-review.component';

describe('InserReviewComponent', () => {
  let component: InserReviewComponent;
  let fixture: ComponentFixture<InserReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
