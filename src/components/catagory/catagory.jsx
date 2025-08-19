import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


function Catagory({ data5, category }) {
    const navigate = useNavigate();

    const createStaticHandler = ()=>{
          console.log(data5);
          console.log(category);
          navigate(`/${category}/${data5.id}`);
    };

    return (
        <div style={{cursor:"pointer"}} onClick={createStaticHandler}>
            {data5.name}
        </div>
    )
}

export default Catagory;