import { Complexity } from './Complexity';
import { State } from './State';
import { Task } from './Task';

export interface Project {
  id?: string;
  title: string;
  description: string;
  tasks: Task[];
  state: State;
  complexity: Complexity;
  estimatedDurationInHours: number;
  createdAt: string;
  expectedResult: string;
  startedAt: string;
  finishedAt: string;
  actualResult: string;
}
