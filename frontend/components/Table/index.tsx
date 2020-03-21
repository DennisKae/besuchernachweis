import * as React from 'react';
import clsx from 'clsx';
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
  Checkbox,
} from '@material-ui/core';
import {
  VisitorTableRowProps,
  EnhancedTableToolbarProps,
  EnhancedTableProps,
} from '../../types';
import useStyles, { useToolbarStyles } from './style';

type EnhancedTableHeadProps = {
  onSelectAllClick: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
  numSelected: number;
  rowCount: number;
};

const cells: Array<Pick<VisitorTableRowProps, 'id'>> = [
  {
    id: 'ID',
  },
  {
    id: 'Beginn',
  },
  {
    id: 'Ende',
  },
  {
    id: 'Name',
  },
  {
    id: 'Vorname',
  },
  {
    id: 'E-Mail',
  },
];

const EnhancedTableHead: React.FunctionComponent<EnhancedTableHeadProps> = ({
  onSelectAllClick,
  numSelected,
  rowCount,
}) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>
        {cells.map(cell => (
          <TableCell key={cell.id} align="left" padding="default">
            {cell.id}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

const EnhancedTableToolbar: React.FunctionComponent<EnhancedTableToolbarProps> = ({
  numSelected,
}) => {
  const classes = useToolbarStyles();
  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
        >
          {numSelected} ausgewählt
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle">
          Besuche
        </Typography>
      )}
    </Toolbar>
  );
};

const EnhancedTable: React.FunctionComponent<EnhancedTableProps> = ({
  rows,
}) => {
  const classes = useStyles();
  const [selected, setSelected] = React.useState<Array<string>>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table className={classes.table}>
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={event => {
                if (event.target.checked) {
                  const newSelecteds = rows.map(n => n.id);
                  setSelected(newSelecteds);
                  return;
                }
                setSelected([]);
              }}
              rowCount={rows.length}
            />
            <TableBody>
              {rows.map((row, index) => {
                const isItemSelected = selected.indexOf(row.id) !== -1;
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    onClick={() => {
                      const selectedIndex = selected.indexOf(row.id);
                      let newSelected: Array<string> = [];

                      if (selectedIndex === -1) {
                        newSelected = newSelected.concat(selected, row.id);
                      } else if (selectedIndex === 0) {
                        newSelected = newSelected.concat(selected.slice(1));
                      } else if (selectedIndex === selected.length - 1) {
                        newSelected = newSelected.concat(selected.slice(0, -1));
                      } else if (selectedIndex > 0) {
                        newSelected = newSelected.concat(
                          selected.slice(0, selectedIndex),
                          selected.slice(selectedIndex + 1)
                        );
                      }

                      setSelected(newSelected);
                    }}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </TableCell>
                    {Object.keys(row).map((k, index) => {
                      if (index === 0)
                        return (
                          <TableCell
                            id={labelId}
                            key={k}
                            component="th"
                            scope="row"
                            padding="none"
                          >
                            {
                              // @ts-ignore
                              row[k]
                            }
                          </TableCell>
                        );
                      return (
                        <TableCell
                          key={k}
                          component="th"
                          scope="row"
                          padding="none"
                        >
                          {
                            // @ts-ignore
                            row[k]
                          }
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[25, 50, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={(_, newPage) => {
            setPage(newPage);
          }}
          onChangeRowsPerPage={event => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0);
          }}
        />
      </Paper>
    </div>
  );
};

export default EnhancedTable;
