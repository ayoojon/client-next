import Icon from '@/components/shared/icons';
import { IActivity } from '@/types/booking';
import moment from 'moment';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import Image from 'next/image';
import { imgLoader } from '@/utils/next';
import { ayoojonApi, s3FileUrl } from '../../../../config';
import { tokenConfig } from '../../../../utils';
import AyoojonBackdrop from '@/components/shared/Backdrop';

const getSystemIconName = (
  iconType: 'pending' | 'reserved' | 'rejected' | 'paid' | 'booked' | 'completed' | 'canceled',
) => {
  let iconName: 'alarm-clock' | 'thumb-up' | 'payment' | 'assignment-done' | 'done-all' = 'alarm-clock';
  switch (iconType) {
    case 'pending':
      iconName = 'alarm-clock';
      break;
    case 'reserved':
      iconName = 'thumb-up';
      break;
    case 'rejected':
      iconName = 'thumb-up';
      break;
    case 'paid':
      iconName = 'payment';
      break;
    case 'booked':
      iconName = 'assignment-done';
      break;
    case 'completed':
      iconName = 'done-all';
      break;
    default:
      iconName = 'alarm-clock';
      break;
  }
  return iconName;
};
interface ParamTypes {
  bookingId: string;
}
const fetchActivity = async (bookingId: any) => {
  const headers = await tokenConfig('WITH-AUTH');
  const response = await ayoojonApi.get(`activities/booking/${bookingId}`, headers);
  return response.data.activities;
};

export const ActivityList = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: activities, isLoading } = useQuery<IActivity[], Error>(
    ['user-booking-activityList', `${id}`],
    () => fetchActivity(id as string),
    {
      refetchOnWindowFocus: false,
      enabled: !!id,
      retry: 1,
    },
  );

  return (
    <div className="pr-2 overflow-auto" style={{ maxHeight: '60vh' }}>
      <AyoojonBackdrop open={isLoading} />
      {activities ? (
        activities.length > 0 ? (
          activities.map((activity) => (
            <div className="flex my-4" key={activity._id}>
              {activity.type === 'system' && activity.iconType ? (
                <div className="w-12 h-12 flex justify-center items-center rounded-full mr-3 bg-primary">
                  <Icon name={getSystemIconName(activity.iconType)} className="h-6" fill="#ffffff" />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-full mr-3 mt-8 overflow-hidden">
                  {/* <img
                    className="h-full w-full object-cover"
                    src={`${
                      activity.type === 'client'
                        ? activity.booking.account.avatar
                          ? s3FileUrl + activity.booking.account.avatar
                          : 'image'
                        : s3FileUrl + activity.booking.service.logo
                    }`}
                    alt="logo"
                  /> */}
                  <Image
                    loader={imgLoader(s3FileUrl)}
                    className="h-full w-full object-cover"
                    src={`${
                      activity.type === 'client'
                        ? activity.booking.account.avatar
                          ? activity.booking.account.avatar
                          : 'image'
                        : activity.booking.service.logo
                    }`}
                    alt="location"
                    width="120"
                    height="120"
                  />
                </div>
              )}
              <div className="flex-1">
                {activity.type !== 'system' && (
                  <h6 className="font-semibold pb-1">
                    {activity.type === 'client' ? activity.booking.account.name : activity.booking.service.name}
                  </h6>
                )}
                <p
                  className={`${
                    activity.type === 'system' ? 'bg-primary text-white' : 'bg-primaryLight'
                  } py-4 px-6 rounded-md`}
                >
                  {activity.text}
                </p>
                <div className="font-semibold flex justify-end">
                  <small>{moment(new Date(activity.createdAt)).format('hh:mm a | DD-MM-YYYY')}</small>
                </div>
              </div>
            </div>
          ))
        ) : (
          <small className="text-gray-600">No activities</small>
        )
      ) : (
        // <Loader />
        <div>
          <h1>No activity</h1>
        </div>
      )}
    </div>
  );
};
