import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonnaliserVisitePage } from './personnaliser-visite.page';

describe('PersonnaliserVisitePage', () => {
  let component: PersonnaliserVisitePage;
  let fixture: ComponentFixture<PersonnaliserVisitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnaliserVisitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonnaliserVisitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
