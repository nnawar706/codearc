"use client"

import React, { useContext } from 'react';

import Draft from '../../../../demo/components/Draft';
import { LayoutContext } from '../../../../layout/context/layoutcontext';

const NewBlog = () => {
    const { token } = useContext(LayoutContext)

    console.log(token)
    return (
        <Draft />
    )
}

export default NewBlog;
