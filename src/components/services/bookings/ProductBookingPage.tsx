import React, { useState } from 'react';
import { typeOfEvent } from '@/utils/index';
import { Tab, Tabs } from '@material-ui/core';
import 'react-dates/initialize';
import moment from 'moment';
import { SingleDatePicker, isSameDay } from 'react-dates';
import { OutlinedInput, Button } from '@material-ui/core';
import { s3FileUrl } from '@/config/index';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import ProductBookingDetailsPage from './ProductBookingDetailsPage';
import { bookingForTypes, businessTypeOfEventsTypes, ICreateProductBooking, IProductBookingForm, personalTypeOfEventsTypes } from '@/types/booking';
import { useEffect } from 'react';
import Image from 'next/image'
import Icon from '@/components/shared/icons';
import { useLocation } from 'react-router-dom';
import { useBreakpointFromContext } from '@/components/shared/BreakpointHook/Context';
import { InputHeader } from '@/components/shared/InputHeader';
import { getDaySize, NavPrevIcon, NavNextIcon, CalenderInfoPanel } from '@/components/shared/ReactDates';
import { customToast } from '@/components/shared/Toaster';
import { IService } from '@/types/service';
import { TabPanel } from '../product/TabPanel';
import { imgLoader } from '@/utils/next';

interface Props {
  service: IService;
}

const ProductBookingPage: React.FC<Props> = ({ service }) => {
  const matchPoints = useBreakpointFromContext();
  const location = useLocation();
  const [blockedDates] = useState([moment()]);
  const [isFocused, setFocused] = useState<boolean | null>(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedBookingFor, setSelectedBookingFor] = useState<bookingForTypes>();
  const [selectedTypeOfEvent, setSelectedTypeOfEvent] = useState<
    personalTypeOfEventsTypes | businessTypeOfEventsTypes
  >();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedProductItems, setSelectedProductItems] = useState<
    ICreateProductBooking['pricing']['product']['items']
  >([]);
  const query = new URLSearchParams(location.search);
  const date = query.get('date');

  const validationSchema = Yup.object().shape({
    guestNo: Yup.number()
      .integer()
      .required('Required')
      .min(service.pricing.product.minGuest, `Minimum guest should be ${service.pricing.product.minGuest}`),
    deliveryAddress: Yup.string().required('Delivery address required'),
    additionalRequirements: Yup.string(),
    date: Yup.string().required('Required'),
    startTime: Yup.string(),
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
  } = useForm<IProductBookingForm>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      guestNo: 50,
      deliveryAddress: '',
      additionalRequirements: '',
      date: moment().format('DD-MM-YYYY'),
      startTime: '09:00',
    },
  });

  useEffect(() => {
    if (date) {
      setValue('date', date);
    }
  }, [date, setValue]);

  const guestNo = watch('guestNo');

  const onSubmit = handleSubmit((data) => {
    const totalPrice = selectedProductItems.map((item) => item.price.amount).reduce((a, b) => a + b, 0);

    if (totalPrice < service.pricing.product.minPrice.amount) {
      customToast(`Minimum price of per meal is ${service.pricing.product.minPrice.amount}`, 'danger');
    } else {
      setShowDetails(true);
    }
  });

  return (
    <>
      {showDetails && selectedBookingFor && selectedTypeOfEvent && watch('date') ? (
        <ProductBookingDetailsPage
          serviceInfo={{ _id: service._id, name: service.name, address: service.address, type: service.type }}
          selectedItems={selectedProductItems}
          bookingDate={moment(watch('date'), 'DD-MM-YYYY')}
          additionalRequirements={watch('additionalRequirements')}
          startTime={watch('startTime')}
          guestNo={watch('guestNo')}
          deliveryAddress={watch('deliveryAddress')}
          productInfo={{
            minGuest: service.pricing.product.minGuest,
            minPrice: service.pricing.product.minPrice,
          }}
          bookingFor={selectedBookingFor}
          typeOfEventName={selectedTypeOfEvent}
          setShowDetails={setShowDetails}
        />
      ) : (
        <div className="max-w-4xl px-4 lg:px-0 mx-auto mb-32">
          <div className="mb-6 flex flex-col items-center">
            <h6 className="font-bold text-xl mb-3">I am getting service for</h6>
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
              <h6 className="font-bold text-xl text-center mb-3">Menu</h6>
              <div className="flex flex-wrap justify-center -mx-2 mb-6">
                <Tabs
                  value={selectedCategory}
                  onChange={(event, category) => {
                    setSelectedCategory(category);
                  }}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tab"
                >
                  {service.pricing.product.categories.map((category, index) => (
                    <Tab
                      key={index}
                      label={category.title}
                      id={`simple-tab-${index}`}
                      style={{ textTransform: 'none', outline: 'none', fontSize: 18 }}
                    />
                  ))}
                </Tabs>
              </div>
            </div>
          )}

          {selectedTypeOfEvent &&
            service.pricing.product.categories.map((category, index) => (
              <TabPanel key={index} value={selectedCategory} index={index}>
                <div className="flex flex-wrap">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className={`w-64 md:w-56 rounded mx-2 border mb-4 transition duration-300 ease-in-out relative`}
                    >
                      <div className="h-40 w-full overflow-hidden rounded-md">
                        <Image
                          loader={imgLoader(s3FileUrl)}
                          className="inline-block w-full h-full object-cover"
                          src={item.image}
                          alt="location"
                        />
                      </div>
                      <div className="p-2">
                        <h6 className="font-semibold text-xl pb-2">{item.title}</h6>
                        <div className="flex justify-center">
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            disabled={
                              !!(
                                selectedProductItems.length > 0 &&
                                selectedProductItems.find((i) => i.itemId === item._id)
                              )
                            }
                            onClick={() => {
                              const found = selectedProductItems.find((i) => i.itemId === item._id);
                              if (!found) {
                                setSelectedProductItems((prev) => [
                                  ...prev,
                                  {
                                    ...item,
                                    itemId: item._id,
                                    categoryId: category._id,
                                    categoryTitle: category.title,
                                  },
                                ]);
                              }
                            }}
                          >
                            Add Item
                          </Button>
                        </div>
                      </div>
                      <div className="bg-yellow-400 text-xs uppercase font-bold rounded-full p-1 absolute top-0 right-0 mt-1 mr-1">
                        <span>
                          {item.price.currency} {item.price.amount}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
            ))}

          <div className="space-y-6">
            {selectedProductItems.length > 0 && (
              <div>
                <h6 className="font-bold text-xl text-center mb-3">Select Your Meal</h6>
                <div className="w-full border rounded max-w-lg mx-auto pt-2">
                  <span className="font-light text-gray-500 text-center p-4">
                    *Note: Minimum price of meal must be at least BDT. {service.pricing.product.minPrice.amount}
                  </span>
                  <ul className="w-100% h-80 overflow-auto mt-2 px-6 border border-indigo-600 ">
                    {selectedProductItems.map((item, index) => (
                      <li key={item.itemId} className="border-b-2 border-gray-800 px-4 py-3 flex justify-between">
                        <div>
                          <p className="text-lg font-light">{item.title}</p>
                          <p>{item.price.amount} BDT</p>
                        </div>

                        <span
                          onClick={() => {
                            const filteredItems = selectedProductItems.filter((i) => i.itemId !== item.itemId);
                            setSelectedProductItems(filteredItems);
                          }}
                        >
                          <Icon name="remove" height="24" width="24" fill="red" />
                        </span>
                      </li>
                    ))}
                  </ul>
                  <span className="font-light text-gray-500 text-center p-4">
                    Total Meal Price: {selectedProductItems.map((item) => item.price.amount).reduce((a, b) => a + b, 0)}
                  </span>
                </div>
              </div>
            )}

            <form onSubmit={onSubmit} className="space-y-6">
              {selectedProductItems.length > 0 && (
                <div>
                  <div className="flex flex-wrap gap-x-6">
                    <div className="md:flex-1">
                      <div className="font-bold mb-3">Number of guests</div>
                      <div className="w-full">
                        <Controller
                          control={control}
                          name="guestNo"
                          render={({ field }) => (
                            <OutlinedInput
                              type="number"
                              labelWidth={0}
                              className="w-full"
                              placeholder="50"
                              {...field}
                              onChange={(e) => setValue('guestNo', Number(e.target.value))}
                            />
                          )}
                        />
                        {errors?.['guestNo'] && (
                          <p className="text-red-500 text-xs italic font-medium mt-1">
                            {errors?.['guestNo']['message']}
                          </p>
                        )}
                        <span className="font-light text-gray-500 text-center mt-4">
                          *Note: Minimum guest must be least. {service.pricing.product.minGuest}
                        </span>
                      </div>
                    </div>
                    <div className="w-40">
                      <div className="font-bold mb-6">Total</div>
                      {selectedProductItems.map((item) => item.price.amount).reduce((a, b) => a + b, 0) * guestNo} BDT
                    </div>
                  </div>
                </div>
              )}

              {selectedProductItems.length > 0 && (
                <div>
                  <div>
                    <div className="font-bold mb-3 text-center">Select Your Time</div>
                    <div className="flex flex-wrap gap-x-6">
                      <div className="md:flex-1">
                        <div className="font-bold mb-3">Date</div>
                        <SingleDatePicker
                          id="single_booking_date"
                          date={moment(watch('date'), 'DD-MM-YYYY')}
                          onDateChange={(date) => setValue('date', date ? date.format('DD-MM-YYYY') : '')}
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
                          isDayBlocked={(day) => blockedDates.some((blockedDay) => isSameDay(day, blockedDay))}
                          navPrev={<NavPrevIcon />}
                          navNext={<NavNextIcon />}
                          renderCalendarInfo={() => <CalenderInfoPanel />}
                          readOnly={true}
                          displayFormat="DD-MM-YYYY"
                        />

                        {errors?.['date'] && (
                          <p className="text-red-500 text-xs italic font-medium mt-1">{errors?.['date']['message']}</p>
                        )}
                      </div>
                      <div className="w-full md:flex-1">
                        <div className="font-bold mb-3">Time</div>
                        <Controller
                          control={control}
                          name="startTime"
                          render={({ field }) => <OutlinedInput type="time" className="w-full" {...field} />}
                        />
                        {errors?.['startTime'] && (
                          <p className="text-red-500 text-xs italic font-medium mt-1">
                            {errors?.['startTime']['message']}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedProductItems.length > 0 && (
                <div>
                  <h6 className="font-bold mb-3 text-center">Where will it take place?</h6>
                  <div className="mt-5">
                    <InputHeader label="Address" />

                    <Controller
                      control={control}
                      name="deliveryAddress"
                      render={({ field }) => (
                        <OutlinedInput
                          error={!!errors['deliveryAddress']}
                          labelWidth={0}
                          fullWidth
                          type="text"
                          {...field}
                        />
                      )}
                    />

                    {errors?.['deliveryAddress'] && (
                      <p className="text-red-500 text-xs italic font-medium mt-1">
                        {errors?.['deliveryAddress']['message']}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {selectedProductItems.length > 0 && (
                <div>
                  <h6 className="font-bold text-center mb-3">
                    Write down here if you have any additional requirements
                  </h6>
                  <div>
                    <Controller
                      control={control}
                      name="additionalRequirements"
                      render={({ field }) => (
                        <OutlinedInput
                          error={!!errors['additionalRequirements']}
                          fullWidth
                          multiline
                          rows={6}
                          placeholder="Requirements ..."
                          type="text"
                          {...field}
                        />
                      )}
                    />
                    {errors?.['additionalRequirements'] && (
                      <p className="text-red-500 text-xs italic font-medium mt-1">
                        {errors?.['additionalRequirements']['message']}
                      </p>
                    )}
                  </div>
                </div>
              )}

              <div>
                {selectedBookingFor && selectedTypeOfEvent && (
                  <div className="mt-20">
                    <Button fullWidth size="large" variant="contained" color="primary" type="submit">
                      <span className="font-sans font-semibold">Next</span>
                    </Button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductBookingPage;
