import { Profile } from './profile.model';

export interface Article {
  _id: string;
  title: string;
  body: string;
  owner: string;
  author: Profile;
}
