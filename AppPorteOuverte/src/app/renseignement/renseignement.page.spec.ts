import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RenseignementPage } from './renseignement.page';

describe('RenseignementPage', () => {
  let component: RenseignementPage;
  let fixture: ComponentFixture<RenseignementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenseignementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RenseignementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
