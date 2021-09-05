import { GoogleLoginResponse, GoogleLoginResponseOffline, useGoogleLogin } from 'react-google-login';
import { ayoojonApi, NEXT_PUBLIC_GMAIL_CLIENT_ID } from '@/config/index';
import Icon from './icons';
import { useRouter } from 'next/router';
import { setAccessToken, setRefreshToken, tokenConfig } from '@/utils/index';
import { useAppDispatch } from './hooks/redux';
import { loginUser } from 'src/stores/UserReducer';
import { customToast } from './Toaster';

const GmailLoginButton = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  // TODO: redirect login
  // const { from } = (location.state as {
  //   from: {
  //     pathname: string;
  //   };
  // }) || { from: { pathname: '/home' } };

  const onSuccess = async (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    res = res as GoogleLoginResponse;
    try {
      const headers = await tokenConfig('WITHOUT-AUTH');
      const response = await ayoojonApi.post('accounts/oauth/google', { idToken: res.tokenId }, headers);
      dispatch(loginUser(response.data.account));
      setAccessToken(response.data.accessToken);
      setRefreshToken(response.data.refreshToken);
      customToast('Successfully login with Gmail.', 'success');
      router.replace('/');
    } catch (error) {
      customToast('Something went wrong.', 'danger');
    }
  };

  const onFailure = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    res = res as GoogleLoginResponse;
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: NEXT_PUBLIC_GMAIL_CLIENT_ID,
    isSignedIn: false,
    cookiePolicy: 'single_host_origin',
  });

  return (
    <button onClick={signIn} className="flex border w-full py-2 px-5 mt-5 rounded-full shadow">
      <Icon name="google" className="h-8" />
      <p className="flex-1 text-xl">Sign in with Google</p>
    </button>
  );
};

export default GmailLoginButton;
