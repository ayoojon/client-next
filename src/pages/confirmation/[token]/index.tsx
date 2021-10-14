import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import { tokenConfig } from '@/utils/index';
import { APP_TITLE, ayoojonApi } from '../../../config';
import { useAppDispatch, useAppSelector } from '@/components/shared/hooks/redux';
import { updateIsVerified } from 'src/stores/UserReducer';
import CircularProgress from '@mui/material/CircularProgress';
import Link from 'next/link';

const accountVerification = async (token) => {
  const headers = await tokenConfig('WITHOUT-AUTH');
  const response = await ayoojonApi.get(`accounts/confirmation/${token}`, headers);
  //   const response = await ayoojonApi.get(`accounts/confirmation/${token}`);
  console.log(response);
  return response.data;
};

const ConfirmationMail = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { token } = router.query;
  const { isLogin } = useAppSelector((state) => {
    return { isLogin: !!state.userReducer.user };
  });

  const { data, status } = useQuery(
    ['user-account-verification', `${token}`],
    () => accountVerification(token as string),
    {
      refetchOnWindowFocus: false,
      // The query will not execute until the token exists
      enabled: !!token,
      onSuccess: () => {
        dispatch(updateIsVerified());
      },
    },
  );

  if (status === 'loading') {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-white">
        <CircularProgress />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`Account Confirmation | ${APP_TITLE}`}</title>
      </Helmet>
      <div
        className="-mt-14 min-h-screen flex flex-col relative"
        style={{
          backgroundImage: `url(/resources/backgrounds/bg-forgot.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'left',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="flex flex-1 items-center justify-center mt-14 p-6">
          <h1>Your Account is Verifide</h1>
        </div>

        {!isLogin && (
          <Link href="/signin">
            <a className="font-sans font-semibold">Sign In</a>
          </Link>
        )}
      </div>
    </>
  );
};
export default ConfirmationMail;
