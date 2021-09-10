import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Complexity } from 'build/openapi/model/complexity';
import { Size } from '../../shared/models/Size';
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
    expect(hasOnlyClassOfSize(trafficLight, Size.DEFAULT)).toBeTruthy();
  });

  it('should be small sized', () => {
    component.size = Size.SMALL;
    fixture.detectChanges();
    const trafficLight = fixture.debugElement.query(By.css('.traffic-light'));
    expect(hasOnlyClassOfSize(trafficLight, Size.SMALL)).toBeTruthy();
  });

  it('should be default sized', () => {
    component.size = Size.DEFAULT;
    fixture.detectChanges();
    const trafficLight = fixture.debugElement.query(By.css('.traffic-light'));
    expect(hasOnlyClassOfSize(trafficLight, Size.DEFAULT)).toBeTruthy();
  });

  it('should be big sized', () => {
    component.size = Size.BIG;
    fixture.detectChanges();
    const trafficLight = fixture.debugElement.query(By.css('.traffic-light'));
    expect(hasOnlyClassOfSize(trafficLight, Size.BIG)).toBeTruthy();
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
    expect(hasNoClassOfComplexity(trafficLight)).toBeTruthy();
  });

  it('should have easy css class when easy', () => {
    component.complexity = Complexity.Easy;
    fixture.detectChanges();
    const trafficLight = fixture.debugElement.query(By.css('.traffic-light'));
    expect(hasOnlyClassOfComplexity(trafficLight, Complexity.Easy)).toBeTruthy();
  });

  it('should have medium css class when medium', () => {
    component.complexity = Complexity.Medium;
    fixture.detectChanges();
    const trafficLight = fixture.debugElement.query(By.css('.traffic-light'));
    expect(hasOnlyClassOfComplexity(trafficLight, Complexity.Medium)).toBeTruthy();
  });

  it('should have difficult css class difficult', () => {
    component.complexity = Complexity.Difficult;
    fixture.detectChanges();
    const trafficLight = fixture.debugElement.query(By.css('.traffic-light'));
    expect(hasOnlyClassOfComplexity(trafficLight, Complexity.Difficult)).toBeTruthy();
  });
});

function hasOnlyClassOfSize(element: DebugElement, size: Size): boolean {
  switch (size) {
    case Size.SMALL:
      return hasOnlyClassOfSmall(element);
    case Size.DEFAULT:
      return hasOnlyClassOfDefault(element);
    case Size.BIG:
      return hasOnlyClassOfBig(element);
    default:
      return false;
  }
}

function hasOnlyClassOfSmall(element: DebugElement): boolean {
  let small: boolean = element.classes['small'];
  let defaultSize: boolean = element.classes['default'];
  let big: boolean = element.classes['big'];

  if(small && !defaultSize && !big ) {
    return true;
  }

  return false;
}

function hasOnlyClassOfDefault(element: DebugElement): boolean {
  let small: boolean = element.classes['small'];
  let defaultSize: boolean = element.classes['default'];
  let big: boolean = element.classes['big'];

  if(!small && defaultSize && !big ) {
    return true;
  }

  return false;
}

function hasOnlyClassOfBig(element: DebugElement): boolean {
  let small: boolean = element.classes['small'];
  let defaultSize: boolean = element.classes['default'];
  let big: boolean = element.classes['big'];

  if(!small && !defaultSize && big ) {
    return true;
  }

  return false;
}

function hasOnlyClassOfComplexity(element: DebugElement, complexity: Complexity): boolean {
  switch (complexity) {
    case Complexity.Easy:
      return hasOnlyClassOfEasy(element);
    case Complexity.Medium:
      return hasOnlyClassOfMedium(element);
    case Complexity.Difficult:
      return hasOnlyClassOfDifficult(element);
    default:
      return false;
  }
}

function hasNoClassOfComplexity(element: DebugElement): boolean {
  let easy: boolean = element.classes['easy'];
  let medium: boolean = element.classes['medium'];
  let difficult: boolean = element.classes['difficult'];

  if(!easy && !medium && !difficult ) {
    return true;
  }

  return false;
}

function hasOnlyClassOfEasy(element: DebugElement): boolean {
  let easy: boolean = element.classes['easy'];
  let medium: boolean = element.classes['medium'];
  let difficult: boolean = element.classes['difficult'];

  if(easy && !medium && !difficult ) {
    return true;
  }

  return false;
}

function hasOnlyClassOfMedium(element: DebugElement): boolean {
  let easy: boolean = element.classes['easy'];
  let medium: boolean = element.classes['medium'];
  let difficult: boolean = element.classes['difficult'];

  if(!easy && medium && !difficult ) {
    return true;
  }

  return false;
}

function hasOnlyClassOfDifficult(element: DebugElement): boolean {
  let easy: boolean = element.classes['easy'];
  let medium: boolean = element.classes['medium'];
  let difficult: boolean = element.classes['difficult'];

  if(!easy && !medium && difficult ) {
    return true;
  }

  return false;
}
