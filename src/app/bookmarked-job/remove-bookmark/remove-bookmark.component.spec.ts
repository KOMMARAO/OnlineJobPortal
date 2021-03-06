import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveBookmarkComponent } from './remove-bookmark.component';

describe('RemoveBookmarkComponent', () => {
  let component: RemoveBookmarkComponent;
  let fixture: ComponentFixture<RemoveBookmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveBookmarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
