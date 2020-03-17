import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeRepererPage } from './se-reperer.page';

describe('SeRepererPage', () => {
  let component: SeRepererPage;
  let fixture: ComponentFixture<SeRepererPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeRepererPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeRepererPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
