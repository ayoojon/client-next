import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import { serviceNames } from '@/utils/index';

interface Props {
  isVisible: boolean;
  setVisible: any;
  searchQuery: any;
  setSearchQuery: any;
}

interface ISearch {
  name: string;
  serviceType: string;
}

export const FilterServices: React.FC<Props> = ({ isVisible, setVisible, searchQuery, setSearchQuery }) => {
  const handleClose = () => {
    setVisible(false);
  };

  const reset = () => {
    setSearchQuery({
      name: '',
      serviceType: '',
    });
    setVisible(false);
  };
  return (
    <Dialog
      fullWidth={true}
      maxWidth={'md'}
      open={isVisible}
      onClose={setVisible}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">
        <div className="border-b">Filters</div>
      </DialogTitle>
      <DialogContent>
        <div id="scroll-dialog-description">
          <div className="my-3">
            <OutlinedInput
              fullWidth
              color="primary"
              type="text"
              name="name"
              defaultValue=""
              placeholder="Enter Name"
              labelWidth={0}
              className="w-full my-2 sm:my-0"
              onChange={(event) => setSearchQuery({ ...searchQuery, name: event.target.value as ISearch['name'] })}
            />
          </div>
          <div className="my-3">
            <FormControl color="primary" variant="outlined" className="w-1/2 sm:w-full">
              <InputLabel id="pageSize-select-outlined-label">Type</InputLabel>
              <Select
                labelId="type-select-outlined-label"
                id="type-select-outlined-label"
                name="type"
                defaultValue=""
                // value={searchQuery.serviceType}
                label="type"
                onChange={(service) =>
                  setSearchQuery({ ...searchQuery, serviceType: service.target.value as ISearch['serviceType'] })
                }
              >
                <MenuItem value="" disabled>
                  Select Type
                </MenuItem>
                {Object.entries(serviceNames).map((event, i) => (
                  <MenuItem key={i} value={event[0]}>
                    {event[1]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={reset}>
          reset
        </Button>
        <Button color="primary" onClick={handleClose}>
          Show
        </Button>
      </DialogActions>
    </Dialog>
  );
};
