import { ICreateBookingActivity } from '@/types/booking';
import { FormHelperText, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import SendIcon from '@material-ui/icons/Send';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { ayoojonApi } from '../../../../config';
import { tokenConfig } from '../../../../utils';

const SendActivity = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { id } = router.query;
  const [text, setText] = useState('');
  const [errorText, setErrorText] = useState<string>();

  const handleValidation = () => {
    const trimmedText = text.trim();
    if (trimmedText.length > 500) {
      setErrorText('Should be less then 500 character');
    } else {
      setErrorText(undefined);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    handleValidation();
    let { value } = event.target as HTMLTextAreaElement | HTMLInputElement;
    setText(value);
  };

  const resetMessage = (_text: string) => {
    const resetText = _text.replace(/(\r\n|\n|\r)/gm, '');
    setText(resetText);
    return resetText;
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSendActivity = async () => {
    const trimmedText = text.trim();
    setErrorText(undefined);

    if (trimmedText.length === 0) {
      setErrorText('Required');
    } else if (trimmedText.length <= 500) {
      let data: any = {
        booking: id,
        text: trimmedText,
        // type: id ? 'service' : 'client',
        type: 'client',
      };

      try {
        const headers = await tokenConfig('WITH-AUTH');
        await ayoojonApi.post(`activities`, data, headers);
        queryClient.invalidateQueries(['user-booking-activityList', `${id}`]);
        setText('');
      } catch (error) {
        setErrorText('Something went wrong! try again later.');
      }
    } else {
      setErrorText('Should be less then 500 character');
    }
  };

  return (
    <div className="mt-2">
      <OutlinedInput
        type="text"
        name="sendNewActivity"
        placeholder="Write your text here .."
        color="primary"
        style={{ backgroundColor: '#F2F2F2' }}
        labelWidth={0}
        fullWidth={true}
        multiline={true}
        minRows={2}
        maxRows={6}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              color="primary"
              aria-label="send activity button"
              onClick={handleSendActivity}
              onMouseDown={handleMouseDown}
            >
              <SendIcon />
            </IconButton>
          </InputAdornment>
        }
        value={text.length === 1 && text === '\n' ? resetMessage(text) : text}
        onChange={handleChange}
        error={!!errorText}
        onBlur={handleValidation}
      />
      {errorText && (
        <FormHelperText filled={true} error={true}>
          {errorText}
        </FormHelperText>
      )}
    </div>
  );
};
export default SendActivity;
