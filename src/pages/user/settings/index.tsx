import SEO from '@/components/shared/SEO';
import { ChangePasswordComponent } from '@/components/user/settings/ChangePassword';
import { useRouter } from 'next/router';
import { useAppSelector } from '../../../components/shared/hooks/redux';
import React from 'react';

const UserSettingsPage = () => {
  const router = useRouter();
  const { isLogin } = useAppSelector((state) => {
    return { isLogin: !!state.userReducer.user };
  });
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  if (!isLogin && typeof window !== 'undefined') {
    router.replace('/signin');
  }

  return (
    <div className="container mx-auto my-12 px-6">
      <SEO siteTitle="User Settings" />
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold">Settings</h1>
        <ChangePasswordComponent />
      </div>
    </div>
  );
};

export default UserSettingsPage;
