import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuServicosComponent } from './menu-servicos.component';

describe('MenuServicosComponent', () => {
  let component: MenuServicosComponent;
  let fixture: ComponentFixture<MenuServicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuServicosComponent]
    });
    fixture = TestBed.createComponent(MenuServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
