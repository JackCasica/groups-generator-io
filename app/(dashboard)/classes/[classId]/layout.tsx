'use client';

import { Id } from '@/convex/_generated/dataModel';
import { useState, useRef } from 'react';
import { ReactNode } from 'react';

type LayoutProps = {
	children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	return <div className=" h-full w-full">{children}</div>;
}
