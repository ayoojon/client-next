import React from 'react';
import { Helmet } from 'react-helmet';
import { APP_TITLE } from '../../config';
import ForgotPasswordForm from '@/components/forgot-password/ForgotPasswordForm';

const ForgotPassword = () => {
  return (
    <>
      <Helmet>
        <title>{`Forgot Password | ${APP_TITLE}`}</title>
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
          <ForgotPasswordForm />
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
