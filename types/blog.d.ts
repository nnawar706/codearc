interface Blog {
    title: string;
    detail: string;
    subtitle: string;
    photoUrl: string;
    _id?: string;
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