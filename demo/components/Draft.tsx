'use client'

import React, { useRef, useState, useEffect } from 'react';
import { Button } from "primereact/button"
import { useRouter } from 'next/navigation';
import { FileUpload } from 'primereact/fileupload';
import { InputText } from 'primereact/inputtext';
import { Editor, EditorTextChangeEvent } from 'primereact/editor';
import { Toast } from 'primereact/toast';
import { Chips } from 'primereact/chips';

import callToast from '../../lib/helper';
import { useUploadThing } from '../../lib/uploadthing'
import { MultiSelect } from 'primereact/multiselect';
import { useFetch } from '../hooks/useFetch';
import { ITag } from '../../types/models';

const Draft = ({ id }: {id?: string}) => {
    const router = useRouter()
    const toast = useRef<Toast>(null)
    const coverImageRef = useRef<any>()
    const [loading, setLoading] = useState<boolean>(false)
    const [detail, setDetail] = useState<string | null>(null)
    const [coverImage, setCoverImage] = useState<File | null>(null)
    const [selectedTags, setSelectedTags] = useState<ITag[] | null>(null)
    const [status, setStatus] = useState<String | null>(null)
    const { startUpload } = useUploadThing('imageUploader')
    const {data: tags, loading: loader} = useFetch(`/api/tags/get_all`)

    let blogData = {
        title: "",
        subtitle: "",
        tags: [],
        detail: "",
        photoUrl: "",
    }

    const [data, setData] = useState(blogData)

    const handleChange = (e: React.ChangeEvent<any>) => {
        const { name, value } = e.target

        setData((prev: any) => ({
            ...prev,
            [name]: value
        }))
    }

    const createOrUpdateBlog = async () => {

        let error = validateData()

        if (error) 
        {
            callToast(toast, false, error)
            return
        }

        let imageUrl = 'no-cover'

        try {
            setLoading(true)

            if (coverImage) {
                const uploadedImage = await startUpload([coverImage])

                if (!uploadedImage) {
                    callToast(toast, false, 'Unable to upload cover image. please try again.');
                    return
                }

                imageUrl = uploadedImage[0].url
            }

            let payload: any = {
                title: data.title,
                subtitle: data.subtitle,
                detail: detail,
                photoUrl: imageUrl,
                tags: selectedTags?.map((tag: ITag) => {return tag._id}),
            }

            const res = await fetch(`/api/blogs/create`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })

            const resData = await res.json()

            if (res.status === 201) 
            {
                callToast(toast, true, resData?.message)

                router.push(`/blogs/draft/${resData?.data?.blogId}`)
            } else {
                callToast(toast, false, resData?.message);
            }
        } catch (error: any) {
            callToast(toast, "warn", error);
        } finally {
            setLoading(false)
        }
    }

    function validateData()
    {
        if (data.title === '')
        {
            return 'Title field is required.'
        }
        if (data.subtitle === '')
        {
            return 'Subtitle field is required.'
        }
        if (detail === '' || detail === null)
        {
            return 'Detail field is required.'
        }
        if (!selectedTags)
        {
            return 'Select at least one tag.'
        }
        if (!coverImage)
        {
            return 'Cover image is required.'
        }
        return null
    }

    const selectTagTemplate = (row: ITag) => {
        return (
            <p>{row.name}</p>
        )
    }

    useEffect(() => {
        const handleBeforeUnload = (event: any) => {
            const message = 'Are you sure you want to leave? Your changes may not be saved.'
            event.returnValue = message
            return message
        }

        window.addEventListener('beforeunload', handleBeforeUnload)

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload)
        }
    }, [])

    return (
        <div className="grid">
            <Toast ref={toast}></Toast>
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
                            <Button label="Save" severity="info" disabled={loading}
                            onClick={createOrUpdateBlog}
                            />
                        </div>
                    </div>

                    <div className="surface-section grid mt-4 grid-nogutter formgrid p-4 gap-3 md:surface-border md:border-1 border-round">
                        <div className="col-12">
                            <div className="p-inputgroup flex-1 h-4rem">
                                <div className="p-inputgroup-addon h-full w-5rem relative"
                                onClick={() => {
                                    return coverImageRef?.current.upload()
                                }}
                                >
                                    <FileUpload
                                        ref={coverImageRef}
                                        name="cover_image"
                                        onSelect={(e: { files: File[] }) => {
                                            const file = e.files[0]
                                            setCoverImage(file)
                                        }}
                                        customUpload={true}
                                        auto
                                        className={"opacity-0 h-full w-full absolute top-0"}
                                    />
                                    <div className="h-full w-full flex justify-content-center align-items-center cursor-pointer">
                                        {coverImage ? (
                                            <img className="h-full w-4rem"
                                            src={`${URL.createObjectURL(coverImage)}`}
                                            alt="Cover Image"/>
                                        ) : (
                                            <i className="pi pi-plus"></i>
                                        )}
                                    </div>
                                </div>
                                <InputText placeholder="Article Title..." name="title" value={data.title}
                                className="w-full pl-3 text-700 font-semibold"
                                onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="col-12">
                            <InputText placeholder="Add a Subtitle..." name="subtitle"
                                className="w-full text-800 font-normal" value={data.subtitle}
                                onChange={handleChange}/>
                        </div>
                        <div className="col-12">
                            <MultiSelect className="w-full p-fluid" placeholder="Add Tags" display="chip"
                            options={tags} optionLabel="name" itemTemplate={selectTagTemplate}
                            onChange={(e) => setSelectedTags(e.value)} value={selectedTags}/>
                        </div>
                        <div className="col-12 field">
                            <Editor
                            style={{ height: "500px" }}
                            value={detail || ''}
                            placeholder="Write your thoughts..."
                            onTextChange={(e: EditorTextChangeEvent) => setDetail(e.htmlValue)}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Draft;