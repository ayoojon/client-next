import React, { useState } from 'react';
import { Button, OutlinedInput } from '@mui/material';
import * as Yup from 'yup';
import { lowercaseRegex, uppercaseRegex, numericRegex, specialCharRegex } from '../../../../utils';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IUserChangePassword } from '@/types/user';
import { ayoojonApi } from '../../../../config';
import { tokenConfig } from '../../../../utils';
import { InputHeader } from '@/components/shared/InputHeader';

interface Props {
  setOpen: any;
}

const userChangePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required('Required'),
  newPassword: Yup.string()
    .matches(lowercaseRegex, 'one lowercase required!')
    .matches(uppercaseRegex, 'one uppercase required!')
    .matches(numericRegex, 'one number required!')
    .matches(specialCharRegex, 'one special character required!')
    .min(8, 'Minimum 8 characters required!')
    .notOneOf([Yup.ref('oldPassword')], 'Should not match with old password!')
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Password must be matched with new password!')
    .required('Required'),
});

const ChangePasswordForm: React.FC<Props> = ({ setOpen }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IUserChangePassword>({
    resolver: yupResolver(userChangePasswordSchema),
  });
  const [error, setError] = useState<string>();

  const onSubmit = async (values: IUserChangePassword) => {
    const headers = await tokenConfig('WITH-AUTH');
    const response = await ayoojonApi.post('accounts/change-password', values, headers);
    if (response.status === 200) {
      setOpen(false);
    } else if (response.status === 400 && response.data.type === 'CustomError') {
      setError('Incorrect password');
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <InputHeader label="New Password" />
        <Controller
          control={control}
          name="oldPassword"
          render={({ field }) => (
            <OutlinedInput
              error={!!errors['oldPassword']}
              labelWidth={0}
              fullWidth
              type="password"
              placeholder="Enter your password"
              {...field}
            />
          )}
        />
        {errors?.['oldPassword'] && (
          <p className="text-red-500 text-xs italic font-medium mt-1">{errors?.['oldPassword']['message']}</p>
        )}
      </div>
      <div>
        <InputHeader label="New Password" />
        <Controller
          control={control}
          name="newPassword"
          render={({ field }) => (
            <OutlinedInput
              error={!!errors['newPassword']}
              labelWidth={0}
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
      <div>
        <InputHeader label="Confirm Password" />
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field }) => (
            <OutlinedInput
              error={!!errors['confirmPassword']}
              labelWidth={0}
              fullWidth
              type="password"
              placeholder="Enter your password"
              {...field}
            />
          )}
        />
        {errors?.['confirmPassword'] && (
          <p className="text-red-500 text-xs italic font-medium mt-1">{errors?.['confirmPassword']['message']}</p>
        )}
      </div>
      {error && <p className="text-red-500 text-sm font-semibold">{error}</p>}
      <div className="flex justify-end mt-6 mb-4">
        <Button variant="contained" color="primary" type="submit">
          Change
        </Button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
