import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/shared/icons/index';
import { AccountDropdown } from './AccountDropdown';
import { Alert, IconButton } from '@mui/material';
import { useAppSelector } from '../shared/hooks/redux';
// import { useSelector } from 'react-redux';
// import { IReducer } from '../../stores/IndexReducer';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { isLogin } = useAppSelector((state) => {
    return { isLogin: !!state.userReducer.user };
  });
  let { user } = useAppSelector((state) => {
    return { user: state.userReducer.user };
  });

  return (
    <>
      {isOpen ? (
        <button
          className="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"
          onClick={() => setIsOpen(false)}
          tabIndex={-1}
        ></button>
      ) : null}
      <header
        className={`fixed top-0 left-0 right-0 px-6 py-1 sm:py-3 bg-white flex-shrink-0 border-b sm:flex sm:justify-between sm:items-center z-50 ${
          isOpen ? 'h-screen overflow-y-auto' : ''
        }`}
      >
        <div className="flex justify-between items-center">
          <div>
            <Link href={`/`}>
              <a className="block">
                <Image src="/resources/logo.png" alt="ayoojon-logo" width={118} height={32} priority />
              </a>
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <IconButton color="primary" aria-label="navbar toggle" component="span" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <Icon name="navbar-open" className="h-6 fill-current" />
              ) : (
                <Icon name="navbar-close" className="h-6 fill-current" />
              )}
            </IconButton>
          </div>
        </div>
        {/* {user &&
          (user.isVerified ? (
            <div></div>
          ) : (
            <div className="flex bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline text-base">Please Verify Your Account</span>
              <Link href="/user/settings">
                <a className="text-center align-middle ml-2 bg-red-500 hover:bg-red-800 text-white  px-2 pb-1 rounded">
                  {' '}
                  go to setting
                </a>
              </Link>
            </div>
          ))} */}
        <nav className={`${isOpen ? 'block' : 'hidden'} sm:block`}>
          <div className="sm:flex sm:items-center">
            {isLogin ? (
              <>
                <AccountDropdown className="sm:ml-5" setIsNavbarOpen={setIsOpen} />
              </>
            ) : (
              <>
                <Link href="/contactus">
                  <a
                    className="transition duration-300 ease-in block font-medium hover:bg-gray-300 rounded px-2 py-1 sm:hover:bg-transparent sm:hover:text-teal-900 mt-1 mb-4 sm:ml-3 sm:mt-0 sm:mb-0"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </a>
                </Link>
                <Link href="/signin">
                  <a
                    className="transition duration-300 ease-in block font-medium hover:bg-gray-300 rounded px-2 py-1 sm:hover:bg-transparent sm:hover:text-teal-900 mt-1 mb-4 sm:ml-3 sm:mt-0 sm:mb-0"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign In / Sign Up
                  </a>
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>
      {/* <div
        className="fixed w-full mt-20 flex justify-center  bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"
        role="alert"
      >
        <span className="block sm:inline text-base">Please Verify Your Account</span>
        <Link href="/user/settings">
          <a className="text-center align-middle ml-2 bg-red-500 hover:bg-red-800 text-white  px-2 pb-1 rounded">
            {' '}
            go to setting
          </a>
        </Link>
      </div> */}

      {user &&
        (user.isVerified ? (
          <div></div>
        ) : (
          <div className="fixed z-20 inset-x-0 top-0 mx-2 sm:mx-6 mt-16">
            <Alert
              action={
                <Link href="/user/settings">
                  <a className=" text-center  justify-center  align-middle bg-red-600 text-white  px-4 rounded">
                    {' '}
                    Verify{' '}
                  </a>
                </Link>
              }
              elevation={6}
              variant="filled"
              severity="error"
            >
              Please Verify Your Account !!
            </Alert>
          </div>
        ))}
    </>
  );
};
