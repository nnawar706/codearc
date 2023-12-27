"use client";

import { PrimeReactContext } from 'primereact/api';
import React, { useContext, useEffect } from 'react';
import { AppConfigProps, LayoutConfig } from '../types/types';
import { LayoutContext } from './context/layoutcontext';

const AppConfig = (props: AppConfigProps) => {
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
        <>
            <button className="p-link layout-topbar-button" type="button" 
                onClick={(e) => {
                    let newTheme        = layoutConfig.theme == 'lara-light-blue' ? 'lara-dark-blue' : 'lara-light-blue' 
                    let newColorScheme  = layoutConfig.colorScheme == 'light' ? 'dark' : 'light'

                    _changeTheme(newTheme, newColorScheme)
                }}>
                <i className={layoutConfig.theme == 'lara-light-blue' ? 'pi pi-moon' : 'pi pi-sun'}></i>
                <span>{layoutConfig.theme == 'lara-light-blue' ? 'Dark' : 'Light'} Mode</span>
            </button>
        </>
    );
};

export default AppConfig;
