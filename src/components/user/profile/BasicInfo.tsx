import React, { useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { emailRegex, contactNoRegex } from '../../../utils';
import { Controller, useForm } from 'react-hook-form';
import { IUser, IUserBasicInfoUpdate, IUserReducer } from '@/types/user';
import { ayoojonApi } from '../../../config';
import { tokenConfig } from '../../../utils';
import { InputHeader } from '@/components/shared/InputHeader';
import { Button, OutlinedInput } from '@mui/material';
import { useAppDispatch } from '@/components/shared/hooks/redux';
import { updateUser } from 'src/stores/UserReducer';

interface Props {
  user: IUserReducer['user'];
}

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Should be at least 2 characters long')
    .max(32, 'Should be less then 32 characters')
    .required('Required'),
  email: Yup.string().matches(emailRegex, 'Invalid email format').required('Required'),
  contactNo: Yup.string().matches(contactNoRegex, 'Invalid number').required('Required'),
  address: Yup.string()
    .min(2, 'Should be at least 2 characters long')
    .max(350, 'Should be less then 350 characters')
    .required('Required'),
});

const BasicInfo: React.FC<Props> = ({ user }) => {
  const dispatch = useAppDispatch();
  interface IInitialValues extends IUserBasicInfoUpdate {
    email: IUser['email'];
  }
  const {
    handleSubmit,
    control,
    formState: { errors },
    formState: { isDirty, isSubmitting },
  } = useForm<IInitialValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: user ? user.name : '',
      email: user ? user.email : '',
      contactNo: user ? user.contactNo : '',
      address: user ? user.address : '',
    },
  });
  const [error, setError] = useState<string>();

  const onSubmit = async (data: IUserBasicInfoUpdate) => {
    setError(undefined);
    try {
      const headers = await tokenConfig('WITH-AUTH');
      const response = await ayoojonApi.put('accounts/basic-info', data, headers);
      dispatch(updateUser(data));
    } catch (error) {
      setError('Somthing went worng');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
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

        <div>
          <InputHeader label="User Name" />
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <OutlinedInput
                error={!!errors['name']}
                labelWidth={0}
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
          <InputHeader label="Address" />
          <Controller
            control={control}
            name="address"
            render={({ field }) => (
              <OutlinedInput
                error={!!errors['address']}
                labelWidth={0}
                fullWidth
                type="text"
                placeholder="Enter your address"
                {...field}
              />
            )}
          />
          {errors?.['address'] && (
            <p className="text-red-500 text-xs italic font-medium mt-1">{errors?.['address']['message']}</p>
          )}
        </div>
        <div>
          <InputHeader label="Contact Number" />
          <Controller
            control={control}
            name="contactNo"
            render={({ field }) => (
              <OutlinedInput
                error={!!errors['contactNo']}
                labelWidth={0}
                fullWidth
                type="text"
                placeholder="Enter your contact number"
                {...field}
              />
            )}
          />
          {errors?.['contactNo'] && (
            <p className="text-red-500 text-xs italic font-medium mt-1">{errors?.['contactNo']['message']}</p>
          )}
        </div>
        {error && <p className="text-red-500 text-sm font-semibold">{error}</p>}
      </div>
      {isDirty && (
        <div className="flex justify-end mt-6">
          <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
            Update
          </Button>
        </div>
      )}
    </form>
  );
};
export default BasicInfo;
