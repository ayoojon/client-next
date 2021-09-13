import Icon from '@/components/shared/icons';
import { IReview } from '@/types/review';

import React from 'react';
import Review from '../Review';

import { ActivityList } from './ActivityList';
import SendActivity from './SendActivity';

interface BookingActivitiesProps {
  booking: any;
}

interface reviewProps {
  review: Pick<IReview, '_id' | 'rating' | 'text' | 'createdAt'>;
}

const ReviewDetails: React.FC<reviewProps> = ({ review }) => {
  return (
    <div className=" my-3">
      <div className="flex items-center justify-center">
        <h6 className="font-semibold text-xl mr-2">Review :</h6>
        <div className="flex">
          <div>
            <Icon
              name="star"
              className={`h-8 fill-current mx-1 ${1 <= review.rating ? 'text-primary' : 'text-gray-400'}`}
            />
          </div>
          <div>
            <Icon
              name="star"
              className={`h-8 fill-current mx-1 ${2 <= review.rating ? 'text-primary' : 'text-gray-400'}`}
            />
          </div>
          <div>
            <Icon
              name="star"
              className={`h-8 fill-current mx-1 ${3 <= review.rating ? 'text-primary' : 'text-gray-400'}`}
            />
          </div>
          <div>
            <Icon
              name="star"
              className={`h-8 fill-current mx-1 ${4 <= review.rating ? 'text-primary' : 'text-gray-400'}`}
            />
          </div>
          <div>
            <Icon
              name="star"
              className={`h-8 fill-current mx-1 ${5 <= review.rating ? 'text-primary' : 'text-gray-400'}`}
            />
          </div>
        </div>
      </div>
      {review.text && <p className="text-2xl text-gray-500 italic text-center"> {review.text} </p>}
    </div>
  );
};

export const BookingActivities: React.FC<BookingActivitiesProps> = ({ booking }) => {
  return (
    <>
      {booking && (
        <div>
          <h6 className="font-bold text-xl text-primary">Activities</h6>
          {booking.status !== 'completed' && <ActivityList />}
          {booking.status === 'completed' && <ActivityList />}
          {booking.status === 'completed' && !booking.review && <Review data={booking} />}

          {booking.status && !['rejected', 'completed', 'canceled'].includes(booking.status) ? (
            <SendActivity />
          ) : (
            booking.review && typeof booking.review !== 'string' && <ReviewDetails review={booking.review} />
          )}
        </div>
      )}
    </>
  );
};
