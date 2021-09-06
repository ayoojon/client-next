import { useAppSelector } from '@/components/shared/hooks/redux';
import { useRouter } from 'next/router';
import { Component } from 'react';

const ProtectedRoute = (Component) => {
  return (props) => {
    if (typeof window !== 'undefined') {
    //   const router = useRouter();
    //   const { isLogin } = useAppSelector((state) => {
    //     return { isLogin: !!state.userReducer.user };
    //   });

      if (false) {
        // router.push('/auth/signin');
        return null;
      }

      console.log(Component);
      <Component {...props} />;
    }
    return null;
  };
};

export default ProtectedRoute;
