import React from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { emailRegex, tokenConfig } from '@/utils/index';
import { Controller, useForm } from 'react-hook-form';
import { InputHeader } from '@/components/shared/InputHeader';
import { Button, OutlinedInput } from '@mui/material';
import { ayoojonApi } from '@/config/index';
import { customToast } from '@/components/shared/Toaster';
import { useAppDispatch } from '@/components/shared/hooks/redux';
import { updateEmail } from 'src/stores/UserReducer';

interface IData {
  email: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().matches(emailRegex, 'Invalid email format').required('Required'),
});

export const ChangeEmail = ({ user }) => {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<IData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: user.email,
    },
  });

  const onSubmit = async (data: IData) => {
    try {
      console.log(data);
      const headers = await tokenConfig('WITH-AUTH');
      await ayoojonApi.post('accounts/change-email', data, headers);
      customToast('Email Is Updated.', 'success');
      dispatch(updateEmail(data));
    } catch (error) {
      console.log(error);
      customToast('Something went wrong.', 'danger');
    }
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="max-w-xs">
          <InputHeader label="Email Address" />
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <OutlinedInput
                error={!!errors['email']}
                // labelWidth={0}
                fullWidth
                type="text"
                placeholder="Enter your email "
                {...field}
              />
            )}
          />
          {errors?.['email'] && (
            <p className="text-red-500 text-xs italic font-medium mt-1">{errors?.['email']['message']}</p>
          )}
        </div>
        {/* <div className="flex justify-between items-center mt-2 sm:mt-8">
          <Button className="" variant="contained" color="primary" type="submit">
            Change
          </Button>
        </div> */}
        {isDirty && (
          <div className="flex justify-between items-center mt-2 sm:mt-8">
            <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
              Change
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};
