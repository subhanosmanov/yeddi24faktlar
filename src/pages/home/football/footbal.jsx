import React from 'react';
import UseApi from '../../../components/hooks/useApi';
import InfoList from '../../../components/InfoList/InfoList';
import İnfoText from '../../../components/ınfoText/ınfoText.jsx';

function Footbal() {
    const { response, loading } = UseApi("http://localhost:3000/data/api.json");
    const data = response?.data["football"];
    return (
        <div className='info-container'>
            <İnfoText categoryText={"FUTBOL"} categoryApi={"football"}/>
            <hr />
            <InfoList data={data?.slice(0,6)} loading={loading} />
        </div>
    )
}

export default Footbal;