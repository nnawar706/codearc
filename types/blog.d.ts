interface blog {
    title?: string;
    detail?: string;
    photoUrl?: string;
    _id?: string;
}

export interface CreateBlog {
    userId: string;
    blog: blog;
}