import React from 'react';
import "./ınfoText.css";
import { Link } from 'react-router-dom';

function İnfoText({ categoryText, categoryApi }) {
  return (
    <div className='info-text-container'>
      <div className="info-text-left">
        <h2>{categoryText}</h2>
      </div>
      <div className="info-text-right">
        <Link state={{ categoryText: categoryText }} className='flex-row' to={`/${categoryApi}`}>
          Hamısına Bax
        </Link>
      </div>
    </div>
  )
}

export default İnfoText;