import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevChatComponent } from './prev-chat.component';

describe('PrevChatComponent', () => {
  let component: PrevChatComponent;
  let fixture: ComponentFixture<PrevChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
