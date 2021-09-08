import React from 'react';
import { useParams } from 'react-router-dom';
import { LocationBookingPage } from '@/components/services/bookings/LocationBookingPage';
import { useQuery } from 'react-query';
import { ayoojonApi } from '@/config/index';
import { breakpointsQueries } from '@/components/shared/ReactDates/index';
import PackageBookingPage from '@/components/services/bookings/PackageBookingPage';
import ProductBookingPage from '@/components/services/bookings/ProductBookingPage';
import { IService } from '@/types/service';
import Backdrop from '@/components/shared/Backdrop';
import { BreakpointProvider } from '@/components/shared/BreakpointHook/Context';
import { useRouter } from 'next/router';
import { useAppSelector } from '@/components/shared/hooks/redux';

interface ParamTypes {
  serviceURL: string;
}

interface Props {
  getServiceByUrlAction?: (url: string) => Promise<any>;
}

const fetchService = async (url: string) => {
  const response = await ayoojonApi.get(`services/url/${url}`);
  return response.data.service;
};

const BookingPage: React.FC<Props> = () => {
  const router = useRouter();
  const { url } = router.query;
  const { isLogin } = useAppSelector((state) => {
    return { isLogin: !!state.userReducer.user };
  });

  const { data, status, isLoading } = useQuery<IService>(['service', `${url}`], () => fetchService(url as string), {
    refetchOnWindowFocus: false,
    enabled: !!url,
  });

  if (status === 'error') {
    return <div>Something went wrong!</div>;
  }

  if (!isLogin && typeof window !== 'undefined') {
    router.replace('/signin');
  }

  return (
    <>
      <Backdrop open={isLoading} />
      <BreakpointProvider queries={breakpointsQueries}>
        <div className="my-6">
          {data && data.type === 'venue' && <LocationBookingPage service={data} />}
          {data && ['eventManagement', 'photographer', 'music', 'lighting', 'honeymoon'].includes(data.type) && (
            <PackageBookingPage service={data} />
          )}
          {data && ['flowers', 'caterings'].includes(data.type) && <ProductBookingPage service={data} />}
        </div>
      </BreakpointProvider>
    </>
  );
};

export default BookingPage;
