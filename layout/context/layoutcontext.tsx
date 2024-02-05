'use client'

import React, { useState, createContext } from 'react';
import { LayoutState, ChildContainerProps, LayoutConfig, LayoutContextProps } from '../../types/types';
import Head from 'next/head';
export const LayoutContext = createContext({} as LayoutContextProps);

export const LayoutProvider = ({ children }: ChildContainerProps) => {
    
    const [layoutConfig, setLayoutConfig] = useState<LayoutConfig>({
        ripple: false,
        inputStyle: 'outlined',
        menuMode: 'static',
        colorScheme: 'light',
        theme: 'lara-light-indigo',
        scale: 14
    });

    const [layoutState, setLayoutState] = useState<LayoutState>({
        staticMenuDesktopInactive: true, // sidebar menu active inactive
        overlayMenuActive: false,
        profileSidebarVisible: false,
        configSidebarVisible: false,
        staticMenuMobileActive: false,
        menuHoverActive: false
    });

    const onMenuToggle = () => {
        if (isOverlay()) {
            setLayoutState((prevLayoutState) => ({ ...prevLayoutState, overlayMenuActive: !prevLayoutState.overlayMenuActive }));
        }

        if (isDesktop()) {
            setLayoutState((prevLayoutState) => ({ ...prevLayoutState, staticMenuDesktopInactive: !prevLayoutState.staticMenuDesktopInactive }));
        } else {
            setLayoutState((prevLayoutState) => ({ ...prevLayoutState, staticMenuMobileActive: !prevLayoutState.staticMenuMobileActive }));
        }
    };

    const showProfileSidebar = () => {
        setLayoutState((prevLayoutState) => ({ ...prevLayoutState, profileSidebarVisible: !prevLayoutState.profileSidebarVisible }));
    };

    const isOverlay = () => {
        return layoutConfig.menuMode === 'overlay';
    };

    const isDesktop = () => {
        return window.innerWidth > 991;
    };

    const [token, setToken] = useState("")

    const value: LayoutContextProps = {
        layoutConfig,
        setLayoutConfig,
        layoutState,
        setLayoutState,
        onMenuToggle,
        showProfileSidebar,
        token,
        setToken
    };

    return (
        <LayoutContext.Provider value={value}>
            <>
                <Head>
                    <title>CodeArc</title>

                    <link rel="applie-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>

                    {/* basic meta tags */}
                    <meta charSet="utf-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta name="robots" content="noindex, nofollow"/>
                    <meta name="msapplication-TileColor" content="#0055ab"/>
                    <meta name="theme-color" content="#ffffff"/>
                    
                    {/* open graph meta tags i.e. facebook, linkedin */}
                    <meta property="og:title" content="CodeArc by Nafisa"/>
                    <meta 
                        property="og:description" 
                        content="Explore insightful articles, tutorials, and personal reflections on the ever-evolving landscape of software development at CodeArc."
                    />
                    <meta property="og:image" content="https://codearc.vercel.app/layout/images/logo-dark.svg"/>
                    <meta property="og:url" content="https://codearc.vercel.app"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:ttl" content="604800"/>

                    {/* twitter meta tags */}
                    <meta name="twitter:card" content="https://codearc.vercel.app/layout/images/logo-dark.svg"/>
                    <meta name="twitter:title" content="CodeArc by Nafisa"/>
                    <meta 
                        property="twitter:description" 
                        content="Explore insightful articles, tutorials, and personal reflections on the ever-evolving landscape of software development at CodeArc."
                    />
                    <meta name="twitter:image" content="https://codearc.vercel.app/layout/images/logo-dark.svg"/>

                    {/* fallback meta tags */}
                    <meta 
                        name="description" 
                        content="Explore insightful articles, tutorials, and personal reflections on the ever-evolving landscape of software development at CodeArc."
                    />
                </Head>
                {children}
            </>
        </LayoutContext.Provider>
    );
};
