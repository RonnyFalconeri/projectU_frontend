import { Complexity } from "./Complexity";
import { State } from "./State";

export interface Task {
  id?: string;
  title: string;
  description: string;
  state: State;
  complexity: Complexity;
  estimatedDurationInHours: number;
  result: string;
}
