import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UseApi from '../../components/hooks/useApi';
import "./cardDetails.css";
import ErrorPage from '../errorPage/errorPage';

function CardDetails() {

    const { category, id } = useParams();
    const { response, loading } = UseApi("https://yeddi24faktlar.vercel.app/data/api.json");
    const data = response?.data[category];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // category yoxlama;
    const validCategories = ["animals", "aphorism", "football", "landscape", "technology"];
    if (!validCategories.includes(category)) {
        return <ErrorPage />
    }

    // id yoxlama;
    const res = data?.some((info) => info.id == id);
    if (res !== true && res !== undefined) {
        return <ErrorPage />
    }
    
    return (
        <div className='card-details-container'>
            {data
                ?.filter(info => info.id == id)
                .map((info, i) => (
                    <div key={i} className="card-details">
                        {info.photo && <img className="card-photo" onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x250?text=No+Image'; }} src={info.photo} alt={info.title} />}
                        <h2 className="card-details-title">{info.title}</h2>
                        <p className="card-details-description">{info.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default CardDetails;