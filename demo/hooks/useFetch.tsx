import { useEffect, useState, useMemo, useContext } from "react";
export const useFetch = (endpoint: string, dependencies: any[] = []) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [data, setData] = useState<any>([]);
    const [totalData, setTotalData] = useState<number>(0);
    const [notFound, setNotfound] = useState(false);

    const memoizedFetchData = useMemo(() => {
        return async () => {
        try {
            setLoading(true)
            
            const res = await fetch(`${endpoint}`, {
            method: "GET"
            })

            if (res.status === 204) {
                setNotfound(true);
                return;
            }
            
            const resData = await res.json();
            
            if (res.ok && res.status !== 204) {
                return resData;
            } else {
                return [];
            }
        } catch (e: any) {
            setError(e.message);
            return [];
        } finally {
            setLoading(false);
        }
        };
    }, [endpoint, ...dependencies]);

    useEffect(() => {
        const getData = async () => {
            const fetchData = memoizedFetchData();
            const processedData = await fetchData;
            
            if (processedData?.totalData) {
                setTotalData(processedData.totalData);
            }
            setData(processedData?.data);
        };

        getData().then();
    }, [memoizedFetchData]);

    return { loading, error, data, setData, totalData, notFound };
}