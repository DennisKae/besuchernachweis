import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Toolbar,
  Typography,
  Paper,
  Button,
} from '@material-ui/core';
import { VisitorTableRowProps, EnhancedTableProps } from '../../types';
import useStyles, { useToolbarStyles } from './style';

const cells: Array<Pick<VisitorTableRowProps, 'id'> & {
  key: string | null;
}> = [
  {
    id: 'ID',
    key: 'id',
  },
  {
    id: 'Beginn',
    key: 'startDate',
  },
  {
    id: 'Ende',
    key: 'endDate',
  },
  {
    id: 'Name',
    key: 'name',
  },
  {
    id: 'Vorname',
    key: 'firstName',
  },
  {
    id: 'E-Mail',
    key: 'email',
  },
  {
    id: 'Räume',
    key: 'rooms',
  },
  {
    id: '',
    key: 'action',
  },
];

const cellKeys = cells.map(cell => cell.key);

const EnhancedTableHead: React.FunctionComponent = () => {
  return (
    <TableHead>
      <TableRow>
        {cells.map(cell => (
          <TableCell key={cell.id} align="left" padding="default">
            {cell.id}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

const EnhancedTableToolbar: React.FunctionComponent = () => {
  const classes = useToolbarStyles();
  return (
    <Toolbar className={classes.root}>
      <Typography className={classes.title} variant="h6" id="tableTitle">
        Besuche
      </Typography>
    </Toolbar>
  );
};

const EnhancedTableCell: React.FunctionComponent = ({ children }) => {
  const classes = useStyles();
  return (
    <TableCell
      className={classes.cell}
      component="th"
      scope="row"
      padding="none"
    >
      {children}
    </TableCell>
  );
};

const EnhancedTable: React.FunctionComponent<EnhancedTableProps> = ({
  rows,
  rowsPerPageOptions,
  count,
  rowsPerPage,
  page,
  onChangePage,
  onChangeRowsPerPage,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar />
        <TableContainer>
          <Table className={classes.table}>
            <EnhancedTableHead />
            <TableBody>
              {rows.map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {cellKeys.map((k, index) => {
                      if (k === 'rooms')
                        return (
                          <EnhancedTableCell key={index}>
                            {// @ts-ignore
                            row[k].concat(', ')}
                          </EnhancedTableCell>
                        );
                      else if (k === 'action')
                        return (
                          <EnhancedTableCell key={index}>
                            <Button variant="outlined" color="secondary">
                              Abmelden
                            </Button>
                          </EnhancedTableCell>
                        );
                      else
                        return (
                          <EnhancedTableCell key={index}>
                            {
                              // @ts-ignore
                              row[k]
                            }
                          </EnhancedTableCell>
                        );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          labelRowsPerPage="Besuche pro Seite"
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          component="div"
          onChangePage={onChangePage}
          onChangeRowsPerPage={onChangeRowsPerPage}
          labelDisplayedRows={({ from, to, count }) =>
            `${from}-${to} von ${count}`
          }
        />
      </Paper>
    </div>
  );
};

export default EnhancedTable;
