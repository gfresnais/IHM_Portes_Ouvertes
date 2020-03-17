import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonItinerairePage } from './mon-itineraire.page';

describe('MonItinerairePage', () => {
  let component: MonItinerairePage;
  let fixture: ComponentFixture<MonItinerairePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonItinerairePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonItinerairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
