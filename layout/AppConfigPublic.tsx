"use client";

import { PrimeReactContext } from 'primereact/api';
import React, { useContext, useEffect } from 'react';
import { AppConfigProps, LayoutConfig } from '../types/types';
import { LayoutContext } from './context/layoutcontext';
import { Button } from 'primereact/button';

const AppConfigPublic = (props: AppConfigProps) => {
    const { layoutConfig, setLayoutConfig } = useContext(LayoutContext);
    const { changeTheme } = useContext(PrimeReactContext);

    const _changeTheme = (theme: string, colorScheme: string) => {
        changeTheme?.(layoutConfig.theme, theme, 'theme-css', () => {
            setLayoutConfig((prevState: LayoutConfig) => ({ ...prevState, theme, colorScheme }));
        });
    };

    const applyScale = () => {
        document.documentElement.style.fontSize = layoutConfig.scale + 'px';
    };

    useEffect(() => {
        applyScale();
        _changeTheme('lara-light-blue', 'light')
    }, [layoutConfig.scale]);

    return (
    <div className="flex justify-content-end mr-3 mt-3">
        <Button
            icon={layoutConfig.theme == 'lara-light-blue' ? "pi pi-moon" : "pi pi-sun"}
            rounded
            aria-label="Filter"
            onClick={(e) => {
                let newTheme        = layoutConfig.theme == 'lara-light-blue' ? 'lara-dark-blue' : 'lara-light-blue'
                let newColorScheme  = layoutConfig.colorScheme == 'light' ? 'dark' : 'light'
                _changeTheme(newTheme, newColorScheme)
            }}>
        </Button>
    </div>
    );
};

export default AppConfigPublic;
