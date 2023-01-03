import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';

export default function AlertDialog({
  openDialog, outsideTitle, title, content, action, actionTarget, dispatchNeeded,
  snackbar, snackbarText, variant, endIcon, navigateNeeded, navigateTo,
}) {
  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(openDialog);

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    if (navigateNeeded) {
      navigate(navigateTo);
    }
    if (dispatchNeeded) {
      dispatch(action(actionTarget));
    } else {
      action(actionTarget);
    }
    if (snackbar) {
      enqueueSnackbar(snackbarText, { variant: 'success' });
    }
    handleClose();
  };

  return (
    <>
      <Button
        variant={variant}
        onClick={handleClickOpen}
        endIcon={endIcon}
      >
        {outsideTitle}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={
              handleClick
              }
            autoFocus
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

AlertDialog.propTypes = {
  openDialog: PropTypes.bool.isRequired,
  outsideTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  actionTarget: PropTypes.oneOfType([PropTypes.object, PropTypes.bool, PropTypes.number]).isRequired,
  dispatchNeeded: PropTypes.bool.isRequired,
  snackbar: PropTypes.bool,
  snackbarText: PropTypes.string,
  variant: PropTypes.string,
  endIcon: PropTypes.element,
  navigateNeeded: PropTypes.bool,
  navigateTo: PropTypes.string,
};

AlertDialog.defaultProps = {
  snackbar: false,
  snackbarText: '',
  variant: 'text',
  endIcon: null,
  navigateNeeded: false,
  navigateTo: '',
};