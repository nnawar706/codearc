"use client"

import { useParams } from "next/navigation";
import { useFetch } from "../../../../demo/hooks/useFetch";
import { Image } from "primereact/image";
import Loader from "./loader";
import moment from "moment";
import { ITag } from "../../../../types/models";
import { Chip } from "primereact/chip";

const Blog = () => {
    const { id } = useParams()
    const {data, loading} = useFetch(`/api/blogs/get/${id}`)

    return loading ? <Loader/> : (
        <div className="col-12">
                <div className="p-3">
                <div className="card">
                    <div className="flex flex-column justify-content-center py-2 z-index border-rounded">
                        <div style={{}}>
                            <style jsx global>{`
                                pre {
                                    background-color: #f4f4f4;
                                    padding: 10px;
                                    border: 1px solid #ddd;
                                    overflow-x: auto;
                                    background-color: var(--surface-ground);
                                    margin: 0 0 1rem 0;
                                    padding: 1.5rem;
                                    border-radius: var(--border-radius);
                                    overflow: auto;
                                }
                            `}</style>
                            <p className="text-3xl text-800 mb-2 mt-2 md:mt-10 text-center font-semibold">
                                {data?.title}
                            </p>
                            <p className="text-lg text-800 mt-2 md:mt-3 text-center font-semibold">
                                {data?.subtitle}
                            </p>
                            <div className="flex flex-wrap justify-content-center gap-3 my-2">
                                <div className="flex gap-2">
                                    {data?.tags?.map((tag: ITag, index: number) => {
                                        return <Chip key={index} label={tag.name}/>
                                    })}
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-content-center gap-3 my-4">
                                <span className="inline-flex align-items-center py-2 px-3 font-medium">
                                    <i className="pi pi-clock text-primary mr-2"></i>
                                    <span className="text-700">{moment(data?.createdAt).format('ll')}</span>
                                </span>
                                <span className="inline-flex align-items-center py-2 px-3 font-medium">
                                    <i className="pi pi-eye text-primary mr-2"></i>
                                    <span className="text-700">{data?.readers}</span>
                                </span>
                            </div>
                            <div className="flex justify-content-center mb-4 overflow-hidden">
                                <Image src={data?.photoUrl} width={window.innerWidth < 768 ? "300" : "650"} preview/>
                            </div>
                            <div className="text-justify px-1 md:px-6" dangerouslySetInnerHTML={{ __html: data?.detail}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;