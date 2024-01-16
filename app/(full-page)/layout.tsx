import { Metadata } from 'next';
import React from 'react';
import AppConfigPublic from "../../layout/AppConfigPublic";

interface SimpleLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: 'CodeArc',
    description: 'Explore insightful articles, tutorials, and personal reflections on the ever-evolving landscape of software development at CodeArc.',
    viewport: { initialScale: 1, width: 'device-width' },
};

export default function SimpleLayout({ children }: SimpleLayoutProps) {
    
    return (
        <React.Fragment>
            <div>
                <AppConfigPublic simple />
                {children}
            </div>
        </React.Fragment>
    );
}
