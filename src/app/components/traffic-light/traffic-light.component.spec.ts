import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Complexity } from 'src/app/shared/models/Complexity';
import { Size } from './Size';
import { TrafficLightComponent } from './traffic-light.component';

describe('TrafficLightComponent', () => {
  let component: TrafficLightComponent;
  let fixture: ComponentFixture<TrafficLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrafficLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have DEFAULT size by default', () => {
    const htmlElement = fixture.debugElement.query(By.css('.traffic-light'));
    expect(htmlElement.classes['default']).toBeTruthy();
  });

  it('should be small sized', () => {
    component.size = Size.SMALL;
    fixture.detectChanges();
    const htmlElement = fixture.debugElement.query(By.css('.traffic-light'));
    expect(htmlElement.classes['small']).toBeTruthy();
    expect(htmlElement.classes['default']).toBeFalsy();
    expect(htmlElement.classes['big']).toBeFalsy();
  });

  it('should be default sized', () => {
    component.size = Size.DEFAULT;
    fixture.detectChanges();
    const htmlElement = fixture.debugElement.query(By.css('.traffic-light'));
    expect(htmlElement.classes['small']).toBeFalsy();
    expect(htmlElement.classes['default']).toBeTruthy();
    expect(htmlElement.classes['big']).toBeFalsy();
  });

  it('should be big sized', () => {
    component.size = Size.BIG;
    fixture.detectChanges();
    const htmlElement = fixture.debugElement.query(By.css('.traffic-light'));
    expect(htmlElement.classes['small']).toBeFalsy();
    expect(htmlElement.classes['default']).toBeFalsy();
    expect(htmlElement.classes['big']).toBeTruthy();
  });

  it('should be vertical by default', () => {
    const htmlElement = fixture.debugElement.query(By.css('.traffic-light'));
    expect(htmlElement.classes['horizontal']).toBeFalsy();
  });

  it('should be vertical', () => {
    component.horizontal = false;
    fixture.detectChanges();
    const htmlElement = fixture.debugElement.query(By.css('.traffic-light'));
    expect(htmlElement.classes['horizontal']).toBeFalsy();
  });

  it('should be horizontal', () => {
    component.horizontal = true;
    fixture.detectChanges();
    const htmlElement = fixture.debugElement.query(By.css('.traffic-light'));
    expect(htmlElement.classes['horizontal']).toBeTruthy();
  });

  it('no complexity should be indicated by default', () => {
    const htmlElement = fixture.debugElement.query(By.css('.traffic-light'));
    expect(htmlElement.classes['easy']).toBeFalsy();
    expect(htmlElement.classes['medium']).toBeFalsy();
    expect(htmlElement.classes['difficult']).toBeFalsy();
  });

  it('should have easy css class when easy', () => {
    component.complexity = Complexity.EASY;
    fixture.detectChanges();
    const htmlElement = fixture.debugElement.query(By.css('.traffic-light'));
    expect(htmlElement.classes['easy']).toBeTruthy();
    expect(htmlElement.classes['medium']).toBeFalsy();
    expect(htmlElement.classes['difficult']).toBeFalsy();
  });

  it('should have medium css class when medium', () => {
    component.complexity = Complexity.MEDIUM;
    fixture.detectChanges();
    const htmlElement = fixture.debugElement.query(By.css('.traffic-light'));
    expect(htmlElement.classes['easy']).toBeFalsy();
    expect(htmlElement.classes['medium']).toBeTruthy();
    expect(htmlElement.classes['difficult']).toBeFalsy();
  });

  it('should have difficult css class difficult', () => {
    component.complexity = Complexity.DIFFICULT;
    fixture.detectChanges();
    const htmlElement = fixture.debugElement.query(By.css('.traffic-light'));
    expect(htmlElement.classes['easy']).toBeFalsy();
    expect(htmlElement.classes['medium']).toBeFalsy();
    expect(htmlElement.classes['difficult']).toBeTruthy();
  });
});
