import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { createStyles, FormControl, makeStyles, RadioGroup, Select } from '@mui/material';
const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      minWidth: '100%',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);
// * Radio Field
interface IRadioProps {
  name: string;
  children: React.ReactNode;
  control: Control<any>;
  error: boolean;
}
export const ReactHookFormRadio: React.FC<IRadioProps> = ({ name, children, control, error }) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl} component="fieldset" error={error}>
      <Controller
        name={name}
        control={control}
        render={({ field: { name, value, onChange, onBlur } }) => (
          <RadioGroup name={name} value={value} onChange={onChange} onBlur={onBlur}>
            {children}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};
// * Select Field
interface ISelectProps {
  name: string;
  children: React.ReactNode;
  control: Control<any>;
  error: boolean;
  variant?: 'filled' | 'outlined' | 'standard' | undefined;
  readOnly?: boolean;
  defaultValue?: any;
}
export const ReactHookFormSelect: React.FC<ISelectProps> = ({
  name,
  control,
  defaultValue,
  children,
  error,
  readOnly,
  ...props
}) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { ref, ...fieldProps } }) => (
          <Select
            {...fieldProps}
            {...props}
            innerRef={ref}
            fullWidth
            displayEmpty
            className={classes.selectEmpty}
            inputProps={{ readOnly, 'aria-label': 'Without label' }}
            error={error}
          >
            {children}
          </Select>
        )}
      />
    </FormControl>
  );
};
