import axios from 'axios';

export const APP_TITLE = 'Ayoojon';
export const App_DESCRIPTION = 'We organize everything.';

export const config = {
  MAP_KEY: process.env.NEXT_PUBLIC_GOOGLE_KEY!,
  GMAIL_CLIENT_ID: process.env.NEXT_PUBLIC_GMAIL_CLIENT_ID!,
};
export const s3FileUrl = 'https://ayoojon-files.s3.ap-south-1.amazonaws.com/';

export const lambdaAPI = 'https://wpfl5av581.execute-api.ap-south-1.amazonaws.com/dev/';

export const localServer = 'http://localhost:4040/api/v1/';
export const prodServer = 'https://api.ayoojon.com/api/v1/';
// export const server = process.env.NODE_ENV === 'development' ? localServer : prodServer;
export const server = prodServer;

export const ayoojonApi = axios.create({
  baseURL: server,
  // withCredentials: true,
});

export const MAP_KEY = process.env.REACT_APP_GOOGLE_KEY!;
export const REACT_APP_GMAIL_CLIENT_ID = process.env.REACT_APP_GMAIL_CLIENT_ID!;
export const NEXT_PUBLIC_GMAIL_CLIENT_ID = process.env.NEXT_PUBLIC_GMAIL_CLIENT_ID!;
