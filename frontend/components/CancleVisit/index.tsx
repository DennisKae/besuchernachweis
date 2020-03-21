import * as React from 'react';
import { Grid, Typography, TextField, Input, Button } from '@material-ui/core';
import useVisitorSearchReducer from '../../hooks/useVisitorSearchReducer';
import useTranslations from '../../hooks/useTranslations';
import Table from '../Table';
import StatsCard from '../StatsCard';
import useStyles from './style';

const Dashboard: React.FunctionComponent = () => {
  const reducer = useVisitorSearchReducer();
  if (!reducer) return null;

  const {
    state: { skip, limit, count, page, rows, search },
    dispatch,
  } = reducer;
  const classes = useStyles();
  const { t } = useTranslations();
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">{t('administration')}</Typography>
          <Typography variant="h6">{t('visitor-cancle')}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container justify="flex-start">
            <TextField
              style={{ paddingRight: '12px' }}
              label={t('search-start-date')}
              type="datetime-local"
              defaultValue={search.startDate}
              onChange={event =>
                dispatch({
                  type: 'setSearch',
                  payload: { ...search, startDate: event.target.value },
                })
              }
            />
            <TextField
              label={t('search-end-date')}
              type="datetime-local"
              defaultValue={search.endDate}
              onChange={event => {
                dispatch({
                  type: 'setSearch',
                  payload: { ...search, endDate: event.target.value },
                });
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} lg={3} xl={3}>
          <StatsCard title={t('visitor-count-for-period')} value="200" />
        </Grid>
        <Grid item xs={12} sm={6} lg={3} xl={3}>
          <StatsCard title={t('visitor-count-current-registered')} value="3" />
        </Grid>
        <Grid item xs={12} sm={6} lg={3} xl={3} alignItems="center">
          <Input
            placeholder={t('search-name')}
            style={{
              width: '100%',
            }}
            value={search.firstName}
            onChange={event =>
              dispatch({
                type: 'setSearch',
                payload: { ...search, firstName: event.target.value },
              })
            }
          />
          <div style={{ marginTop: '8px' }} />
          <Input
            placeholder={t('search-first-name')}
            style={{
              width: '100%',
            }}
            value={search.name}
            onChange={event =>
              dispatch({
                type: 'setSearch',
                payload: { ...search, name: event.target.value },
              })
            }
          />
          <div style={{ marginTop: '8px' }} />
          <Button variant="contained" color="primary">
            {t('search-apply')}
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Table
            rows={rows}
            rowsPerPageOptions={[25, 50, 100]}
            count={count}
            rowsPerPage={limit}
            page={page}
            onChangePage={(_: any, newPage: number) => {
              const newSkip = newPage > page ? skip + limit : skip - limit;
              dispatch({
                type: 'changePage',
                payload: { skip: newSkip, page: newPage },
              });
            }}
            onChangeRowsPerPage={event => {
              const limit = Number(event.target.value);
              dispatch({ type: 'changeRowsPerPage', payload: { limit } });
            }}
            displayOnly={false}
            onClickRow={val => console.log(val)}
            buttonLabel="Abmelden"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
