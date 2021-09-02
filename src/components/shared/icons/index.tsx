import React from 'react';

import AyoojonLogo from './AyoojonLogo';
import NavbarOpen from './NavbarOpen';
import NavbarClose from './NavbarClose';
import ArrowRight from './ArrowRight';
import Star from './Star';
import CheckCircleOutline from './CheckCircleOutline';
import UserAvatar from './UserAvatar';
import Add from './Add';
import Remove from './Remove';
import Dashboard from './Dashboard';
import Request from './Request';
import Bookings from './Bookings';
import Service from './Service';
import Settings from './Settings';
import KeyboardArrowLeft from './KeyboardArrowLeft';
import KeyboardArrowRight from './KeyboardArrowRight';
import AlarmClock from './AlarmClock';
import ThumbUp from './ThumbUp';
import Payment from './Payment';
import AssignmentDone from './AssignmentDone';
import DoneAll from './DoneAll';
import Compass from './Compass';
import Users from './Users';
import Google from './Google';

export type IconNames =
  | 'ayoojon-logo'
  | 'keyboard-arrow-left'
  | 'keyboard-arrow-right'
  | 'navbar-open'
  | 'navbar-close'
  | 'arrow-right'
  | 'star'
  | 'check-circle-outline'
  | 'user-avatar'
  | 'add'
  | 'remove'
  | 'dashboard'
  | 'request'
  | 'bookings'
  | 'service'
  | 'settings'
  | 'alarm-clock'
  | 'thumb-up'
  | 'payment'
  | 'assignment-done'
  | 'compass'
  | 'users'
  | 'google'
  | 'done-all';

export interface IconProps {
  name: IconNames;
  style?: Object;
  fill?: string;
  width?: string | number;
  height?: string | number;
  className?: string | undefined;
}

const Icon = (props: IconProps) => {
  switch (props.name) {
    case 'ayoojon-logo':
      return <AyoojonLogo {...props} />;
    case 'keyboard-arrow-left':
      return <KeyboardArrowLeft {...props} />;
    case 'keyboard-arrow-right':
      return <KeyboardArrowRight {...props} />;
    case 'navbar-open':
      return <NavbarOpen {...props} />;
    case 'navbar-close':
      return <NavbarClose {...props} />;
    case 'arrow-right':
      return <ArrowRight {...props} />;
    case 'star':
      return <Star {...props} />;
    case 'check-circle-outline':
      return <CheckCircleOutline {...props} />;
    case 'user-avatar':
      return <UserAvatar {...props} />;
    case 'add':
      return <Add {...props} />;
    case 'remove':
      return <Remove {...props} />;
    case 'dashboard':
      return <Dashboard {...props} />;
    case 'request':
      return <Request {...props} />;
    case 'bookings':
      return <Bookings {...props} />;
    case 'service':
      return <Service {...props} />;
    case 'settings':
      return <Settings {...props} />;
    case 'alarm-clock':
      return <AlarmClock {...props} />;
    case 'thumb-up':
      return <ThumbUp {...props} />;
    case 'payment':
      return <Payment {...props} />;
    case 'assignment-done':
      return <AssignmentDone {...props} />;
    case 'compass':
      return <Compass {...props} />;
    case 'done-all':
      return <DoneAll {...props} />;
    case 'users':
      return <Users {...props} />;
    case 'google':
      return <Google {...props} />;
    default:
      return <span>no icon found with name: {props.name}</span>;
  }
};

export default Icon;
