import { IEvent } from './event';
import { serviceTypes } from './service';

export interface IUserServicesList {
  _id: string;
  name: string;
  logo: string;
  type: serviceTypes;
  isVerified: boolean;
}

export interface IUserEventsList {
  _id: IEvent['_id'];
  name: IEvent['name'];
  coverImage: IEvent['coverImage'];
  type: IEvent['type'];
  status: IEvent['status'];
}

export interface IUser {
  _id: string;
  email: string;
  name: string;
  type: 'admin' | 'user';
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  services?: IUserServicesList[];
  events?: IUserEventsList[];
  methods: string[];
  google?: {
    id?: string;
  };
  contactNo?: string;
  avatar?: string;
  address?: string;
  location?: string;
}

export interface IUserSignIn {
  email: IUser['email'];
  password: string;
}

export interface ICurrentPosition {
  latitude: number;
  longitude: number;
}
