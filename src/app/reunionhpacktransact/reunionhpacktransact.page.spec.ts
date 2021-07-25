import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReunionhpacktransactPage } from './reunionhpacktransact.page';

describe('ReunionhpacktransactPage', () => {
  let component: ReunionhpacktransactPage;
  let fixture: ComponentFixture<ReunionhpacktransactPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReunionhpacktransactPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReunionhpacktransactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
