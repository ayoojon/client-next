/* eslint-disable @next/next/link-passhref */
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Button, makeStyles, OutlinedInput } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IUserForgotPassword } from '@/types/user';
import { emailRegex, tokenConfig } from '../../utils';
import { ayoojonApi } from '../../config';
import Icon from '../shared/icons';
import { useRouter } from 'next/router';
import { InputHeader } from '../shared/InputHeader';
import Link from 'next/link';

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().matches(emailRegex, 'Invalid email format').required('Required'),
});

const useStyles = makeStyles((theme) => ({
  forgotBtn: {
    margin: 0,
    height: '4rem',
    width: '4rem',
    borderRadius: '100%',
  },
  resetBtn: {
    padding: '0.5rem 3rem',
  },
}));

const ForgotPasswordForm = () => {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string>();
  const classes = useStyles();
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IUserForgotPassword>({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: IUserForgotPassword) => {
    setError(undefined);
    try {
      const headers = await tokenConfig('WITHOUT-AUTH');
      const response = await ayoojonApi.post('accounts/forget-password', data, headers);
      if (response.status === 404 && response.data.type === 'CustomError' && response.data.errors.length > 0) {
        setError(response.data.errors[0].message);
      } else if (response.status === 200) {
        setEmail(data.email);
        setSuccess(true);
      }
    } catch (error) {
      setError('Something went wrong.');
    }
  };

  return (
    <div className="w-full max-w-3xl">
      {success ? (
        <div>
          <h2 className="text-2xl font-semibold text-center">
            We have sent you a link to your email address.
            <br />
            Go to your email address to reset your password.
          </h2>
          <h2 className="text-2xl font-semibold text-center mt-24">
            You will get the mail within 2 minutes. If you don{`&apos`}t try again.
          </h2>
          <div className="flex justify-center mt-6">
            <Button
              variant="contained"
              color="secondary"
              className={classes.resetBtn}
              onClick={async () => {
                const headers = await tokenConfig('WITHOUT-AUTH');
                const response = await ayoojonApi.post('accounts/forget-password', email, headers);
                if (response.status !== 200) {
                  router.push('/forgot-password');
                }
              }}
            >
              Resend
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2 className="text-2xl font-semibold text-center">
              Don&apos;t worry! Forgetting password is normal.
              <br /> Just enter your email address to reset your password
            </h2>
            <div className="sm:px-8 mt-6 sm:mt-10">
              <div>
                <InputHeader label="Email Address" />
                <Controller
                  control={control}
                  name="email"
                  render={({ field }) => (
                    <OutlinedInput
                      error={!!errors['email']}
                      labelWidth={0}
                      fullWidth
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                      readOnly={true}
                    />
                  )}
                />
                {errors?.['email'] && (
                  <p className="text-red-500 text-xs italic font-medium mt-1">{errors?.['email']['message']}</p>
                )}
              </div>
              {error && <p className="text-red-500 text-sm font-semibold">{error}</p>}
              <div className="flex justify-between items-baseline mt-8">
                <div>
                  <Link href="/signin">
                    <a className="">Back to Sign In</a>
                  </Link>
                </div>
                <Button className={classes.forgotBtn} variant="contained" color="primary" type="submit">
                  <Icon name="arrow-right" className="h-8" fill="#fff" />
                </Button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
export default ForgotPasswordForm;
