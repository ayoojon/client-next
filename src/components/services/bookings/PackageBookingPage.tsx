import { OutlinedInput, Button } from '@mui/material';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { SingleDatePicker } from 'react-dates';
import { useHistory, useLocation } from 'react-router-dom';
import { getDaySize, NavPrevIcon, NavNextIcon, CalenderInfoPanel } from '@/components/shared/ReactDates';
import { ayoojonApi, s3FileUrl } from '@/config/index';
import { dateFormatRegex, tokenConfig, typeOfEvent, weekCapitalize } from '@/utils/index';
import PackageBookingDetailsPage from './PackageBookingDetailsPage';
import { useBreakpointFromContext } from '@/components/shared/BreakpointHook/Context';
import { bookingForTypes, personalTypeOfEventsTypes, businessTypeOfEventsTypes } from '@/types/booking';
import { IService } from '@/types/service';
import { imgLoader } from '@/utils/next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { IBlockDays } from '@/types/blockdays';
import { useQuery } from 'react-query';

const fetchBlockDays = async (serviceId: string) => {
  const headers = await tokenConfig('WITH-AUTH');
  const response = await ayoojonApi.get(`services/${serviceId}/blockdays`, headers);

  return response.data.data;
};

export default function PackageBookingPage({ service }: { service: IService }) {
  const matchPoints = useBreakpointFromContext();
  const router = useRouter();
  const { date, packageId, url } = router.query;

  const [showDetails, setShowDetails] = useState(false);
  const [selectedBookingFor, setSelectedBookingFor] = useState<bookingForTypes>();
  const [selectedTypeOfEvent, setSelectedTypeOfEvent] = useState<
    personalTypeOfEventsTypes | businessTypeOfEventsTypes
  >();
  const [selectedPackage, setSelectedPackage] = useState<IService['pricing']['package'][0]>();
  const [selectedPricing, setSelectedPricing] = useState<IService['pricing']['package'][0]>();
  const [selectedDate, setSelectedDate] = useState<moment.Moment | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [focused, setFocused] = useState<boolean | null>(false);
  const [isDateError] = useState<boolean>(false);

  const [plainDate, setPlainDate] = useState<string[]>([]);

  const { data } = useQuery<IBlockDays[], Error>(
    ['service-block-days', service._id],
    () => fetchBlockDays(service._id),
    {
      refetchOnWindowFocus: false,
      enabled: !!service._id,
    },
  );

  useEffect(() => {
    setSelectedDate(date && date.toString().match(dateFormatRegex) ? moment(date, 'DD-MM-YYYY') : null);
    // space
    const spaceArray = service.pricing.package.filter((place) => place._id === packageId);
    if (spaceArray.length === 1) {
      setSelectedPackage(spaceArray[0]);
      setSelectedPricing(spaceArray[0]);
    }
    if (data) {
      let newDate: any = [];
      data.map((item) => {
        const p = moment(item.date).format('DD-MM-YYYY');
        newDate.push(p);
        return p;
      });
      setPlainDate([...newDate]);
    }
  }, [date, packageId, service, data]);

  const onDateChange = (date: moment.Moment | null) => {
    setSelectedDate(date);
    setSelectedPricing(undefined);
    console.log(selectedPricing);
  };

  const handleSubmit = () => {
    if (!isDateError && selectedDate && selectedBookingFor && selectedTypeOfEvent && selectedPackage && selectedTime) {
      setShowDetails(true);
      router.push(
        `/services/${service.url}/booking?date=${moment(selectedDate).format('DD-MM-yyyy')}&packageId=${
          selectedPackage._id
        }`,
      );
    }
  };

  const createMarkup = (data: string) => {
    return {
      __html: data,
    };
  };

  return (
    <>
      {showDetails &&
      selectedBookingFor &&
      selectedTypeOfEvent &&
      selectedPackage &&
      selectedDate &&
      selectedTime &&
      !isDateError ? (
        <PackageBookingDetailsPage
          serviceInfo={{ _id: service._id, name: service.name, address: service.address, type: service.type }}
          packageInfo={selectedPackage}
          bookingDate={selectedDate}
          bookingTime={selectedTime}
          bookingFor={selectedBookingFor}
          typeOfEventName={selectedTypeOfEvent}
          additionalRequirements=""
          setShowDetails={setShowDetails}
          //   createBooking
        />
      ) : (
        <div className="max-w-4xl px-4 lg:px-0 mx-auto mb-32">
          <div className="mb-6 flex flex-col items-center">
            <h6 className="font-bold text-xl mb-3">I am booking the package for</h6>
            <div className="flex flex-wrap justify-center -mx-2">
              <div
                key={0}
                className={`transition duration-300 ease-in-out border border-customGray-450 py-2 px-4 hover:bg-primary hover:text-white m-2 cursor-pointer ${
                  selectedBookingFor === 'personal' ? 'bg-primary text-white' : ''
                }`}
                onClick={() => setSelectedBookingFor('personal')}
              >
                <h6 className="font-medium text-center">Personal</h6>
              </div>
              <div
                key={1}
                className={`transition duration-300 ease-in-out border border-customGray-450 py-2 px-4 hover:bg-primary hover:text-white m-2 cursor-pointer ${
                  selectedBookingFor === 'business' ? 'bg-primary text-white' : ''
                }`}
                onClick={() => setSelectedBookingFor('business')}
              >
                <h6 className="font-medium text-center">Business</h6>
              </div>
            </div>
          </div>
          {selectedBookingFor && (
            <div className="mb-6 flex flex-col items-center">
              <h6 className="font-bold text-xl mb-3">Type Of Event </h6>
              <div className="flex flex-wrap justify-center -mx-2">
                {selectedBookingFor === 'personal'
                  ? typeOfEvent['personal'].map((obj, index) => (
                      <div
                        key={index}
                        className={`transition duration-300 ease-in-out border border-customGray-450 py-2 px-4 hover:bg-primary hover:text-white m-2 cursor-pointer ${
                          selectedTypeOfEvent === obj.value ? 'bg-primary text-white' : ''
                        }`}
                        onClick={() => setSelectedTypeOfEvent(obj.value)}
                      >
                        <h6 className="font-medium text-center">{obj.name}</h6>
                      </div>
                    ))
                  : typeOfEvent['business'].map((obj, index) => (
                      <div
                        key={index}
                        className={`transition duration-300 ease-in-out border border-customGray-450 py-2 px-4 hover:bg-primary hover:text-white m-2 cursor-pointer ${
                          selectedTypeOfEvent === obj.value ? 'bg-primary text-white' : ''
                        }`}
                        onClick={() => setSelectedTypeOfEvent(obj.value)}
                      >
                        <h6 className="font-medium text-center">{obj.name}</h6>
                      </div>
                    ))}
              </div>
            </div>
          )}
          {selectedBookingFor && selectedTypeOfEvent && (
            <div className="mb-6">
              <h6 className="font-bold text-xl text-center mb-3">Select The Package You Want To Book</h6>
              <div className="flex flex-wrap justify-center -mx-2 mb-6">
                {service.pricing.package.map((place, index) => (
                  <div
                    key={index}
                    className={`transition duration-300 ease-in-out border border-customGray-450 py-2 px-4 hover:bg-primary hover:text-white m-2 cursor-pointer ${
                      selectedPackage && place._id === selectedPackage._id ? 'bg-primary text-white' : ''
                    }`}
                    onClick={() => {
                      setSelectedPackage(place);
                      setSelectedPricing(undefined);
                    }}
                  >
                    <h6 className="font-medium text-center">{place.title}</h6>
                  </div>
                ))}
              </div>
              {selectedPackage && (
                <>
                  <div className="h-56 w-full overflow-hidden rounded-md mb-6">
                    <Image
                      loader={imgLoader(s3FileUrl)}
                      className="inline-block object-cover"
                      src={selectedPackage.image}
                      alt="space cover"
                      height="100px"
                      width="100px"
                      layout="responsive"
                    />
                  </div>
                  <div className="">
                    <div className="flex justify-between mb-2">
                      <h6 className="font-semibold text-xl pb-2">{selectedPackage.title}</h6>
                      <div className="">
                        <div>
                          <span className="font-bold text-primary text-lg">{selectedPackage.price.amount} BDT</span>{' '}
                        </div>
                        {/* <small>
                  {time24To12(selectedPricing.from)}
                  {' - '}
                  {time24To12(selectedPricing.to)}
                </small> */}
                      </div>
                    </div>
                    <div className="">
                      <h6 className="font-medium mb-2">About</h6>
                      <div dangerouslySetInnerHTML={createMarkup(selectedPackage.description)} />
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
          {selectedBookingFor && selectedTypeOfEvent && selectedPackage && (
            <>
              <div className="mb-6">
                <h6 className="font-bold text-xl text-center mb-3">Select Your Time</h6>
                <div className="flex flex-wrap gap-x-6">
                  <div className="md:flex-1">
                    <h6 className="font-medium mb-2">Date</h6>
                    <SingleDatePicker
                      id="single_booking_date"
                      date={selectedDate}
                      onDateChange={onDateChange}
                      focused={focused}
                      onFocusChange={({ focused }) => setFocused(focused)}
                      orientation="horizontal"
                      placeholder="Date"
                      showDefaultInputIcon={true}
                      small={false}
                      hideKeyboardShortcutsPanel={true}
                      daySize={getDaySize(matchPoints)}
                      numberOfMonths={1}
                      isDayBlocked={(day) =>
                        plainDate.includes(day.format('DD-MM-YYYY'))
                          ? true
                          : weekCapitalize(service.weekDays).includes(day.format('ddd'))
                      }
                      navPrev={<NavPrevIcon />}
                      navNext={<NavNextIcon />}
                      renderCalendarInfo={() => <CalenderInfoPanel />}
                      readOnly={true}
                      displayFormat="DD-MM-YYYY"
                    />
                  </div>

                  <div className="w-full md:flex-1 mt-4 md:mt-0">
                    <div className="font-bold mb-3">Time</div>
                    <OutlinedInput type="time" className="w-full" onChange={(e) => setSelectedTime(e.target.value)} />
                  </div>
                </div>
              </div>
            </>
          )}
          {selectedBookingFor && selectedTypeOfEvent && selectedPackage && (
            <div className="mb-6">
              <h6 className="font-bold text-xl text-center mb-3">
                Write down here if you have any additional requirements
              </h6>
              <div>
                <OutlinedInput
                  name="additionalRequirements"
                  id="additionalRequirements"
                  fullWidth={true}
                  multiline={true}
                  maxRows={6}
                  rows={6}
                  color="primary"
                  type="text"
                  placeholder="Requirements ..."
                  // labelWidth={0}
                />
              </div>
            </div>
          )}
          {selectedBookingFor && selectedTypeOfEvent && (
            <div className="mt-20">
              <Button
                fullWidth
                variant="contained"
                size="large"
                color="primary"
                onClick={handleSubmit}
                disabled={
                  isDateError || !selectedBookingFor || !selectedTypeOfEvent || !selectedPackage || !selectedDate
                }
              >
                <span className="font-sans font-semibold">Next</span>
              </Button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
