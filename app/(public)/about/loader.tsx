import { Skeleton } from "primereact/skeleton"
import {Avatar} from "primereact/avatar";
import {Image} from "primereact/image";
import {Timeline} from "primereact/timeline";
import React from "react";

const Loader = () => {
    return (
        <div className="grid">
            <div className="col-10 col-offset-1">
                <div className="grid">
                    <div className="col-12 lg:col-4">
                        <div className="card">
                            <div className="flex flex-column justify-content-center align-items-center mb-3">
                                <Skeleton shape="circle" size="5rem"/>
                                <Skeleton width="10rem" className="my-3"/>
                                <Skeleton width="12rem" height="1.3rem" className="my-1"/>
                                <Skeleton width="16rem" height="1rem"/>
                            </div>
                            <div className="flex flex-column justify-content-center align-items-center
                            border-top-1 surface-border pt-3 mb-3">
                                <Skeleton className="w-full" height="0.5rem"/>
                                <Skeleton className="w-full" height="0.5rem"/>
                                <Skeleton className="w-full" height="0.5rem"/>
                                <Skeleton className="w-full" height="0.5rem"/>
                                <Skeleton className="w-full" height="0.5rem"/>
                                <Skeleton className="w-full" height="0.5rem"/>
                            </div>
                            <div className="flex flex-column justify-content-center align-items-center border-top-1
                            surface-border pt-3 mb-3">
                                <Skeleton width="15rem" className="mb-3"/>
                                <div className="flex flex-row flex-wrap gap-2 justify-content-start">
                                    <Skeleton width="6rem" height="3.5rem"/>
                                    <Skeleton width="6rem" height="3.5rem"/>
                                    <Skeleton width="6rem" height="3.5rem"/>
                                    <Skeleton width="6rem" height="3.5rem"/>
                                    <Skeleton width="6rem" height="3.5rem"/>
                                </div>
                            </div>
                            <div className="flex flex-column justify-content-center align-items-center
                            border-top-1 surface-border pt-3 mb-3">
                                <Skeleton width="15rem" height="6rem"/>
                            </div>
                            <div className="flex flex-column justify-content-center align-items-center
                            border-top-1 surface-border pt-3 mb-3">
                                <Skeleton width="10rem" className="mb-3"/>
                                <Skeleton className="w-full" height="10rem"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 lg:col-8">
                        <div className="grid">
                            <div className="col-12 md:col-6 lg:col-4">
                                <div className="card mb-0">
                                    <div className="flex justify-content-between mb-2">
                                        <div>
                                            <Skeleton width="5rem" className="mb-3"/>
                                            <Skeleton width="2rem"/>
                                        </div>
                                        <div className="flex align-items-center justify-content-center border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                            <Skeleton size="2.5rem"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-6 lg:col-4">
                                <div className="card mb-0">
                                    <div className="flex justify-content-between mb-2">
                                        <div>
                                            <Skeleton width="5rem" className="mb-3"/>
                                            <Skeleton width="2rem"/>
                                        </div>
                                        <div className="flex align-items-center justify-content-center border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                            <Skeleton size="2.5rem"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-6 lg:col-4">
                                <div className="card mb-0">
                                    <div className="flex justify-content-between mb-2">
                                        <div>
                                            <Skeleton width="5rem" className="mb-3"/>
                                            <Skeleton width="2rem"/>
                                        </div>
                                        <div className="flex align-items-center justify-content-center border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                            <Skeleton size="2.5rem"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card">
                                    <Skeleton width="8rem" className="mb-3"/>
                                    <Skeleton width="35rem" className="mb-3"/>
                                    <Skeleton width="5rem"/>
                                </div>
                            </div>
                            <div className="col-12 md:col-6">
                                <div className="card h-full">
                                    <Skeleton width="9rem" className="mb-4"/>
                                    <Skeleton width="17rem" className="mb-3"/>
                                    <Skeleton width="21rem" className="mb-3"/>
                                    <Skeleton width="15rem" className="mb-3"/>
                                    <Skeleton width="11rem" className="mb-3"/>
                                </div>
                            </div>
                            <div className="col-12 md:col-6">
                                <div className="card">
                                    <Skeleton width="11rem" className="mb-4"/>
                                    <ul className="list-none p-0 m-0">
                                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-2">
                                            <div>
                                                <Skeleton width="6rem" className="mb-1 mr-2"/>
                                                <Skeleton width="4rem" className="mt-1"/>
                                            </div>
                                            <div className="mt-2 md:mt-0 flex align-items-center">
                                                <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{ height: '8px' }}>
                                                    <Skeleton width="6rem" height="0.5rem"/>
                                                </div>
                                                <Skeleton width="2rem" className="ml-3"/>
                                            </div>
                                        </li>
                                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-2">
                                            <div>
                                                <Skeleton width="8rem" className="mb-1 mr-2"/>
                                                <Skeleton width="3rem" className="mt-1"/>
                                            </div>
                                            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                                <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{ height: '8px' }}>
                                                    <Skeleton width="6rem" height="0.5rem"/>
                                                </div>
                                                <Skeleton width="2rem" className="ml-3"/>
                                            </div>
                                        </li>
                                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-2">
                                            <div>
                                                <Skeleton width="5rem" className="mb-1 mr-2"/>
                                                <Skeleton width="7rem" className="mt-1"/>
                                            </div>
                                            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                                <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{ height: '8px' }}>
                                                    <Skeleton width="6rem" height="0.5rem"/>
                                                </div>
                                                <Skeleton width="2rem" className="ml-3"/>
                                            </div>
                                        </li>
                                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-2">
                                            <div>
                                                <Skeleton width="8rem" className="mb-1 mr-2"/>
                                                <Skeleton width="4rem" className="mt-1"/>
                                            </div>
                                            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                                <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{ height: '8px' }}>
                                                    <Skeleton width="6rem" height="0.5rem"/>
                                                </div>
                                                <Skeleton width="2rem" className="ml-3"/>
                                            </div>
                                        </li>
                                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-2">
                                            <div>
                                                <Skeleton width="5rem" className="mb-1 mr-2"/>
                                                <Skeleton width="3rem" className="mt-1"/>
                                            </div>
                                            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                                <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{ height: '8px' }}>
                                                    <Skeleton width="6rem" height="0.5rem"/>
                                                </div>
                                                <Skeleton width="2rem" className="ml-3"/>
                                            </div>
                                        </li>
                                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-2">
                                            <div>
                                                <Skeleton width="6rem" className="mb-1 mr-2"/>
                                                <Skeleton width="4rem" className="mt-1"/>
                                            </div>
                                            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                                <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{ height: '8px' }}>
                                                    <Skeleton width="6rem" height="0.5rem"/>
                                                </div>
                                                <Skeleton width="2rem" className="ml-3"/>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader