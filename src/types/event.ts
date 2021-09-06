import { IFAQ } from './faq';

export type eventTypes =
  | 'appearance'
  | 'attraction'
  | 'classOrTrainingOrWorkshop'
  | 'conference'
  | 'festivalOrFair'
  | 'concertOrPerformance'
  | 'meetingOrNetworkingEvent'
  | 'partyOrSocialGathering'
  | 'tournament'
  | 'seminarOrTail'
  | 'rally'
  | 'gameOrCompetition';

export type eventStatus = 'requested' | 'published' | 'completed' | 'cancelled';

export interface IEventMembers {
  _id: string;
  name: string;
  email: string;
  contactNo: string;
}

export interface IEvent {
  _id: string;
  url: string;
  type: eventTypes;
  coverImage: string;
  name: string;
  description: string;
  termsConditions: string;
  organizer: {
    name: string;
    email: string;
    contactNo: string;
  };
  hostingType: 'venue' | 'online';
  venueAddress?: string;
  venueLocation?: {
    type: 'Point';
    coordinates: number[];
  };
  onlineLink?: string;
  startingDate: string;
  startingTime: string;
  endingDate: string;
  endingTime: string;
  ticketType: 'free' | 'paid';
  price?: number;
  quantity: number;
  ticketTermsConditions: string;
  faq: IFAQ[];
  status: eventStatus;
  members: number;
  requestedMembers: number;
  account: string;
  isRemoved: boolean;
  createdAt: string;
  updatedAt: string;
  // tags: ITAG[];
  tags: string[];
}

export interface IEventTicket {
  customerDetail: IEventMember;
  slug: string;
  event: IEvent;
}
export interface IEventMember {
  _id: string;
  name: string;
  email: string;
  contactNo: string;
}
export interface INewEventStep1 {
  type: IEvent['type'];
}

export interface INewEventStep2 {
  name: IEvent['name'];
  description: IEvent['description'];
  termsConditions: IEvent['termsConditions'];
  organizer: IEvent['organizer'];
  coverImage: IEvent['coverImage'];
  tags: IEvent['tags'];
}

export interface INewEventStep3 {
  hostingType: IEvent['hostingType'];
  venueAddress: IEvent['venueAddress'];
  latitude?: number;
  longitude?: number;
  onlineLink: IEvent['onlineLink'];
  startingDate: string;
  startingTime: IEvent['startingTime'];
  endingDate: string;
  endingTime: IEvent['endingTime'];
}
