import { Skeleton } from "primereact/skeleton"

const Loader = () => {
    return (
        <div className="col-12">
            <div className="p-3">
                <div className="card">
                    <div className="flex flex-column py-2">
                        <div className="flex align-items-center justify-content-center">
                            <Skeleton className="flex text-center" width="30rem" height="2rem" />
                        </div>
                        <div className="flex align-items-center justify-content-center my-4">
                            <Skeleton className="flex text-center" width="45rem" height="1rem" />
                        </div>
                        <div className="flex flex-wrap justify-content-center gap-3 my-4">
                            <Skeleton className="inline-flex align-items-center py-2 px-3" width="5rem" height="3rem"/>
                            <Skeleton className="inline-flex align-items-center py-2 px-3" width="5rem" height="3rem"/>
                            <Skeleton className="inline-flex align-items-center py-2 px-3" width="5rem" height="3rem"/>
                        </div>
                        <div className="flex align-items-center justify-content-center">
                            <Skeleton className="h-15rem" width="40rem"/>
                        </div>
                        <div className="mt-4">
                            <Skeleton width="100%" className="mb-2"></Skeleton>
                            <Skeleton width="100%" className="mb-2"></Skeleton>
                            <Skeleton width="100%" className="mb-2"></Skeleton>
                            <Skeleton width="100%" className="mb-2"></Skeleton>
                            <Skeleton width="30%" className="mb-4"></Skeleton>
                            <Skeleton width="100%" className="mb-2"></Skeleton>
                            <Skeleton width="100%" className="mb-2"></Skeleton>
                            <Skeleton width="75%" className="mb-4"></Skeleton>
                            <Skeleton width="100%" className="mb-2"></Skeleton>
                            <Skeleton width="100%" className="mb-2"></Skeleton>
                            <Skeleton width="100%" className="mb-2"></Skeleton>
                            <Skeleton width="40%" className="mb-2"></Skeleton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader