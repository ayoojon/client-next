import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Button, makeStyles, OutlinedInput } from '@material-ui/core';
import {
  emailRegex,
  lowercaseRegex,
  uppercaseRegex,
  numericRegex,
  specialCharRegex,
  tokenConfig,
  setAccessToken,
  setRefreshToken,
} from '../utils';
import { useRouter } from 'next/router';
import { IUserSignIn } from '@/types/user';
import { ayoojonApi } from '../config';
import { useAppDispatch } from '@/components/shared/hooks/redux';
import { loginUser } from 'src/stores/UserReducer';
import { InputHeader } from '@/components/shared/InputHeader';
import Link from 'next/link';
import Icon from '@/components/shared/icons';
import GmailLoginButton from '@/components/shared/GmailLoginButton';

const SigninSchema = Yup.object().shape({
  email: Yup.string().matches(emailRegex, 'Invalid email format').required('Required'),
  password: Yup.string()
    .matches(lowercaseRegex, 'one lowercase required!')
    .matches(uppercaseRegex, 'one uppercase required!')
    .matches(numericRegex, 'one number required!')
    .matches(specialCharRegex, 'one special character required!')
    .min(8, 'Minimum 8 characters required!')
    .required('Required'),
});

const useStyles = makeStyles((theme) => ({
  button: {
    margin: 0,
    height: '4rem',
    width: '4rem',
    borderRadius: '100%',
  },
}));

const Signin = () => {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useAppDispatch();

  //TODO: Find a way to redirect login
  // const [redirectUrl, setRedirectUrl] = useState<string>(router.query?.redirectUrl as string);
  const [error, setError] = useState<string>();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IUserSignIn>({
    resolver: yupResolver(SigninSchema),
  });

  const onSubmit = async (data) => {
    setError(undefined);
    try {
      const headers = await tokenConfig('WITHOUT-AUTH');
      const res = await ayoojonApi.post('accounts/signin', data, headers);
      dispatch(loginUser(res.data));
      setAccessToken(res.data.accessToken);
      setRefreshToken(res.data.refreshToken);
    } catch (error) {
      if (
        error?.response?.status === 401 &&
        error?.response?.data.type === 'CustomError' &&
        error?.response?.data.errors.length > 0
      ) {
        if (error?.response?.data.errors[0].fieldName && error?.response?.data.errors[0].message) {
          setError(error?.response?.data.errors[0].message);
        }
      }
      setError(error?.message || 'Something went wrong.');
    }
  };

  return (
    <div
      className="-mt-14 min-h-screen flex flex-col relative"
      style={{
        backgroundImage: `url(/resources/backgrounds/bg-signin-signup-full.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'left',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full flex flex-1 items-center justify-center lg:w-1/2 mt-14 p-6">
        <div className="w-full max-w-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-2xl sm:text-4xl font-bold">Sign In</h2>
            <div className="mt-6 sm:mt-10">
              <div>
                <div>
                  <InputHeader label="Email Address" />
                  <Controller
                    control={control}
                    name="email"
                    defaultValue=""
                    render={({ field }) => (
                      <OutlinedInput
                        error={!!errors['email']}
                        labelWidth={0}
                        fullWidth
                        type="email"
                        placeholder="Enter your email"
                        {...field}
                      />
                    )}
                  />
                  {errors?.['email'] && (
                    <p className="text-red-500 text-xs italic font-medium mt-1">{errors?.['email']['message']}</p>
                  )}
                </div>
                <div>
                  <InputHeader label="Password" />
                  <Controller
                    control={control}
                    name="password"
                    defaultValue=""
                    render={({ field }) => (
                      <OutlinedInput
                        error={!!errors['password']}
                        labelWidth={0}
                        fullWidth
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                      />
                    )}
                  />
                  {errors?.['password'] && (
                    <p className="text-red-500 text-xs italic font-medium mt-1">{errors?.['password']['message']}</p>
                  )}
                </div>
              </div>
              {error && <p className="text-red-500 text-sm font-semibold">{error}</p>}

              <div className="flex justify-between items-center mt-8">
                <div>
                  <Link href="/forgot-password">
                    <a>
                      <span className="font-semibold">Forgot password ?</span>
                    </a>
                  </Link>
                </div>
                <Button className={classes.button} variant="contained" color="primary" type="submit">
                  <Icon name="arrow-right" className="h-8" fill="#fff" />
                </Button>
              </div>
              <Link href="/signup" passHref>
                <div className="transition duration-500 ease-out h-full border-2 border-teal-900 text-center rounded-md py-2 mt-16 text-teal-900 hover:bg-teal-900 hover:text-white">
                  <span className="font-semibold">Sign Up Here</span>
                </div>
              </Link>
              <GmailLoginButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
