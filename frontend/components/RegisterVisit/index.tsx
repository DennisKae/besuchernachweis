import * as React from 'react';
import {
  Grid,
  Typography,
  Paper,
  Input,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Button,
} from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';
import Alert from '@material-ui/lab/Alert';
import Table from '../Table';
import useRestClient from '../../hooks/useRestClient';
import useTableSearch from '../../hooks/useTableSearch';
import useTranslations from '../../hooks/useTranslations';
import useStyles from './style';

const INITIAL_FORM_STATE = {
  id: null,
  firstName: '',
  name: '',
  email: '',
  phone: '',
  building: 0,
  rooms: [],
  permissionGranted: false,
};

const RegisterVisit: React.FunctionComponent = () => {
  // hooks
  const classes = useStyles();
  const reducer = useTableSearch<any>();
  const { t } = useTranslations();
  const { client, setIsLoading, setHasError } = useRestClient();
  if (!reducer) return null;

  const { state, dispatch } = reducer;

  async function getBesucherByFilter() {
    const res = await client.getBesucherByFilter({
      skip: state.skip,
      take: state.limit,
    });

    if (res)
      dispatch({
        type: 'setRows',
        payload: {
          rows: res.map((r: any) => ({
            id: r.id,
            vorname: 'Max',
            nachname: 'Mustermann',
            email: 'max@mustermann.de',
          })),
          count: res.length,
        },
      });
  }

  React.useEffect(() => {
    getBesucherByFilter();
  }, [state.page, state.limit]);

  const [buildings, setBuildings] = React.useState<any>(null);

  React.useEffect(() => {
    async function getGebauede() {
      const res = await client.getGebauede();
      if (res) setBuildings(res);
    }
    getGebauede();
  }, []);

  const [rooms, setRooms] = React.useState<any>([]);
  const [formState, setFormState] = React.useState<any>(INITIAL_FORM_STATE);
  const [showSuccessAlert, setShowSuccessAlert] = React.useState(false);

  async function registerBesuch() {
    setIsLoading(true);
    let id: number = formState.id;
    try {
      if (!id) {
        const res = await client.registerBesucher({
          person: {
            name: formState.name,
            vorname: formState.firstName,
            email: formState.email,
            telefon: formState.phone,
          },
          gesundheitsstatus: 'gesund',
        });
        if (res && res.id) {
          id = res.id;
          await getBesucherByFilter();
        }
      }
      await client.registerBesuch({
        besucher: [id],
        raeume: formState.rooms,
      });
      setShowSuccessAlert(true);
      setFormState(INITIAL_FORM_STATE);
    } catch (error) {
      setHasError(true);
    }
    setIsLoading(false);
  }

  return (
    <>
      {showSuccessAlert && (
        <Alert severity="success" onClick={() => setShowSuccessAlert(false)}>
          Neuer Besuch erfolgreich erstellt
        </Alert>
      )}
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">{t('administration')}</Typography>
            <Typography variant="h6">{t('visitor-register')}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">Registrieter Besucher</Typography>
            <Typography variant="h6">Besucher auswählen</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.contentContainer}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <Input
                    className={classes.input}
                    placeholder={t('register-first-name')}
                    value={formState.firstName}
                    onChange={event =>
                      setFormState({
                        ...formState,
                        firstName: event.target.value,
                      })
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
                    <InputLabel>Gebäude</InputLabel>
                    <Select
                      value={formState.building}
                      onChange={event => {
                        setFormState({
                          ...formState,
                          building: event.target.value,
                        });
                        const rooms = buildings
                          .filter((b: any) => b.id === event.target.value)
                          .map((v: any) => v.raeume);
                        if (rooms) setRooms(rooms[0]);
                      }}
                    >
                      {buildings &&
                        buildings.length > 0 &&
                        buildings.map((building: any, index: number) => (
                          <MenuItem key={index} value={building.id}>
                            {building.bezeichnung}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl style={{ width: '100%' }}>
                    <InputLabel>{t('property-rooms')}</InputLabel>
                    {rooms && rooms.length > 0 && (
                      <Select
                        value={formState.rooms}
                        multiple
                        onChange={event => {
                          setFormState({
                            ...formState,
                            rooms: event.target.value,
                          });
                        }}
                        input={<Input />}
                      >
                        {rooms.map((room: any, index: number) => {
                          return (
                            <MenuItem key={index} value={room.id}>
                              {room.bezeichnung}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={async () => registerBesuch()}
                  >
                    {t('register')}
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Table
              rows={state.rows}
              rowsPerPageOptions={[25, 50, 100]}
              count={state.count}
              rowsPerPage={state.limit}
              page={state.page}
              onChangePage={(_: any, newPage: number) => {
                const newSkip =
                  newPage > state.page
                    ? state.skip + state.limit
                    : state.skip - state.limit;
                dispatch({
                  type: 'changePage',
                  payload: { skip: newSkip, page: newPage },
                });
              }}
              onChangeRowsPerPage={event => {
                const limit = Number(event.target.value);
                dispatch({ type: 'changeRowsPerPage', payload: { limit } });
              }}
              uniqueId="id"
              toolbarSettings={{
                title: 'Besucher',
                tooltipSelected: {
                  title: 'Besucher auswählen',
                  icon: <InputIcon />,
                  onClick: ids => {
                    if (ids.length) {
                      const id = ids[0];
                      const user = state.rows.filter(u => u.id === id);
                      if (user.length)
                        setFormState({
                          ...formState,
                          id: user[0].id,
                          firstName: user[0].vorname,
                          name: user[0].nachname,
                          email: user[0].email,
                        });
                    }
                  },
                },
              }}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default RegisterVisit;
