import { IReview } from './review';
import { serviceTypes } from './service';
import { IUser } from './user';

export type bookingTypes = 'normal' | 'custom';
export type bookingForTypes = 'personal' | 'business';
export type personalTypeOfEventsTypes =
  | 'weddingAndEngagement'
  | 'travelShoot'
  | 'kidsParty'
  | 'partyGathering'
  | 'pet'
  | 'graduation'
  | 'couplePhotoshoot'
  | 'otherLifeEvent'
  | 'portraits'
  | 'babyPhotoshoot'
  | 'others';
export type businessTypeOfEventsTypes =
  | 'workshop'
  | 'seminar'
  | 'concert'
  | 'reunion'
  | 'party'
  | 'conferences'
  | 'awardsAndCompetitions'
  | 'festivals'
  | 'tradeShowsAndExpos'
  | 'others';
export type bookingStatus = 'pending' | 'reserved' | 'rejected' | 'deposited' | 'paid' | 'completed' | 'canceled';

export interface IBooking {
  _id: string;
  account: Pick<IUser, '_id' | 'name' | 'email' | 'contactNo'>;
  service: { _id: string; name: string; email: string; contactNo: string };
  date: string;
  from: string;
  to: string;
  price: number;
  currency: 'BDT';
  bookingFor: bookingForTypes;
  typeOfEvent: personalTypeOfEventsTypes | businessTypeOfEventsTypes;
  additionalRequirements: string;
  status: bookingStatus;
  type: bookingTypes;
  typeOfService: serviceTypes;
  //   conventionHallBooking?: {
  //     _id: string;
  //     space: Pick<IConventionalHallPlaceAndPricing, '_id' | 'name' | 'placeType'>;
  //   };
  review?: string | Pick<IReview, '_id' | 'rating' | 'text' | 'createdAt'>;
  createdAt: Date;
  updatedAt: Date;
}

export interface IOnProgressBooking {
  date: IBooking['date'];
  // ? venue
  spaceId?: string;
  pricingId?: string;
}
