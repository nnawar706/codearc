'use client'

import React, { useRef, useState } from 'react';
import { Button } from "primereact/button"
import { useRouter } from 'next/navigation';
import { FileUpload } from 'primereact/fileupload';
import { InputText } from 'primereact/inputtext';
import { Editor } from 'primereact/editor';
import { Toast } from 'primereact/toast';
import callToast from '../../lib/helper';
import { useUploadThing } from '../../lib/uploadthing'

const Draft = ({ id, authId }: {id?: string; authId: any}) => {
    const router = useRouter()
    const toast = useRef<Toast>(null)
    const coverImageRef = useRef<any>()
    const [loading, setLoading] = useState<boolean>(false)
    const [title, setTitle] = useState<string>("")
    const [detail, setDetail] = useState<string>("")
    const [coverImage, setCoverImage] = useState<File | null>(null)
    const { startUpload } = useUploadThing('imageUploader')

    const createOrUpdateBlog = async () => {

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
                userId: authId,
                title: title,
                detail: detail,
                photoUrl: imageUrl
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

                // router.push(`/blogs/draft/${resData?.data?.blogId}`)
            } else {
                callToast(toast, false, resData?.message);
            }
        } catch (error: any) {
            callToast(toast, "warn", error?.message);
        } finally {
            setLoading(false)
        }
    }

    // useEffect(() => {
    //     const handleBeforeUnload = (event: any) => {
    //         const message = 'Are you sure you want to leave? Your changes may not be saved.'
    //         event.returnValue = message
    //         return message
    //     }

    //     window.addEventListener('beforeunload', handleBeforeUnload)

    //     return () => {
    //     window.removeEventListener('beforeunload', handleBeforeUnload)
    //     }
    // }, [])

    const handleSubmit = () => {
        // let response = createBlog()

        // console.log(response)
    }

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
                            <Button 
                            onClick={createOrUpdateBlog} 
                            icon="pi pi-refresh" rounded text severity="info" className="mr-1"/>
                            <Button className="mr-3" label="Preview" severity="info" outlined />
                            <Button label="Publish" severity="info" 
                            disabled={loading}
                            onClick={handleSubmit}/>
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
                                    <div className="h-full w-full flex justify-content-center align-items-center cursor-pointer">
                                        <i className="pi pi-plus"></i>
                                        {coverImageRef && <FileUpload
                                            ref={coverImageRef}
                                            name="cover_image"
                                            onSelect={(e: { files: File[] }) => {
                                                const file = e.files[0]
                                                setCoverImage(file)
                                            }}
                                            customUpload={true}
                                            auto
                                            className={"opacity-0 h-full w-full absolute top-0"}
                                        />}
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

export default Draft;