import { IUser } from './user';

export type serviceTypes =
  | 'venue'
  | 'event-management'
  | 'photographer'
  | 'caterings'
  | 'flowers'
  | 'music'
  | 'invitation-card'
  | 'lightening'
  | 'videographer'
  | 'honeymoon';

export interface IService {
  _id: string;
  url: string;
  name: string;
  address: string;
  email: string;
  weekDays: any;
  contactNo: string;
  ownerName: string;
  ownerEmail: string;
  type: serviceTypes;
  logo: File | string | undefined;
  coverImage: string;
  advanceBookingTime: 'any' | '1m' | '3m';
  maxBookingPeriod: number;
  avgRating: number;
  placeDescription: string;
  termsConditions: string;
  location: {
    country: string;
    address: string;
    apartmentSuite: string;
    city: string;
    state: string;
    zipCode: number;
  };
  amenities: {
    title: string;
    options: string[];
  };
  albums: {
    _id: string;
    title: string;
    description: string;
    photos: string[];
  }[];
  paymentMethod: {
    bank?: {
      name: string;
      cardNumber: string;
      expireDate: string;
      CVC: number;
    };
    bKash?: {
      number: string;
    };
  };
  pricing: {
    type: 'location' | 'package' | 'product';
    location: {
      _id: string;
      type: 'single' | 'entire';
      title: string;
      description: string;
      capacity: number;
      size: {
        amount: number;
        unit: string;
      };
      photos: string[];
      sessions: {
        _id: string;
        startTime: string;
        endTime: string;
        price: {
          amount: number;
          currency: 'bdt';
        };
      }[];
    }[];
    package: {
      _id: string;
      title: string;
      description: string;
      image: string;
      price: {
        amount: number;
        currency: 'bdt';
      };
    }[];
    product: {
      minGuest: number;
      minPrice: {
        amount: number;
        currency: 'bdt';
      };
      categories: {
        _id: string;
        title: string;
        items: {
          _id: string;
          title: string;
          description: string;
          image: string;
          price: {
            amount: number;
            currency: 'bdt';
          };
        }[];
      }[];
    };
  };
  seo: {
    description: string;
    keyword: {
      title: string;
    }[];
  };
  affiliated: IService[];
  isEmailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IReviewService {
  booking: {
    account: Pick<IUser, '_id' | 'name' | 'avatar'>;
  };
  rating: Number;
  text?: string;
  createdAt: string;
  updatedAt: string;
}
