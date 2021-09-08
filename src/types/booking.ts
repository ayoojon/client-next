import { IReview } from './review';
import { IService, serviceTypes } from './service';
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

export interface ICreateLocationBooking {
  service: IService['_id'];
  pricing: {
    date: string;
    type: string;
    price: number;
    startTime: string;
    endTime: string;
    location: {
      locationId: IService['pricing']['location'][0]['_id'];
      type: IService['pricing']['location'][0]['type'];
      title: IService['pricing']['location'][0]['title'];
      capacity: IService['pricing']['location'][0]['capacity'];
      size: IService['pricing']['location'][0]['size'];
      photos: IService['pricing']['location'][0]['photos'];
      session: {
        sessionId: IService['pricing']['location'][0]['sessions'][0]['_id'];
        startTime: IService['pricing']['location'][0]['sessions'][0]['startTime'];
        endTime: IService['pricing']['location'][0]['sessions'][0]['endTime'];
        price: IService['pricing']['location'][0]['sessions'][0]['price'];
      };
    };
  };
  bookingFor: IBooking['bookingFor'];
  typeOfEvent: IBooking['typeOfEvent'];
  additionalRequirements: IBooking['additionalRequirements'];
  type: string;
}

export interface ICreatePackageBooking {
  service: IService['_id'];
  pricing: {
    date: string;
    type: string;
    price: number;
    startTime: string;
    package: {
      packageId: IService['pricing']['package'][0]['_id'];
      title: IService['pricing']['package'][0]['title'];
      image: IService['pricing']['package'][0]['image'];
      price: IService['pricing']['package'][0]['price'];
    };
  };
  bookingFor: IBooking['bookingFor'];
  typeOfEvent: IBooking['typeOfEvent'];
  additionalRequirements: IBooking['additionalRequirements'];
  type: string;
}

export interface ICreateProductBooking {
  service: IService['_id'];
  pricing: {
    date: string;
    startTime: string;
    deliveryAddress: string;
    type: string;
    price: number;
    product: {
      minGuest: IService['pricing']['product']['minGuest'];
      minPrice: IService['pricing']['product']['minPrice'];
      totalGuest: number;
      items: {
        itemId: IService['pricing']['product']['categories'][0]['items'][0]['_id'];
        categoryId: IService['pricing']['product']['categories'][0]['_id'];
        categoryTitle: IService['pricing']['product']['categories'][0]['title'];
        title: IService['pricing']['product']['categories'][0]['items'][0]['title'];
        image: IService['pricing']['product']['categories'][0]['items'][0]['image'];
        price: IService['pricing']['product']['categories'][0]['items'][0]['price'];
      }[];
    };
  };
  bookingFor: IBooking['bookingFor'];
  typeOfEvent: IBooking['typeOfEvent'];
  additionalRequirements: IBooking['additionalRequirements'];
  type: string;
}

export interface IProductBookingForm {
  date: string;
  guestNo: number;
  startTime: string;
  deliveryAddress: string;
  additionalRequirements: string;
  price: number;
}
