import React from 'react';
import { Dialog, DialogContent, DialogProps, IconButton } from '@mui/material';
import ChangePasswordForm from './ChangePasswordForm';
import ClearIcon from '@mui/icons-material/Clear';

export const ChangePasswordComponent = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState<DialogProps['maxWidth']>('sm');
  return (
    <>
      <div>
        <h2 className="text-xl font-semibold mt-10">Change password</h2>
        <div className="flex justify-between max-w-xs mt-2">
          <p className="font-bold mt-1">*****************</p>
          <span className="font-semibold text-teal-900 cursor-pointer" onClick={handleClickOpen}>
            Change
          </span>
        </div>
      </div>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <div className="flex justify-between items-center px-6 py-1">
          <h2 className="font-semibold text-xl">Change password</h2>
          <IconButton color="primary" aria-label="close dialog" component="span" onClick={handleClose}>
            <ClearIcon />
          </IconButton>
        </div>
        <DialogContent>
          <ChangePasswordForm setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    </>
  );
};
