import SEO from '@/components/shared/SEO';
import { ChangePasswordComponent } from '@/components/user/settings/ChangePassword';
import { useRouter } from 'next/router';
import { useAppSelector } from '../../../components/shared/hooks/redux';
import React, { useState } from 'react';
import { ChangeEmail } from '@/components/user/settings/ChangeEmail';
import { Button } from '@mui/material';
import { tokenConfig } from '@/utils/index';
import { ayoojonApi } from '@/config/index';

const UserSettingsPage = () => {
  const router = useRouter();
  const [isDisable, setisDisable] = useState(false);
  const { isLogin } = useAppSelector((state) => {
    return { isLogin: !!state.userReducer.user };
  });
  let { user } = useAppSelector((state) => {
    return { user: state.userReducer.user };
  });

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  if (!isLogin && typeof window !== 'undefined') {
    router.replace('/signin');
  }

  const sendVerificationMail = async () => {
    try {
      const headers = await tokenConfig('WITH-AUTH');
      await ayoojonApi.get(`accounts/resend-verification-mail`, headers);
    } catch (error) {}
  };

  const resendHandler = () => {
    setisDisable(true);
    sendVerificationMail();
    setTimeout(enableButton, 20000);
  };

  const enableButton = () => {
    setisDisable(false);
  };

  return (
    <div className="container mx-auto my-16 px-6">
      <SEO siteTitle="User Settings" />
      {user && (
        <>
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold">Settings</h1>
            <ChangePasswordComponent />
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-semibold mt-10">Account Verified</h2>
            {user.isVerified ? (
              <div className="ml-2 font-medium capitalize text-green-500">
                <h1>account is Verified</h1>
              </div>
            ) : (
              <div className="ml-2 ">
                <div className="flex justify-between max-w-xs mt-2">
                  <p className=" mt-1 font-medium capitalize text-red-600">account is Not Yet Verified </p>
                  <div className="flex ml-4 item-center">
                    {/* <Button
                      variant="contained"
                      color="primary"
                      type="button"
                      onClick={() => resendHandler()}
                      disabled={isDisable ? true : false}
                    >
                      Resend verification mail
                    </Button> */}
                    {/* <span className="font-semibold text-teal-900 cursor-pointer" onClick={() => resendHandler()}>
                      Resend verification mail
                    </span> */}
                    <button
                      className="font-semibold text-teal-900 cursor-pointer"
                      onClick={() => resendHandler()}
                      disabled={isDisable ? true : false}
                    >
                      Resend
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="">
            <h2 className="text-xl font-semibold mt-10">Change Email</h2>
            <ChangeEmail user={user} />
          </div>
        </>
      )}
    </div>
  );
};

export default UserSettingsPage;
