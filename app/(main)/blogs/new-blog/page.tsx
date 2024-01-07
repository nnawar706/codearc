"use client"

import React from 'react';
import { useAuth, useUser } from "@clerk/nextjs"

import Draft from '../../../../demo/components/Draft';

const NewBlog = () => {
    const { user } = useUser()
    const userId = user?.publicMetadata?.userId

    return (
        <Draft authId={userId}/>
    )
}

export default NewBlog;
