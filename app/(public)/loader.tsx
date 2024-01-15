import { Skeleton } from "primereact/skeleton"

const Loader = () => {
    return (
        <div className="grid">
            <div className="col-10 col-offset-1 lg:col-8 lg:col-offset-2">
                <div
                    className="card px-4 py-5 flex flex-column md:flex-row md:align-items-center justify-content-between"
                >
                    <Skeleton height="2rem" className="w-8"></Skeleton>
                    <div className="mt-4 mr-auto md:mt-0 md:mr-0">
                        {/* <Link href="https://blocks.primereact.org" className="p-button font-bold px-5 py-3 p-button-warning p-button-rounded p-button-raised">
                            Upgrade Now
                        </Link> */}
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
                        </div>
                    </div>

                    <div className="hidden lg:block lg:col-4">
                        <div className="ml-2">

                            {/* drafts section */}

                            <div className="card">
                                <div className="flex flex-column">
                                    <div className="flex align-items-center justify-content-between flex-wrap">
                                        <Skeleton height="1.5rem" width="6rem"/>
                                        <Skeleton width="4rem"/>
                                    </div>
                                    <div className="mt-4">
                                        <Skeleton width="15rem" className="mb-1"/>
                                        <div className="flex justify-content-between text-600">
                                            <Skeleton width="8rem" />
                                            <Skeleton width="5rem"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* trending articles */}

                            <div className="card">
                                <div className="flex flex-column">
                                    <div className="flex align-items-center justify-content-between flex-wrap">
                                        <Skeleton height="1.5rem" width="7rem"/>
                                        <Skeleton width="4rem"/>
                                    </div>
                                    <div className="mt-3">
                                        <Skeleton width="15rem" className="mb-1"/>
                                        <div className="flex justify-content-between text-600">
                                            <Skeleton width="8rem" />
                                            <Skeleton width="5rem"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* bookmarks section */}

                            <div className="card">
                                <div className="flex flex-column">
                                    <Skeleton height="1.5rem" width="7rem"/>
                                    <div className="flex justify-content-center">
                                        <Skeleton width="5rem"/>
                                    </div>
                                </div>
                            </div>

                            {/* challenges/badges section */}

                            <div className="card">
                                <div className="flex flex-column">
                                    <h5 className="text-800">Challenges</h5>
                                    <div>
                                        {/* <TabView>
                                            <TabPanel header="Up For Grabs">
                                                <div className="h-8rem">
                                                    <div className="flex">
                                                        <div className="w-4rem h-4rem bg-primary flex align-items-center justify-content-center my-2 mr-3">2</div>
                                                        <div className="w-15rem h-4rem">
                                                            <div className="">    
                                                                <span className="font-medium">#2Articles1Week</span>
                                                                <p className="text-700">Become better at technical writing; accept CordeArc's writing challenge for four weeks</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="my-3">
                                                    <div className="flex">
                                                        <div className="w-4rem h-4rem bg-primary flex align-items-center justify-content-center my-2 mr-3">2</div>
                                                        <div className="w-15rem h-4rem">
                                                            <div className="">    
                                                                <span className="font-medium">#2Articles1Week</span>
                                                                <p className="text-700">Become better at technical writing; accept CordeArc's writing challenge for four weeks</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel header="Completed">
                                                <div className="my-3">
                                                    <div className="flex">
                                                        <div className="w-4rem h-4rem bg-primary flex align-items-center justify-content-center my-2 mr-3">2</div>
                                                        <div className="w-15rem h-4rem">
                                                            <div className="">    
                                                                <span className="font-medium">#2Articles1Week</span>
                                                                <p className="text-700">Become better at technical writing; accept CordeArc's writing challenge for four weeks</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                        </TabView> */}
                                    </div>
                                </div>
                            </div>

                            {/* external links */}

                            <div className="card">
                                <div className="flex flex-column mb-2 border-bottom-1 surface-border">
                                    <p className="font-medium">Connect with us</p>
                                    <div className="flex justify-content-start flex-wrap gap-3">
                                        {/* <Button icon="pi pi-facebook" rounded outlined aria-label="Filter" />
                                        <Button icon="pi pi-youtube" rounded outlined aria-label="Filter" />
                                        <Button icon="pi pi-linkedin" rounded outlined aria-label="Filter" /> */}
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

export default Loader