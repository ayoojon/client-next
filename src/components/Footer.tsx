import React from 'react';
import { APP_TITLE } from '@/config/index';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="z-50 h-14 flex justify-center items-center bg-primary text-white text-xs text-center font-semibold px-6">
      <p>
        © {new Date().getFullYear()} {APP_TITLE}. All rights reserved.{' '}
        <Link href="/">
          <a className="underline">Terms of Service</a>
        </Link>{' '}
        |{' '}
        <Link href="/">
          <a className="underline">Privacy Policy</a>
        </Link>
      </p>
    </footer>
  );
};
