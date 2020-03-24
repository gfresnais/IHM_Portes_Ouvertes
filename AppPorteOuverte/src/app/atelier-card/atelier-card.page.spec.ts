import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtelierCardPage } from './atelier-card.page';

describe('AtelierCardPage', () => {
  let component: AtelierCardPage;
  let fixture: ComponentFixture<AtelierCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtelierCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtelierCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
