import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UseApi(val) {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const message = async () => {
            setError(null);
            try {
                const result = await axios.get(val);
                setResponse(result);
            } catch {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        message();
    }, []);

    return { response, loading, error };
}

export default UseApi;