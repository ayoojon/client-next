import { useAppDispatch, useAppSelector } from '@/components/shared/hooks/redux';
import { Button, CircularProgress } from '@mui/material';
import Axios from 'axios';
import React, { useState } from 'react';
import { ayoojonApi, lambdaAPI, s3FileUrl } from '../../../config';
import { tokenConfig } from '../../../utils';
import { imgLoader } from '@/utils/next';
import Image from 'next/image';
import userImg from '@/components/shared/resources/user-avatar.jpg';
import { updateAvatar } from 'src/stores/UserReducer';

const UserAvatarUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(0);
  const [error, setError] = useState<string>();
  const sizeLimit = 1;

  const dispatch = useAppDispatch();

  let { user } = useAppSelector((state) => {
    return { user: state.userReducer.user };
  });

  const checkMimetype = ['image/png', 'image/gif', 'image/jpeg', 'image/jpg'];

  const imageChangeHandler = (event: any) => {
    if (event.target.files) {
      const _file = event.target.files[0];
      if (_file) {
        if (!checkMimetype.includes(_file.type)) {
          setFile(null);
          setError('This file format is not supported');
          return;
        } else if (_file.size / 1024 / 1024 > sizeLimit) {
          setFile(null);
          setError(`Image should be less then ${sizeLimit} MB`);
          return;
        } else {
          setFile(_file);
          setImagePreviewUrl(URL.createObjectURL(_file));
          setError('');
          return;
        }
      }
    }
  };

  const onSubmit = async () => {
    try {
      if (file && user) {
        setLoading(true);

        const pictureType = file.name.split('.').pop();
        const fileName = `users/${user._id}/avatar-${Date.now()}.${pictureType}`;

        const presignedurlRes = await Axios.post(lambdaAPI + 'upload/single-secure', { fileName });

        await Axios.put(presignedurlRes.data.presigned_url, file, {
          headers: {
            'Content-Type': file.type,
          },
          onUploadProgress: (progress) => setCompleted(Math.round((progress.loaded / progress.total) * 100)),
        });

        const data = {
          avatar: fileName,
        };
        const headers = await tokenConfig('WITH-AUTH');
        await ayoojonApi.put('accounts/avatar', data, {
          ...headers,
        });
        dispatch(updateAvatar(data));
      } else {
        setError('Please, select a image.');
      }
      setError(undefined);
      setLoading(false);
      setCompleted(0);
      setFile(null);
    } catch (error) {
      setError(error.message || 'Something went wrong!');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div id="avatar-upload-container" className="h-32 w-32 sm:h-40 sm:w-40 overflow-hidden relative rounded-md mb-2">
        <input accept="image/*" className="hidden" id="browse-file-button" type="file" onChange={imageChangeHandler} />
        <label htmlFor="browse-file-button">
          {/* <img
            className="inline-block w-full h-full object-cover"
            src={imagePreviewUrl ? imagePreviewUrl : user && user.avatar ? s3FileUrl + user.avatar : userImg}
            alt="profile"
          /> */}

          <Image
            loader={imgLoader(s3FileUrl)}
            className="inline-block w-full h-full object-cover"
            src={imagePreviewUrl ? imagePreviewUrl : user && user.avatar ? user.avatar : userImg}
            alt="location"
            width="320"
            height="320"
          />

          <div
            id="avatar-upload"
            className="invisible absolute inset-0 flex items-center justify-center cursor-pointer border-2 border-gray-900 rounded-md"
            style={{
              background: '#ffffff9e',
            }}
          >
            <span className="font-semibold sm:text-xl">Upload photo</span>
          </div>
        </label>
      </div>
      {error && <span className="mb-1 text-red-600">{error}</span>}
      {file && (
        <div className="relative">
          {loading ? (
            <CircularProgress variant="determinate" value={completed} />
          ) : (
            <Button variant="contained" color="primary" component="span" onClick={onSubmit}>
              Upload
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default UserAvatarUpload;
