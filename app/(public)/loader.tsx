import { Skeleton } from "primereact/skeleton"

const Loader = () => {
    return (
        <div className="grid">
            <div className="col-10 col-offset-1 lg:col-8 lg:col-offset-2">
                <div
                    className="card px-4 py-5 flex flex-column md:flex-row md:align-items-center justify-content-between"
                >
                    <Skeleton height="1rem" width="75%"/>
                    <div className="mt-4 mr-auto md:mt-0 md:mr-0">
                    <Skeleton height="2rem" width="6rem"/>
                    </div>
                </div>

                <div className="grid">
                    <div className="col-12 lg:col-8">
                        <div className="card">
                            <div className="flex align-items-center py-2 border-bottom-1 surface-border">
                                <Skeleton shape="circle" size="3rem" className="mr-2"></Skeleton>
                                <div className="text-800 line-height-3 font-medium">
                                    <Skeleton height="1rem" width="7rem" className="mb-2"></Skeleton>
                                    <Skeleton height="1rem" width="10rem"></Skeleton>
                                </div>
                            </div>
                            <div className="flex flex-column justify-content-center py-2 z-index border-rounded">
                                <div>
                                    <Skeleton height="20rem"/>
                                </div>
                                <div className="mt-2">
                                    <Skeleton width="70%" className="mb-2"/>
                                    <Skeleton width="85%" className="mb-4"/>
                                </div>
                                <Skeleton className="mb-2"/>
                                <Skeleton className="mb-2"/>
                                <Skeleton className="mb-2" width="35%"/>
                                <div className="flex flex-row mt-4">
                                    <div className="inline-flex align-items-center">
                                        <Skeleton width="4rem"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block lg:col-4">
                        <div className="ml-2">

                            {/* external links */}

                            <div className="card">
                                <div className="flex flex-column mb-2 border-bottom-1 surface-border">
                                    <Skeleton width="7rem" className="mb-3"/>
                                    <div className="flex justify-content-start flex-wrap gap-3 mb-3">
                                        <Skeleton shape="circle" size="2rem"/>
                                        <Skeleton shape="circle" size="2rem"/>
                                        <Skeleton shape="circle" size="2rem"/>
                                    </div>
                                </div>
                                <Skeleton width="13rem" className="mb-2 mt-3"/>
                                <Skeleton width="8rem" className="mb-2"/>
                                <Skeleton width="10rem" className="mb-2"/>
                                <Skeleton width="19rem" height="0.6rem" className="mb-2"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader