'use client';

import {useRouter} from 'next/navigation';
import React, {useContext, useRef, useState} from 'react';
import {Button} from 'primereact/button';
import {LayoutContext} from '../../../../layout/context/layoutcontext';
import {classNames} from 'primereact/utils';
import callToast from '../../../../lib/helper';
import {Toast} from 'primereact/toast';
import {handleError} from '../../../../lib/utils';
import {InputText} from 'primereact/inputtext';
import { Avatar } from 'primereact/avatar';

const LoginPage = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const { layoutConfig, setToken } = useContext(LayoutContext);
    const { push } = useRouter();
    const toast = useRef<Toast | null>(null);
    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden', { 'p-input-filled': layoutConfig.inputStyle === 'filled' });

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        setLoading(true);

        try {
            const payload = {
                secret_code: password
            }

            const res = await fetch(`/api/auth/login`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(payload)
            })

            const resData = await res.json();

            if (res.ok)
            {
                callToast(toast, true, resData?.message);
                setToken(resData?.access_token)
                localStorage.setItem('isLoggedIn', "1")
                push('/dashboard')
            } else {
                callToast(toast, false, resData?.message)
            }
        } catch (error) {
            handleError(error)
        } finally {
            setLoading(false)
        }
    }
    
    return (
        <div className={containerClassName}>
            <Toast ref={toast} />
            <div className="flex flex-column align-items-center justify-content-center">
                <img src={`/layout/images/logo-${layoutConfig.colorScheme === 'light' ? 'dark' : 'white'}.svg`} 
                alt="logo" className="mb-5 w-6rem flex-shrink-0" />
                <div
                    style={{
                        borderRadius: '56px',
                        padding: '0.3rem',
                        background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)'
                    }}
                >
                    <div className="w-full surface-card py-8 px-5 sm:px-8" style={{ borderRadius: '53px' }}>
                        <div className="text-center mb-5">
                            {/* <img src="/demo/images/login/avatar.png" alt="Image" height="50" className="mb-3" /> */}
                            <Avatar className="p-overlay-badge mb-3"
                            image="/demo/images/login/avatar.png" size="xlarge" shape="circle"/>
                            <div className="text-900 text-3xl font-medium mb-3">Welcome, Nafisa!</div>
                            <span className="text-600 font-medium">Enter your secret code to proceed.</span>
                        </div>

                        <div>
                            <span className="p-input-icon-left p-input-icon-right w-full mb-4">
                                <i className="pi pi-lock"></i>
                                <InputText
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    className="w-full md:w-25rem"
                                    placeholder="Secret Code"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <i
                                    className={`pi ${showPassword ? "pi-eye" : "pi-eye-slash"}`}
                                    onClick={() => setShowPassword(!showPassword)}
                                ></i>
                            </span>

                            <div className="flex align-items-center justify-content-between mb-3">

                            </div>
                            <Button 
                            label="Sign In" 
                            className="w-full p-3 text-xl" 
                            onClick={handleSubmit}
                            disabled={loading}></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;