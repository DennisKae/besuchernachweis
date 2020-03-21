import * as React from 'react';
import { locales } from '../utils/locales';
import { LinkProps } from 'next/link';

export type SidebarListItemProps = {
  title: string;
  link: LinkProps;
  icon: React.ReactNode;
};

export type SidebarNavProps = {
  items: SidebarListItemProps[];
};

export type SidebarProps = {
  open: boolean;
  variant: 'permanent' | 'temporary';
  onClose?:
    | ((event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void)
    | undefined;
};

export type TopbarProps = {
  onMenuClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export type ProfileProps = {
  name: string;
  role?: string;
};

export type StatsCardProps = {
  title: string;
  value: string;
};

export type Visits = {
  id: string;
  startDate: React.ReactNode;
  endDate: React.ReactNode;
  name: string;
  firstName: string;
  email: string;
  rooms: Array<string>;
};

export type VisitorTableRowProps = Visits;

export type EnhancedTableToolbarProps = {
  numSelected: number;
};

export type EnhancedTableHeadProps = {
  cells: Array<string>;
};

export type EnhancedTableProps = {
  rows: Array<any>;
  rowsPerPageOptions: Array<number>;
  count: number;
  rowsPerPage: number;
  page: number;
  onChangePage: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => void;
  onChangeRowsPerPage: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  displayOnly: boolean;
  onClickRow: (val: any) => void;
  buttonLabel?: string;
};

export type VisitorSearch = {
  name: string;
  firstName: string;
  startDate: string;
  endDate: string;
};

export type VisitorTableState = {
  skip: number;
  limit: number;
  count: number;
  page: number;
  rows: Array<VisitorTableRowProps>;
  search: VisitorSearch;
};

export type VisitorTableAction =
  | {
      type: 'setVisitors';
      payload: { rows: Array<Visits>; count?: number };
    }
  | { type: 'changePage'; payload: { page: number; skip: number } }
  | { type: 'changeRowsPerPage'; payload: { limit: number } }
  | { type: 'setSearch'; payload: VisitorSearch };

export type Locale = typeof locales[number];
export type Strings = {
  [key in Locale]: {
    [key: string]: string;
  };
};
