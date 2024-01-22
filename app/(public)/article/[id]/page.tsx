"use client"

import { useParams } from "next/navigation";
import { useFetch } from "../../../../demo/hooks/useFetch";
import Loader from "../../../api/blogs/get/[id]/loader";

const Blog = () => {
    const { id } = useParams()
    const {data, loading} = useFetch(`/api/blogs/get/${id}`)
    
    return loading ? <Loader/> : (
        <div className="card">
            <div className="flex justify-content-between flex-column-reverse md:flex-row align-items-center">
                <div>
                    <div className="text-xl text-800 mb-4 mt-4 md:mt-0 text-center md:text-left font-semibold md:pr-4">
                        {data?.title}
                    </div>
                    <div className="flex flex-wrap justify-content-center md:justify-content-start gap-3">
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
                </div>
            </div>
        </div>
    )
}

export default Blog;