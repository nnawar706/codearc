'use client';

import {useRouter} from 'next/navigation';
import React, {useContext, useState} from 'react';
import {Button} from 'primereact/button';
import {Password} from 'primereact/password';
import {LayoutContext} from '../../../../layout/context/layoutcontext';
import {classNames} from 'primereact/utils';

const LoginPage = () => {
    const [password, setPassword] = useState('');
    const { layoutConfig } = useContext(LayoutContext);

    const router = useRouter();
    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden', { 'p-input-filled': layoutConfig.inputStyle === 'filled' });

    return (
        <div className={containerClassName}>
            <div className="flex flex-column align-items-center justify-content-center">
                <img src={`/layout/images/logo-${layoutConfig.colorScheme === 'light' ? 'dark' : 'white'}.svg`} alt="Sakai logo" className="mb-5 w-6rem flex-shrink-0" />
                <div
                    style={{
                        borderRadius: '56px',
                        padding: '0.3rem',
                        background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)'
                    }}
                >
                    <div className="w-full surface-card py-8 px-5 sm:px-8" style={{ borderRadius: '53px' }}>
                        <div className="text-center mb-5">
                            <img src="/demo/images/login/avatar.png" alt="Image" height="50" className="mb-3" />
                            <div className="text-900 text-3xl font-medium mb-3">Welcome, Nafisa!</div>
                            <span className="text-600 font-medium">Enter your secret code to proceed.</span>
                        </div>

                        <div>
                            <Password inputId="password1" value={password} onChange={(e) => setPassword(e.target.value)}
                                      placeholder="Secret Code" className="w-full mb-5" inputClassName="w-full p-3 md:w-30rem"></Password>

                            <div className="flex align-items-center justify-content-between mb-3">

                            </div>
                            <Button label="Sign In" className="w-full p-3 text-xl" onClick={() => router.push('/')}></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;