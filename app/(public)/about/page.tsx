"use client"

import React, {useState, useEffect} from 'react'
import { Avatar } from 'primereact/avatar'
import moment from "moment"
import { Image } from 'primereact/image'
import { Timeline } from 'primereact/timeline'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'

import { useFetch } from '../../../demo/hooks/useFetch'
import { getBlog } from '../../../types/blog'
import {about, expertise, languages, quotes} from "../../../demo/constants/About";
import Loader from "./loader";

const About = () => {
    const [quote, setQuote] = useState({detail: "", author: ""})
    const { data: blogs, loading, totalData } = useFetch('/api/blogs/get_all?page=1')
    const { data: cardData } = useFetch('/api/about')

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    }, []);

    const blogHistoryDataContent = (row: getBlog) => {
        return (
            <>
                <div className="flex align-items-center justify-content-between">
                <p className="m-0">{row.title}</p>
                <h6
                    className={`m-0 ${
                    row.status._id == "659a7ea34d148227282d3fcb" ? "text-800" : "text-red-700"
                    }`}
                >
                </h6>
                </div>
                <span className="text-sm text-700">
                {moment(row.createdAt).format("lll")}
                </span>
            </>
        )
    }

    const blogHistoryMarker = (row: getBlog) => {
        return (
            <span className="flex w-2rem h-2rem align-items-center justify-content-center text-primary border-circle z-1 shadow-1">
                <i
                className={
                    row.status._id == "659a7ea34d148227282d3fcb"
                    ? "pi pi-clock"
                    : "pi pi-check-square"
                }
                />
            </span>
        )
    }

    return loading ? <Loader/> : (
        <div className="grid">
            <div className="col-10 col-offset-1">
                <div className="grid">
                    <div className="col-12 lg:col-4">
                        <div className="card">
                            <div className="flex flex-column justify-content-center align-items-center mb-3">
                                <Avatar image="/demo/images/login/avatar.png" size="xlarge" shape="circle"/>
                                <span className="mt-3 text-xl font-semibold text-800">{about.name}</span>
                                <span className="my-1 text-lg font-normal text-800">{about.designation}</span>
                                <span className="text-md font-normal text-600">Works at {about.workplace}</span>
                            </div>
                            <div className="flex flex-column justify-content-center align-items-center 
                            border-top-1 surface-border pt-3 mb-3">
                                <p className="text-sm font-normal text-800 line-height-4 text-justify">
                                    {about.detail}
                                </p>
                            </div>
                            <div className="flex flex-column justify-content-center align-items-center border-top-1 
                            surface-border pt-3 mb-3">
                                <p className="font-semibold text-md mb-3">Expertise In</p>
                                <div className="flex flex-row flex-wrap gap-2 justify-content-start">
                                    {expertise.map((item, index) =>
                                        <img key={index} src={item.source} alt={item.label}/>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-column justify-content-center align-items-center 
                            border-top-1 surface-border pt-3 mb-3">
                                <p className="font-semibold text-md mb-3"></p>
                                <Image width="100%" preview alt="github-top-langs"
                                src="https://github-readme-stats.vercel.app/api/top-langs/?username=nnawar706&layout=compact&theme=vision-friendly-dark"/>
                            </div>
                            <div className="flex flex-column justify-content-center align-items-center 
                            border-top-1 surface-border pt-3 mb-3">
                                <p className="font-semibold text-md mb-3">A Glimpse Towards My GitHub</p>
                                <Image width="100%" preview alt="github-stat"
                                src="http://github-readme-streak-stats.herokuapp.com/?user=nnawar706&theme=highcontrast&hide_border=false"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 lg:col-8">
                        <div className="grid">
                            <div className="col-12 lg:col-4">
                                <div className="card mb-0">
                                    <div className="flex justify-content-between mb-2">
                                        <div>
                                            <span className="block text-500 font-medium mb-3">Articles</span>
                                            <div className="text-800 font-medium text-md">{totalData}</div>
                                        </div>
                                        <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                            <i className="pi pi-file text-blue-500 text-lg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 lg:col-4">
                                <div className="card">
                                    <div className="flex justify-content-between mb-2">
                                        <div>
                                            <span className="block text-500 font-medium mb-3">Drafts</span>
                                            <div className="text-800 font-medium text-md">{cardData?.total_draft_count}</div>
                                        </div>
                                        <div className="flex align-items-center justify-content-center bg-yellow-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                            <i className="pi pi-copy text-yellow-500 text-lg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 lg:col-4">
                                <div className="card">
                                    <div className="flex justify-content-between mb-2">
                                        <div>
                                            <span className="block text-500 font-medium mb-3">Last Activity</span>
                                            <div className="text-800 font-medium text-md">{blogs && blogs.length != 0 ? moment(blogs[0].createdAt).format('ll') : 'Jan 20, 2024'}</div>
                                        </div>
                                        <div className="flex align-items-center justify-content-center bg-green-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                            <i className="pi pi-calendar text-green-500 text-lg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card">
                                    <p className="text-800 text-lg font-semibold mb-3">
                                        Today's Quote
                                    </p>
                                    {quote && <>
                                        <img src="/demo/images/about/quote-left.svg" width="12" className="mr-2"/>
                                        <span className="font-italic line-height-3">{quote.detail}</span>
                                        <img src="/demo/images/about/quote-right.svg" width="12" className="ml-2"/>
                                    </>}
                                    <p className="mt-2 font-medium">- {quote.author}</p>
                                </div>
                            </div>
                            <div className="col-12 md:col-6">
                                <div className="card h-full">
                                    <p className="text-800 text-lg font-semibold mb-3">
                                        Recent Articles
                                    </p>
                                    <Timeline
                                        value={blogs}
                                        marker={blogHistoryMarker}
                                        content={blogHistoryDataContent}
                                    />
                                </div>
                            </div>
                            <div className="col-12 md:col-6">
                                <div className="card">
                                    <p className="text-800 text-lg font-semibold mb-3">
                                        Languages & Tools
                                    </p>
                                    <ul className="list-none p-0 m-0">
                                        {languages.map((item) =>
                                            <li key={item.id} className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-2">
                                                <div>
                                                    <span className="text-900 font-medium mr-2 mb-1 md:mb-0">{item.title}</span>
                                                    <div className="mt-1 text-600">{item.lang}</div>
                                                </div>
                                                <div className="mt-2 md:mt-0 flex align-items-center">
                                                    <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{ height: '8px' }}>
                                                        <div className={`${item.bg} h-full`} style={{ width: `${item.percentage}%` }} />
                                                    </div>
                                                    <span className={`${item.txt} ml-3 font-medium`}>%{item.percentage}</span>
                                                </div>
                                            </li>
                                        )}
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

export default About
