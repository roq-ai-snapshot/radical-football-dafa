import { PlayerProfileInterface } from 'interfaces/player-profile';
import { UserInterface } from 'interfaces/user';
import { AcademyInterface } from 'interfaces/academy';
import { GetQueryInterface } from 'interfaces';

export interface CoachInterface {
  id?: string;
  name: string;
  user_id: string;
  academy_id: string;
  created_at?: Date | string;
  updated_at?: Date | string;
  player_profile?: PlayerProfileInterface[];
  user?: UserInterface;
  academy?: AcademyInterface;
  _count?: {
    player_profile?: number;
  };
}

export interface CoachGetQueryInterface extends GetQueryInterface {
  filter?: {
    id?: string;
    name?: string;
    user_id?: string;
    academy_id?: string;
  };
}
