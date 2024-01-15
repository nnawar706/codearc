'use client';

import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import { Button } from 'primereact/button';
import { LayoutContext } from '../../../../layout/context/layoutcontext';

const AccessDeniedPage = () => {
    const router = useRouter();
    const { layoutConfig } = useContext(LayoutContext);

    return (
        <div className="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
            <div className="flex flex-column align-items-center justify-content-center">
                <img src={`/layout/images/logo-${layoutConfig.colorScheme === 'light' ? 'dark' : 'white'}.svg`} alt="logo" className="mb-5 w-6rem flex-shrink-0" />
                <div
                    style={{
                        borderRadius: '56px',
                        padding: '0.3rem',
                        background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)'
                    }}
                >
                    <div className="w-full surface-card py-8 px-5 sm:px-8 flex flex-column align-items-center" style={{ borderRadius: '53px' }}>
                        <div className="flex justify-content-center align-items-center bg-blue-500 border-circle" style={{ height: '3.2rem', width: '3.2rem' }}>
                            <i className="pi pi-fw pi-exclamation-circle text-2xl text-white"></i>
                        </div>
                        <h1 className="text-900 font-bold text-5xl mb-2">Access Denied</h1>
                        <div className="text-600 mb-5">Sorry, you do not have the necessary permissions.</div>
                        <Button icon="pi pi-arrow-left" label="Go Back" text onClick={() => router.push('/')} />
                        <Button label="Login" text onClick={() => router.push('/auth/login')} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccessDeniedPage;
