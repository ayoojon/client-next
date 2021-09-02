import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/shared/icons/index';
import { AccountDropdown } from './AccountDropdown';
import { IconButton } from '@material-ui/core';
// import { useSelector } from 'react-redux';
// import { IReducer } from '../../stores/IndexReducer';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  // const { isLogin } = useSelector((state: IReducer) => {
  //   return { isAdmin: state.userReducer.user?.type === 'admin', isLogin: state.userReducer.isLogin };
  // });

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
                <Image src="/resources/logo.png" alt="ayoojon-logo" width={118} height={32} />
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
        <nav className={`${isOpen ? 'block' : 'hidden'} sm:block`}>
          <div className="sm:flex sm:items-center">
            {isLogin ? (
              <>
                <AccountDropdown className="sm:ml-5" setIsNavbarOpen={setIsOpen} />
              </>
            ) : (
              <>
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
    </>
  );
};
