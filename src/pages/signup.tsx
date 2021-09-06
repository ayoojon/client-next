import React from 'react';
import { Helmet } from 'react-helmet';
import { APP_TITLE } from '@/config/index';
import SEO from '@/components/shared/SEO';
// import bgImgFull from './../../resources/backgrounds/bg-signin-signup-full.png';
// import { SignupForm } from './SignupForm';

const Signup = () => {
  return (
    <>
      <SEO siteTitle="Signup" />
      <div
        className="-mt-14 min-h-screen flex flex-col relative"
        style={{
          backgroundImage: `url(/resources/backgrounds/bg-signin-signup-full.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'left',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="w-full flex flex-1 items-center justify-center lg:w-1/2 mt-14 p-6">{/* <SignupForm /> */}</div>
      </div>
    </>
  );
};

export default Signup;
