import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../pages/home/home';
import Category from '../pages/category/category';
import CardDetails from '../pages/cardDetails/CardDetails.jsx';
import SavedList from '../pages/SavedList/SavedList.jsx';
import About from '../pages/about/about.jsx';
import ErrorPage from '../pages/errorPage/errorPage.jsx';

function RouterConfig() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/savelist" element={<SavedList />} />
            <Route path="/about" element={<About />} />
            <Route path="/:category/:id" element={<CardDetails />} />
            <Route path="/:category" element={<Category />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

export default RouterConfig;