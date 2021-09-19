import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { APP_TITLE } from '@/config/index';
import SEO from '@/components/shared/SEO';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  emailRegex,
  lowercaseRegex,
  numericRegex,
  specialCharRegex,
  uppercaseRegex,
  tokenConfig,
  setAccessToken,
  setRefreshToken,
} from '../utils';
import { Button, OutlinedInput } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';
import { IUserSignup } from '@/types/user';
import Link from 'next/link';
import { InputHeader } from '@/components/shared/InputHeader';
import GmailLoginButton from '@/components/shared/GmailLoginButton';
import Icon from '@/components/shared/icons';
import { ayoojonApi } from '@/config/index';
import { useAppDispatch } from '@/components/shared/hooks/redux';
import { signupUser } from 'src/stores/UserReducer';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Should be at least 2 characters long')
    .max(32, 'Should be less then 32 characters')
    .required('Required'),
  email: Yup.string().matches(emailRegex, 'Invalid email format').required('Required'),
  password: Yup.string()
    .matches(lowercaseRegex, 'one lowercase required!')
    .matches(uppercaseRegex, 'one uppercase required!')
    .matches(numericRegex, 'one number required!')
    .matches(specialCharRegex, 'one special character required!')
    .min(8, 'Minimum 8 characters required!')
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Password must be the same!')
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

const Signup = () => {
  const classes = useStyles();
  const router = useRouter();
  const [error, setError] = useState<string>();
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IUserSignup>({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = async (data) => {
    setError(undefined);
    try {
      const headers = await tokenConfig('WITHOUT-AUTH');
      const res = await ayoojonApi.post('accounts/signup', data, headers);
      dispatch(signupUser(res.data.account));
      setAccessToken(res.data.accessToken);
      setRefreshToken(res.data.refreshToken);
      router.push('/');
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
        <div className="w-full flex flex-1 items-center justify-center lg:w-1/2 mt-14 p-6">
          <div className="w-full max-w-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-2xl sm:text-4xl font-bold">Sign Up</h2>
              <div className="mt-6 sm:mt-10">
                <div>
                  <div>
                    <InputHeader label="User Name" />
                    <Controller
                      control={control}
                      name="name"
                      render={({ field }) => (
                        <OutlinedInput
                          error={!!errors['name']}
                          fullWidth
                          type="text"
                          placeholder="Enter your name"
                          {...field}
                        />
                      )}
                    />

                    {errors?.['name'] && (
                      <p className="text-red-500 text-xs italic font-medium mt-1">{errors?.['name']['message']}</p>
                    )}
                  </div>
                  <div>
                    <InputHeader label="Email Address" />
                    <Controller
                      control={control}
                      name="email"
                      render={({ field }) => (
                        <OutlinedInput
                          error={!!errors['email']}
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
                      render={({ field }) => (
                        <OutlinedInput
                          error={!!errors['password']}
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

                  <div>
                    <InputHeader label="Confirm Password" />
                    <Controller
                      control={control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <OutlinedInput
                          error={!!errors['confirmPassword']}
                          fullWidth
                          type="password"
                          placeholder="Confirm Password"
                          {...field}
                        />
                      )}
                    />
                    {errors?.['confirmPassword'] && (
                      <p className="text-red-500 text-xs italic font-medium mt-1">
                        {errors?.['confirmPassword']['message']}
                      </p>
                    )}
                  </div>
                </div>
                {error && <p className="text-red-500 text-sm font-semibold">{error}</p>}
                <div className="flex justify-between items-center mt-8 sm:mt-24">
                  <div>
                    <Link href="/signin">
                      <a>
                        <span className="font-semibold">Already have an account ?</span>
                      </a>
                    </Link>
                  </div>
                  <Button className={classes.button} variant="contained" color="primary" type="submit">
                    <Icon name="arrow-right" className="h-8" fill="#fff" />
                  </Button>
                </div>
                <GmailLoginButton />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
