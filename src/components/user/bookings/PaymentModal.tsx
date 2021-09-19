import { Button, Dialog, DialogActions, DialogContent, IconButton } from '@mui/material';
import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
interface Props {
  open: boolean;
  setOpen: any;
  data: any;
}

const PaymentModal: React.FC<Props> = ({ open, setOpen, data }) => {
  return (
    <div>
      <Dialog fullWidth={true} maxWidth={'md'} open={open} onClose={setOpen} aria-labelledby="form-dialog-title">
        <div className="flex justify-between items-center px-6 py-1  border-b">
          <h2 className="font-semibold text-xl">Payment</h2>
          <IconButton color="primary" aria-label="close dialog" component="span" onClick={setOpen}>
            <ClearIcon />
          </IconButton>
        </div>
        <DialogContent>
          <div className="m-2 p-2 ">
            <div className="">
              <div className="my-3">
                <h6 className="font-bold text-lg mt-3">BKash</h6>
                {data.bKash && <p>{data.bKash.number}</p>}
              </div>

              <div className="my-3">
                <h6 className="font-bold text-lg mt-3">Bank</h6>
                {data.bank && (
                  <div className="">
                    <h6 className="font-medium">Name</h6>
                    <p>{data.bank.name}</p>
                    <h6 className="font-medium"> Card Number</h6>
                    <p>{data.bank.cardNumber}</p>
                    <h6 className="font-medium"> CVC</h6>
                    <p>{data.bank.CVC}</p>
                    <h6 className="font-medium"> Expire Date</h6>
                    <p>{data.bank.expireDate}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          {/* <button className=" mt-2 font-medium capitalize text-white bg-primary rounded-md py-2 px-5" onClick={setOpen}>
            Close
          </button> */}
          <div className="flex justify-end">
            <Button variant="contained" color="primary" type="submit" onClick={setOpen}>
              Close
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default PaymentModal;
