import React, { useCallback, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { taxPrice } from '../../utils';
import { useParams, Link } from 'react-router-dom';
import { Breadcrumbs, Typography, Button } from '@material-ui/core';
import { BreadcrumbsLink } from '../../components/BreadcrumbsLink';
import { getSingleBookingPaymentDetailsAction } from '../../stores/booking/Actions';
import { IReducer } from '../../stores/IndexReducer';
import { CustomTextField, CustomRadioButtonGroup, CustomRadioButton } from '../../components/Formik/FormikField';
import { Formik, Form, FormikHelpers } from 'formik';
import { IPayment } from '../../stores/booking/dto';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet';
import { APP_TITLE } from '../../config';

interface ParamTypes {
  bookingId: string;
}

interface Props {
  getPaymentDetailsAction: (bookingId: string) => Promise<any>;
}

const validationSchema = Yup.object().shape({
  type: Yup.string().oneOf(['card', 'cash']).required('Required'),
  promoCode: Yup.string(),
});

const BookingPaymentPageComponent: React.FC<Props> = ({ getPaymentDetailsAction }) => {
  const params = useParams<ParamTypes>();
  const currentBookingPaymentDetails = useSelector(
    (state: IReducer) => state.bookingReducer.currentBookingPaymentDetails,
  );

  const loadData = useCallback(async () => {
    if (params.bookingId) {
      await getPaymentDetailsAction(params.bookingId);
    }
  }, [params.bookingId, getPaymentDetailsAction]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleSubmit = async (values: IPayment, { setSubmitting, setFieldError }: FormikHelpers<IPayment>) => {};

  return (
    <>
      <Helmet>
        <title>{`Booking Pricing | ${APP_TITLE}`}</title>
      </Helmet>
      <div className="max-w-md mx-auto">
        <Breadcrumbs aria-label="breadcrumb">
          <BreadcrumbsLink color="inherit" to={`/user/bookings`}>
            Bookings
          </BreadcrumbsLink>
          <BreadcrumbsLink color="inherit" to={`/user/bookings/${params.bookingId}`}>
            Details
          </BreadcrumbsLink>
          <Typography color="textPrimary">Payment</Typography>
        </Breadcrumbs>
        {currentBookingPaymentDetails && (
          <div className="mt-3">
            <h6 className="font-bold text-xl text-primary">Pricing</h6>
            <div className="py-2 border-b border-gray-300 last:border-0">
              <div className="flex justify-between my-2">
                <h6>Booking Fee</h6>
                <p>{currentBookingPaymentDetails.price - taxPrice.conventionHall} BDT</p>
              </div>
              <div className="flex justify-between my-2">
                <h6>Tax</h6>
                <p>{taxPrice.conventionHall} BDT</p>
              </div>
              <div className="flex justify-between my-2 font-medium text-primary">
                <h6>Total</h6>
                <p>{currentBookingPaymentDetails.price} BDT</p>
              </div>
            </div>
            <div className="py-2 border-b border-gray-300 last:border-0">
              <Formik
                initialValues={{ type: 'cash', promoCode: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
              >
                {({ isValid, isSubmitting }) => {
                  return (
                    <Form>
                      <div className="my-1">
                        <h6 className="font-medium">Select Payment Method</h6>
                        <CustomRadioButtonGroup name="type">
                          <CustomRadioButton disabled value="card" label={<p>Pay with Debit/Credit Card</p>} />
                          <CustomRadioButton
                            value="cash"
                            label={
                              <div>
                                <p>Pay with Cash</p>
                                <small className="italic">You will pay the service owner via cash.</small>{' '}
                                <Link to="#">
                                  <small className="italic text-primary font-semibold">Learn more.</small>
                                </Link>
                              </div>
                            }
                          />
                        </CustomRadioButtonGroup>
                        <div className="my-2 sm:flex sm:items-center">
                          <CustomTextField
                            className="sm:max-w-xs mr-4"
                            name="promoCode"
                            label="Promo Code"
                            isBorder={true}
                          />
                          <small className="text-primary font-semibold">
                            You may request for a promo code to the buyer.
                          </small>
                        </div>
                        <div className="my-3">
                          <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            disabled={!isValid || isSubmitting}
                            type="submit"
                          >
                            Make Payment
                          </Button>
                        </div>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const BookingPaymentPage = connect(null, {
  getPaymentDetailsAction: getSingleBookingPaymentDetailsAction,
})(BookingPaymentPageComponent);

export default BookingPaymentPage;
