import { useState, useEffect } from "react";
import axios from 'axios';

const useFetch = (initialUrl = '', initialParams = {}) => {
    const [url, setUrl] = useState(initialUrl);
    const [params, setParams] = useState(initialParams);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(url, { params });
                setData(response.data)
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, params]);

    const doFetch = (url, params = {}) => {
        setUrl(url);
        setParams(params);
    }
    return { data, loading, error, doFetch };
}

export default useFetch;