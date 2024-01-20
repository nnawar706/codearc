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