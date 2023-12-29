import { Document } from "mongoose";

export interface IUser extends Document {
    _id: string;
    authId: string;
    username: string;
    name: string;
    photoUrl?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface IChallenge extends Document {
    _id: string;
    title: string;
    detail: string;
    photoUrl: string;
}

export interface ITag extends Document {
    _id: string;
    name: string;
}

export interface IBlogStatus extends Document {
    _id: string;
    name: string;
}

export interface IBlog extends Document {
    _id: string;
    user: IUser;
    title: string;
    detail: string;
    readers: number;
    status: IBlogStatus;
    createdAt?: Date;
    updatedAt?: Date;
}