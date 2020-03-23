import * as React from 'react';
import moment from 'moment';
import { Grid, Typography } from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';
import useRestClient from '../../hooks/useRestClient';
import useTableSearch from '../../hooks/useTableSearch';
import useTranslations from '../../hooks/useTranslations';
import Table from '../Table';
import useStyles from './style';
import { GetBesuchByFilterInput, TableState } from '../../types';

function mapStateToReqBody(
  state: Omit<TableState<any>, 'Rows'>
): GetBesuchByFilterInput {
  return {
    skip: state.skip,
    take: state.limit,
  };
}

const CancleVisit: React.FunctionComponent = () => {
  const reducer = useTableSearch<any>();
  const { client, setIsLoading, setHasError } = useRestClient();
  if (!reducer) return null;

  const { state, dispatch } = reducer;

  async function getBesuchByFilter() {
    const res = await client.getBesuchByFilter(mapStateToReqBody(state));
    if (res)
      dispatch({
        type: 'setRows',
        payload: {
          rows: res.map(p => ({
            id: p.id,
            'start-date': `${moment(p.startzeit).format('DD.MM.YYYY, HH:mm')}`,
            name: `${p.besucher[0].person.name}, ${p.besucher[0].person.vorname}`,
            'property-rooms': p.raeume.map(r => `${r.bezeichnung}`).join(', '),
          })),
          count: res.length,
        },
      });
  }

  async function setBesuchEndzeitpunkt(ids: Array<string | number>) {
    setIsLoading(true);
    try {
      for (const id of ids) {
        await client.setBesuchEndzeitpunkt({
          besuchId: Number(id),
          endzeit: moment().toISOString(),
        });
      }
      await getBesuchByFilter();
    } catch (error) {
      setIsLoading(false);
      setHasError(true);
    }
  }

  React.useEffect(() => {
    getBesuchByFilter();
  }, [state.page, state.limit]);

  const classes = useStyles();
  const { t } = useTranslations();
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">{t('administration')}</Typography>
          <Typography variant="h6">{t('visitor-cancle')}</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
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
              title: t('visitor-current-registered'),
              tooltipSelected: {
                title: t('visitor-cancle'),
                icon: <InputIcon />,
                onClick: async ids => setBesuchEndzeitpunkt(ids),
              },
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default CancleVisit;
