import { useState } from 'react';
import { Tab, Tabs } from '@material-ui/core';
import { TabPanel } from '@/components/user/bookings/TabPanel';
import { AllBooking } from '@/components/user/bookings/AllBooking';
import { PendingRequest } from '@/components/user/bookings/PendingRequest';
import { Accepeted } from '@/components/user/bookings/Accepeted';
import { Completed } from '@/components/user/bookings/Completed';
import { Rejected } from '@/components/user/bookings/Rejected';
import { useRouter } from 'next/router';
import { useAppSelector } from '@/components/shared/hooks/redux';
import SEO from '@/components/shared/SEO';

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
  };
}

const UserBookingsPage = () => {
  const router = useRouter();
  const { isLogin } = useAppSelector((state) => {
    return { isLogin: !!state.userReducer.user };
  });
  if (!isLogin && typeof window !== 'undefined') {
    router.replace('/signin');
  }
  const [value, setValue] = useState(0);
  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <SEO siteTitle="My Bookings" />
      <div className="container mx-auto my-12 px-6">
        <h1 className="font-bold text-4xl mb-5">My Bookings</h1>

        <div>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tab"
          >
            <Tab label="All" {...a11yProps(0)} style={{ textTransform: 'none', outline: ' none ' }} />
            <Tab label="Pending Request" {...a11yProps(1)} style={{ textTransform: 'none', outline: ' none ' }} />
            <Tab label="Accepeted" {...a11yProps(2)} style={{ textTransform: 'none', outline: ' none ' }} />
            <Tab label="Rejected" {...a11yProps(3)} style={{ textTransform: 'none', outline: ' none ' }} />
            <Tab label="Completed" {...a11yProps(4)} style={{ textTransform: 'none', outline: ' none ' }} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <AllBooking />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <PendingRequest />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Accepeted />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Rejected />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Completed />
          </TabPanel>
        </div>
      </div>
    </>
  );
};

export default UserBookingsPage;
