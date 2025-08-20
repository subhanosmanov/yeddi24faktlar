import React, { useEffect } from 'react';
import "./technology.css";
import UseApi from '../../../components/hooks/useApi';
import InfoList from '../../../components/InfoList/InfoList';
import İnfoText from '../../../components/ınfoText/ınfoText.jsx';

function Technology() {
    const { response, loading } = UseApi("https://yeddi24faktlar.vercel.app/data/api.json");
    const data = response?.data["technology"];

    return (
        <div className='info-container'>
            <İnfoText categoryApi={"technology"} categoryText={"TEXNOLOGİYA"} />
            <hr />
            <InfoList data={data?.slice(0, 6)} loading={loading} />
        </div>
    )
}

export default Technology;