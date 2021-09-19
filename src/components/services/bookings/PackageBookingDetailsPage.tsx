import React from 'react';
import { tokenConfig } from '@/utils/index';
import { Button } from '@mui/material';
import moment from 'moment';
import Image from 'next/image';
import { ayoojonApi, s3FileUrl } from '@/config/index';
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import { customToast } from '@/components/shared/Toaster';
import { IBooking, ICreatePackageBooking } from '@/types/booking';
import { IService } from '@/types/service';
import { imgLoader } from '@/utils/next';
import useHeader from '@/components/shared/hooks/useHeader';
import { useRouter } from 'next/router';

interface Props {
  serviceInfo: Pick<IService, '_id' | 'name' | 'address' | 'type'>;
  packageInfo: IService['pricing']['package'][0];
  bookingDate: moment.Moment;
  bookingTime: string;
  bookingFor: IBooking['bookingFor'];
  typeOfEventName: IBooking['typeOfEvent'];
  additionalRequirements: IBooking['additionalRequirements'];
  setShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
  //   createBooking: (data: ICreateBooking) => Promise<any>;
}

const createBookings = async (data: ICreatePackageBooking, headers) => {
  const response = await ayoojonApi.post(`bookings`, { ...data }, headers);
  return response;
};

export const PackageBookingDetailsPage: React.FC<Props> = ({
  serviceInfo,
  packageInfo,
  bookingDate,
  bookingTime,
  bookingFor,
  typeOfEventName,
  additionalRequirements,
  setShowDetails,
  //   createBooking,
}) => {
  const router = useRouter();
  const headers = useHeader();

  const mutation = useMutation((data: ICreatePackageBooking) => createBookings(data, headers), {
    onSuccess: () => {
      customToast('Booking created', 'success');
      router.push('/user/bookings');
    },
    onError: () => {
      customToast('Booking conflict occur', 'danger');
    },
  });

  const handleSubmit = async () => {
    const values: ICreatePackageBooking = {
      service: serviceInfo._id,
      pricing: {
        date: bookingDate.format('DD-MM-YYYY'),
        startTime: bookingTime,
        type: 'package',
        price: packageInfo.price.amount,
        package: {
          packageId: packageInfo._id,
          title: packageInfo.title,
          image: packageInfo.image,
          price: packageInfo.price,
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
                </div>
                <h6 className="mx-2 mb-2 font-bold text-primary cursor-pointer" onClick={() => setShowDetails(false)}>
                  Change
                </h6>
              </div>
            </div>
            <div className="my-3">
              <h6 className="font-medium">Package Name</h6>
              <div className="flex">
                <p className="mr-4">{packageInfo.title}</p>
                <h6 className="font-bold text-primary cursor-pointer" onClick={() => setShowDetails(false)}>
                  Change
                </h6>
              </div>
            </div>
            <div className="my-3">
              <h6 className="font-medium">Package Description</h6>
              {packageInfo.description ? (
                <div dangerouslySetInnerHTML={createMarkup(packageInfo.description)} />
              ) : (
                'N/A'
              )}
            </div>
            <div className="my-3">
              <h6 className="font-medium">Package Image</h6>
              <div className="flex flex-wrap -mx-2 mt-2">
                <div className="h-32 w-48 mx-2 mb-4 overflow-hidden rounded-md">
                  <Image
                    loader={imgLoader(s3FileUrl)}
                    className="inline-block w-full h-full object-cover"
                    src={packageInfo.image}
                    height={1900}
                    width={600}
                    layout="responsive"
                    alt="s3FileUrl views"
                  />
                </div>
              </div>
            </div>
            <div className="my-3">
              <h6 className="font-medium">Address</h6>
              <p>{serviceInfo.address}</p>
            </div>
            {/* <div className="my-3">
                <h6 className="font-medium">Event Type</h6>
                <p>
                  {bookingFor === 'personal'
                    ? typeOfEvent['personal'].filter((e) => e.value === typeOfEventName)[0].name
                    : typeOfEvent['business'].filter((e) => e.value === typeOfEventName)[0].name}
                </p>
              </div> */}
          </div>

          <div className="py-2 border-b border-gray-300 sm:border-0">
            <div className="my-3">
              <h6 className="font-medium">Additional Requirements</h6>
              <p>{additionalRequirements.length ? additionalRequirements : 'None'}</p>
            </div>
          </div>
        </div>
        <div className="lg:w-xs my-5">
          <h6 className="font-bold text-xl text-primary">Pricing</h6>
          <div className="flex justify-between my-2 font-medium text-primary">
            <h6>Total</h6>
            <p>{packageInfo.price.amount} BDT</p>
          </div>
          <div className="mt-8 mb-6">
            <Button fullWidth variant="contained" color="primary" onClick={handleSubmit}>
              <span className="font-sans font-semibold">Request For Booking</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageBookingDetailsPage;
