import { APP_TITLE, s3FileUrl, server } from '@/config/index';
import Axios from 'axios';
import React from 'react';

const PhotoList = () => {
  return (
    <div>
      <h1>Photo List</h1>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  console.log(params);
  const { data } = await Axios.get(`${server}services/url/${params.url}`);
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { service: data.service },
  };
}

export default PhotoList;
