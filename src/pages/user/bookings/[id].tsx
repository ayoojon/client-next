import { IBookingNewDetails } from '@/types/booking';
import { ayoojonApi, s3FileUrl } from '../../../config';
import { tokenConfig, time24To12, isCompleted } from '../../../utils';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import moment from 'moment';
import Icon from '../../../components/shared/icons';
import Image from 'next/image';
import { imgLoader } from '@/utils/next';
import { BookingActivities } from '@/components/user/bookings/Activities';
import SEO from '@/components/shared/SEO';

const fetchSingleBookings = async (bookingId: any) => {
  const headers = await tokenConfig('WITH-AUTH');
  const response = await ayoojonApi.get(`bookings/${bookingId}`, headers);
  return response.data.booking;
};

const BookingInfo = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useQuery<IBookingNewDetails, Error>(
    ['client-single-bookings-search', `${id}`],
    () => fetchSingleBookings(id as string),
    {
      refetchOnWindowFocus: false,
      enabled: !!id,
      retry: 1,
    },
  );
  return (
    <div className="container mx-auto">
      <SEO siteTitle={'Booking - '} />
      <h6 className="font-bold text-xl mt-3">Booking Details</h6>

      {data && (
        <div className="lg:flex">
          <div className="lg:w-7/12 lg:pr-10 lg:border-r">
            <div className="py-2 border-b border-gray-300 last:border-0">
              <div className="my-3">
                <h6 className="font-medium">Booking status</h6>
                <div className="overflow-auto">
                  <div className="step-indicator mt-3">
                    <div className={`step complete`}>
                      <div className="bullet">
                        <Icon name="alarm-clock" className="h-6" fill="#ffffff" />
                      </div>
                      <p className="step-text">Pending Request</p>
                    </div>
                    {data.status === 'rejected' ? (
                      <div className="step incomplete">
                        <div className="bullet">
                          <Icon name="thumb-up" className="h-6" fill="#ffffff" />
                        </div>
                        <p className="step-text">Rejected</p>
                      </div>
                    ) : (
                      <>
                        <div className={`step ${isCompleted(data.status, 'reserved') ? 'complete' : ''}`}>
                          <div className="bullet">
                            <Icon
                              name="thumb-up"
                              className="h-6"
                              fill={`${isCompleted(data.status, 'reserved') ? '#ffffff' : '#929090'}`}
                            />
                          </div>
                          <p className="step-text">Accepted</p>
                        </div>
                        <div className={`step ${isCompleted(data.status, 'paid') ? 'complete' : ''}`}>
                          <div className="bullet">
                            <Icon
                              name="payment"
                              className="h-6"
                              fill={`${isCompleted(data.status, 'paid') ? '#ffffff' : '#929090'}`}
                            />
                          </div>
                          <p className="step-text">Pending Payment</p>
                        </div>
                        <div className={`step ${isCompleted(data.status, 'paid') ? 'complete' : ''}`}>
                          <div className="bullet">
                            <Icon
                              name="assignment-done"
                              className="h-6"
                              fill={`${isCompleted(data.status, 'paid') ? '#ffffff' : '#929090'}`}
                            />
                          </div>
                          <p className="step-text">Booked</p>
                        </div>
                        <div className={`step ${isCompleted(data.status, 'completed') ? 'complete' : ''}`}>
                          <div className="bullet">
                            <Icon
                              name="done-all"
                              className="h-6"
                              fill={`${isCompleted(data.status, 'completed') ? '#ffffff' : '#929090'}`}
                            />
                          </div>
                          <p className="step-text">Completed</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="my-3">
                <h6 className="font-medium">Type Of Event</h6>
                <p>{data.typeOfEvent}</p>
              </div>
              <div className="my-3">
                <h6 className="font-medium">Type</h6>
                <p>{data.type}</p>
              </div>
              {data.status === 'reserved' && (
                <div className="my-3">
                  <h6 className="font-medium">Pay</h6>

                  <button
                    className=" mt-2 font-medium capitalize text-white bg-primary rounded-md py-2 px-5"
                    // onClick={handleOpen}
                  >
                    Pay
                  </button>
                  {/* <PaymentModal isVisible={isVisible} setVisible={handleClose} data={data.service.paymentMethod} /> */}
                </div>
              )}
            </div>

            <div className="py-2 border-b border-gray-300 last:border-0">
              <div className="my-3">
                <h6 className="font-bold text-lg mt-3">Service Information</h6>
                <div className="ml-2 mt-2">
                  <h6 className="font-medium"> Name</h6>
                  <p>{data.service.name}</p>
                  <h6 className="font-medium"> Email</h6>
                  <p>{data.service.email}</p>
                  <h6 className="font-medium"> Contact NO</h6>
                  <p>{data.service.contactNo}</p>
                </div>
              </div>
            </div>

            <div className="py-2 border-b border-gray-300 last:border-0">
              <div className="my-3">
                <h6 className="font-medium">Booking Date</h6>
                <div className="flex flex-wrap -mx-2 mt-2">
                  <div className="flex flex-col items-center justify-center py-1 px-4 bg-primary text-white mx-2 mb-2">
                    <small className="font-semibold leading-none">{moment(data.pricing.date).format('MMM')}</small>
                    <p className="font-semibold">{moment(data.pricing.date).format('D')}</p>
                  </div>
                  <div className="mx-2 mb-2">
                    <p>{moment(data.pricing.date).format('Do MMMM, YYYY')}</p>
                    <p>
                      {time24To12(data.pricing.startTime)}
                      {' - '}
                      {data.pricing.endTime && time24To12(data.pricing.endTime)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-2 border-b border-gray-300 last:border-0">
              <div className="flex flex-wrap">
                {data.pricing.type === 'location' && (
                  <>
                    <div className="py-3">
                      <h6 className="font-bold text-lg mt-3">Space Information</h6>
                      <div className="ml-2 mt-2">
                        <h6 className="font-medium"> Name</h6>
                        <p>{data.pricing.location?.title}</p>
                        <h6 className="font-medium"> Capacity</h6>
                        <p>{data.pricing.location?.capacity}</p>
                        <h6 className="font-medium"> Space Type</h6>
                        <p>{data.pricing.location?.type}</p>
                      </div>
                    </div>
                  </>
                )}
                {data.pricing.type === 'product' && (
                  <div className="py-2 border-b border-gray-300 last:border-0">
                    <>
                      <div className="py-3">
                        <h6 className="font-bold text-lg mt-3">Product Information</h6>
                        <div className=" ml-2 mt-2">
                          {data.pricing.product?.items.map((product, index) => {
                            return (
                              <div key={index}>
                                <div className="p-2">
                                  <h6 className="font-semibold text-xl">{product.categoryTitle}</h6>
                                </div>
                                <div className="w-56 cursor-pointer rounded-b-md mx-2 border mb-4 transition duration-300 ease-in-out hover:shadow-xl relative">
                                  <div className="h-40 w-full overflow-hidden rounded-md">
                                    {/* <img
                                      className="inline-block w-full h-full object-cover"
                                      src={s3FileUrl + product.image}
                                      alt="location"
                                    /> */}

                                    <Image
                                      loader={imgLoader(s3FileUrl)}
                                      className="inline-block w-full h-full object-cover"
                                      src={product.image}
                                      alt="location"
                                      width="560"
                                      height="400"
                                    />
                                  </div>
                                  <div className="p-2">
                                    {/* <h6 className="font-semibold text-xl pb-2">{product.title}</h6> */}
                                  </div>
                                  <div className="bg-yellow-400 text-xs uppercase font-bold rounded-full p-1 absolute top-0 right-0 mt-1 mr-1">
                                    <span>
                                      {product.price.currency} {product.price.amount}{' '}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  </div>
                )}
                {data.pricing.type === 'package' && (
                  <div className="py-2 border-b border-gray-300 last:border-0">
                    <>
                      <h6 className="font-bold text-lg mb-4">package</h6>
                      <div className="h-40 flex flex-col justify-between w-64  p-4  mb-2 bg-white border-2 border-gray-200 rounded-xl	 lg:mx-4 mx-2">
                        <div className="flex-shrink-0">
                          <div className="flex justify-between mb-5">
                            <div className=" flex flex-col">
                              <span className="font-normal text-base text-primary uppercase">
                                {data.pricing.package?.price.amount} {data.pricing.package?.price.currency}
                              </span>
                              <p className="font-medium text-primary">{data.pricing.package?.title}</p>
                            </div>
                            <div className="flex-shrink-0">
                              {/* <img
                                className="w-16 h-16 rounded-full mx-auto"
                                src={s3FileUrl + data.pricing.package?.image}
                                alt=""
                              /> */}

                              <Image
                                loader={imgLoader(s3FileUrl)}
                                className="inline-block w-full h-full object-cover"
                                src={data.pricing.package?.image}
                                alt="location"
                                width="160"
                                height="160"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  </div>
                )}
              </div>
            </div>

            <div className="py-2 border-b border-gray-300 sm:border-0">
              <div className="my-3">
                <h6 className="font-medium">Additional Requirements</h6>
                <p>{data.additionalRequirements ? data.additionalRequirements : 'none'}</p>
              </div>
            </div>
          </div>
          <div className="my-5 lg:w-5/12 lg:pl-10">
            <BookingActivities booking={data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingInfo;
