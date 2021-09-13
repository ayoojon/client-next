import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { imgLoader } from '@/utils/next';
import { s3FileUrl } from '@/config/index';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../shared/hooks/redux';
import { logoutUser } from 'src/stores/UserReducer';

interface props {
  className?: string | undefined;
  setIsNavbarOpen: (value: React.SetStateAction<boolean>) => void;
}

export const AccountDropdown: React.FC<props> = ({ className, setIsNavbarOpen }) => {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const user = useAppSelector((state) => state.userReducer.user);

  const handleLogout = async (e: any) => {
    setIsOpen(false);
    setIsNavbarOpen(false);
    dispatch(logoutUser());
    router.push('/');
  };

  return (
    <>
      {/* <div className={`relative hidden sm:block sm:ml-3" ${className || ''}`}>
        <button
          className="relative block h-10 w-10 rounded-full overflow-hidden focus:outline-none "
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image
            loader={imgLoader(s3FileUrl)}
            className="h-full w-full object-cover"
            src={user && user.avatar ? user?.avatar : '/resources/user-avatar.jpg'}
            alt="user-img"
            width="100%"
            height="100%"
          />
        </button>
        {isOpen && (
          <button
            className="fixed inset-0 h-full w-full opacity-50 cursor-default"
            onClick={() => setIsOpen(false)}
            tabIndex={-1}
          ></button>
        )}
        {isOpen && (
          <div
            // bg-black
            className="absolute right-0 mt-3 py-2 w-48 border bg-white rounded-lg shadow-lg"
          >
            <Link href="/user">
              <a
                className="transition duration-300 ease-in-out block px-4 py-2 text-gray-800 hover:bg-gray-300"
              >
                <div className="flex flex-col" onClick={() => {
                  setIsOpen(false);
                  setIsNavbarOpen(false);
                }}>
                  <span className="font-semibold">{user?.name}</span>
                  <span className="text-gray-600">See your profile</span>
                </div>
              </a>
            </Link>
            <Link href="/user/bookings">
              <a
                className="transition duration-300 ease-in-out block px-4 py-2 text-gray-800 hover:bg-gray-300"
                onClick={() => {
                  setIsOpen(false);
                  setIsNavbarOpen(false);
                }}
              >
                My bookings
              </a>
            </Link>
            <Link href="/user/tickets">
              <a
                className="transition duration-300 ease-in-out block px-4 py-2 text-gray-800 hover:bg-gray-300"
                onClick={() => {
                  setIsOpen(false);
                  setIsNavbarOpen(false);
                }}
              >
                My tickets
              </a>
            </Link>
            <Link href="/user/settings">
              <a
                className="transition duration-300 ease-in-out block px-4 py-2 text-gray-800 hover:bg-gray-300"
                onClick={() => {
                  setIsOpen(false);
                  setIsNavbarOpen(false);
                }}
              >
                Settings
              </a>
            </Link>
            <Link href="/user/settings">
              <a
                className="transition duration-300 ease-in-out block px-4 py-2 text-gray-800 hover:bg-gray-300"
                onClick={handleLogout}
              >
                Logout
              </a>
            </Link>
          </div>
        )}
      </div> */}
      {/* mobile view */}
      {/* <div className="pt-2 pb-1 border-t sm:hidden">
        <Link href="/user">
          <a onClick={() => setIsNavbarOpen(false)}>
            <div className="transition duration-300 ease-in-out flex items-center px-2 py-1 rounded hover:bg-gray-300">
              <div className="h-10 w-10 rounded-full overflow-hidden object-cover">
                {/* <Image
                  className="h-full w-full object-cover"
                  src={'/resources/user-avatar.jpg'}
                  alt="user-img"
                  width="100%"
                  height="100%"
                /> */}
                <Image
                  loader={imgLoader(s3FileUrl)}
                  className="h-full w-full object-cover"
                  // src={'/resources/user-avatar.jpg'}
                  src={user && user.avatar ? user?.avatar : '/resources/user-avatar.jpg'}
                  alt="user-img"
                  width="100"
                  height="100"
                />
              </div>
              <div className="ml-5 flex flex-col">
                <span className="font-semibold">{user?.name}</span>
                <span className="text-gray-600">See your profile</span>
              </div>
            </div>
          </a>
        </Link>
        <div className="">
          <Link href="/user/bookings">
            <a
              className="transition duration-300 ease-in-out block px-2 py-1 rounded hover:bg-gray-300"
              onClick={() => setIsNavbarOpen(false)}
            >
              My bookings
            </a>
          </Link>
          <Link href="/user/tickets">
            <a
              className="transition duration-300 ease-in-out block px-2 py-1 rounded hover:bg-gray-300"
              onClick={() => setIsNavbarOpen(false)}
            >
              My tickets
            </a>
          </Link>
          <Link href="/user/settings">
            <a
              className="transition duration-300 ease-in-out block px-2 py-1 rounded hover:bg-gray-300"
              onClick={() => setIsNavbarOpen(false)}
            >
              Settings
            </a>
          </Link>
          <Link href="/user/bookings">
            <a
              className="transition duration-300 ease-in-out block px-2 py-1 rounded hover:bg-gray-300"
              onClick={() => setIsNavbarOpen(false)}
            >
              My bookings
            </a>
          </Link>
          <button
            onClick={handleLogout}
            className="transition duration-300 ease-in-out block px-2 py-1 rounded hover:bg-gray-300"
          >
            Logout
          </button>
        </div>
      </div> */}
    </>
  );
};
