import React from 'react'
import UseApi from '../../../components/hooks/useApi';
import InfoList from '../../../components/InfoList/InfoList';
import İnfoText from '../../../components/ınfoText/ınfoText.jsx';

function Landscape() {
    const { response, loading } = UseApi("http://localhost:3000/data/api.json");
    const data = response?.data["landscape"];
    return (
        <div className='info-container'>
            <İnfoText categoryText={"MƏNZƏRƏLƏR"} categoryApi={"landscape"} />
            <hr />
            <InfoList data={data?.slice(0, 6)} loading={loading} />
        </div>
    )
}

export default Landscape;