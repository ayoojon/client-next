import React from 'react';
import { time24To12, tokenConfig } from '@/utils/index';
import { Button } from '@mui/material';
import moment from 'moment';
import { customToast } from '@/components/shared/Toaster';
import { useHistory } from 'react-router-dom';
import { ayoojonApi, s3FileUrl } from '@/config/index';
import { useMutation } from 'react-query';
import { IBooking, ICreateLocationBooking } from '@/types/booking';
import { IService } from '@/types/service';
import Image from 'next/image';
import { imgLoader } from '@/utils/next';
import { useRouter } from 'next/router';
import useHeader from '@/components/shared/hooks/useHeader';

interface Props {
  serviceInfo: Pick<IService, '_id' | 'name' | 'address' | 'type'>;
  spaceInfo: Pick<
    IService['pricing']['location'][0],
    '_id' | 'title' | 'description' | 'photos' | 'capacity' | 'size' | 'type'
  >;
  bookingDate: moment.Moment;
  pricingInfo: IService['pricing']['location'][0]['sessions'][0];
  bookingFor: IBooking['bookingFor'];
  typeOfEventName: IBooking['typeOfEvent'];
  additionalRequirements: IBooking['additionalRequirements'];
  setShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

const createBookings = async (data: ICreateLocationBooking, headers) => {
  console.log(headers);
  const response = await ayoojonApi.post(`bookings`, { ...data }, headers);
  return response;
};

export const LocationBookingDetailsPage: React.FC<Props> = ({
  serviceInfo,
  spaceInfo,
  bookingDate,
  pricingInfo,
  bookingFor,
  typeOfEventName,
  additionalRequirements,
  setShowDetails,
}) => {
  const router = useRouter();
  const headers = useHeader();

  const mutation = useMutation((data: ICreateLocationBooking) => createBookings(data, headers), {
    onSuccess: () => {
      customToast('Booking created', 'success');
      router.push('/user/bookings');
    },
    onError: () => {
      customToast('Booking conflict occur', 'danger');
    },
  });

  const handleSubmit = async () => {
    const values: ICreateLocationBooking = {
      service: serviceInfo._id,
      pricing: {
        date: bookingDate.format('DD-MM-YYYY'),
        type: 'location',
        price: pricingInfo.price.amount,
        startTime: pricingInfo.startTime,
        endTime: pricingInfo.endTime,
        location: {
          locationId: spaceInfo._id,
          type: spaceInfo.type,
          title: spaceInfo.title,
          capacity: spaceInfo.capacity,
          size: spaceInfo.size,
          photos: spaceInfo.photos,
          session: {
            sessionId: pricingInfo._id,
            startTime: pricingInfo.startTime,
            endTime: pricingInfo.endTime,
            price: pricingInfo.price,
          },
        },
      },
      bookingFor,
      typeOfEvent: typeOfEventName,
      additionalRequirements,
      type: 'normal',
    };

    mutation.mutateAsync(values);
  };

  const createMarkup = (data: string) => {
    return {
      __html: data,
    };
  };

  return (
    <>
      <div className="container px-4 lg:px-0 mx-auto">
        <h6 className="font-bold text-xl mb-2">Booking Details</h6>
        <div className="lg:flex">
          <div className="lg:flex-1 lg:mr-10">
            <div className="py-2 border-b border-gray-300 last:border-0">
              <div className="my-3">
                <h6 className="font-medium">Booking Date</h6>
                <div className="flex flex-wrap -mx-2 mt-2">
                  <div className="flex flex-col items-center justify-center py-1 px-4 bg-primary text-white mx-2 mb-2">
                    <small className="font-semibold leading-none">{bookingDate.format('MMM')}</small>
                    <p className="font-semibold">{bookingDate.format('D')}</p>
                  </div>
                  <div className="mx-2 mb-2">
                    <p>{bookingDate.format('Do MMMM, YYYY')}</p>
                    <p>
                      {time24To12(pricingInfo.startTime)}
                      {' - '}
                      {time24To12(pricingInfo.endTime)}
                    </p>
                  </div>
                  <h6 className="mx-2 mb-2 font-bold text-primary cursor-pointer" onClick={() => setShowDetails(false)}>
                    Change
                  </h6>
                </div>
              </div>
            </div>
            <div className="py-2">
              <div className="my-3">
                <h6 className="font-medium">Venue Name</h6>
                <p>{serviceInfo.name}</p>
              </div>
              <div className="my-3">
                <h6 className="font-medium">Address</h6>
                <p>{serviceInfo.address}</p>
              </div>
              <div className="my-3">
                <h6 className="font-medium">Space Name</h6>
                <div className="flex">
                  <p className="mr-4">{spaceInfo.title}</p>
                  <h6 className="font-bold text-primary cursor-pointer" onClick={() => setShowDetails(false)}>
                    Change
                  </h6>
                </div>
              </div>
              <div className="my-3">
                <h6 className="font-medium">Description</h6>
                {spaceInfo.description ? <div dangerouslySetInnerHTML={createMarkup(spaceInfo.description)} /> : 'N/A'}
              </div>
            </div>
            <div className="my-3">
              <h6 className="font-medium">Space Images</h6>
              <div className="flex flex-wrap -mx-2 mt-2">
                {spaceInfo.photos.map((image, index) => (
                  <div key={index} className="h-32 w-48 mx-2 mb-4 overflow-hidden rounded-md">
                    <Image
                      className="inline-block w-full h-full object-cover"
                      loader={imgLoader(s3FileUrl)}
                      height="100%"
                      width="100%"
                      layout="responsive"
                      src={image}
                      alt="s3FileUrl views"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="my-3">
              <h6 className="font-medium">Additional Requirements</h6>
              <p>{additionalRequirements.length ? additionalRequirements : 'None'}</p>
            </div>
          </div>
          <div className="lg:w-xs my-5">
            <h6 className="font-bold text-xl text-primary">Pricing</h6>
            <div className="flex justify-between my-2 font-medium text-primary">
              <h6>Total</h6>
              <p>{pricingInfo.price.amount} BDT</p>
            </div>
            <div className="mt-8 mb-6">
              <Button fullWidth variant="contained" color="primary" onClick={handleSubmit}>
                <span className="font-sans font-semibold">Request For Booking</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};