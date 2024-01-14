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
                    <meta charSet="utf-8" />
                    <meta 
                        name="description" 
                        content="Explore insightful articles, tutorials, and personal reflections on the ever-evolving landscape of software development at CodeArc."
                    />
                    <meta name="robots" content="index, follow"/>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                    <meta property="og:type" content="website"/>
                    <meta property="og:title" content="CodeArc by Nafisa"/>
                    <meta property="og:url" content="https://codearc.vercel.app"/>
                    <meta
                        property="og:description"
                        content="Explore insightful articles, tutorials, and personal reflections on the ever-evolving landscape of software development at CodeArc."
                    />
                </Head>
                {children}
            </>
        </LayoutContext.Provider>
    );
};
