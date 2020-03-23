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
  IconButton,
  Checkbox,
  Tooltip,
} from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import useTranslations from '../../hooks/useTranslations';
import { EnhancedTableProps } from '../../types';
import useStyles, { useToolbarStyles } from './style';

function formatValue(val: string | number | Array<any>) {
  if (Array.isArray(val)) return val.join(', ');
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
  onRowClick,
  uniqueId,
  toolbarSettings,
}) => {
  if (rows.length === 0) return null;
  // state
  const [selected, setSelected] = React.useState<Array<string | number>>([]);

  // hooks
  const { t } = useTranslations();
  const classes = useStyles();
  const cells = Object.keys(rows[0])
    .filter(r => r !== uniqueId)
    .map(r => {
      return { key: r, label: t(r) };
    });

  const EnhancedTableHead: React.FunctionComponent = () => {
    return (
      <TableHead style={{ background: grey[200] }}>
        <TableRow>
          <TableCell padding="checkbox"></TableCell>
          {cells.map(cell => (
            <TableCell key={cell.key} align="left" padding="default">
              {cell.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  const EnhancedTableToolbar: React.FunctionComponent = () => {
    const numSelected = selected.length;
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
            {numSelected} {t('table-general-selected')}
          </Typography>
        ) : (
          <Typography className={classes.title} variant="h6">
            {toolbarSettings.title}
          </Typography>
        )}
        {!onRowClick && (
          <>
            {toolbarSettings.tooltipSelected && numSelected > 0 && (
              <Tooltip title={toolbarSettings.tooltipSelected.title}>
                <IconButton
                  onClick={() =>
                    toolbarSettings.tooltipSelected!.onClick(selected)
                  }
                >
                  {toolbarSettings.tooltipSelected.icon}
                </IconButton>
              </Tooltip>
            )}
            {toolbarSettings.tooltipUnselected && numSelected === 0 && (
              <Tooltip title={toolbarSettings.tooltipUnselected.title}>
                <IconButton
                  onClick={() => toolbarSettings.tooltipUnselected!.onClick()}
                >
                  {toolbarSettings.tooltipUnselected.icon}
                </IconButton>
              </Tooltip>
            )}
          </>
        )}
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

  const handleRowClick = (id: string | number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: Array<string | number> = [];
    if (selectedIndex === -1) newSelected = newSelected.concat(selected, id);
    else if (selectedIndex === 0)
      newSelected = newSelected.concat(selected.slice(1));
    else if (selectedIndex === selected.length - 1)
      newSelected = newSelected.concat(selected.slice(0, -1));
    else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar />
        <TableContainer>
          <Table className={classes.table}>
            <EnhancedTableHead />
            <TableBody>
              {rows.map((row, index) => {
                const checked = selected.indexOf(row[uniqueId]) !== -1;
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={index}
                    onClick={() => {
                      const id = row[uniqueId];
                      if (onRowClick) onRowClick(id);
                      else handleRowClick(id);
                    }}
                  >
                    {!onRowClick && (
                      <TableCell padding="checkbox">
                        <Checkbox checked={checked} />
                      </TableCell>
                    )}
                    {cells.map((c, index) => {
                      if (c.key !== uniqueId) {
                        // @ts-ignore
                        const value = formatValue(row[c.key]);
                        return (
                          <EnhancedTableCell key={index}>
                            {value}
                          </EnhancedTableCell>
                        );
                      }
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          labelRowsPerPage={t('table-general-rows-per-page')}
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          component="div"
          onChangePage={onChangePage}
          onChangeRowsPerPage={onChangeRowsPerPage}
          labelDisplayedRows={({ from, to, count }) =>
            `${from}-${to} ${t('table-general-displayed-rows-of')} ${count}`
          }
        />
      </Paper>
    </div>
  );
};

export default EnhancedTable;
