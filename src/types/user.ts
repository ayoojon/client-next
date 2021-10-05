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
  accessToken?: string;
  refreashToken?: string;
}

export interface ICurrentPosition {
  latitude: number;
  longitude: number;
}

export interface IUserSignIn {
  email: IUser['email'];
  password: string;
}

export interface IUserSignup {
  name: IUser['name'];
  email: IUser['email'];
  password: string;
  confirmPassword: string;
}

export interface IUpdateUser {
  name: IUser['name'];
  address: IUser['address'];
  contactNo: IUser['contactNo'];
}

export interface IUserChangePassword {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface IUserBasicInfoUpdate {
  name: IUser['name'];
  address: IUser['address'];
  contactNo: IUser['contactNo'];
}

export interface IUserReducer {
  user: IUser | null;
  isLogin: boolean;
  position?: ICurrentPosition;
  error: string | object | null;
  loading: boolean;
}

export interface IUpdateUserAvatar {
  avatar: IUser['avatar'];
}

export interface IUserForgotPassword {
  email: IUser['email'];
}

export interface IUpdateUserIsVerified {
  isVerified: IUser['isVerified'];
}

export interface IUpdateEmail {
  email: IUser['email'];
}

export interface IUserResetPassword {
  newPassword: string;
  confirmPassword: string;
}
