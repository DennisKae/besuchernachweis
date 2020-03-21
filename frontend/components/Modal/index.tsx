import * as React from 'react';
import { Modal, Backdrop, Fade } from '@material-ui/core';
import { ModalProps } from '../../types';
import useStyles from './style';

const MyModal: React.FunctionComponent<ModalProps> = ({
  open,
  onClose,
  children,
}) => {
  const classes = useStyles();
  return (
    <Modal
      className={classes.modal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      open={open}
      onClose={onClose}
    >
      <Fade in={open}>{children}</Fade>
    </Modal>
  );
};

export default MyModal;
