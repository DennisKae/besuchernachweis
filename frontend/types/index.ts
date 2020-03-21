import * as React from 'react';
import { locales } from '../utils/locales';
import { LinkProps } from 'next/link';

export type SidebarListItemProps = {
  title: React.ReactNode;
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
  title: React.ReactNode;
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

export type PropertyCardProps = {
  id: string;
  title: string;
  onViewClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onEditClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onDeleteClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  isActive?: boolean;
};

export type RoomProps = {
  id: string;
  title: string;
};

export type PropertyProps = {
  id: string;
  title: string;
  rooms: Array<RoomProps>;
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

export type ModalProps = {
  open: boolean;
  onClose: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
};

export type EditModalContentProps = {
  id: string;
  title: string;
  onSaveClick: (props: { title: string; id: string }) => void;
  onExitClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export type DialogProps = ModalProps & {
  title?: string;
  content?: string;
  onAgree: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onDisagree: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
