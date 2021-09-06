import { useAppSelector } from './redux';

const useHeader = () => {
  const { authToken } = useAppSelector((state) => {
    return { authToken: state.userReducer.user?.accessToken };
  });

  return {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
  };
};

export default useHeader;
