import React from 'react';
import "./recommended.css";
import Wrapper from '../wrapper/wrapper';
import UseApi from '../hooks/useApi';

function Recommended() {
    const { response, loading } = UseApi("https://yeddi24faktlar.vercel.app/data/recommendedApi.json");
    const data = response?.data["technology"];

    return (
        <div className='recommended-container'>
            <Wrapper>
                <h2 className='recommended-title'>TÖVSİYYƏ OLUNANLAR</h2>
                {data?.map((recommendedInfo, index) => (
                    <div key={index}>
                        <div className='recommended-box'>
                            <img className='recommended-img'
                                alt={recommendedInfo.title}
                                onError={(e) => e.target.src = recommendedInfo.fallback}
                                src={recommendedInfo.photo} 
                                />
                            <div className="recomended-text">
                                <h3>{recommendedInfo.title}</h3>
                                <p>
                                    {recommendedInfo.description}
                                </p>
                            </div>
                        </div>
                        <hr />
                    </div>
                ))}
            </Wrapper>
        </div>
    )
}

export default Recommended;