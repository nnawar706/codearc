"use client"

import React from 'react'
import { Avatar } from 'primereact/avatar'
import moment from "moment"
import { Image } from 'primereact/image'
import { Timeline } from 'primereact/timeline'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'
import { useFetch } from '../../../demo/hooks/useFetch'
import { getBlog } from '../../../types/blog'

const page = () => {
    const { data, loading, totalData } = useFetch('/api/blogs/get_all?page=1')

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

    return (
        <div className="grid">
            <div className="col-10 col-offset-1">
                <div className="grid">
                    <div className="col-12 lg:col-4">
                        <div className="card">
                            <div className="flex flex-column justify-content-center align-items-center mb-3">
                                <Avatar image="/demo/images/login/avatar.png" size="xlarge" shape="circle"/>
                                <span className="mt-3 text-xl font-semibold text-800">Nafisa Nawer</span>
                                <span className="my-1 text-lg font-normal text-800">Software Engineer</span>
                                <span className="text-md font-normal text-600">Works at Selopia</span>
                            </div>
                            <div className="flex flex-column justify-content-center align-items-center 
                            border-top-1 surface-border pt-3 mb-3">
                                <p className="text-sm font-normal text-800 line-height-4 text-justify">
                                    Hi, I'm Nafisa. My coding adventure started with a burning curiosity to master the art of programming. 
                                    I've tinkered with various languages and frameworks, solving problems along the way. 
                                    Beyond sharpening my tech skills, this journey has shown me the incredible influence finely crafted software 
                                    can have on our everyday experiences. 
                                    Let's code and explore together! 🚀
                                </p>
                            </div>
                            <div className="flex flex-column justify-content-center align-items-center border-top-1 
                            surface-border pt-3 mb-3">
                                <p className="font-semibold text-md mb-3">Expertised In</p>
                                <div className="flex flex-row flex-wrap gap-2 justify-content-start">
                                    <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
                                    <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>
                                    <img src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white"/>
                                    <img src="https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white"/>
                                    <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"/>
                                </div>
                            </div>
                            <div className="flex flex-column justify-content-center align-items-center 
                            border-top-1 surface-border pt-3 mb-3">
                                <p className="font-semibold text-md mb-3"></p>
                                <Image width="100%" preview
                                src="https://github-readme-stats.vercel.app/api/top-langs/?username=nnawar706&layout=compact&theme=vision-friendly-dark"/>
                            </div>
                            <div className="flex flex-column justify-content-center align-items-center 
                            border-top-1 surface-border pt-3 mb-3">
                                <p className="font-semibold text-md mb-3">A Glimpse Towards My GitHub</p>
                                <Image width="100%" preview
                                src="http://github-readme-streak-stats.herokuapp.com/?user=nnawar706&theme=highcontrast&hide_border=false"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 lg:col-8">
                        <div className="grid">
                            <div className="col-12 md:col-6 lg:col-3">
                                <div className="card mb-0">
                                    <div className="flex justify-content-between mb-3">
                                        <div>
                                            <span className="block text-500 font-medium mb-2">Articles</span>
                                            <div className="text-800 font-medium text-md">5</div>
                                        </div>
                                        <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                            <i className="pi pi-file text-blue-500 text-lg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-6 lg:col-3">
                                <div className="card">
                                    <div className="flex justify-content-between mb-2">
                                        <div>
                                            <span className="block text-500 font-medium mb-3">Drafts</span>
                                            <div className="text-800 font-medium text-md">1</div>
                                        </div>
                                        <div className="flex align-items-center justify-content-center bg-yellow-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                            <i className="pi pi-copy text-yellow-500 text-lg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-6 lg:col-3">
                                <div className="card">
                                    <div className="flex justify-content-between mb-2">
                                        <div>
                                            <span className="block text-500 font-medium mb-3">Visits</span>
                                            <div className="text-800 font-medium text-md">152</div>
                                        </div>
                                        <div className="flex align-items-center justify-content-center bg-red-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                            <i className="pi pi-users text-red-500 text-lg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-6 lg:col-3">
                                <div className="card">
                                    <div className="flex justify-content-between mb-2">
                                        <div>
                                            <span className="block text-500 font-medium mb-3">Last Activity</span>
                                            <div className="text-800 font-medium text-md">15th Jan, 2024</div>
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
                                    <p className="font-italic">Coding is not just code, that is a live thing to serve everyone!</p>
                                    <p>- Ming Song</p>
                                </div>
                            </div>
                            <div className="col-12 md:col-6">
                                <div className="card h-full">
                                    <p className="text-800 text-lg font-semibold mb-3">
                                        Recent Articles
                                    </p>
                                    <Timeline
                                        value={data}
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
                                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-2">
                                            <div>
                                                <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Laravel</span>
                                                <div className="mt-1 text-600">PHP</div>
                                            </div>
                                            <div className="mt-2 md:mt-0 flex align-items-center">
                                                <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{ height: '8px' }}>
                                                    <div className="bg-blue-500 h-full" style={{ width: '90%' }} />
                                                </div>
                                                <span className="text-blue-500 ml-3 font-medium">%90</span>
                                            </div>
                                        </li>
                                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-2">
                                            <div>
                                                <span className="text-900 font-medium mr-2 mb-1 md:mb-0">MySQL</span>
                                                <div className="mt-1 text-600">Database</div>
                                            </div>
                                            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                                <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{ height: '8px' }}>
                                                    <div className="bg-cyan-500 h-full" style={{ width: '80%' }} />
                                                </div>
                                                <span className="text-cyan-500 ml-3 font-medium">%80</span>
                                            </div>
                                        </li>
                                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-2">
                                            <div>
                                                <span className="text-900 font-medium mr-2 mb-1 md:mb-0">FatFree (F3)</span>
                                                <div className="mt-1 text-600">PHP</div>
                                            </div>
                                            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                                <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{ height: '8px' }}>
                                                    <div className="bg-purple-500 h-full" style={{ width: '75%' }} />
                                                </div>
                                                <span className="text-purple-500 ml-3 font-medium">%75</span>
                                            </div>
                                        </li>
                                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-2">
                                            <div>
                                                <span className="text-900 font-medium mr-2 mb-1 md:mb-0">ReactJS</span>
                                                <div className="mt-1 text-600">JavaScript</div>
                                            </div>
                                            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                                <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{ height: '8px' }}>
                                                    <div className="bg-teal-500 h-full" style={{ width: '65%' }} />
                                                </div>
                                                <span className="text-teal-500 ml-3 font-medium">%65</span>
                                            </div>
                                        </li>
                                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-2">
                                            <div>
                                                <span className="text-900 font-medium mr-2 mb-1 md:mb-0">NextJS</span>
                                                <div className="mt-1 text-600">JavaScript</div>
                                            </div>
                                            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                                <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{ height: '8px' }}>
                                                    <div className="bg-green-500 h-full" style={{ width: '50%' }} />
                                                </div>
                                                <span className="text-green-500 ml-3 font-medium">%50</span>
                                            </div>
                                        </li>
                                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-2">
                                            <div>
                                                <span className="text-900 font-medium mr-2 mb-1 md:mb-0">ThreeJS</span>
                                                <div className="mt-1 text-600">JavaScript</div>
                                            </div>
                                            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                                <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{ height: '8px' }}>
                                                    <div className="bg-pink-500 h-full" style={{ width: '35%' }} />
                                                </div>
                                                <span className="text-pink-500 ml-3 font-medium">%35</span>
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

export default page
