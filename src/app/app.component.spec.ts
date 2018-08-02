import { Location} from "@angular/common";
import { TestBed, fakeAsync, tick,async} from '@angular/core/testing';
import { RouterTestingModule} from "@angular/router/testing";
import { Router} from "@angular/router";
import { provideRoutes} from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [ RouterTestingModule,CoreModule ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
