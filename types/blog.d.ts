interface Blog {
    title: string;
    detail: string;
    photoUrl: string;
    _id?: string;
}

export interface CreateBlog extends Blog {
    userId: string;
}