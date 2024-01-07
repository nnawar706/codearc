'use client'

import React, { useRef, useState, useEffect } from 'react';
import { Button } from "primereact/button"
import { useRouter } from 'next/navigation';
import { FileUpload } from 'primereact/fileupload';
import { InputText } from 'primereact/inputtext';
import { Editor } from 'primereact/editor';

const NewBlog = () => {
    const router = useRouter()
    const coverImageRef = useRef<any>()
    const [title, setTitle] = useState<string>("")
    const [detail, setDetail] = useState<string>("")

    const openFileSelector = () => {
        return coverImageRef?.current.upload()
    }

    const handleCoverImage = () => {}

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <div className="flex justify-content-between flex-wrap">
                        <div className="flex align-items-center px-4 md:px-0 border-top-1 surface-border md:border-none pt-4 md:pt-0">
                            <Button
                            type="button"
                            icon="pi pi-chevron-left"
                            outlined
                            severity="secondary"
                            className="surface-border text-800 w-3rem h-3rem mr-3"
                            onClick={() => {router.back()}}
                            ></Button>
                            <span className="block text-800 font-bold text-xl">
                                New Article
                            </span>
                        </div>
                        <div>
                            <Button className="mr-3" label="Preview" severity="info" outlined />
                            <Button label="Publish" severity="info" />
                        </div>
                    </div>

                    <div className="surface-section grid mt-4 grid-nogutter formgrid p-4 gap-3 md:surface-border md:border-1 border-round">
                        <div className="col-12">
                            <div className="p-inputgroup flex-1 h-4rem">
                                <div className="p-inputgroup-addon h-full w-5rem relative"
                                onClick={openFileSelector}>
                                    <FileUpload
                                    ref={coverImageRef}
                                    name="cover_image"
                                    onSelect={handleCoverImage}
                                    customUpload={true}
                                    auto
                                    className="opacity-0 h-full w-full absolute top-0"/>
                                    <div className="h-full w-full flex justify-content-center align-items-center">
                                        <i className="pi pi-plus"></i>
                                    </div>
                                </div>
                                <InputText placeholder="Article Title..."
                                className="w-full pl-3 text-900 font-semibold"
                                onChange={(e) => setTitle(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-12 field">
                            <Editor
                            style={{ height: "500px" }}
                            value={detail}
                            placeholder={"Write your thoughts..."}
                            onTextChange={(e) => setDetail(e.textValue)}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewBlog;
