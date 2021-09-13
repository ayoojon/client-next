import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import { CalenderInfoPanel, NavPrevIcon, NavNextIcon, getDaySize } from '@/components/shared/ReactDates';
import { useBreakpointFromContext } from '@/components/shared/BreakpointHook/Context';
import { IOnProgressBooking } from '../../types/booking';
import { customToast } from '@/components/shared/Toaster';

import { IService } from '@/types/service';
import { weekCapitalize } from '../../utils';
import { useAppSelector } from '../shared/hooks/redux';
import { useRouter } from 'next/router';

const BookingProductBottomBar = ({ service }: { service: IService }) => {
  const router = useRouter();
  const { isLogin } = useAppSelector((state) => {
    return { isLogin: !!state.userReducer.user };
  });
  const matchPoints = useBreakpointFromContext();

  const [isBookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<moment.Moment | null>(null);
  const [isFocused, setFocused] = useState<boolean | null>(false);
  // const [blockedDates] = useState([moment()]);

  const handleProceedToBooking = () => {
    if (selectedDate) {
      const values: IOnProgressBooking = {
        date: selectedDate.format('DD-MM-YYYY'),
      };
      if (!isLogin) {
        customToast('Please login first', 'danger');
        router.push(
          `/signin?redirectUrl=/services/${service.url}/booking?date=${values.date}&categoryId=${values.spaceId}&itemId=${values.pricingId}`,
        );
      } else {
        router.push(`/services/${service.url}/booking?date=${values.date}`);
      }
    }
  };

  const onDateChange = (date: moment.Moment | null) => {
    setSelectedDate(date);
  };

  const handleCheckAvailability = () => {
    setBookingModalOpen(!isBookingModalOpen);
    setFocused(!isFocused);
  };

  return (
    <div className="sticky bottom-0 w-full bg-white border-t">
      <div className="max-w-6xl mx-auto px-6 flex justify-end items-center px-3 sm:px-6 py-4 relative">
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
                      // isDayBlocked={(day) => blockedDates.some((blockedDay) => isSameDay(day, blockedDay))}
                      isDayBlocked={(day) =>
                        weekCapitalize(service.weekDays).includes(day.format('ddd')) ? true : false
                      }
                      navPrev={<NavPrevIcon />}
                      navNext={<NavNextIcon />}
                      renderCalendarInfo={() => <CalenderInfoPanel />}
                      readOnly={true}
                      displayFormat="DD-MM-YYYY"
                    />
                  </div>
                </div>
              </div>
              {selectedDate && (
                <div className="p-4">
                  <Button fullWidth variant="contained" color="primary" onClick={handleProceedToBooking}>
                    <span className="font-sans font-semibold">Proceed To Booking</span>
                  </Button>
                </div>
              )}
              {/* for mobile device */}
              <div className="flex justify-between items-center px-3 sm:px-6 py-2 border-t shadow-top sm:hidden">
                <Button variant="contained" color="primary" onClick={handleCheckAvailability}>
                  <span className="font-sans font-semibold">Check Availability</span>
                </Button>
              </div>
            </div>
          </>
        )}
        <div>
          <Button variant="contained" color="primary" onClick={handleCheckAvailability}>
            <span className="font-sans font-semibold">Check Availability</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingProductBottomBar;
