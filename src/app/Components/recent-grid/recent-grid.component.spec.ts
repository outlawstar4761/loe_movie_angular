import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentGridComponent } from './recent-grid.component';

describe('RecentGridComponent', () => {
  let component: RecentGridComponent;
  let fixture: ComponentFixture<RecentGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
