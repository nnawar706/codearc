import { IBlogStatus, ITag } from "./models";

interface Blog {
    title: string;
    detail: string;
    subtitle: string;
    photoUrl: string;
}

export interface CreateBlog extends Blog {
    tags: string[];
}

export interface getBlogsParams {
    title: null | string;
    tag: null | string;
    status: null | string;
    limit: number;
    page: number;
}

export interface getBlog extends Blog {
    _id: string;
    status: IBlogStatus;
    readers: number;
    tags: ITag[];
}