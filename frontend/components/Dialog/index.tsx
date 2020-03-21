import * as React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@material-ui/core/';
import useTranslations from '../../hooks/useTranslations';
import { DialogProps } from '../../types';

const MyDialog: React.FunctionComponent<DialogProps> = ({
  open,
  onClose,
  title,
  content,
  onAgree,
  onDisagree,
}) => {
  const { t } = useTranslations();
  return (
    <Dialog open={open} onClose={onClose}>
      {title && <DialogTitle>{title}</DialogTitle>}
      {content && (
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
        </DialogContent>
      )}
      <DialogActions>
        <Button onClick={onAgree} color="primary">
          {t('yes')}
        </Button>
        <Button onClick={onDisagree} color="primary" autoFocus>
          {t('no')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MyDialog;
