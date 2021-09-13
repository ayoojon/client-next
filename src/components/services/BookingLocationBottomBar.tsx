import React, { useState } from 'react';

import { Button, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import { CalenderInfoPanel, NavPrevIcon, NavNextIcon, getDaySize } from '@/components/shared/ReactDates';
import { currencyFormat, truncateString, time24To12, weekCapitalize } from '../../utils';
import { useBreakpointFromContext } from '@/components/shared/BreakpointHook/Context';
import { IOnProgressBooking } from '../../types/booking';
import { customToast } from '@/components/shared/Toaster';
import Router from 'next/router';
import { IService } from '@/types/service';
import Icon from '../shared/icons';
import { useAppSelector } from '../shared/hooks/redux';

const calculateServicePrice = (service: IService) => {
  if (service) {
    if (service.type === 'venue') {
      if (service.pricing.location.length === 0) {
        return (
          <div className="flex items-center">
            <Icon name="star" className="h-3 fill-current text-primary" />
            <small className="ml-1 font-semibold text-customGray-550">{service.avgRating.toFixed(1)}</small>
          </div>
        );
      } else if (service.pricing.location.length === 1) {
        return (
          <div className="">
            {/* <div>
              <span className="font-bold text-primary text-lg">{`${currencyFormat(
                service.pricing.location[0].pricing[0].price,
              )} ${service.pricing.location[0].pricing[0].currency}`}</span>{' '}
              <span className="font-medium text-sm text-customGray-550">/ Day</span>
            </div> */}
            <div className="flex items-center">
              <Icon name="star" className="h-3 fill-current text-primary" />
              <span className="ml-1 font-medium text-sm">{service.avgRating.toFixed(1)}</span>
            </div>
          </div>
        );
      }

      let minValue: number = Infinity;
      let maxValue: number = -Infinity;
      const currency = service.pricing.location[0].sessions[0].price.currency;
      for (const location of service.pricing.location) {
        for (const session of location.sessions) {
          if (session.price.amount < minValue) minValue = session.price.amount;
          if (session.price.amount > maxValue) maxValue = session.price.amount;
        }
      }
      return (
        <div className="">
          <div>
            <span className="font-bold text-primary text-lg">{`${currencyFormat(minValue)} - ${currencyFormat(
              maxValue,
            )} ${currency}`}</span>{' '}
            <span className="font-medium text-sm text-customGray-550">/ Day</span>
          </div>
          <div className="flex items-center">
            <Icon name="star" className="h-3 fill-current text-primary" />
            <span className="ml-1 font-medium text-sm">{service.avgRating.toFixed(1)}</span>
          </div>
        </div>
      );
    }
  }
};

const BookingLocationBottomBar = ({ service }: { service: IService }) => {
  const { isLogin } = useAppSelector((state) => {
    return { isLogin: !!state.userReducer.user };
  });
  const matchPoints = useBreakpointFromContext();

  const [isBookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<moment.Moment | null>(null);
  const [isFocused, setFocused] = useState<boolean | null>(false);
  // const [blockedDates] = useState([moment()]);
  const [selectedSpace, setSelectedSpace] = useState<IService['pricing']['location'][0]>();
  const [selectedPricing, setSelectedPricing] = useState<IService['pricing']['location'][0]['sessions'][0]>();

  const handleProceedToBooking = () => {
    if (selectedDate && selectedSpace && selectedPricing) {
      const values: IOnProgressBooking = {
        date: selectedDate.format('DD-MM-YYYY'),
        spaceId: selectedSpace._id,
        pricingId: selectedPricing._id,
      };
      if (!isLogin) {
        customToast('Please login first', 'danger');
        Router.push(
          `/signin?redirectUrl=/services/${service.url}/booking?date=${values.date}&spaceId=${values.spaceId}&pricingId=${values.pricingId}`,
        );
      } else {
        Router.push(
          `/services/${service.url}/booking?date=${values.date}&locationId=${values.spaceId}&pricingId=${values.pricingId}`,
        );
      }
    }
  };

  const onDateChange = (date: moment.Moment | null) => {
    setSelectedDate(date);
    // TODO: Filter space with previous booking
    setSelectedSpace(undefined);
    setSelectedPricing(undefined);
  };

  const handleCheckAvailability = () => {
    setBookingModalOpen(!isBookingModalOpen);
    setFocused(!isFocused);
  };

  return (
    <div className="sticky bottom-0 w-full bg-white border-t">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center px-3 sm:px-6 py-4 relative">
        {isBookingModalOpen && (
          <>
            <button
              className="fixed inset-0 h-full w-full bg-black sm:bg-transparent opacity-50 cursor-default"
              // onClick={() => setBookingModalOpen(false)}
              tabIndex={-1}
            />
            <div
              className="absolute booking_modal-width sm:mb-16 bg-white border right-0 bottom-0 rounded-t-lg sm:rounded-b-lg shadow-xl z-10 flex flex-col"
              style={{ height: '75vh' }}
            >
              <div className="flex justify-end">
                <span
                  className="text-primary px-5 py-1 font-medium cursor-pointer"
                  onClick={() => setBookingModalOpen(false)}
                >
                  close
                </span>
              </div>
              <div className="overflow-auto px-4 flex-1">
                <div>
                  <div className="mb-4">
                    <h6 className="font-medium text-lg mb-2">CHECK-IN</h6>
                    <SingleDatePicker
                      id="single_booking_date"
                      date={selectedDate}
                      onDateChange={onDateChange}
                      focused={isFocused}
                      onFocusChange={({ focused }) => {
                        setFocused(focused);
                      }}
                      orientation="horizontal"
                      placeholder="Date"
                      showClearDate={true}
                      showDefaultInputIcon={true}
                      small={false}
                      hideKeyboardShortcutsPanel={false}
                      daySize={getDaySize(matchPoints)}
                      numberOfMonths={1}
                      isDayBlocked={(day) =>
                        weekCapitalize(service.weekDays).includes(day.format('ddd')) ? true : false
                      }
                      // isDayHighlighted={(day) => blockedDates.some((highlightedDay) => isSameDay(day, highlightedDay))}
                      navPrev={<NavPrevIcon />}
                      navNext={<NavNextIcon />}
                      renderCalendarInfo={() => <CalenderInfoPanel />}
                      readOnly={true}
                      displayFormat="DD-MM-YYYY"
                    />
                  </div>
                  {selectedDate && (
                    <>
                      <div className="mb-4">
                        <h6 className="font-medium text-lg">Location</h6>
                        <div className="flex flex-wrap -mx-2">
                          {service.pricing.location.map((place, index) => (
                            <div
                              key={index}
                              className={`transition duration-300 ease-in-out border border-customGray-450 py-2 px-4 hover:bg-primary hover:text-white m-2 cursor-pointer ${
                                selectedSpace && selectedSpace._id === place._id ? 'bg-primary text-white' : ''
                              }`}
                              onClick={() => setSelectedSpace(place)}
                            >
                              <h6 className="font-medium">{truncateString(place.title, 23)}</h6>
                            </div>
                          ))}
                        </div>
                      </div>
                      {selectedSpace && (
                        <div className="mb-4">
                          <h6 className="font-medium text-lg mb-2">Select Time</h6>
                          <RadioGroup
                            name="type"
                            value={selectedPricing ? selectedPricing._id : ''}
                            // onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            //
                            // }}
                          >
                            {selectedSpace &&
                              selectedSpace.sessions.map((session, index) => (
                                <FormControlLabel
                                  className="mb-2"
                                  key={index}
                                  value={session._id}
                                  control={<Radio color="primary" />}
                                  onClick={() => setSelectedPricing(session)}
                                  label={
                                    <div className="">
                                      <small>
                                        {time24To12(session.startTime)}
                                        {' - '}
                                        {time24To12(session.endTime)}
                                      </small>
                                      <h6 className="font-semibold text-primary">
                                        {session.price.amount} {session.price.currency.toUpperCase()}
                                      </h6>
                                    </div>
                                  }
                                />
                              ))}
                          </RadioGroup>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
              {selectedDate && selectedSpace && selectedPricing && (
                <div className="p-4">
                  <Button fullWidth variant="contained" color="primary" onClick={handleProceedToBooking}>
                    <span className="font-sans font-semibold">Proceed To Booking</span>
                  </Button>
                </div>
              )}
              {/* for mobile device */}
              <div className="flex justify-between items-center px-3 sm:px-6 py-2 border-t shadow-top sm:hidden">
                <div>{calculateServicePrice(service)}</div>
                <Button variant="contained" color="primary" onClick={handleCheckAvailability}>
                  <span className="font-sans font-semibold">Check Availability</span>
                </Button>
              </div>
            </div>
          </>
        )}
        <div>{calculateServicePrice(service)}</div>
        <div>
          <Button variant="contained" color="primary" onClick={handleCheckAvailability}>
            <span className="font-sans font-semibold">Check Availability</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingLocationBottomBar;
