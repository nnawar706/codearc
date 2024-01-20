'use client';

import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import Link from 'next/link';
import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';
import { Avatar } from 'primereact/avatar';


import Loader from './loader';
import { useFetch } from '../../demo/hooks/useFetch';
import BlogCard from '../../demo/components/BlogCard';
import { DataView } from 'primereact/dataview';


const Feed = () => {

    const { data, loading, totalData } = useFetch('/api/blogs/get_all')

    console.log(data, totalData)

    const itemTemplate = (blog: any) => {
        return (
            <div className="col-12">
                <div className="p-3">
                    <div className="card">
                        <div className="flex align-items-center py-2 border-bottom-1 surface-border">
                            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                <Avatar image="/demo/images/login/avatar.png" size="large" shape="circle"/>
                            </div>
                            <span className="text-800 line-height-3 font-medium">
                                Nafisa Nawer<br /><span className="text-600 font-normal">29th Oct, 2023</span>
                            </span>
                        </div>
                        <div className="flex align-items-center flex-column justify-content-center py-2 z-index border-rounded">
                            <div>
                                <img 
                                src={blog.photoUrl} 
                                alt={blog.title.split(" ", 1).join("-")}
                                className="w-full"/>
                            </div>
                            <div className="mt-2">
                                <h5 className="text-800">{blog.title}</h5>
                                {/* <p>{blog.subtitle}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return loading ? <Loader/> : (
        <div className="grid">
            <div className="col-10 col-offset-1 lg:col-8 lg:col-offset-2">
                <div
                    className="px-4 py-5 shadow-2 flex flex-column md:flex-row md:align-items-center justify-content-between mb-3"
                    style={{
                        borderRadius: "1rem",
                        background: "linear-gradient(0deg, rgba(0, 123, 255, 0.5), rgba(0, 123, 255, 0.5)), linear-gradient(92.54deg, #1C80CF 47.88%, #FFFFFF 100.01%)"
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
                        <div className="card">
                            <DataView
                            className="w-full"
                            value={data}
                            paginator
                            rows={1}
                            layout="grid"
                            itemTemplate={itemTemplate}
                            ></DataView>
                        </div>
                    </div>

                    <div className="hidden lg:block lg:col-4">
                        <div className="ml-2">

                            {/* drafts section */}

                            <div className="card">
                                <div className="flex flex-column">
                                    <div className="flex align-items-center justify-content-between flex-wrap">
                                        <h5 className="text-800">Drafts</h5>
                                        <Button 
                                        label="View all"
                                        severity="info"
                                        outlined
                                        size="small"></Button>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-800 font-medium">No Title</p>
                                        <div className="flex justify-content-between text-600">
                                            <p className="">Modified 22 Nov</p>
                                            <p className="cursor-pointer">
                                                <i className="pi pi-pencil mr-1 underline"></i>
                                                Continue Editing
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* trending articles */}

                            <div className="card">
                                <div className="flex flex-column">
                                    <div className="flex align-items-center justify-content-between flex-wrap">
                                        <h5 className="text-800">Treding Articles</h5>
                                        <Dropdown
                                        placeholder="1 week"
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <p className="font-medium cursor-pointer">
                                            CodeArc Feed Architecture
                                        </p>
                                        <div className="flex justify-content-between text-600">
                                            <p className="">Florian Fuchs</p>
                                            <p className="">
                                                765 reads
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* bookmarks section */}

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
                                                                <p className="text-700">Become better at technical writing; accept CordeArc writing challenge for four weeks</p>
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
                                                                <p className="text-700">Become better at technical writing; accept CordeArc writing challenge for four weeks</p>
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
                                                                <p className="text-700">Become better at technical writing; accept CordeArc writing challenge for four weeks</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                        </TabView>
                                    </div>
                                </div>
                            </div>

                            {/* external links */}

                            <div className="card">
                                <div className="flex flex-column mb-2 border-bottom-1 surface-border">
                                    <p className="font-medium">Connect with us</p>
                                    <div className="flex justify-content-start flex-wrap gap-3">
                                        <Button icon="pi pi-facebook" rounded outlined aria-label="Filter" />
                                        <Button icon="pi pi-youtube" rounded outlined aria-label="Filter" />
                                        <Button icon="pi pi-linkedin" rounded outlined aria-label="Filter" />
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
