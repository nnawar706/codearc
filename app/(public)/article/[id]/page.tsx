"use client"

import { useParams } from "next/navigation";
import { useFetch } from "../../../../demo/hooks/useFetch";
import { Image } from "primereact/image";
import Loader from "./loader";

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
                                }
                            `}</style>
                            <p className="text-3xl text-800 mb-2 mt-2 md:mt-10 text-center font-semibold">
                                {data?.title}
                            </p>
                            <p className="text-lg text-800 mt-2 md:mt-3 text-center font-semibold">
                                {data?.subtitle}
                            </p>
                            <div className="flex flex-wrap justify-content-center gap-3 my-4">
                                <span className="inline-flex align-items-center py-2 px-3 font-medium border-1 surface-border border-round">
                                <i className="pi pi-clock text-primary mr-2"></i>
                                <span className="text-900">2d ago</span>
                                </span>
                                <span className="inline-flex align-items-center py-2 px-3 font-medium border-1 surface-border border-round">
                                <i className="pi pi-comments text-primary mr-2"></i>
                                <span className="text-900">24</span>
                                </span>
                                <span className="inline-flex align-items-center py-2 px-3 font-medium border-1 surface-border border-round">
                                <i className="pi pi-eye text-primary mr-2"></i>
                                <span className="text-900">124</span>
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