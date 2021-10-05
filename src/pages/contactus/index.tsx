import React from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { emailRegex, tokenConfig } from '@/utils/index';
import { Controller, useForm } from 'react-hook-form';
import { InputHeader } from '@/components/shared/InputHeader';
import { Button, OutlinedInput } from '@mui/material';
import { useRouter } from 'next/router';
import { ayoojonApi } from '@/config/index';
import { customToast } from '@/components/shared/Toaster';

interface IData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Should be at least 2 characters long')
    .max(32, 'Should be less then 32 characters')
    .required('Required'),
  email: Yup.string().matches(emailRegex, 'Invalid email format').required('Required'),
  subject: Yup.string()
    .min(2, 'Should be at least 2 characters long')
    .max(32, 'Should be less then 32 characters')
    .required('Required'),
  message: Yup.string()
    .min(2, 'Should be at least 2 characters long')
    .max(500, 'Should be less then 500 characters')
    .required('Required'),
});

const defaultValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export const ContactUs = () => {
  const router = useRouter();
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IData>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: IData) => {
    try {
      const headers = await tokenConfig('WITHOUT-AUTH');
      await ayoojonApi.post('shared/contact', data, headers);
      reset();
      // router.push('/');
      customToast('Thank You For Your Message.', 'success');
    } catch (error) {
      customToast('Something went wrong.', 'danger');
    }
  };

  return (
    <div className=" max-w-6xl mx-auto px-6 my-8 spa">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-8 max-w-lg mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold">Contact us</h2>
          <div className="mt-8 space-y-2">
            <div className="">
              <InputHeader label="Your Name" />
              <Controller
                control={control}
                name="name"
                defaultValue=""
                render={({ field }) => (
                  <OutlinedInput
                    error={!!errors['name']}
                    //   labelWidth={0}
                    fullWidth
                    type="text"
                    placeholder="Name"
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
                defaultValue=""
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
            <div className="">
              <InputHeader label="Subject" />
              <Controller
                control={control}
                name="subject"
                defaultValue=""
                render={({ field }) => (
                  <OutlinedInput
                    error={!!errors['subject']}
                    //   labelWidth={0}
                    fullWidth
                    type="text"
                    placeholder="Name"
                    {...field}
                  />
                )}
              />
              {errors?.['subject'] && (
                <p className="text-red-500 text-xs italic font-medium mt-1">{errors?.['subject']['message']}</p>
              )}
            </div>
            <div>
              <InputHeader label="Write Your Message" />
              <Controller
                control={control}
                name="message"
                defaultValue=""
                render={({ field }) => (
                  <OutlinedInput
                    error={!!errors['message']}
                    multiline={true}
                    //   rowsMax={6}
                    rows={6}
                    //   maxRows={4}
                    fullWidth
                    type="text"
                    placeholder="Enter your message "
                    {...field}
                  />
                )}
              />
              {errors?.['message'] && (
                <p className="text-red-500 text-xs italic font-medium mt-1">{errors?.['message']['message']}</p>
              )}
            </div>
            <div className="flex justify-between items-center mt-2 sm:mt-4">
              <Button className="" variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
