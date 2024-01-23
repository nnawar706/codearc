import { Metadata } from 'next';
import Layout from '../../layout/layout';

interface AppLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: 'CodeArc',
    description: 'Explore insightful articles, tutorials, and personal reflections on the ever-evolving landscape of software development at CodeArc.',
    robots: { index: false, follow: false },
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

export default function AppLayout({ children }: AppLayoutProps) {
    return <Layout>{children}</Layout>;
}
