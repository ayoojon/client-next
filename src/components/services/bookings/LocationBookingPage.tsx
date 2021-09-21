import React, { useState, useEffect } from 'react';
import { typeOfEvent, time24To12, dateFormatRegex, tokenConfig, weekCapitalize } from '@/utils/index';
import { SingleDatePicker, isSameDay } from 'react-dates';
import 'react-dates/initialize';
import moment from 'moment';
import Image from 'next/image';
import { getDaySize, NavPrevIcon, NavNextIcon, CalenderInfoPanel } from '@/components/shared/ReactDates';
import { useBreakpointFromContext } from '@/components/shared/BreakpointHook/Context';
import { OutlinedInput, FormHelperText, Button } from '@mui/material';
import { LocationBookingDetailsPage } from './LocationBookingDetailsPage';
import { IService } from '@/types/service';
import { bookingForTypes, businessTypeOfEventsTypes, personalTypeOfEventsTypes } from '@/types/booking';
import { ayoojonApi, s3FileUrl } from '@/config/index';
import { imgLoader } from '@/utils/next';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { IBlockDays } from '@/types/blockdays';

interface Props {
  service: IService;
}

const fetchBlockDays = async (serviceId: string) => {
  const headers = await tokenConfig('WITH-AUTH');
  const response = await ayoojonApi.get(`services/${serviceId}/blockdays`, headers);

  return response.data.data;
};

export const LocationBookingPage: React.FC<Props> = ({ service }) => {
  const matchPoints = useBreakpointFromContext();
  const router = useRouter();
  const { date, locationId, pricingId, url } = router.query;
  const [showDetails, setShowDetails] = useState(false);
  const [selectedBookingFor, setSelectedBookingFor] = useState<bookingForTypes>();
  const [selectedTypeOfEvent, setSelectedTypeOfEvent] = useState<
    personalTypeOfEventsTypes | businessTypeOfEventsTypes
  >();
  const [selectedSpace, setSelectedSpace] = useState<IService['pricing']['location'][0]>();

  const [selectedPricing, setSelectedPricing] = useState<IService['pricing']['location'][0]['sessions'][0]>();
  const [selectedDate, setSelectedDate] = useState<moment.Moment | null>(null);
  const [focused, setFocused] = useState<boolean | null>(false);
  const [isDateError] = useState<boolean>(false);
  const [blockedDates] = useState([moment()]);
  const [isAdditionalRequirementsError, setAdditionalRequirementsError] = useState<string>('');
  const [additionalRequirements, setAdditionalRequirements] = useState<string>('');

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
    const spaceArray = service.pricing.location.filter((place) => place._id === locationId);
    if (spaceArray.length === 1) {
      setSelectedSpace(spaceArray[0]);
      const pricingArray = spaceArray[0].sessions.filter((p) => p._id === pricingId);
      if (pricingArray.length === 1) {
        setSelectedPricing(pricingArray[0]);
      }
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
  }, [date, locationId, pricingId, service.pricing.location, data]);

  const onDateChange = (date: moment.Moment | null) => {
    setSelectedDate(date);
    setSelectedPricing(undefined);
  };

  const handleSubmit = () => {
    if (
      !isDateError &&
      selectedDate &&
      selectedBookingFor &&
      selectedTypeOfEvent &&
      selectedSpace &&
      selectedPricing &&
      isAdditionalRequirementsError === ''
    ) {
      router.push(
        `/services/${service.url}/booking?date=${moment(selectedDate).format('DD-MM-yyyy')}&locationId=${
          selectedSpace._id
        }&pricingId=${selectedPricing._id}`,
      );
      setShowDetails(true);
    }
  };

  return (
    <>
      {showDetails &&
      selectedBookingFor &&
      selectedTypeOfEvent &&
      selectedSpace &&
      selectedDate &&
      selectedPricing &&
      !isDateError &&
      isAdditionalRequirementsError === '' ? (
        <LocationBookingDetailsPage
          serviceInfo={{ _id: service._id, name: service.name, address: service.address, type: service.type }}
          spaceInfo={{
            _id: selectedSpace._id,
            title: selectedSpace.title,
            description: selectedSpace.description,
            photos: selectedSpace.photos,
            capacity: selectedSpace.capacity,
            size: selectedSpace.size,
            type: selectedSpace.type,
          }}
          bookingDate={selectedDate}
          pricingInfo={selectedPricing}
          bookingFor={selectedBookingFor}
          typeOfEventName={selectedTypeOfEvent}
          additionalRequirements={additionalRequirements}
          setShowDetails={setShowDetails}
        />
      ) : (
        <div className="max-w-4xl px-4 lg:px-0 mx-auto mb-32">
          <div className="mb-6 flex flex-col items-center">
            <h6 className="font-bold text-xl mb-3">I am booking the venue for</h6>
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
              <h6 className="font-bold text-xl text-center mb-3">Select The Space You Want To Book</h6>
              <div className="flex flex-wrap justify-center -mx-2 mb-6">
                {service.pricing.location.map((place, index) => (
                  <div
                    key={index}
                    className={`transition duration-300 ease-in-out border border-customGray-450 py-2 px-4 hover:bg-primary hover:text-white m-2 cursor-pointer ${
                      selectedSpace && place._id === selectedSpace._id ? 'bg-primary text-white' : ''
                    }`}
                    onClick={() => {
                      setSelectedSpace(place);
                      setSelectedPricing(undefined);
                    }}
                  >
                    <h6 className="font-medium text-center">{place.title}</h6>
                  </div>
                ))}
              </div>
              {selectedSpace && (
                <>
                  <div className="h-56 w-full overflow-hidden rounded-md mb-6">
                    <Image
                      loader={imgLoader(s3FileUrl)}
                      height={500}
                      width={500}
                      layout="responsive"
                      className="inline-block w-full h-full object-cover"
                      src={selectedSpace.photos[0]}
                      alt="space cover"
                    />
                  </div>
                  <div className="">
                    <div className="flex justify-between mb-2">
                      <h6 className="font-semibold text-xl pb-2">{selectedSpace.title}</h6>
                      <div className="">
                        <div>
                          <span className="font-bold text-primary text-lg">
                            {selectedSpace.sessions[0].price.amount}
                            {selectedSpace.sessions[0].price.currency}
                          </span>{' '}
                          <span className="font-medium text-sm text-customGray-550">/ Day</span>
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
                      <p>{selectedSpace.description}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
          {selectedBookingFor && selectedTypeOfEvent && selectedSpace && (
            <>
              <div className="mb-6">
                <h6 className="font-bold text-xl text-center mb-3">Select Your Time</h6>
                <div className="mb-4">
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
                    hideKeyboardShortcutsPanel={false}
                    daySize={getDaySize(matchPoints)}
                    numberOfMonths={1}
                    // TODO: Enable this with API data

                    // isDayBlocked={(day) => blockedDates.some((blockedDay) => isSameDay(day, blockedDay))}
                    isDayBlocked={(day) =>
                      plainDate.includes(day.format('DD-MM-YYYY'))
                        ? true
                        : weekCapitalize(service.weekDays).includes(day.format('ddd'))
                    }
                    // isDayHighlighted={(day) =>
                    //   HIGHLIGHTED_DATES.some((highlightedDay) => isSameDay(day, highlightedDay))
                    // }
                    navPrev={<NavPrevIcon />}
                    navNext={<NavNextIcon />}
                    renderCalendarInfo={() => <CalenderInfoPanel />}
                    readOnly={true}
                    displayFormat="DD-MM-YYYY"
                  />
                </div>
              </div>
              <div className="mb-4">
                <h6 className="font-medium">Time</h6>
                <div className="flex flex-wrap -mx-2">
                  {selectedSpace.sessions.map((session, index) => (
                    <div
                      key={index}
                      className={`transition duration-300 ease-in-out border border-customGray-450 py-2 px-4 hover:bg-primary hover:text-white m-2 cursor-pointer ${
                        selectedPricing && selectedPricing._id === session._id ? 'bg-primary text-white' : ''
                      }`}
                      onClick={() => {
                        setSelectedPricing(session);
                      }}
                    >
                      <small>
                        {time24To12(session.startTime)}
                        {' - '}
                        {time24To12(session.endTime)}
                      </small>
                      <h6 className="font-medium">
                        {session.price.amount} {session.price.currency}
                      </h6>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
          {selectedBookingFor && selectedTypeOfEvent && selectedSpace && (
            <div className="mb-6">
              <h6 className="font-bold text-xl text-center mb-3">
                Write down here if you have any additional requirements
              </h6>
              <div>
                <OutlinedInput
                  name="additionalRequirements"
                  id="additionalRequirements"
                  value={additionalRequirements}
                  onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                    const value = (event.target as HTMLTextAreaElement | HTMLInputElement).value;
                    if (value.length > 500) {
                      setAdditionalRequirementsError('Should be less then 500 characters');
                    } else {
                      setAdditionalRequirementsError('');
                    }
                    setAdditionalRequirements(value);
                  }}
                  onBlur={(event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                    const value = (event.target as HTMLTextAreaElement | HTMLInputElement).value;
                    if (value.length > 500) {
                      setAdditionalRequirementsError('Should be less then 500 characters');
                    } else {
                      setAdditionalRequirementsError('');
                    }
                  }}
                  fullWidth={true}
                  multiline={true}
                  maxRows={6}
                  rows={6}
                  color="primary"
                  type="text"
                  error={!!isAdditionalRequirementsError}
                  placeholder="Requirements ..."
                  // labelWidth={0}
                />
                {!!isAdditionalRequirementsError ? (
                  <FormHelperText filled={true} error={true}>
                    {isAdditionalRequirementsError}
                  </FormHelperText>
                ) : undefined}
              </div>
            </div>
          )}
          {selectedBookingFor && selectedTypeOfEvent && (
            <div className="mt-20">
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={
                  isDateError ||
                  !selectedBookingFor ||
                  !selectedTypeOfEvent ||
                  !selectedSpace ||
                  !selectedPricing ||
                  !selectedDate ||
                  isAdditionalRequirementsError !== ''
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
};
