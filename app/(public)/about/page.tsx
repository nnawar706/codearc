'use client'

import React, { useContext } from 'react'
import { Avatar } from 'primereact/avatar'

import { LayoutContext } from '../../../layout/context/layoutcontext'
import { Image } from 'primereact/image'

const page = () => {
    const { layoutConfig, setLayoutConfig } = useContext(LayoutContext);
    return (
        <div className="grid">
            <div className="col-10 col-offset-1">
                <div className="grid">
                    <div className="col-12 lg:col-3">
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
                    <div className="col-12 lg:col-9">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }

export default page
