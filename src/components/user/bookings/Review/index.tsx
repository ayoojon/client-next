import Icon from '@/components/shared/icons';
import { ICreateBookingRating } from '@/types/booking';
import { ayoojonApi } from '../../../../config';
import { tokenConfig } from '../../../../utils';
import { Button, FormHelperText, OutlinedInput } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useQueryClient } from 'react-query';

interface Props {
  data?: any;
}

const Review: React.FC<Props> = ({ data }) => {
  const router = useRouter();
  const { id } = router.query;
  const [text, setText] = useState('');
  const [errorText, setErrorText] = useState<string>();
  const [rating, setRating] = useState(0);
  const queryClient = useQueryClient();

  const handleValidation = () => {
    const trimmedText = text.trim();
    if (trimmedText.length > 500) {
      setErrorText('Should be less then 500 character');
    } else {
      setErrorText(undefined);
    }
  };

  const handleSubmit = async () => {
    if (rating !== 0 && data) {
      let newData: ICreateBookingRating = {
        service: data.service._id,
        booking: data._id,
        rating,
      };

      if (text.trim().length > 0) {
        newData.text = text.trim();
      }

      try {
        console.log(newData, 'from review');
        const headers = await tokenConfig('WITH-AUTH');
        await ayoojonApi.post(`reviews`, newData, headers);
        queryClient.invalidateQueries(['client-single-bookings-search', `${id}`]);
      } catch (error) {}
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    handleValidation();
    let { value } = event.target as HTMLTextAreaElement | HTMLInputElement;
    setText(value);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 flex justify-center items-center rounded-full bg-primary mt-12 mb-5">
        <Icon name="done-all" className="h-6" fill="#ffffff" />
      </div>
      <h6 className="font-semibold text-center xl:px-20">
        The booking is complete. Please share your review and experience.
      </h6>
      <div className="flex mt-3">
        <div onClick={() => setRating(1)}>
          <Icon
            name="star"
            className={`h-8 fill-current cursor-pointer mx-1 ${1 <= rating ? 'text-primary' : 'text-gray-400'}`}
          />
        </div>
        <div onClick={() => setRating(2)}>
          <Icon
            name="star"
            className={`h-8 fill-current cursor-pointer mx-1 ${2 <= rating ? 'text-primary' : 'text-gray-400'}`}
          />
        </div>
        <div onClick={() => setRating(3)}>
          <Icon
            name="star"
            className={`h-8 fill-current cursor-pointer mx-1 ${3 <= rating ? 'text-primary' : 'text-gray-400'}`}
          />
        </div>
        <div onClick={() => setRating(4)}>
          <Icon
            name="star"
            className={`h-8 fill-current cursor-pointer mx-1 ${4 <= rating ? 'text-primary' : 'text-gray-400'}`}
          />
        </div>
        <div onClick={() => setRating(5)}>
          <Icon
            name="star"
            className={`h-8 fill-current cursor-pointer mx-1 ${5 <= rating ? 'text-primary' : 'text-gray-400'}`}
          />
        </div>
      </div>
      <div className="w-full my-4">
        <OutlinedInput
          type="text"
          name="reviewText"
          placeholder="Give your review"
          color="primary"
          style={{ backgroundColor: '#F2F2F2' }}
          // labelWidth={0}
          fullWidth={true}
          multiline={true}
          minRows={4}
          maxRows={6}
          value={text}
          onChange={handleChange}
          onBlur={handleValidation}
          error={!!errorText}
        />
        {errorText && (
          <FormHelperText filled={true} error={true}>
            {errorText}
          </FormHelperText>
        )}
      </div>
      <Button variant="contained" fullWidth color="primary" disabled={rating === 0} onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default Review;
