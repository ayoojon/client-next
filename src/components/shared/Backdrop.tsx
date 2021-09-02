import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import BD from '@material-ui/core/Backdrop/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';

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
