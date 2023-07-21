import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMeComponent } from './profile-me.component';

describe('ProfileMeComponent', () => {
  let component: ProfileMeComponent;
  let fixture: ComponentFixture<ProfileMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
