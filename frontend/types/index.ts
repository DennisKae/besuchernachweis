import * as React from 'react';
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
