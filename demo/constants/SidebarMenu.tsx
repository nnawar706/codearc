

import { AppMenuItem } from '../../types/types';

export const menu: AppMenuItem[] = [
        {
            label: 'Home',
            items: [
                { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' },
                { label: 'My Feed', icon: 'pi pi-fw pi-home', to: '/my-feed' },
                { label: 'Discussions', icon: 'pi pi-fw pi-clone', to: '/discussions' }
            ]
        },
        {
            label: 'Blogs',
            items: [
                { label: 'My Blogs', icon: 'pi pi-fw pi-list', to: '/my-blogs' },
                { label: 'Drafts', icon: 'pi pi-fw pi-home', to: '/blog-drafts' },
                { label: 'Bookmarks', icon: 'pi pi-fw pi-bookmark', to: '/blog-bookmarks' },
                { label: 'Volumes', icon: 'pi pi-fw pi-home', to: '/blog-volumes' },
                { label: 'New Blog', icon: 'pi pi-pencil', to: '/new-draft' }
            ]
        },
        {
            label: 'Others',
            items: [
                { label: 'Reading History', icon: 'pi pi-fw pi-calendar', to: '/uikit/formlayout' },
                { label: 'Payment History', icon: 'pi pi-money-bill', to: '/uikit/input' }
            ]
        }
    ];