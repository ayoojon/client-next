import React, { useState } from 'react';
import * as yup from 'yup';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactNoRegex, emailRegex, tokenConfig } from '../../utils';
import { ayoojonApi } from '@/config/index';
import { customToast } from '@/components/shared/Toaster';
import { InputHeader } from '@/components/shared/InputHeader';
import { OutlinedInput } from '@mui/material';
import useHeader from '../shared/hooks/useHeader';
import { useRouter } from 'next/router';

const validationSchema = yup.object().shape({
  customers: yup
    .array()
    .of(
      yup.object({
        name: yup
          .string()
          .min(2, 'Should be at least 2 characters long')
          .max(32, 'Should be less then 32 characters')
          .required('Required'),
        email: yup.string().matches(emailRegex, 'Invalid email format').required('Required'),
        contactNo: yup.string().matches(contactNoRegex, 'Invalid number').required('Required'),
      }),
    )
    .min(1),
});

interface IData {
  customers: {
    name: string;
    email: string;
    contactNo: string;
  }[];
}

interface Props {
  _id: string;
}

const BuyTicketForm = ({ _id }: Props) => {
  const headers = useHeader();
  const router = useRouter();
  const [error, setError] = useState<string>();

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<IData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      customers: [
        {
          name: '',
          email: '',
          contactNo: '',
        },
      ],
    },
  });
  const watchFieldArray = watch('customers');

  const customerFieldArray = useFieldArray({
    control,
    name: 'customers',
  });

  const onSubmit = handleSubmit(async (data) => {
    setError(undefined);
    try {
      await ayoojonApi.post(`/tickets/events/${_id}/buy`, { customers: watchFieldArray }, headers);
      customToast('Successfully ticket booked!', 'success');
      router.push(`/events/${router.query.url}`);
    } catch (error) {
      if (error?.response?.status === 406) {
        setError('Not enough ticket available!');
      } else {
        setError('Something went wrong.');
      }
    }
  });

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {customerFieldArray.fields.map((item, index) => {
        return (
          <div key={item.id} className="space-y-3">
            <div className="flex justify-between">
              <p className="text-gray-800 font-semibold">Person {index + 1} </p>
              <button className="text-red-500 font-semibold" onClick={() => customerFieldArray.remove(index)}>
                Remove
              </button>
            </div>
            <div>
              <InputHeader label="Name" />
              <Controller
                control={control}
                name={`customers.${index}.name`}
                defaultValue={item.name}
                render={({ field }) => (
                  <OutlinedInput
                    error={!!errors['customers']?.[0]?.name}
                    // labelWidth={0}
                    fullWidth
                    placeholder="Enter your email"
                    {...field}
                  />
                )}
              />
              {errors?.['customers']?.[index]?.['name'] && (
                <p className="text-red-500 text-xs italic font-medium mt-1">
                  {errors?.['customers']?.[index]?.['name']?.['message']}
                </p>
              )}
            </div>
            <div>
              <InputHeader label="Contact No" />
              <Controller
                control={control}
                name={`customers.${index}.contactNo`}
                defaultValue={item.contactNo}
                render={({ field }) => (
                  <OutlinedInput
                    error={!!errors['customers']?.[0]?.contactNo}
                    // labelWidth={0}
                    fullWidth
                    placeholder="Enter your email"
                    {...field}
                  />
                )}
              />
              {errors?.['customers']?.[index]?.['contactNo'] && (
                <p className="text-red-500 text-xs italic font-medium mt-1">
                  {errors?.['customers']?.[index]?.['contactNo']?.['message']}
                </p>
              )}
            </div>
            <div>
              <InputHeader label="Email" />
              <Controller
                control={control}
                name={`customers.${index}.email`}
                defaultValue={item.email}
                render={({ field }) => (
                  <OutlinedInput
                    error={!!errors['customers']?.[0]?.email}
                    // labelWidth={0}
                    fullWidth
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                  />
                )}
              />
              {errors?.['customers']?.[index]?.['email'] && (
                <p className="text-red-500 text-xs italic font-medium mt-1">
                  {errors?.['customers']?.[index]?.['email']?.['message']}
                </p>
              )}
            </div>
          </div>
        );
      })}
      {error && <p className="text-red-500 text-sm font-semibold">{error}</p>}
      <button
        type="button"
        className="w-full py-4 rounded-md bg-blue-500 text-white text-lg font-medium"
        onClick={() => {
          customerFieldArray.append({
            name: '',
            email: '',
            contactNo: '',
          });
        }}
      >
        ADD TICKET
      </button>
      <button type="submit" className="w-full py-4 rounded-md bg-primary text-white text-lg font-medium">
        CONFIRM
      </button>
    </form>
  );
};

export default BuyTicketForm;
