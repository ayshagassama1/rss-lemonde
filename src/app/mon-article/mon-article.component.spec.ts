import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonArticleComponent } from './mon-article.component';

describe('MonArticleComponent', () => {
  let component: MonArticleComponent;
  let fixture: ComponentFixture<MonArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
