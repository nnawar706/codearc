

import { AppMenuItem } from '../../types/types';

export const menu: AppMenuItem[] = [
        {
            label: 'Home',
            items: [
                { label: 'My Feed', icon: 'pi pi-fw pi-home', to: '/' },
                { label: 'Dashboard', icon: 'pi pi-fw pi-chart-line', to: '/dashboard' },
                { label: 'Discussions', icon: 'pi pi-fw pi-clone', to: '/discussions' }
            ]
        },
        {
            label: 'Blogs',
            items: [
                { label: 'New Blog', icon: 'pi pi-fw pi-pencil', to: '/blogs/new-blog' },
                { label: 'My Blogs', icon: 'pi pi-fw pi-list', to: '/blogs/my-blogs' },
                { label: 'Drafts', icon: 'pi pi-fw pi-file-edit', to: '/blogs/drafts' },
                { label: 'Bookmarks', icon: 'pi pi-fw pi-bookmark', to: '/blogs/bookmarks' },
                { label: 'Volumes', icon: 'pi pi-fw pi-book', to: '/blogs/volumes' }
            ]
        },
        {
            label: 'Others',
            items: [
                { label: 'Reading History', icon: 'pi pi-fw pi-calendar-minus', to: '/others/reading-history' },
                { label: 'Payment History', icon: 'pi pi-fw pi-credit-card', to: '/others/payment-history' }
            ]
        }
    ];