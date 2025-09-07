import React, { useEffect, useState } from 'react';
import "./search.css";
import { useParams } from 'react-router-dom';
import UseApi from '../../components/hooks/useApi';
import InfoList from '../../components/InfoList/InfoList';

function Search() {
    const { inputText } = useParams();
    const [listData, setListData] = useState([]);

    const { response, loading } = UseApi("https://yeddi24faktlar.vercel.app/data/api.json");
    const data = response?.data;

    useEffect(() => {
        if (!data) return;

        const filtered = Object.values(data)
            .flat()
            .filter((item) =>
                item.title.toLowerCase().includes(inputText.toLowerCase())
            )
        setListData(filtered);
    }, [data, inputText]);

    return (
        <div className='search-container'>
            <h2 className='search-title'>
                “Sizin Axtarışınız”: {inputText}
            </h2>
            {listData.length == 0 ? 
            <h2 className='search-title search-not'>
                “Axtarışınıza uyğun heç bir nəticə tapılmadı”
            </h2>
            : <InfoList data={listData} loading={loading} />
            }        </div>
    )
}

export default Search;