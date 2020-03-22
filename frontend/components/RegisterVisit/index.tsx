import * as React from 'react';
import {
  Grid,
  Typography,
  Paper,
  Input,
  InputLabel,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  Select,
  MenuItem,
  Switch,
  Button,
} from '@material-ui/core';
import Table from '../Table';
import useTranslations from '../../hooks/useTranslations';
import useStyles from './style';

const CreateNewUser = () => {
  const { t } = useTranslations();
  const classes = useStyles();
  const [formState, setFormState] = React.useState<any>({
    firstName: '',
    name: '',
    email: '',
    phone: '',
    rooms: [],
    permissionGranted: false,
  });
  return (
    <Paper className={classes.contentContainer}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Input
            className={classes.input}
            placeholder={t('register-first-name')}
            value={formState.firstName}
            onChange={event =>
              setFormState({ ...formState, firstName: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            className={classes.input}
            placeholder={t('register-name')}
            value={formState.name}
            onChange={event =>
              setFormState({ ...formState, name: event.target.value })
            }
          />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Input
            className={classes.input}
            type="email"
            placeholder={t('register-email')}
            value={formState.email}
            onChange={event =>
              setFormState({ ...formState, email: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            className={classes.input}
            placeholder={t('register-phone')}
            value={formState.phone}
            onChange={event =>
              setFormState({ ...formState, phone: event.target.value })
            }
          />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <FormControl style={{ width: '100%' }}>
            <InputLabel>{t('property-rooms')}</InputLabel>
            <Select
              value={formState.rooms}
              onChange={event => {
                setFormState({
                  ...formState,
                  rooms: event.target.value,
                });
              }}
              multiple
              input={<Input />}
            >
              <MenuItem value="Raum 2">Raum 2</MenuItem>
              <MenuItem value="Raum 3">Raum 3</MenuItem>
              <MenuItem value="Raum 4">Raum 4</MenuItem>
              <MenuItem value="Raum 1">Raum 1</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={
              <Switch
                checked={formState.permissionGranted}
                onChange={() =>
                  setFormState({
                    ...formState,
                    permissionGranted: !formState.permissionGranted,
                  })
                }
                name="access"
              />
            }
            label={t('register-permission-granted')}
          />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" color="primary">
            {t('register')}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

const RegisterVisit: React.FunctionComponent = () => {
  const classes = useStyles();
  const { t } = useTranslations();
  const [visitorType, setVisitorType] = React.useState('new');
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">{t('administration')}</Typography>
          <Typography variant="h6">{t('visitor-register')}</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset">
            <RadioGroup
              row
              name="visitorType"
              value={visitorType}
              onChange={event => setVisitorType(event.target.value)}
            >
              <FormControlLabel
                value="new"
                control={<Radio />}
                label="Neuer Besucher"
                labelPlacement="start"
                style={{ marginRight: '4px' }}
              />
              <FormControlLabel
                value="registered"
                control={<Radio />}
                label="Bereits regisitriert"
                labelPlacement="end"
                style={{ marginLeft: '4px' }}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            {visitorType === 'new' && <CreateNewUser />}
            {visitorType === 'registered' && (
              <Table
                rows={[
                  {
                    id: '123',
                    name: 'name',
                  },
                ]}
                rowsPerPageOptions={[25, 50, 100]}
                count={1}
                rowsPerPage={25}
                page={0}
                onChangePage={() => {}}
                onChangeRowsPerPage={() => {}}
                displayOnly={false}
                onClickRow={() => {}}
                buttonLabel="Anmelden"
              />
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default RegisterVisit;
