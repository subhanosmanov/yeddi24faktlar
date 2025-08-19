import React from 'react'
import { Navigate, useParams } from 'react-router-dom';
import UseApi from '../../components/hooks/useApi';
import InfoList from '../../components/InfoList/InfoList';
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';
import ErrorPage from '../errorPage/errorPage';

function Category() {
  const { category } = useParams();
  const { response, loading } = UseApi("http://localhost:3000/data/api.json");
  const data = response?.data[category];

  const location = useLocation();
  const { categoryText } = location.state || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
   // category yoxlama;
  const validCategories = ["animals", "aphorism", "football", "landscape", "technology"];
  if (!validCategories.includes(category)) {
    return <ErrorPage />
  }

  return (
    <div style={{ paddingTop: "80px" }}>
      <h2>{categoryText}</h2>
      <hr style={{ margin: "10px 0" }} />
      <InfoList data={data} loading={loading} category={category} />
    </div>
  )
}

export default Category;