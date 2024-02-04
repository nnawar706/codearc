import qs from 'query-string'

import {RemoveUrlQueryParams, UrlQueryParams} from '../types/general'

export const convertFileToUrl = (file: File) => URL.createObjectURL(file)

export function formUrlQuery({ params, key, value }: UrlQueryParams) {
    const currentUrl = qs.parse(params)

    currentUrl[key] = value

    return qs.stringifyUrl({
        url: window.location.pathname,
        query: currentUrl,
    },{ skipNull: true })
}

export function removeKeysFromQuery({ params, keysToRemove }: RemoveUrlQueryParams) {
    const currentUrl = qs.parse(params)

    keysToRemove.forEach(key => {
        delete currentUrl[key]
    })

    return qs.stringifyUrl({
        url: window.location.pathname,
        query: currentUrl,
    },{ skipNull: true })
}

export const handleError = (error: unknown) => {
    console.error(error)
    throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
}

export const openLink = (link: string) => {
    window.open(link, "_blank");
}

export function stripHtmlTagsAndLimit(text: string, limit: number) {
    const strippedText = text.replace(/<[^>]*>/g, '');

    const words = strippedText.split(/\s+/);

    return words.slice(0, limit).join(' ');
}