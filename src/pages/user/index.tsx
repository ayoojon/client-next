import { useAppSelector } from '@/components/shared/hooks/redux';
import { useRouter } from 'next/router';
import BasicInfo from '@/components/user/profile/BasicInfo';
import UpdateUserAvatar from '@/components/user/profile/UpdateUserAvatar';
import SEO from '@/components/shared/SEO';

const UserProfile = () => {
  const router = useRouter();
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

  return (
    <div className="max-w-3xl mx-auto my-12 px-6">
      <SEO siteTitle="User Profile" />
      <div className="flex justify-center items-center mb-5">
        <UpdateUserAvatar />
      </div>
      <div className="">
        <h1 className="border-b border-gray-400 px-5 text-2xl font-semibold">Basic information</h1>
        <div className="px-5 mt-6 sm:w-1/2">
          <BasicInfo user={user} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
