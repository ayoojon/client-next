import { Button } from '@material-ui/core';
import moment from 'moment';
import React from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import { customToast } from '@/components/shared/Toaster';
import { ayoojonApi, s3FileUrl } from '@/config/index';
import { IBooking, ICreateProductBooking } from '@/types/booking';
import { tokenConfig } from '@/utils/index';
import { IService } from '@/types/service';
import { imgLoader } from '@/utils/next';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface IData {
  serviceInfo: Pick<IService, '_id' | 'name' | 'address' | 'type'>;
  selectedItems: ICreateProductBooking['pricing']['product']['items'];
  deliveryAddress: string;
  bookingDate: moment.Moment;
  startTime: string;
  bookingFor: IBooking['bookingFor'];
  typeOfEventName: IBooking['typeOfEvent'];
  additionalRequirements: IBooking['additionalRequirements'];
  setShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
  guestNo: number;
  productInfo: {
    minPrice: IService['pricing']['product']['minPrice'];
    minGuest: IService['pricing']['product']['minGuest'];
  };
}

const createBookings = async (data: ICreateProductBooking) => {
  const headers = await tokenConfig('WITH-AUTH');
  const response = await ayoojonApi.post(`bookings`, { ...data }, headers);
  return response;
};

export default function ProductBookingDetailsPage({
  serviceInfo,
  selectedItems,
  bookingDate,
  additionalRequirements,
  setShowDetails,
  startTime,
  deliveryAddress,
  guestNo,
  bookingFor,
  typeOfEventName,
  productInfo,
}: //   createBooking,
IData) {
  const router = useRouter();

  const mutation = useMutation(createBookings, {
    onSuccess: () => {
      customToast('Booking created', 'success');
      router.push('/user/bookings');
    },
    onError: () => {
      customToast('Booking conflict occur', 'danger');
    },
  });

  const totalPrice = selectedItems.map((item) => item.price.amount).reduce((a, b) => a + b, 0) * guestNo;

  const handleSubmit = async () => {
    const values: ICreateProductBooking = {
      service: serviceInfo._id,
      pricing: {
        date: bookingDate.format('DD-MM-YYYY'),
        type: 'product',
        price: totalPrice,
        startTime,
        deliveryAddress,
        product: {
          minGuest: productInfo.minGuest,
          minPrice: productInfo.minPrice,
          totalGuest: guestNo,
          items: selectedItems,
        },
      },
      bookingFor,
      typeOfEvent: typeOfEventName,
      additionalRequirements,
      type: 'normal',
    };

    await mutation.mutateAsync(values);
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
              <h6 className="font-medium">Product Name</h6>
              <div className="flex">
                <p className="mr-4">{serviceInfo.name}</p>
                <h6 className="font-bold text-primary cursor-pointer" onClick={() => setShowDetails(false)}>
                  Change
                </h6>
              </div>
            </div>
            <div className="my-3">
              <h6 className="font-medium">Selected Items</h6>

              <div className="mt-2">
                {selectedItems.map((item) => (
                  <div key={item.itemId} className="mb-2 flex space-x-2">
                    <Image
                      loader={imgLoader(s3FileUrl)}
                      src={item.image}
                      alt="product"
                      height="100%"
                      width="100%"
                      layout="responsive"
                      className="h-20 w-20 object-cover border"
                    />
                    <div>
                      <p>{item.title}</p>
                      <p>{item.price.amount} BDT</p>
                    </div>
                  </div>
                ))}
              </div>
              <h6 className="font-medium">
                Per Person Total: {selectedItems.map((item) => item.price.amount).reduce((a, b) => a + b, 0)} BDT
              </h6>
              <h6 className="font-medium">Total Guest: {guestNo}</h6>
            </div>
            <div className="my-3">
              <h6 className="font-medium">Delivery Address</h6>
              <p>{deliveryAddress}</p>
            </div>
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
            <p>{totalPrice} BDT</p>
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
}
