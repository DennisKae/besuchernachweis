import * as React from 'react';
import clsx from 'clsx';
import {
  Grid,
  Typography,
  ButtonGroup,
  Button,
  Paper,
  Input,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
  Divider,
  Fab,
  useMediaQuery,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import { PropertyProps, EditModalContentProps, RoomProps } from '../../types';
import useTranslations from '../../hooks/useTranslations';
import Modal from '../Modal';
import Dialog from '../Dialog';
import useStyles from './style';

const EditModalContent: React.FunctionComponent<EditModalContentProps> = ({
  id,
  title,
  onSaveClick,
  onExitClick,
}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState<string>(title);
  return (
    <Paper className={classes.paper}>
      <Typography variant="body1">
        Bitte geben Sie eine Bezeichnung ein
      </Typography>

      <Input
        placeholder="Bezeichnung"
        className={classes.input}
        value={value}
        onChange={event => setValue(event.target.value)}
        style={{ marginTop: '24px', marginBottom: '24px' }}
      />

      <Grid container justify="space-between">
        <Button
          variant="contained"
          color="primary"
          disabled={value === title}
          onClick={() => onSaveClick({ title: value, id })}
        >
          Speichern
        </Button>
        <Button variant="contained" color="secondary" onClick={onExitClick}>
          Abbrechen
        </Button>
      </Grid>
    </Paper>
  );
};

const Property: React.FunctionComponent<{
  properties: Array<PropertyProps>;
}> = ({ properties }) => {
  const [showEditModal, setShowEditModal] = React.useState<boolean>(false);
  const [showDeleteDialog, setShowDeleteDialog] = React.useState<boolean>(
    false
  );

  const [activeElement, setActiveElement] = React.useState<RoomProps | null>(
    null
  );

  const classes = useStyles();
  const { t } = useTranslations();
  const theme = useTheme();
  const minMd = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
      <Dialog
        open={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
        title="Gebäude 1"
        content={t('are-you-sure-to-delete')}
        onAgree={() => {}}
        onDisagree={() => setShowDeleteDialog(false)}
      />
      <Modal open={showEditModal} onClose={() => setShowEditModal(false)}>
        {activeElement && (
          <EditModalContent
            id={activeElement.id}
            title={activeElement.title}
            onSaveClick={() => {}}
            onExitClick={() => setShowEditModal(false)}
          />
        )}
      </Modal>
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={9} sm={6}>
            <Typography variant="body1">{t('administration')}</Typography>
            <Typography variant="h6">Gebäude & Räume</Typography>
          </Grid>
          <Grid
            item
            xs={3}
            sm={6}
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Fab variant="extended" color="secondary">
              <AddIcon />
              {minMd && 'Gebäude'}
            </Fab>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            {properties.map((property, index) => (
              <ExpansionPanel key={index}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="body1">{property.title}</Typography>
                </ExpansionPanelSummary>
                <Divider />
                <ExpansionPanelDetails>
                  <Grid container>
                    {property.rooms.map((room, index) => (
                      <Grid
                        container
                        key={index}
                        className={clsx(classes.panelDetails, {
                          [classes.oddPanelDetail]: !(index % 2),
                        })}
                      >
                        <Typography
                          key={index}
                          variant="body1"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginRight: 'auto',
                            fontWeight: 500,
                          }}
                        >
                          {room.title}
                        </Typography>
                        <Grid item>
                          <ButtonGroup variant="outlined" color="secondary">
                            <Button
                              onClick={() => {
                                setShowEditModal(true);
                                setActiveElement(room);
                              }}
                            >
                              {t('edit')}
                            </Button>
                            <Button>{t('delete')}</Button>
                          </ButtonGroup>
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                </ExpansionPanelDetails>
                <Divider />
                <ExpansionPanelActions>
                  <Fab variant="extended" color="secondary">
                    <AddIcon />
                    {minMd && 'Zimmer'}
                  </Fab>
                </ExpansionPanelActions>
              </ExpansionPanel>
            ))}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Property;
