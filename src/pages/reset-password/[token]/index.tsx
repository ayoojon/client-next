import React, { useEffect, useState } from 'react';
import { APP_TITLE, ayoojonApi } from '@/config/index';
import { Helmet } from 'react-helmet';
import { useRouter } from 'next/router';
import { IUserResetPassword } from '@/types/user';
import { lowercaseRegex, numericRegex, specialCharRegex, tokenConfig, uppercaseRegex } from '@/utils/index';
import { customToast } from '@/components/shared/Toaster';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { InputHeader } from '@/components/shared/InputHeader';
import { Button, OutlinedInput } from '@mui/material';

const userChangePasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .matches(lowercaseRegex, 'one lowercase required!')
    .matches(uppercaseRegex, 'one uppercase required!')
    .matches(numericRegex, 'one number required!')
    .matches(specialCharRegex, 'one special character required!')
    .min(8, 'Minimum 8 characters required!')
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Password must be matched with new password!')
    .required('Required'),
});

export const ResetPassword = () => {
  const router = useRouter();
  const { token } = router.query;

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<IUserResetPassword>({
    resolver: yupResolver(userChangePasswordSchema),
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: IUserResetPassword) => {
    try {
      console.log(data);
      const headers = await tokenConfig('WITHOUT-AUTH');
      const response = await ayoojonApi.post(`accounts/reset-password/${token}`, data, headers);
      customToast('Password reset successfully.', 'success');
      router.push('/signin');
    } catch (error) {
      console.log(error);
      customToast('Something went wrong.', 'danger');
    }
  };

  return (
    <>
      <Helmet>
        <title>{`Forgot Password | ${APP_TITLE}`}</title>
      </Helmet>
      <div
        className="-mt-14 min-h-screen flex flex-col relative"
        style={{
          backgroundImage: `url(/resources/backgrounds/bg-forgot.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'left',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="flex flex-1 items-center justify-center mt-14 p-6">
          <div className="w-full sm:max-w-lg md:max-w-xl">
            <h2 className="text-2xl font-semibold mb-2">Reset password</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="">
                <InputHeader label="New Password" />
                <Controller
                  control={control}
                  name="newPassword"
                  render={({ field }) => (
                    <OutlinedInput
                      error={!!errors['newPassword']}
                      // labelWidth={0}
                      fullWidth
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  )}
                />
                {errors?.['newPassword'] && (
                  <p className="text-red-500 text-xs italic font-medium mt-1">{errors?.['newPassword']['message']}</p>
                )}
              </div>

              <div className="">
                <InputHeader label="Confirm Password" />
                <Controller
                  control={control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <OutlinedInput
                      error={!!errors['confirmPassword']}
                      // labelWidth={0}
                      fullWidth
                      type="password"
                      placeholder="Enter your password"
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

              <div className="flex justify-between items-center mt-2 sm:mt-8">
                <Button className="" variant="contained" color="primary" type="submit">
                  Change
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
