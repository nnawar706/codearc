'use client';

import type { Metadata } from 'next'
import { LayoutProvider } from '../layout/context/layoutcontext';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '../styles/layout/layout.scss';
import '../styles/demo/Demos.scss';
import { ClerkProvider } from '@clerk/nextjs';

interface RootLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: 'CodeArc',
    description: 'Blog',
    icons: {
        icon: ''
    }
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
                <head>
                    <link id="theme-css" href={`/themes/lara-light-indigo/theme.css`} rel="stylesheet"></link>
                </head>
                <body>
                    <PrimeReactProvider>
                        <LayoutProvider>{children}</LayoutProvider>
                    </PrimeReactProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
