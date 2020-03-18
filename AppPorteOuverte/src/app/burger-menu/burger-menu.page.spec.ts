import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BurgerMenuPage } from './burger-menu.page';

describe('BurgerMenuPage', () => {
  let component: BurgerMenuPage;
  let fixture: ComponentFixture<BurgerMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BurgerMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
