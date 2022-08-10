import { Equipment } from './equipment';
import { History } from './history';
import { User } from './user';

export interface Project {
  id: string;
  name: string;
  manager: User;
  equipment: Equipment[];
  history: History[];
  members: User[];
}
