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
import { EnhancedTableHeadProps, EnhancedTableProps } from '../../types';
import useStyles, { useToolbarStyles } from './style';

const EnhancedTableHead: React.FunctionComponent<EnhancedTableHeadProps> = ({
  cells,
}) => {
  return (
    <TableHead>
      <TableRow>
        {cells.map(cell => (
          <TableCell key={cell} align="left" padding="default">
            {cell}
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

function formatValue(val: string | number | Array<any>) {
  if (Array.isArray(val)) return val.concat(', ');
  return val;
}

const EnhancedTable: React.FunctionComponent<EnhancedTableProps> = ({
  rows,
  rowsPerPageOptions,
  count,
  rowsPerPage,
  page,
  onChangePage,
  onChangeRowsPerPage,
  displayOnly,
  onClickRow,
  buttonLabel,
}) => {
  const classes = useStyles();
  if (rows.length) {
    const cells = Object.keys(rows[0]);
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <EnhancedTableToolbar />
          <TableContainer>
            <Table className={classes.table}>
              <EnhancedTableHead cells={cells} />
              <TableBody>
                {rows.map((row, index) => {
                  const keys = Object.keys(row);
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {keys.map((k, index) => {
                        // @ts-ignore
                        const value = formatValue(row[k]);
                        if (keys.length + 1 === index && !displayOnly) {
                          return (
                            <EnhancedTableCell key={index}>
                              <Button
                                variant="outlined"
                                color="secondary"
                                onClick={() => {
                                  if (row['ID']) onClickRow(row['ID']);
                                }}
                              >
                                {buttonLabel}
                              </Button>
                            </EnhancedTableCell>
                          );
                        }

                        return (
                          <EnhancedTableCell key={index}>
                            {value}
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
            labelRowsPerPage="Datensätze pro Seite"
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
  }
  return null;
};

export default EnhancedTable;
