import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCandidateComponent } from './find-candidate.component';

describe('FindCandidateComponent', () => {
  let component: FindCandidateComponent;
  let fixture: ComponentFixture<FindCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
