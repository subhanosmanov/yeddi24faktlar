import React from 'react';
import UseApi from '../../../components/hooks/useApi';
import InfoList from '../../../components/InfoList/InfoList';
import İnfoText from '../../../components/ınfoText/ınfoText.jsx';


function Aphorism() {
    const { response, loading } = UseApi("https://yeddi24faktlar.vercel.app/data/api.json");
    const data = response?.data["aphorism"];

    return (
        <div className='info-container'>
            <İnfoText categoryText={"AFORİZMLƏR"} categoryApi={"aphorism"}/>
            <hr />
            <InfoList data={data?.slice(0,6)} loading={loading} />
        </div>
    )
}

export default Aphorism;