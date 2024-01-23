import { Metadata } from 'next';
import React from 'react';
import LayoutPublic from '../../layout/layout-public';

interface SimpleLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: 'CodeArc',
    description: 'Explore insightful articles, tutorials, and personal reflections on the ever-evolving landscape of software development at CodeArc.',
    viewport: { initialScale: 1, width: 'device-width' },
    openGraph: {
        type: 'website',
        title: 'CodeArc',
        url: 'https://codearc.vercel.app/',
        description: 'Explore insightful articles, tutorials, and personal reflections on the ever-evolving landscape of software development at CodeArc.',
        images: ['https://codearc.vercel.app/layout/images/logo-dark.svg'],
        ttl: 604800
    },
    icons: {
        icon: '/favicon.ico'
    }
};

export default function SimpleLayout({ children }: SimpleLayoutProps) {
    return (<LayoutPublic>{children}</LayoutPublic>);
}
