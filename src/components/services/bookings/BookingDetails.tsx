import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { getSingleBookingAction, getBookingActivitiesAction } from '../../stores/booking/Actions';
import { IReducer } from '../../stores/IndexReducer';
import { typeOfEvent, time24To12, taxPrice, isCompleted } from '../../utils';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import Icon from '../../components/icons';
import { Breadcrumbs, Typography } from '@material-ui/core';
import { BreadcrumbsLink } from '../../components/BreadcrumbsLink';
import { BookingActivities } from './Activities/index2';
import { customToast } from '../../components/Toastify';
import { Helmet } from 'react-helmet';
import { APP_TITLE } from '../../config';

interface ParamTypes {
  bookingId: string;
  serviceId?: string;
}

interface Props {
  getBookingDetails: (bookingId: string) => Promise<any>;
  getBookingActivities: (bookingId: string) => Promise<any>;
}

const BookingDetailsComponent: React.FC<Props> = ({ getBookingDetails, getBookingActivities }) => {
  const params = useParams<ParamTypes>();
  const history = useHistory();

  const currentBooking = useSelector((state: IReducer) => state.bookingReducer.currentBooking);

  useEffect(() => {
    async function load(bookingId: string) {
      const res = await getBookingDetails(bookingId);
      if (res.status === 200) {
        await getBookingActivities(bookingId);
      } else if (res.status === 401) {
        customToast("You're not authorized for the booking.", 'danger');
        history.push(`${params.serviceId ? `/service-admin/${params.serviceId}/bookings` : '/user/bookings'}`);
      }
    }
    if (params.bookingId && getBookingDetails && getBookingActivities) {
      load(params.bookingId);
    }
  }, [params.bookingId, params.serviceId, history, getBookingDetails, getBookingActivities]);

  const handleProceedToPayment = () => currentBooking && history.push(`/user/bookings/${currentBooking._id}/payment`);

  return (
    <>
      <Helmet>
        <title>{`Booking Details | ${APP_TITLE}`}</title>
      </Helmet>
      <div className="container mx-auto">
        <Breadcrumbs aria-label="breadcrumb">
          <BreadcrumbsLink
            color="inherit"
            to={`${params.serviceId ? `/service-admin/${params.serviceId}/bookings` : '/user/bookings'}`}
          >
            Bookings
          </BreadcrumbsLink>
          <Typography color="textPrimary">Details</Typography>
        </Breadcrumbs>
        <h6 className="font-bold text-xl mt-3">Booking Details</h6>
        {currentBooking && (
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
                      {currentBooking.status === 'rejected' ? (
                        <div className="step incomplete">
                          <div className="bullet">
                            <Icon name="thumb-up" className="h-6" fill="#ffffff" />
                          </div>
                          <p className="step-text">Rejected</p>
                        </div>
                      ) : (
                        <>
                          <div className={`step ${isCompleted(currentBooking.status, 'reserved') ? 'complete' : ''}`}>
                            <div className="bullet">
                              <Icon
                                name="thumb-up"
                                className="h-6"
                                fill={`${isCompleted(currentBooking.status, 'reserved') ? '#ffffff' : '#929090'}`}
                              />
                            </div>
                            <p className="step-text">Accepted</p>
                          </div>
                          <div className={`step ${isCompleted(currentBooking.status, 'paid') ? 'complete' : ''}`}>
                            <div className="bullet">
                              <Icon
                                name="payment"
                                className="h-6"
                                fill={`${isCompleted(currentBooking.status, 'paid') ? '#ffffff' : '#929090'}`}
                              />
                            </div>
                            <p className="step-text">Pending Payment</p>
                          </div>
                          <div className={`step ${isCompleted(currentBooking.status, 'paid') ? 'complete' : ''}`}>
                            <div className="bullet">
                              <Icon
                                name="assignment-done"
                                className="h-6"
                                fill={`${isCompleted(currentBooking.status, 'paid') ? '#ffffff' : '#929090'}`}
                              />
                            </div>
                            <p className="step-text">Booked</p>
                          </div>
                          <div className={`step ${isCompleted(currentBooking.status, 'completed') ? 'complete' : ''}`}>
                            <div className="bullet">
                              <Icon
                                name="done-all"
                                className="h-6"
                                fill={`${isCompleted(currentBooking.status, 'completed') ? '#ffffff' : '#929090'}`}
                              />
                            </div>
                            <p className="step-text">Completed</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-2 border-b border-gray-300 last:border-0">
                <div>
                  <h6 className="font-bold text-xl text-primary">Pricing</h6>
                  <div className="flex justify-between my-2">
                    <h6>Booking Fee</h6>
                    <p>{currentBooking.price - taxPrice.conventionHall} BDT</p>
                  </div>
                  <div className="flex justify-between my-2">
                    <h6>Tax</h6>
                    <p>{taxPrice.conventionHall} BDT</p>
                  </div>
                  <div className="flex justify-between my-2 font-medium text-primary">
                    <h6>Total</h6>
                    <p>{currentBooking.price} BDT</p>
                  </div>
                  {currentBooking.status === 'reserved' && !params.serviceId && (
                    <div className="mt-8 mb-6">
                      <Button fullWidth variant="contained" color="primary" onClick={handleProceedToPayment}>
                        <span className="font-sans font-semibold">Proceed To Payment</span>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
              <div className="py-2 border-b border-gray-300 last:border-0">
                <div className="my-3">
                  <h6 className="font-medium">Venue Name</h6>
                  <p>{currentBooking.service.name}</p>
                </div>
                <div className="my-3">
                  <h6 className="font-medium">Address</h6>
                  <p>{currentBooking.service.address}</p>
                </div>
                <div className="my-3">
                  <h6 className="font-medium">Event Type</h6>
                  <p>
                    {currentBooking.bookingFor && currentBooking.bookingFor === 'personal'
                      ? typeOfEvent['personal'].filter((e) => e.value === currentBooking.typeOfEvent)[0].name
                      : typeOfEvent['business'].filter((e) => e.value === currentBooking.typeOfEvent)[0].name}
                  </p>
                </div>
              </div>
              <div className="py-2 border-b border-gray-300 last:border-0">
                <div className="my-3">
                  <h6 className="font-medium">Space Name</h6>
                  <p>{currentBooking.conventionHallBooking?.space.name}</p>
                </div>
                <div className="my-3">
                  <h6 className="font-medium">Space Description</h6>
                  <p>{currentBooking.conventionHallBooking?.space.description}</p>
                </div>
                <div className="my-3">
                  <h6 className="font-medium">Space Images</h6>
                  <div className="flex flex-wrap -mx-2 mt-2">
                    {currentBooking.conventionHallBooking?.space.images.map((image, index) => (
                      <div key={index} className="h-32 w-48 mx-2 mb-4 overflow-hidden rounded-md">
                        <img className="inline-block w-full h-full object-cover" src={image.url} alt="space views" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="py-2 border-b border-gray-300 last:border-0">
                <div className="my-3">
                  <h6 className="font-medium">Booking Date</h6>
                  <div className="flex flex-wrap -mx-2 mt-2">
                    <div className="flex flex-col items-center justify-center py-1 px-4 bg-primary text-white mx-2 mb-2">
                      <small className="font-semibold leading-none">{moment(currentBooking.date).format('MMM')}</small>
                      <p className="font-semibold">{moment(currentBooking.date).format('D')}</p>
                    </div>
                    <div className="mx-2 mb-2">
                      <p>{moment(currentBooking.date).format('Do MMMM, YYYY')}</p>
                      <p>
                        {time24To12(currentBooking.from)}
                        {' - '}
                        {time24To12(currentBooking.to)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-2 border-b border-gray-300 sm:border-0">
                <div className="my-3">
                  <h6 className="font-medium">Additional Requirements</h6>
                  <p>{currentBooking.additionalRequirements ? currentBooking.additionalRequirements : 'none'}</p>
                </div>
              </div>
            </div>
            <div className="my-5 lg:w-5/12 lg:pl-10">
              <BookingActivities />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const BookingDetails = connect(null, {
  getBookingDetails: getSingleBookingAction,
  getBookingActivities: getBookingActivitiesAction,
})(BookingDetailsComponent);

export default BookingDetails;
