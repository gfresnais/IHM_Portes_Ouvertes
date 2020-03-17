import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChoixGuidePage } from './choix-guide.page';

describe('ChoixGuidePage', () => {
  let component: ChoixGuidePage;
  let fixture: ComponentFixture<ChoixGuidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixGuidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChoixGuidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
