'use client';

import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import Link from 'next/link';
import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';
import { Avatar } from 'primereact/avatar';
import { useRouter } from 'next/navigation';

import Loader from './loader';
import { useFetch } from '../../demo/hooks/useFetch';
import { DataView } from 'primereact/dataview';
import { Chip } from 'primereact/chip';
import { ITag } from '../../types/models';
import { getBlog } from '../../types/blog';
import { openLink, stripHtmlTagsAndLimit } from '../../lib/utils';


const Feed = () => {
    const { push } = useRouter()

    const { data, loading, totalData } = useFetch('/api/blogs/get_all?page=1')

    const itemTemplate = (blog: getBlog) => {
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
                        <div className="flex flex-column justify-content-center py-2 z-index border-rounded">
                            <div>
                                <img 
                                src={blog.photoUrl} 
                                alt={blog.title.split(" ", 1).join("-")}
                                className="w-full border-round"/>
                            </div>
                            <div className="mt-2">
                                <h5 className="text-800 cursor-pointer hover:underline"
                                onClick={() => push(`/article/${blog._id}`)}>{blog.title}</h5>
                                <h6>{blog.subtitle}</h6>
                                <div className="flex gap-2">
                                    {blog.tags.map((tag: ITag, index: number) => {
                                    return <Chip key={index} label={tag.name}/>
                                })}
                                </div>
                                <p className="mt-2">
                                    {`${stripHtmlTagsAndLimit(blog.detail, 40)}...`}
                                </p>
                                <div className="flex flex-row gap-2 mt-4">
                                    <div className="flex align-items-center">
                                        <i className="pi pi-eye mr-1"></i>
                                        {blog.readers}
                                    </div>
                                </div>
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
                        <div className="text-blue-100 font-medium text-lg mt-2 mb-3">
                            Join me on my journey of endless lines of code, problem-solving, and innovation. 
                            Happy coding!
                        </div>
                        <div className="text-white font-medium text-3xl">Introducing CodeArc</div>
                    </div>
                    <div className="mt-4 mr-auto md:mt-0 md:mr-0">
                        <Link href="/about" className="p-button font-bold px-5 py-3 p-button-warning p-button-rounded p-button-raised">
                            Learn More
                        </Link>
                    </div>
                </div>

                <div className="grid">
                    <div className="col-12 lg:col-8">
                        <div className="card">
                            <DataView
                            dataKey='id'
                            className="w-full"
                            emptyMessage='No article found'
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

                            {/* <div className="card">
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
                            </div> */}

                            {/* trending articles */}

                            {/* <div className="card">
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
                            </div> */}

                            {/* bookmarks section */}

                            {/* <div className="card">
                                <div className="flex flex-column">
                                    <h5 className="text-800">Bookmarks</h5>
                                    <div className="flex justify-content-center">
                                        Nothing here yet 👋
                                    </div>
                                </div>
                            </div> */}

                            {/* external links */}

                            <div className="card">
                                <div className="flex flex-column border-bottom-1 surface-border">
                                    <div className="mb-2">
                                        <p className="font-medium">Connect with me</p>
                                        <div className="flex justify-content-start flex-wrap gap-3">
                                            <Button icon="pi pi-github" rounded outlined aria-label="Filter" 
                                            onClick={() => openLink('https://github.com/nnawar706')}/>
                                            <Button icon="pi pi-twitter" rounded outlined aria-label="Filter" 
                                            onClick={() => openLink('https://twitter.com/nnawar706')}/>
                                            <Button icon="pi pi-linkedin" rounded outlined aria-label="Filter" 
                                            onClick={() => openLink('https://www.linkedin.com/in/nafisa-nawer/')}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <p>Nafisa Nawer
                                    <br/>Software Engineer @ Selopia
                                    <br/>Email: nawernafisa8@gmail.com</p>
                                    <p className="text-500">If you like CodeArc, give it a star 
                                    <span className="text-blue-500 cursor-pointer" 
                                    onClick={() => openLink('https://github.com/nnawar706/codearc_next14')}>{" "}<u>here</u></span></p>
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
