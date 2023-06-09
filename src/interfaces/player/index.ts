import { ParentInterface } from 'interfaces/parent';
import { PlayerProfileInterface } from 'interfaces/player-profile';
import { UserInterface } from 'interfaces/user';
import { AcademyInterface } from 'interfaces/academy';
import { GetQueryInterface } from 'interfaces';

export interface PlayerInterface {
  id?: string;
  name: string;
  user_id: string;
  academy_id: string;
  status: string;
  created_at?: Date | string;
  updated_at?: Date | string;
  parent?: ParentInterface[];
  player_profile?: PlayerProfileInterface[];
  user?: UserInterface;
  academy?: AcademyInterface;
  _count?: {
    parent?: number;
    player_profile?: number;
  };
}

export interface PlayerGetQueryInterface extends GetQueryInterface {
  filter?: {
    id?: string;
    name?: string;
    user_id?: string;
    academy_id?: string;
    status?: string;
  };
}
