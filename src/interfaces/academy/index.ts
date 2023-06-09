import { CoachInterface } from 'interfaces/coach';
import { PlayerInterface } from 'interfaces/player';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AcademyInterface {
  id?: string;
  name: string;
  description?: string;
  image?: string;
  created_at?: Date | string;
  updated_at?: Date | string;
  user_id: string;
  tenant_id: string;
  coach?: CoachInterface[];
  player?: PlayerInterface[];
  user?: UserInterface;
  _count?: {
    coach?: number;
    player?: number;
  };
}

export interface AcademyGetQueryInterface extends GetQueryInterface {
  filter?: {
    id?: string;
    name?: string;
    description?: string;
    image?: string;
    user_id?: string;
    tenant_id?: string;
  };
}
