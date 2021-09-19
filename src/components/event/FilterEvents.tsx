import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import { eventTypesName } from '@/utils/index';

interface Props {
  isVisible: boolean;
  setVisible: any;
  searchQuery: any;
  setSearchQuery: any;
}

interface ISearch {
  name: string;
  hostingType: string;
  eventType: string;
}

const FilterEvents: React.FC<Props> = ({ isVisible, setVisible, searchQuery, setSearchQuery }) => {
  const handleClose = () => {
    setVisible(false);
  };

  const reset = () => {
    setSearchQuery({
      name: '',
      hostingType: '',
      eventType: '',
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
            <div className="my-3">
              <OutlinedInput
                fullWidth
                color="primary"
                type="text"
                name="name"
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
                  value={searchQuery.eventType}
                  label="type"
                  onChange={(event) =>
                    setSearchQuery({ ...searchQuery, eventType: event.target.value as ISearch['eventType'] })
                  }
                >
                  <MenuItem value="" disabled>
                    Select Type
                  </MenuItem>
                  {Object.entries(eventTypesName).map((event, i) => (
                    <MenuItem key={i} value={event[0]}>
                      {event[1]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <FormControl color="primary" variant="outlined" className="w-1/2 sm:w-full">
              <InputLabel id="pageSize-select-outlined-label">Hosting Type</InputLabel>
              <Select
                labelId="hostingType-select-outlined-label"
                id="hostingType-select-outlined-label"
                name="hostingType"
                value={searchQuery.hostingType}
                label="Hosting Type"
                onChange={(event) =>
                  setSearchQuery({ ...searchQuery, hostingType: event.target.value as ISearch['hostingType'] })
                }
              >
                <MenuItem value="" disabled>
                  Select Hosting Type
                </MenuItem>
                <MenuItem value="venue">Venue</MenuItem>
                <MenuItem value="online">Online</MenuItem>
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

export default FilterEvents;
