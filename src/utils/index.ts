import decode from 'jwt-decode';
import { eventTypes } from '@/types/event';
import { ayoojonApi } from '../config';
import { serviceTypes } from '@/types/service';

interface IPayload {
  _id: string;
  email: string;
  iat: number;
  exp: number;
  iss: string;
}

export const lowercaseRegex = /(?=.*[a-z])/;
export const uppercaseRegex = /(?=.*[A-Z])/;
export const numericRegex = /(?=.*[0-9])/;
export const specialCharRegex = /(?=.*[!@#$%^&*,.;:'"_=+?`~<>()|/-])/;
export const emailRegex = /^([a-z\d._-]+)@([a-z\d_-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i;
export const contactNoRegex = /^(\+88)?01[1-9][0-9]{8}$/;
export const passwordRegex = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])[\w!@#$%^&*,.;:'"_=+?`~<>()|/-]+$/;
export const time24HourRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
export const dateFormatRegex = /^([0-2][0-9]|(3)[0-1])(-)(((0)[0-9])|((1)[0-2]))(-)\d{4}$/;

// access token
export const setAccessToken = (token: string) => {
  window.localStorage.setItem('access-token', token);
};
export const removeAccessToken = () => {
  window.localStorage.removeItem('access-token');
};
export const getAccessToken = (): string | null => {
  let accessToken: string | null = null;
  if (typeof window !== undefined && window.localStorage.getItem('access-token')) {
    accessToken = window.localStorage.getItem('access-token');
  } else {
    removeAccessToken();
  }
  return accessToken;
};

// refresh token
export const setRefreshToken = (token: string) => {
  window.localStorage.setItem('refresh-token', token);
};
export const removeRefreshToken = () => {
  window.localStorage.removeItem('refresh-token');
};
export const getRefreshToken = (): string | null => {
  let refreshToken: string | null = null;
  if (typeof window !== undefined && window.localStorage.getItem('refresh-token')) {
    refreshToken = window.localStorage.getItem('refresh-token');
  } else {
    removeRefreshToken();
  }
  return refreshToken;
};

// token expiry check
export const isTokenExpired = (token: string) => {
  try {
    const decoded = decode(token) as IPayload;
    if (decoded.exp > Date.now() / 1000) {
      return false;
    } else return true;
  } catch (err) {
    return true;
  }
};

export const tokenConfig = async (authType: 'WITH-AUTH' | 'WITHOUT-AUTH') => {
  if (authType === 'WITH-AUTH') {
    const at = getAccessToken();
    if (at !== null && !isTokenExpired(at)) {
      return {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${at}`,
        },
      };
    } else {
      // let response: any = await getNewAccessTokenWithRefreshToken();
      return {
        headers: {
          'Content-type': 'application/json',
          // Authorization: `Bearer ${response.data.accessToken}`,
        },
      };
    }
  } else {
    return {
      headers: {
        'Content-type': 'application/json',
      },
    };
  }
};

// export const getNewAccessTokenWithRefreshToken = async () => {
//   try {
//     let refreshToken = getRefreshToken();
//     if (refreshToken !== null) {
//       const headers = await tokenConfig('WITHOUT-AUTH');
//       const response = await ayoojonApi.post('accounts/refresh-token', { refreshToken }, headers);

//       setAccessToken(response.data.accessToken);
//       setRefreshToken(response.data.refreshToken);

//       store.dispatch({
//         type: USER_LOGGED_IN,
//       });

//       return response;
//     } else {
//       removeAccessToken();
//       removeRefreshToken();
//       await store.dispatch({ type: USER_LOGOUT });
//       await persistor.purge();

//       History.push('/signin?msg=session-expired');
//       window.location.reload();
//     }
//   } catch (error) {
//     // toast(ToastMsg, { className: 'bg-teal-900 m-0', bodyClassName: 'm-0' });
//     removeAccessToken();
//     removeRefreshToken();

//     await store.dispatch({ type: USER_LOGOUT });
//     await persistor.purge();

//     // TODO show session expired message on signin page
//     History.push('/signin?msg=session-expired');
//     window.location.reload();

//     return error.response;
//   }
// };

export const isAuthenticate = (): boolean => {
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();

  if (!accessToken || !refreshToken) {
    return false;
  }

  try {
    const { exp } = decode(refreshToken) as IPayload;
    if (exp < new Date().getTime() / 1000) {
      return false;
    }
  } catch (error) {
    return false;
  }

  return true;
};

export const time24To12 = (time24: string) => {
  let ts = time24;
  let H = +ts.substr(0, 2);
  let h: number | string = H % 12 || 12;
  // leading 0 at the left for 1 digit hours
  h = h < 10 ? '0' + h : h;
  const am_pm = H < 12 ? ' AM' : ' PM';
  ts = h + ts.substr(2, 3) + am_pm;
  return ts;
};

export const truncateString = (string: string, maxLength: number) => {
  if (string.length <= maxLength) return string;
  return `${string.substring(0, maxLength).trim()}...`;
};

// TODO: refactor it for percentage calculation
export const taxPrice = { conventionHall: 5000, event: 10 };

export const eventTypesName: {
  [key in eventTypes]: string;
} = {
  appearance: 'Appearance',
  attraction: 'Attraction',
  classOrTrainingOrWorkshop: 'Class / Training / Workshop',
  conference: 'Conference',
  festivalOrFair: 'Festival / Fair',
  concertOrPerformance: 'Concert / Performance',
  meetingOrNetworkingEvent: 'Meeting / Networking Event',
  partyOrSocialGathering: 'Party / Social Gathering',
  tournament: 'Tournament',
  seminarOrTail: 'Seminar / Talk',
  rally: 'Rally',
  gameOrCompetition: 'Game / Competition',
};

export const generateQueryString = <T>(data: T) => {
  let queryString = '';
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const value = data[key as keyof T];
      if (value || typeof value === 'number') {
        if (queryString.length === 0) {
          queryString += `${key}=${value}`;
        } else {
          queryString += `&${key}=${value}`;
        }
      }
    }
  }
  return queryString;
};

export const createMarkup = (data: string) => {
  return {
    __html: data,
  };
};

export const currencyFormat = (c: number, toFixed: number = 0) =>
  c.toFixed(toFixed).replace(/\d(?=(\d{3})+\.)/g, '$&,');

export const customDelay = (t: number) => {
  return new Promise<void>(function (resolve) {
    setTimeout(function () {
      resolve();
    }, t);
  });
};

export const weekCapitalize = (data: any) => {
  const obj = Object.keys(data).filter((k) => data[k] === true);
  const newobj = obj.map((a) => {
    const data = a.charAt(0).toUpperCase() + a.substr(1);
    const newValue = data.slice(0, 3);
    return newValue;
  });
  return newobj;
};
export const serviceNames: {
  [key in serviceTypes]: string;
} = {
  venue: 'Convention Hall',
  'event-management': 'Event Management',
  photographer: 'Photographer',
  caterings: 'Caterings',
  flowers: 'Flowers',
  music: 'Music',
  'invitation-card': 'Invitation Card',
  lightening: 'Lightening',
  videographer: 'Videographer',
  honeymoon: 'Honeymoon',
};
