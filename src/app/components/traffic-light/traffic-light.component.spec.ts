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
    const trafficLight = fixture.debugElement.query(By.css('.traffic-light'));
    expect(trafficLight.classes['default']).toBeTruthy();
  });

  it('should be small sized', () => {
    component.size = Size.SMALL;
    fixture.detectChanges();
    const trafficLight = fixture.debugElement.query(By.css('.traffic-light'));
    expect(trafficLight.classes['small']).toBeTruthy();
    expect(trafficLight.classes['default']).toBeFalsy();
    expect(trafficLight.classes['big']).toBeFalsy();
  });

  it('should be default sized', () => {
    component.size = Size.DEFAULT;
    fixture.detectChanges();
    const trafficLight = fixture.debugElement.query(By.css('.traffic-light'));
    expect(trafficLight.classes['small']).toBeFalsy();
    expect(trafficLight.classes['default']).toBeTruthy();
    expect(trafficLight.classes['big']).toBeFalsy();
  });

  it('should be big sized', () => {
    component.size = Size.BIG;
    fixture.detectChanges();
    const trafficLight = fixture.debugElement.query(By.css('.traffic-light'));
    expect(trafficLight.classes['small']).toBeFalsy();
    expect(trafficLight.classes['default']).toBeFalsy();
    expect(trafficLight.classes['big']).toBeTruthy();
  });

  it('should be vertical by default', () => {
    const trafficLight = fixture.debugElement.query(By.css('.traffic-light'));
    expect(trafficLight.classes['horizontal']).toBeFalsy();
  });

  it('should be vertical', () => {
    component.horizontal = false;
    fixture.detectChanges();
    const trafficLight = fixture.debugElement.query(By.css('.traffic-light'));
    expect(trafficLight.classes['horizontal']).toBeFalsy();
  });

  it('should be horizontal', () => {
    component.horizontal = true;
    fixture.detectChanges();
    const trafficLight = fixture.debugElement.query(By.css('.traffic-light'));
    expect(trafficLight.classes['horizontal']).toBeTruthy();
  });

  it('no complexity should be indicated by default', () => {
    const trafficLight = fixture.debugElement.query(By.css('.traffic-light'));
    expect(trafficLight.classes['easy']).toBeFalsy();
    expect(trafficLight.classes['medium']).toBeFalsy();
    expect(trafficLight.classes['difficult']).toBeFalsy();
  });

  it('should have easy css class when easy', () => {
    component.complexity = Complexity.EASY;
    fixture.detectChanges();
    const trafficLight = fixture.debugElement.query(By.css('.traffic-light'));
    expect(trafficLight.classes['easy']).toBeTruthy();
    expect(trafficLight.classes['medium']).toBeFalsy();
    expect(trafficLight.classes['difficult']).toBeFalsy();
  });

  it('should have medium css class when medium', () => {
    component.complexity = Complexity.MEDIUM;
    fixture.detectChanges();
    const trafficLight = fixture.debugElement.query(By.css('.traffic-light'));
    expect(trafficLight.classes['easy']).toBeFalsy();
    expect(trafficLight.classes['medium']).toBeTruthy();
    expect(trafficLight.classes['difficult']).toBeFalsy();
  });

  it('should have difficult css class difficult', () => {
    component.complexity = Complexity.DIFFICULT;
    fixture.detectChanges();
    const trafficLight = fixture.debugElement.query(By.css('.traffic-light'));
    expect(trafficLight.classes['easy']).toBeFalsy();
    expect(trafficLight.classes['medium']).toBeFalsy();
    expect(trafficLight.classes['difficult']).toBeTruthy();
  });
});
