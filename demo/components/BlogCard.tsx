import { Avatar } from 'primereact/avatar';
import { Image } from 'primereact/image';

const BlogCard = () => {
    return (
        <div className="card">
            <div className="flex align-items-center py-2 border-bottom-1 surface-border">
                <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                    <Avatar image="/demo/images/login/avatar.png" size="large" shape="circle"/>
                </div>
                <span className="text-800 line-height-3 font-medium">
                    Nafisa Nawer<br /><span className="text-600">29th Oct, 2023</span>
                </span>
            </div>
            <div className="flex align-items-center py-2">
                <Image src={""}/>
            </div>
        </div>
    )
}

export default BlogCard