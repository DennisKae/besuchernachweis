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
  uniqueId: string;
  onRowClick?: (id: string | number) => void;
  toolbarSettings: {
    title: string;
    tooltipSelected?: {
      title: string;
      icon: React.ReactNode;
      onClick: (ids: Array<string | number>) => void;
    };
    tooltipUnselected?: {
      title: string;
      icon: React.ReactNode;
      onClick: () => void;
    };
  };
};

export type VisitorSearch = {
  startDate: string;
  endDate: string;
};

export interface TableState<R> {
  skip: number;
  limit: number;
  count: number;
  page: number;
  rows: Array<R>;
  search: any;
}

export type TableAction<T> =
  | {
      type: 'setRows';
      payload: { rows: Array<T>; count?: number };
    }
  | { type: 'changePage'; payload: { page: number; skip: number } }
  | { type: 'changeRowsPerPage'; payload: { limit: number } }
  | { type: 'setSearch'; payload: VisitorSearch };

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
  onSaveClick: (props: any) => void;
  onExitClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export type DialogProps = ModalProps & {
  title?: string;
  content?: string;
  onAgree: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onDisagree: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

// API
export type PersonViewModel = {
  id: number;
  name: string | null;
  vorname: string | null;
  email: string | null;
  telefon: string | null;
};

export type RaumViewModel = {
  id: number;
  bezeichnung: string;
};

export type GetBesuchByFilterInput = {
  skip: number;
  take: number;
  startzeit?: string;
  endzeit?: string;
};

export type GetBesuchByFilterResponse = Array<{
  id: number;
  startzeit: string;
  endzeit: string | null;
  besucher: Array<{
    id: string;
    person: PersonViewModel;
    gesundheitsstatus: string;
  }>;
  raeume: Array<RaumViewModel>;
}>;

export type SetBesuchEndzeitpunktInput = {
  besuchId: number;
  endzeit: string;
};

export type GetBesucherByFilterInput = {
  name?: string;
  vorname?: string;
  skip: number;
  take: number;
  startzeit?: string;
  endzeit?: string;
};

export type RegisterBesucherInput = {
  person: { name: string; vorname: string; email: string; telefon: string };
  gesundheitsstatus: string;
};

export type RegisterBesuchInput = {
  besucher: Array<number>;
  raeume: Array<number>;
};
