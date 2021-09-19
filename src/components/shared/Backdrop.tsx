import createStyles from '@mui/material/styles/createStyles';
import makeStyles from '@mui/material/styles/makeStyles';
import BD from '@mui/material/Backdrop/Backdrop';
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';

const useStyles = makeStyles((theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
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
