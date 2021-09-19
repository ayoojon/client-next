import { createStyles, makeStyles } from '@mui/styles';
import BD from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const useStyles = makeStyles((theme) =>
  createStyles({
    backdrop: {
      zIndex: 99,
      color: '#fff',
    },
  }),
);

interface props {
  open: boolean;
}

const Backdrop: React.FC<props> = ({ open }) => {
  const classes = useStyles();
  return (
    <BD className={classes.backdrop} open={open}>
      <CircularProgress color="inherit" />
    </BD>
  );
};

export default Backdrop;
