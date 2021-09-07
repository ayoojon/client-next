import SEO from '@/components/shared/SEO';
import { ChangePasswordComponent } from '@/components/user/settings/ChangePassword';
import React from 'react';

const UserSettingsPage = () => {
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
