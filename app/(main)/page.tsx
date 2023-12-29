/* eslint-disable @next/next/no-img-element */
'use client';
import { Button } from 'primereact/button';
import { Chart } from 'primereact/chart';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { TabView, TabPanel } from 'primereact/tabview';
import { Menu } from 'primereact/menu';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { ProductService } from '../../demo/service/ProductService';
import { LayoutContext } from '../../layout/context/layoutcontext';
import Link from 'next/link';
import { Demo } from '../../types/types';
import { ChartData, ChartOptions } from 'chart.js';

const lineData: ChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: '#2f4860',
            borderColor: '#2f4860',
            tension: 0.4
        },
        {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            backgroundColor: '#00bb7e',
            borderColor: '#00bb7e',
            tension: 0.4
        }
    ]
};

const Feed = () => {
    const [products, setProducts] = useState<Demo.Product[]>([]);
    const menu1 = useRef<Menu>(null);
    const menu2 = useRef<Menu>(null);
    const [lineOptions, setLineOptions] = useState<ChartOptions>({});
    const { layoutConfig } = useContext(LayoutContext);

    const applyLightTheme = () => {
        const lineOptions: ChartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

        setLineOptions(lineOptions);
    };

    const applyDarkTheme = () => {
        const lineOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)'
                    }
                },
                y: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)'
                    }
                }
            }
        };

        setLineOptions(lineOptions);
    };

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []);

    useEffect(() => {
        if (layoutConfig.colorScheme === 'light') {
            applyLightTheme();
        } else {
            applyDarkTheme();
        }
    }, [layoutConfig.colorScheme]);

    return (
        <div className="grid">
            <div className="col-10 col-offset-1 lg:col-8 lg:col-offset-2">
                <div
                    className="px-4 py-5 shadow-2 flex flex-column md:flex-row md:align-items-center justify-content-between mb-3"
                    style={{
                        borderRadius: '1rem',
                        background: 'linear-gradient(0deg, rgba(0, 123, 255, 0.5), rgba(0, 123, 255, 0.5)), linear-gradient(92.54deg, #1C80CF 47.88%, #FFFFFF 100.01%)'
                    }}
                >
                    <div>
                        <div className="text-blue-100 font-medium text-lg mt-2 mb-3">Level up your publishing with our new suite of premium features</div>
                        <div className="text-white font-medium text-3xl">Introducing CodeArc Pro</div>
                    </div>
                    <div className="mt-4 mr-auto md:mt-0 md:mr-0">
                        <Link href="https://blocks.primereact.org" className="p-button font-bold px-5 py-3 p-button-warning p-button-rounded p-button-raised">
                            Upgrade Now
                        </Link>
                    </div>
                </div>

                <div className="grid">
                    <div className="col-12 lg:col-8">
                        hey
                    </div>
                    <div className="hidden lg:block lg:col-4">
                        <div className="ml-2">

                            <div className="card">
                                <div className="flex flex-column">
                                    <h5 className="text-800">Bookmarks</h5>
                                    <div className="flex justify-content-center">
                                        Nothing here yet 👋
                                    </div>
                                </div>
                            </div>

                            {/* challenges/badges section */}

                            <div className="card">
                                <div className="flex flex-column">
                                    <h5 className="text-800">Challenges</h5>
                                    <div>
                                        <TabView>
                                            <TabPanel header="Up For Grabs">
                                                <div className="h-8rem">
                                                    <div className="flex">
                                                        <div className="w-4rem h-4rem bg-primary flex align-items-center justify-content-center my-2 mr-3">2</div>
                                                        <div className="w-15rem h-4rem">
                                                            <div className="">    
                                                                <span className="font-medium">#2Articles1Week</span>
                                                                <p className="text-700">Become better at technical writing; accept CordeArc's writing challenge for four weeks</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="my-3">
                                                    <div className="flex">
                                                        <div className="w-4rem h-4rem bg-primary flex align-items-center justify-content-center my-2 mr-3">2</div>
                                                        <div className="w-15rem h-4rem">
                                                            <div className="">    
                                                                <span className="font-medium">#2Articles1Week</span>
                                                                <p className="text-700">Become better at technical writing; accept CordeArc's writing challenge for four weeks</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel header="Completed">
                                                <div className="my-3">
                                                    <div className="flex">
                                                        <div className="w-4rem h-4rem bg-primary flex align-items-center justify-content-center my-2 mr-3">2</div>
                                                        <div className="w-15rem h-4rem">
                                                            <div className="">    
                                                                <span className="font-medium">#2Articles1Week</span>
                                                                <p className="text-700">Become better at technical writing; accept CordeArc's writing challenge for four weeks</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                        </TabView>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feed;
