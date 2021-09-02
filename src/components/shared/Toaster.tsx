import React from 'react';
import { toast } from 'react-toastify';

toast.configure({
  autoClose: 3000,
  draggable: true,
  hideProgressBar: true,
});

export const customToast = (
  msg: string | number = 'Toast message',
  type: 'default' | 'warning' | 'danger' | 'success' = 'default',
) => {
  const bgColor = {
    default: 'bg-white',
    warning: 'bg-orange-500',
    danger: 'bg-red-600',
    success: 'bg-green-500',
  };
  return toast(
    () => (
      <div className="h-full flex items-center">
        <span className={`${type === 'default' ? 'text-black' : 'text-white'} font-medium`}>{msg}</span>
      </div>
    ),
    { className: `${bgColor[type]} mb-1 last:mb-0`, bodyClassName: 'm-0' },
  );
};
