import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyElementComponent } from './my-element.component';

describe('MyElementComponent', () => {
  let component: MyElementComponent;
  let fixture: ComponentFixture<MyElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
