import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfoList from '../../components/InfoList/InfoList';


function SavedList() {

    const dispatch = useDispatch();
    const savedItems = useSelector((state) => state.saved.items);

    return (
        <div style={{ paddingTop: "80px", paddingBottom: "30px" }}>
            <h2>YADDA SAXLANILANLAR</h2>
            <hr style={{ margin: "10px 0" }} />
            {savedItems.length == 0
                ? <div style={{ textAlign: "center" }}>Yadda saxladığınız paylaşım yoxdur!</div>
                : <InfoList data={savedItems} />
            }
        </div>
    )
}

export default SavedList;