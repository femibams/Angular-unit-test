import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

import { UserService } from '../../services/user/user.service';
import { UserServiceMock } from '../../mocks/user.service.mock';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers: [
        { provide: UserService, useClass: UserServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 1 user', () => {
    expect(component.users.length).toEqual(1);
  });

  it('html should render one user', () => {
    const le = fixture.nativeElement.querySelector('p');
    expect(le.innerText).toContain('user');
  });
});
