import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValiderVisitePage } from './valider-visite.page';

describe('ValiderVisitePage', () => {
  let component: ValiderVisitePage;
  let fixture: ComponentFixture<ValiderVisitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValiderVisitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValiderVisitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
